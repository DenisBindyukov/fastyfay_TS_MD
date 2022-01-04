import {UsersSchema} from "../types/models/UsersType";
import Users, {UserSchemeWithDocument} from './schema'
import customError from "../utils/custom-error";
import authErrors, {requiredFields} from '../errors/auth';


const createNewUser = async (doc: UsersSchema): Promise<UserSchemeWithDocument> => {

    if (!doc.name || !doc.password) {
        customError(authErrors.requiredFields);
    }

    const user = new Users(doc);

    return user.save();
};



export default {
    createNewUser,
}