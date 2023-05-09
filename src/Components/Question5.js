import React from 'react'
import "./question5.css";

const Question5 = () => {
  return (
    <div>
      <div className="card">
        <h1 className='heading'>
            Review Order
        </h1>
        <div className="top-section">
            <div className="upper-left">
                <h3>ITEM</h3>
                <img src="https://wallpapercave.com/dwp1x/wp1929358.jpg" alt="Not Available" height={"50px"} width={"50px"} />
                <p>Limited addition cactus print bag 1 litre, green color</p>
            </div>
            <div className="upper-right">
                <div className="qty">
                <h3>QTY</h3>
                <p>1</p>
                </div>
                <div className="qty">
                <h3 className=''>TOTAL</h3>
                <p>INR 999</p>
                </div>
            </div>
        </div>
        <div className="bottom-section">
            <div className="bottom-left">
                <p>Subtotal</p>
                <p>GST</p>
                <h3>Grand Total</h3>
            </div>
            <div className="bottom-right">
            <strong>INR 999</strong>
            <strong>INR 179</strong>
            <h3>INR 1178</h3>
            </div>
        </div>
        <button className='btn'>Place Order</button>
        <p className='card-footer'>Card Secured by Razorpay</p>
      </div>
    </div>
  )
}

export default Question5
