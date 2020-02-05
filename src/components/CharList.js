import React from 'react';
import { Link } from 'react-router-dom'


function CharList(props) {
  console.log(props.characters)
  const { characters } = props
  return (
    <ul className='cards'>
      {characters.map((character, index) => {
        const { name, image } = character
        const route = `/char/${name}`
        return (
          <li key={index} className='card' >
            <h2 className='card__title'>{name}</h2>
            <img src={image} alt={name} className='card__img' />
            <Link to={route}>
              <button className='card__btn info'>Más info</button>
            </Link>
          </li>
        )
      })}
    </ul>)
}

export default CharList;