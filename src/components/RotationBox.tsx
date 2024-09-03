
import { useState } from 'react';
import '../styles/rotationBox.css'; // Importa el archivo CSS
import type { RotationBoxProps } from '../type/type';
import { motion } from 'framer-motion';


const FlipCard = ({image,children,tittle}:RotationBoxProps) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flip-card-container" onClick={handleClick}>
      <motion.div
        className={`flip-card ${flipped ? 'flipped' : ''}`}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flip-card-front">
          <h3 className='flip_card--tittle'>{tittle}</h3>
          <img className="flip-card-container-img" src={image}/>
        </div>
        <div className="flip-card-back">
          
          <p className='flip_card--text'>{children}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
