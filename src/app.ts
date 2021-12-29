import fastify, {FastifyServerOptions} from "fastify";
import authRouters from "./routers/auth";

const buildApp = (options: FastifyServerOptions) => {
    const app = fastify(options);

    app.get('/', async () => 'OK');
    app.register(authRouters, {prefix: '/auth'});

    // app.setErrorHandler((error, request, reply) => {
    //     console.log(error.statusCode)
    //     console.log(error.code)
    //
    //     reply
    //         .status(error.statusCode)
    //         .send({
    //             error: {
    //                 message: error.message,
    //                 code: error.code
    //             }
    //         });
    // });
    return app;
};


export default buildApp;