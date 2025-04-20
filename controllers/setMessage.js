import { addMessage_query } from '../model/query.js';

export const setMsg = async (req, _, next) => {
    const newMsg = {
        text: req.body.msg,
        user: req.body.user,
        added: new Date(),
    };

    console.log(newMsg);
    await addMessage_query(newMsg);
    next();
};
