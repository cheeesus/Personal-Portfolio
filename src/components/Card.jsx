import React from 'react'

function Card({ imgSrc, title, link, tags}) {
  return (
    <div className='card'>
        <figure>
            <img src={imgSrc} alt=""/>
        </figure>
        <div class="card-title">
            <div class="title"><a href={link}>{title}</a></div>
            <div>{tags}</div>
            <button><a href={link}><i class='bx bx-link'></i></a></button>
        </div>
    </div>
  )
}

export default Card
