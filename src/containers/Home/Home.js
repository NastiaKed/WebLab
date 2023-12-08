import React from "react";
import Table1 from "../../Icons/56121403SD00205_A2_803x602.jpg";
import Table2 from "../../Icons/56121403SD00233_A2_803x602.jpg";
import Table3 from "../../Icons/56121403SD00269_A2_803x602.jpg";
import Picture from "../../Icons/56121403SD00200_A2_803x602.jpg";
import Picture2 from "../../Icons/image21.png";
import axios from "axios";
import { useEffect } from "react";
import CircleLoader from "../App/CircleLoader/CircleLoader";
import Layout from "../App/Layout/Layout";



import {
    StyledButton,
    StyledText,
    MainWrapper,
    CardWrapper,
    ViewMoreButton,
    ViewMoreCard,
    AbourUsText,
    CanselViewMoreButton
} from "./Home.styled"
import { useState } from "react"
import { getAllTables } from "../../server";
import CardItem from "../../components/CardItem/CardItem";


const homeText = {
    text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
    scelerisque tristique neque, eget facilisis purus consequat sit
    amet. Nulla iaculis felis eget rutrum blandit. Morbi volutpat sapien
    eget odio gravida, eu placerat erat eleifend. Aliquam erat volutpat.
    Quisque sed tincidunt felis. Sed bibendum`
};


    const Home = () =>{
        const [tables,setTables] = useState([])
        const [showMore, setShowMore] = useState(true);
        const [count, setCount] = useState(3);
        const [isVisible,setIsVisible] = useState(false);
        const [isLoading, setIsLoading] = useState(false);
    
        const showMoreButton = () => {
            setIsVisible(true)
        }

        const showCanselMoreButton = () => {
            setIsVisible(false)
        }

        useEffect(()=>{
            setIsLoading(true);
            getAllTables().then((tables)=>{
                setTables(tables)
                setIsLoading(false);
            }
            )
        },[])

    return(
        <div>
            <MainWrapper>
            {isLoading ? <CircleLoader/> : ''}
                <img style={{marginLeft:100,width:500,height:500}} src={Picture}/>
                <StyledText>
                    <p>{homeText.text}</p>
                    <StyledButton>
                    Detail
                </StyledButton>
                </StyledText>
            </MainWrapper>
            <CardWrapper>

                {tables.map(({title,text,image,price, size, color},idx)=>(
                    <CardItem
                        key= {idx}
                        title={title}
                        text = {text}
                        image= {image}
                        price={price}
                        size={size}
                        color={color}
                        id={idx}
                    />
                ))}
            </CardWrapper>

            <ViewMoreButton onClick={showMoreButton}>
                View More
            </ViewMoreButton>
            <div style={{display: isVisible ? 'flex' : 'none'}}>
                <ViewMoreCard>
                    <img style={{marginLeft:100,width:500,height:500}} src={Picture2}/>
                        <AbourUsText>
                            <h2>About Us</h2>
                            <p>At Fusniture shop, we strive for higher standards of quality and creativity. Each of our tables is a unique masterpiece, created using the highest quality materials and taking into account the latest trends in furniture design. We not only sell furniture, we create art objects that will please you not only with their functionality, but also with their aesthetics. Every element of our tables is chosen with attention to detail to ensure you reliability and beauty for years to come.</p>
                        </AbourUsText>
                </ViewMoreCard>
            </div>
            <CanselViewMoreButton onClick={showCanselMoreButton}>
                View Less
            </CanselViewMoreButton>
        </div>
    )
}

export default Home;