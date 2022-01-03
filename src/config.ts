import * as dotenv from 'dotenv'

dotenv.config()

const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0',
    mongodb: {
        uri: process.env.MONGO_URI || 'mongodb+srv://den_flex:72983451linkoln@cluster0.goukm.mongodb.net/Database?retryWrites=true&w=majority'
    },
    secret: {
        accessToken: process.env.SECRET_ACCESS_TOKEN || 'secret'
    }
}

export default config