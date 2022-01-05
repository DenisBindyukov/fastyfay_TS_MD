import { Document } from 'mongoose';
import { UsersSchema } from '../types/models/UsersType';
export interface UserSchemeWithDocument extends UsersSchema, Document {
}
declare const _default: import("mongoose").Model<UserSchemeWithDocument, any, any>;
export default _default;
