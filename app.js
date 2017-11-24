const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bucketlist = require('./controllers/bucketlist');
const herolist = require('./controllers/herolist');
const _ = require('lodash');
const app = express();
const port = 3000;
var defaultConfig = require(path.join(process.cwd(), 'config/env/default'));
// Get the current config
var environmentConfig = require(path.join(process.cwd(), 'config/env/', process.env.NODE_ENV || app.get('env'))) || {};
var config = _.merge(defaultConfig, environmentConfig);

mongoose.connect(config.db.uri);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/bucketlist', bucketlist);
app.use('/herolist',herolist);
app.get('/', (req, res) => { res.send('invalid page');})
app.listen(port,()=>console.log(`listening to server at  ${port}`));
