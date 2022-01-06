"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../handlers/user");
const auth_1 = require("../hooks/auth");
const userRouters = async (app) => {
    app.get('/me', {
        preHandler: [
            auth_1.verifyAccessToken
        ]
    }, user_1.handleUserMe);
    app.post('/creat', user_1.handlerAddUser);
    app.get('/', user_1.handlerGetUsers);
};
exports.default = userRouters;
