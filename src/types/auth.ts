import {FastifyRequest} from "fastify";

export type AuthLoginBodyRequest = FastifyRequest<{
    Body: {
        username: string
        password: string
    }
}>

export type AuthRegisterBodyRequest = FastifyRequest<{
    Body: {
        username: string
        password: string
        email: string
        name: string
        surname: string
    }

}>