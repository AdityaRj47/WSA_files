import React from 'react'

const AverageRating = ({calculateAvgRating}) => {
    // const avgRating = 3.6;
  return (
    <>
      <h2 className='avg'>Average Rating: {calculateAvgRating}</h2>
    </>
  )
}

export default AverageRating;