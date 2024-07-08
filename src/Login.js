import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import './Login.css';
import fondo from './img/fondo2.png';

function Login() {
  const [text, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ usuario: '', correo: '' });

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

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRecoverSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el correo de recuperación
    console.log(formData);
    handleClose();
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
            <label>Usuario:</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="@usuario"
              required
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
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
              <label>Usuario</label>
              <input
                type="text"
                name="usuario"
                value={formData.usuario}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <p className="text-center">o</p>
            <div className="form-group">
              <label>Correo</label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                className="form-control"
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
