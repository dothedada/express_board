import { allMessages_query, messageById_query } from '../model/query.js';

export const getMessages = async (_, res, next) => {
    const messages = await allMessages_query();
    res.messages = messages;

    next();
};

export const getMessageById = async (req, res, next) => {
    const message = await messageById_query(req.userID);
    res.messages = message[0];

    next();
};
