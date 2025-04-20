import { Router } from 'express';
import { setMsg } from '../controllers/setMessage.js';

const newRouter = Router();

newRouter.get('/', (req, res, next) => {
    const data = {
        title: 'nuevo mensaje',
        heading: 'hable perro',
    };
    res.render('addform', data);
});

newRouter.post('/', setMsg, (req, res, next) => {
    res.redirect('/');
});

export { newRouter };
