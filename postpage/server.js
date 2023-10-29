const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.json()); // Parse JSON data in requests

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


const connection=mysql.createConnection({
    host:"sql.freedb.tech",
    port:"3306",
    database:"freedb_secret",
    user:"freedb_shruti",
    password:"Sep$vqT7y5zGqqC"
});
connection.connect((err) =>{
    if(err) throw err;
    console.log('pta ni');
});





