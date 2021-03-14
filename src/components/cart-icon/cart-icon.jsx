import React from 'react'
import { connect } from 'react-redux'

import {toogleCartHidden} from './../../redux/cart/cart.actios'
import {seleCartItemsCount} from '../../redux/cart/cart.selector'


import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.scss'

 
 const CartIcon = ({toogleCartHidden, itemCount}) => {

    return (
        <div className='cart-icon' onClick={toogleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className="item-count">{itemCount}</span>
        </div>  
    )
}


const mapStateToProp = (state) => ({
    itemCount: seleCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => dispatch(toogleCartHidden())
})

export default connect(mapStateToProp,mapDispatchToProps)(CartIcon)
