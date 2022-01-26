import { AuthLoginBodyRequest, AuthRefreshTokenResponse, AuthRegisterBodyResponse } from "../types/auth";
import { FastifyRequest } from "fastify";
export declare const handleLogin: (req: AuthLoginBodyRequest) => Promise<AuthRegisterBodyResponse>;
export declare const handleRefreshToken: (req: FastifyRequest) => Promise<AuthRefreshTokenResponse>;
declare const _default: {
    handleLogin: (req: AuthLoginBodyRequest) => Promise<AuthRegisterBodyResponse>;
    handleRefreshToken: (req: FastifyRequest<import("fastify/types/route").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, unknown>) => Promise<AuthRefreshTokenResponse>;
};
export default _default;
