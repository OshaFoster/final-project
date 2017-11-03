import React from "react";
import {connect} from "react-redux";
import AddComponent from "./Component";
import {recipes} from "../../redux/actions/";

class AddContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            inputs:{
                title:"",
                description:"",
                url:"",
                notes:""
            }
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(event){
        event.persist()
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
        this.props.addRecipe(this.state.inputs);
        this.setState({
            inputs: {
                title:"",
                description:"",
                url:"",
                notes:""
            }
        })
    }

    render(){
        console.log(this.props)
        return(

            <AddComponent handleChange={this.handleChange}
                         handleSubmit={this.handleSubmit}
                         inputs={this.state.inputs}
                        />
        )
    }
}
export default connect(null, recipes)(AddContainer)
