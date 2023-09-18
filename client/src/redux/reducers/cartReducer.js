import * as actionTypes from '../constants/cartConstants';

const CART_INITIAL_STATE = {
    cartItems: [],
  };

  export const cartReducer = (state = CART_INITIAL_STATE, action) => {
    console.log("Current State:", state);
    console.log("Action:", action);
    switch (action.type) {
      case actionTypes.ADD_TO_CART:
            const item = action.payload; // in action.payload we'll get the item we want to add

            const existItem = state.cartItems.find((x) => x.product === item.product); 
            // the product will consist of the id and it will check if the payload id is same as the incomming items id , if its there then it'll not add the item to the cart

            if (existItem) {
                return {
                    // spreading the state of our cart
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                      x.product === existItem.product ? item : x
                    ),
                };
            }
            else{
                return{
                    ...state,
          cartItems: [...state.cartItems, item], // if the cart iten does not exsist then we'll just add that item into the cart
                };
            }
        
        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload), // here we are pushing everything to the array except the one we want to delete.
            };
    
        default:
            return state;
    }
};