const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname + "/date.js");

const app = express();

const items = ["Wake Up", "Do Workout", "Get Ready", "Eat Food", "Drive to Office"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// showing the home route
app.get("/", (req, res) => {

    const day = date.getDate();  // Shows the entire date
    // const day = date.getDay(); // Show the day only
    
    res.render("list", {
        kindOfDay: day,
        newListItems: items
    });
});

// getting the post request from form input
app.post("/", (req, res) => {
    const item = req.body.newItem;

    items.push(item);

    res.redirect("/");
    
    // console.log(item);
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(1234, () => {
    console.log("server running on port 1234")
});