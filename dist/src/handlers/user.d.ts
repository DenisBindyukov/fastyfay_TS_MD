import { AuthLoginBodyResponse } from "../types/auth";
import { FastifyRequest, FastifyReply } from "fastify";
export declare const handlerAddUser: (req: AuthLoginBodyResponse) => Promise<import("../models_Users/schema").UserSchemeWithDocument>;
export declare const handleUserMe: (request: FastifyRequest) => Promise<import("../types/auth").AuthRegisterBodyResponse>;
export declare const handlerGetUsers: (request: FastifyRequest, reply: FastifyReply) => Promise<never>;
declare const _default: {
    handlerAddUser: (req: AuthLoginBodyResponse) => Promise<import("../models_Users/schema").UserSchemeWithDocument>;
    handleUserMe: (request: FastifyRequest<import("fastify/types/route").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, unknown>) => Promise<import("../types/auth").AuthRegisterBodyResponse>;
    handlerGetUsers: (request: FastifyRequest<import("fastify/types/route").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, unknown>, reply: FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify/types/route").RouteGenericInterface, unknown>) => Promise<never>;
};
export default _default;
