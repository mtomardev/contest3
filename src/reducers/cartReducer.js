// reducers/cartReducer.js

const initialState = {
    cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const product = action.payload;
        const existingItem = state.cartItems.find((item) => item.id === product.id);
        if (existingItem) {
          return state; // Item already exists in the cart, no need to add it again
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, product],
          };
        }
  
      case 'REMOVE_FROM_CART':
        const productId = action.payload;
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== productId),
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  