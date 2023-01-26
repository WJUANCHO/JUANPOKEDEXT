import React from 'react'

const PokemonCard = ({pokemon}) => {



  return (
    <article className='card'>
        <img className='card__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        <h2 className='card__name'>{pokemon?.name}</h2>
        <ul className='card__list'>
            <li className='card__item'><span className='card__spam'>type:</span>{pokemon?.types[0].type.name}</li>
            <li className='card__item'><span>Height:</span>{pokemon?.height}</li>
            <li className='card__item'><span>Weight:</span>{pokemon?.weight}</li>
        </ul>
    </article>
  )
}

export default PokemonCard