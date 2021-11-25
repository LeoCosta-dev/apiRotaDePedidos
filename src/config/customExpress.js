const express = require("express");
const consign = require("consign");
const cors = require("cors");
const bodyParser = require('body-parser');

module.exports = () => {
    const app = express();
    app.use(cors())
    app.use(express.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    consign()
        .include('/src/controllers') 
        .into(app) 

    return app
}
