import { messages } from '../model/messages.js';

export const getMessages = (req, res, next) => {
    req.messages = messages;
    next();
};

export const getMessageById = (req, res, next) => {
    req.message = messages[req.params.msgId];
    next();
};
