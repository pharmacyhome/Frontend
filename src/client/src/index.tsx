import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import {AppContainer} from "./app/App";
import store from './app/store'

const app = (
    <Provider store={ store }>
        <AppContainer/>
    </Provider>
)

ReactDOM.render(
    app,
    document.getElementById("root")
);