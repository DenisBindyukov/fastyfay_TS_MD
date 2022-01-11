import {CustomErrorParams} from "../utils/custom-error";

export const NotFoundId: CustomErrorParams = {
    message: "No id found in parameters",
    code: 'US001',
    statusCode: 401,
};
