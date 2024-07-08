import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import fondo from './img/fondo2.png';

function Login() {
  const [text, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === 'admin' && password === '1234') {
      console.log('Inicio de sesión exitoso');
      navigate('/main');
    } else {
      console.log('Credenciales incorrectas');
      alert('Email o contraseña incorrectos');
    }
  };

  const RegistroClick = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={fondo}  />
      </div>
      <div className="login-right">
       
        <form onSubmit={handleSubmit}>
          <div className='blq1'>
            <h2>BIENVENIDO!</h2>
          </div>
          <div>
            <label>Usuario:</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder ="@usuario"
              required
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder ="**************"
              required
            />
          </div>
          <div className='blq2'>
            <h5>Olvide la contraseña</h5>
          </div>
          
          <button type="submit">Login</button>
          <button type="button" onClick={RegistroClick}>Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
