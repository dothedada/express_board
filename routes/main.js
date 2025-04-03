import { Router } from 'express';
import { getMessages } from '../controllers/getMessages.js';
const route = Router();

route.get('/', getMessages, (req, res, next) => {
    const data = {
        msgs: req.messages,
        title: 'listo mi perro, pa las que sea',
        heading: 'estos son los mensajes',
    };
    res.render('index', data);
});

export { route as mainRouter };
