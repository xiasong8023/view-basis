## 介绍
<blockquote style="border-color: red;">
  <p>移动端微信组件</p>
</blockquote>

## 安装

### 通过 npm 安装 (推荐)
<blockquote style="border-color: red;">
小程序已经支持使用 npm 安装第三方包，详见 [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm)
</blockquote>

```bash
# 通过 npm 安装
$ npm i pengesoft-weapp -S --production

# 通过 yarn 安装
$ yarn add pengesoft-weapp --production
```

## 使用组件
>以按钮组件为例，只需要在 json 文件中引入按钮对应的自定义组件即可
```css
{
  "usingComponents": {
    "py-loading": "pengesoft-weapp/components/loading"
  }
}
```

>接着就可以在 wxml 中直接使用组件
```html
<py-loading loading="true" size="middle"></py-loading>
```

## 在开发者工具中预览
```css
# 安装项目依赖
$ npm install

# 执行组件编译
$ npm run dev
```

## 请求配置
````css
const url = {
    address: 后台地址,
};
request(): string {
    return url.address;
}
````

## 资源请求配置
````css
require($uri: string): string {
    return require($uri);
}
````

## app.ts整体配置
````css
const url = {
    address: 后台地址,
};

App({
    globalData: {},
    request(): string {
        return url.address;
    },
    resourceRequestMethod(): 'local' | 'service'{
        return 'local';
    },
    require($uri: string): string {
        return require($uri);
    }
});
````
