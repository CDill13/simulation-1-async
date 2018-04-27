import React, {Component} from "react";
import logo from "../logo.png";
import {Link} from "react-router-dom";
import axios from "axios";
import "./createBin.css"

class CreateBin extends Component{
    constructor(){
        super();
        this.state ={
            productName: "",
            price: ""
        }
    }

    handleNameInput(value){
        this.setState({
            productName: value
        })
        console.log(this.state.productName)
    }
    
    handlePriceInput(value){
        this.setState({
            price: value
        })
        console.log(this.state.price)
    }

    createProduct(){
        if(this.state.productName !== "" && this.state.price !== ""){
            axios.put(`/api/create_product/${this.props.match.params.letter}/${this.props.match.params.number}`, {
                productName: this.state.productName,
                price: this.state.price
            }, console.log(`/api/create_product/${this.props.match.params.letter}/${this.props.match.params.number}`))
        } else console.log("createProduct was invoked for some reason");
    }

    render(){
        console.log(this.state.price)
        console.log(this.state.productName)        
        let binNumber = this.props.match.params.number;
        let binLetter = this.props.match.params.letter;
        return(
            <div>
                 <header className="header">
                    <a href="/#/" className="binLogoContainer">
                        <img className="logo" src={logo} alt="Shelfie logo"/>
                    </a>
                    <Link className="shelfTitle" to={{pathname: `/shelf/${binLetter}`}}>
                        <h1>Shelf {binLetter}</h1>
                    </Link>
                    <div className="createBinTitle">
                        <h1>Add to Bin {binNumber}</h1>
                    </div>
                </header>
                    <center className="create-bin-container">
                        <p>Name</p>
                        <input 
                            type="text" 
                            placeholder="Enter product name" 
                            value={this.state.productName} 
                            onChange={ e => this.handleNameInput(e.target.value) } 
                            className="input"/>
                        <p>Price</p>
                        <input 
                            type="text" 
                            placeholder="Enter price" 
                            value={`${this.state.price}`} 
                            onChange={ e => this.handlePriceInput(e.target.value) } 
                            className="input"/>
                        <Link to={{pathname: `/shelf/${binLetter}`}}>
                            <button onClick={() => this.createProduct()} className="add2-button">+ Add Inventory</button>
                        </Link>
                    </center>
            </div>
        )
    }
}
export default CreateBin;