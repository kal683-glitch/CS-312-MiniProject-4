import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
let posts = [{
    title: "I'm a blog!",
    name: "Kenji",
    time: "August 19, 1975 23:15:30",
    body: "Create a blog using the input forms above!"}];

app.use(cors({ origin: "http://localhost:5173"}));
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    res.json(posts);
})

app.get("/posts", (req, res) =>{
    // res.set("Access-Control-Allow-Origin" , "http://localhost:5173");
    res.json(posts);
})

app.post("/submit", (req, res) =>{
    console.log(req.body);
    posts.push({title: req.body.title,
    name: req.body.name,
    time: req.body.time,
    body: req.body.body});
    console.log(req.body);
    res.json({"message": "Form Submitted"})
});

app.listen(5000, () => { console.log("Server started on port 5000")});