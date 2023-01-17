// Redis client with default configurations

const redis = require('redis');

export const client = redis.createClient({
    socket: {
        host: 'redis',
        port: 6379
    }
});

client.on('error', err => {
    console.log('Error ' + err);
});