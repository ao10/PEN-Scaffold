// Imports dependencies and set up http server
// import { express } from "../node_modules/express/lib/express";
const express = require('express')
// import { bodyParser } from "../node_modules/body-parser";
const bodyParser = require('body-parser')
// import { cors } from "cors";
const cors = require('cors');
// creates express http server
const app = express().use(bodyParser.json());
app.use(cors());

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('Server is running'));

app.get('/test', (req, res) => {
    console.log(req);
});