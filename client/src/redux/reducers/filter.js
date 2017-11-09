const filter = function(prevFilter = "", action){
    switch(action.type){

        case "SEARCH_RECIPE":
        return action.query
        
        default:
        return prevFilter
    }
}

export default filter;
