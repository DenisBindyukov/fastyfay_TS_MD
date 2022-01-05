"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUserMe = exports.handlerAddUser = void 0;
const User_1 = __importDefault(require("../models_Users/User"));
const Login_1 = require("../models_Users/Login");
const handlerAddUser = async (req) => {
    const { username, password, email, name, surname } = req.body;
    const user = await User_1.default.createNewUser({
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
exports.default = {
    handlerAddUser: exports.handlerAddUser,
    handleUserMe: exports.handleUserMe
};
