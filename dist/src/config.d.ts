declare const config: {
    env: string;
    port: string | number;
    host: string;
    mongodb: {
        uri: string;
    };
    secret: {
        accessToken: string;
    };
};
export default config;
