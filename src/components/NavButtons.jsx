import React from 'react'
import NavButton from './NavButton'

function NavButtons( {NavButtonHandler, showAbout}) {
  return (
    <nav className='nav-buttons'>
        <NavButton ButtonName={"About Us"} ButtonId="about-button" NavButtonHandler={showAbout}/>
        <NavButton ButtonName={"Portfolio"} ButtonId="portfolio-button" NavButtonHandler={NavButtonHandler}/>
        <NavButton ButtonName={"Contact Us"} ButtonId="contact-button" />
    </nav>
  )
}

export default NavButtons
