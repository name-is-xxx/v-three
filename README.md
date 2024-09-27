# three

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### 取消组件驼峰命名

#### 法一

在 package.json 中修改

```
"rules": {
     //关闭组件命名规则
      "vue/multi-word-component-names": "off"
    }
```

#### 法二

#### 配置 vue.config.js 文件

添加 lintOnSave: false,运行时关闭 eslint 校验，但代码编辑时仍会提醒报错

```
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint校验
  lintOnSave: false
})
```
