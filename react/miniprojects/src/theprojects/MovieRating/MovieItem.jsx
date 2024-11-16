import React from 'react'

const MovieItem = ({movie, jstDelete}) => {
  // Creating a function to change the numerical rating to stars
    const renderStar= (count)=>{
        return Array.from({length:5}, (_ , i) => (
            <span key={i} style={{color: i < count ? "lightgreen" : "white" }}>
            &#9733;
            </span>
        ))
    }
    // return Array.from....is written in order to create the number of stars(usng length:5)
    //(_ ,i) is the function to render the star(_) and the index(i) 
  return (
    <>
    {/* display the list items using <li> */}
    <li className='listings'>
        {movie.name}- {renderStar(movie.rating)}
        <button  onClick={jstDelete} style={{marginLeft:"10px"}}>Delete</button>
    </li>
    </>
  )
}

export default MovieItem;