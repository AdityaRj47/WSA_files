import React, { useState } from 'react'
import ButtonRow from './ButtonRow'
import Display from './Display'

const Calculator = () => {
  //State variables: input, output
  const [input, setInput] = useState("0");
  const [output, setOutput] = useState("");

  //Button click handler
  const handleButtonClick =(value) =>{
       if(value === "C"){
          setInput("0");
          setOutput("");
       }else if(value === "BCK"){
           setInput((lastval) => (lastval.length > 1 ? lastval.slice(0,-1) : "0"));
       } else if(value === "="){
            try{
                setOutput(eval(input).toString());
            }catch{
                setOutput("Error");
            }
       } else{
             setInput((lastval) => (lastval === "0" ? value : lastval + value));
       }
  }
  return (
    <>
        {/* <!--Calculator container--> */}
        <div className="calculator-container">
                {/* <!--Background circle--> */}
                <div className="background-circle"></div>
                {/* <!--Calculator--> */}
                <div className="calculator">
                    {/* <!--Output screen--> */}
                    <Display input={input} output={output}/>
                    {/* Button Rows */}
                     <ButtonRow handleButtonClick={handleButtonClick}/>
                </div>
          </div>
    </>
  )
}

export default Calculator;