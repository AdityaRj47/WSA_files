import React from 'react'
import { useState } from 'react';

import ProfileCard from './ProfileCard';
import InputForm from './InputForm';
import ShowButton from './ShowButton';


const UserInput = () => {

   const [name, setName] = useState("");
   const handleChange = (event) =>{
      setName(event.target.value);
      setProfileCard(false);
   };
   //for the age
   const [age, setAge] = useState("");
   const handleAge = (event)=>{
    setAge(event.target.value);
   }
   
   //for button
    const [show,setProfileCard] = useState(false);
    const handleClick = () =>{
       setProfileCard(true);
    }
    return (
     <>
      {/* <ProfileCard name="Alice" age={30}/>
      <ProfileCard name="John" age={40}/> */}
 
      {/* < ProfileCard name={name} age={age} /> */}

      <InputForm name={name} handleChange={handleChange} age={age} handleAge={handleAge}/>
      <ShowButton handleClick={handleClick}/>
       {show && <ProfileCard name={name} age={age}/> }
     </>
   );
}

export default UserInput;