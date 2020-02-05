import React from 'react';
import logo from '../images/logo.png'
function Header(props) {

  const handleSubmit = (ev) => {
    ev.preventDefault()
  }
  const handleGender = (ev) => {
    const inputGender = ev.target.value
    props.handleGender(inputGender)
  }
  const handleName = (ev) => {
    const inputValue = ev.target.value
    props.handleName(inputValue)
  }

  return (
    <div className='header-container'>
      <img src={logo} alt="Logo Harry Potter" className='logo' />
      <form className='form-container'
        action="submit"
        onSubmit={handleSubmit}>

        <label htmlFor="buscar" className='title--big form__label'>Busca tu personaje </label>
        <input
          type="text"
          placeholder=' Escribe su nombre'
          className='form__input-text'
          onChange={handleName}
          value={props.value}
        />

        <div className='gender-filter'>
          <label htmlFor="" className='title--big form__label'>Género: </label>
          <label className='gender__label' htmlFor='female'>Mujer</label>
          <input
            name='gender'
            type="radio"
            value='female'
            onChange={handleGender}
            checked={props.checked === 'female'}
          />
          <label className='gender__label' htmlFor='male'>Hombre</label>
          <input
            name='gender'
            type="radio"
            value='male'
            onChange={handleGender}
            checked={props.checked === 'male'} />
          <label className='gender__label' htmlFor='all'>Todos</label>
          <input
            name='gender'
            type="radio"
            value=''
            onChange={handleGender}
            checked={props.checked === ''}
          />
        </div>
        <button
          className='card__btn reset'
          onClick={props.resetBtn}>
          RESET
      </button>
      </form>
    </div>)
}

export default Header;