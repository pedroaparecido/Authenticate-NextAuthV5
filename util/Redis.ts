import { Redis } from 'ioredis'

const getRedisUrl = () => {
    if (process.env.REDIS_URL) {
        return process.env.REDIS_URL
    }

    throw new Error('REDIS_URLS não foi definida')
}

export const redis = new Redis(getRedisUrl(),{
    host: '127.0.0.1',
    port: 6379,
})