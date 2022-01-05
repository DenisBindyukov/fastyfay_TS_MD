import { AuthRegisterBodyResponse } from "../types/auth";
export declare const generateAccessToken: (userId: string) => string;
export declare const userLogin: (username: string, password: string) => Promise<AuthRegisterBodyResponse>;
export declare const getUserById: (userId: string) => Promise<AuthRegisterBodyResponse>;
declare const _default: {
    userLogin: (username: string, password: string) => Promise<AuthRegisterBodyResponse>;
    generateAccessToken: (userId: string) => string;
};
export default _default;
