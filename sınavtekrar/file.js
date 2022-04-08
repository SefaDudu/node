// file-system : dosya okuma ve yazma işlemleri
// • Kullanım şekli, const fs = require(‘fs');
// • nodejs modülleri default olarak asenkrondur. Senkron çalıştırmak için özellikle
// ayrı bir metod bulunur
const { rejects } = require('assert');
const fs = require('fs');
const path = require('path');
const { resolve } = require('path/posix');
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



// • file-system Bazı Problemler :
// • Problem : Dosya yazma ve yazılan dosyaya ekleme işlemlerinde, yazılacak
// verilerin belirlediğimiz sıraya göre yazılması;
// - Bu problem, asenkron olarak işlem yapan metodlardan kaynaklanmaktadır.
// Çünkü asenkron işlemlerde birbirini bekleme olmadığı için, önce biten işlem
// geriye cevap dönmektedir. Dolayısıyla sıralı olarak yazma işlemi garanti altına
// alınamaz.
// - Problem çözümü için, fonksiyonlar iç içe yazılarak cevap beklenmektedir. Örn
// fs.writeFile(path.resolve(__dirname, 'test.txt'), 'Ali Veli Aslı 1 2 3', (err) => {
//  	 	 if (err) {
//  	 	 	 throw err;
//  	 	 }
//  fs.appendFile(path.resolve(__dirname, 'test.txt'), 'Ekleme yapıyoruz- garantili',
// 	 	 (err)=> {
//  	 	 	 if (err) {
//  	 	 throw err
//  	 	 	 }
//  	 	 console.log("dosya içine ekleme yapıldı")
//  })
// })




const writeFileAsync= async (path,data)=>{
return new Promise((res,rej)=>{

    fs.writeFile(path,data,(err)=>{
        if(err) rej(err.message)
        else res();
    })
})
}

const appendFileAsync= async (path,data)=>{
    return new Promise((res,rej)=>{
    
        fs.appendFile(path,data,(err)=>{
            if(err) rej(err.message)
            else res();
        })
    })
    }

    const removeFileAsync= async (path)=>{
        return new Promise((res,rej)=>{
        
            fs.rm(path,(err)=>{
                if(err) rej(err.message)
                else res();
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

 // yazdır okut, data uzunluğunu bakşa dosyaya yazdır ,remove
var text = " A B C 1 2 "
 const a = path.join(__dirname,"yaz.txt");
 const b = path.join(__dirname,"count.txt");

 writeFileAsync(a,text)
 .then(()=>readFileAsync(a))
 .then(data=>data.split('').length)
 .then(count=>writeFileAsync(b,count)).catch((err)=>{
if(err) console.log(err)

 })