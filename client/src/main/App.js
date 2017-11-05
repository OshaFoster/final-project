import React from "react"
import RecipeList from "./recipes/RecipeList.js";
import AddContainer from "./addForm/Container"
import Header from "./Header"

function App(){
    return (
        <div className="appDiv">
            <Header/>
            <AddContainer/>
            <RecipeList/>
        </div>
    )
}

export default App;
