const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: false
}));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});


//setting up heroku listening port
let port = process.env.PORT;
if(port == null || port == "") {
port = 3000;
}
//ejs6 new function syntax
app.listen(port, () => console.log("server started successfully"));
