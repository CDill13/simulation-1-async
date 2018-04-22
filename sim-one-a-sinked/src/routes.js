import React from "react"
import {HashRouter, Switch, Route} from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Shelf_a from "./components/shelf/Shelf_a";
import Shelf_b from "./components/shelf/Shelf_b";
import Shelf_c from "./components/shelf/Shelf_c";
import Shelf_d from "./components/shelf/Shelf_d";
import Bin from "./components/bin/Bin";
import CreateBin from "./components/bin/createBin/CreateBin";

export default (
    <HashRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Homepage}/>                
                <Route path="/shelf_a" component={Shelf_a}/>
                <Route path="/shelf_b" component={Shelf_b}/>
                <Route path="/shelf_c" component={Shelf_c}/>
                <Route path="/shelf_d" component={Shelf_d}/>
                {/* <Route path="/bin" component={Bin}/> */}
                <Route path="/bin" render={(props) => (<Bin {...props}/>)} />
                <Route path="/create_bin" component={CreateBin}/>
            </Switch>
        </div>
    </HashRouter>
)