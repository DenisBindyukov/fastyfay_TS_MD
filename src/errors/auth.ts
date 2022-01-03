import  {CustomErrorParams} from "../utils/custom-error";

export const AuthInvalidUsername: CustomErrorParams = {
    message: 'Unauthorized',
    code: 'AUTH001',
    statusCode: 401
};

export const AuthInvalidPassword: CustomErrorParams = {
    message: 'Unauthorized',
    code: 'AUTH002',
    statusCode: 401
};

export const SomeError: CustomErrorParams = {
    message: "incorrect user name or password",
    code: 'AUTH003',
    statusCode: 400
};

export const incorrectValue: CustomErrorParams = {
    message: "incorrect user name or password",
    code: 'AUTH004',
    statusCode: 400,
};

export default {
    AuthInvalidUsername,
    AuthInvalidPassword,
    SomeError,
    incorrectValue
}