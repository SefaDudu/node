const { read } = require('fs');
const path = require("path")
const fsPromise=require('fs').promises;
const fileRead= async() =>{

    try {
        await fsPromise.writeFile(path.resolve(__dirname,"write.txt"))
    } catch (error) {
        
    }
}