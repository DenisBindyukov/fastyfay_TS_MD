"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_constroller_1 = __importDefault(require("../controllers/user.constroller"));
const auth_1 = require("../hooks/auth");
const userRouters = async (app) => {
    app.get('/me', {
        preHandler: [
            auth_1.verifyAccessToken
        ]
    }, user_constroller_1.default.handleUserMe);
    app.post('/user', user_constroller_1.default.handlerAddUser);
    app.get('/user', user_constroller_1.default.handlerGetUsers);
    app.delete('/user', user_constroller_1.default.handlerDeleteUser);
};
exports.default = userRouters;
