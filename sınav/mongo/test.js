var { MongoClient } = require('mongodb');

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://sefadudu:dudusefa@cluster0.uyyxm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
    try {
        //db connect
        await client.connect();
        const dbo = client.db("myFirstDatabase");

        //collection
        const users = dbo.collection("users");

        //drop collection
        //dbo.collection("users").drop(function (err, result) {
        //    if (err) throw err;
        //    console.log(result);
        //});

        //insert one
        await users.insertOne({
            name: 'Sefa Dudu',
            age: 23
        });

        //find array
        dbo.collection("users").find({}).toArray(function (err, result) {
            if (err) throw err;
            //console.log(result);
        });

        //find array with limit
        dbo.collection("users").find({}).limit(5).toArray(function (err, result) {
            if (err) throw err;
            //console.log(result);
        });

        //find array with query
        var query = { name: 'Sefa Dudu' };
        dbo.collection("users").find(query).toArray(function (err, result) {
            if (err) throw err;
            //console.log(result);
        });

        //find with sort
        var sort = { name: 1 };
        dbo.collection("users").find().sort(sort).toArray(function (err, result) {
            if (err) throw err;
            //console.log(result);
        });

        //delete one
        var deleteQuery = { name: 'Sefa Dudu' };
        dbo.collection("users").deleteOne(deleteQuery, function (err, result) {
            if (err) throw err;
            //console.log(result);
        });

        //update one
        var updateQuery = { address: 'Sefa Dudu' };
        var updateValue = { $set: { name: 'Talha Kaan Özkan' } };
        dbo.collection("users").updateOne(updateQuery, updateValue, function (err, result) {
            if (err) throw err;
            //console.log(result);
        });

    } finally {
    }
}
run().catch(console.dir);