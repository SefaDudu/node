// B. path : dosya yolunu daha güvenli bir şekilde vermemiz için kullanılır
// • path.join : her sisteme (windows, linux gibi) uygun directory yolunu verir. Verilen
// parametreleri dosya yolu olarak birleştirir.
// • __dirname : tam klasör uzantısını verir. NOT : path.join(__dirname, '..',); => bir
// dosya geri giderek uzantıyı verir.
// • path.resolve() : __dirname gibi tam uzantısını verir. parametre / konulursa, o slash
// sonrasını getirir.
// • path.parse : path ayrıntısını verir
// • path.basename : path deki son dosyayı verir. (first.jpeg gibi)
// • path.extname : dosya uzantısını verir. (.jpeg)
// - url : url, ile ilgili bilgileri içerir. Kullanım; const url = new URL(pageURL);
const path = require('path');

console.log(path.join('first', 'second')); // first/second

console.log(path.join(__dirname, '..',));  // dirname -> tam sayfa uzantısı

console.log(path.resolve('first')); // tam sayfa uzantısı

console.log(path.resolve('/first', 'second')); // D:/first/second -> ana dizine ekleme

const fullPath = path.resolve("first.jpeg"); // D:/first.jpeg
console.log(path.basename(fullPath)); // first.jpeg
console.log(path.extname(fullPath)); // .jpeg -> dosya uzantısı

const pageURL = "http://localhost:9001/user?id=400";
const url = new URL(pageURL);
console.log(url);


console.log(path.resolve(__dirname,"sefa"))