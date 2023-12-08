import CircleLoader from "../App/CircleLoader/CircleLoader";
import {Button} from "antd";
import { actionsType } from "../../Shopping/shopping";
import { useDispatch  } from "react-redux";
import { useParams } from "react-router-dom";
import {
    StyledText,
    MainWrapper,
    StyledName,
    StyledPrice,
    StyledT,
    StyledB,
    StyledC
} from "./SelectedItem.styled";

import { getAllTables, getTablesById } from "../../server";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react"


const SelectedItem = () => {
    const [tables,setTables] = useState([]);
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    const {id} = useParams();
    const tableId = parseInt(id)
    
    useEffect(()=>{
        setIsLoading(true);
        getTablesById(tableId).then((tables)=>{
            setTables(tables)
            setIsLoading(false);
        }
        )
    },[])
    console.log(tables)
    

    const tableData = tables;

    if (!tableData) {
        return <div>Loading...</div>;
    }

    function addItemToCart() {
        dispatch({
            type: actionsType.addToCart,
            tableToAdd: tableData
        })
    }

    return(
        <div>
            <MainWrapper>
            {isLoading ? <CircleLoader/> : ''}
            <img style={{marginLeft:100,width:500,height:500}} src={tableData.image}/>
                <StyledT>
                    <StyledName>
                        <p>{tableData.title}</p>
                    </StyledName>
                    <StyledText>
                        <p>{tableData.text}</p>
                    </StyledText>
                    <StyledC>
                        <p>Size: {tableData.size}</p>
                        <p>Price: {tableData.color}</p>
                    </StyledC>
                    <StyledB>
                        <StyledPrice>
                            <p>${tableData.price}</p>
                        </StyledPrice>
                        <Button className="add_to_cart" onClick={addItemToCart}>Add to cart</Button>
                    </StyledB>
                </StyledT>
            </MainWrapper>
        </div>
    )
}

export default SelectedItem;