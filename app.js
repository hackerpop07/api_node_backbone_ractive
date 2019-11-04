const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

//set views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//import Database (mongodb)
const Database = require("./database/database");
//import router
const userRouter = require("./routers/UserRouter");
app.get("", (req, res) => {
    res.render("index");
});
app.use('/api/users', userRouter);
app.listen(3000, () => {
    console.log("listening 3000")
});
