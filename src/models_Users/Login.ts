import * as jwt from "jsonwebtoken";
import config from "../config";
import {AuthRegisterBodyResponse} from "../types/auth";
import Users, {UserSchemeWithDocument} from "./schema";
import customError from "../utils/custom-error";
import authErrors from "../errors/auth";


const  mapUserResponseObject = (userId: string, user: UserSchemeWithDocument, accessToken?: string): AuthRegisterBodyResponse => {
    const response: AuthRegisterBodyResponse = {
        id: userId,
        username: user.username,
        name: user.name,
        email: user.email,
        surname: user.username,
        accessToken
    };

    return response
}

export const generateAccessToken = (userId: string): string => {
    const token = jwt.sign({}, config.secret.accessToken, {
        expiresIn: 60,
        audience: String(userId)
    })
    return token;
};


export const userLogin = async (username: string, password: string): Promise<AuthRegisterBodyResponse> => {
    const user = await Users.findOne({username});

    if (!user) {
        customError(authErrors.AuthInvalidUsername);
    }

    const accessToken = generateAccessToken(user._id);

    const response: AuthRegisterBodyResponse = mapUserResponseObject(user._id,user, accessToken);

    return response
};

export const getUserById = async (userId: string): Promise<AuthRegisterBodyResponse> => {

const user = await Users.findById(userId);

const response: AuthRegisterBodyResponse = mapUserResponseObject(userId, user);

return response;

}

export default {
    userLogin,
    generateAccessToken
}