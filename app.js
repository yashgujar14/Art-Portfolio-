const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./DB/connection");

const Feedback = require("./models/feedback")

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname,"../public");

const views_path = path.join(__dirname,"../views");



app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", views_path)



//All Get Methods
app.get("/",(req,res) => {
    res.render("index");
});
app.get("/contact",(req,res) =>{
    res.render("contact");
})
app.get("/about_us",(req,res)=>{
    res.render("about_us");
})
app.get("/gallery",(req,res) =>{
    res.render("gallery");
})


// POST REQUESTS 

app.post("/contact", async(req,res) => {
    try {
        const feed = new Feedback({
            Name:req.body.Name,
            email_id:req.body.email_id,
            Mobile_No:req.body.Mobile_No,
            More_Info:req.body.More_Info 
        })
        feed.save()
        .then(data => {
            res.render('contact',
            {msg : "Your feedback submitted successfully"})
        })

        
    } catch (err) {
        res.render('contact');
        console.log(400).send(err);
        
    }
})


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})