const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Samarpansp@1972',
  database: 'blog_test',
  port: '3306'
})
db.connect(function(err){
    if(err){
      console.error('Database connection failed: ' + err.stack);
      return
    }
    console.log('Connected to database');
  });

module.exports = {db}