import { addMessage_query } from '../model/query';

export const setMsg = async (req, _, next) => {
    const newMsg = {
        text: req.body.msg,
        user: req.body.user,
        added: new Date(),
    };

    await addMessage_query(newMsg);
    next();
};
