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
    }

    componentWillMount(){
        //this could break state if the axios call is really fast and state is not rendered by the time it comes back
        //componentDidMount is preferrable for this reason when updating state.
        //componentWillMount wouild be fine if this was manipulating redux instead of state.
        axios.get(`/api/get_bin_by_id/${this.props.match.params.letter}/${this.props.match.params.number}`)
        .then( res => this.setState({
            productName: res.data[0].product_name,
            price: res.data[0].price
        })
    )
        .catch( err => console.log(err))
    }

    edit(){
        this.state.editing ?
        this.setState({editing: false}) &
        axios.put(`/api/update_product/${this.props.match.params.letter}/${this.props.match.params.number}`, {
            productName: this.state.productName,
            price: this.state.price
        })
        :
        this.setState({editing: true})
    }

    deleteProduct(){
        axios.put(`/api/delete_product/${this.props.match.params.letter}/${this.props.match.params.number}`)

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
    
    render() {
        let binLetter = this.props.match.params.letter;
        let binNumber = this.props.match.params.number;
        return(
            <div>
                <header className="header">
                    <a href="/#/" className="binLogoContainer">
                        <img className="logo" src={logo} alt="Shelfie logo"/>
                    </a>
                    <Link className="shelfTitle" to={{pathname: `/shelf/${binLetter}`}}>
                        <h1>Shelf {binLetter}</h1>
                    </Link>
                    <div className="binTitle">
                        <h1>Bin {binNumber}</h1>
                    </div>
                </header>
                <center className="bin-contents">
                    <div className="image-container">
                        <img className="product-image" src={corgi} alt="midget dog"/>
                    </div>
                    <div className="product-info-container">
                        <p>Name</p>
                        <input
                        className="infoDisplay" 
                        value={this.state.productName} 
                        readOnly={this.state.editing ? false : true}
                        onChange={e => this.handleNameInput(e.target.value)} />
                        <p>Price</p>
                        <input
                        className="infoDisplay" 
                        value={this.state.price} 
                        readOnly={this.state.editing ? false : true}
                        onChange={e => this.handlePriceInput(e.target.value)} />
                        <div className="edit-buttons">
                            <button 
                                onClick={() => this.edit()} 
                                className={this.state.editing ? "green-button" : "gray-button"}>
                                {this.state.editing ? "SAVE" : "EDIT"}
                            </button>
                            <Link to={{pathname: `/shelf/${binLetter}`}} >
                                <button onClick={() => this.deleteProduct()} className="gray-button">DELETE</button>
                            </Link>
                        </div>
                    </div>
                </center>
            </div>
        )
    }
}
export default Bin;