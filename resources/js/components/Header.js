import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-laravel">
        <div className="container">
            <Link className="navbar-brand" to="/">
                Tasksman
            </Link>
        </div>
    </nav>
);

export default Header;
