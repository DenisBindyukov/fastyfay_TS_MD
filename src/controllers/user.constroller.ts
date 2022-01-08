import {AuthLoginBodyResponse} from "../types/auth";
import User from "../models_Users/User";
import Users, {UserSchemeWithDocument} from '../models_Users/schema'
import {FastifyRequest, FastifyReply} from "fastify";
import {getUserById} from "../models_Users/Login";
import customError from "../utils/custom-error";
import authErrors, {ServerError} from "../errors/auth";
import {UsersSchema} from "../types/models/UsersType";

const createNewUser = async (doc: UsersSchema): Promise<UserSchemeWithDocument> => {

    if (!doc.name || !doc.password || !doc.aboutMe) {
        customError(authErrors.requiredFields);
    }

    const user = new Users(doc);

    return user.save();
};

export const handlerAddUser = async (req: AuthLoginBodyResponse, reply: FastifyReply) => {
    const {
        username,
        password,
        email,
        name,
        surname,
        aboutMe
    } = req.body;

    const user = await createNewUser({
        username,
        password,
        email,
        name,
        surname,
        aboutMe
    });

    return reply.code(200).send({
        data: {
            user
        },
        resultCode: 0
    });

}


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

export const handlerDeleteUser = async (request: FastifyRequest, reply: FastifyReply) => {
    try {

    } catch (err) {
        customError(authErrors.ServerError);
    }
}


export default {
    handlerAddUser,
    handleUserMe,
    handlerGetUsers,
    handlerDeleteUser
}