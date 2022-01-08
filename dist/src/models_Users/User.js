"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __importDefault(require("./schema"));
const custom_error_1 = __importDefault(require("../utils/custom-error"));
const auth_1 = __importDefault(require("../errors/auth"));
const createNewUser = async (doc) => {
    if (!doc.name || !doc.password || !doc.aboutMe) {
        (0, custom_error_1.default)(auth_1.default.requiredFields);
    }
    const user = new schema_1.default(doc);
    return user.save();
};
exports.default = {
    createNewUser,
};
