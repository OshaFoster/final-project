import React from "react";
import SearchComponent from "./search/Component"

function Header() {
    return (
        <div className="header">
            <div className="nav">
            <SearchComponent/>
                <a href="">Contact</a>
                <a href="">Recipe</a>
                <a href="">About</a>
                <a href="">Home</a>
            </div>
            <div className="title">
                <h1 >Good Food!</h1>
            <h4>A Recipe Box </h4>
            </div>
        </div>
    )
}

export default Header
