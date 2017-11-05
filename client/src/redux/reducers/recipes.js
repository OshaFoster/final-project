const recipes = function(prevRecipes =[], action){
    let newRecipes =[...prevRecipes];

    switch(action.type){

        case "ADD_RECIPE":
        newRecipes.push(action.recipes)
        return newRecipes.reverse();

        case "LOAD_RECIPES":
        return action.recipes.reverse();

        case "DELETE_RECIPE":
        return newRecipes.filter((recipe)=>{
            return action.id !== recipe._id;
        })

        case "EDIT_RECIPE":
        return newRecipes.map((recipe)=>{
            if (action.id === recipe._id){
                return action.editedRecipe;
            }else{
                return recipe
            }
        })

        default:
        return prevRecipes
    }
}

export default recipes;
