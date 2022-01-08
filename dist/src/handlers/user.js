"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerGetUsers = exports.handleUserMe = exports.handlerAddUser = void 0;
const schema_1 = __importDefault(require("../models_Users/schema"));
const Login_1 = require("../models_Users/Login");
const custom_error_1 = __importDefault(require("../utils/custom-error"));
const auth_1 = __importDefault(require("../errors/auth"));
const createNewUser = async (doc) => {
    if (!doc.name || !doc.password) {
        (0, custom_error_1.default)(auth_1.default.requiredFields);
    }
    const user = new schema_1.default(doc);
    return user.save();
};
const handlerAddUser = async (req) => {
    const { username, password, email, name, surname } = req.body;
    const user = await createNewUser({
        username,
        password,
        email,
        name,
        surname
    });
    return user;
};
exports.handlerAddUser = handlerAddUser;
const handleUserMe = async (request) => {
    const { userId } = request;
    const user = await (0, Login_1.getUserById)(userId);
    return user;
};
exports.handleUserMe = handleUserMe;
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
exports.handlerGetUsers = handlerGetUsers;
exports.default = {
    handlerAddUser: exports.handlerAddUser,
    handleUserMe: exports.handleUserMe,
    handlerGetUsers: exports.handlerGetUsers
};
