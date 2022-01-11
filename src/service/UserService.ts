import {UsersSchema} from "../types/models/UsersType";
import User, {UserSchemeWithDocument} from "../models_Users/schema";
import customError from "../utils/custom-error";
import authErrors from "../errors/auth";
import {NotFoundId} from "../errors/user";

class UserService {

    createNewUser = async (doc: UsersSchema): Promise<UserSchemeWithDocument> => {

        if (!doc.username || !doc.aboutMe) {
            customError(authErrors.requiredFields);
        }

        const user = new User(doc);

        return user.save();
    };

    deleteUser = async (userId: string) => {

        if (!userId) {
            customError(NotFoundId);
        }

        await User.findByIdAndDelete(userId);

        debugger
    }

    updateUser = async (doc: UsersSchema): Promise<UserSchemeWithDocument> => {

        if (!doc.username || !doc.aboutMe) {
            customError(authErrors.requiredFields);
        }

       const user =  await User.findByIdAndUpdate(doc);

        debugger
        return user
    }
}

export default new UserService();