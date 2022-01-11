import {AuthLoginBodyResponse} from "../types/auth";
import Users from '../models_Users/schema'
import {FastifyRequest, FastifyReply} from "fastify";
import {getUserById} from "../models_Users/Login";
import customError from "../utils/custom-error";
import authErrors from "../errors/auth";
import UserService from "../service/UserService";
import {UpdateUserBodyResponse, UserIdResponse} from "../types/user";


const handleUserMe = async (request: FastifyRequest) => {

    const {userId} = request;

    const user = await getUserById(userId);

    return user;
}

 const handlerAddUser = async (req: AuthLoginBodyResponse, reply: FastifyReply) => {
    const {
        username,
        password,
        email,
        lastname,
        surname,
        aboutMe
    } = req.body;

    const user = await UserService.createNewUser({
        username,
        password,
        email,
        lastname,
        surname,
        aboutMe
    });

    return reply.code(200).send({
        data: {
            user
        },
        resultCode: 0
    });

};


 const handlerGetUsers = async (request: FastifyRequest, reply: FastifyReply) => {
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

 const handlerDeleteUser = async (request: UserIdResponse, reply: FastifyReply) => {
     const userId = request.params.id;
     debugger
    try {
         await UserService.deleteUser(userId);

         reply.code(200).send({
             message: "Success",
             resultCode: 0
         })
    } catch (err) {
        customError(authErrors.ServerError);
    }
}

const handlerUpdateUser = async (request: UpdateUserBodyResponse, reply: FastifyReply) => {
    try {
        await UserService.deleteUser(userId);

        reply.code(200).send({
            message: "Success",
            resultCode: 0
        })
    } catch (err) {
        customError(authErrors.ServerError);
    }
}


export default {
    handlerAddUser,
    handleUserMe,
    handlerGetUsers,
    handlerDeleteUser,
    handlerUpdateUser,
}