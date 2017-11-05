import React from "react"
import {connect} from "react-redux";
import {recipes} from "../../redux/actions"

function ListComponent(props){
    return(
        <div className="recipeDiv">
            <h2><span>Title:</span> {props.recipe.title}</h2>
        <h2><span>Description:</span> {props.recipe.description}</h2>
    <span>Link: </span><a href={props.recipe.url}>butts</a>
        <div className="notesDiv"><span>Notes: </span><p style={{display: "inline"}}>{props.recipe.notes}</p></div>
    <button className="deleteButton"onClick={()=>{props.deleteRecipe(props.recipe._id)}} type="button">Delete</button>
            </div>
    )
}

export default connect(null, recipes)(ListComponent);
