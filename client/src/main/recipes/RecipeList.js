import React from "react";
import ListComponent from "./ListComponent"
import {connect} from "react-redux"
import {recipes} from "../../redux/actions"

class RecipeList extends React.Component{
    constructor(){
        super();


        this.genList =this.genList.bind(this);
}



    componentDidMount(){
        this.props.loadRecipes()
    }

    genList(){
        return this.props.recipes.map((recipe, index)=>{
            return <ListComponent key={recipe.title + index}
                                    recipe={recipe}
                                    index={index}
                                    />
        })
    }
    render(){
        return(
            <div>
                <h5>{this.genList()}</h5>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        recipes:state.recipes
    }
}

export default connect(mapStateToProps, recipes)(RecipeList)
