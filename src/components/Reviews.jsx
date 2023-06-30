import React from 'react'
import "./reviews.css"

const Reviews = ({data}) => {
  return (
    <div className='reviews'>
      <div className='rimg'>
        <img className='rimgs' src='assets/quote.png' alt='' />
        <div className='rtext'>
             <span className='rview'>
           {data.text}
          
        </span>
        </div>
        <img className='rimgs2' src='assets/quote2.png' alt='' />
        <div className='info'>
            {data.acc}
        </div>
       
      </div>
    </div>
  )
}

export default Reviews
