// import { RedisCacheClient } from '@shared/cache';

// import { Redis } from '@upstash/redis';
// import { CacheClient, CacheValue } from '../types';
// import { Redis } from '@upstash/redis';

export type CacheValue = string | number | Buffer

export interface CacheClient {
  set: (key: string, value: CacheValue) => Promise<void>
  get: (key: string) => Promise<string | null>
  expire: (key: string, ttl: number) => Promise<void>
}

class Redis {
  constructor(config: { url?: string; token?: string }) {
    // Initialize Redis client with provided config
  }
  set(
    key: string,
    value: CacheValue,
    options?: { ex?: number }
  ): Promise<void> {
    // Set value in Redis with optional TTL
    return Promise.resolve()
  }
  get(key: string): Promise<string | null> {
    // Get value from Redis
    return Promise.resolve(null)
  }
  expire(key: string, ttl: number): Promise<void> {
    // Set expiration for a key in Redis
    return Promise.resolve()
  }
  incr(key: string): Promise<number> {
    // Increment a key in Redis
    return Promise.resolve(0)
  }
}

export class RedisCacheClient implements CacheClient {
  private readonly client: Redis
  private readonly keyPrefix: string

  constructor(keyPrefix: string = 'devhub-showcase') {
    this.client = new Redis({
      url: process.env.REDIS_URL,
      token: process.env.REDIS_TOKEN
    })
    this.keyPrefix = keyPrefix
  }

  private withPrefix(key: string): string {
    return `${this.keyPrefix}:${key}`
  }

  async set(key: string, value: CacheValue, ttl: number = 0): Promise<void> {
    await this.client.set(
      this.withPrefix(key),
      value,
      ttl ? { ex: ttl } : undefined
    )
  }

  async get(key: string): Promise<string | null> {
    return await this.client.get(this.withPrefix(key))
  }

  async expire(key: string, ttl: number): Promise<void> {
    await this.client.expire(this.withPrefix(key), ttl)
  }

  async incr(key: string): Promise<number> {
    return await this.client.incr(this.withPrefix(key))
  }
}

export class RateLimiter {
  constructor(
    private readonly cacheClient: RedisCacheClient = new RedisCacheClient(),
    private readonly limit: number = 10,
    private readonly windowSeconds: number = 60
  ) {
    this.cacheClient = cacheClient
    this.limit = limit
    this.windowSeconds = windowSeconds
  }

  public async isAllowed(userId: string): Promise<void> {
    const key = `rate_limit:${userId}`

    const currentCountStr = await this.cacheClient.get(key)

    if (!currentCountStr) {
      await this.cacheClient.set(key, '1', this.windowSeconds)

      return
    }

    const newCount = await this.cacheClient.incr(key)

    if (newCount > this.limit) {
      throw new Error('Too many requests')
    }
  }
}
