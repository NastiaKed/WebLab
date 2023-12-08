import { combineReducers } from "redux";
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from "./actions";

const initialCartState = {
    cartItems: [],
};

const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        
        case "ADD_TO_CART":
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (item) => item.table.id !== action.payload
                ),
            };
        
        case UPDATE_QUANTITY:
            const updatedCartItems = state.cartItems.map((item) => {
                if (item.table.id === action.payload.tableId) {
                    return {
                        ...item,
                        quantity: action.payload.quantity,
                    };
                }
                return item;
            });
            return {
                ...state,
                cartItems: updatedCartItems,
            };
            default:
                return state;
            }
        };

    const rootReducer = combineReducers({
        cart: cartReducer,
    });

export default rootReducer;


// export const addToCartOperator = (state, action) => {
//     const newCartItem = {
//         ...action.tableToAdd,
//     };
//     const newCart = {
//         ...state,
//         cart: [...state.cart, newCartItem]
//     };
// }

// export const deleteFromCartOperator = (state, action) => {
//     const deletedItem = state.cart.find((book) => book.id === action.bookToDelete.id);

//     if (!deletedItem) {
//         return state;
//     }

//     const updatedCart = state.cart.filter((book) => book.id !== action.bookToDelete.id);

//     return {
//         ...state,
//         cart: updatedCart,
//         totalAmount: state.totalAmount - (deletedItem.initialPrice * deletedItem.countOfSameBooks),
//         countOfCartItems: state.countOfCartItems - 1,
//     };
// };

// export const addSameItem = (state, action) => {
//     const updatedCart = state.cart.map((book) =>
//         book.id === action.bookToUpdate.id
//             ? {
//                 ...book,
//                 countOfSameBooks: book.countOfSameBooks + 1,
//                 priceInUah: book.priceInUah + action.bookToUpdate.initialPrice,
//             }
//         : book
//     );

//     const updatedTotalAmount =
//         state.totalAmount + action.bookToUpdate.initialPrice;

//     return {
//         ...state,
//         cart: updatedCart,
//         totalAmount: updatedTotalAmount,
//         countOfCartItems: state.countOfCartItems + 1,
//     };
// };

// export const deleteSameItem = (state, action) => {

//     if (action.bookToUpdate.countOfSameBooks === 1) {
//         return state
//     }

//     const updatedCart = state.cart.map((book) =>
//         book.id === action.bookToUpdate.id && book.countOfSameBooks > 1
//             ? {
//                 ...book,
//                 countOfSameBooks: book.countOfSameBooks - 1,
//                 priceInUah: book.priceInUah - action.bookToUpdate.initialPrice,
//             }
//         : book
//     );

//     const updatedTotalAmount =
//         state.totalAmount - action.bookToUpdate.initialPrice;

//     return {
//         ...state,
//         cart: updatedCart,
//         totalAmount: updatedTotalAmount,
//         countOfCartItems: state.countOfCartItems - 1,
//     };
// };