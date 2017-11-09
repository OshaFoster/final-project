import React from "react";

function AddComponent(props){

    return(
        <div>
            <form className="addDiv" onSubmit={props.handleSubmit}>
                <input className="addInput"onChange={props.handleChange}value={props.inputs.title}name="title"type="text"placeholder="Recipe Title: Required "></input>
            <input className="addInput"onChange={props.handleChange}value={props.inputs.description}name="description"type="text"placeholder="Recipe Description:"></input>
        <input className="addInput"onChange={props.handleChange}value={props.inputs.url}name="url"type="text"placeholder="Recipe Url: Required"></input>
                <input className="addInput"onChange={props.handleChange}value={props.inputs.notes}name="notes"type="text"placeholder="Notes:"></input>
            <button className="addButton"type="submit">Add Recipe</button>
            </form>

        </div>
    )
}

export default AddComponent
