const errorHandler = (err, req, res , next ) => {

console.log(err);
res.status(500).send(err.errorMessage)

} 
module.export = errorHandler;