const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/api");
const viewRoutes = require("./routes/views");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(apiRoutes);
app.use(viewRoutes);


//CONNECTION TO DATA BASE
//LOCALDATA BASE - mongodb://localhost/workout
// 

mongoose.connect( "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false

  }
);

//MAIN PAGE
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});



app.listen(PORT, () => console.log("GO TO localhost:" + PORT));



