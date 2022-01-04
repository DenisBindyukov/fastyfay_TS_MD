import {AuthLoginBodyResponse} from "../types/auth";
import User from "../models_Users/User";
import {FastifyRequest} from "fastify";
import {getUserById} from "../models_Users/Login";

export const handlerAddUser = async (req: AuthLoginBodyResponse) => {
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

export const handleUserMe = async (request: FastifyRequest) => {

    const {userId} = request;

    const  user = await getUserById(userId);

    return user;
}

export default {
    handlerAddUser,
    handleUserMe
}