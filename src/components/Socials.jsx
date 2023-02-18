import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";
function Socials({ }) {
  return (
    <div className='socials-buttons'>
        <button><a href=""><BsGithub /></a></button>
        <button><a href=""><BsLinkedin /></a></button>
    </div>
  )
}

export default Socials

