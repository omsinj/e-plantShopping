import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);  // Fetch cart items from Redux store
  const dispatch = useDispatch();

  // Calculate the total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.quantity * item.cost, 0).toFixed(2);
  };

  // Calculate total cost for a single item (quantity * cost)
  const calculateTotalCost = (item) => {
    return (item.quantity * item.cost).toFixed(2);
  };

  // Handle incrementing the item quantity
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, amount: item.quantity + 1 }));
  };

  // Handle decrementing the item quantity
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, amount: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));  // Remove item if quantity reaches 0
    }
  };

  // Handle removing an item completely from the cart
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Handle continue shopping functionality
  const handleContinueShopping = (e) => {
    if (onContinueShopping) {
      onContinueShopping(e);  // Call the parent component's continue shopping function
    }
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      
      <div>
        {cart.length === 0 ? (
          <p>Your cart is empty. Start adding plants to your cart!</p>
        ) : (
          cart.map(item => (
            <div className="cart-item" key={item.name}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">${item.cost.toFixed(2)}</div>
                <div className="cart-item-quantity">
                  <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                  <span className="cart-item-quantity-value">{item.quantity}</span>
                  <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
                </div>
                <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-summary">
        <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
        <div className="continue_shopping_btn">
          <button className="get-started-button" onClick={handleContinueShopping}>Continue Shopping</button>
          <br />
          <button className="get-started-button1" onClick={() => alert('Checkout functionality to be implemented')}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;



