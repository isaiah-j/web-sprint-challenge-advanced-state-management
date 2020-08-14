import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {reducer} from './redux/rootReducer'
import thunk from 'redux-thunk'

let store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById("root"));
