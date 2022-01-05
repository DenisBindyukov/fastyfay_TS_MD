export declare class CustomError extends Error {
    code?: string;
    statusCode?: number;
    data?: object;
    constructor(message: string, code?: string, statusCode?: number, data?: object);
}
export declare type CustomErrorParams = {
    message: string;
    code?: string;
    statusCode: number;
    data?: Object;
};
declare const customError: ({ message, code, statusCode, data }: CustomErrorParams) => CustomErrorParams;
export default customError;
