const express=require("express");

const app = express();
// app.use((req,res,next)=>{

//     console.log("middleware")
//  next();
// })
// app.get("/",(req,res) => {
//    res.send("page is rendired")
// })
const auth = require("./middle/auth");
//app.use(auth); genellemeye middle atar
const errorHandler = require("./middle/errorHandler");
app.use(express.static('public'));//static class
app.use(express.urlencoded({extended:false}));//urlden html tagları yollamayı engeller
const cors = require('cors');

app.use(cors());//web tarayıcısı tarafından yönetilen ve ek HTTP başlıkları kullanılarak, bir kökende çalışan web uygulamasının, 
//farklı bir kökende yer alan web uygulamasına erişim izni kontrolünü sağlayan mekanizmadır.
// Web uygulaması, internet tarayıcısı üzerinden farklı bir kökene (protokol, domain ve port) herhangi bir istek gönderirse cross-origin HTTP isteği oluşturmuş olur.
// app.get("/users",auth,(req,res) => {

//    res.send("login is rendired")
// })
// app.get('/test/:id', (req, res,next) => {
//    if (req.params.id == 1) {
//        next({
//            errorMessage:'Hata'
//        });
//    }
// });

const logger=require('./middle/logger');
app.get('/users',
(req, res) => {
    logger(`${req.method}\t${req.url}`, 'log.txt');
},
(req, res) => {
    res.send('users page');
});



app.use(errorHandler);//Hata işleme bir bilgisayar programının çalıştığı sırada hata ya da istisnai bir durumla karşılaşması durumunda meydana gelen özel durumda yapılması gereken işlemlerin genel adıdır. Özelleşmiş programlama dili yapıları, kesme gibi donanım işlergeleri ve işletim sistemleri tarafından yerine getirilebilmektedir.
app.listen(3000, () => console.log("Server running"));