const express = require("express");
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')
const consign = require("consign");
const cors = require("cors");

module.exports = () => {
    const app = express();
    app.use(cors())
    app.use(express.json());
    app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
    
    consign()
        .include('/src/controllers') 
        .into(app) 

    return app
}
