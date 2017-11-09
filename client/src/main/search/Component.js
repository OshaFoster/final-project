import React from "react";
import {recipes} from "../../redux/actions"
import {connect} from "react-redux"

function SearchComponent(props){
    return(
        <div className="searchDiv">
        <input className="searchInput" onChange={(e) => {props.searchRecipe(e.target.value || ""); console.log(e.target.value)}} type="text" placeholder="Search for Recipes: "></input>
        </div>
    )
}

export default connect(null, recipes)(SearchComponent);
