import { FastifyRequest } from "fastify";
export declare type AuthLoginBodyRequest = FastifyRequest<{
    Body: {
        username: string;
        password: string;
    };
}>;
export declare type AuthLoginBodyResponse = FastifyRequest<{
    Body: {
        username: string;
        password: string;
        email: string;
        aboutMe: string;
        name: string;
        surname: string;
    };
}>;
export interface AuthRegisterBodyResponse {
    id: string;
    username: string;
    email: string;
    name: string;
    surname: string;
    accessToken?: string;
}
export interface AuthRefreshTokenResponse {
    accessToken: string;
}