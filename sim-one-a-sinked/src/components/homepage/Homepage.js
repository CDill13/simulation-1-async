import React, {Component} from "react";
import logo from "./logo.png";
import "./homepage.css";
import {Link} from "react-router-dom";

class Homepage extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         shelfA: [],
    //         shelfB: [],
    //         shelfC: [],
    //         shelfD: [],    
    //     }
    // }

    // componentDidMount(){
    //     axios.get("/api/load_table")
    //     .then(res => {
    //         console.log("table:", res.data);
    //         res.data.map((element) => {
    //             if(element.shelf_id === "A"){
    //                 this.state.shelfA.push(element)
    //             }else if(element.shelf_id === "B"){
    //                 this.state.shelfB.push(element)
    //             }else if(element.shelf_id === "C"){
    //                 this.state.shelfC.push(element)
    //             }else if(element.shelf_id === "D"){
    //                 this.state.shelfD.push(element)
    //             }
    //         })
    //         console.log(this.state)
    //     })
    //     .catch(err => console.log("table:", err))
    // }

    render() {
        // let shelfAstuff = this.state.shelfA;
        // let shelfBstuff = this.state.shelfB;
        // let shelfCstuff = this.state.shelfC;
        // let shelfDstuff = this.state.shelfD;
        // console.log(shelfAstuff)
        return(
            <div className="">
                <header className="header">
                    <a href="/">
                        <img href="/#/" className="logo" src={logo} alt="Shelfie logo"/>
                    </a>
                    <h1 className="title">SHELFIE</h1>
                </header>
                <center  className="shelf-container">
                    <Link className="shelf" to={{
                        pathname: "/shelf/A",
                    }}>
                        <p>Shelf A</p>
                    </Link>
                    <Link className="shelf" to={{
                        pathname: "/shelf/B",
                    }}>
                        <p>Shelf B</p>
                    </Link>
                    <Link className="shelf" to={{
                        pathname: "/shelf/C",
                    }}>
                        <p>Shelf C</p>
                    </Link>
                    <Link className="shelf" to={{
                        pathname: "/shelf/D",
                    }}>
                        <p>Shelf D</p>
                    </Link>
                    {/* <a href="/#/shelf_a" className="shelf">
                        <p>Shelf A</p>
                    </a>
                    <a href="/#/shelf_b" className="shelf">
                        <p>Shelf B</p>
                    </a>
                    <a href="/#/shelf_c" className="shelf">
                        <p>Shelf C</p>
                    </a>
                    <a href="/#/shelf_d" className="shelf">
                        <p>Shelf D</p>
                    </a> */}
                </center>
            </div>
        )
    }
}
export default Homepage;
