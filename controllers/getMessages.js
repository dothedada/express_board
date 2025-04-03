import { messages } from '../model/messages.js';

export const getMessages = (req, res, next) => {
    req.messages = messages;
    next();
};

export const getMessageById = (req, res, next) => {
    const id = req.params.msgId;
    req.message = messages[id];
    next();
};
