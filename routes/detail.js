import { Router } from 'express';
import { getMessageById } from '../controllers/getMessages.js';

const detailRouter = Router();

detailRouter.get('/:msgId', getMessageById, (req, res) => {
    const data = {
        ...req.message,
        title: 'De a un prro',
        heading: `el mensaje de ${req.message.user}`,
    };

    res.render('msg', data);
});

export { detailRouter };
