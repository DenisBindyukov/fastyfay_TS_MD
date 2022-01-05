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
exports.verifyAccessToken = void 0;
const custom_error_1 = __importDefault(require("../utils/custom-error"));
const auth_1 = __importDefault(require("../errors/auth"));
const config_1 = __importDefault(require("../config"));
const jwt = __importStar(require("jsonwebtoken"));
const validateHeaderAuth = (request) => {
    const autToken = request.headers["authorization"];
    if (!autToken) {
        (0, custom_error_1.default)(auth_1.default.AuthMissingHeaders);
    }
    const accessToken = autToken.split(' ')[1];
    if (!accessToken) {
        (0, custom_error_1.default)(auth_1.default.AuthMissingHeaders);
    }
    return accessToken;
};
const verifyAccessToken = async (request) => {
    try {
        const accessToken = validateHeaderAuth(request);
        const decoded = Object(jwt.verify(accessToken, config_1.default.secret.accessToken));
        request.userId = decoded.aud;
        return true;
    }
    catch (error) {
        (0, custom_error_1.default)(auth_1.default.AuthMissingHeaders);
    }
};
exports.verifyAccessToken = verifyAccessToken;
exports.default = {
    verifyAccessToken: exports.verifyAccessToken
};
