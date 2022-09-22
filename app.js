const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {

    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    // if(today.getDay() == 6 || today.getDay() == 0) {        
    //     day = "weekend";
    // } else {        
    //     day = "weekday";
    // }

    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;    
        default:
            console.log();            
    }

    res.render("list", {kindOfDay: day});
});


app.listen(1234, () => {
    console.log("server running on port 1234")
});