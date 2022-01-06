import {AuthLoginBodyResponse} from "../types/auth";
import User from "../models_Users/User";
import Users from '../models_Users/schema'
import {FastifyRequest, FastifyReply} from "fastify";
import {getUserById} from "../models_Users/Login";
import customError from "../utils/custom-error";
import authErrors, {ServerError} from "../errors/auth";

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

    const user = await getUserById(userId);

    return user;
}

export const handlerGetUsers = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const users = await Users.find();
        return reply.code(200).send({
            data: {
                users
            },
            resultCode: 0
        });
    } catch (err) {
        customError(authErrors.ServerError);
    }

};

export default {
    handlerAddUser,
    handleUserMe,
    handlerGetUsers
}