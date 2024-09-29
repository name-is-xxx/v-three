# three+vue （ps.由于没有后台，所以所有的的资源全部放在public里）

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

## 护眼配色

three.js 中颜色最好使用**十六进制数字**，如 0x008b8b，而非 CSS 风格的字符串，如#008b8b。因为 three.js 材质的颜色通常默认为线性颜色空间， 而 three.js 会将 CSS 风格的字符串假定为 sRGB 颜色值，然后在内部进行线性颜色空间的转换，可能会导致颜色的丢失。

#### 绿色

|        |  原色   | 对比色  |
| :----: | :-----: | :-----: |
| 豆沙绿 | #C7EDCC | #6E7B6C |
| 青草绿 | #E3EDD5 | #556B2F |
| 薄荷绿 | #CCE8CF | #008B8B |

#### 黄色

|        |  原色   | 对比色  |
| :----: | :-----: | :-----: |
| 杏仁黄 | #FAF9DE | #8B4513 |

## 转载来源声明

### 视频

|          |                                                      网址                                                       | 作者 |
| :------: | :-------------------------------------------------------------------------------------------------------------: | :--: |
| 眼保健操 | [第六套中小学眼保健操](https://www.bilibili.com/video/BV14Y4y1N7PW/?vd_source=3fd1602539aae66a8922e9ebedc1eee2) |  /   |
