const mongoose = require('mongoose');
const config = require('config');

const confighost = config.get('DB_HOST');
console.log('confighost : ' + confighost + " environent: " + process.env.NODE_ENV);
//mongoose.connect('mongodb://127.0.0.1:27017/',{useNewUrlParser:true});
//mongoose.connect(`mongodb://${process.env.DB_HOST}:27017/`,{useNewUrlParser:true});
mongoose.connect(`mongodb://${confighost}:27017/`,{useNewUrlParser:true});
const db = mongoose.connection;

db.on('error', function(err){
    console.error("connection error:", err);
});
db.once('open', function () {
    console.log('Mongodb connected successfully');
});

module.exports = db;