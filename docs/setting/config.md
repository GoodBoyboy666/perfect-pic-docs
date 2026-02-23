---
sidebar_position: 1
---

# 配置文件

项目支持 `config.yaml` 配置文件和环境变量双重配置。

程序默认使用 `config/` 目录，可通过启动参数 `--config-dir` 指定其它目录（例如 `--config-dir /data/config`）。

## 配置示例

首次运行会自动使用默认配置，你可以在根目录或 `config/` 目录下创建 `config.yaml`：

```yaml
server:
  port: "8080"
  mode: "release"

database:
  type: "sqlite"
  filename: "database/perfect_pic.db"
  host: "127.0.0.1"
  port: "3306"
  user: "root"
  password: "password"
  name: "perfect_pic"
  ssl: false

jwt:
  secret: "perfect_pic_secret"
  expiration_hours: 24

upload:
  path: "uploads/imgs"
  url_prefix: "/imgs/"
  avatar_path: "uploads/avatars"
  avatar_url_prefix: "/avatars/"

smtp:
  host: "smtp.example.com"
  port: 587
  username: "examle@example.com"
  password: "your_smtp_password"
  from: "examle@example.com"
  ssl: false

redis:
  enabled: false
  addr: "127.0.0.1:6379"
  password: ""
  db: 0
  prefix: "perfect_pic"
```

## 配置说明

### Server 配置

| 配置        | 默认值 | 描述         | 可选值         |
| ----------- | ------ | ------------ | -------------- |
| server.port | 8080   | 服务启动端口 | 1-65535        |
| server.mode | debug  | 服务模式     | debug, release |

### Database 配置

| 配置              | 默认值                  | 描述                       | 可选值                  |
| ----------------- | ----------------------- | -------------------------- | ----------------------- |
| database.type     | sqlite                  | 数据库类型                 | sqlite, mysql, postgres |
| database.filename | database/perfect_pic.db | 数据库文件名称（仅SQLite） | -                       |
| database.host     | 127.0.0.1               | 数据库连接地址             | -                       |
| database.port     | 3306                    | 数据库连接端口             | 1-65535                 |
| database.user     | root                    | 数据库用户名               | -                       |
| database.password | root                    | 数据库密码                 | -                       |
| database.name     | perfect_pic             | 数据库名称                 | -                       |
| database.ssl      | false                   | 启用SSL                    | true, false             |

### JWT 配置

| 配置                 | 默认值 | 描述                           | 可选值 |
| -------------------- | ------ | ------------------------------ | ------ |
| jwt.secret           | 空     | JWT 密钥（生产环境务必修改！） | -      |
| jwt.expiration_hours | 24     | JWT过期时长                    | -      |

### Upload 配置

| 配置                     | 默认值          | 描述         | 可选值 |
| ------------------------ | --------------- | ------------ | ------ |
| upload.path              | uploads/imgs    | 图片存储路径 | -      |
| upload.url_prefix        | /imgs/          | 图片URL前缀  | -      |
| upload.avatar_path       | uploads/avatars | 头像存储路径 | -      |
| upload.avatar_url_prefix | /avatars/       | 头像URL前缀  | -      |

### SMTP 配置

| 配置          | 默认值 | 描述           | 可选值      |
| ------------- | ------ | -------------- | ----------- |
| smtp.host     | 空     | SMTP服务器地址 | -           |
| smtp.port     | 587    | SMTP服务器端口 | -           |
| smtp.username | 空     | SMTP用户名     | -           |
| smtp.password | 空     | SMTP密码       | -           |
| smtp.from     | 空     | SMTP发送者邮箱 | -           |
| smtp.ssl      | false  | 启用SMTP SSL   | true, false |

### Redis 配置

| 配置           | 默认值         | 描述                      | 可选值      |
| -------------- | -------------- | ------------------------- | ----------- |
| redis.enabled  | false          | 开启Redis支持             | true, false |
| redis.addr     | 127.0.0.1:6379 | Redis连接地址（包括端口） | -           |
| redis.password | 空             | Redis连接密码             | -           |
| redis.db       | 0              | Redis数据库               | -           |
| redis.prefix   | perfect_pic    | Redis记录前缀             | -           |
