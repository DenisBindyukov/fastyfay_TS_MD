"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../handlers/auth");
const auth_2 = require("../hooks/auth");
const authRouters = async (app) => {
    app.post('/login', auth_1.handleLogin);
    app.post('/refresh-token', {
        preHandler: [
            auth_2.verifyAccessToken
        ]
    }, auth_1.handleRefreshToken);
};
exports.default = authRouters;
