const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'bzl8bl5ob3tgtn8ljvag-mysql.services.clever-cloud.com',
  user: 'ud1a46ldagzzewqn',
  password: 'KCQr5Pko3W0kDjPTc4QX',
  database: 'bzl8bl5ob3tgtn8ljvag'
})
db.connect(function(err){
    if(err){
      console.error('Database connection failed: ' + err.stack);
      return
    }
    console.log('Connected to database');
  });

module.exports = {db}
