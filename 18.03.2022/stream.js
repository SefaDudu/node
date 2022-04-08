// E. Stream :
// - stream !== thread , bir thread değildir.
// - Stream, verilerin bütün olarak değilde parça parça transfer edilmesidir.
// - Large file ları (5GB gibi) okuyabilmek için kullanılır.
// - stream'ler birer event emitter dır. Yani akış işlemi esnasında aktarılan her bir
// parçadan haberimiz olmaktadır.
// - stream de parçalar "Buffer" nesnesinde tutulur. Her bir parça ”Chunk" ile
// isimlendirilmektedirler.
// - Her chunk akışında "data" event'ı tetiklenmektedir. Tüm veri transfer edildiğinde
// "end" eventı tetiklenmektedir.
// - 1 chunk default olarak 64KB dır - yani 64KB lık parçalar halinde alıyor
// - 4 çeşit stream yöntemi vardır. Readable, Writable, Dublex(Read and Write),
// Transform (Dublex gibi çalışır, sadece gelen datayı okurken değiştirebilir)
// - Stream Okuma :
// const stream = fs.createReadStream(path.resolve(__dirname, 'stream-img',
// 'testdata.txt'), "utf-8")
// stream.on('data', (chunk) => {
//  console.log(chunk) })
// //stream bittiğinde tetiklenen event
// stream.on('end', () => console.log('Read Completed’)) => stream bittiğinde
// tetiklenen event
// //stream başlangıcınde tetiklenir
// stream.on('open', () => console.log('Start Reading'))
// //stream hata aldığında
// stream.on('error', (e) => console.log(e))
// 7
// - Stream Yazma :
// const writeStream = fs.createWriteStream(path.resolve(__dirname, 'stream-img',
// 'testdata2.txt'))
// //testdata2.txt create yapar ve içine yazar
// for (let i = 0; i < 20; i++) {
//  writeStream.write(i + '\n');
// }
// - Stream Pipe : Kaynak ve hedef arasında bir boru hattı açarak, veri akışını
// sağlayan kanal oluşturmaktadır. Örn ;
// const streamRead = fs.createReadStream(path.resolve(__dirname, 'stream-img',
// 'testdata.txt'))
// const streamWrite = fs.createWriteStream(path.resolve(__dirname, 'stream-img',
// 'testdata3.txt'))
// streamRead.pipe(streamWrite);

const fs = require('fs');
const path = require('path');
var a = path.resolve(__dirname,"streamWrite.txt");
var b = path.resolve(__dirname,"streamRead.txt");



// const streamWrite=fs.createWriteStream(a);

// for (let i = 0; i < 10; i++) {
//     streamWrite.write(i + "\n");
// }

// const streamRead=fs.createReadStream(a,"utf-8");
// streamRead.on('data', (chunk) => {//veri okuma
//         console.log(chunk);
//     })
 
const readStream = fs.createReadStream(a, "utf-8");
const writeStream = fs.createWriteStream(b);

readStream.pipe(writeStream);

