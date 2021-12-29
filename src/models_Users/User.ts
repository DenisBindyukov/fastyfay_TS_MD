import {UsersSchema} from "../types/models/UsersType";
import Users, {UserSchemeWithDocument} from './schema'

// const generateHashPassword = (password: string): string => {}

const createNewUser = async (doc: UsersSchema):  Promise<UserSchemeWithDocument> => {
    const user = new Users(doc);

    return user.save();
};

const userLogin = async () => {

};


export default {
    createNewUser,
    userLogin
}