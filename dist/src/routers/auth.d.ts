import { FastifyInstance } from "fastify";
declare const authRouters: (app: FastifyInstance) => Promise<void>;
export default authRouters;
