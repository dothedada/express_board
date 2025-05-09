import { Router } from 'express';
import { getMessageById } from '../controllers/getMessages.js';

const detailRouter = Router();

detailRouter.get('/', getMessageById, (req, res) => {
    const data = {
        ...res.messages,
        title: 'De a un prro',
        heading: `el mensaje de ${res.messages.username}`,
    };

    res.render('msg', data);
});

export { detailRouter };
