// engineerModel.ts
import { ConnectionPool } from 'mssql';
import { connect } from '../../dbConfig';
import { Engineer, engineers } from '../mockData/engineers';
import { SiteLocation, siteLocations } from '../mockData/sites';

let useMockDataStore = false; // Flag to determine whether to use the mock data store
const statusList = ['inactive','working','on vacation'];

// Function to set the useMockDataStore flag based on the environment
export function setUseMockDataStore(value: boolean) {
  useMockDataStore = value;
}

export async function getEngineerByName(lastName: string): Promise<Engineer[]> {
  try {
    const pool: ConnectionPool = await connect();
    const result = await pool
      .request()
      .input('lastName', lastName)
      .query('SELECT * FROM engineers WHERE lastName = @lastName');
    return result.recordset;
  } catch (err) {
    console.error('Error retrieving engineer:', JSON.stringify(err));
    throw err;
  }
}

export async function getAllEngineers(): Promise<Engineer[]> {
  if (useMockDataStore) {
    const tempEngineers = engineers.map(engineer => {
      const filteredSites = siteLocations.filter((element) => element.siteId == engineer.siteId);
      return { ...engineer, siteName: filteredSites[0].siteName, statusName: statusList[engineer.statusId] }
    });
    return Promise.resolve(tempEngineers); // Use the mock data store when in localhost environment
  } else {
    try {
      const pool: ConnectionPool = await connect();
      const result = await pool.request().query('SELECT * FROM engineers');
      return result.recordset;
    } catch (err) {
      console.error('Error retrieving all engineers:', JSON.stringify(err));
      throw err;
    }
  }
}

export async function getEngineersByFullName(fullName: string): Promise<Engineer[]> {
  if (useMockDataStore) {
    const filteredEngineers = engineers.filter((element) => element.fullName.includes(fullName));
    const tempEngineers = filteredEngineers.map(engineer => {
      const filteredSites = siteLocations.filter((element) => element.siteId == engineer.siteId);
      return { ...engineer, siteName: filteredSites[0].siteName, statusName: statusList[engineer.statusId] }
    });

    return Promise.resolve(tempEngineers); // Use the mock data store when in localhost environment
  } else {
    try {
      const pool: ConnectionPool = await connect();
      const result = await pool
        .request()
        .input('fullName', fullName)
        .query('SELECT * FROM engineers WHERE fullName LIKE @fullName');
      return result.recordset;
    } catch (err) {
      console.error('Error retrieving engineers by full name:', JSON.stringify(err));
      throw err;
    }
  }
}

export async function getAllEngineersBySiteName(siteName: string): Promise<Engineer[]> {
  if (useMockDataStore) {
    const filteredSites = siteLocations.filter((element) => element.siteName.includes(siteName));
    const filteredEngineers = engineers.filter((element) => Number(element.siteId) == Number(filteredSites[0].siteId));
    const tempEngineers = filteredEngineers.map(engineer => {
      const filteredSites = siteLocations.filter((element) => element.siteId == engineer.siteId);
      return { ...engineer, siteName: filteredSites[0].siteName, statusName: statusList[engineer.statusId] }
    });
      console.log(filteredEngineers);
    return Promise.resolve(tempEngineers); // Use the mock data store when in localhost environment
  } else {
    try {
      const pool: ConnectionPool = await connect();
      const result = await pool
        .request()
        .input('siteName', siteName)
        .query('SELECT * FROM engineers as e inner join siteLocations as s on e.siteId = s.sideId WHERE s.siteName = @siteName');
      return result.recordset;
    } catch (err) {
      console.error('Error retrieving all engineers by site name:', JSON.stringify(err));
      throw err;
    }
  }
}

export async function postEngineer(engineer: Engineer): Promise<void> {
  try {
    const pool: ConnectionPool = await connect();
    await pool
      .request()
      .input('firstName', engineer.firstName)
      .input('lastName', engineer.lastName)
      .input('fullName', engineer.fullName)
      .input('title', engineer.title)
      .input('statusId', engineer.statusId)
      .input('siteId', engineer.siteId)
      .query(
        'INSERT INTO engineers (firstName, lastName, fullName, title, statusId, siteId) VALUES (@firstName, @lastName, @fullName, @title, @statusId, @siteId)'
      );
  } catch (err) {
    console.error('Error creating engineer:', JSON.stringify(err));
    throw err;
  }
}

export async function putEngineer(userId: number, engineer: Engineer): Promise<void> {
  try {
    const pool: ConnectionPool = await connect();
    await pool
      .request()
      .input('userId', userId)
      .input('firstName', engineer.firstName)
      .input('lastName', engineer.lastName)
      .input('fullName', engineer.fullName)
      .input('title', engineer.title)
      .input('statusId', engineer.statusId)
      .input('siteId', engineer.siteId)
      .query(
        'UPDATE engineers SET firstName = @firstName, lastName = @lastName, fullName = @fullName, title = @title, statusId = @statusId, siteId = @siteId WHERE userId = @userId'
      );
  } catch (err) {
    console.error('Error updating engineer:', JSON.stringify(err));
    throw err;
  }
}
