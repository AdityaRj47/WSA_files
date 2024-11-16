import React ,{useState}from 'react'

const MovieForm = ({ addMovie }) => {
   const [movieName, setMovieName] = useState("");
   const [rating, setRating] = useState(0);
   const options =[1,2,3,4,5];
   
   const handleMovie = () =>{
      if(movieName && rating >0){
         addMovie({name: movieName, rating:parseInt(rating)});
         setMovieName("");
         setRating(0);
      }
   }
   
  return (
    <>
     {/* creating an input for movie name */}
     <input className='input'type='text' value={movieName} onChange={(event)=> setMovieName(event.target.value)} 
     placeholder='Enter Movie Name'/>
     {/* Creating a drop-down for the rating */}
     <select value={rating} onChange={(event)=> setRating(event.target.value)}>
        <option value="0">Select Rating</option>
        {/* <option value="1">1 star</option>
        <option value="2">2 star</option>
        <option value="3">3 star</option>
        <option value="4">4 star</option>
        <option value="5">5 star</option> */}

  {/* for DYNAMIC */}
        {
          options.map((num)=>(
            <option key={num} value={num}>{num} Star</option>
          ))
        }
     </select>
     <button onClick={handleMovie} style={{marginLeft:"10px"}}>Add Movies</button>
    </>
  )
}

export default MovieForm;