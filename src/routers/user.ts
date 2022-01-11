import {FastifyInstance} from "fastify";
import User from '../controllers/user.constroller'
import {verifyAccessToken} from '../hooks/auth'


const userRouters = async (app: FastifyInstance) => {
    app.get('/me',{
        preHandler: [
            verifyAccessToken
        ]
    }, User.handleUserMe)
    app.get('/user', User.handlerGetUsers);
    app.post('/user', User.handlerAddUser);
    app.delete('/user/:id', User.handlerDeleteUser);
};


export default userRouters;