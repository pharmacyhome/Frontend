import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthContainer } from '../../pages/Auth';
import { PharamcyContainer } from '../../pages/Pharamcy';

export const AppContainer = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={AuthContainer}></Route>
                <Route path="/pharamcy" component={PharamcyContainer}></Route>
            </Switch>
        </Router>
    );
}

AppContainer.displayName = 'AppContainer';