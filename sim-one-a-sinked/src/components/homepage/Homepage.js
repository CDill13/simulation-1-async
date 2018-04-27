import React, {Component} from "react";
import logo from "./logo.png";
import "./homepage.css";
import {Link} from "react-router-dom";

class Homepage extends Component {
    render() {
        return(
            <div className="">
                <header className="header">
                    <a href="/" className="logo-container" >
                        <img href="/#/" className="logo" src={logo} alt="Shelfie logo"/>
                    </a>
                    <h1 className="title">SHELFIE</h1>
                </header>
                <center  className="shelf-container">
                    <Link className="shelf" to={{
                        pathname: "/shelf/A",
                    }}>
                        <p>Shelf A</p>
                    </Link>
                    <Link className="shelf" to={{
                        pathname: "/shelf/B",
                    }}>
                        <p>Shelf B</p>
                    </Link>
                    <Link className="shelf" to={{
                        pathname: "/shelf/C",
                    }}>
                        <p>Shelf C</p>
                    </Link>
                    <Link className="shelf" to={{
                        pathname: "/shelf/D",
                    }}>
                        <p>Shelf D</p>
                    </Link>
                </center>
            </div>
        )
    }
}
export default Homepage;
