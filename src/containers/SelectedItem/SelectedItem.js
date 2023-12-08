import CircleLoader from "../App/CircleLoader/CircleLoader";
import ActionButton  from "./ActionButton";
import {Button} from "antd";
import { addToCart } from "../../Shopping/actions";
// import { actionsType } from "../../Shopping/shopping";
import { useDispatch  } from "react-redux";
import { useParams } from "react-router-dom";
import {
    StyledText,
    MainWrapper,
    StyledName,
    StyledPrice,
    StyledT,
    StyledB,
    StyledC,
    StyledButton,
    StyledInput
} from "./SelectedItem.styled";

import { getAllTables, getTablesById } from "../../server";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react"
import Card from "antd/es/card/Card";



const SelectedItem = () => {
    const dispatch = useDispatch()
    const [tables,setTables] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [isVisible,setIsVisible] = useState(false)
    const location = useLocation();
    const table =  location.state && location.state.table;
    const { id } = useParams();


    
    useEffect(()=>{
        setIsLoading(true);
        const tableId = parseInt(id);
        console.log (tableId)
        getTablesById(tableId).then((tables)=>{
            setTables(tables)
            console.log (tables)
            setIsLoading(false);
            console.log (tableId)
        }
        )
    },[id])
    

    if (!tables) {
        return <div>Loading...</div>;
    }


    // const handleQuantityChange = (e) => {
    //     const inputValue = parseInt(e.target.value, 10) || 0;
    //     setQuantity(Math.max(inputValue, 0));
    // };

    const handleAddToCart = () => {
        console.log(tables,quantity)
        dispatch(addToCart(tables,quantity));
    };


    // function addItemToCart() {
    //     dispatch({
    //         type: actionsType.addToCart,
    //         tableToAdd: { ...tables, quantity: parseInt(quantity, 10) || 1 },
    //     });
    //     setIsVisible(true) };

    return(
        <div>
            <MainWrapper>
            {isLoading ? <CircleLoader/> : ''}
            <Card
            hoverable
            cover = {<img style={{marginLeft:100,width:500,height:500}} src={tables.image}/>}
            >
                <h2 style={{textAlign: "center"}}>{tables.title}</h2>
            </Card>
            <StyledT>
                    <StyledText>
                        <p>{tables.text}</p>
                    </StyledText>
                <div>
                    <StyledC>
                        <p>Size: {tables.size}</p>
                        <p>Price: {tables.color}</p>
                    </StyledC>
                    <StyledInput input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    placeholder=""
                    ></StyledInput>

                    <StyledButton  text="Add to Cart">
                        <ActionButton text="Add to Cart" onClick={handleAddToCart} linkHref="/cart">
                            Add to Cart
                        </ActionButton>
                    </StyledButton>
                </div>
                {isVisible &&
                    <div>
                        <p>Item has been added to cart</p>
                        <a href="/cart">Click here to go to cart</a>
                    </div>}
                </StyledT>
            </MainWrapper>
        </div>
    )
}

export default SelectedItem;