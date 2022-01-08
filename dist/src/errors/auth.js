"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = exports.AuthMissingHeaders = exports.requiredFields = exports.incorrectValue = exports.SomeError = exports.AuthInvalidPassword = exports.AuthInvalidUsername = void 0;
exports.AuthInvalidUsername = {
    message: 'Unauthorized',
    code: 'AUTH001',
    statusCode: 401
};
exports.AuthInvalidPassword = {
    message: 'Unauthorized',
    code: 'AUTH002',
    statusCode: 401
};
exports.SomeError = {
    message: "incorrect user name or password",
    code: 'AUTH003',
    statusCode: 400
};
exports.incorrectValue = {
    message: "incorrect user name or password",
    code: 'AUTH004',
    statusCode: 400,
};
exports.requiredFields = {
    message: "username, password, aboutMe are required fields",
    code: 'AUTH005',
    statusCode: 400,
};
exports.AuthMissingHeaders = {
    message: "Unauthorized",
    code: 'AUTH006',
    statusCode: 401,
};
exports.ServerError = {
    message: "server error",
    code: 'AUTH007',
    statusCode: 500,
};
exports.default = {
    AuthInvalidUsername: exports.AuthInvalidUsername,
    AuthInvalidPassword: exports.AuthInvalidPassword,
    SomeError: exports.SomeError,
    incorrectValue: exports.incorrectValue,
    requiredFields: exports.requiredFields,
    AuthMissingHeaders: exports.AuthMissingHeaders,
    ServerError: exports.ServerError
};
