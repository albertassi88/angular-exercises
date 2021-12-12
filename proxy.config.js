const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'http://localhost:8000',
        secure: false, //se tiver usando https, colocar true
        logLevel: 'debug',
        pathRewrite: { '^/api': '' }
    }
];

module.exports = PROXY_CONFIG;