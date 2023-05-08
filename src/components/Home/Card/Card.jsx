import React from 'react'

const Card = (props) => {
  const {flag, alt, name, capital, population } = props;


  return (
    <div className='card'>
        <img src={flag} alt={alt} />
        <h4>Country: {name}</h4>
        <p>Capital: {capital}</p>
        <p>Population: {population}</p>
    </div>
  )
}

export default Card
