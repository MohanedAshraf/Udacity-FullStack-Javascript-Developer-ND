"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
const validation = (req, res, next) => {
    const { filename } = req.query;
    if (!filename)
        return res.status(404).send('Yous should include filename');
    next();
};
exports.validation = validation;
