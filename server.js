const express = require('express');
const mysql = require('mysql2');
// const { default: ProfileForm } = require('./profile/profile');
const bodyParser = require('body-parser');
const app = express();
const port = 5001;
app.use(express.json());


const connection=mysql.createConnection({
    host:"sql.freedb.tech",
    port:"3306",
    database:"freedb_secret",
    user:"freedb_shruti",
    password:"gV97&2m2mnShskr"
});

connection.connect((err) =>{
    if(err) throw err;
    console.log('pta ni');
});




app.post("/profile",(req,res)=>{
    const { fullname, phoneno, dob, year, branch } = req.body;
    const insertSQL = 'INSERT INTO account (full_name, phone_no, dob, year, branch) VALUES (?, ?, ?,?,?)';
  const values = [fullname, phoneno, dob,year,branch];

  connection.query(insertSQL, values, (err, result) => {
    if (err) throw err;
    console.log('Data added successfully');
})

})


app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    const providedUsername = username;
    const providedPassword = password;
  
    const sql = `
      SELECT *
      FROM secrets
      WHERE email = ? AND enrollment_no = ?;
    `;
  
    connection.query(sql, [providedUsername, providedPassword], (err, rows) => {
      if (err) {
        console.error('Error querying the database: ' + err.stack);
        return;
      }
      if (rows.length === 1) {
        res.send({ message: "success" });
        res.status(200);
      } else {
        res.send({ message: "Authentication failed" });
        res.status(500)
      }
    });
  });

 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Upload a tweet



 



// Retrieve all tweets
app.get('/posts', (req, res) => {
  const retriveSQL=('SELECT * FROM postinfo0', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ tweets: rows });
  });
});


app.get('/home', (req, res) => {
  const id = req.params.id;

  const upvateSQL=('UPDATE postinfo SET upvotes = upvotes + 1 WHERE id = ?', id, function (err)  {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Upvoted successfully' });
  })});
  app.get('/api/fetchpostinfo', (req, res) => {
    // SQL query to fetch data from the "users" table
    const sql = 'SELECT * FROM postinfo';
  
    connection.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching data: ' + err.message);
        res.status(500).json({ message: 'Error fetching data' });
      } else {
        res.json(results); // Send the data as JSON
      }
    });
  });


app.listen(port, () => {
  console.log("Server is running on http://localhost:${port}");
});


app.listen(5000,()=>{
    console.log("server on");
})