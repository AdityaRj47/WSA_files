import React, { useState } from 'react'
import MovieForm from './MovieForm'
import MovieList from './MovieList'
import AverageRating from './AverageRating'
import './style.css'

const MovieRatingList = () => {
   const [movies,setMovies] = useState([]); //[arrayName, storing the array items]
  //  add movies
   const addMovie = (movie) =>{
       setMovies([...movies, movie]); //spread operator to store  movies dynamically (USE [ ] prev-mistake)
   }
  //function to delete the movies
     const handleDeleteMovie = (index) =>{
       const newMovies = movies.filter(( _ ,i) => i !== index); //when we want to delete the task,cursor is on the particular task, to be deleted
       setMovies(newMovies);
     };
  //calculate averageRating
    const calculateAvgRating =() => {
       if(movies.length === 0) {return 0};
       const totalRating = movies.reduce((sum , movie)=> sum + movie.rating , 0);
       return( totalRating / movies.length).toFixed(1);
    };
   
  return (
    <>
     <h1 className="title">Movie Rating App</h1>
     {/* //let us add a new movie */}
     <MovieForm addMovie={addMovie}/>
     {/* //show list of movies with their rating */}
     <MovieList movies={movies} handleDeleteMovie ={handleDeleteMovie} />
     {/* //avg ratings */}
     <br/>
     <AverageRating calculateAvgRating ={calculateAvgRating()} />
    </>
  )
}

export default MovieRatingList;