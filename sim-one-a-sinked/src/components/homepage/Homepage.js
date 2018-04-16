import React, {Component} from "react";
import logo from "./logo.png";
import "./homepage.css";

class Homepage extends Component {
    render() {
        return(
            <div>
                <header className="header">
                    <img className="logo" src={logo} alt="Shelfie logo"/>
                    <h1>SHELFIE</h1>
                </header>
                <div className="shelf-container">
                    <div className="shelf">
                        <p>Shelf A</p>
                    </div>
                    <div className="shelf">
                        <p>Shelf B</p>
                    </div>
                    <div className="shelf">
                        <p>Shelf C</p>
                    </div>
                    <div className="shelf">
                        <p>Shelf D</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Homepage;