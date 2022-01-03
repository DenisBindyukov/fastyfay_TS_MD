import {AuthLoginBodyRequest, AuthLoginBodyResponse, AuthRegisterBodyResponse} from "../types/auth";
import User from '../models_Users/User'
import {UserSchemeWithDocument} from "../models_Users/schema";
import customError from "../utils/custom-error";
import authErrors from "../errors/auth";

export const handleLogin = async (req: AuthLoginBodyRequest): Promise<AuthRegisterBodyResponse> => {
    const {username, password} = req.body;

    const user = User.userLogin(username, password);

    return user;
};

export const handleRegister = async (req: AuthLoginBodyResponse) => {
    const {
        username,
        password,
        email,
        name,
        surname
    } = req.body;

    const user = await User.createNewUser({
        username,
        password,
        email,
        name,
        surname
    });

   return user
};


export default {
    handleLogin,
    handleRegister
}