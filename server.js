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
mongoose.connect( "mongodb+srv://Eug-admin:admin.mongo95@cluster0.yq9ln.mongodb.net/workouts?retryWrites=true&w=majority", {
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



