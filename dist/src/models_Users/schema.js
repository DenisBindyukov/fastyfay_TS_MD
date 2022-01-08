"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const collection = 'User';
const userSchema = new mongoose_1.Schema({
    username: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
    },
    aboutMe: {
        type: 'string',
        required: true
    },
    name: {
        type: 'string',
    },
}, {
    versionKey: false,
    timestamps: false //createdAt updateAt
});
exports.default = (0, mongoose_1.model)(collection, userSchema);