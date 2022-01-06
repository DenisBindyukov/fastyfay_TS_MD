import {FastifyInstance} from "fastify";
import {handlerAddUser, handlerGetUsers, handleUserMe} from "../handlers/user";
import {verifyAccessToken} from '../hooks/auth'


const userRouters = async (app: FastifyInstance) => {
    app.get('/me',{
        preHandler: [
            verifyAccessToken
        ]
    }, handleUserMe)
    app.post('/creat', handlerAddUser);
    app.get('/', handlerGetUsers);
};


export default userRouters;