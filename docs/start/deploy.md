---
sidebar_position: 2
---

# 部署

本页将介绍如何快速部署 Perfect Pic 项目。

## 二进制文件

:::tip

带有 `embed` 字样的程序默认嵌入前端资源，开箱即用。不带该字样的构建仅为后端服务，需要自行部署前端服务。

:::

首先前往仓库请 [Releases](https://github.com/GoodBoyboy666/PerfectPic-Server/releases) 页面下载适用于您操作系统的最新版本程序。

:::danger

为了安全起见，生产环境**务必**修改默认的 JWT 密钥。

:::

下载后，直接在终端或命令行中运行程序。

**Linux / macOS:**

```bash
# 赋予执行权限
chmod +x perfect-pic-server

# 设置环境变量并启动
export PERFECT_PIC_SERVER_MODE=release
export PERFECT_PIC_JWT_SECRET=perfect_pic_secret
./perfect-pic-server
```

可选参数：

```bash
./perfect-pic-server --config-dir ./config
```

**Windows (PowerShell):**

```powershell
$env:PERFECT_PIC_SERVER_MODE="release"
$env:PERFECT_PIC_JWT_SECRET="perfect_pic_secret"
.\perfect-pic-server.exe
```

可选参数：

```powershell
.\perfect-pic-server.exe --config-dir .\config
```

服务启动后，默认运行在 `http://localhost:8080`。

## Docker

如果你更喜欢使用 Docker 部署，项目提供了开箱即用的 Docker 镜像以及 Dockerfile。

### Docker Run

先拉取镜像：

```bash
docker pull ghcr.io/goodboyboy666/perfect-pic-server:latest
```

运行容器并持久化数据：

```bash
docker run -d \
  --name perfect-pic \
  -p 8080:8080 \
  -e PERFECT_PIC_SERVER_MODE=release \
  -e PERFECT_PIC_JWT_SECRET=perfect_pic_secret \
  -v $PWD/config:/data/config \
  -v $PWD/database:/data/database \
  -v $PWD/uploads:/app/uploads \
  ghcr.io/goodboyboy666/perfect-pic-server:latest
```

* **挂载说明**:
  * `/data/config`: 存放配置文件和邮件模板。强烈建议首次运行前在该目录下配置好 `config.yaml`。
  * `/data/database`: 存放数据库文件（默认 SQLite 路径为 `/data/database/perfect_pic.db`）。
  * `/app/uploads`: 持久化存储上传的图片。

### Docker Compose

项目根目录已提供 `docker-compose.yml`，可直接使用：

:::info

`.env.example` 为最小 env 模板，`.env.fullexample` 为完整 env 模板，按需选择。

:::

```bash
# 复制环境变量模板（不可直接使用，必须按需修改）
cp .env.example .env

# 后台启动
docker compose up -d
```

如需停止并移除容器：

```bash
docker compose down
```

### 自行构建镜像

:::info

`build-arg` 中的 `FRONTEND_REF` 指向的是前端REF，可以自行选择相应的前端 COMMIT 进行构建

:::

```bash
# 获取构建版本信息
VERSION=$(git describe --tags --always --dirty)
COMMIT=$(git rev-parse HEAD)
DATE=$(date '+%Y-%m-%d_%H:%M:%S')

# 构建镜像
docker build . \
  -t perfect-pic-server:latest \
  --build-arg APP_VERSION="$VERSION" \
  --build-arg GIT_COMMIT="$COMMIT" \
  --build-arg BUILD_TIME="$DATE" \
  --build-arg FRONTEND_REF="origin/main"
```

构建完成后，可在 `docker run` 中把镜像名替换为 `perfect-pic-server:latest`；
如果使用 `docker compose`，请将 `docker-compose.yml` 中的 `image` 改为 `perfect-pic-server:latest`。

## 手动构建

如果您想从源码编译或参与开发：

### 环境要求

* Go 1.25 或更高版本
* NodeJs 22 或更高版本
* PNPM 10 或更高版本
* MySQL/PostgreSQL (可选)

### 拉取源码

```bash
git clone https://github.com/GoodBoyboy666/perfect-pic-server.git

cd perfect-pic-server
```

### 编译运行

```bash
# 进入脚本文件夹
cd scripts/

# 赋予执行权限
chmod +x build.sh

# 执行编译脚本
./build.sh
```

最终产物位于项目根目录的 `bin` 文件夹

## 前后端分离部署

:::warning

目前项目暂时只适配前后端同源的部署模式，前后端不同源部署模式暂时未进行开发与测试。

:::

项目前端仓库为：[perfect-pic-web](https://github.com/GoodBoyboy666/perfect-pic-web)

可以将前端与后端分离部署于不同的机器，只需将来自下列的路径的请求转发至后端即可：

* /api/*
* /imgs/*
* /avatars/*

可以使用Nginx或者Caddy的反向代理处理相关请求
