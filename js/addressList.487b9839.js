(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["addressList"],{"189e":function(e,t,c){"use strict";c.r(t);c("b0c0");var s=c("7a23"),a=Object(s["I"])("data-v-439aec43");Object(s["t"])("data-v-439aec43");var n={class:"address"},r={class:"address__list"},d=Object(s["h"])("h4",{class:"address__list__title"},"我的收货地址",-1),i={class:"address__item__contact"},b={class:"username"},u={class:"phone"},o={class:"address__item__detail"},j=Object(s["h"])("i",{class:"address__item__edit__btn iconfont icon-back"},null,-1);Object(s["r"])();var O=a((function(e,t,c,O,l,_){var h=Object(s["x"])("AddressHeader"),p=Object(s["x"])("router-link"),v=Object(s["x"])("Toast");return Object(s["q"])(),Object(s["d"])(s["a"],null,[Object(s["h"])("div",n,[Object(s["h"])(h,{status:"manage",onActionBtnClick:e.handleActionBtnClick},null,8,["onActionBtnClick"]),Object(s["h"])("div",r,[d,(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(e.addressList,(function(e){return Object(s["q"])(),Object(s["d"])("div",{class:"address__item",key:e._id},[Object(s["h"])("div",i,[Object(s["h"])("div",b,Object(s["z"])(e.name),1),Object(s["h"])("div",u,Object(s["z"])(e.phone),1)]),Object(s["h"])("p",o,Object(s["z"])(e.city)+" "+Object(s["z"])(e.department)+" "+Object(s["z"])(e.houseNumber),1),Object(s["h"])(p,{to:{name:"AddressEdit",query:{eventType:"edit",addressId:e._id}}},{default:a((function(){return[j]})),_:2},1032,["to"])])})),128))])]),Object(s["h"])(v)],64)})),l=c("5530"),_=c("1da1"),h=(c("96cf"),c("b775")),p=c("f81c"),v=c("0eb4"),f=c("6c02"),m=function(){var e=Object(s["u"])({addressList:[]}),t=function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(h["a"])("/api/user/address");case 3:c=t.sent,c&&0===c.errno&&c.data?e.addressList=c.data:Object(v["b"])("获取用户收货地址列表失败！".concat(c.message)),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),Object(v["b"])("获取用户收货地址列表出错！".concat(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t();var c=Object(s["A"])(e),a=c.addressList,n=Object(f["d"])(),r=function(e){"new"===e&&n.push({name:"AddressEdit",query:{eventType:e}})};return{addressList:a,handleActionBtnClick:r}},k={name:"AddressList",components:{AddressHeader:p["a"],Toast:v["a"]},setup:function(){return Object(l["a"])({},m())}};c("8975");k.render=O,k.__scopeId="data-v-439aec43";t["default"]=k},8975:function(e,t,c){"use strict";c("9271")},9271:function(e,t,c){}}]);
//# sourceMappingURL=addressList.487b9839.js.map