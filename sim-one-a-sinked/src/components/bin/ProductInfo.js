import React from "react";

export default function ProductInfo(){
    return(
        <div className="product-info-container">
            <p>Name</p>
            <div className="product-container">
                <h2>{this.props.productName}</h2>
            </div>
            <p>Price</p>
            <div className="price-container">
                <h2>{this.props.price}</h2>
            </div>
            <div className="edit-buttons">
                <button onClick={() => this.editing()} className="gray-button">EDIT</button>
                <button className="gray-button">DELETE</button>
            </div>
        </div>
    )
}