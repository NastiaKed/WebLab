import styled from "styled-components";
import { Button } from 'antd';
// import TablePicture from "../../Icons/nodeland-coffee-table-medium-brown__0974637_pe812499_s5.jpg.avif";

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
    /* grid-template-columns: repeat(4, 1fr); */
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly

`

export const CardWrapper2 = styled.div`

    margin-top:80px;
    display:flex;
    width:100%;
    justify-content:space-around;
`

export const ViewMoreButton = styled(Button)`
background: transparent;
    border-radius: 20px;
    border-color:black;
    width:170px;
    height:40px;
    font-size:18px;
    justify-content: center;
    margin-top: 30px;
    margin-left: 660px;
`


export const ViewMoreCard = styled.div`
    width:100%;
    background-size: cover; 
    height:600px;
    display: flex;
    margin-top: 60px;
    p {
        width:600px;
        line-height:40px;
        font-size: 20px;
        margin-left: 100px;
    }
`

export const AbourUsText = styled.div`
    margin-left: 50px;
    /* display: block; */
    h2{
        font-size: 30px;
        margin-left: 90px;
    }
    p {
        width:600px;
        line-height:40px;
        font-size: 20px;
    }
`

export const CanselViewMoreButton = styled(Button)`
    background: transparent;
    border-radius: 20px;
    border-color:black;
    width:170px;
    height:40px;
    font-size:18px;
    justify-content: center;
    margin-top: 30px;
    margin-left: 660px;
`