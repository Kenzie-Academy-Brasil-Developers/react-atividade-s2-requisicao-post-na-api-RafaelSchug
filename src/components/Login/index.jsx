import axios from 'axios';
import { useState } from 'react';
import {Container} from './style';

export const Login = ({setStatus}) => {

    const [input, setInput] = useState({username:"", password:""});

    const handleSubmit = (event, inputName, inputPassword) => {
        event.preventDefault();

        const formData = {
            username:inputName,
            password: inputPassword
        };

        axios.post("https://kenzieshop.herokuapp.com/sessions/", formData)
        .then(() => setStatus({color: '#1ea31e', msg:'Requisição completa :)'}))
        .catch(() => setStatus({color: '#c81a1a', msg:'Requisição falhou :('}))
    }

    return (
        <Container>
            <h2>Login</h2>
            <form action="">
                <input type="text" placeholder="Nome de usuário" onChange={e=> setInput({...input, username: e.target.value})}/>
                <input type="password" placeholder="Senha" autoComplete='no' onChange={e=> setInput({...input, password: e.target.value})} />
                <button onClick={e => handleSubmit(e, input.username, input.password)}>Login</button>
            </form>
        </Container>
    )
}