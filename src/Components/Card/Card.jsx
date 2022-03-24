import React from 'react';
import './Card.css'
import { BsFillCartFill } from 'react-icons/bs';

const Card = ({guns}) => {
    const {name, img, price, category, bullet, capacity} = guns
    return (
        <div className='card'>
      <div className='image-container'>
        <img src={img} alt='' />
      </div>
      <div className='gun-info'>
        <h1>{name}</h1>
        <p>Bullet Type : {bullet}</p>
        <p>Capacity : {category}</p>
        <p>Action : {capacity}</p>
      </div>
      <div className='add-to-cart'>
        <button>
          <BsFillCartFill className='icon' />
        </button>
        <h1>$ {price}</h1>
      </div>
    </div>
    );
};

export default Card;