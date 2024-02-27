import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

const CartItem = ({ data}) => {
  const { id, productName, productImage, price } = data;
  const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext)
  
  return (
    <div className='cartItem'>
      <img src={productImage} alt={productName} />
      <div className='description'>
        <p><b>{productName}</b></p>
        <p>$ {price}</p>
        <div className='countHandler'>
            <button className='remove-btn' onClick={() => removeFromCart(id)}> - </button>
            <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
            <button className='add-btn' onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;