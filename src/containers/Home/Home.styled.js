import React from "react";
import styled from "styled-components";
import { Button } from 'antd';
import TablePicture from "../../Icons/nodeland-coffee-table-medium-brown__0974637_pe812499_s5.jpg.avif";

export const MainWrapper = styled.div`
    width:100%;
    background-size: cover; // 
    height:600px;
    display: flex;


`
export const ImageWrapper = styled.div`
width: 500px;
height: 500px;
`

export const StyledText = styled.div`
    padding-top: 70px;
    margin-left: 100px;
    width:600px;
    line-height:40px;
    font-size: 20px;
    h1 {
        font-size: 40px;
        color: white;
    }
`

export const StyledButton = styled(Button)`

    background: transparent;
    border-radius: 20px;
    border-color:black;
    width:170px;
    height:40px;
    font-size:18px;
`

export const CardWrapper = styled.div`

    margin-top:80px;
    display:flex;
    width:100%;
    justify-content:space-around;
`