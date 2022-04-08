// - Event’ lar, dosya açmak, klavyeden bir tuşa basmak, bir yere bağlanmak gibi
// işlemlere denir.
// - events modülü çeşitli eylemler için olay tanımlamaya yarar.
// - modüller içerisinde olay eklemek veya kaldırmak için EventEmitter nesnesine
// sahiptir.
// - Events Property :
// • eventEmitter.on () => bir event oluşturmak için "on" kullanılır.
// • eventEmitter.emit() => on ile oluşturulan bir olayı tetiklemek için kullanılır.
// • emitter.once() => 1 kez çalıştırılabilir
// • emitter.removeAllListeners() => bütün events kaldırır
// • emitter.removeListener('message') => belirli events kaldırır

const Emitter = require('events');

const emitter = new Emitter();

emitter.on('message', (data, second) => {
    console.log(data);
    console.log(second);
});

const MSG = "mesaj";
emitter.emit('message', MSG, 222);

// emitter.removeAllListeners();