// engineerModel.js
const { sql } = require('./dbConfig');

async function getEngineerByName(firstName, lastName) {
  try {
    const pool = await sql.connect();
    const result = await pool
      .request()
      .input('firstName', sql.VarChar, firstName)
      .input('lastName', sql.VarChar, lastName)
      .query('SELECT * FROM engineers WHERE firstName = @firstName AND lastName = @lastName');
    return result.recordset;
  } catch (err) {
    console.error('Error retrieving engineer:', err.message);
    throw err;
  }
}

// Implement other CRUD operations for engineers and site locations
// ...

module.exports = {
  getEngineerByName,
  // Add other CRUD methods here
};
