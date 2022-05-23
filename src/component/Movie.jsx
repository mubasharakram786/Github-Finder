import React from 'react'

function Movie({item}) {
  return (
    <div className='movie-card'>
        <div className="movie-photo">
            <img src={item.coverPhoto} alt="" />
        </div>
        <h1 className='movie-name'>{item.name}</h1>
        <p className='movie-rating'>{item.rating}</p>
    </div>
  )
}

export default Movie