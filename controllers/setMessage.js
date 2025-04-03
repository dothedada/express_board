import { messages } from '../model/messages.js';

export const setMsg = (req, res, send) => {
    const newMsg = {
        text: req.body.msg,
        user: req.body.user,
        added: new Date(),
    };

    messages.push(newMsg);
    res.redirect('/');
};
