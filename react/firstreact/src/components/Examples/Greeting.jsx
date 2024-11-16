import React from 'react'

const Greeting = ({name}) => {
  return (
    <>
    {/* <h1>Hello,{props.name}</h1> */}

    {/* //Destructuring the props */}
    <h1>Hello, {name}</h1>
    <h1>Welcome To React!!!!</h1>
    </>
  )
}

export default Greeting;