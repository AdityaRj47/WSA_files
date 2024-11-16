import React from 'react'
import Calculator from './Calculator';
import "./styleCalc.css"

const Main = () => {
  return (
    <>
      {/* <!--MAin container--> */}
    <main className="main-container">
      {/* <!--WSA Icon--> */}
      {/* <div className="wsaicon-container">
        {/* <!--WSA Icon Image--> */}
         {/* <img className="wsa-icon"
          src="Wsa.png"
          alt="Wsa icon"
          />    */}
      {/* </div> */} 
      {/* <!--sub container--> */}
      <div className="sub-container">
          {/* <!--Header container--> */}
          <div className="header-container">
            {/* <!--Calculator heading--> */}
             <h1 className="header">CALCULATOR</h1>
           </div>
      </div>
      <Calculator/>
    </main>
    </>
  )
}

export default Main;