const fs = require("fs");
const path=require("path");
//dosyayı parça parça alıp okumak datayı bölelim sonra buffer tampon bölgesine alalım. ve datayı aktaralım çoklu veriler için 
// fs.readFile(path.resolve(__dirname,"testdata.txt"),(err,data)=>{
//     if(err){
//             throw err
//     }
//     console.log(data);
// })
//data almak için
const readStream=fs.createReadStream(path.resolve(__dirname,"testdata.txt"),"utf-8")

// stream.on("open",()=> console.log("start"))
// stream.on("data",(chunk)=>{

// console.log(chunk)

// });

// stream.on("end",()=> console.log("end"))


//auth of memory hatası verinin ramde tutulmasını sağlar.
const writeStream= fs.createWriteStream(path.resolve(__dirname,"testdata.txt"))
for (let i = 0; i < 10; i++) {
   console.log(writeStream.write(i+'\n'));
}
// ordan oku ve buraya yaz 
readStream.pipe(fs.writeStream)
writeStream.end();
writeStream.close();
writeStream.destroy();