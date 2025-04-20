export const getId = (req, res, next) => {
    const { id } = req.params;
    req.userID = id;
    next();
};
