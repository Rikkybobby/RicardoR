const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get("/", function(req, res) {
  res.render("home");
});


//setting up heroku listening port
let port = process.env.PORT;
if(port == null || port == "") {
port = 3000;
}
//ejs6 new function syntax
app.listen(port, () => console.log("server started successfully"));
