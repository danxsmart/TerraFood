// src/RecetaDetalles.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './RecetaDetalles.css';

const recetaDetalles = {
  1: {
    nombre: 'Receta 1',
    foto: '/path-to-recipe-photo.jpg',
    ingredientes: 'Ingredientes de la receta 1',
    elaboracion: 'Elaboración de la receta 1',
    dificultad: 'Fácil',
    tipoComida: 'Plato Principal',
    tiempoPreparacion: '30 min',
  },
  // Añadir más detalles de recetas aquí
};

const RecetaDetalles = () => {
  const { id } = useParams();
  const receta = recetaDetalles[id];

  if (!receta) {
    return <div>Receta no encontrada</div>;
  }

  return (
    <div className="receta-detalles-container">
      <div className="header">
        <div className="recipe-name">{receta.nombre}</div>
      </div>
      <div className="recipe-content">
        <img src={receta.foto} alt={receta.nombre} className="recipe-photo" />
        <div className="recipe-info">
          <p><strong>Ingredientes:</strong> {receta.ingredientes}</p>
          <p><strong>Elaboración:</strong> {receta.elaboracion}</p>
          <p><strong>Dificultad:</strong> {receta.dificultad}</p>
          <p><strong>Tipo de comida:</strong> {receta.tipoComida}</p>
          <p><strong>Tiempo de preparación:</strong> {receta.tiempoPreparacion}</p>
        </div>
      </div>
    </div>
  );
};

export default RecetaDetalles;
