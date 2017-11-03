const recipes = function(prevRecipes =[], action){
    let newRecipes =[...prevRecipes];

    switch(action.type){

        case "ADD_RECIPE":
        return newRecipes.push(action.recipes)

        case "LOAD_RECIPES":
        return action.recipes;

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
