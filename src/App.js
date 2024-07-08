// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Block from './Block';
import Recetas from './Recetas';
import Consejos from './Consejos';
import Cocino from './Cocino';
import Comparte from './Comparte';
import Login from './Login';
import Register from './Register';
import Footer from './Footer'; 
import recetaImg from './img/btnRecetas.jpg';
import consejoImg from './img/btnConsejos.jpg';
import cocinoImg from './img/btnCocino.jpg';
import comparteImg from './img/btnComparte.jpg';
import RecetaDetalles from './RecetaDetalles';

// Componente para la página principal


function MainPage() {
    
  return (
    <div className="main">
      <div className="header">Usuario</div>
      <div className="blocks">
          <Block image={recetaImg} link="/recetas" backgroundImage={recetaImg} />
          <Block type="button" image={consejoImg} link="/consejos" backgroundImage={consejoImg} />
          <Block image={cocinoImg} link="/cocino" backgroundImage={cocinoImg} />
          <Block image={comparteImg} link="/comparte" backgroundImage={comparteImg} />
      </div>
      <Routes>
        <Route path="/recetas" element={<Recetas />} />
        <Route path="/consejos" element={<Consejos />} />
        <Route path="/cocino" element={<Cocino />} />
        <Route path="/comparte" element={<Comparte />} />
      </Routes>
      <Footer />
    </div>
  );
}

// Componente principal de la aplicación que maneja las rutas
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/Consejos" element={<Consejos />} />
        <Route path="/Cocino" element={<Cocino />} />
        <Route path="/Comparte" element={<Comparte />} />
        <Route path="/recetas" element={<Recetas />} />
        <Route path="/recetas/:id" element={<RecetaDetalles />} />        
      </Routes>
    </Router>
  );
}

export default App;

