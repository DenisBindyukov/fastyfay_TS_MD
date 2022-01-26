"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const app_1 = __importDefault(require("./src/app"));
const config_1 = __importDefault(require("./src/config"));
const options = {
    logger: true
};
const app = (0, app_1.default)(options);
mongoose.connect(config_1.default.mongodb.uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('error', (error) => app.log.error(error));
mongoose.connection.once('open', () => app.log.info('MongoDB has been connected'));
app.listen(config_1.default.port, config_1.default.host);
