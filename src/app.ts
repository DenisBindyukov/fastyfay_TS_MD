import fastify, {FastifyServerOptions} from "fastify";
import authRouters from "./routers/auth";
import {CustomError} from "./utils/custom-error";
import userRouters from "./routers/user";

declare module 'fastify' {
    interface FastifyRequest {
        userId?: string
    }
}

const buildApp = (options: FastifyServerOptions) => {
    const app = fastify(options);
    app.register(require('fastify-cors'));

    app.get('/', async () => {
       return  'OK'
    });
    app.register(authRouters, {prefix: '/auth'});
    app.register(userRouters, {prefix: '/api'});

    app.setErrorHandler((error, request, reply) => {
        const customError: CustomError = error;

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


export default buildApp;