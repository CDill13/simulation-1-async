import React, {Component} from "react";
import logo from "./logo.png";
import "./shelf.css";
import axios from "axios";

class Shelf_a extends Component {
    constructor(){
        super();
        this.state = {
            shelfContent: []
        }
        this.getShelfContent = this.getShelfContent.bind(this)
    }

    getShelfContent(){
        // axios.get("/api/get_shelf_content")
        // .then(res => {
        //     console.log("shelf content:", res.data)
        //     this.setState({
        //         shelfContent: res.data
        //         }
        //     )
        // })
        axios.get("/api/find_shelf_by_id", {params: {
            shelf_id: "A"
            }
        })
        .then( response => console.log(response))
        .catch( err => console.log(err))
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
                        <h1>Shelf A</h1>
                    </div>
                </header>
                <center className="bin-container">

                <div>
                    {/* {this.state.shelfContent.forEach(bin){
                        return{
                            <a className="bin" href="/#/bin" ></a>
                        }
                    }
                    } */}
                </div>
                    <a className="bin" test="hi" href="/#/bin">
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
                    <a href="/#/create_bin" className="add-inventory">
                        <p>+ Add Inventory</p>
                    </a>
                </center>
            </div>
        )
    }
}
export default Shelf_a;


  