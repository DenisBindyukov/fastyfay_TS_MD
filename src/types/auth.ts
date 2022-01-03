import {FastifyReply, FastifyRequest} from "fastify";

export type AuthLoginBodyRequest = FastifyRequest<{
    Body: {
        username: string
        password: string
    }
}>

export type AuthLoginBodyResponse = FastifyRequest<{
    Body: {
        username: string
        password: string
        email: string
        name: string
        surname: string
    }
}>

export interface AuthRegisterBodyResponse {
    username: string
    email: string
    name: string
    surname: string
    accessToken: string
}

