(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"0360":function(e,t,n){},"165c":function(e,t,n){"use strict";n("ce86")},"1f6c":function(e,t,n){"use strict";n("45ab")},3921:function(e,t,n){"use strict";var c=n("7a23"),a=Object(c["M"])("data-v-0928aac1");Object(c["u"])("data-v-0928aac1");var s={class:"search__input__wrapper"},o=Object(c["h"])("i",{class:"iconfont icon-search"},null,-1);Object(c["s"])();var r=a((function(e,t,n,a,r,i){return Object(c["r"])(),Object(c["d"])("div",s,[o,Object(c["h"])("input",{type:"search",autocomplete:"off",class:"search__input",placeholder:n.placeholder,value:n.searchText.value,onFocus:t[1]||(t[1]=function(e){return a.onStatusChange("focus",e)}),onInput:t[2]||(t[2]=function(e){return a.onStatusChange("input",e)}),onChange:t[3]||(t[3]=function(e){return a.onStatusChange("change",e)}),onBlur:t[4]||(t[4]=function(e){return a.onStatusChange("blur",e)}),onKeypress:t[5]||(t[5]=Object(c["K"])((function(e){return a.onStatusChange("change",e)}),["enter"]))},null,40,["placeholder","value"])])})),i={name:"SearchInput",props:{placeholder:{default:function(){return Object(c["m"])("placeholder","")}},searchText:{default:function(){return Object(c["m"])("searchText",Object(c["w"])(""))}}},setup:function(e,t){var n=t.emit,a=Object(c["w"])("none"),s=function(t,c){var s=c.target||c.srcElement;s&&(e.searchText.value=s.value),a.value=t||"none",n("onStatusChange",a.value)};return{status:a,onStatusChange:s}}};n("6442");i.render=r,i.__scopeId="data-v-0928aac1";t["a"]=i},"3c1d":function(e,t,n){"use strict";n("b0c0");var c=n("7a23"),a=Object(c["M"])("data-v-43166aaf");Object(c["u"])("data-v-43166aaf");var s={class:"docker"},o={class:"docker__title"};Object(c["s"])();var r=a((function(e,t,n,r,i,u){var h=Object(c["y"])("router-link");return Object(c["r"])(),Object(c["d"])("div",s,[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["x"])(r.list,(function(e){return Object(c["r"])(),Object(c["d"])("div",{class:["docker__item",{"docker__item--active":r.routeName==e.to.name}],key:e.title},[Object(c["h"])(h,{to:e.to},{default:a((function(){return[Object(c["h"])("div",{class:["iconfont",e.iconClass]},null,2),Object(c["h"])("div",o,Object(c["C"])(e.title),1)]})),_:2},1032,["to"])],2)})),128))])})),i=n("6c02"),u={name:"Docker",setup:function(){var e=Object(i["c"])(),t=e.name,n=[{title:"主页",iconClass:"icon-home",to:{name:"Home"}},{title:"购物车",iconClass:"icon-bag",to:{name:"CartList"}},{title:"订单",iconClass:"icon-order",to:{name:"OrderList"}},{title:"我的",iconClass:"icon-my",to:{name:"User"}}];return{routeName:t,list:n}}};n("165c");u.render=r,u.__scopeId="data-v-43166aaf";t["a"]=u},"45ab":function(e,t,n){},"4f8d":function(e,t,n){"use strict";n("5b56")},"5b56":function(e,t,n){},6442:function(e,t,n){"use strict";n("cc3b")},6888:function(e,t,n){},"71d8":function(e,t,n){},"794b":function(e,t,n){"use strict";var c=n("7a23");function a(e,t,n,a,s,o){var r=Object(c["y"])("SearchInput");return Object(c["r"])(),Object(c["d"])(c["a"],null,[Object(c["h"])(r,{onOnStatusChange:a.handleStatusChange},null,8,["onOnStatusChange"]),a.component?(Object(c["r"])(),Object(c["d"])(Object(c["A"])(a.component),{key:0})):Object(c["e"])("",!0)],64)}n("d3b7"),n("3ca3"),n("ddb0");var s=n("3921"),o=function(){var e=Object(c["w"])(""),t=function(t){"focus"===t?e.value="SearchAdvice":"change"===t?e.value="SearchResult":"none"===t&&(e.value="")};return{component:e,handleStatusChange:t}},r={name:"Search",props:{placeholder:{default:""},searchText:{default:function(){return Object(c["w"])("")}}},components:{SearchInput:s["a"],SearchAdvice:Object(c["i"])((function(){return n.e("chunk-21a49199").then(n.bind(null,"c70c"))})),SearchResult:Object(c["i"])((function(){return n.e("chunk-4ffe69e4").then(n.bind(null,"99b5"))}))},setup:function(e){Object(c["t"])("searchText",e.searchText),Object(c["t"])("placeholder",e.placeholder);var t=o(),n=t.component,a=t.handleStatusChange;return Object(c["t"])("handleStatusChange",a),{component:n,handleStatusChange:a}}};r.render=a;t["a"]=r},b3d7:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=Object(c["M"])("data-v-5e931977");Object(c["u"])("data-v-5e931977");var s={class:"wrapper"},o=Object(c["h"])("div",{class:"gap"},null,-1);Object(c["s"])();var r=a((function(e,t,n,a,r,i){var u=Object(c["y"])("HomeHeader"),h=Object(c["y"])("HomeBanner"),b=Object(c["y"])("HomeIcons"),d=Object(c["y"])("HomeNearby"),l=Object(c["y"])("Docker");return Object(c["r"])(),Object(c["d"])(c["a"],null,[Object(c["h"])("div",s,[Object(c["h"])(u),Object(c["h"])(h),Object(c["h"])(b),o,Object(c["h"])(d)]),Object(c["h"])(l)],64)})),i=Object(c["M"])("data-v-499051f2");Object(c["u"])("data-v-499051f2");var u=Object(c["h"])("div",{class:"location"},[Object(c["h"])("i",{class:"iconfont icon-location"}),Object(c["g"])(" 重庆市渝中区解放碑步行街100号 "),Object(c["h"])("i",{class:"iconfont icon-bell"})],-1);Object(c["s"])();var h=i((function(e,t,n,a,s,o){var r=Object(c["y"])("Search");return Object(c["r"])(),Object(c["d"])(c["a"],null,[u,Object(c["h"])(r,{placeholder:"双十一优惠商品"})],64)})),b=n("794b"),d={name:"HomeHeader",components:{Search:b["a"]}};n("e106");d.render=h,d.__scopeId="data-v-499051f2";var l=d,O=Object(c["M"])("data-v-b74e64e0");Object(c["u"])("data-v-b74e64e0");var j={class:"banner"},p=Object(c["h"])("img",{class:"banner__img",src:"https://shihongxins.github.io/data-mock/shop/imgs/banner.jpg",alt:"banner__img"},null,-1);Object(c["s"])();var f=O((function(e,t,n,a,s,o){return Object(c["r"])(),Object(c["d"])("div",j,[p])})),m={name:"HomeBanner"};n("dedd");m.render=f,m.__scopeId="data-v-b74e64e0";var v=m,g=Object(c["M"])("data-v-956d2950");Object(c["u"])("data-v-956d2950");var _={class:"icons"},k={class:"icons__item__desc"};Object(c["s"])();var C=g((function(e,t,n,a,s,o){return Object(c["r"])(),Object(c["d"])("div",_,[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["x"])(a.icons,(function(e){return Object(c["r"])(),Object(c["d"])("div",{class:"icons__item",key:e.desc},[Object(c["h"])("img",{class:"icons__item__img",src:e.url,alt:e.desc},null,8,["src","alt"]),Object(c["h"])("p",k,Object(c["C"])(e.desc),1)])})),128))])})),S={name:"HomeIcons",setup:function(){var e=[{url:"https://shihongxins.github.io/data-mock/shop/imgs/icons/便利超市.png",desc:"便利超市"},{url:"https://shihongxins.github.io/data-mock/shop/imgs/icons/菜市场.png",desc:"菜市场"},{url:"https://shihongxins.github.io/data-mock/shop/imgs/icons/水果店.png",desc:"水果店"},{url:"https://shihongxins.github.io/data-mock/shop/imgs/icons/鲜花绿植.png",desc:"鲜花绿植"},{url:"https://shihongxins.github.io/data-mock/shop/imgs/icons/医药健康.png",desc:"医药健康"},{url:"https://shihongxins.github.io/data-mock/shop/imgs/icons/家居时尚.png",desc:"家居时尚"},{url:"https://shihongxins.github.io/data-mock/shop/imgs/icons/烘焙蛋糕.png",desc:"烘焙蛋糕"},{url:"https://shihongxins.github.io/data-mock/shop/imgs/icons/签到.png",desc:"签到"},{url:"https://shihongxins.github.io/data-mock/shop/imgs/icons/大牌免运.png",desc:"大牌免运"},{url:"https://shihongxins.github.io/data-mock/shop/imgs/icons/红包套餐.png",desc:"红包套餐"}];return{icons:e}}};n("4f8d");S.render=C,S.__scopeId="data-v-956d2950";var x=S,y=Object(c["M"])("data-v-8ac727e0");Object(c["u"])("data-v-8ac727e0");var I={class:"nearby"},H=Object(c["h"])("h3",{class:"nearby__title"},"附近店铺",-1);Object(c["s"])();var w=y((function(e,t,n,a,s,o){var r=Object(c["y"])("ShopInfo"),i=Object(c["y"])("router-link");return Object(c["r"])(),Object(c["d"])("div",I,[H,(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["x"])(a.shopList,(function(e){return Object(c["r"])(),Object(c["d"])(i,{key:e._id,to:{name:"Shop",params:{shopId:e._id}}},{default:y((function(){return[Object(c["h"])(r,{item:e},null,8,["item"])]})),_:2},1032,["to"])})),128))])})),M=n("1da1"),L=(n("96cf"),n("b775")),T=n("d7d0"),N=function(){var e=Object(c["w"])(0),t=function(){var t=Object(M["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(L["a"])("/api/user/hot_shop");case 2:n=t.sent,n&&0===n.errno&&n.data.length&&(e.value=n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return t(),{shopList:e}},B={name:"HomeNearby",components:{ShopInfo:T["a"]},setup:function(){var e=N(),t=e.shopList;return{shopList:t}}};n("df12");B.render=w,B.__scopeId="data-v-8ac727e0";var R=B,A=n("3c1d"),D={name:"Home",components:{HomeHeader:l,HomeBanner:v,HomeIcons:x,HomeNearby:R,Docker:A["a"]}};n("f7d1");D.render=r,D.__scopeId="data-v-5e931977";t["default"]=D},c9e1:function(e,t,n){},cc3b:function(e,t,n){},ce86:function(e,t,n){},d7d0:function(e,t,n){"use strict";n("b0c0");var c=n("7a23"),a=Object(c["M"])("data-v-c1619086");Object(c["u"])("data-v-c1619086");var s={class:"shopinfo"},o={class:"shopinfo__content"},r={class:"shopinfo__content__title"},i={class:"shopinfo__content__tags"},u={class:"shopinfo__content__tag"},h={class:"shopinfo__content__tag"},b={class:"shopinfo__content__tag"},d={class:"shopinfo__content__highlight"};Object(c["s"])();var l=a((function(e,t,n,a,l,O){return Object(c["r"])(),Object(c["d"])("div",s,[Object(c["h"])("img",{class:"shopinfo__img",src:n.item.imgUrl,alt:n.item.name},null,8,["src","alt"]),Object(c["h"])("div",o,[Object(c["h"])("div",r,Object(c["C"])(n.item.name),1),Object(c["h"])("div",i,[Object(c["h"])("span",u,"月售: "+Object(c["C"])(n.item.sales)+"+",1),Object(c["h"])("span",h,"起送: ￥"+Object(c["C"])(n.item.expressLimit),1),Object(c["h"])("span",b,"运费: ￥"+Object(c["C"])(n.item.expressPrice),1)]),Object(c["h"])("p",d,Object(c["C"])(n.item.slogan),1)])])})),O={name:"ShopInfo",props:["item"]};n("1f6c");O.render=l,O.__scopeId="data-v-c1619086";t["a"]=O},dedd:function(e,t,n){"use strict";n("71d8")},df12:function(e,t,n){"use strict";n("6888")},e106:function(e,t,n){"use strict";n("0360")},f7d1:function(e,t,n){"use strict";n("c9e1")}}]);
//# sourceMappingURL=home.e8d0c27e.js.map