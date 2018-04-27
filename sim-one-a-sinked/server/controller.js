const chalk = require("chalk");
let ctrlrChalk = chalk.cyan;

module.exports = {
    // getShelf: (req, res) => {
    //     const dbInstance = req.app.get("db");
    //     dbInstance.get_shelf_a([req])
    //     .then(response => {
    //         res.status(200).send(response)})
    //         .catch(err => console.log("get shelf err", err))
    // },
    getShelfById: (req, res) => {
        const dbInstance = req.app.get("db");
        dbInstance.get_shelf_content_by_id(req.params.letter)
        .then(response => {
            res.status(200).send(response)
            console.log(ctrlrChalk("shelf",res))
        })
        .catch(err => console.log(ctrlrChalk("getShelfById err:",err)))
    },
    // loadTable: (req, res) => {
    //     const dbInstance = req.app.get("db");
    //     dbInstance.load_table([req])
    //     .then(response => {
    //         res.status(200).send(response)})
    //     .catch(err => console.log("loadTableDB:",err))
    // },
    getBinById: (req, res) => {
        const dbInstance = req.app.get("db");
        dbInstance.get_bin_by_id(req.params.letter, req.params.number)
        .then(response => {
            res.status(200).send(response)
            console.log(ctrlrChalk("bin",res))
        })
        .catch(err => console.log(ctrlrChalk("getBinById err:",err)))
    },
    createProduct: (req, res) => {
        const dbInstance = req.app.get("db");
        const {productName, price} = req.body;
        console.log(ctrlrChalk("create product hit"))
        dbInstance.create_product(productName, price, req.params.letter, req.params.number)
        .then(response => {
            res.status(200).send(response)
        })
        .catch(err => console.log(ctrlrChalk(err)))
    },
    deleteProduct: (req, res) => {
        const dbInstance = req.app.get("db");
        dbInstance.delete_product(req.params.letter, req.params.number)
        .then(response => {
            res.status(200).send(response)
        })
        .catch(err => console.log(ctrlrChalk(err)))
    }

}