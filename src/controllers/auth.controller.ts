import {AuthLoginBodyRequest, AuthRefreshTokenResponse, AuthRegisterBodyResponse} from "../types/auth";
import Login from "../models_Users/Login";
import {FastifyRequest} from "fastify";

export const handleLogin = async (req: AuthLoginBodyRequest): Promise<AuthRegisterBodyResponse> => {
    const {username, password} = req.body;

    const user = Login.userLogin(username, password);

    return user;
};

export const handleRefreshToken = async (req: FastifyRequest) => {
    const {userId} = req;

    const accessToken = Login.generateAccessToken(userId);
    const response: AuthRefreshTokenResponse = {
        accessToken
    }

    return response;
};
export default {
    handleLogin,
    handleRefreshToken
}