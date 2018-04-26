import React, {Component} from "react";
import logo from "./logo.png";
import "./bin.css";
import corgi from "./corgi.jpg";
import axios from "axios";
import {Link} from "react-router-dom";
// import ProductInfo from "./ProductInfo";

class Bin extends Component {
    constructor(){
        super();
        this.state = {
            productName: "",
            price: "",
            editing: false
        }
        // this.getBinContentById = this.getBinContentById.bind(this)
    }

    componentWillMount(){
        axios.get(`/api/get_bin_by_id/${this.props.match.params.letter}/${this.props.match.params.number}`)
        .then( res => this.setState({
            productName: res.data[0].product_name,
            price: res.data[0].price
        })
    )
        .catch( err => console.log(err))
        // this.getBinContentById()
        // console.log(this.state.binContent)
    }

    editing(){
        this.setState({
            editing: true
        })
    }

    save(){
        this.setState({
            editing: false
        })
    }
    
    render() {
        // console.log("state:", this.state)
        let binLetter = this.props.match.params.letter;
        let binNumber = this.props.match.params.number;
        return(
            <div>
                <header className="header">
                    <a href="/#/">
                        <img className="logo" src={logo} alt="Shelfie logo"/>
                    </a>
                    <Link className="title" to={{pathname: `/shelf/${binLetter}`}}>
                        <h1>Shelf {binLetter}</h1>
                    </Link>
                    <div className="bin-title">
                        <h1>Bin {binNumber}</h1>
                    </div>
                </header>
                <center className="bin-contents">
                    <div className="image-container">
                        <img className="product-image" src={corgi} alt="midget dog"/>
                    </div>
                    {/* {() => {
                        if(this.state.editing === true){
                            return
                            // <ProductInfo className="product-info-container" />
                            <Link className="product-info-container">
                                <p>Name</p>
                                <div className="product-container">
                                    <h2>{this.state.productName}</h2>
                                </div>
                                <p>Price</p>
                                <div className="price-container">
                                    <h2>{this.state.price}</h2>
                                </div>
                                <div className="edit-buttons">
                                    <button onClick={() => this.editing()} className="gray-button">EDIT</button>
                                    <button className="gray-button">DELETE</button>
                                </div>                              
                            </Link>
                        }else if(this.state.editing === false){
                            return
                            <Link className="product-info-container">
                                <p>Name</p>
                                <div className="product-container">
                                    <h2>{this.state.productName}</h2>
                                </div>
                                <p>Price</p>
                                <div className="price-container">
                                    <h2>{this.state.price}</h2>
                                </div>
                                <div className="edit-buttons">
                                    <button onClick={() => this.editing() & console.log(this.state.editing)} className="gray-button">EDIT</button>
                                    <button className="gray-button">DELETE</button>
                                </div>                              
                            </Link>
                            // <ProductInfo className="product-info-container" />
                        }
                    }} */}
                    <div className="product-info-container">
                        <p>Name</p>
                        <div className="product-container">
                            <h2>{this.state.productName}</h2>
                        </div>
                        <p>Price</p>
                        <div className="price-container">
                            <h2>{this.state.price}</h2>
                        </div>
                        <div className="edit-buttons">
                            <button onClick={() => this.editing()} className="gray-button">EDIT</button>
                            <button className="gray-button">DELETE</button>
                        </div>
                    </div>
                </center>
            </div>
        )
    }
}
export default Bin;