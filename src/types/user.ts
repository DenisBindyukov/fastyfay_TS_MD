import {FastifyRequest} from "fastify";

export type UserIdResponse = FastifyRequest<{
    Params: {
        id: string
    }
}>

export type UpdateUserBodyResponse = FastifyRequest<{
    Body: {
        username: string
        password?: string
        email: string
        aboutMe: string
        lastname: string
        surname: string
    }
}>