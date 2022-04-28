import React from 'react'
import "./Logo.scss"

const Logo = () => {
  return (
    <div className='logo'>
        <span>Interesting Knoweldge</span>
        <img src={require("../../shared/images/book.png")} alt="book" />
    </div>
  )
}

export default Logo