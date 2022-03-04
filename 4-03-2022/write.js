const { writeFileAsync, appendFileAsync } = require('fs');
const path = require("path")

fs.mkdirSync(path.resolve(__dirname,"dir")) //klasör açıyor


fs.mkdir(path.resolve(__dirname,"dir"),(err)=>{
    if(err){
        console.log("err")
    }
    console.log("file")
})



fs.rmdir(path.resolve(__dirname,"dir"),(err)=>{
    if(err){
        console.log("err")
    }
})



const text = "BIL 4 2 5";
const url="text.txt";



 const writeFileAsync = async (path,data)=>{
    return new Promise((resolve,reject)=>fs.writeFile(path,data,(err)=>{
        if(err){
            return reject(err.message)
        }
        resolve()
    }))
}


const appendFileAsync = async (path,data)=>{
    return new Promise((resolve,reject)=>fs.appendFile(path,data,(err)=>{
        if(err){
            return reject(err.message)
        }
        resolve()
    }))
}

writeFileAsync(path.resolve(__dirname,"write.txt"),text)
    .then(() => appendFileAsync(path.resolve(__dirname,"write.txt"),text))  //thenleri sırayla yazar.
    .catch(err=>console.log(err))