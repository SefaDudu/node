const { rejects } = require('assert');
const fs = require('fs');
const path = require('path');
const { resolve } = require('path/posix');
var a =path.resolve(__dirname,"file.txt") ;
// create file --> dosyayı yaratmaya yarar
// fs.mkdirSync(path.resolve(__dirname, "dir"), (err) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log("dir created");

// });



//remove file yaratılan dosyayı siler

// fs.rmdir(path.resolve(__dirname,"dir"),(err)=>{

//     if(err) console.log("dosya silinemedi");
//     else console.log("dosya silindi")
// })




//dosya oluşturur ve içine veri yazar 
// fs.writeFile(path.resolve(__dirname,a),"Veri yazma",(err)=>{
// if(!err) console.log("veri yazıldı");
// })

// fs.appendFile(a,"veri eklendi",(err=>{

// if(!err) console.log("/n veri eklendi")

// }))



// fs.readFile(a,'utf8',(err,data)=>{ veri okumaya yarar
// if(!err) console.log(data)


// })

// --------------------------------------------------------------------------------------------------------------


// • file-system Bazı Problemler :
// • Problem : Dosya yazma ve yazılan dosyaya ekleme işlemlerinde, yazılacak
// verilerin belirlediğimiz sıraya göre yazılması;
// - Bu problem, asenkron olarak işlem yapan metodlardan kaynaklanmaktadır.
// Çünkü asenkron işlemlerde birbirini bekleme olmadığı için, önce biten işlem
// geriye cevap dönmektedir. Dolayısıyla sıralı olarak yazma işlemi garanti altına
// alınamaz.
// - Problem çözümü için, fonksiyonlar iç içe yazılarak cevap beklenmektedir. Örn
// fs.writeFile(path.resolve(__dirname, 'problem.txt'), 'Ali Veli Aslı 1 2 3', (err) => {
//  	 	 if (err) {
//  	 	 	 throw err;
//  	 	 }
//  fs.appendFile(path.resolve(__dirname, 'problem.txt'), 'Ekleme yapıyoruz- garantili',
// 	 	 (err)=> {
//  	 	 	 if (err) {
//  	 	 throw err
//  	 	 	 }
//  	 	 console.log("dosya içine ekleme yapıldı")
//  })
// })

// ------------------------------------------------------------------------------------------------


// örnek: dosyaya yazı yaz ve yazı ekle
var b =path.resolve(__dirname,"promiseExam.txt") 
var c =path.resolve(__dirname,"sınavExam.txt") 
var d =path.resolve(__dirname,"sınavExamCount.txt") 
const writeFileAsync = async (path,data) => {

return new Promise((resolve,reject) => {
    fs.writeFile(path,data,(err)=>{
        if(err){ reject(err.message)}
        else{resolve()}
    })
})
} 

const appendFileAsync = async (path,data) => {

    return new Promise((resolve,reject) => {
        fs.appendFile(path,data,(err)=>{
            if(err){ reject(err.message)}
            else{resolve()}
        })
    })
    } 
    const removeFileAsync = async (path) => {

        return new Promise((resolve,reject) => {
            fs.rm(path,(err)=>{
                if(err){ reject(err.message)}
                else{resolve()}
            })
        })
        } 
const readFileAsync= async (path)=>{
    return new Promise((res,rej)=>{
        fs.readFile(path,"utf-8",(err,data)=>{

            if(err) rej(err.message)
            else res(data)
        })
    })
}

        

    // writeFileAsync(b,"yazdırma")
    
    // .then(()=>{appendFileAsync(b," ekleme") })
    // .catch((err)=> {
    //     if(err){console.log(err)}
        
    // })

const text = "BIL 4 2 5";

// yazdır okut, data uzunluğunu bakşa dosyaya yazdır ,remove
writeFileAsync(c,text)
.then(()=>readFileAsync(c))
.then(data=>data.split('').length)
.then(count=>writeFileAsync(d,`file count ${count}`))
.catch((err)=>
{
    if(err) console.log(err)
})




// const fsPromise = require('fs/promises')
const fsPromise = require('fs').promises;

const fileRead = async () => {
    try {
        await fsPromise.writeFile(path.resolve(__dirname, "text.txt"), 'data');
    } catch (error) {
        console.log(error.message);
    }
}