// src/server.ts
import express from 'express';
import cors from 'cors'; 
import engineerRoutes from './routes/engineerRoutes';
import siteRoutes from './routes/siteRoutes';
import engineerStatusRoutes from './routes/engineerStatusRoutes'; // Import the new route
import { setUseMockDataStore as setEngineerMockStore } from './models/engineerModel'; // Import the function to set the useMockDataStore flag
import { setUseMockDataStore as setSiteMockStore } from './models/siteModel'; // Import the function to set the useMockDataStore flag

const app = express();
app.use(cors());

app.use(express.json());

// Set the useMockDataStore flag based on the environment
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'localhost') {
  setEngineerMockStore(true);
  setSiteMockStore(true);
} else {
  setEngineerMockStore(false);
  setSiteMockStore(false);
}

app.use('/engineers', engineerRoutes);
app.use('/sites', siteRoutes);
app.use('/engineerStatus', engineerStatusRoutes); // Use the new route for engineer status records


// Implement other API endpoints
// ...

const PORT = 3100;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});