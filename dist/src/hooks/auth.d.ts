import { FastifyRequest } from "fastify";
export declare const verifyAccessToken: (request: FastifyRequest) => Promise<boolean>;
declare const _default: {
    verifyAccessToken: (request: FastifyRequest<import("fastify/types/route").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, unknown>) => Promise<boolean>;
};
export default _default;
