require("dotenv").config();
const express = require("express");
const chalk = require("chalk");
const massive = require("massive");
const bodyParser = require("body-parser");
const axios = require("axios");

const {
    CONNECTION_STRING,
    SERVER_PORT
} = process.env;

let dbChalk = chalk.white.bold;
massive(process.env.CONNECTION_STRING).then(
    db => {
        app.set("db", db)
        console.log(dbChalk("MASSIVE DEMON LISTENS"))
    }
)

const app = express();
app.use(bodyParser.json())

let port = SERVER_PORT || 4200;
let portChalk = chalk.white.bold;
app.listen(port, () => {
    console.log(portChalk("NODE DEMON SPEAKS"))
})