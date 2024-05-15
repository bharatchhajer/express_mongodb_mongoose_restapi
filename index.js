const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const routes = require('./routes');


const app = express();
//express.request(bodyParser.json());
app.use(bodyParser.json());
app.use('/',routes);

const server = app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

function gracefulshutdown() {
    console.log("Shutting down");
    server.close(() => {
        console.log("HTTP server closed.");
        
        // When server has stopped accepting 
        // connections exit the process with
        // exit status 0        
        //process.exit(0); 
    });
}

process.on("SIGTERM", gracefulshutdown);
module.exports = {app,server}; 

