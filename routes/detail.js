import { Router } from 'express';
import { getMessageById } from '../controllers/getMessages.js';

const detailRouter = Router();

detailRouter.get('/:msgId', getMessageById, (req, res, next) => {
    const data = {
        ...req.message,
        title: 'De a un prro',
        heading: 'Este es el mensaje',
    };
    res.render('msg', data);
});

export { detailRouter };
