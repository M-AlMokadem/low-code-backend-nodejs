var express = require("express");
var router = express.Router();
var { Application } = require("../models/application.model");
var auth = require("../middleware/auth");


let applicationObject = new Object();

router.post("/add", async (req, res) => {

    try {

            applicationObject.append(req.body);
        
        if(result){
            res.status(200).send("Appended Successfully!");
        }
    } catch (error) {
        return res.status(400).send(error.message);
    }
});

module.exports = router;


