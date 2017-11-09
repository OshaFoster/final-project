import React from "react";

function EditComponent(props) {

    return (
        <div className="editDiv">
            <button className="editButton" onClick={props.handleToggle}>Edit</button>
            <form className="editDiv" div style={{display:props.toggleShow ? "inherit" : "none"}} onSubmit={props.handleSubmit}>
                <input className="addInput" type="text" name="title" onChange={props.handleChange}  value={props.inputs.title} placeholder="Title Edit:"></input>
            <input className="addInput" type="text" name="description" onChange={props.handleChange} value={props.inputs.description} placeholder="Description Edit:"></input>
        <input className="addInput" type="text" name="url" onChange={props.handleChange} value={props.inputs.url} placeholder="Url Edit:"></input>
    <input className="addInput" type="text" name="notes" onChange={props.handleChange} value={props.inputs.notes} placeholder="Notes Edit"></input>
<button className="submitEdit" type="submit" onClick={props.handleToggle}>Submit Edit</button>
            </form>
        </div>
    )
}

export default EditComponent
