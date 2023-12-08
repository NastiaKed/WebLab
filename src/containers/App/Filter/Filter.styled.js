import React from "react";
import styled from "styled-components";
import { Button, Select } from "antd";

export const StyledBlock = styled.div`
margin-top:50px;
        width:100%;
        display:flex;
        justify-content : space-around;

`
export const FiltersWrapper = styled.div`

        width:600px;
        display:flex;
        justify-content : space-around;
`
export const CatalogFiltersBox = styled.div`

        /* width:600px; */
        display:flex;
        /* justify-content : space-between; */
`

export const StyledButton = styled(Button)`
        width:150px;
`
export const ClearFilterButtom = styled(Button)`
        width:150px;
`
export const StyledSelect = styled(Select)`
        width:150px;
`
export const FilterComponent = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
`

export const FilterName = styled.div`
        /* border-radius: 100px;
        margin-top: 1rem;
        margin-bottom: 1rem;
        background-color: $grey;
        width: 500px;

        display: flex;
        justify-content: space-between;

        input {
                font-size: 1.5rem;
        width: 100%;
        color: black;
        padding: 0.5rem 1rem;
        background-color: $grey;
        outline: none;
        border: 1px solid $grey;
        border-radius: 100px;
        transition: 0.3s ease-in-out;
        } */
`
export const SliderPrice = styled.div`
        display: flex;
        align-items: center;

        font-size: 1.25rem;
`

export const FilterPrice = styled.div`
        border-color: $sky;
`