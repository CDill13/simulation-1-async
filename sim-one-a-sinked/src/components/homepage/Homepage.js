import React, {Component} from "react";
import logo from "./logo.png";
import "./homepage.css";

class Homepage extends Component {
    render() {
        return(
            <div className="">
                <header className="header">
                    <img href="/#/" className="logo" src={logo} alt="Shelfie logo"/>
                    <h1 className="title">SHELFIE</h1>
                </header>
                <center  className="shelf-container">
                    <a href="/#/shelf_a" className="shelf">
                        <p>Shelf A</p>
                    </a>
                    <a href="/#/shelf_b" className="shelf">
                        <p>Shelf B</p>
                    </a>
                    <a href="/#/shelf_c" className="shelf">
                        <p>Shelf C</p>
                    </a>
                    <a href="/#/shelf_d" className="shelf">
                        <p>Shelf D</p>
                    </a>
                </center>
            </div>
        )
    }
}
export default Homepage;
