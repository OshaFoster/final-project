import React from "react";

function EditComponent(props) {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type="text" name="title" onChange={props.handleChange}  value={props.inputs.title}></input>
                <input type="text" name="description" onChange={props.handleChange} value={props.inputs.description}></input>
                <input type="text" name="url" onChange={props.handleChange} value={props.inputs.url}></input>
                <input type="text" name="notes" onChange={props.handleChange} value={props.inputs.notes}></input>
                <button type="submit" >Edit</button>
            </form>
        </div>
    )
}

export default EditComponent
