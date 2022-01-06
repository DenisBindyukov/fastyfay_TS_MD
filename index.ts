import { FastifyServerOptions } from 'fastify'
import mongoose = require('mongoose')
import buildApp from './src/app'
import config from './src/config'

const fastify = require('fastify')()

const options: FastifyServerOptions = {
    logger: true
}



const app = buildApp(options);
debugger
mongoose.connect(config.mongodb.uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('error', (error) => app.log.error(error));
mongoose.connection.once('open', () => app.log.info('MongoDB has been connected'));

app.listen(config.port, config.host);