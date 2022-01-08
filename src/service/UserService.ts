import {UsersSchema} from "../types/models/UsersType";
import Users, {UserSchemeWithDocument} from "../models_Users/schema";
import customError from "../utils/custom-error";
import authErrors from "../errors/auth";

class UserService {

     createNewUser = async (doc: UsersSchema): Promise<UserSchemeWithDocument> => {

        if (!doc.name || !doc.password || !doc.aboutMe) {
            customError(authErrors.requiredFields);
        }

        const user = new Users(doc);

        return user.save();
    };
}

export default new UserService();