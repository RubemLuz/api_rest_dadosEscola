import { Router } from 'express';

import Home from '../controllers/C_Home';

const router = new Router();

router.get('/', Home.index);

export default router;
