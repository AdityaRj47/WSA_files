import React from 'react'

const Header = () => {
  const headers = ["Home","Gallery","Services","Contact Us"]
  return (
    <>
    <header>
    <ul>
        {
        headers.map((index) =>(
            <li>{index}</li>
        ))
        }
    </ul>
   </header>
    </>
  )
}

export default Header;