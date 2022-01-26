"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRefreshToken = exports.handleLogin = void 0;
const Login_1 = __importDefault(require("../models_Users/Login"));
const handleLogin = async (req) => {
    const { username, password } = req.body;
    const user = Login_1.default.userLogin(username, password);
    return user;
};
exports.handleLogin = handleLogin;
const handleRefreshToken = async (req) => {
    const { userId } = req;
    const accessToken = Login_1.default.generateAccessToken(userId);
    const response = {
        accessToken
    };
    return response;
};
exports.handleRefreshToken = handleRefreshToken;
exports.default = {
    handleLogin: exports.handleLogin,
    handleRefreshToken: exports.handleRefreshToken
};
