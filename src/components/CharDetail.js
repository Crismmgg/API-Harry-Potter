import React from 'react';
import { Link } from 'react-router-dom'


function CharDetail(props) {
  console.log(props.characters)
  const { name, gender, house, patronus, image } = props.characters
  return (
    <ul className='cards detail'>
      <li className='card ' >
        <h2 className='card__title'>{name}</h2>
        <img src={image} alt={name} className='card__img' />
        <div className='card__description'>
          <p>Género: {gender}</p>
          <p>Casa: {house}</p>
          <p>Patronus: {patronus}</p>
        </div>
        <Link to='/'>
          <button className='card__btn'>Volver</button>
        </Link>
      </li>
    </ul>)

}

export default CharDetail;