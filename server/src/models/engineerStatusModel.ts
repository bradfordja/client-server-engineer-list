// src/models/engineerStatusModel.ts
import { ConnectionPool } from 'mssql';
import { connect } from '../../dbConfig';

export interface EngineerStatus {
  id: number;
  status_name: string;
}

export async function getAllEngineerStatus(): Promise<EngineerStatus[]> {
  try {
    const pool: ConnectionPool = await connect();
    const result = await pool.request().query('SELECT * FROM EngineerStatus');
    return result.recordset;
  } catch (err) {
    console.error('Error fetching engineer status records:', JSON.stringify(err));
    throw err;
  }
}

// Implement other CRUD operations for EngineerStatus
// ...
