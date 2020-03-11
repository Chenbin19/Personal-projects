const express = require('express');
const bodyParser = require('body-parser');
//const session=require("express-session");
const index=require("./routes/index");
const details=require("./routes/details");
const users=require("./routes/users")

var app = express();
var server = app.listen(3000);
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
// app.use(session({
//     secret:'随机字符串',
//     resave:false,
//     saveUninitialized:true
// }));
app.use("/index",index);
app.use("/details",details);
app.use("/users",users);

