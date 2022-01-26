import { AuthLoginBodyResponse } from "../types/auth";
import { FastifyRequest, FastifyReply } from "fastify";
import { UserIdResponse } from "../types/user";
declare const _default: {
    handlerAddUser: (req: AuthLoginBodyResponse, reply: FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify/types/route").RouteGenericInterface, unknown>) => Promise<never>;
    handleUserMe: (request: FastifyRequest<import("fastify/types/route").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, unknown>) => Promise<import("../types/auth").AuthRegisterBodyResponse>;
    handlerGetUsers: (request: FastifyRequest<import("fastify/types/route").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, unknown>, reply: FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify/types/route").RouteGenericInterface, unknown>) => Promise<never>;
    handlerDeleteUser: (request: UserIdResponse, reply: FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify/types/route").RouteGenericInterface, unknown>) => Promise<void>;
};
export default _default;
