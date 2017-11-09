import React from "react";
import {recipes} from "../../redux/actions"
import {connect} from "react-redux"

function SearchComponent(props){
    return(
        <input className="searchInput" onChange={(e) => {props.searchRecipe(e.target.value || ""); console.log(e.target.value)}} type="text" placeholder="search"></input>
    )
}

export default connect(null, recipes)(SearchComponent);
