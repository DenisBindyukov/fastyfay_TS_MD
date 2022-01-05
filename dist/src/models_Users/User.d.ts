import { UsersSchema } from "../types/models/UsersType";
import { UserSchemeWithDocument } from './schema';
declare const _default: {
    createNewUser: (doc: UsersSchema) => Promise<UserSchemeWithDocument>;
};
export default _default;
