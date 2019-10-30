const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

//import Database (mongodb)
const Database = require("./database/database");
//import router
const userRouter = require("./routers/UserRouter");
app.use('/api/users', userRouter);
app.listen(3000, () => {
    console.log("listening 3000")
});
