(function(e){function t(t){for(var a,r,c=t[0],s=t[1],p=t[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);g&&g(t);while(d.length)d.shift()();return o.push.apply(o,p||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={index:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=function(e){return r.p+"static/js/"+({"pages-address-address":"pages-address-address","pages-address-addressManage":"pages-address-addressManage","pages-cart-cart":"pages-cart-cart","pages-category-category":"pages-category-category","pages-index-index":"pages-index-index","pages-login-login":"pages-login-login","pages-product-product":"pages-product-product","pages-set-set":"pages-set-set","pages-user-user":"pages-user-user"}[e]||e)+"."+{"pages-address-address":"3196aac8","pages-address-addressManage":"9396caa4","pages-cart-cart":"7c75ef00","pages-category-category":"36d9022d","pages-index-index":"5f7a817a","pages-login-login":"928f6c64","pages-product-product":"a9d56465","pages-set-set":"35c5eba7","pages-user-user":"3b5c942d"}[e]+".js"}(e);var s=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,n[1](s)}i[e]=void 0}};var p=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var g=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("ee12")},"05a6":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={pages:[{path:"pages/index/index",style:{"app-plus":{titleNView:{type:"transparent",searchInput:{backgroundColor:"rgba(231, 231, 231,.7)",borderRadius:"16px",placeholder:"请输入类型 如：打包",disabled:!0,placeholderColor:"#606266"}}}}},{path:"pages/cart/cart",style:{navigationBarTitleText:"购物车"}},{path:"pages/category/category",style:{navigationBarTitleText:"分类","app-plus":{bounce:"none"}}},{path:"pages/user/user",style:{navigationBarTitleText:"我的","app-plus":{bounce:"none",titleNView:{type:"transparent"}}}},{path:"pages/product/product",style:{navigationBarTitleText:"详情展示","app-plus":{titleNView:{type:"transparent"}}}},{path:"pages/address/address",style:{navigationBarTitleText:"地址"}},{path:"pages/address/addressManage",style:{navigationBarTitleText:"添加地址"}},{path:"pages/set/set",style:{navigationBarTitleText:"设置"}},{path:"pages/login/login",style:{navigationBarTitleText:"登陆"}}],globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#FFFFFF",backgroundColor:"#f8f8f8"},tabBar:{color:"#C0C4CC",selectedColor:"#fa436a",borderStyle:"black",backgroundColor:"#ffffff",list:[{pagePath:"pages/index/index",iconPath:"static/tab-home.png",selectedIconPath:"static/tab-home-current.png",text:"首页"},{pagePath:"pages/category/category",iconPath:"static/tab-cate.png",selectedIconPath:"static/tab-cate-current.png",text:"分类"},{pagePath:"pages/cart/cart",iconPath:"static/tab-cart.png",selectedIconPath:"static/tab-cart-current.png",text:"购物车"},{pagePath:"pages/user/user",iconPath:"static/tab-my.png",selectedIconPath:"static/tab-my-current.png",text:"我的"}]}}},"078f":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*\n\t全局公共样式和字体图标\n*/@font-face{font-family:yticon;font-weight:400;font-style:normal;src:url(https://at.alicdn.com/t/font_1078604_w4kpxh0rafi.ttf) format("truetype")}.yticon{font-family:yticon!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-yiguoqi1:before{content:"\\e700"}.icon-iconfontshanchu1:before{content:"\\e619"}.icon-iconfontweixin:before{content:"\\e611"}.icon-alipay:before{content:"\\e636"}.icon-shang:before{content:"\\e624"}.icon-shouye:before{content:"\\e626"}.icon-shanchu4:before{content:"\\e622"}.icon-xiaoxi:before{content:"\\e618"}.icon-jiantour-copy:before{content:"\\e600"}.icon-fenxiang2:before{content:"\\e61e"}.icon-pingjia:before{content:"\\e67b"}.icon-daifukuan:before{content:"\\e68f"}.icon-pinglun-copy:before{content:"\\e612"}.icon-dianhua-copy:before{content:"\\e621"}.icon-shoucang:before{content:"\\e645"}.icon-xuanzhong2:before{content:"\\e62f"}.icon-gouwuche_:before{content:"\\e630"}.icon-icon-test:before{content:"\\e60c"}.icon-icon-test1:before{content:"\\e632"}.icon-bianji:before{content:"\\e646"}.icon-jiazailoading-A:before{content:"\\e8fc"}.icon-zuoshang:before{content:"\\e613"}.icon-jia2:before{content:"\\e60a"}.icon-huifu:before{content:"\\e68b"}.icon-sousuo:before{content:"\\e7ce"}.icon-arrow-fine-up:before{content:"\\e601"}.icon-hot:before{content:"\\e60e"}.icon-lishijilu:before{content:"\\e6b9"}.icon-zhengxinchaxun-zhifubaoceping-:before{content:"\\e616"}.icon-naozhong:before{content:"\\e64a"}.icon-xiatubiao--copy:before{content:"\\e608"}.icon-shoucang_xuanzhongzhuangtai:before{content:"\\e6a9"}.icon-jia1:before{content:"\\e61c"}.icon-bangzhu1:before{content:"\\e63d"}.icon-arrow-left-bottom:before{content:"\\e602"}.icon-arrow-right-bottom:before{content:"\\e603"}.icon-arrow-left-top:before{content:"\\e604"}.icon-icon--:before{content:"\\e744"}.icon-zuojiantou-up:before{content:"\\e605"}.icon-xia:before{content:"\\e62d"}.icon--jianhao:before{content:"\\e60b"}.icon-weixinzhifu:before{content:"\\e61a"}.icon-comment:before{content:"\\e64f"}.icon-weixin:before{content:"\\e61f"}.icon-fenlei1:before{content:"\\e620"}.icon-erjiye-yucunkuan:before{content:"\\e623"}.icon-Group-:before{content:"\\e688"}.icon-you:before{content:"\\e606"}.icon-forward:before{content:"\\e607"}.icon-tuijian:before{content:"\\e610"}.icon-bangzhu:before{content:"\\e679"}.icon-share:before{content:"\\e656"}.icon-yiguoqi:before{content:"\\e997"}.icon-shezhi1:before{content:"\\e61d"}.icon-fork:before{content:"\\e61b"}.icon-kafei:before{content:"\\e66a"}.icon-iLinkapp-:before{content:"\\e654"}.icon-saomiao:before{content:"\\e60d"}.icon-shezhi:before{content:"\\e60f"}.icon-shouhoutuikuan:before{content:"\\e631"}.icon-gouwuche:before{content:"\\e609"}.icon-dizhi:before{content:"\\e614"}.icon-fenlei:before{content:"\\e706"}.icon-xingxing:before{content:"\\e70b"}.icon-tuandui:before{content:"\\e633"}.icon-zuanshi:before{content:"\\e615"}.icon-zuo:before{content:"\\e63c"}.icon-shoucang2:before{content:"\\e62e"}.icon-shouhuodizhi:before{content:"\\e712"}.icon-yishouhuo:before{content:"\\e71a"}.icon-dianzan-ash:before{content:"\\e617"}uni-view,\nuni-scroll-view,\nuni-swiper,\nuni-swiper-item,\nuni-cover-view,\nuni-cover-image,\nuni-icon,\nuni-text,\nuni-rich-text,\nuni-progress,\nuni-button,\nuni-checkbox,\nuni-form,\nuni-input,\nuni-label,\nuni-radio,\nuni-slider,\nuni-switch,\nuni-textarea,\nuni-navigator,\nuni-audio,\nuni-camera,\nuni-image,\nuni-video{box-sizing:border-box}\n/* 骨架屏替代方案 */.Skeleton{background:#f3f3f3;padding:%?20?% 0;border-radius:%?8?%}\n/* 图片载入替代方案 */.image-wrapper{font-size:0;background:#f3f3f3;border-radius:4px}.image-wrapper uni-image{width:100%;height:100%;transition:.6s;opacity:0}.image-wrapper uni-image.loaded{opacity:1}.clamp{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block}.common-hover{background:#f5f5f5}\n/*边框*/.b-b:after,\n.b-t:after{position:absolute;z-index:3;left:0;right:0;height:0;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);border-bottom:1px solid #e4e7ed}.b-b:after{bottom:0}.b-t:after{top:0}\n/* button样式改写 */uni-button,\nuni-button{height:%?80?%;line-height:%?80?%;font-size:%?34?%;font-weight:400}uni-button.no-border:before, uni-button.no-border:after, uni-button.no-border:before, uni-button.no-border:after{border:0}uni-button[type=default],\nuni-button[type=default]{color:#303133}\n/* input 样式 */.input-placeholder{color:#999}.placeholder{color:#999}',""]),e.exports=t},"110e":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this.$createElement,t=this._self._c||e;return t("App",{attrs:{keepAliveInclude:this.keepAliveInclude}})},i=[]},"2bb0":function(e,t,n){"use strict";(function(e){var t=n("4ea4").default;n("13d5"),n("d3b7"),n("ddb0"),n("ac1f"),n("5319");var a=t(n("e143")),i={keys:function(){return[]}};e["____BF0F79F____"]=!0,delete e["____BF0F79F____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#FFFFFF",backgroundColor:"#f8f8f8"},tabBar:{color:"#C0C4CC",selectedColor:"#fa436a",borderStyle:"black",backgroundColor:"#ffffff",list:[{pagePath:"pages/index/index",iconPath:"static/tab-home.png",selectedIconPath:"static/tab-home-current.png",text:"首页",redDot:!1,badge:""},{pagePath:"pages/category/category",iconPath:"static/tab-cate.png",selectedIconPath:"static/tab-cate-current.png",text:"分类",redDot:!1,badge:""},{pagePath:"pages/cart/cart",iconPath:"static/tab-cart.png",selectedIconPath:"static/tab-cart-current.png",text:"购物车",redDot:!1,badge:""},{pagePath:"pages/user/user",iconPath:"static/tab-my.png",selectedIconPath:"static/tab-my-current.png",text:"我的",redDot:!1,badge:""}]}},e.__uniConfig.compilerVersion="3.99",e.__uniConfig.darkmode=!1,e.__uniConfig.themeConfig={},e.__uniConfig.uniPlatform="h5",e.__uniConfig.appId="__UNI__BF0F79F",e.__uniConfig.appName="tiddy",e.__uniConfig.appVersion="1.0.0",e.__uniConfig.appVersionCode="100",e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey=void 0,e.__uniConfig.googleMapKey=void 0,e.__uniConfig.aMapKey=void 0,e.__uniConfig.aMapSecurityJsCode=void 0,e.__uniConfig.aMapServiceHost=void 0,e.__uniConfig.locale="",e.__uniConfig.fallbackLocale=void 0,e.__uniConfig.locales=i.keys().reduce((function(e,t){var n=t.replace(/\.\/(uni-app.)?(.*).json/,"$2"),a=i(t);return Object.assign(e[n]||(e[n]={}),a.common||a),e}),{}),e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=n.e,a.default.component("pages-index-index",(function(e){var t={component:n.e("pages-index-index").then(function(){return e(n("5995"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),a.default.component("pages-cart-cart",(function(e){var t={component:n.e("pages-cart-cart").then(function(){return e(n("2138"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),a.default.component("pages-category-category",(function(e){var t={component:n.e("pages-category-category").then(function(){return e(n("338d"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),a.default.component("pages-user-user",(function(e){var t={component:n.e("pages-user-user").then(function(){return e(n("cf70"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),a.default.component("pages-product-product",(function(e){var t={component:n.e("pages-product-product").then(function(){return e(n("2c1d"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),a.default.component("pages-address-address",(function(e){var t={component:n.e("pages-address-address").then(function(){return e(n("0407"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),a.default.component("pages-address-addressManage",(function(e){var t={component:n.e("pages-address-addressManage").then(function(){return e(n("324a"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),a.default.component("pages-set-set",(function(e){var t={component:n.e("pages-set-set").then(function(){return e(n("3b68"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),a.default.component("pages-login-login",(function(e){var t={component:n.e("pages-login-login").then(function(){return e(n("f62b"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{titleNView:{type:"transparent",searchInput:{backgroundColor:"rgba(231, 231, 231,.7)",borderRadius:"16px",placeholder:"请输入类型 如：打包",disabled:!0,placeholderColor:"#606266"}}})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:0}},{path:"/pages/cart/cart",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"购物车"})},[e("pages-cart-cart",{slot:"page"})])}},meta:{id:2,name:"pages-cart-cart",isNVue:!1,maxWidth:0,pagePath:"pages/cart/cart",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/category/category",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"分类"})},[e("pages-category-category",{slot:"page"})])}},meta:{id:3,name:"pages-category-category",isNVue:!1,maxWidth:0,pagePath:"pages/category/category",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/user/user",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:3},__uniConfig.globalStyle,{navigationBarTitleText:"我的",titleNView:{type:"transparent"}})},[e("pages-user-user",{slot:"page"})])}},meta:{id:4,name:"pages-user-user",isNVue:!1,maxWidth:0,pagePath:"pages/user/user",isQuit:!0,isTabBar:!0,tabBarIndex:3,windowTop:0}},{path:"/pages/product/product",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"详情展示",titleNView:{type:"transparent"}})},[e("pages-product-product",{slot:"page"})])}},meta:{name:"pages-product-product",isNVue:!1,maxWidth:0,pagePath:"pages/product/product",windowTop:0}},{path:"/pages/address/address",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"地址"})},[e("pages-address-address",{slot:"page"})])}},meta:{name:"pages-address-address",isNVue:!1,maxWidth:0,pagePath:"pages/address/address",windowTop:44}},{path:"/pages/address/addressManage",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"添加地址"})},[e("pages-address-addressManage",{slot:"page"})])}},meta:{name:"pages-address-addressManage",isNVue:!1,maxWidth:0,pagePath:"pages/address/addressManage",windowTop:44}},{path:"/pages/set/set",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"设置"})},[e("pages-set-set",{slot:"page"})])}},meta:{name:"pages-set-set",isNVue:!1,maxWidth:0,pagePath:"pages/set/set",windowTop:44}},{path:"/pages/login/login",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"登陆"})},[e("pages-login-login",{slot:"page"})])}},meta:{name:"pages-login-login",isNVue:!1,maxWidth:0,pagePath:"pages/login/login",windowTop:44}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,n("c8ba"))},"2cbb":function(e,t,n){"use strict";n.r(t);var a=n("754d"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},"37ac":function(e,t,n){"use strict";n.r(t);var a=n("110e"),i=n("2cbb");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("9b38");var r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=c.exports},6139:function(e,t,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("e143")),o=a(n("26cb"));i.default.use(o.default);var r=new o.default.Store({state:{hasLogin:!1,userInfo:{}},mutations:{login:function(e,t){e.hasLogin=!0,e.userInfo=t,uni.setStorage({key:"userInfo",data:t}),console.log(e.userInfo)},logout:function(e){e.hasLogin=!1,e.userInfo={},uni.removeStorage({key:"userInfo"})}},actions:{}}),c=r;t.default=c},"754d":function(e,t,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("5530")),o=n("26cb"),r={methods:(0,i.default)({},(0,o.mapMutations)(["login"])),onLaunch:function(){var e=this,t=uni.getStorageSync("userInfo")||"";t.id&&uni.getStorage({key:"userInfo",success:function(t){e.login(t.data)}})},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=r},"7a26":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={appid:"__UNI__BF0F79F"}},"8f65":function(e,t,n){var a=n("078f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("06ac88ac",a,!0,{sourceMap:!1,shadowMode:!1})},9477:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={carouselList:[{src:"/static/banner/1.png",background:"rgb(203, 87, 60)"},{src:"/static/banner/2.png",background:"rgb(205, 215, 218)"},{src:"/static/banner/3.png",background:"rgb(183, 73, 69)"},{src:"/static/banner/4.png",background:"rgb(183, 73, 69)"}],cartList:[],detailData:{title:"纯种金毛幼犬活体有血统证书",title2:"拆家小能手 你值得拥有",favorite:!0,imgList:[{src:"http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg"},{src:"http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/06/c4/25310541_1378426131583.jpg"},{src:"http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1610/26/c4/28926240_1477451226577_mthumb.jpg"},{src:"http://picture.ik123.com/uploads/allimg/190219/12-1Z219105139.jpg"}],episodeList:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],guessList:[{src:"http://img.52z.com/upload/news/image/20180530/20180530081619_31029.jpg",title:"猫眼指甲油",title2:"独树一帜的免照灯猫眼指甲"},{src:"http://m.china-7.net/uploads/14778449362891.jpg",title:"创意屋",title2:"创意屋形上下双层高低床"},{src:"http://www.k73.com/up/allimg/130415/22-130415093527.jpg",title:"MissCandy 指甲油",title2:"十分适合喜欢素净的妹纸，尽显淡雅的气质"},{src:"http://img0.imgtn.bdimg.com/it/u=2108933440,2194129200&fm=214&gp=0.jpg\t",title:"RMK 2017星空海蓝唇釉",title2:"唇釉质地，上唇后很滋润。少女也会心动的蓝色，透明液体形状。"}],evaList:[{src:"http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/77c6a7efce1b9d1663174705fbdeb48f8d546486.jpg",nickname:"Ranth Allngal",time:"09-20 12:54",zan:"54",content:"评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。"},{src:"http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg",nickname:"Ranth Allngal",time:"09-20 12:54",zan:"54",content:"楼上说的好有道理。"}]},userInfo:{status:1,data:{id:1,mobile:18888888888,nickname:"C",portrait:"http://img.61ef.cn/news/201409/28/2014092805595807.jpg"},msg:"提示"},shareList:[{type:1,icon:"/static/temp/share_wechat.png",text:"微信好友"},{type:2,icon:"/static/temp/share_moment.png",text:"朋友圈"},{type:3,icon:"/static/temp/share_qq.png",text:"QQ好友"},{type:4,icon:"/static/temp/share_qqzone.png",text:"QQ空间"}],goodsList:[{image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg",image2:"http://pic.rmb.bdstatic.com/819a044daa66718c2c40a48c1ba971e6.jpeg",image3:"http://img001.hc360.cn/y5/M00/1B/45/wKhQUVYFE0uEZ7zVAAAAAMj3H1w418.jpg",title:"古黛妃 短袖t恤女夏装2019新款韩版宽松",price:179,sales:61},{image:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg",image2:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554013048&di=a3dc9fd1406dd7bad7fbb97b5489ec04&imgtype=jpg&er=1&src=http%3A%2F%2Fimg009.hc360.cn%2Fhb%2FnKo44ac2656F831c684507E3Da0E3a26841.jpg",image3:"http://img.zcool.cn/community/017a4e58b4eab6a801219c77084373.jpg",title:"潘歌针织连衣裙",price:78,sales:16},{image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg",image2:"http://m.360buyimg.com/n12/jfs/t247/42/1078640382/162559/3628a0b/53f5ad09N0dd79894.jpg%21q70.jpg",image3:"http://ikids.61kids.com.cn/upload/2018-12-29/1546070626796114.jpg",title:"巧谷2019春夏季新品新款女装",price:108.8,sales:5},{image:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=756705744,3505936868&fm=11&gp=0.jpg",image2:"http://images.jaadee.com/images/201702/goods_img/30150_d85aed83521.jpg",image3:"http://img13.360buyimg.com/popWaterMark/jfs/t865/120/206320620/138889/dcc94caa/550acedcN613e2a9d.jpg",title:"私萱连衣裙",price:265,sales:88},{image:"https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg",image2:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553418265666&di=d4a7f7eb0ae3c859edeb921641ee1c3a&imgtype=0&src=http%3A%2F%2Fimg003.hc360.cn%2Fy3%2FM02%2FF8%2F9F%2FwKhQh1TuSkGELIlQAAAAAPuLl4M987.jpg",image3:"http://img.ef43.com.cn/product/2016/8/05100204b0c.jpg",title:"娇诗茹 ulzzang原宿风学生潮韩版春夏短",price:422,sales:137},{image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg",image2:"http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",image3:"http://img.61ef.cn/news/201903/20/2019032009251784.jpg",title:"古黛妃 短袖t恤女夏装2019新款韩版宽松",price:179,sales:95}],orderList:[{time:"2019-04-06 11:37",state:1,goodsList:[{image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg"},{image:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg"},{image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg"},{image:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg"},{image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg"},{image:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg"},{image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg"}]},{time:"2019-04-06 11:37",state:9,goodsList:[{title:"古黛妃 短袖t恤女 春夏装2019新款韩版宽松",price:179.5,image:"https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg",number:1,attr:"珊瑚粉 M"}]},{time:"2019-04-06 11:37",state:1,goodsList:[{image:"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/2120460599/O1CN01LBPS4C1GINkwsOTXS_!!2120460599.jpg_430x430q90.jpg"},{image:"https://img.alicdn.com/imgextra/i2/1069876356/TB2ocTQG4WYBuNjy1zkXXXGGpXa_!!1069876356.jpg_430x430q90.jpg"},{image:"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/2120460599/O1CN01YsmgwZ1GINkv38rkn_!!2120460599.jpg_430x430q90.jpg"}]},{time:"2019-04-06 11:37",state:1,goodsList:[{title:"回力女鞋高帮帆布鞋女学生韩版鞋子女2019潮鞋女鞋新款春季板鞋女",price:69,image:"https://img.alicdn.com/imgextra/i3/2128794607/TB2gzzoc41YBuNjy1zcXXbNcXXa_!!2128794607.jpg_430x430q90.jpg",number:1,attr:"白色-高帮 39"}]},{time:"2019-04-06 11:37",state:1,goodsList:[{image:"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/3358098495/O1CN01dhYyid2Ccl5MWLDok_!!3358098495.jpg_430x430q90.jpg"},{image:"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/3358098495/O1CN01AWsnFA2Ccl5OzvqsL_!!3358098495.jpg_430x430q90.jpg"}]},{time:"2019-04-06 11:37",state:1,goodsList:[{image:"https://img.alicdn.com/imgextra/i4/3470687433/O1CN0124mMQOSERr18L1h_!!3470687433.jpg_430x430q90.jpg"},{image:"https://img.alicdn.com/imgextra/i3/2888462616/O1CN01ERra5J1VCAbZaKI5n_!!0-item_pic.jpg_430x430q90.jpg"},{image:"https://gd3.alicdn.com/imgextra/i3/819381730/O1CN01YV4mXj1OeNhQIhQlh_!!819381730.jpg_400x400.jpg"}]}],cateList:[{id:1,name:"收纳"},{id:2,name:"清洁"},{id:3,name:"打包"},{id:4,name:"搬运"},{id:5,pid:1,name:"手机通讯"},{id:6,pid:1,name:"运营商"},{id:8,pid:5,name:"全面屏手机",picture:"/static/temp/cate2.jpg"},{id:9,pid:5,name:"游戏手机",picture:"/static/temp/cate3.jpg"},{id:10,pid:5,name:"老人机",picture:"/static/temp/cate1.jpg"},{id:11,pid:5,name:"拍照手机",picture:"/static/temp/cate4.jpg"},{id:12,pid:5,name:"女性手机",picture:"/static/temp/cate5.jpg"},{id:14,pid:6,name:"合约机",picture:"/static/temp/cate1.jpg"},{id:15,pid:6,name:"选好卡",picture:"/static/temp/cate4.jpg"},{id:16,pid:6,name:"办套餐",picture:"/static/temp/cate5.jpg"},{id:17,pid:2,name:"礼品"},{id:18,pid:2,name:"鲜花"},{id:19,pid:17,name:"公益摆件",picture:"/static/temp/cate7.jpg"},{id:20,pid:17,name:"创意礼品",picture:"/static/temp/cate8.jpg"},{id:21,pid:18,name:"鲜花",picture:"/static/temp/cate9.jpg"},{id:22,pid:18,name:"每周一花",picture:"/static/temp/cate10.jpg"},{id:23,pid:18,name:"卡通花束",picture:"/static/temp/cate11.jpg"},{id:24,pid:18,name:"永生花",picture:"/static/temp/cate12.jpg"},{id:25,pid:3,name:"男装"},{id:26,pid:3,name:"女装"},{id:27,pid:25,name:"男士T恤",picture:"/static/temp/cate13.jpg"},{id:28,pid:25,name:"男士外套",picture:"/static/temp/cate14.jpg"},{id:29,pid:26,name:"裙装",picture:"/static/temp/cate15.jpg"},{id:30,pid:26,name:"T恤",picture:"/static/temp/cate16.jpg"},{id:31,pid:26,name:"上装",picture:"/static/temp/cate15.jpg"},{id:32,pid:26,name:"下装",picture:"/static/temp/cate16.jpg"},{id:33,pid:4,name:"奶粉"},{id:34,pid:4,name:"营养辅食"},{id:35,pid:4,name:"童装"},{id:39,pid:4,name:"喂养用品"},{id:36,pid:33,name:"有机奶粉",picture:"/static/temp/cate17.jpg"},{id:37,pid:34,name:"果泥/果汁",picture:"/static/temp/cate18.jpg"},{id:39,pid:34,name:"面条/粥",picture:"/static/temp/cate20.jpg"},{id:42,pid:35,name:"婴童衣橱",picture:"/static/temp/cate19.jpg"},{id:43,pid:39,name:"吸奶器",picture:"/static/temp/cate21.jpg"},{id:44,pid:39,name:"儿童餐具",picture:"/static/temp/cate22.jpg"},{id:45,pid:39,name:"牙胶安抚",picture:"/static/temp/cate23.jpg"},{id:46,pid:39,name:"围兜",picture:"/static/temp/cate24.jpg"}]};t.default=a},"9b38":function(e,t,n){"use strict";var a=n("8f65"),i=n.n(a);i.a},ee12:function(e,t,n){"use strict";var a=n("4ea4").default;n("d3b7");var i=a(n("5530"));n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2bb0"),n("1c31"),n("a9ff");var o=a(n("e143")),r=a(n("6139")),c=a(n("37ac")),s=a(n("9477"));o.default.config.productionTip=!1,o.default.prototype.$fire=new o.default,o.default.prototype.$store=r.default,o.default.prototype.$api={msg:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"none";!1!==Boolean(e)&&uni.showToast({title:e,duration:t,mask:n,icon:a})},json:function(e){return new Promise((function(t){setTimeout((function(){t(s.default[e])}),500)}))},prePage:function(){var e=getCurrentPages(),t=e[e.length-2];return t}},c.default.mpType="app";var p=new o.default((0,i.default)({},c.default));p.$mount()}});