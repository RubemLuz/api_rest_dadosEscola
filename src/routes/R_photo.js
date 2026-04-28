import { Router } from 'express';
import loginRequirerd from '../middleware/M_loginRequired';

import photo from '../controllers/C_Photo';

const router = new Router();

router.post('/', loginRequirerd , photo.store);

export default router;
