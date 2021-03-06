import React from "react";
import EditComponent from "./Component";
import {connect} from "react-redux";
import {recipes} from "../../../redux/actions"

class EditContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {

            toggleShow: false,

            inputs:{
                title:props.recipe.title,
                description:props.recipe.description,
                url:props.recipe.url,
                notes:props.recipe.notes
            }
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleToggle=this.handleToggle.bind(this);
    }

    handleChange(event){
        event.persist();
        this.setState((prevState)=>{
            return{
                inputs:{
                    ...prevState.inputs,
                    [event.target.name] : event.target.value
                }
            }
        })
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.editRecipe(this.props.recipe._id, this.state.inputs)
        }

    handleToggle(){
     this.setState((prevState)=>{
         return {
             ...prevState,
             toggleShow: !prevState.toggleShow
         };
     })
}

    render(){

        return(
            <EditComponent handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            handleToggle={this.handleToggle}
                            toggleShow={this.state.toggleShow}
                            inputs={this.state.inputs}
                                />
        )
    }
}
export default connect(null, recipes)(EditContainer)
