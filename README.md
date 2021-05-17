## shop

## Preview
预览地址: https://shihongxins.github.io/shop/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 1 项目初始化
### 1.1 使用 vue-cli 创建 vue 3 项目
```powershell
vue create shop
### 选中 vue, babel, router, vuex, css pre-processer, linter
### 进而选中 vue3, router hash, scss dart, eslint-standard

npm i -S normalize.css
### 安装 normalize.css 统一浏览器的样式

npm i -S fastclick
### 安装 fastclick 解决移动端点击事件 300 ms 延迟问题
```
### 1.2 精简项目例子

- 精简并删除初始化中生成的使用示例文件及代码
- 在 _/public/index.html_ 文件中设置添加禁止移动端缩放代码：  
`<meta name="viewport" content="width=device-width,initial-scale=1.0,mininum-scale=1.0,maxinum-scale=1.0,user-scalable=no">` 。
- 在 /assets 文件夹下创建样式文件夹及基础样式与移动端 1px 边框样式：
   -  _/assets/style/base.scss_
   -  _/assets/style/border.css_
- 修改 _/src/main.js_ 项目入口文件
   - 引入 normalize.css, base.scss, border.css 样式文件
      - 如果觉得入口文件引入的样式资源文件过多，可在 _/assets/style/_ 下新建 index.scss ，通过它批量引入样式文件资源，从而减少入口文件 main.js 引入样式资源过多代码量复杂的问题。
   - 引入 fastclick 依赖包，并初始化设置
```javascript
// /src/main.js
// ...
import fastclick from "fastclick";
// ...
fastclick.attach(document.body);
// ...
```
完成后运行 `npm run serve` 启动测试，看是否正常运行。

## 2 项目地址
Github: [https://github.com/shihongxins/shop](https://github.com/shihongxins/shop) .  
预览地址: [https://shihongxins.github.io/shop/](https://shihongxins.github.io/shop/) .  
模拟请求: [https://fastmock.site/#/project/628cf70894aca5a8f604f5219f08b343](https://fastmock.site/#/project/628cf70894aca5a8f604f5219f08b343) 

## 3 项目总结
### 3.1 经验记录
#### 3.1.1 box-sizing 
CSS 的块级盒子主要由

- margin box
- border box
- padding box
- content box

此部分组成，针对不同的浏览器，对于块级盒子的宽高 `width/height` 作用的部分不同，进而影响布局设计。

- 标准盒模型： `box-sizing: content-box` 元素宽高 `width/height` 作用于 content ，因此如果再给元素设置 `border/padding` 时，会导致元素的实际占位区域大于设置的宽高。
- 怪异（IE）盒模型： `box-sizing: border-box` 元素宽高 `width/height`作用于 border ，因此修改元素的 `border/padding` 不会影响元素的实际占位（反而最好用）。
#### 3.1.2 超小字体(<12px)
浏览器默认展示的最小字体为 12px , 如果要显示更小的字体，可以通过 CSS3 的 `transform: scale()` 进行缩放，如要展示 10px 字体，可这样设置
```css
.minifont {
  font-size: 20px;
  transform: scale(0.5);
  /* 缩放有可能造成定位不准确，这种情况需要调整缩放原点 */
  transform-orgin: left top;
}
```
#### 3.1.3 输入框样式
多数情况，输入框都自带有默认的 `outline,border,padding,background` ，可能会影响设计最好手动清除。如果要设计一个带有小图标 (如搜索框放大镜)或带有小操作按钮（如 Bootstrap 中的）的输入框，可以通过在输入框外层包裹一个容器并设置相对定位，然后给小图标小按钮设置绝对定位，最后给输入框设置内边距防止输入内容被小图标遮挡。
```css
/* scss */
.search__input__wrapper {
  position: relative;
  .icon-search {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto .16rem;
    height: .16rem; // 垂直居中
    font-size: .16rem;
    color: $search-fontcolor;
  }
  .search__input {
    outline: none;
    margin: 0;
    border: none;
    border-radius: .16rem;
    padding: 0 1em 0 3em;
    width: 100%;
    height: .32rem;
    line-height: .32rem;
    font-size: .14rem;
  }
}
```
#### 3.1.4 低网速图片加载抖动
低网速情况下，图片一点一点的加载，渲染时也是从上往下一点一点的渲染，可能出现，图片后续文字先占据了未加载完成的图片的位置，等图片一点点加载出现时，内容文字的位置不断向下移动，导致内容抖动的情况。
解决办法：

- 给图片包裹容器，然后设置容器的高度为 0 ，实际高度由 padding-bottom 撑开，撑开的高度由图片的**高宽比**决定。如一张图片大小 1500*388 。则代码为
```css
/* scss */
.img-warpper {
  height: 0;
  padding-bottom: percentage(388/1500);
  overflow: hidden;
  .img {
    width: 100%;
  }
}
```
#### 3.1.5 分界线 gap 的编写
内容区 wrapper 已经使用了左右内间距 padding 防止文本离屏幕边界太近，那么 wrapper 中的分界线 gap 如何显示为隔开整个屏幕呢？答案是**使用左右负外边距 margin ，抵消 wrapper 设置的内边距**。
#### 3.1.6 页面跳转间的状态认证
通过 session/cookie/storage 等保存用户登录信息，然后借助 Vue-router 的前置守卫和后置钩子，实现页面跳转时的状态认证。如

1. 全局前置守卫，在每个页面跳转前都检验登录状态。
```javascript
// 全局路由守卫
router.beforeEach((to, from, next) => {
  const { name } = to
  const isToLoginOrRegister = (name === 'Login' || name === 'Register')
  const isAuthenticated = localStorage.getItem('isAuthenticated')
  if (isAuthenticated || isToLoginOrRegister) {
    next()
  } else {
    localStorage.removeItem('isAuthenticated')
    next({ name: 'Login' })
  }
})
```

2. 登录页与注册页(Login&Register)的组件级前置守卫，让已经登录的用户不需重复登录。
```css
  {
    path: '/login',
    name: 'Login',
    component: Login,
    // 组件前置守卫
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('isAuthenticated')
      if (isAuthenticated) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  }
```
#### 3.1.7 axios 的自定义封装
可以对 axios 自定义封装，以便简化发送请求时的配置。
 [/src/utils/request.js](https://github.com/shihongxins/shop/blob/a688007bd0c2aebe612ff1298992faf524fea187/src/utils/request.js) 
#### 3.1.8 Vue 深度作用选择器
vue的单文件组件中，通常给样式标签 `<style>` 添加 `scoped` 属性，使其单文件组件中的样式产生“组件作用于”不会影响其他组件的样式。
原理是，通过 `scoped` 属性，在编译时该组件生成一个 `data-v-[hash:8]` 的字符串并应用给使用到样式的 DOM 元素，使得样式规则的选择器被编译后也得带有此 `attr` 才能生效。
问题：对于多组件共用的公共组件，如果需要对细微的样式进行调整带来不便。
解决：

- 公共组件不使用 `scoped` 属性（不推荐，可能影响全局）
- 公共组件对于可能修改的部分在编写一段 `<style>` 且不使用 `scoped` （vue 支持多段样式标签）
- 使用 vue 提供的深度作用选择器对公共组件的样式进行微调
   - 普通 css 编写的样式使用方法 `.curr_parent >>> .pub__scop`
   - 对于 scss 等预处理器编写的样式使用 `.curr__parent /deep/ .pub__scop` 或者 `.curr__parent ::v-deep .pub__scop`
   - vue 3 提示 `::v-deep` 建议改为 `:deep()` 形式。
#### 3.1.9 vue3 异步组件使用方式 
Vue 3 中的异步组件不能像 Vue 2 那样直接使用，而需要通过 `defineAsyncComponent` 方法来异步导入组件。
否则控制台会警告 `[Vue warn]: Invalid VNode type: true (boolean)` 并且动态组件不响应。
#### 3.1.10 Vue3 过渡组件的类名更改
Vue 3 对 `<transition>` 过渡组件的状态类名进行了更改，使其更加语义化。
```css
/* Vue 2 */
.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-leave,
.v-enter-to {
  opacity: 1;
}


/* Vue 3 */
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-leave-from,
.v-enter-to {
  opacity: 1;
}
```
### 3.2 遗留问题
#### 3.2.1 移动端 1px 边框问题
在整个项目都使用 rem 单位进行编写，且在入口文件 index.html 尝试根据设备比率动态调整根字体大小后，还是否需要对移动端的 1px 边框问题进行调整？
#### 3.2.2 项目中资源引用路径简写别名
整个项目使用相对定位引入资源，出现大量 **../../** 的情况，可以对 webpack 进行配置，简化缩写。
```js
// vue.config.js
const path = require("path");  //引入path

module.exports = {
  // 配置 webpack
  chainWebpack: config => {
    config.resolve.alias
      .set('style', path.resolve(__dirname, './src/assets/style/'))
      .set('views', path.resolve(__dirname, './src/view/'))
      .set('components', path.resolve(__dirname, './src/components/'))
  }
}
```
这样配置好后，就能像 `@` 符号代表 **/src/** 一样在 Vue 的项目中代替指定的目录了（注意：别名默认是在 JavaScript 代码中使用，如果要在 HTML/CSS 等其他地方使用必须加上 `~` ）。