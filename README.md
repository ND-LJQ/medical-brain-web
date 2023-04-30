<!--
 * @Author: ND_LJQ
 * @Date: 2023-03-25 09:34:45
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-30 08:03:30
 * @Description:
 * @Email: ndliujunqi@outlook.com
-->

# 学术大脑前端

本项目是学术大脑的前端部分，使用了以下技术：

- [Vite](https://github.com/vitejs/vite) 构建工具
- [Vue3](https://v3.vuejs.org/) 前端框架
- [Axios](https://axios-http.com/) 网络请求库
- [Sass](https://sass-lang.com/) CSS 预处理器
- [ECharts 5](https://echarts.apache.org/zh/index.html) 数据可视化库
- [Element Plus](https://element-plus.org/) UI 组件库

## 项目结构

```bash
├── public # 静态资源
├── src # 源代码
│ ├── api # API 接口定义
│ ├── assets # 图片、字体等静态资源
│ ├── components # 公共组件
│ ├── network # 网络请求相关封装
│ ├── router # 路由配置
│ ├── store # Vuex 状态管理
│ ├── util # 工具函数
│ ├── views # 页面视图
│ ├── App.vue # 根组件
│ ├── main.js # 入口文件
│ └── styles # 全局样式
├── .gitignore # Git 忽略文件
├── .prettierignore # Prettier 忽略文件
├── .prettier.cjs # Prettier代码格式化配置文件
├── vite.config.js # Vite配置文件
├── package.json # 依赖及配置文件
└── README.md # 项目说明文件
```

## 快速开始

```bash
# 克隆项目到本地
git clone https://gitee.com/your_username/your_repo.git

# 进入项目目录
cd your_repo

# 安装依赖
npm install

# 启动服务
npm run dev
```

## 构建

```bash
# 构建生产环境

npm run build

#构建完成后，生成的文件位于 dist 目录下。

```

## 许可证

[MIT](https://opensource.org/license/mit/)
