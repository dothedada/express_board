import { deleteMessage_query } from '../model/query.js';

export const delMessage = async (req, _, next) => {
    await deleteMessage_query(req.userID);
    next();
};
