import {UsersSchema} from "../types/models/UsersType";
import * as jwt from 'jsonwebtoken';
import Users, {UserSchemeWithDocument} from './schema'
import customError from "../utils/custom-error";
import authErrors from '../errors/auth';
import config from "../config";
import {AuthRegisterBodyResponse} from "../types/auth";

const generateAccessToken = (userId: string): string => {
    const token = jwt.sign({}, config.secret.accessToken, {
        expiresIn: 60,
        audience: String(userId)
    })
    return token;
};


const createNewUser = async (doc: UsersSchema): Promise<UserSchemeWithDocument> => {

    if (!doc.name || !doc.password) {
        customError(authErrors.incorrectValue);
    }

    const user = new Users(doc);

    return user.save();
};

const userLogin = async (username: string, password: string): Promise<AuthRegisterBodyResponse> => {
    const user = await Users.findOne({username});
    const user_password = await Users.findOne({password});

    if (!user || !user_password) {
        customError(authErrors.AuthInvalidUsername);
    }

    const accessToken = generateAccessToken(user._id);

    const response: AuthRegisterBodyResponse = {
        username: user.username,
        name: user.name,
        email: user.email,
        surname: user.username,
        accessToken
    };

    return response
};


export default {
    createNewUser,
    userLogin
}