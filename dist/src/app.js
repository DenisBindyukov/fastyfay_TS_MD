"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const auth_1 = __importDefault(require("./routers/auth"));
const user_1 = __importDefault(require("./routers/user"));
const buildApp = (options) => {
    const app = (0, fastify_1.default)(options);
    app.register(require('fastify-cors'));
    // app.get('/', async () => {
    //    return  'OK'
    // });
    app.register(auth_1.default, { prefix: '/auth' });
    app.register(user_1.default, { prefix: '/api' });
    app.setErrorHandler((error, request, reply) => {
        const customError = error;
        console.log(customError);
        reply
            .status(error.statusCode || 500)
            .send({
            error: {
                message: customError.message,
                code: customError.code,
                data: customError.data
            }
        });
    });
    return app;
};
exports.default = buildApp;
