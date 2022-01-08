import {Schema, Document, model} from 'mongoose';
import {UsersSchema} from '../types/models/UsersType'

const collection = 'User';

export interface UserSchemeWithDocument extends UsersSchema, Document {
    //add more field
}

const userSchema = new Schema<UserSchemeWithDocument>({
    username: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
    },
    aboutMe: {
        type: 'string',
        required: true
    },
    name: {
        type: 'string',
    },
}, {
    versionKey: false,
    timestamps: false //createdAt updateAt
});

export default model(collection, userSchema)