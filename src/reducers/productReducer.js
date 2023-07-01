// reducers/productReducer.js

const initialState = {
    products: [],
    loading: false,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS_REQUEST':
        return {
          ...state,
          loading: true,
        };
  
      case 'FETCH_PRODUCTS_SUCCESS':
        const products = action.payload;
        return {
          ...state,
          products,
          loading: false,
        };
  
      case 'FETCH_PRODUCTS_FAILURE':
        return {
          ...state,
          loading: false,
        };
  
      default:
        return state;
    }
  };
  
  export default productReducer;
  