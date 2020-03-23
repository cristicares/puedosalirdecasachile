import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "../components/Home";
import Collaborate from "../components/colaborate/Collaborate";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/colabora" component={Collaborate} />
        </Switch>
    );
}
