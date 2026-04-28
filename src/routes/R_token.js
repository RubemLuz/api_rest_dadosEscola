import { Router } from 'express';

import tokenController from '../controllers/C_TokenController';

const router = new Router();

router.post('/', tokenController.store);


export default router;
