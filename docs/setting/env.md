---
sidebar_position: 2
---

# 环境变量

Perfect Pic 支持通过环境变量配置项目，便于Docker等容器部署。

所有配置均可通过环境变量覆盖，前缀为 `PERFECT_PIC_`，层级用 `_` 分隔。

例如：

* `server.port` -> `PERFECT_PIC_SERVER_PORT`
* `jwt.secret` -> `PERFECT_PIC_JWT_SECRET`
* `redis.enabled` -> `PERFECT_PIC_REDIS_ENABLED`
* `redis.addr` -> `PERFECT_PIC_REDIS_ADDR`
* `redis.password` -> `PERFECT_PIC_REDIS_PASSWORD`
* `redis.db` -> `PERFECT_PIC_REDIS_DB`
* `redis.prefix` -> `PERFECT_PIC_REDIS_PREFIX`

完整的环境变量模板详见 [`.env.fullexample`](https://github.com/GoodBoyboy666/perfect-pic-server/blob/main/.env.fullexample)
