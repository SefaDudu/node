const express = require("express");
const mongoose=require("mongoose");
const app = express();
const PORT = 3000;
const exhbs=require("express-handlebars");
const todoRoutes = require("./routes/todos")

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://sefadudu:dudusefa@cluster0.a6tyc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const hbs = exhbs.create({

    defaultLayout:'main',
    extname:'hbs'
    
    })
    app.engine('hbs',hbs.engine)
    app.set('view engine', 'hbs');
    app.set('views', './views');

app.use(todoRoutes);
async function start(){
try {
    await mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })

    
app.listen(PORT,()=>{
    console.log("Server Running")
})

} catch (error) {
    console.log(error)
}

}


start();
