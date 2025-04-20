import { deleteMessage_query } from '../model/query';

export const delMessage = async (req, _, next) => {
    const { id } = req.body;
    await deleteMessage_query(id);
    next();
};
