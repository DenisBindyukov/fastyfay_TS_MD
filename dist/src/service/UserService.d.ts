import { UsersSchema } from "../types/models/UsersType";
import { UserSchemeWithDocument } from "../models_Users/schema";
declare class UserService {
    createNewUser: (doc: UsersSchema) => Promise<UserSchemeWithDocument>;
    deleteUser: (userId: string) => Promise<void>;
    updateUser: (doc: UsersSchema) => Promise<UserSchemeWithDocument>;
}
declare const _default: UserService;
export default _default;
