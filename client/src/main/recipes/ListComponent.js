import React from "react"
import {connect} from "react-redux";
import {recipes} from "../../redux/actions"

function ListComponent(props){
    return(
        <div>{props.recipe.title}</div>
    )
}

export default connect(null, recipes)(ListComponent);
