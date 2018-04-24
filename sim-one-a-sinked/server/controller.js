const chalk = require("chalk");
let ctrlrChalk = chalk.cyan;

module.exports = {
    getShelf: (req, res) => {
        const dbInstance = req.app.get("db");
        dbInstance.get_shelf_a([req])
        .then(response => {
            res.status(200).send(response)})
            .catch(err => console.log("get shelf err", err))
    },
    getShelfById: (req, res) => {
        const dbInstance = req.app.get("db");
        dbInstance.get_shelf_content_by_id([req])
        .then(response => {
            res.status(200).send(response)
        })
        .catch(err => console.log("getShelfById err:",err))
    }

}