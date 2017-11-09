import React from "react";
import SearchComponent from "../search/Component"


class LinkComponent extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <SearchComponent/>
            </div>
        )
    }
}

export default LinkComponent
