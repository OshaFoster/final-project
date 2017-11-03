import React from "react"
import {connect} from "react-redux";
import {recipes} from "../../redux/actions"

function ListComponent(props){
    return(
        <div>
            <h5>{props.recipe.title}{props.recipe.description}</h5>

            </div>
    )
}

export default connect(null, recipes)(ListComponent);
