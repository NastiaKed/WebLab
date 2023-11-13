import React from "react";
import { Wrapper, 
    IconsWrapper, 
    VerticalLine, 
    LogoWrapper, 
    StyledText, 
    IconBase 
} from "./Footer.styled";

import {
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined,
    ShopOutlined
} from "@ant-design/icons";

import { BrowserRouter as Router, NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <Wrapper>
            <div style={{display: "flex", width:"100%", alignItems: "center", justifyContent: "space-around"}}>
                <div style={{width: 300, height: 200}}>
                    <h1>Branding stuff</h1>
                    <p>Lorem ipsum dolor sit amet, consectrtur 
                        adipiscing elit. Nunc maximus, nulla ut 
                        commodo
                    </p>
                </div>
                <LogoWrapper>
                    <IconBase component = {ShopOutlined} />
                    <h1 style={{marginRight: 185}}>Furniture shop</h1>
                </LogoWrapper>
                <IconsWrapper >
                    <IconBase component={YoutubeOutlined} color='#3A9F4' style={{width: 30, height: 30}}/>
                    <IconBase component={TwitterOutlined} color='#3A9F4' style={{width: 30, height: 30}}/>
                    <IconBase component={LinkedinOutlined} color='#3A9F4' style={{width: 30, height: 30}}/>
                    <IconBase component={InstagramOutlined} color='#3A9F4' style={{width: 30, height: 30}}/>
                </IconsWrapper>
            </div>
            <VerticalLine />
            <StyledText>© Clay Shop all rights reserved</StyledText>
        </Wrapper>
    );
};

export default Footer;