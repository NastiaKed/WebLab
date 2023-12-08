import {createStore} from "redux";
import {addSameItem, addToCartOperator, deleteFromCartOperator, deleteSameItem} from "./operator";

export const actionsType = {
    addToCart: "addToCart",
    deleteFromCart: "deleteFromCart",
    addSameItem: "addSameItem",
    deleteSameItem:"deleteSameItem"
}

const initialState = {
    cart: [],
    totalAmount: 0,
    countOfCartItems: 0
};
const storeOperator = (state = initialState, action)=> {
    if (action.type === actionsType.addToCart) {
        return addToCartOperator(state, action);
    }
    if (action.type === actionsType.deleteFromCart) {
        return deleteFromCartOperator(state, action);
    }
    if (action.type === actionsType.addSameItem) {
        return addSameItem(state, action);
    }
    if (action.type === actionsType.deleteSameItem) {
        return deleteSameItem(state, action);
    }
    return state;
}

const store = createStore(storeOperator);

export default store