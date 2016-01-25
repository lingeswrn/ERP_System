var express = require("express");
app = express();


app.use(express.static(__dirname + '/public/view'));

app.listen(8000);
console.log("Server running on 8080");
