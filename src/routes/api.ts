import { Router } from 'express';

import * as ApiController from '../controllers/apiController';
import * as PhraseController from '../controllers/phraseController';


const router = Router();

//#region Basic Routes
router.get('/ping', ApiController.ping);
router.get('/random', ApiController.random);
router.get('/nome/:nome', ApiController.nome);
//#endregion


export default router;