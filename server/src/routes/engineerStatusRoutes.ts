// src/routes/engineerStatusRoutes.ts
import { Router } from 'express';
import { getAllEngineerStatusController } from '../controllers/engineerStatusController';

const router = Router();

router.get('/', getAllEngineerStatusController); // Route to fetch all engineer status records

// Implement other routes for EngineerStatus CRUD operations
// ...

export default router;