const http = require('http');
const fs=require('fs');
const path= require('path');
const PORT = 3000;
// ------------------------------------------------


// const server = http.createServer((req, res) => {
//     // const url = req.url;
//     // res.end(url); // localhostta urle  yazılan şeyi bize geri döner

//     // res.statusCode = 200;
//     // res.setHeader('Content-Type', 'text/plain');// type ne ise onu okur 
//     // res.end('Hello World');

//     // res.setHeader('Content-Type', 'text/html');
//     // res.end('<h1>Hello World</h1>');

//     // res.setHeader('Content-Type', 'application/json');
//     // res.end(JSON.stringify([{ id: 1, name: 'BIL425' }]));//içine alınan yapıyı json yapar

//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World');
// });

// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });




// ------------------------------------------------Stream dosyadan okuyup servera bnastık
const a = path.resolve(__dirname,"streamWrite.txt");
const b = path.resolve(__dirname,"html","index.html");
const c = path.resolve(__dirname,"html","about.html");

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     const readStream=fs.createReadStream(a,"utf-8");
//     readStream.pipe(res);
// });


const server = http.createServer((req, res) => {

    if(req.url==="/index"){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const readStream=fs.createReadStream(b,"utf-8");
      readStream.pipe(res);
    }
    else if (req.url==="/about")
    {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const readStream=fs.createReadStream(b,"utf-8");
      readStream.pipe(res);

    }
    
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});