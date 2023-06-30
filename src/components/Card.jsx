import React from 'react'
import "./card.css"

const Card = ({data}) => {
  return (
    <div className='CardContainer'>
      <div className='cardimg'>
        <img className='cimg' src={data.img} alt='' ></img>
      </div>
    
      <div className='cardInfo'>
        <div className='cardnames'>
            <span className='cardhead'>{data.title}</span>
            <span className='cardesc'>{data.desc}</span>
        </div>
        <div className='cardPrice'>
            <span className='price'>${data.price}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
