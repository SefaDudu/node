const Emitter = require('events');

const emitter = new Emitter();
emitter.on("message",(data,second)=>{

console.log(data);
console.log(second);


})
emitter.emit('message', 'sada', 422)