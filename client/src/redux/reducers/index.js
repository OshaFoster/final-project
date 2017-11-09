import recipes from "./recipes";
import filter from "./filter";

let state ={
    recipes:[],
    filter:""
}

function reducer(prevState=state, action){
    return{
        recipes: recipes(prevState.recipes, action),
        filter: filter(prevState.filter, action)
    }
}

export default reducer;
