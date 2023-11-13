import React from "react";
import Table1 from "../../Icons/56121403SD00205_A2_803x602.jpg";
import Table2 from "../../Icons/56121403SD00233_A2_803x602.jpg";
import Table3 from "../../Icons/56121403SD00269_A2_803x602.jpg";
import Picture from "../../Icons/56121403SD00200_A2_803x602.jpg"
import {
    StyledButton,
    StyledText,
    MainWrapper,
    CardWrapper,
} from "./Home.styled"

import CardItem from "../../components/CardItem/CardItem";


const homeText = {
    text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
    scelerisque tristique neque, eget facilisis purus consequat sit
    amet. Nulla iaculis felis eget rutrum blandit. Morbi volutpat sapien
    eget odio gravida, eu placerat erat eleifend. Aliquam erat volutpat.
    Quisque sed tincidunt felis. Sed bibendum`
};

const data = [
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
    ];

    const Home = () =>{
    return(
        <div>
            <MainWrapper>
                <img style={{marginLeft:100,width:500,height:500}} src={Picture}/>
                <StyledText>
                    <p>{homeText.text}</p>
                    <StyledButton>
                    Detail
                </StyledButton>
                </StyledText>
            </MainWrapper>
            <CardWrapper>

                {data.map(({title,text,image,price},idx)=>(
                    <CardItem
                        key= {idx}
                        title={title}
                        text = {text}
                        image= {image}
                        price={price}
                        id={idx}
                    />
                ))}
            </CardWrapper>
        </div>
    )
}

export default Home;