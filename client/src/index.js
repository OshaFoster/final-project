import React from "react";
import ReactDOM from "react-dom";
import App from "./main/App";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducer from "./redux/reducers/";
import "./index.css"
import {BrowserRouter as Router} from "react-router-dom"

import thunk from "redux-thunk"

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(()=>{
    console.log(store.getState())
});

ReactDOM.render(<Router><Provider store={store}><App/></Provider></Router>, document.getElementById('root'))
