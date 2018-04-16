import React from "react"
import {HashRouter, Switch, Route} from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Shelf from "./components/shelf/Shelf";
import Bin from "./components/shelf/bin/Bin";

export default (
    <HashRouter>
        <div>
            <Switch>
                <Route path="/" component={Homepage}/>                
                <Route path="/shelf" component={Shelf}/>
                <Route path="/bin" component={Bin}/>
            </Switch>
        </div>
    </HashRouter>
)