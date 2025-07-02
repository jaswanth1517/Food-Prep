import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  
  const Navigate = useNavigate();

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className='cart-items-title cart-items-item' key={index}>
                <img src={item.image} alt='' />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p className='cross' onClick={() => removeFromCart(item._id)}>X</p> {/* ✅ Fixed here */}
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal:</p>
              <p>
                ${food_list.reduce((total, item) => {
                  return total + item.price * (cartItems[item._id] || 0);
                }, 0)}
              </p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee:</p>
              <p>$5</p>
            </div>
            <div className="cart-total-details">
              <h3>Total:</h3>
              <h3>
                $
                {food_list.reduce((total, item) => {
                  return total + item.price * (cartItems[item._id] || 0);
                }, 0) + 5}
              </h3>
            </div>
          </div>
          <button onClick={() =>Navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-promocode'>
            <p>If you have a promo code, Enter it here</p>
            <div className="promo-input-group">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
              </div>
              </div>
      </div>
    </div>
  );
};

export default Cart;

