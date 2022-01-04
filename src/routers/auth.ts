import {FastifyInstance} from "fastify";
import {handleLogin, handleRefreshToken} from "../handlers/auth";
import {verifyAccessToken} from "../hooks/auth";

const authRouters = async (app: FastifyInstance) => {
    app.post('/login', handleLogin);
    app.post('/refresh-token',{
        preHandler: [
            verifyAccessToken
        ]
    }, handleRefreshToken);
};


export default authRouters;