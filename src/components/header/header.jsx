import React from 'react'
import { Link} from 'react-router-dom'
import  {ReactComponent as Logo } from './../../assets/crown.svg'
import {auth} from './../../firebase/firebase.utils'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CartIcon from './../cart-icon/cart-icon'
import CartDropdown from './../cart-dropdown/cartDropDown'
import {selectCartHidden} from '../../redux/cart/cart.selector'
import {selectCurrentUser} from '../../redux/user/user.selector'
import './header.styles.scss'


const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/shop'>CONTACT</Link>
            {
            currentUser ? 
            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link to='/signin' className='option'>SING IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
        
    </div>
)

const mapStatetProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStatetProps)(Header)