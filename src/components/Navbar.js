import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import { ShopContext } from '../context/ShopContext'
import './navbar.css'


const Navbar = () => {
  const {cartItems} = useContext(ShopContext)

  const totalCount = Object.values(cartItems).reduce((acc, count) => acc + count, 0)
  return (
    <div className='navbar'>
      <div className="links">
        <Link to={'/'} >Shop</Link>
        <Link to={'/cart'}><ShoppingCart size={32} /></Link>
        {totalCount > 0 && <span className='cartCount'>{totalCount}</span>}
      </div>
    </div>
  )
}

export default Navbar
