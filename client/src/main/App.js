import React from "react"
import RecipeList from "./recipes/RecipeList.js";
import Header from "./Header";
// import Footer from "./Footer";
import {Switch, Route} from "react-router-dom";
import LinkComponent from "./recipes/LinkComponent";
import AddContainer from "./addForm/Container"

function App(){
    return (
        <div className="pageDiv">
            <Header/>
            <AddContainer/>
        <div >
            <RecipeList/>
        </div>
            {/* <Footer/> */}


        </div>
    )
}

export default App;
