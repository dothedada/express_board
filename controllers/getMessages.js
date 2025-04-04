import { messages } from '../model/messages.js';

export const getMessages = (req, res, next) => {
    req.messages = messages.sort(
        (a, b) => new Date(b.added) - new Date(a.added),
    );
    next();
};

export const getMessageById = (req, res, next) => {
    const id = req.params.msgId;
    req.message = messages[id];
    next();
};
