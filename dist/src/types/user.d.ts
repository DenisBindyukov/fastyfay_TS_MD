import { FastifyRequest } from "fastify";
export declare type UserIdResponse = FastifyRequest<{
    Params: {
        id: string;
    };
}>;
export declare type UpdateUserBodyResponse = FastifyRequest<{
    Body: {
        username: string;
        password?: string;
        email: string;
        aboutMe: string;
        lastname: string;
        surname: string;
    };
}>;
