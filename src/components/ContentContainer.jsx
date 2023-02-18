import React from 'react'
import AboutUs from './AboutUs'
import Portfolio from "./Portfolio";

function ContentContainer({isShown}) {
  return (
    <article itemID="content-container" className="content-container">
      {isShown && <Portfolio />} 
      {!isShown && <AboutUs />}
    </article>
  )
}

export default ContentContainer
