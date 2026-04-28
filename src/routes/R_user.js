import { Router } from 'express';

import User from '../controllers/C_User';

import loginRequired from '../middleware/M_loginRequired';

const router = new Router();

router.get('/', loginRequired ,User.index);
router.get('/:id', User.show);


router.post('/', loginRequired ,User.store);
router.put('/',loginRequired ,User.update);
router.delete('/',loginRequired ,User.delete);

export default router

/*
index - lista os usuarios = get
create/store - cria um novo usuario = post
delete - apaga um usuario = delete
show - mostra um usuario = get
update - atualiza um usuario = patch ou put
*/
