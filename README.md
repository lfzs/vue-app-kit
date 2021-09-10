# vue3 + ionic + capacitor 脚手架

## 介绍

基于 vue3 进行开发，引入跨端组件库 ionic 达到原生 APP 的效果。capacitor 负责连接应用和设备。

## 目录结构

```shell
├── README.md
├── android # android 应用
├── ios # ios 应用
├── babel.config.js
├── capacitor.config.json # capacitor 配置文件
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── app.vue
│   ├── component # 组件目录
│   ├── constant # 常量
│   ├── env.js
│   ├── helper
│   ├── main.js # 入口文件 全局的方法、变量尽量在该文件中声明
│   ├── router.js # 路由
│   ├── static
│   ├── store
│   │   ├── helper
│   │   │   ├── Cache.js # 将需要缓存的 store 缓存到内存中
│   │   │   └── List.js # 列表 store 可继承使用
│   │   └── index.js
│   ├── style
│   ├── util
│   │   └── fetch-action.js # 用来装饰 store 的 fetchData 方法，监听请求是否完成，并添加 tryFetchData 方法
│   └── view
├── webpack.config.js
└── yarn.lock
```

## 注意事项

- 自动全局注册 src/component 文件下的组件(只匹配 base-*.vue 命名的组件，其他命名方式不会注册)