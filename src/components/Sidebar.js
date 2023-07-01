// components/Sidebar.js

import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <h3>Total: {totalPrice}</h3>
      <button>Checkout</button>
    </div>
  );
};

export default Sidebar;
