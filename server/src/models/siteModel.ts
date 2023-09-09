// siteModel.ts
import { ConnectionPool } from 'mssql';
import { connect } from '../../dbConfig';
import { SiteLocation, siteLocations } from '../mockData/sites';

let useMockDataStore = false; // Flag to determine whether to use the mock data store

// Function to set the useMockDataStore flag based on the environment
export function setUseMockDataStore(value: boolean) {
  useMockDataStore = value;
}

export async function postSite(site: SiteLocation): Promise<void> {
  try {
    const pool: ConnectionPool = await connect();
    await pool
      .request()
      .input('siteName', site.siteName)
      .input('address', site.address)
      .input('city', site.city)
      .input('state', site.state)
      .input('status', site.status)
      .query(
        'INSERT INTO sites (siteName, address, city, state, status) VALUES (@siteName, @address, @city, @state, @status)'
      );
  } catch (err) {
    console.error('Error creating site location:', JSON.stringify(err));
    throw err;
  }
}

export async function putSite(siteId: number, site: SiteLocation): Promise<void> {
  try {
    const pool: ConnectionPool = await connect();
    await pool
      .request()
      .input('siteId', siteId)
      .input('siteName', site.siteName)
      .input('address', site.address)
      .input('city', site.city)
      .input('state', site.state)
      .input('status', site.status)
      .query(
        'UPDATE sites SET siteName = @siteName, address = @address, city = @city, state = @state, status = @status WHERE siteId = @siteId'
      );
  } catch (err) {
    console.error('Error updating site location:', JSON.stringify(err));
    throw err;
  }
}

export async function getEngineerBySite(siteId: number): Promise<SiteLocation[]> {
  try {
    const pool: ConnectionPool = await connect();
    const result = await pool
      .request()
      .input('siteId', siteId)
      .query('SELECT * FROM engineers WHERE siteId = @siteId');
    return result.recordset;
  } catch (err) {
    console.error('Error retrieving engineer by site:', JSON.stringify(err));
    throw err;
  }
}

export async function getAllSites(): Promise<SiteLocation[]> {
  if (useMockDataStore) {
    return Promise.resolve(siteLocations); // Use the mock data store when in localhost environment
  } else {
    try {
      const pool: ConnectionPool = await connect();
      const result = await pool.request().query('SELECT * FROM sites');
      return result.recordset;
    } catch (err) {
      console.error('Error retrieving all sites:', JSON.stringify(err));
      throw err;
    }
  }
}

export async function getSitesByName(siteName: string): Promise<SiteLocation[]> {
  try {
    const pool: ConnectionPool = await connect();
    const result = await pool
      .request()
      .input('siteName', siteName)
      .query('SELECT * FROM sites WHERE siteName LIKE @siteName');
    return result.recordset;
  } catch (err) {
    console.error('Error retrieving sites by name:', JSON.stringify(err));
    throw err;
  }
}