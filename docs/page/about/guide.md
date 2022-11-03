# 快速上手

## 起步指南
::: warning
这是一个警告
:::
## 介绍
这是一个简单的VuePress案例模板，目的是可以直接clone这个仓库，作为初始化一个VuePress网站启动项目，然后在这个项目的基础上新增自定义配置和功能。

除此之外，还展示一些插件的使用案例，参考[插件](./plugin)

## 为什么建这个模板站？
有一个这样的简洁的初始模板，直接启动使用就很方便了。



## 用法

### 第一步

下载 Vuepress Template 的仓库代码
```sh
git clone git@github.com:xcossin/digital-garden.git
```

### 第二步
安装依赖
```sh
yarn # 或者npm i
```

### 第三步
启动项目，随后即可根据自己的需求修改配置、编写文档内容
```sh
npm run serve
```

### 第四步
打包项目
```sh
npm run docs:build
```
结果会在`docs/.vuepress/`目录下生成一个`dist`文件夹，里面就是打包后的代码