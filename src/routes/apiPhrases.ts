import { Router } from 'express';

import * as ApiController from '../controllers/apiController';
import * as PhraseController from '../controllers/phraseController';

const router = Router();

//#region Phrases Routes
router.post('/phrases', PhraseController.createOnePhrase);
router.get('/phrases', PhraseController.selectAllPhrases);
router.get('/phrase/aleatoria', PhraseController.selectRandomPhrase);
router.get('/phrase/:id', PhraseController.selectOnePhrase);
router.put('/phrase/:id', PhraseController.updateOnePhrase);
router.delete('/phrase/:id', PhraseController.deleteOnePhrase);

//#endregion

export default router;