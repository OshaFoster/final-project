import React from "react"
import RecipeList from "./recipes/RecipeList.js";
import Header from "./Header";
import {Switch, Route} from "react-router-dom";
import LinkComponent from "./recipes/LinkComponent";
import AddContainer from "./addForm/Container"
import Footer from "./Footer"

function App(){
    return (
        <div className="pageDiv">
            <Header/>
            <Switch>
                <Route exact path="/" component={AddContainer}/>
                <Route path="/search" component={LinkComponent}/>
            </Switch>
            <RecipeList/>
        <Footer/>
        </div>
    )
}

export default App;
