import React, {Component} from "react";
import logo from "./logo.png";

class Bin1SA extends Component {
    render() {
        return(
            <div>
                <header className="header">
                    <a href="/#/">
                        <img className="logo" src={logo} alt="Shelfie logo"/>
                    </a>
                    <a href="/#/shelf_a" className="shelf-breadcrumb">
                        <p>Shelf A</p>
                    </a>
                    <div className="bin-name">
                        <p>
                            Bin1SA
                        </p>
                    </div>
                </header>
                <center>
                    <div className="image-container">
                        <h1>
                            IMAGE
                        </h1>
                    </div>
                    <div className="product-info-container">
                        <p>

                        </p>
                    </div>
                </center>
            </div>
        )
    }
}
export default Bin1SA;