import { FastifyServerOptions } from "fastify";
declare module 'fastify' {
    interface FastifyRequest {
        userId?: string;
    }
}
declare const buildApp: (options: FastifyServerOptions) => import("fastify").FastifyInstance<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").FastifyLoggerInstance> & PromiseLike<import("fastify").FastifyInstance<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").FastifyLoggerInstance>>;
export default buildApp;
