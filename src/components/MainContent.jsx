import React from 'react'
import ContentContainer from './ContentContainer'
import NavButtons from './NavButtons'
import Contact from "./Contact";
import { BsPlusCircleDotted } from 'react-icons/bs';
import { useState } from "react";


function MainContent() {
  const [isShown, setIsShown] = useState(false);
  function NavButtonHandler(e) {
    e.preventDefault()
    setIsShown(true)
  }
  function showAbout(e) {
    e.preventDefault()
    setIsShown(false)
  }

  return (
    <div className="main-content">
        <NavButtons NavButtonHandler={NavButtonHandler} showAbout={showAbout}/>
        <ContentContainer isShown={isShown} />
        <Contact />
    </div>
  )
}

export default MainContent
