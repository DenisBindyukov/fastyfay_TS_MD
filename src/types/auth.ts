import {FastifyRequest} from "fastify";


export type AuthLoginBodyRequest = FastifyRequest<{
    Body: {
        username: string
        password: string
    }
}>

export type AuthLoginBodyResponse = FastifyRequest<{
    Body: {
        username: string
        password?: string
        email: string
        aboutMe: string
        lastname: string
        surname: string
    }
}>

export interface AuthRegisterBodyResponse {
    id: string
    username: string
    email: string
    name: string
    surname: string
    accessToken?: string
}

export interface AuthRefreshTokenResponse {
    accessToken: string
}

