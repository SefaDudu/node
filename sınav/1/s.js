const express=require("express");

const app = express();

app.use(express.json())//json anlaması için 
const lessons = [
    {id: 1,name: 'Fizik'},
    {id: 2,name: 'Kimya'},
    {id: 3,name: 'Mat'},
];

// app.get("/api/lesson",(req,res)=>{

//     res.status(200).send(lessons);
// })
// app.post("/api/lesson",(req,res)=>{

//     const lesson = {id:lessons.length + 1 , name:req.body.name}
//     lessons.push(lesson);
//     res.status(200).send(lesson);
// })

// app.get("/",(req,res)=>{

//    res.sendFile("/views/index.html",{root:__dirname})
// })

// app.get('/users/:id', (req, res) => {
//     res.status(200).send(`<h1>User ID: ${req.params.id}</h1>`);
// });

app.listen(3000, () => console.log("Server running"));