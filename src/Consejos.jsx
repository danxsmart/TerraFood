// src/Consejos.jsx
import React from 'react';
import './Consejos.css';
import Footer from './Footer'; 

const Consejos = () => {
  return (
    <div className="consejos-container">
      <div className="header">
        <h2>Blog de consejos y trucos</h2>
      </div>
      <div className="content">
        <div className="consejos-grid">
          {/* Repetir este bloque para cada consejo */}
          <div className="consejo-card">
            <h2>Título</h2>
            <p>Usuario</p>
            <p>Consejo / Truco</p>
          </div>
          <div className="consejo-card">
            <h2>Título</h2>
            <p>Usuario</p>
            <p>Consejo / Truco</p>
          </div>
          {/* ...añadir más bloques según sea necesario */}
        </div>
        <div className="input-section">
          <h3>Cuéntanos el tuyo...</h3>
          <input type="text" placeholder="Título" className="input-field" />
          <textarea placeholder="Consejo / Truco" className="textarea-field"></textarea>
          <button className="submit-button">Compartir</button>
        </div>
        <Footer />
      </div>
      
    </div>
  );
};

export default Consejos;
