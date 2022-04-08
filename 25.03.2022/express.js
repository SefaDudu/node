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
// app.use(express.json());
// const ss = [{ id:1, name:'sss'},{ id:2, name:'ddd'}];
// app.get("/api/test",(req,res) => {
//    res.send(ss);
// })

// app.post("/testAdd",(req,res) => {
// const lesson = {

//     id:ss.length+1,
//     name:req.body.name
// };

// if(lesson!=null){
//     ss.push(lesson);
//     res.status(200).send(lesson);
// }
//  })

app.get("/users/",(req,res) => {

    res.sendFile("views/index.html",{root:__dirname})
})
app.listen(3000, () => console.log("Server running"));