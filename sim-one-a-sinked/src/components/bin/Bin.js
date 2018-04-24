import React, {Component} from "react";
import logo from "./logo.png";
import "./bin.css";
import corgi from "./corgi.jpg";

class Bin extends Component {
    componentDidMount(){
        
    }

    render() {
        return(
            <div>
                <header className="header">
                    <h1>{this.props.test}</h1>
                    <a href="/#/">
                        <img className="logo" src={logo} alt="Shelfie logo"/>
                    </a>
                    <a href="/#/shelf_a" className="shelf-breadcrumb">
                        <p>Shelf A</p>
                    </a>
                    <div className="bin-name">
                        <p>Bin{this.props.binContent.bin_id}</p>
                    </div>
                </header>
                <center className="bin-contents">
                    <div className="image-container">
                        <div className="image-container">
                            <img className="product-image" src={corgi} alt="Link the slutty corgi"/>
                        </div>
                    </div>
                    <div className="product-info-container">
                        <div>
                            <p>name</p>
                            <div className="product-container">
                                <h2>{this.props.binContent.product_name}</h2>
                            </div>
                            <p>price</p>
                            <div className="price-container">
                                <h2>{this.props.binContent.price}</h2>
                            </div>
                            <div className="edit-buttons">
                                <button className="green-button">SAVE</button>
                                <button className="gray-button">DELETE</button>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        )
    }
}
export default Bin;