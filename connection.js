const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/newFeedback",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{
    console.log("Connection Successful");
}).catch((err)=>{
    console.log(err);
})