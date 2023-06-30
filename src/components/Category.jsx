import React from 'react'
import "./category.css"

const Category = ({data}) => {
  return (
    <div className='category'>
      <div className="imgdiv">
        <img className='catImage' src={data.img} alt=''></img>
      </div>
      <div className="infodiv">
        <span className='infocat'>{data.desc}</span>
        <button className='catbutton'>{data.text}</button>
      </div>
    </div>
  )
}

export default Category
