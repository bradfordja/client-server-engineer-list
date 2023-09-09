// siteModel.js
const { sql } = require('./dbConfig');

async function getEngineerBySite(siteId) {
  try {
    const pool = await sql.connect();
    const result = await pool
      .request()
      .input('siteId', sql.Int, siteId)
      .query('SELECT * FROM engineers WHERE siteId = @siteId');
    return result.recordset;
  } catch (err) {
    console.error('Error retrieving engineer by site:', err.message);
    throw err;
  }
}

// Implement other CRUD operations for site locations
// ...

module.exports = {
  getEngineerBySite,
  // Add other CRUD methods here
};
