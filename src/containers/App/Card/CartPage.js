import React, { useState, useEffect} from "react";
import Table1 from "../../../Icons/56121403SD00205_A2_803x602.jpg";
import Table2 from "../../../Icons/56121403SD00233_A2_803x602.jpg";
import Table3 from "../../../Icons/56121403SD00269_A2_803x602.jpg";

import { StyledButton } from "./CartPage.styled";
import { removeFromCart, updateQuantity } from '../../../Shopping/actions';
import { useSelector, useDispatch } from 'react-redux';

import{ Link, NavLink, useNavigate } from 'react-router-dom';

const CardPage = ({
        id,
        title,
        text,
        image,
        price,
        size,
        color,
        quantity,
        handleRemoveFromCart,
        handleQuantityChange
    }) => {
        const [editedQuantity, setEditedQuantity] = useState(quantity);
        const [totalItemPrice, setTotalItemPrice] = useState(price * quantity);
        // const tableImage = {
        //     Table1: Table1,
        //     Table2: Table2,
        //     Table3: Table3
        // };

        useEffect(() => {
        
            setTotalItemPrice(price * editedQuantity);
        
        }, [price, editedQuantity]);

    const handleInputChange = (e) => {
        const newQuantity = parseInt(e.target.value);
        setEditedQuantity(newQuantity);
        handleQuantityChange(id, newQuantity);
    };

    const cartItems = useSelector((state) => state);
    console.log(cartItems)
    return (
        <div key={id} className="table-item" style={{marginLeft: 50, display: "flex", gap: 30, marginTop: 30, boxSizing: "border-box", border: "1px solid #EDEDE9", borderRadius: 15}}>
                <NavLink to = {`/table/${id}`}>
                    <img style={{width: 410, height: 350, borderRadius: 15}} src={image} alt={title} />
                </NavLink>
            <div className="table-item-info" style={{fontSize: 18}}>
                <p>{title}</p>
                <p>
                    Price: <span>${price}</span>
                </p>
                <p>
                    Size: <span>{size}</span>
                </p>
                <p>
                    Color: <span>{color}</span>
                </p>

                <p>
                    <br></br>
                    Quantity:{' '}
                </p>

                <input className="search-input"
                type="number"
                min="0"
                value={editedQuantity}
                onChange={handleInputChange}
                />

                <p>
                    <strong>
                        Total item price: <span>${totalItemPrice.toFixed(2)}</span>
                    </strong>
                </p>

                {/* <StyledButton onClick={() => handleRemoveFromCart(id)}>Remove</StyledButton> */}
            </div>

            {/* <div>
                <strong>
                        Total items price: <span>${totalItemPrice.toFixed(2)}</span>
                    </strong>
            </div> */}
        </div>
    );
};

export default CardPage;