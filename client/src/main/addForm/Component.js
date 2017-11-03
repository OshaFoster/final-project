import React from "react";

function AddComponent(props){

    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <input onChange={props.handleChange}value={props.inputs.title}name="title"type="text"placeholder="Recipe Title"></input>
                <input onChange={props.handleChange}value={props.inputs.description}name="description"type="text"placeholder="Recipe Description"></input>
                <input onChange={props.handleChange}value={props.inputs.url}name="url"type="text"placholder="Recipe Url"></input>
                <button type="submit">Add Recipe</button>
            </form>

        </div>
    )
}

export default AddComponent
