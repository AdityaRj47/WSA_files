import React from 'react'
import MovieItem from './MovieItem'

const MovieList = ({ movies, handleDeleteMovie }) => {
    // const movies =[
    //     {name:"Dabbang",rating:3},
    //     {name:"Pushpa",rating:5},
    //     {name:"Animal",rating:4}
    // ]
  return (
    <>
    <h2 className='movie-lists'>Movie Lists:</h2>
    <ul>
        {/* displaying using map function() */}

        {
           movies.map(( movie , index) => (
            < MovieItem key={index} movie={movie} 
            jstDelete={() => handleDeleteMovie(index)}/>
          ))
        }

    </ul>
    </>
  )
}

export default MovieList;