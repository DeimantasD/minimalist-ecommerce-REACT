import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import CartItem from './CartItem';
import { PRODUCTS } from '../../products';
import './cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const navigate = useNavigate()

    const totalAmount = getTotalCartAmount()
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items:</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map(product => {
          if (cartItems[product.id] > 0) {
            return <CartItem key={product.id} data={product}  />;
          }
          return null;
        })}
      </div>
      {totalAmount > 0 ?
      <div className="cart-buttons">
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={() => navigate('/')} className='continue-btn'>Continue Shopping</button>
        <button className='checkout-btn'>Checkout</button>
      </div>
      : <h1 className='empty'>Your Cart is Empty!</h1> }
    </div>
  );
}

export default Cart;