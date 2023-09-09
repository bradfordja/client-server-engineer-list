// src/controllers/engineerStatusController.ts
import { Request, Response } from 'express';
import { getAllEngineerStatus } from '../models/engineerStatusModel';

export async function getAllEngineerStatusController(req: Request, res: Response): Promise<void> {
  try {
    const engineerStatus = await getAllEngineerStatus();
    res.json(engineerStatus);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch engineer status records' });
  }
}

// Implement other controller functions for EngineerStatus CRUD operations
// ...