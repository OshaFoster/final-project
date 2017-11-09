import React from "react";
import {Link} from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <div className="nav">
            <Link to="/search">Recipe Search</Link>
            <Link to="/">Home</Link>
            </div>
            <div className="title">
                <h1 >Good Food!</h1>
            <h4>A Recipe Box </h4>
            </div>
        </div>
    )
}

export default Header
