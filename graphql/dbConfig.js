// dbConfig.js
const sql = require('mssql');

const config = {
  user: 'your_username',
  password: 'your_password',
  server: 'your_server',
  database: 'your_database',
  options: {
    encrypt: true, // For encrypted connections
    trustServerCertificate: true, // For self-signed certificates
  },
};

async function connect() {
  try {
    await sql.connect(config);
    console.log('Connected to SQL Server');
  } catch (err) {
    console.error('Error connecting to SQL Server:', err.message);
  }
}

module.exports = {
  sql,
  connect,
};