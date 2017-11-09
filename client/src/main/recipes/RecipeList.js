import React from "react";
import ListComponent from "./ListComponent"
import {connect} from "react-redux"
import {recipes} from "../../redux/actions"
import AddContainer from  "../addForm/Container"

class RecipeList extends React.Component{
    constructor(){
        super();


        this.genList =this.genList.bind(this);
}



    componentDidMount(){
        this.props.loadRecipes()
    }

    genList(){
        function searchRecipes(query, recipes){
            function checkWord(word){

                return word.includes(query);
            }
            function checkRecipe(recipe){
                for(let key in recipe){
                    if(recipe.hasOwnProperty(key) && typeof recipe[key] === "string"){
                    if(checkWord(recipe[key].toLowerCase())){
                        return true;
                        }
                    }
                }
                return false;
            }
            return recipes.filter(checkRecipe)
        }

        return searchRecipes(this.props.filter, this.props.recipes).map((recipe, index)=>{
            return <ListComponent key={recipe.title + index}
                                    recipe={recipe}
                                    index={index}
                                    />
        })
    }
    render(){
        return(
            <div className="parent">
            {this.genList()}
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{

        recipes:state.recipes,
        filter:state.filter
    }
}

export default connect(mapStateToProps, recipes)(RecipeList)
