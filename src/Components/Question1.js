import React from 'react'
import "./question1.css";

const Question1 = () => {
  return (
    <div>
      <form action="" className='info-form'>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" className='inp' />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" className='inp' />
        <label htmlFor="message">Message:</label>
        <textarea id="message" className='inp' cols="30" rows="5"></textarea> 
        <button type="submit" className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Question1
