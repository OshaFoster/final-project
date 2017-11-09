import React from "react"
import {connect} from "react-redux";
import {recipes} from "../../redux/actions";
// import {Link} from "react-router-dom";
import EditContainer from "./editForm/Container"

function ListComponent(props){
    return(
        <div className="child">
        <div className="recipeDiv">
            <h2><span>Title:</span> {props.recipe.title}</h2>
            <h2><span>Description:</span>{props.recipe.description}</h2>
            <span>Link: </span><a  style={{fontSize:"20px"}} target="_tab" href={`${props.recipe.url}`} >Link To Recipe</a>
        <button className="deleteButton"onClick={()=>{props.deleteRecipe(props.recipe._id)}} type="button">Delete</button>
        <div className="notesDiv"><span>Notes: </span><h3 style={{display: "inline", fontSize:"22px"}}>{props.recipe.notes}</h3>
        </div>

        </div>
            <div clasName="editDiv">
            <EditContainer recipe={props.recipe}/>
        </div>
        </div>
    )
}

export default connect(null, recipes)(ListComponent);
