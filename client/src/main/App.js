import React from "react"
import RecipeList from "./recipes/RecipeList.js";
import AddContainer from "./addForm/Container"

function App(){
    return (
        <div>
            <AddContainer/>
            <RecipeList/>
        </div>
    )
}

export default App;
