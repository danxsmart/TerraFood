// src/Recetas.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Recetas.css';

const recetas = [
  { id: 1, nombre: 'Receta 1', dificultad: 'Fácil', tipo: 'Entrada', tiempo: '30 min' },
  { id: 2, nombre: 'Receta 2', dificultad: 'Media', tipo: 'Plato Principal', tiempo: '1 hr' },
  { id: 3, nombre: 'Receta 3', dificultad: 'Difícil', tipo: 'Postre', tiempo: '45 min' },
  { id: 4, nombre: 'Receta 4', dificultad: 'Fácil', tipo: 'Entrada', tiempo: '20 min' },
  { id: 5, nombre: 'Receta 5', dificultad: 'Media', tipo: 'Plato Principal', tiempo: '2 hrs' },
  { id: 6, nombre: 'Receta 6', dificultad: 'Difícil', tipo: 'Postre', tiempo: '1 hr' },
];

const Recetas = () => {
  const navigate = useNavigate();
  const [filtros, setFiltros] = useState({ tiempo: '', dificultad: '', tipo: '' });

  const handleRecipeClick = (id) => {
    navigate(`/recetas/${id}`);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFiltros({ ...filtros, [name]: value });
  };

  const tiempoEnMinutos = (tiempo) => {
    const [cantidad, unidad] = tiempo.split(' ');
    if (unidad === 'min') return parseInt(cantidad, 10);
    if (unidad === 'hr' || unidad === 'hrs') return parseInt(cantidad, 10) * 60;
    return 0;
  };

  const recetasFiltradas = recetas.filter((receta) => {
    const recetaTiempoMin = tiempoEnMinutos(receta.tiempo);

    const tiempoValido =
      filtros.tiempo === '' ||
      (filtros.tiempo === '-30min' && recetaTiempoMin <= 30) ||
      (filtros.tiempo === '-60min' && recetaTiempoMin <= 60) ||
      (filtros.tiempo === '-90min' && recetaTiempoMin <= 90) ||
      (filtros.tiempo === '+90min' && recetaTiempoMin > 90);

    return (
      tiempoValido &&
      (filtros.dificultad === '' || receta.dificultad === filtros.dificultad) &&
      (filtros.tipo === '' || receta.tipo === filtros.tipo)
    );
  });

  return (
    <div className="recetas-container">
      <div className="header">
        <div className="filter-bar">
          <select name="tiempo" onChange={handleFilterChange} value={filtros.tiempo}>
            <option value="">Tiempo de preparación</option>
            <option value="-30min">- 30 min</option>
            <option value="-60min">- 60 min</option>
            <option value="-90min">- 90 min</option>
            <option value="+90min">+ 90 min</option>
          </select>
          <select name="dificultad" onChange={handleFilterChange} value={filtros.dificultad}>
            <option value="">Nivel de Dificultad</option>
            <option value="Fácil">Fácil</option>
            <option value="Media">Media</option>
            <option value="Difícil">Difícil</option>
          </select>
          <select name="tipo" onChange={handleFilterChange} value={filtros.tipo}>
            <option value="">Tipo de plato</option>
            <option value="Entrada">Entrada</option>
            <option value="Plato Principal">Plato Principal</option>
            <option value="Postre">Postre</option>
          </select>
        </div>
      </div>
      <div className="recetas-grid">
        {recetasFiltradas.map((receta) => (
          <div
            key={receta.id}
            className="receta-card"
            onClick={() => handleRecipeClick(receta.id)}
          >
            <h3>{receta.nombre}</h3>
            <p><strong>Dificultad:</strong> {receta.dificultad}</p>
            <p><strong>Tipo:</strong> {receta.tipo}</p>
            <p><strong>Tiempo:</strong> {receta.tiempo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recetas;
