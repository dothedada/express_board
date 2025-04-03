import { messages } from '../model/messages.js';

export const setMsg = (req, res, next) => {
    const newMsg = {
        text: req.body.msg,
        user: req.body.user,
        added: new Date(),
    };

    messages.push(newMsg);
    next();
};
