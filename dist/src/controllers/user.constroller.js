"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __importDefault(require("../models_Users/schema"));
const Login_1 = require("../models_Users/Login");
const custom_error_1 = __importDefault(require("../utils/custom-error"));
const auth_1 = __importDefault(require("../errors/auth"));
const UserService_1 = __importDefault(require("../service/UserService"));
const handleUserMe = async (request) => {
    const { userId } = request;
    const user = await (0, Login_1.getUserById)(userId);
    return user;
};
const handlerAddUser = async (req, reply) => {
    const { username, password, email, lastname, surname, aboutMe } = req.body;
    const user = await UserService_1.default.createNewUser({
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
const handlerGetUsers = async (request, reply) => {
    try {
        const users = await schema_1.default.find();
        return reply.code(200).send({
            data: {
                users
            },
            resultCode: 0
        });
    }
    catch (err) {
        (0, custom_error_1.default)(auth_1.default.ServerError);
    }
};
const handlerDeleteUser = async (request, reply) => {
    const userId = request.params.id;
    debugger;
    try {
        await UserService_1.default.deleteUser(userId);
        reply.code(200).send({
            message: "Success",
            resultCode: 0
        });
    }
    catch (err) {
        (0, custom_error_1.default)(auth_1.default.ServerError);
    }
};
// const handlerUpdateUser = async (request: UpdateUserBodyResponse, reply: FastifyReply) => {
//     try {
//         await UserService.deleteUser(userId);
//
//         reply.code(200).send({
//             message: "Success",
//             resultCode: 0
//         })
//     } catch (err) {
//         customError(authErrors.ServerError);
//     }
// }
exports.default = {
    handlerAddUser,
    handleUserMe,
    handlerGetUsers,
    handlerDeleteUser,
};
