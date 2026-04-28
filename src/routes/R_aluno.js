import { Router } from 'express';

import Aluno from '../controllers/C_Aluno';
import loginRequired from '../middleware/M_loginRequired';

const router = new Router();

router.get('/', loginRequired, Aluno.index);
router.post('/', loginRequired, Aluno.store);
router.put('/:id', loginRequired, Aluno.update);
router.get('/:id', Aluno.show);
router.delete('/:id', loginRequired, Aluno.delete);

export default router;
