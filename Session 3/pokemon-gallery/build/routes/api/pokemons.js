"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const validation_1 = require("../../middlewares/validation");
const route = (0, express_1.Router)();
route.get('/', validation_1.validation, (req, res) => {
    const filename = req.query.filename;
    const imagePath = path_1.default.join(__dirname, '../../../assets/images', `${filename}.jpg`);
    if (fs_1.default.existsSync(imagePath)) {
        return res.sendFile(imagePath);
    }
    return res.status(404).send('Image not found');
});
exports.default = route;
