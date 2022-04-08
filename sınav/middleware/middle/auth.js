const auth= (req,res,next)=>{

    console.log(`authenticaon işlemi ${new Date().toUTCString()}`)
    next();
    }
    module.exports = auth;