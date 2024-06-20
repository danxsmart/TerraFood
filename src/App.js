// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Block from './Block';
import Recetas from './Recetas';
import Consejos from './Consejos';
import Cocino from './Cocino';
import Comparte from './Comparte';
import recetaImg from './img/btnRecetas.png';

function App() {
  return (
    <Router>
      <div className="main">
        <div className="header">Usuario</div>
        <div className="blocks">
          <Block title="RECETAS" image="terrafood\src\img\btnRecetas.png" link="/recetas" backgroundImage={recetaImg} />
          <Block title="CONSEJOS Y TRUCOS" image="consejos.png" link="/consejos" />
          <Block title="QUE COCINO HOY" image="cocino.png" link="/cocino" />
          <Block title="COMPARTE TU RECETA" image="comparte.png" link="/comparte" />
        </div>
        <Routes>
          <Route path="/recetas" element={<Recetas />} />
          <Route path="/consejos" element={<Consejos />} />
          <Route path="/cocino" element={<Cocino />} />
          <Route path="/comparte" element={<Comparte />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
