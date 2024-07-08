// src/Cocino.jsx
import React from 'react';
import './Cocino.css';
import Footer from './Footer';

const Cocino = () => {
  return (
    <div className="cocino-container">
      <div className="header">
        <h1>Que cocino hoy?</h1>
      </div>
      <div className="content">
        <div className="main-content">
          <div className="left-panel">
          <div className="combo">
              <div className="ingredient-category">
                <h3>Tiempo de Plato</h3>
                <select name="tiempo" className="dropdown">
                  <option value="entrada">Entrada</option>
                  <option value="principal">Plato Principal</option>
                  <option value="postre">Postre</option>
                </select>
                <h3>Tiempo de Preparacion</h3>
                <select name="preparacion" className="dropdown">
                  <option value="-30min">- 30 minutos</option>
                  <option value="-60min">- 60 minutos</option>
                  <option value="-90min">- 90 minutos</option>
                  <option value="+90min">+ 90 minutos</option>
                </select>
                <h3>Nivel</h3>
                <select name="nivel" className="dropdown">
                  <option value="principiante">Principiante</option>
                  <option value="intermedio">Intermedio</option>
                  <option value="avanzado">Avanzado</option>
                </select>
              </div>
            </div>
            <h3>Cocinar con lo siguiente:</h3>
            <div className="ingredient-category">
              <h3>Proteinas</h3>
              <label>
                <input type="checkbox" name="proteina" value="carne" />
                Carne
              </label>
              <label>
                <input type="checkbox" name="proteina" value="pollo" />
                Pollo
              </label>
              <label>
                <input type="checkbox" name="proteina" value="cerdo" />
                Cerdo
              </label>
            </div>
            <div className="ingredient-category">
              <h3>Carbohidratos</h3>
              <label>
                <input type="checkbox" name="carbohidrato" value="arroz" />
                Arroz
              </label>
              <label>
                <input type="checkbox" name="carbohidrato" value="pasta" />
                Pasta
              </label>
              <label>
                <input type="checkbox" name="carbohidrato" value="pan" />
                Pan
              </label>
            </div>
            <div className="ingredient-category">
              <h3>Verduras</h3>
              <label>
                <input type="checkbox" name="verdura" value="zanahoria" />
                Zanahoria
              </label>
              <label>
                <input type="checkbox" name="verdura" value="espinaca" />
                Espinaca
              </label>
              <label>
                <input type="checkbox" name="verdura" value="brocoli" />
                Brócoli
              </label>
            </div>
            <button className="cook-button">Cocinar</button>
          </div>
          <div className="right-panel">
            <h2>Spaghetti a la Boloñesa</h2>
            <div className="recipe-info">
              <ul>
                <li>Tiempo total: <strong>3 horas</strong></li>
                <li>Comensales: <strong>8</strong></li>
                <li>Nivel: <strong>Principiante</strong></li>
                <li>Tipo de plato: <strong>Plato Principal</strong></li>
              </ul>
              <h3>Ingredientes</h3>
              <ul className="ingredients-list">
                <li>400 gramos de espaguetis</li>
                <li>250 gramos de carne picada de ternera</li>
                <li>250 gramos de carne picada de cerdo</li>
                <li>800 gramos de tomate triturado</li>
                <li>1 cucharada de tomate concentrado</li>
                <li>1 cebolla</li>
                <li>2 zanahorias</li>
                <li>1 apio</li>
                <li>1 vaso de vino tinto</li>
                <li>1/2 taza de leche entera</li>
                <li>200 gramos de queso parmesano</li>
                <li>aceite de oliva</li>
                <li>sal</li>
                <li>pimienta</li>
              </ul>
              <h3>Elaboración</h3>
              <p>Para dar comienzo a la receta corta la zanahoria, el apio y la cebolla muy finamente, puedes usar 1 cebolla si es grande, 2 si son pequeñas.</p>
              <p>En una sartén con un chorro de aceite fríe la carne picada. Si quieres que la carne quede más sabrosa conviene que coja cierta costra, para ello cocínala a fuego fuerte mientras remueves para que no se queme la carne. Importante machacar muy bien la carne, cuanto más desecha cogerá costra con más facilidad al freírse y costra es sinónimo de sabor.</p>
              <p>Cuando esté la carne lista la reservamos en un bol aparte, en la misma sartén sofreiremos las verduras a fuego medio.</p>
              <p>Una vez tengamos las verduras pochadas añadimos de nuevo la carne junto a los jugos que haya desprendido en el bol y salpimentamos.</p>
              <p>Seguidamente añade el vino. Deja que se evapore el alcohol un par de minutos y añade la pasta de tomate, remueve un poco y seguidamente añade el tomate triturado junto a la hoja de laurel. Baja la potencia a fuego bajo y deja que la salsa reduzca a fuego lento durante 3 horas aproximadamente, hasta que logres la textura deseada.</p>
              <p>Cuando tengas la salsa casi lista añade la leche, esto restará acidez al tomate y dará a la salsa un sabor más envolvente e intenso.</p>
              <p>Unos minutos antes de que la salsa esté lista empieza a cocinar la pasta. Para ello llena una cazuela de agua y la ponla a ebullición. Cuando empiece a hervir añade un puñado de sal y agrega la pasta.</p>
              <p>Cada pasta cuenta con tiempos de cocción diferentes, por lo que deberás tener en cuenta los tiempos de cocción que se indiquen en el envase de la pasta. Una vez lista la pasta la retira y añade la salsa. Sirve cada plato de pasta con una buena porción de salsa y corona con un buen puñado de queso parmesano y ya tendrías tus espaguetis a la boloñesa listos para servir. ¡Buon appetito!</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cocino;
