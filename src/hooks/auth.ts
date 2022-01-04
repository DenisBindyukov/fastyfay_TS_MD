import {FastifyRequest} from "fastify";
import customError from "../utils/custom-error";
import authErrors from '../errors/auth'
import {AccessTokenDecoded} from "../types/hooks/auth";
import config from "../config";
import * as jwt from 'jsonwebtoken';

const validateHeaderAuth = (request: FastifyRequest): string => {
    const autToken = request.headers["authorization"];
    if (!autToken) {
        customError(authErrors.AuthMissingHeaders);
    }

    const accessToken = autToken.split(' ')[1];

    if (!accessToken) {
        customError(authErrors.AuthMissingHeaders);
    }

    return accessToken;
};


export const verifyAccessToken = async (request: FastifyRequest): Promise<boolean> => {
    try {
        const accessToken = validateHeaderAuth(request);
        const decoded: AccessTokenDecoded = Object(jwt.verify(accessToken, config.secret.accessToken));

        request.userId = decoded.aud;

        return true
    } catch (error) {
        customError(authErrors.AuthMissingHeaders);
    }

};

export default {
    verifyAccessToken
}