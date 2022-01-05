import { AuthLoginBodyResponse } from "../types/auth";
import { FastifyRequest } from "fastify";
export declare const handlerAddUser: (req: AuthLoginBodyResponse) => Promise<import("../models_Users/schema").UserSchemeWithDocument>;
export declare const handleUserMe: (request: FastifyRequest) => Promise<import("../types/auth").AuthRegisterBodyResponse>;
declare const _default: {
    handlerAddUser: (req: AuthLoginBodyResponse) => Promise<import("../models_Users/schema").UserSchemeWithDocument>;
    handleUserMe: (request: FastifyRequest<import("fastify/types/route").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, unknown>) => Promise<import("../types/auth").AuthRegisterBodyResponse>;
};
export default _default;
