const {Router} = require("express")
const router=Router();
const Todo = require("../model/Todo")
router.get("/",async (req,res)=>{
        const todos =await Todo.find({}).lean();//lean hata vermemesi için 
        res.render('index',{
            title:"Todo List",
            isIndex:true,
            todos
        })

});


router.get("/create",(req,res)=>{

    res.render('create',{
        title:"Create List",
        isCreate:true


    })

});

module.exports=router;