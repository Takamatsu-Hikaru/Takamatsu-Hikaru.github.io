# AMA：本轮演示与真实接入

用户选择先看交互 demo，账号和数据库后定。本轮没有创建云数据库、OAuth 应用或公开讨论区，没有向他人发消息。

## 可以实际试的部分

`public/blog/guide/zh/ama.html` 与英文页支持提问、展开讨论、追问、切换演示 core 身份回复、按 core 是否回复筛选、搜索、刷新后保留本机内容、重置演示。内置两条明确标注的示例，所有回复均为演示文案。

当前使用浏览器 localStorage。它只验证讨论流程，不是共享数据库，也没有身份认证。页面顶部直接说明这个事实；“体验身份”用于审阅两种角色的界面。生产版必须移除身份切换器。

## 正式上线能否实现

能。主页继续使用 GitHub Pages，问答单独接一个身份服务和数据库即可。GitHub Pages 托管静态 HTML/CSS/JS，本身不运行写数据库的服务：[GitHub 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)。

如果采用站内问答，最小数据模型是用户、问题、回复和 core 成员名单。所有人读公开问题；登录用户提问、回复并修改自己的内容；core 身份由后台授予，只有相应账号能出现 core 标识或执行管理操作。“core 已回复”由实际回复者的身份计算，不等于“问题已解决”。

Supabase Auth + Postgres 是可选实现。数据层用 RLS 控制读写，core 权限放在不能由用户自行修改的角色表或受控 claims 中；不能相信前端按钮、用户可编辑 metadata 或传入的 role 字段。参考：[RLS 官方文档](https://supabase.com/docs/guides/database/postgres/row-level-security)、[RBAC 官方文档](https://supabase.com/docs/guides/api/custom-claims-and-role-based-access-control-rbac)。前端仅使用公开客户端配置，管理密钥放服务端。生产接入还要验证未登录/普通用户/core 的权限矩阵、输入长度、频率限制、内容隐藏、删除和数据备份。

如果大家愿意用 GitHub 账号参与，也可以用 GitHub Discussions + giscus：评论保存在 Discussions，不需另建自管数据库；代价是依赖 GitHub 登录和它的讨论模型。参考：[giscus 官方说明](https://giscus.app/)。本轮只调研，没有安装应用或启用 Discussions。

## 下一轮只需确定的事情

选站内账号还是 GitHub 账号；哪些人是 core；是否允许游客提问；谁处理垃圾内容。确定后才做真实认证、数据库迁移、权限测试与上线。演示数据不迁移成真实用户发言。
