import { Redis } from 'ioredis'


export const redis = new Redis("rediss://default:AVViAAIjcDE5Zjc5NmUyMDE5NDU0OWFhOTNjNjg3NTk3NTNmNjhkNXAxMA@classic-kid-21858.upstash.io:6379",{
    host: '127.0.0.1',
    port: 6379,
})