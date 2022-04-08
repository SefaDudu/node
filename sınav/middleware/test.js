const express=require("express");

const app = express();
// app.use((req,res,next)=>{

//     console.log("middleware")
//  next();
    
// })

// app.get("/",(req,res) => {

//    res.send("page is rendired")
// })

const auth = require("./middle/auth");
//app.use(auth); genellemeye middle atar
app.get("/users",auth,(req,res) => {

   res.send("login is rendired")
})


app.listen(3000, () => console.log("Server running"));