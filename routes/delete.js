import { Router } from 'express';
import { delMessage } from '../controllers/delMesage.js';

const deleteRouter = new Router();

deleteRouter.get('/', delMessage, (req, res) => {
    res.redirect('/');
});

export { deleteRouter };
