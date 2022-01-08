import {FastifyInstance} from "fastify";
import {handlerAddUser, handlerDeleteUser, handlerGetUsers, handleUserMe} from "../controllers/user.constroller";
import {verifyAccessToken} from '../hooks/auth'


const userRouters = async (app: FastifyInstance) => {
    app.get('/me',{
        preHandler: [
            verifyAccessToken
        ]
    }, handleUserMe)
    app.post('/user', handlerAddUser);
    app.get('/user', handlerGetUsers);
    app.delete('/user', handlerDeleteUser);
};


export default userRouters;