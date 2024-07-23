import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import './Login.css';
import fondo from './img/fondo2.png';

function Login() {
  const [usu_mail, setEmail] = useState(''); // Estado para el email
  const [usu_contra, setPassword] = useState(''); // Estado para la contraseña
  const navigate = useNavigate(); // Hook para la navegación
  const [showModal, setShowModal] = useState(false); // Estado para el modal de recuperación de contraseña
  const [formData, setFormData] = useState({ correo: '' }); // Estado para los datos del formulario de recuperación

  // Maneja el envío del formulario de inicio de sesión
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    try {
      // Realizar la solicitud al backend
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usu_mail, usu_contra }),
      });
      const data = await response.json(); // Parsear la respuesta JSON
  
      if (response.ok) {
        console.log('Inicio de sesión exitoso');
        localStorage.setItem('token', data.token); // Almacenar el token en el almacenamiento local
        navigate('/main'); // Navegar a la página principal
      } else {
        console.log('Credenciales incorrectas');
        alert('Email o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  const RegistroClick = () => {
    navigate('/register'); // Navegar a la página de registro
  };

  const handleShow = () => setShowModal(true); // Mostrar el modal de recuperación
  const handleClose = () => setShowModal(false); // Cerrar el modal de recuperación

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Actualizar el estado del formulario de recuperación
  };

  // Maneja el envío del formulario de recuperación de contraseña
  const handleRecoverSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/users/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usu_mail: formData.correo }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Correo de restablecimiento de contraseña enviado');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error en la solicitud de restablecimiento de contraseña:', error);
      alert('Hubo un problema al solicitar el restablecimiento de la contraseña');
    }

    handleClose(); // Cerrar el modal después de enviar la solicitud
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={fondo} alt="fondo" />
      </div>
      <div className="login-right">
        <form onSubmit={handleSubmit}>
          <div className="blq1">
            <h2>BIENVENIDO!</h2>
          </div>
          <div>
            <label>Correo:</label>
            <input
              type="email"
              value={usu_mail}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@correo.com"
              required
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              value={usu_contra}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="**************"
              required
            />
          </div>
          <div className="blq2">
            <h5 onClick={handleShow} className="forgot-password">
              ¿Olvidaste la contraseña?
            </h5>
          </div>
          <button type="submit">Login</button>
          <button type="button" onClick={RegistroClick}>Registrarse</button>
        </form>
      </div>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title>Recuperar Contraseña</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-custom">
          <form onSubmit={handleRecoverSubmit}>
            <div className="form-group">
              <label>Correo</label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <Button variant="primary" type="submit" className="mt-3 custom-button">
              Recuperar
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer className="modal-footer-custom">
          <p className="text-muted">La nueva contraseña le llegará por correo</p>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Login;
