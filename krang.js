//  _                          
// | |                         
// | | ___ __ __ _ _ __   __ _ 
// | |/ / '__/ _` | '_ \ / _` |
// |   <| | | (_| | | | | (_| |
// |_|\_\_|  \__,_|_| |_|\__, |
//                       __/ |
//                      |___/ 
// 
// https://github.com/radenkovic

const express     = require('express');
const app         = express();
const mysql       = require('mysql');
const bodyParser  = require('body-parser');


require('dotenv');

var db = mysql.createConnection({
  host      : process.env.DB_HOST     || 'localhost',
  user      : process.env.DB_USER     || 'root', // be sure to set up user that can only READ some tables
  password  : process.env.DB_PASSWORD || '',
  database  : process.env.DB_DATABASE || 'krang',
  port      : process.env.DB_PORT     || '3307'
});

app.use( express.static('public') );
app.use( bodyParser.json() );       
app.use( bodyParser.urlencoded({extended: true}) );

app.post('/krang', (req, res) => {
  if (!req.body.query) {
    res.json({success: false, error: 'No query param provided.'});
    return;
  }
  db.query(req.body.query, (error, results) => {
    if (error) {
      res.json({ success: false, error: process.env.NODE_ENV !== 'production' ? error.code : 'Ahh, SQL query error.' });
      throw error;
      return;
    }
    res.json({success: true, results});
  });
});
  
app.listen(3000, function () {
  console.log('Krang is listening on port 3000! Send your SQL to localhost:3000/krang')
});

// Do not crash
process.on('uncaughtException', function (err) {
  console.log('Tried to crash: ' + err);
});
