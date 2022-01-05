"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.userLogin = exports.generateAccessToken = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const schema_1 = __importDefault(require("./schema"));
const custom_error_1 = __importDefault(require("../utils/custom-error"));
const auth_1 = __importDefault(require("../errors/auth"));
const mapUserResponseObject = (userId, user, accessToken) => {
    const response = {
        id: userId,
        username: user.username,
        name: user.name,
        email: user.email,
        surname: user.username,
        accessToken
    };
    return response;
};
const generateAccessToken = (userId) => {
    const token = jwt.sign({}, config_1.default.secret.accessToken, {
        expiresIn: 60,
        audience: String(userId)
    });
    return token;
};
exports.generateAccessToken = generateAccessToken;
const userLogin = async (username, password) => {
    const user = await schema_1.default.findOne({ username });
    if (!user) {
        (0, custom_error_1.default)(auth_1.default.AuthInvalidUsername);
    }
    const accessToken = (0, exports.generateAccessToken)(user._id);
    const response = mapUserResponseObject(user._id, user, accessToken);
    return response;
};
exports.userLogin = userLogin;
const getUserById = async (userId) => {
    const user = await schema_1.default.findById(userId);
    const response = mapUserResponseObject(userId, user);
    return response;
};
exports.getUserById = getUserById;
exports.default = {
    userLogin: exports.userLogin,
    generateAccessToken: exports.generateAccessToken
};
