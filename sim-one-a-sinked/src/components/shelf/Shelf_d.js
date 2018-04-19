import React, {Component} from "react";
import logo from "./logo.png";

class Shelf_d extends Component {
    render() {
        return(
            <div>
                <header className="header">
                    <a href="/#/">
                        <img  className="logo" src={logo} alt="_ie logo"/>
                    </a>
                    <div className="shelf-header">
                        <h1>Shelf D</h1>
                    </div>
                </header>
                <center className="bin-container">
                    <div className="bin">
                        <p>Bin 1</p>
                    </div>
                    <div className="bin">
                        <p>Bin 2</p>
                    </div>
                    <div className="bin">
                        <p>Bin 3</p>
                    </div>
                    <div className="bin">
                        <p>Bin 4</p>
                    </div>
                    <div classname="add-inventory">
                        <p>+ Add Inventory</p>
                    </div>
                </center>
            </div>
        )
    }
}
export default Shelf_d;