import React from 'react'



const InputForm = ({name,handleChange,age,handleAge}) => {

  return (
    <>
        {/* using userINPUT */}
     <input 
        type = "text"
        placeholder = "Enter your name"
        value = {name}
        onChange = {handleChange}>
     </input>
      <br/><br/>
        {/* to input age */}
      <input 
      type = "number"
      placeholder = "Enter your age"
      value = {age}
      onChange = {handleAge}>
      </input>
    </>
    
  )
}

export default InputForm;