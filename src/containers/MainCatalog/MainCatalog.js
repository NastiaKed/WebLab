import React from "react";
import Table1 from "../../Icons/56121403SD00205_A2_803x602.jpg"
import Table2 from "../../Icons/56121403SD00233_A2_803x602.jpg"
import Table3 from "../../Icons/56121403SD00269_A2_803x602.jpg"
import Table4 from "../../Icons/56121403SD00200_A2_803x602.jpg"
import CardItem from "../../components/CardItem/CardItem";
import { useState } from "react";


import { CardWrapper } from "../Home/Home.styled";


const tables =[
        {
            title: "Dining table",
            text: "Large dining table",
            image: Table1,
            price: 356,
        },
        {
            title: "Desktop",
            text: "A comfortable table for office work",
            image: Table2,
            price: 645,
        },
        {
            title: "Coffee table",
            text: "A small and comfortable table in a cafe",
            image: Table3,
            price: 876,
        },
        {
        title: "Office table",
        text: "Incredible feelings",
        image: Table4,
        price: 865,
        },

];
const MainCatalog = ()=>{
        const [cards,setCards] = useState(tables)

        return(
        <CardWrapper>
        {cards.map(({title,image,text,price},idx)=>(
            <CardItem 
                key={idx}
                title={title}
                text={text}
                image = {image}
                price={price}
                idx={idx}
            />
        ))}
        </CardWrapper>
        )
        
}

export default MainCatalog