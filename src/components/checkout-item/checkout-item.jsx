import React from 'react'
import './checkout-item.scss'

const CheckoutItem = ({cartItem:{name, imageUrl, price, quantity}, cartItem}) => {

    console.log(cartItem)
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quatity">{quantity}</span>
            <span className="price">{price}</span>
            <span className="remove-button">&#10005;</span>
        </div>
    )
}

export default CheckoutItem