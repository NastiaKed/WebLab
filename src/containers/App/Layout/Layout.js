import React from "react";
import {
    ShopOutlined
} from "@ant-design/icons"

import { IconsWrapper, StyledHeader } from "./Layout.styles";

import {BrowserRouter as Router, NavLink } from "react-router-dom";

const Layout = () => {
    return(
        <StyledHeader title = "Furniture shop">
            <div>
                <IconsWrapper>
                    <ShopOutlined />
                    <p>Furniture shop</p>
                </IconsWrapper>
            </div>
        </StyledHeader>
    )
}

export default Layout;