// App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <HomePage />
        <CartPage />
        <Sidebar />
      </div>
    </Provider>
  );
};

export default App;
