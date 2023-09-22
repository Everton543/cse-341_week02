const express = require('express');
const app = express();
const MongoClient = require('mongodb');
const mongodb = require('./db/connect');

const port = process.env.PORT || 8080;
const cors = require('cors');

app.use(cors());
app.use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
    if(err){
        console.log(err);
    } else{
        app.listen(port);
        console.log(`Connected to DB and listening on port ${port}`);
    }
});
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`)
// });
