// src/Block.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Block.css';

function Block({ title, image, link, backgroundImage }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  const blockStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className="block" onClick={handleClick}>
      <h2>{title}</h2>
      <img src={image} alt={title} />
    </div>
  );
}

export default Block;
