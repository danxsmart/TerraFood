// src/Register.js
import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [text, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Usuario:', text); // Cambiado a log de Usuario
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (

    <div className="reg-container">
      <div className="header">Registro de Usuario</div>
      <div className="reg-centro">
        <form onSubmit={handleSubmit}>
          <div className='blq1'>
            <h2>REGISTRO</h2>
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
            <label>Correo:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder ="ejemplo@correo.com"
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
          <div>
            <label>Confirmar contraseña:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder ="**************"
              required
            />
          </div>              
          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
}


export default Register;
