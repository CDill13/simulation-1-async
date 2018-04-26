import React, {Component} from "react";
import logo from "./logo.png";
import "./shelf.css";
import axios from "axios";
import {Link} from "react-router-dom";

class Shelf extends Component {
    constructor(){
        super();
        this.state = {
            shelfContent: []
        }
        // this.getShelfContent = this.getShelfContent.bind(this)
        this.getShelfContentById = this.getShelfContentById.bind(this)
    }

    // getShelfContent(){
    //     axios.get("/api/get_shelf_content")
    //     .then(res => {
    //         console.log("shelf content:", res.data)
    //         this.setState({
    //             shelfContent: res.data
    //             }
    //         )
    //     })
    // }
    getShelfContentById(){
        function compare(a,b){
            if(a.bin_id < b.bin_id){
                return -1; 
            }else if(a.bin_id > b.bin_id){
                return 1;
            } else return 0;
        }
        axios.get(`/api/get_shelf_by_id/${this.props.match.params.letter}`)
        .then( response => 
            this.setState({
            shelfContent: response.data.sort(compare)
        }),
        // console.log(response)
        )
        .catch( err => console.log(err))
    }



    componentDidMount(){
        this.getShelfContentById()
    }

    render() {
        // console.log("state.shelf:", this.state.shelfContent )
        let letter = this.props.match.params.letter;
        return(
            <div>
                <header className="header">
                    <a href="/#/">
                        <img  className="logo" src={logo} alt="_ie logo"/>
                    </a>
                    <div className="shelf-title">
                        <h1>Shelf {letter}</h1>
                    </div>
                </header>
                <center className="bin-container">
                    {this.state.shelfContent.map((element) => {
                        if(element.product_name !== null){
                            return <Link key={element.bin_id} className="bin" to={{
                                pathname: `/bin/${letter}/${element.bin_id}`
                            }}>
                            <p>Bin {element.bin_id}</p>
                            </Link> 
                        } else {
                            return <Link key={element.bin_id} className="addInventory" to={{
                                pathname: `/create_bin/${letter}/${element.bin_id}`,
                            }}>
                            <p>+ Add To Inventory</p>
                            </Link>
                        }
                    })
                    }
                    {/* <a className="bin" test="hi" href="/#/bin">
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
                    </a> */}
                </center>
            </div>
        )
    }
}
export default Shelf;


  