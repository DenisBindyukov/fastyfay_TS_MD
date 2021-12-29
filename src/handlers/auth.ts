import {AuthLoginBodyRequest, AuthRegisterBodyRequest} from "../types/auth";
import User from '../models_Users/User'
import {UserSchemeWithDocument} from "../models_Users/schema";

export const handleLogin = async (req: AuthLoginBodyRequest) => {
    const {username, password} = req.body;

    return `handleLogin (${username}, ${password})`;
};

export const handleRegister = async (req: AuthRegisterBodyRequest): Promise<UserSchemeWithDocument> => {
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

    return user;
};


export default {
    handleLogin,
    handleRegister
}