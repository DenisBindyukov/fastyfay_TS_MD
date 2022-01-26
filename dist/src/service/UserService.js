"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __importDefault(require("../models_Users/schema"));
const custom_error_1 = __importDefault(require("../utils/custom-error"));
const auth_1 = __importDefault(require("../errors/auth"));
const user_1 = require("../errors/user");
class UserService {
    constructor() {
        this.createNewUser = async (doc) => {
            if (!doc.username || !doc.aboutMe) {
                (0, custom_error_1.default)(auth_1.default.requiredFields);
            }
            const user = new schema_1.default(doc);
            return user.save();
        };
        this.deleteUser = async (userId) => {
            if (!userId) {
                (0, custom_error_1.default)(user_1.NotFoundId);
            }
            await schema_1.default.findByIdAndDelete(userId);
        };
        this.updateUser = async (doc) => {
            if (!doc.username || !doc.aboutMe) {
                (0, custom_error_1.default)(auth_1.default.requiredFields);
            }
            const user = await schema_1.default.findByIdAndUpdate(doc);
            return user;
        };
    }
}
exports.default = new UserService();
