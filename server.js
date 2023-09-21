var express = require('express');
var app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');

app.use(cors());
app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
