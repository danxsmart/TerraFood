import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Block.css';

function Block({ title, image, link, backgroundImage }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  const blockStyle = {
    backgroundImage: `url(${backgroundImage})`, // Asegúrate de usar backticks (`) para interpolación
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    //width: '500px', // Ajusta el ancho del bloque si es necesario
    //height: '200px', // Ajusta el alto del bloque si es necesario
  };

  return (
    <div className="block" style={blockStyle} onClick={handleClick}>
      <h2>{title}</h2>
    </div>
  );
}

export default Block;
