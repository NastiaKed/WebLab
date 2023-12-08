import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../../Shopping/actions';
import CardPage from '../Card/CartPage';


export const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    console.log(cartItems)
    console.log(useSelector((state) => state))

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleQuantityChange = (productId, newQuantity) => {
        if (newQuantity<1){
            handleRemoveFromCart(productId);
            alert("Item was removed from cart")
        }
        console.log(productId,newQuantity)
        dispatch(updateQuantity(productId, newQuantity));
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach((item) => {
            totalPrice += item.quantity * item.table.price;
        });
        return totalPrice;
    };
    

    return (
        <div className='catalog__wrapper'>
            <div style={{  }}>
                {cartItems.map((item) => (
                <CardPage 
                    key={item.table.id}
                    id={item.table.id}
                    title={item.table.title}
                    text={item.table.text}
                    image={item.table.image}
                    price={item.table.price}
                    size={item.table.size}
                    color={item.table.color}
                    quantity={item.quantity}
                    certificateType={item.shipping}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleQuantityChange={handleQuantityChange}
                    />
                ))}
            </div>

            <div className='total' style={{marginLeft: 80, marginTop: 50, marginBottom: 50}}>
                <h3>Total Price: ${calculateTotalPrice().toFixed(2)}</h3>
            </div>
        </div>
    )


    // return (
    //     <div >
    //         <div>
    //             <img src={props.table.image} alt={"cart"}/>
    //             <div>
    //                 <h3>{props.table.title}</h3>
    //                 <p>{props.table.type}</p>
    //             </div>
    //         </div>
    //         <div >
    //             <button onClick={deleteSameItem}>
    //             </button>
    //             <p>
    //                 <strong>{props.book.countOfSameBooks}</strong>
    //             </p>
    //             <button onClick={addSameItem}>
    //             </button>
    //         </div>
    //         <div >
    //             <p> {props.table.price + "$"}</p>
    //             <button onClick={deleteFromCart}>
    //             </button>
    //         </div>
    //     </div>
    // )
}

export default Cart;