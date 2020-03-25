import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "../components/Home";
import Collaborate from "../components/colaborate/Collaborate";
import Video from "../components/video/Aplaudan";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/colabora" component={Collaborate} />
            <Route path="/aplaudan" component={Video} />
        </Switch>
    );
}
