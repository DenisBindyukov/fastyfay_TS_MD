"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("../controllers/auth.controller");
const auth_1 = require("../hooks/auth");
const authRouters = async (app) => {
    app.post('/login', auth_controller_1.handleLogin);
    app.post('/refresh-token', {
        preHandler: [
            auth_1.verifyAccessToken
        ]
    }, auth_controller_1.handleRefreshToken);
};
exports.default = authRouters;
