import React, { useState } from 'react';
import './Comparte.css';
import Footer from './Footer';

const Comparte = () => {
  const [ingredients, setIngredients] = useState([{ cantidad: '', unidad: '', ingrediente: '' }]);
  const [recipe, setRecipe] = useState({ nombre: '', tiempo: '', unidadTiempo: 'min', tipoComida: 'Entrada' });
  const [filteredIngredientes, setFilteredIngredientes] = useState([]);

  const handleAddRow = () => {
    setIngredients([...ingredients, { cantidad: '', unidad: '', ingrediente: '' }]);
  };

  const handleInputChange = (index, e) => {
    const values = [...ingredients];
    values[index][e.target.name] = e.target.value;
    setIngredients(values);

    if (e.target.name === 'ingrediente') {
      fetchIngredientes(e.target.value);
    }
  };

  const handleRecipeChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const fetchIngredientes = async (query) => {
    if (!query) {
      setFilteredIngredientes([]);
      return;
    }

    try {
      const response = await fetch(`/api/ingredients/search?q=${query}`);
      const data = await response.json();
      const ingredients = data.map(ingredient => ingredient.tipo_ing_nom);
      setFilteredIngredientes(ingredients);
    } catch (error) {
      console.error('Error al obtener los ingredientes:', error);
    }
  };

  const handleAutocompleteClick = (index, value) => {
    const values = [...ingredients];
    values[index].ingrediente = value;
    setIngredients(values);
    setFilteredIngredientes([]);
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
                  <th>Categoria</th>
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
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </td>
                    <td>
                      <select
                        name="unidad"
                        value={ingredient.unidad}
                        onChange={(e) => handleInputChange(index, e)}
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
                    <td style={{ position: 'relative' }}>
                      <input
                        type="text"
                        name="ingrediente"
                        value={ingredient.ingrediente}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                      {ingredients[index].ingrediente && filteredIngredientes.length > 0 && (
                        <ul className="autocomplete-list">
                          {filteredIngredientes.map((ingrediente, i) => (
                            <li key={i} onClick={() => handleAutocompleteClick(index, ingrediente)}>
                              {ingrediente}
                            </li>
                          ))}
                        </ul>
                      )}
                    </td>
                    <td>
                      <select
                        name="categoria"
                        value={ingredient.categoria}
                        onChange={(e) => handleInputChange(index, e)}
                      >
                        <option value="">Seleccionar</option>
                        <option value="proteinas">Proteínas</option>
                        <option value="carbohidratos">Carbohidratos</option>
                        <option value="grasas">Grasas</option>
                      </select>
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
