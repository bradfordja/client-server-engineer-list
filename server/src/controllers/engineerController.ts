// src/controllers/engineerController.ts
import { Request, Response } from 'express';
import { 
  postEngineer,
  putEngineer,
  getAllEngineersBySiteName,
  getEngineersByFullName, 
  getAllEngineers, 
  getEngineerByName 
} from '../models/engineerModel';

export async function postEngineerController(req: Request, res: Response): Promise<void> {
  const { engineer } = req.body;
  if (engineer) {
    try {
      await postEngineer(engineer);
      res.status(201).json({ message: 'Engineer created successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to create engineer' });
    }
  } else {
    res.status(400).json({ error: 'Invalid request data' });
  }
}

export async function putEngineerController(req: Request, res: Response): Promise<void> {
  const { userId } = req.params;
  const { engineer } = req.body;
  if (userId && engineer) {
    try {
      await putEngineer(parseInt(userId, 10), engineer);
      res.status(200).json({ message: 'Engineer record updated successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to update engineer record' });
    }
  } else {
    res.status(400).json({ error: 'Invalid request data' });
  }
}

export async function getEngineerByNameController(req: Request, res: Response): Promise<void> {
  const { lastName } = req.params;

  if (lastName) {
    try {
      const engineers = await getEngineerByName(lastName);
      res.status(200).json(engineers);
    } catch (err) {
      res.status(500).json({ error: 'Failed to retrieve engineer' });
    }
  } else {
    res.status(400).json({ error: 'Missing firstName or lastName parameter' });
  }
}

export async function getAllEngineersController(req: Request, res: Response): Promise<void> {
  try {
    const engineers = await getAllEngineers();
    res.json(engineers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve all engineers' });
  }
}

export async function getEngineersByFullNameController(req: Request, res: Response): Promise<void> {
  const { fullName } = req.params;
  if (fullName) {
    try {
      const engineers = await getEngineersByFullName(fullName.toString());
      res.json(engineers);
    } catch (err) {
      res.status(500).json({ error: 'Failed to retrieve engineers by full name' });
    }
  } else {
    res.status(400).json({ error: 'Missing fullName parameter' });
  }
}

export async function getAllEngineersBySiteNameController(req: Request, res: Response): Promise<void> {
  const { siteName } = req.params;
  if (siteName) {
    try {
      const engineers = await getAllEngineersBySiteName(siteName.toString());
      res.json(engineers);
    } catch (err) {
      res.status(500).json({ error: 'Failed to retrieve all engineers by site ID' });
    }
  } else {
    res.status(400).json({ error: 'Missing siteId parameter' });
  }
}

// Implement other controller functions for CRUD operations
// ...