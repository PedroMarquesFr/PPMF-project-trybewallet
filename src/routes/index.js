import React from "react";
import { Switch, Route } from "react-router-dom";
import {Login, Wallet} from '../pages';

export default function Routes(){
    return (
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route path="/wallet" component={Wallet}/>
        </Switch>
    )
}