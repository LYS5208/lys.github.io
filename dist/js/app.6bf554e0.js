(function(t){function e(e){for(var a,o,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);m&&m(e);while(d.length)d.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,o=1;o<r.length;o++){var i=r[o];0!==s[i]&&(a=!1)}a&&(n.splice(e--,1),t=c(c.s=r[0]))}return t}var a={},o={app:0},s={app:0},n=[];function i(t){return c.p+"js/"+({"group-user":"group-user"}[t]||t)+"."+{"group-user":"96e79f90"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={"group-user":1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=new Promise((function(e,r){for(var a="css/"+({"group-user":"group-user"}[t]||t)+"."+{"group-user":"5ddf3706"}[t]+".css",s=c.p+a,n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var u=n[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===s)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||s,n=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=a,delete o[t],m.parentNode.removeChild(m),r(n)},m.href=s;var g=document.getElementsByTagName("head")[0];g.appendChild(m)})).then((function(){o[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,r){a=s[t]=[e,r]}));e.push(a[2]=n);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(m);var r=s[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,r[1](d)}s[t]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(r,a,function(e){return t[e]}.bind(null,a));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var m=l;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"164c":function(t,e,r){"use strict";r("cb89")},"1b98":function(t,e,r){},"2ab7":function(t,e,r){},"365c":function(t,e,r){"use strict";r.r(e),r.d(e,"reqCategoryList",(function(){return d})),r.d(e,"reqGetSearchInfo",(function(){return m})),r.d(e,"reqGoodsInfo",(function(){return g})),r.d(e,"reqAddUpdateCart",(function(){return p})),r.d(e,"reqCartList",(function(){return f})),r.d(e,"reqDeleteCart",(function(){return h})),r.d(e,"reqUpdateState",(function(){return v})),r.d(e,"reqGetCoder",(function(){return y})),r.d(e,"reqRegister",(function(){return b})),r.d(e,"reqLogin",(function(){return _})),r.d(e,"reqUserInfo",(function(){return I})),r.d(e,"reqLoginOut",(function(){return C})),r.d(e,"reqGetTrade",(function(){return L})),r.d(e,"reqGetTradeInfo",(function(){return w})),r.d(e,"reqSubmitOrder",(function(){return O})),r.d(e,"reqGetPayInfo",(function(){return E})),r.d(e,"reqPayStatus",(function(){return N})),r.d(e,"reqGetMyList",(function(){return T})),r.d(e,"reqGetBannerList",(function(){return k})),r.d(e,"reqGetFloorList",(function(){return x}));r("d9e2");var a=r("cee4"),o=r("323e"),s=r.n(o),n=(r("a5d8"),r("4360"));const i=a["a"].create({baseURL:"/api",timeout:5e3});i.interceptors.request.use(t=>(n["a"].state.detail.uuid_token&&(t.headers.userTempId=n["a"].state.detail.uuid_token),localStorage.getItem("TOKEN")&&(t.headers.token=localStorage.getItem("TOKEN"),t.headers.userTempId=""),s.a.start(),t)),i.interceptors.response.use(t=>{if(s.a.done(),200==t.data.code)return t.data;alert(t.data.message)},t=>Promise.reject(new Error("failed")));var c=i;const u=a["a"].create({baseURL:"/mock",timeout:5e3});u.interceptors.request.use(t=>(s.a.start(),t)),u.interceptors.response.use(t=>{if(s.a.done(),200==t.data.code)return t.data;console.log(t.data.message)},t=>Promise.reject(new Error("failed")));var l=u;const d=()=>c({url:"/product/getBaseCategoryList",method:"get"}),m=t=>c({url:"/list",method:"post",data:t}),g=t=>c({url:"/item/"+t,method:"get"}),p=(t,e)=>c({url:`/cart/addToCart/${t}/${e}`,method:"post"}),f=()=>c({url:"/cart/cartList",method:"get"}),h=t=>c({url:"/cart/deleteCart/"+t,method:"DELETE"}),v=(t,e)=>c({url:`/cart/checkCart/${t}/${e}`,method:"GET"}),y=t=>c({url:"/user/passport/sendCode/"+t,method:"get"}),b=t=>c({url:"/user/passport/register",data:t,method:"post"}),_=t=>c({url:"/user/passport/login",data:t,method:"post"}),I=()=>c({url:"/user/passport/auth/getUserInfo",method:"get"}),C=()=>c({url:"/user/passport/logout",method:"get"}),L=()=>c({url:"/user/userAddress/auth/findUserAddressList",method:"get"}),w=()=>c({url:"/order/auth/trade",method:"get"}),O=(t,e)=>c({url:"/order/auth/submitOrder?tradeNo="+t,data:e,method:"post"}),E=t=>c({url:"/payment/weixin/createNative/"+t,method:"get"}),N=t=>c({url:"/payment/weixin/queryPayStatus/"+t,method:"get"}),T=(t,e)=>c({url:`/order/auth/${t}/${e}`,method:"get"}),k=()=>l.get("/banner"),x=()=>l.get("/floor")},"3d12":function(t){t.exports=JSON.parse('[{"id":"001","name":"电器专属","keywords":["滚筒洗衣机","鲁班挨揍","1126很帅","1126很漂亮","滚筒洗衣机","电热水器"],"imgUrl":"/images/floor-1-1.png","navList":[{"url":"#","isActive":true,"text":"热门"},{"url":"#","isActive":false,"text":"大家电"},{"url":"#","isActive":false,"text":"生活电器"},{"url":"#","isActive":false,"text":"厨房电器"},{"url":"#","isActive":false,"text":"应季电器"},{"url":"#","isActive":false,"text":"空气/净水"},{"url":"#","isActive":false,"text":"高端电器"}],"carouselList":[{"id":"0011","imgUrl":"/images/floor-1-b01.png"},{"id":"0012","imgUrl":"/images/floor-1-b02.png"},{"id":"0013","imgUrl":"/images/floor-1-b03.png"}],"recommendList":["/images/floor-1-2.png","/images/floor-1-3.png","/images/floor-1-5.png","/images/floor-1-6.png"],"bigImg":"/images/floor-1-4.png"},{"id":"002","name":"热卖品牌","keywords":["补贴","电视","净化器","电饭煲","电磁炉","电热水器"],"imgUrl":"/images/floor-1-1.png","navList":[{"url":"#","isActive":true,"text":"热销"},{"url":"#","isActive":false,"text":"家电"},{"url":"#","isActive":false,"text":"电饭煲"},{"url":"#","isActive":false,"text":"冰箱"},{"url":"#","isActive":false,"text":"衣柜"},{"url":"#","isActive":false,"text":"空气水壶"},{"url":"#","isActive":false,"text":"大柜子"},{"url":"#","isActive":false,"text":"厨房电器"},{"url":"#","isActive":false,"text":"应季电器"}],"carouselList":[{"id":"0011","imgUrl":"/images/floor-1-b02.png"},{"id":"0012","imgUrl":"/images/floor-1-b01.png"},{"id":"0013","imgUrl":"/images/floor-1-b03.png"}],"recommendList":["/images/floor-1-6.png","/images/floor-1-5.png","/images/floor-1-3.png","/images/floor-1-2.png"],"bigImg":"/images/floor-1-4.png"}]')},4360:function(t,e,r){"use strict";var a=r("2b0e"),o=r("2f62"),s=r("365c");const n={categoryList:[],bannerList:[],floorList:[]},i={CATEGORYLIST(t,e){t.categoryList=e},GETBANNERLIST(t,e){t.bannerList=e},GETFLOORLIST(t,e){t.floorList=e}},c={async categoryList({commit:t}){let e=await Object(s["reqCategoryList"])();200==e.code&&t("CATEGORYLIST",e.data)},async getBannerList({commit:t}){let e=await Object(s["reqGetBannerList"])();200==e.code&&t("GETBANNERLIST",e.data)},async getFloorList({commit:t}){let e=await Object(s["reqGetFloorList"])();200==e.code&&t("GETFLOORLIST",e.data)}},u={};var l={state:n,mutations:i,actions:c,getters:u};const d={searchList:{}},m={GETSEARCHINFO(t,e){t.searchList=e}},g={async getSearchInfo({commit:t},e={}){let r=await Object(s["reqGetSearchInfo"])(e);200==r.code&&t("GETSEARCHINFO",r.data)}},p={goodsList(t){return t.searchList.goodsList||[]},trademarkList(t){return t.searchList.trademarkList||[]},attrsList(t){return t.searchList.attrsList||[]}};var f={state:d,mutations:m,actions:g,getters:p},h=(r("d9e2"),r("11c1"));const v=()=>{let t=localStorage.getItem("UUIDTOKEN");return t||(t=Object(h["v4"])(),localStorage.setItem("UUIDTOKEN",t)),t},y={goodInfo:{},uuid_token:v()},b={GETGOODSINFO(t,e){t.goodInfo=e}},_={async getGoodsInfo({commit:t},e){let r=await Object(s["reqGoodsInfo"])(e);200==r.code&&t("GETGOODSINFO",r.data)},async addProductionCart({commit:t},{skuId:e,skuNum:r}){let a=await Object(s["reqAddUpdateCart"])(e,r);return 200==a.code?a:Promise.reject(new Error("failed"))},async deleteProductionCart({commit:t},e){let r=await Object(s["reqDeleteCart"])(e);return 200==r.code?r:Promise.reject(new Error("failed"))}},I={categoryView(t){return t.goodInfo.categoryView||{}},skuInfo(t){return t.goodInfo.skuInfo||{}},spuSaleAttrList(t){return t.goodInfo.spuSaleAttrList||[]}};var C={state:y,mutations:b,actions:_,getters:I};const L={cartList:[]},w={GETCARTLIST(t,e){t.cartList=e}},O={async getCartList({commit:t}){let e=await Object(s["reqCartList"])();200==e.code&&t("GETCARTLIST",e.data)}},E={cartList(t){return t.cartList[0]||{}}};var N={state:L,mutations:w,actions:O,getters:E};const T={code:"",token:localStorage.getItem("TOKEN"),name:localStorage.getItem("name")},k={GETCODE(t,e){t.code=e},REQLOGIN(t,e){t.token=e},GETUSERINFO(t,e){t.name=e},LOGINOUT(t){t.token="",t.name="",localStorage.removeItem("TOKEN"),localStorage.removeItem("name")}},x={async getCode({commit:t},e){let r=await Object(s["reqGetCoder"])(e);return console.log(r),200==r.code?(t("GETCODE",r.data),r.message):Promise.reject(new Error("failed"))},async userRegister({commit:t},e){let r=await Object(s["reqRegister"])(e);return 200==r.code?r.message:Promise.reject(new Error("failed"))},async reqLogin({commit:t},e){let r=await Object(s["reqLogin"])(e);return 200==r.code?(t("REQLOGIN",r.data.token),localStorage.setItem("TOKEN",r.data.token),r.message):Promise.reject(new Error("failed"))},async getUserInfo({commit:t}){let e=await Object(s["reqUserInfo"])();return 200==e.code?(localStorage.setItem("name",e.data.name),t("GETUSERINFO",e.data.name),e):Promise.reject(new Error("failed"))},async loginOut({commit:t}){let e=await Object(s["reqLoginOut"])();if(200==e.code)return t("LOGINOUT"),e}},S={};var A={state:T,mutations:k,actions:x,getters:S};const j={tradeList:[],tradeListInfo:{}},q={GETTRADE(t,e){t.tradeList=e},GETTRADEINFO(t,e){t.tradeListInfo=e}},G={async getTrade({commit:t}){let e=await Object(s["reqGetTrade"])();if(200!=e.code)return Promise.reject(new Error("failed"));t("GETTRADE",e.data)},async getTradeInfo({commit:t}){let e=await Object(s["reqGetTradeInfo"])();if(200!=e.code)return Promise.reject(new Error("failed"));t("GETTRADEINFO",e.data)}},P={getDetailArrayList(t){return t.tradeListInfo.detailArrayList||[]}};var $={state:j,mutations:q,actions:G,getters:P};a["default"].use(o["a"]);e["a"]=new o["a"].Store({modules:{home:l,search:f,detail:C,shopcart:N,user:A,trade:$}})},5140:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);var a=r("2b0e"),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Header"),e("router-view"),1==t.$route.meta.show?e("Footer"):t._e()],1)},s=[],n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))])])},i=[],c={name:"HelloWorld",props:{msg:String}},u=c,l=(r("d3af"),r("2877")),d=Object(l["a"])(u,n,i,!1,null,"43f48a4c",null),m=d.exports,g=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"outer"},[e("header",{staticClass:"header"},[e("div",{staticClass:"top"},[e("div",{staticClass:"container"},[e("div",{staticClass:"loginList"},[e("p",[t._v("淘思城 ~ 欢迎您！")]),t.$store.state.user.token?e("p",[e("span",[t._v(t._s(t.$store.state.user.name))]),e("a",{staticClass:"register",on:{click:t.logOut}},[t._v("退出登录")])]):e("p",[e("span",[t._v("请")]),e("router-link",{attrs:{to:"/login"}},[t._v("登录")]),e("router-link",{staticClass:"register",attrs:{to:"/register"}},[t._v("免费注册")])],1)]),e("div",{staticClass:"typeList"},[e("router-link",{attrs:{to:"/center"}},[t._v("我的订单中心")]),e("router-link",{attrs:{to:"/shopcart"}},[t._v("我的购物车")]),e("router-link",{attrs:{to:"/home"}},[t._v("商城首页")])],1)])]),e("div",{staticClass:"bottom"},[e("h1",{staticClass:"logoArea"},[e("router-link",{staticClass:"logo",attrs:{to:"/home"}},[e("img",{attrs:{src:r("62cd"),alt:""}})])],1),e("div",{staticClass:"searchArea"},[e("form",{staticClass:"searchForm",attrs:{action:"###"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"input-error input-xxlarge",attrs:{type:"text",id:"autocomplete"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),e("button",{staticClass:"sui-btn btn-xlarge btn-danger",attrs:{type:"button"},on:{click:t.goSearch}},[t._v(" 搜索 ")])])])])])])])},p=[],f=(r("14d9"),{name:"Header",data(){return{keyword:""}},watch:{},methods:{goSearch(){let t=this,e={name:"search",params:{keyword:t.keyword||void 0}};t.$route.query.categoryname&&(e.query=t.$route.query),t.$router.push(e)},logOut(){let t=this;t.$store.dispatch("loginOut").then(e=>{console.log(e),t.$message.success(e.message),t.$router.push("/login")}).catch(t=>{console.log(t)})},goShopCart(){let t=this;t.$router.push("/shopcart")}},mounted(){let t=this;t.$bus.$on("clear",()=>{t.keyword=""})}}),h=f,v=(r("164c"),Object(l["a"])(h,g,p,!1,null,"636db4a8",null)),y=v.exports,b=r("b2c8"),_={name:"App",components:{HelloWorld:m,Header:y,Footer:b["a"]},data(){return{}},mounted(){let t=this;t.$store.dispatch("categoryList")},methods:{}},I=_,C=Object(l["a"])(I,o,s,!1,null,null,null),L=C.exports,w=r("4360"),O=r("5c96"),E=r.n(O),N=(r("0fae"),r("a5e4"));const T=()=>r.e("group-user").then(r.bind(null,"2a0a")),k=()=>r.e("group-user").then(r.bind(null,"421f")),x=()=>r.e("group-user").then(r.bind(null,"31e4")),S=()=>r.e("group-user").then(r.bind(null,"0511")),A=()=>r.e("group-user").then(r.bind(null,"1989")),j=()=>r.e("group-user").then(r.bind(null,"cf85")),q=()=>r.e("group-user").then(r.bind(null,"27ed")),G=()=>r.e("group-user").then(r.bind(null,"cada")),P=()=>r.e("group-user").then(r.bind(null,"362d")),$=()=>r.e("group-user").then(r.bind(null,"30c2")),U=()=>r.e("group-user").then(r.bind(null,"4a45")),R=()=>r.e("group-user").then(r.bind(null,"5333")),D=()=>r.e("group-user").then(r.bind(null,"e788"));var F=[{path:"/",redirect:"/home"},{path:"/home",component:T,meta:{show:!0}},{path:"/search/:keyword?",component:k,meta:{show:!0},name:"search"},{path:"/login",component:x,meta:{show:!1}},{path:"/register",component:S,meta:{show:!1}},{path:"/detail/:skuId",component:A},{path:"/addcartsuccess",name:"addcartsuccess",component:j,meta:{show:!0}},{path:"/shopcart",name:"shopcart",component:q,meta:{show:!0}},{path:"/trade",name:"trade",component:G,meta:{show:!1},beforeEnter:(t,e,r)=>{"/shopcart"==e.path?r():r(!1)}},{path:"/pay",name:"pay",component:P,meta:{show:!1},beforeEnter:(t,e,r)=>{"/trade"==e.path?r():r(!1)}},{path:"/paysuccess",name:"paysuccess",component:$,meta:{show:!1},beforeEnter:(t,e,r)=>{"/pay"==e.path?r():r(!1)}},{path:"/center",name:"center",component:U,meta:{show:!1},children:[{path:"/center",redirect:"/center/myorder"},{path:"myorder",component:R},{path:"ground",component:D}]}];a["default"].use(N["a"]);const B=N["a"].prototype.push,K=N["a"].prototype.replace;N["a"].prototype.push=function(t){return B.call(this,t).catch(t=>t)},N["a"].prototype.replace=function(t){return K.call(this,t).catch(t=>t)};let H=new N["a"]({routes:F,scrollBehavior(t,e,r){return{y:0}}});H.beforeEach((t,e,r)=>{let a=localStorage.getItem("TOKEN");if(a)r();else{let e=t.path;-1==e.indexOf("/trade")&&-1==e.indexOf("/pay")&&-1==e.indexOf("/center")||r("/login"),r()}});var M=H,z=r("96eb"),J=r.n(z),V=r("d52d"),Y=r("3d12");J.a.mock("/mock/banner",{code:200,data:V}),J.a.mock("/mock/floor",{code:200,data:Y});var Q=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"type-nav"},[e("div",{staticClass:"container"},[e("div",{on:{mouseleave:t.leaveIndex,mouseenter:t.enterShow}},[e("h2",{staticClass:"all"},[t._v("全部商品分类")]),e("transition",{attrs:{name:"sort"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"sort"},[e("div",{staticClass:"all-sort-list2",on:{click:t.goSearch}},t._l(t.categoryList,(function(r,a){return e("div",{key:r.categoryId,staticClass:"item",class:{activeCurrent:t.currentIndex==a}},[e("h3",{on:{mouseenter:function(e){return t.changeIndex(a)}}},[e("a",{attrs:{"data-categoryName":r.categoryName,"data-category1Id":r.categoryId}},[t._v(t._s(r.categoryName))])]),e("div",{staticClass:"item-list clearfix",style:{display:t.currentIndex==a?"block":"none"}},t._l(r.categoryChild,(function(r,a){return e("div",{key:r.categoryId,staticClass:"subitem",attrs:{"data-index":a}},[e("dl",{staticClass:"fore"},[e("dt",[e("a",{attrs:{"data-categoryName":r.categoryName,"data-category2Id":r.categoryId}},[t._v(t._s(r.categoryName))])]),e("dd",t._l(r.categoryChild,(function(r,a){return e("em",{key:r.categoryId,attrs:{"data-index":a}},[e("a",{attrs:{"data-categoryName":r.categoryName,"data-category3Id":r.categoryId}},[t._v(t._s(r.categoryName))])])})),0)])])})),0)])})),0)])])],1),t._m(0)])])])},W=[function(){var t=this,e=t._self._c;return e("nav",{staticClass:"nav"},[e("a",{staticStyle:{cursor:"default",opacity:".75"}},[t._v("淘思城，于2023-03-06正式开发完成，公测版上线啦！")])])}],X=r("2f62"),Z=r("0f32"),tt=r.n(Z),et={name:"TypeNav",data(){return{currentIndex:-1,show:!0}},mounted(){let t=this;"/home"!=t.$route.path&&(this.show=!1)},computed:{...Object(X["c"])({categoryList:t=>t.home.categoryList})},methods:{changeIndex:tt()((function(t){this.currentIndex=t}),50),leaveIndex(){let t=this;t.currentIndex=-1,"/home"!=t.$route.path&&(t.show=!1)},enterShow(){let t=this;"/home"!=t.$route.path&&(t.show=!0)},goSearch(t){let e=this,r=t.target.dataset,{categoryname:a,category1id:o,category2id:s,category3id:n}=r;if(a){let t={name:"search"},r={categoryname:a};o?r.category1Id=o:s?r.category2Id=s:n&&(r.category3Id=n),e.$route.params.keyword&&(t.params=e.$route.params),t.query=r,e.$router.push(t)}}}},rt=et,at=(r("fb3d"),Object(l["a"])(rt,Q,W,!1,null,"22504d42",null)),ot=at.exports,st=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination"},[e("button",{attrs:{disabled:1==t.pageNo},on:{click:function(e){return t.$emit("getPageNo",t.pageNo-1)}}},[t._v(" 上一页 ")]),t.startNumAndEndNum.start>1?e("button",{class:{active:1==t.pageNo},on:{click:function(e){return t.$emit("getPageNo",1)}}},[t._v(" 1 ")]):t._e(),t.startNumAndEndNum.start>2?e("button",[t._v(".....")]):t._e(),t._l(t.startNumAndEndNum.end,(function(r,a){return e("span",{key:a},[r>=t.startNumAndEndNum.start?e("button",{class:{active:t.pageNo==r},on:{click:function(e){return t.$emit("getPageNo",r)}}},[t._v(" "+t._s(r)+" ")]):t._e()])})),t.startNumAndEndNum.end<t.totalPage-1?e("button",[t._v("......")]):t._e(),t.startNumAndEndNum.end<t.totalPage?e("button",{class:{active:t.pageNo==t.totalPage},on:{click:function(e){return t.$emit("getPageNo",t.totalPage)}}},[t._v(" "+t._s(t.totalPage)+" ")]):t._e(),e("button",{attrs:{disabled:t.pageNo==t.totalPage},on:{click:function(e){return t.$emit("getPageNo",t.pageNo+1)}}},[t._v(" 下一页 ")]),e("button",{staticStyle:{"margin-left":"30px"}},[t._v("共 "+t._s(t.total)+" 条")])],2)},nt=[],it={name:"Pagination",props:["pageNo","pageSize","total","continues"],computed:{totalPage(){if(this.total||this.pageSize)return Math.ceil(this.total/this.pageSize)},startNumAndEndNum(){let t=0,e=0,{continues:r,totalPage:a,pageNo:o}=this;return r>a?(t=1,e=a):(t=o-parseInt(r/2),e=o+parseInt(r/2),t<1&&(t=1,e=r),e>a&&(e=a,t=a-r+1)),{start:t,end:e}}}},ct=it,ut=(r("c8ec"),Object(l["a"])(ct,st,nt,!1,null,"20d5e8a9",null)),lt=ut.exports,dt=r("caf9"),mt=r("ad54"),gt=r.n(mt),pt=r("365c");a["default"].config.productionTip=!1,a["default"].component(ot.name,ot),a["default"].component(lt.name,lt),a["default"].use(E.a),a["default"].use(dt["a"],{loading:gt.a}),new a["default"]({render:t=>t(L),beforeCreate(){a["default"].prototype.$bus=this,a["default"].prototype.$API=pt},router:M,store:w["a"]}).$mount("#app")},"62cd":function(t,e,r){t.exports=r.p+"img/logo.717e0385.png"},"82a7":function(t,e,r){t.exports=r.p+"img/wx_cz.aa4e8689.jpg"},ad54:function(t,e,r){t.exports=r.p+"img/lazy.20d5c352.gif"},b2c8:function(t,e,r){"use strict";var a=function(){var t=this;t._self._c;return t._m(0)},o=[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"footer"},[e("div",{staticClass:"footer-container"},[e("div",{staticClass:"footerList"},[e("div",{staticClass:"footerItem"},[e("h4",[t._v("购物指南")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("购物流程")]),e("li",[t._v("会员介绍")]),e("li",[t._v("生活旅行/团购")]),e("li",[t._v("常见问题")]),e("li",[t._v("购物指南")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("配送方式")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("上门自提")]),e("li",[t._v("211限时达")]),e("li",[t._v("配送服务查询")]),e("li",[t._v("配送费收取标准")]),e("li",[t._v("海外配送")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("支付方式")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("货到付款")]),e("li",[t._v("在线支付")]),e("li",[t._v("分期付款")]),e("li",[t._v("邮局汇款")]),e("li",[t._v("公司转账")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("售后服务")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("售后政策")]),e("li",[t._v("价格保护")]),e("li",[t._v("退款说明")]),e("li",[t._v("返修/退换货")]),e("li",[t._v("取消订单")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("特色服务")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("夺宝岛")]),e("li",[t._v("DIY装机")]),e("li",[t._v("延保服务")]),e("li",[t._v("淘思城VIP卡")]),e("li",[t._v("淘思城通信")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("帮助中心")]),e("h4",[t._v("扫码提供技术支持")]),e("img",{attrs:{src:r("82a7")}})])]),e("div",{staticClass:"copyright"},[e("ul",{staticClass:"helpLink"},[e("li",[t._v(" 联系我们 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 商家入驻 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 营销中心 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 营销中心 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 友情链接 "),e("span",{staticClass:"space"})]),e("li",[t._v("关于我们")])]),e("p",[t._v("地址：广州市从化区 广州南方学院 淘思城网络科技有限公司")]),e("p",[t._v("粤ICP备88888888888号")])])])])])}],s={},n=s,i=(r("f5fe"),r("2877")),c=Object(i["a"])(n,a,o,!1,null,"83c473cc",null);e["a"]=c.exports},c8ec:function(t,e,r){"use strict";r("2ab7")},cb89:function(t,e,r){},d3af:function(t,e,r){"use strict";r("5140")},d52d:function(t){t.exports=JSON.parse('[{"id":"101","imgUrl":"/images/banner1.jpg"},{"id":"201","imgUrl":"/images/banner2.jpg"},{"id":"301","imgUrl":"/images/banner3.jpg"},{"id":"401","imgUrl":"/images/banner4.jpg"}]')},f5fe:function(t,e,r){"use strict";r("fbd3")},fb3d:function(t,e,r){"use strict";r("1b98")},fbd3:function(t,e,r){}});