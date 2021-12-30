import * as bcrypt from 'bcrypt';
import {UsersSchema} from "../types/models/UsersType";
import Users, {UserSchemeWithDocument} from './schema'


const createNewUser = async (doc: UsersSchema):  Promise<UserSchemeWithDocument> => {

    const user = new Users(doc);

    return user.save();
};

const userLogin = async (username: string, password: string): Promise<UserSchemeWithDocument>  => {
    const user = await Users.findOne({username});
    const user_password = await Users.findOne({password});

   if (!user || !user_password) {
        throw new Error ("incorrect user name or password");
    } else  if (user && user_password)  {
       return user
   }


    throw new Error ("incorrect user name or password");
};


export default {
    createNewUser,
    userLogin
}