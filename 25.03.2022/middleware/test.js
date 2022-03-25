const express=require("express");

const app = express();
// app.get("/",(req,res) => {


//     res.send("hello-merhaba") // geri dönüş değerini buradan dönersin.

// // req ve res expressi işaret eder 

// })
// app.get("/users/",(req,res) => {

//     res.sendFile("views/index.html",{root:__dirname})
// })
// app.get("/users/:id",(req,res) => {

//    res.status(200).send(`<h1>Users ID:${req.params.id} </h1>`)
// })
// app.use((req,res,next)=>{

//     console.log("middleware")
//  next();
    
// })
// app.get("/",(req,res) => {

//    res.send("page is rendired")
// })

// const auth = require("./middle/auth");
// const logger = require("./middle/logger");

// app.use((req,res,next)=>{
// logger(`${req.method}\t${req.url}`,'log.txt')
// next()
// })
// // app.use(auth); genellemeye middleware
// app.get("/users",auth,(req,res) => {

//    res.send("page is rendired")
// })
const errorHandler = require("./middle/errorHandler")
// const cors = require("cors");

//  app.use(cors({
//    origin: ['http://localhost:3000/', 'https://www.google.com/']
// }));
app.get("/test/:id",(req,res,next) => {

   if(req.params.id==1){ 
next({
   errorMessage:"Hata"
})

   }
  
});

app.use(errorHandler)
app.listen(3000, () => console.log("Server running"));