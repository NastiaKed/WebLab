export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

export const addToCart = (table, quantity) => {
    return {
        type: ADD_TO_CART,
        payload: { table, quantity },
    };
};

export const removeFromCart = (tableId) => ({
    type: REMOVE_FROM_CART,
    payload: tableId,
});

export const updateQuantity = (tableId, quantity) => ({
    type: UPDATE_QUANTITY,
    payload: { tableId, quantity },
});