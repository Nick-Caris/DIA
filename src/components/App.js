import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {HomeScreen} from './HomeScreen/HomeScreen'
import './App.css';
import {SearchScreen} from "./SearchScreen/SearchScreen";
import {WeaponScreen} from "./WeaponScreen/WeaponScreen";
import {PartScreen} from "./PartScreen/PartScreen";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomeScreen/>
                </Route>
                <Route path="/search">
                    <SearchScreen/>
                </Route>
                <Route path="/weapon">
                    <WeaponScreen/>
                </Route>
                <Route path="/part">
                    <PartScreen/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
