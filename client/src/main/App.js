import React from "react"
import RecipeList from "./recipes/RecipeList.js";
import AddContainer from "./addForm/Container";
import Header from "./Header";
import {Switch, Route} from "react-router-dom";
import LinkComponent from "./recipes/LinkComponent";

function App(){
    return (
        <div className="appDiv">
            <Header/>
            
        <Switch>
            <Route exact path="/" component={RecipeList}/>
            <Route path="/:id" component={LinkComponent}/>
        </Switch>

        </div>
    )
}

export default App;
