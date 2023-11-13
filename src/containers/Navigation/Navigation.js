import React from "react";
import {BrowserRouter as Router, NavLink,Route,Routes} from "react-router-dom";
import { LinkingWrapper } from "./Navigation.styles";
import Home from "../Home/Home";
import Catalog from "../App/Catalog/Catalog";

const Navigation = () => {
    return(
        <Router>
            <LinkingWrapper>
                <ul>
                    <li>
                        <NavLink to='/' >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/catalog' >Catalog</NavLink>
                    </li>
                    <li>
                        <NavLink to='/cart' >Cart</NavLink>
                    </li>
                </ul>
                <Routes>
                    <Route path="/catalog" element={<Catalog/>}/>
                    <Route path="/cart" element={  <div>It is cart</div>}/>
                    <Route path="/" element={ <Home/>}/>
                
                </Routes>
            </LinkingWrapper>
        </Router>
    )
}

export default Navigation;