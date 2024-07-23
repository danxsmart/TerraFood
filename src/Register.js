import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [text, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usu_nombre: text, usu_mail: email, usu_contra: password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Usuario registrado con éxito');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      alert('Hubo un problema al registrar el usuario');
    }
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
