import React from 'react'
import Greeting from './Greeting';
import "./style/profileCard.css"

const ProfileCard = ({name, age}) => {
  return (
     <>
      < Greeting name = {name} />
      <h2 className="age"> Age: {age} </h2>
     </>
  )
}

export default ProfileCard;