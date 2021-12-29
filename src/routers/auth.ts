import {FastifyInstance} from "fastify";
import {handleLogin, handleRegister} from "../handlers/auth";


const authRouters = async (app: FastifyInstance) => {
    app.post('/login', handleLogin);
    app.post('heroku logs --tail', handleRegister);
};


export default authRouters;