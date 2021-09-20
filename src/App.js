import './App.css';
import {Login} from './components/Login'
import {Display} from './components/Display'
import { useState } from 'react';

function App() {

  const [status, setStatus] = useState('');

  return (
    <div className="App">
      <Login setStatus={setStatus}/>
      <Display status={status}/>
    </div>
  );
}

export default App;
