import React from 'react'
import Card from "./Card"
import { projects } from  '../constants/projects'

function Portfolio() {

  return (
    <div class="portfolio fade-in" id="portfolio">
        <h2>Latest Projects</h2>
        <div class="work-showcase">
            {projects.map(({ id, imgSrc, title, link, tags}) => (
                <Card key={id} imgSrc={imgSrc} title={title} link={link} tags={tags}/>
            ))}
        </div>
        </div>
  )
}

export default Portfolio
