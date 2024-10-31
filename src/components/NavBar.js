import React from "react";

import '../styles/NavBar.css';

const NavBar = () => {
    return (
        <div className="navbar-wrapper">
            <section className="navbar-left">
                <p>Left</p>
            </section>

            <section className="navbar-center">
                <a href="">Home</a>
                <a href="">Recipes</a>
                <a href="">Groceries</a>
            </section>
            
            <section className="navbar-right">
                <p>Right</p>
            </section>
        </div>
    );
} 

export default NavBar;