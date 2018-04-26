import React from "react"
import {HashRouter, Switch, Route} from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Shelf from "./components/shelf/Shelf";
import Bin from "./components/bin/Bin";
import CreateBin from "./components/bin/createBin/CreateBin";

export default (
    <HashRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Homepage}/>                
                <Route path="/shelf/:letter" component={Shelf}/>
                <Route path="/bin/:letter/:number" component={Bin} />
                <Route path="/create_bin/:letter/:number" component={CreateBin}/>
            </Switch>
        </div>
    </HashRouter>
)