require("dotenv").config();
const express = require("express");
const chalk = require("chalk");
const massive = require("massive");
const bodyParser = require("body-parser");
const axios = require("axios");
const ctrlr = require("./controller");

const {
    CONNECTION_STRING,
    SERVER_PORT
} = process.env;

const app = express();
app.use(bodyParser.json())

let portChalk = chalk.white.bold;
massive(process.env.CONNECTION_STRING).then(
    db => {
        app.set("db", db)
        console.log(portChalk("MASSIVE DEMON LISTENS"))
    }
)

app.get("/api/get_shelf_content", ctrlr.getShelf)
app.get("/api/get_shelf_by_id/:id", ctrlr.getShelfById)

let port = SERVER_PORT || 9001;
app.listen(port, () => {
    console.log(portChalk("NODE DEMON SPEAKS"))
})