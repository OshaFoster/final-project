
import axios from "axios";

const recipesUrl="http://localhost:8008/recipes/";

export function loadRecipes(){
    return (dispatch)=>{
        axios.get(recipesUrl).then((response)=>{
            dispatch({
                type: "LOAD_RECIPES",
                recipes: response.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export function addRecipe(recipe){
    return(dispatch)=>{
        axios.post(recipesUrl, recipe).then((response)=>{
            console.log(response.data);
            dispatch({
                type: "ADD_RECIPE",
                recipes: response.data

            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export function deleteRecipe(id){
    return(dispatch)=>{
        axios.delete(recipesUrl+id).then((response)=>{
        dispatch({
            type:"DELETE_RECIPE",
            id
        })
    })
    .catch((err)=>{
        console.log(err)
    })
    }
}

export function editRecipe(id, editedRecipe){
    return(dispatch)=>{
        axios.put(recipesUrl+id, editedRecipe).then((response)=>{
            dispatch({
                type:"EDIT_RECIPE",
                editedRecipe: response.data,
                id
            })
        })
        .catch((err)=>{
      console.log(err)
    })
    }
}

export function searchRecipe(query){
    console.log(typeof query)
    return {
        type:"SEARCH_RECIPE",
        query
    }
}
