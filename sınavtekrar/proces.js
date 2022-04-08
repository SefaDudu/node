// Built-in (Dahili) fonksiyonlar
// A. process : NodeJS içerisinde dahili olarak gelen ve node süreçlerini tutan bir
// nesnedir. Bazı process özellikleri ;
// • process.pid : her nodejs projesi bir unique Id ile başlar.
// • process.env : nodejs proje genelinde custom veya dahili olarak gelen
// environment değişkenlere ulaşmamızı sağlar.
// • process.argv : cmd satırından argumant yakalar. Örn; node process.js test test1
// => test ve test1 i argv içinde yakalarız.
// • process.versions : node ile ilgili bilgileri yazar
// • process.on : bazı parametreler ile birlikte kullanılır. Mesela; exit olursa, uygulama
// kapanmadan önce bu kod çalışır. Eğer uncaughtException ile kullanılırsa,
// uygulama hata verdiğinde bu kod scope düşer.

const dotenv = require('dotenv');
dotenv.config();

// console.log(process.pid);
// console.log(process.env.PORT);

console.log(process.argv);

process.on('exit', (code) => {
    console.log(code);
});