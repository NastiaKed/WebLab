import styled from "styled-components";

export const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 16px 0;
    p{
        font-size: 24px;
        margin: 0%;
    }
    
span{
    font-size: 24px;
}

ul{
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
`;

export const IconsWrapper = styled.div`
    display: flex;
    >a{
        color: black;
        padding: 0 12px;
    }
`