import { Router } from 'express';

import User from '../controllers/C_User';

const router = new Router();

router.post('/', User.store);
router.get('/', User.index);
router.get('/:id', User.show);
router.put('/:id',User.update);
router.delete('/:id',User.delete);

export default router;

/*
index - lista os usuarios = get
create/store - cria um novo usuario = post
delete - apaga um usuario = delete
show - mostra um usuario = get
update - atualiza um usuario = patch ou put
*/
