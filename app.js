const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let items = ["You can also Route to Worklist", "localhost:3000/Work", "Add task by + sign"];
let workItems = [];

app.set('view engine', 'ejs');  //from ejs documentation of using ejs with express.

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));      // it will use css file we need to put our css file inside public folder

app.get("/", function (req, res) {     //syntax from how to formate date in javascript
    let day = date.getDate();
    res.render("list", { listTitle: day, newListItems: items });


});

app.post("/", function (req, res) {
    let item = req.body.newItem; //stores user input in variable 'item'

    if (req.body.list === "Work") {  //add work list items into the workItems array
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);        //add list item into the items array
        res.redirect("/");
    }


});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});

// app.post("/work", function (req, res) {

//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// });

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
