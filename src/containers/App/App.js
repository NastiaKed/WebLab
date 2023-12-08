import React from "react";

import Home from "../Home/Home";
import Catalog from "../App/Catalog/Catalog";
import SelectedItem from "../SelectedItem/SelectedItem";
import shopping from "../../Shopping/shopping";
import Cart from "./Card/Card";
import { BrowserRouter as Router,Route,Routes, NavLink } from "react-router-dom";
import { Provider } from "react-redux";
import { LinkingWrapper } from "../Navigation/Navigation.styles";
import Layout from "./Layout/Layout";



const App = () => {
    return (
        <Provider store={shopping}>
            <Router>
                <Layout/>
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
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/" element={ <Home/>}/>
                        <Route path="/table/:id" element={<SelectedItem/>}/>
                    </Routes>
                </LinkingWrapper>
            </Router>
        </Provider>
    );
};

export default App;