// dbConfig.ts
import { ConnectionPool, config } from 'mssql';

const dbConfig = {
  user: 'your_username',
  password: 'your_password',
  server: 'your_server',
  database: 'your_database',
  options: {
    encrypt: true, // For encrypted connections
    trustServerCertificate: true, // For self-signed certificates
  },
};

export async function connect(): Promise<ConnectionPool> {
  try {
    const pool = await new ConnectionPool(dbConfig);
    await pool.connect();
    console.log('Connected to SQL Server');
    return pool;
  } catch (err) {
    console.error('Error connecting to SQL Server:', JSON.stringify(err));
    throw err;
  }
}