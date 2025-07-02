import React from 'react';
import './PlaceOrder.css';

const PlaceOrder = () => {
  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>

        <div className='multi-fields'>
          <input type='text' placeholder='First name' />
          <input type='text' placeholder='Last name' />
        </div>

        <input type='email' placeholder='Email address' />
        <input type='text' placeholder='Street' />

        <div className='multi-fields'>
          <input type='text' placeholder='City' />
          <input type='text' placeholder='State' />
        </div>

        <div className='multi-fields'>
          <input type='text' placeholder='Zip code' />
          <input type='text' placeholder='Country' />
        </div>

        <input type='text' placeholder='Phone' />
      </div>

      <div className='place-order-right'>
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
      </div>
    </form>
  );
};

export default PlaceOrder;
