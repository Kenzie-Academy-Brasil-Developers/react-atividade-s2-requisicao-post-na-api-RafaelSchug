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
        .then(() => setStatus('Requisição completa!'))
        .catch(() => setStatus('Requisição falhou!'))
    }

    return (
        <Container>
            <form action="">
                <input type="text" onChange={e=> setInput({...input, username: e.target.value})}/>
                <input type="password" onChange={e=> setInput({...input, password: e.target.value})} />
                <button onClick={e => handleSubmit(e, input.username, input.password)}>Login</button>
            </form>
        </Container>
    )
}