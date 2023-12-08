import styled from "styled-components";
import { Button } from 'antd';

export const MainWrapper = styled.div`
    width:100%;
    background-size: cover; 
    height:600px;
    display: flex;
`

export const StyledT = styled.div`
    display: block;
`

export const StyledInput = styled.input`
    margin-left: 40px;
`

export const StyledB = styled.div`
    display: flex;
    margin-top: 35px;
`

export const StyledC = styled.div`
    margin-left: 100px;
    margin-top: 35px;
    font-size: 18px;
`

export const StyledName = styled.div`
    margin-left: 100px;
    width:300px;
    line-height:40px;
    font-size: 20px;
    p {
        font-size: 40px;
        color: black;
    }
`

export const StyledText = styled.div`
    width:600px;
    margin-left: 100px;
    line-height:40px;
    font-size: 20px;
    margin-top: 40px;
    p {
        font-size: 20px;
        color: black;
    }
`

export const StyledPrice = styled.div`
    width:600px;
    margin-left: 100px;
    line-height:40px;
    font-size: 20px;
    p {
        font-size: 30px;
        color: black;
    }
`


export const StyledButton = styled(Button)`
    background: transparent;
    border-radius: 20px;
    border-color:black;
    width:170px;
    height:40px;
    font-size:18px;
    display: inline;
    margin-top: 30px;
`

export const SelectItemWrapper = styled.div `
    background-color: rgba(245, 245, 245, 0.4);
`