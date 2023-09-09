// src/controllers/siteController.ts
import { Request, Response } from 'express';
import { 
  postSite,
  putSite,
  getSitesByName, 
  getAllSites, 
  getEngineerBySite 
} from '../models/siteModel';

export async function postSiteController(req: Request, res: Response): Promise<void> {
  const { site } = req.body;
  if (site) {
    try {
      await postSite(site);
      res.status(201).json({ message: 'Site location created successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to create site location' });
    }
  } else {
    res.status(400).json({ error: 'Invalid request data' });
  }
}

export async function putSiteController(req: Request, res: Response): Promise<void> {
  const { siteId } = req.params;
  const { site } = req.body;
  if (site && siteId) {
    try {
      await putSite(parseInt(siteId, 10), site);
      res.status(200).json({ message: 'Site location updated successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to update site location' });
    }
  } else {
    res.status(400).json({ error: 'Invalid request data' });
  }
}

export async function getEngineerBySiteController(req: Request, res: Response): Promise<void> {
  const { siteId } = req.params;
  try {
    const engineers = await getEngineerBySite(parseInt(siteId, 10));
    res.status(200).json(engineers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve engineers by site' });
  }
}

export async function getAllSitesController(req: Request, res: Response): Promise<void> {
  try {
    const sites = await getAllSites();
    res.json(sites);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve all sites' });
  }
}

export async function getSitesByNameController(req: Request, res: Response): Promise<void> {
  const { siteName } = req.query;
  if (siteName) {
    try {
      const sites = await getSitesByName(siteName.toString());
      res.json(sites);
    } catch (err) {
      res.status(500).json({ error: 'Failed to retrieve sites by name' });
    }
  } else {
    res.status(400).json({ error: 'Missing siteName parameter' });
  }
}

// Implement other controller functions for CRUD operations
// ...