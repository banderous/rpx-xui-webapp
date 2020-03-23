import * as connectRedis from 'connect-redis'
import * as session from 'express-session'
import * as redis from 'redis'
import * as sessionFileStore from 'session-file-store'
import {getConfigValue, showFeature} from '../configuration'
import {
  FEATURE_REDIS_ENABLED,
  NOW,
  REDIS_ACCESS_KEY,
  REDIS_CLOUD_URL,
  REDIS_KEY_PREFIX,
  REDIS_PORT,
  REDIS_SSL_ENABLED,
  REDIS_TTL
} from '../configuration/references'

const RedisStore = connectRedis(session)
const FileStore = sessionFileStore(session)

let store = null

export const getRedisStore = () => {
    console.log('using RedisStore')

    const tlsOptions = {
      // This is only being used on the Preview environment
      // in all other environments this is not needed
      // password: getConfigValue(REDIS_ACCESS_KEY),
      prefix: getConfigValue(REDIS_KEY_PREFIX),
      tls: getConfigValue(REDIS_SSL_ENABLED),
    }

    const redisClient = redis.createClient(
      getConfigValue(REDIS_PORT),
      getConfigValue(REDIS_CLOUD_URL),
      tlsOptions
    )

    redisClient.on('ready', () => {
        console.log('redis client connected successfully')
    })

    redisClient.on('error', console.error)

    return new RedisStore({
        client: redisClient,
        ttl: getConfigValue(REDIS_TTL),
    })
}

export const getFileStore = () => {
    console.log('using FileStore')
    return new FileStore({
        path: getConfigValue(NOW) ? '/tmp/sessions' : '.sessions',
    })
}

export const getStore = () => {
    if (!store) {
        if (showFeature(FEATURE_REDIS_ENABLED)) {
            store = getRedisStore()
        } else {
            store = getFileStore()
        }
    }
    return store
}