// src/routes/engineerRoutes.ts
import { Router } from 'express';
import { 
    postEngineerController,
    putEngineerController,
    getAllEngineersBySiteNameController,
    getEngineersByFullNameController,
    getAllEngineersController, 
    getEngineerByNameController 
} from '../controllers/engineerController';

const router = Router();

router.get('/', getEngineerByNameController);
router.get('/all', getAllEngineersController);
router.get('/searchName/:Name', getEngineerByNameController);
router.get('/search/:fullName', getEngineersByFullNameController);
router.get('/site/:siteName', getAllEngineersBySiteNameController);
router.post('/', postEngineerController); 
router.put('/:userId', putEngineerController); 

// Implement other routes for CRUD operations
// ...

export default router;