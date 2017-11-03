import recipes from "./recipes";

let state ={
    recipes:[]
}

function reducer(prevState=state, action){
    return{
        recipes: recipes(prevState.recipes, action)
    }
}

export default reducer;
