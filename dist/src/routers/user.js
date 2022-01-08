"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_constroller_1 = require("../controllers/user.constroller");
const auth_1 = require("../hooks/auth");
const userRouters = async (app) => {
    app.get('/me', {
        preHandler: [
            auth_1.verifyAccessToken
        ]
    }, user_constroller_1.handleUserMe);
    app.post('/user', user_constroller_1.handlerAddUser);
    app.get('/user', user_constroller_1.handlerGetUsers);
    app.delete('/user', user_constroller_1.handlerDeleteUser);
};
exports.default = userRouters;
