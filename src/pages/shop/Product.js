import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

const Product = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id] || 0;

  return (
    <div className='product'>
      <img src={productImage} alt="image" />
      <div className="description">
        <p className='productName'><b>{productName}</b></p>
        <p className='productPrice'>$ {price}</p>
      </div>
      <button className='addToCartBttn' onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && `(${cartItemAmount})`}
      </button>
    </div>
  );
};

export default Product;
