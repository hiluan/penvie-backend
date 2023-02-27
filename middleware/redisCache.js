import redis from "redis";
import { promisify } from "util";
const redisClient = redis.createClient({
  host: "your-redis-hostname",
  port: "your-redis-port",
  password: "your-redis-password",
});

const getAsync = promisify(redisClient.get).bind(redisClient);
const setAsync = promisify(redisClient.set).bind(redisClient);

export default function redisCache(req, res, next) {
  // generate cache key based on request URL
  const cacheKey = req.originalUrl;

  // check if the response is already cached
  getAsync(cacheKey)
    .then((cachedResponse) => {
      if (cachedResponse) {
        // serve cached response
        res.send(JSON.parse(cachedResponse));
        return;
      }

      // cache miss, so cache the response after sending it
      res.sendResponse = res.send;
      res.send = (body) => {
        // store response in cache
        setAsync(cacheKey, JSON.stringify(body), "EX", 300);
        res.sendResponse(body);
      };

      next();
    })
    .catch((error) => {
      next(error);
    });
}
