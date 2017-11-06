import React from "react"
import {connect} from "react-redux";
import {recipes} from "../../redux/actions";
import {Link} from "react-router-dom";
import EditContainer from "./editForm/Container"

function ListComponent(props){
    return(
        <div>
        <div className="recipeDiv">
            <h2><span>Title:</span> {props.recipe.title}</h2>
        <h2><span>Description:</span> {props.recipe.description}</h2>
    <span>Link: </span><Link to={`/${props.recipe._id}`}>Link To Recipe</Link>
        <div className="notesDiv"><span>Notes: </span><p style={{display: "inline"}}>{props.recipe.notes}</p></div>
    <button className="deleteButton"onClick={()=>{props.deleteRecipe(props.recipe._id)}} type="button">Delete</button>
            </div>
            <EditContainer recipe={props.recipe}/>
            </div>
    )
}

export default connect(null, recipes)(ListComponent);
