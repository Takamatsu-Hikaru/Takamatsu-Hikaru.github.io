# AMA 讨论区

帖子和回复保存在 GitHub Discussions 的 General 分类。使用 GitHub 账号发帖、回复、编辑自己的内容；管理员在 GitHub 管理帖子。个人主页中英文版与 AI 社版共用讨论区。

知识库展示可搜索的帖子列表、正文和楼内回复，发帖与回复按钮打开 GitHub 编辑页。没有身份切换、内置案例或本地存储的演示数据。

`scripts/export-ama.mjs` 从 GraphQL 读取完整帖子、评论及嵌套回复，跳过已被管理员隐藏的评论。`.github/workflows/ama.yml` 在帖子或评论变化时更新 `ama-data` 分支中的 `ama.json`，网页读取该公开数据。刷新和从 GitHub 返回时会重新加载。同步通常需要一次 Actions 运行与 GitHub 缓存刷新；GitHub 上的帖子即时可见。

初始数据为空。测试数据只用于本地浏览器网络拦截，不写入公开讨论区。GitHub 认证与写入权限由 GitHub 执行，前端不持有访问令牌。

手动刷新数据：`gh workflow run ama.yml`。修改默认分类时同时更新 `scripts/ama-page.mjs` 中的新帖地址与 `scripts/export-ama.mjs` 的分类 ID。

参考：[Discussions GraphQL](https://docs.github.com/en/graphql/guides/using-the-graphql-api-for-discussions)、[Actions discussion 事件](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#discussion)。
