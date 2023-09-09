// src/routes/siteRoutes.ts
import { Router } from 'express';
import { 
    postSiteController,
    putSiteController,
    getSitesByNameController,
    getAllSitesController, 
    getEngineerBySiteController 
} from '../controllers/siteController';

const router = Router();

router.get('/:siteId', getEngineerBySiteController);
router.get('/all', getAllSitesController);
router.get('/search', getSitesByNameController);
router.post('/', postSiteController); 
router.put('/:siteId', putSiteController); 

// Implement other routes for CRUD operations
// ...

export default router;