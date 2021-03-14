import React from 'react'
import {connect} from 'react-redux'
import CustomButton from './../custom-button/custom-button'
import CartItem from '../cart-item/cart-item'
import { selectCartItems } from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect'
import { withRouter } from 'react-router-dom'

import { toogleCartHidden } from '../../redux/cart/cart.actios'



import './cartDropDown.scss'

const CartDropdown = ({cartItems, history, dispatch}) => {
    
    return(
        <div className="cart-dropdown">
        <div className="cart-items">
            {
               cartItems.length ? 
               cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
               :
               <span className = 'empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
             history.push('/checkout')
             dispatch(toogleCartHidden())}}
             >GO TO CHECKOUT</CustomButton>
    </div>
    )

}


const mapStateToProp = createStructuredSelector({
    cartItems : selectCartItems
})



export default withRouter(connect(mapStateToProp)(CartDropdown))