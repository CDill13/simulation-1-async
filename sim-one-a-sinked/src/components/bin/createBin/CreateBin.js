import React, {Component} from "react";
import logo from "../logo.png"

class CreateBin extends Component{

    getBinId(){
        "/api/get_bin_id"
    }

    render(){
        return(
            <div>
                 <header className="header">
                    <a href="/#/">
                        <img className="logo" src={logo} alt="Shelfie logo"/>
                    </a>
                    <a href="/#/shelf_a" className="shelf-breadcrumb">
                        <p>Shelf A</p>
                    </a>
                    <div className="add2bin">
                        <p>`Add to Bin ${this.getBinId}`</p>
                    </div>
                </header>
                    <center className="create-bin-container">
                        <div className="product-info-container">
                            <div>
                                <p>Name</p>
                                <input className="product-name-input"/>
                                <p>price</p>
                                <input value={`$${""}`} placeholder="0.00" className="price-input" />
                                <button className="green-button">+ Add Inventory</button>
                            </div>
                        </div>
                    </center>
            </div>
        )
    }
}
export default CreateBin;