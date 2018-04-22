import React, {Component} from "react";
import logo from "./logo.png";
import "./shelf.css";
import axios from "axios";

class Shelf_c extends Component {
    constructor(){
        super();
        this.state = {
            shelfContent: []
        }
        this.getShelfContent = this.getShelfContent.bind(this)
    }

    getShelfContent(){
        axios.get("/api/get_shelf_content")
        .then(res => {
            console.log("shelf content?", res.data)
            this.setState({
                shelfContent: res.data
                }
            )
        })
    }



    componentDidMount(){
        this.getShelfContent();
    }

    render() {
        return(
            <div>
                <header className="header">
                    <a href="/#/">
                        <img  className="logo" src={logo} alt="_ie logo"/>
                    </a>
                    <div className="shelf-header">
                        <h1>Shelf C</h1>
                    </div>
                </header>
                <center className="bin-container">
                    <a className="bin" href="/#/bin">
                        <p>Bin 1</p>
                    </a>
                    <div className="bin">
                        <p>Bin 2</p>
                    </div>
                    <div className="bin">
                        <p>Bin 3</p>
                    </div>
                    <div className="bin">
                        <p>Bin 4</p>
                    </div>
                    <div className="add-inventory">
                        <p>+ Add Inventory</p>
                    </div>
                </center>
            </div>
        )
    }
}
export default Shelf_c;