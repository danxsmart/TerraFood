// src/Comparte.jsx
import React, { useState } from 'react';
import './Comparte.css';
import Footer from './Footer';

const Comparte = () => {
  const [ingredients, setIngredients] = useState([{ cantidad: '', unidad: '', ingrediente: '' }]);
  const [recipe, setRecipe] = useState({ nombre: '', tiempo: '', unidadTiempo: 'min', tipoComida: 'Entrada' });

  const handleAddRow = () => {
    setIngredients([...ingredients, { cantidad: '', unidad: '', ingrediente: '' }]);
  };

  const handleInputChange = (index, event) => {
    const values = [...ingredients];
    values[index][event.target.name] = event.target.value;
    setIngredients(values);
  };

  const handleRecipeChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  return (
    <div className="comparte-container">
      <div className="header">
        <h1>Comparte tu Receta</h1>
      </div>
      <div className="content">
        <div className="main-content">
          <div className="left-panel">
            <h3>INGREDIENTES</h3>
            <table>
              <thead>
                <tr>
                  <th>Cantidad</th>
                  <th>Unidad medida</th>
                  <th>Ingredientes</th>
                </tr>
              </thead>
              <tbody>
                {ingredients.map((ingredient, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        name="cantidad"
                        value={ingredient.cantidad}
                        onChange={(event) => handleInputChange(index, event)}
                      />
                    </td>
                    <td>
                      <select
                        name="unidad"
                        value={ingredient.unidad}
                        onChange={(event) => handleInputChange(index, event)}
                      >
                        <option value="">Seleccionar</option>
                        <option value="ml">Mililitros (ml)</option>
                        <option value="L">Litros (L)</option>
                        <option value="cdta">Cucharaditas (cdta)</option>
                        <option value="cda">Cucharadas (cda)</option>
                        <option value="tazas">Tazas (tazas)</option>
                        <option value="g">Gramos (g)</option>
                        <option value="kg">Kilogramos (kg)</option>
                        <option value="oz">Onzas (oz)</option>
                        <option value="lb">Libras (lb)</option>
                        <option value="piezas">Piezas (piezas)</option>
                        <option value="paquetes">Paquetes (paquetes)</option>
                        <option value="latas">Latas (latas)</option>
                        <option value="ramas">Ramas (ramas)</option>
                        <option value="dientes">Dientes (dientes)</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="ingrediente"
                        value={ingredient.ingrediente}
                        onChange={(event) => handleInputChange(index, event)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="add-row-button" onClick={handleAddRow}>+</button>
          </div>
          <div className="right-panel">
            <h3>RECETA</h3>
            <div className="form-group">
              <label>Nombre:</label>
              <input
                type="text"
                name="nombre"
                value={recipe.nombre}
                onChange={handleRecipeChange}
              />
            </div>
            <div className="form-group">
              <label>Tiempo:</label>
              <input
                type="text"
                name="tiempo"
                value={recipe.tiempo}
                onChange={handleRecipeChange}
              />
              <select
                name="unidadTiempo"
                value={recipe.unidadTiempo}
                onChange={handleRecipeChange}
              >
                <option value="min">min</option>
                <option value="hs">hs</option>
              </select>
            </div>
            <div className="form-group">
              <label>Tipo:</label>
              <select
                name="tipoComida"
                value={recipe.tipoComida}
                onChange={handleRecipeChange}
              >
                <option value="Entrada">Entrada</option>
                <option value="Plato Principal">Plato Principal</option>
                <option value="Postre">Postre</option>
              </select>
            </div>
            <h4>MODO DE PREPARACION</h4>
            <textarea
              className="preparation-textarea"
              placeholder="Forma de redacción"
              name="preparacion"
              value={recipe.preparacion}
              onChange={handleRecipeChange}
            />
            <button className="send-button">Enviar</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Comparte;
