import React, {Component} from "react";
import logo from "./logo.png";

class Shelf extends Component {
    render() {
        return(
            <div>
                <h1>
                    Shelf
                </h1>
                <header className="header">
                    <img className="logo" src={logo} alt="Shelfie logo"/>
                </header>
            </div>
        )
    }
}
export default Shelf;