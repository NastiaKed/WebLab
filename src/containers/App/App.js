import React from "react";

import Home from "../Home/Home";
import Catalog from "../App/Catalog/Catalog";
import SelectedItem from "../SelectedItem/SelectedItem";
import shopping from "../../Shopping/shopping";
import { CartPage } from "../App/CardItem/CartPage";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { Provider } from "react-redux";


const App = () => {
    return (
        <Provider shopping={shopping}>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element = {<Home/>}/>
                        <Route path="/catalog" element = {<Catalog/>}/>
                        <Route path="/cart" element = {<CartPage/>}/>
                        <Route path="/table/:id" element = {<SelectedItem/>}/>
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
};

export default App;