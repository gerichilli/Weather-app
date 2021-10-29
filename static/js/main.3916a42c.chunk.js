(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{26:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(21),s=a.n(r),i=(a(26),a(6)),o=a.n(i),d=a(9),l=a(4),j=a(10),u=a.n(j),p=a(5),h=a(1);var b=function(e){var t=e.onChangeCity,a=Object(n.useState)(null),c=Object(l.a)(a,2),r=c[0],s=c[1];return Object(h.jsxs)("form",{className:"search",onSubmit:function(e){e.preventDefault(),t(r)},children:[Object(h.jsx)("input",{type:"text",placeholder:"Search",onChange:function(e){return s(e.target.value)}}),Object(h.jsx)(p.c,{className:"icon"})]})},m={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,a=window.navigator.userLanguage||window.navigator.language,n=new Intl.DateTimeFormat(a,t).format(e);return n};var O=function(e){var t=e.onChangeCity,a=Object(n.useState)(new Date),c=Object(l.a)(a,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){var e=setInterval((function(){s(new Date)}),6e4);return function(){return clearInterval(e)}}),[r]),Object(h.jsxs)("header",{children:[Object(h.jsxs)("div",{className:"header-left",children:[Object(h.jsx)("div",{className:"logo",children:"Weather Forecast"}),Object(h.jsx)("div",{className:"date",children:v(r)})]}),Object(h.jsx)(b,{onChangeCity:t})]})};a(47);var x=function(){return Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)("div",{className:"spinner",children:Object(h.jsx)("span",{})})})},f=a(11),g=function(e){return(e-272.15).toFixed(1)};var y=function(e){var t=e.time,a=e.icon,n=e.wind,c=e.humidity,r=e.temp;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsxs)("div",{className:"card-title",children:[Object(h.jsx)(p.b,{})," ",t]}),Object(h.jsx)("div",{className:"card-weather-icon",children:Object(h.jsx)("img",{className:"icon",src:"http://openweathermap.org/img/wn/".concat(a,"@2x.png"),alt:"rain"})}),Object(h.jsxs)("div",{className:"card-info",children:[Object(h.jsxs)("div",{className:"wind",children:[Object(h.jsx)(f.b,{className:"icon"}),Object(h.jsxs)("span",{children:[n.toFixed(2)," m/s"]})]}),Object(h.jsxs)("div",{className:"humidity",children:[Object(h.jsx)(f.a,{className:"icon"}),Object(h.jsxs)("span",{children:[c,"%"]})]})]}),Object(h.jsxs)("div",{className:"card-degree",children:[g(r),"\xb0"]})]})};var w=function(e){var t=e.list;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"card-list",children:function(){var e,a=!0;return t.map((function(t){var n=t.dt_txt.split(" "),r=Object(l.a)(n,2),s=r[0],i=r[1];return s===e?a=!1:(a=!0,e=s),Object(h.jsxs)(c.a.Fragment,{children:[a?Object(h.jsxs)("h3",{className:"card-date",children:[Object(h.jsx)(p.a,{}),v(new Date(s),{weekday:"long"}),", ",s]}):null,Object(h.jsx)(y,{time:i,icon:t.weather[0].icon,wind:t.wind.speed,humidity:t.main.humidity,temp:t.main.temp})]},t.dt)}))}()})})},N="http://api.ipstack.com/check?access_key=e4b9442b71904780687608c088df7aa3",k="&appid=a0ded0e78843e07315d41e6394b36453",C=function(e,t){switch(t.type){case"loading":return{response:void 0,isLoading:!0,error:void 0};case"success":return{response:t.payload,isLoading:!1,error:void 0};case"error":return{response:void 0,isLoading:!1,error:t.payload};default:return{response:void 0,isLoading:!1,error:"Invalid action"}}},L=function(e,t){var a={response:void 0,isLoading:!1,error:void 0},c=Object(n.useReducer)(C,a),r=Object(l.a)(c,2),s=r[0],i=r[1];return Object(n.useEffect)((function(){function a(){return(a=Object(d.a)(o.a.mark((function a(){var n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u()(e,t);case 3:n=a.sent,i({type:"success",payload:n}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),i({type:"error",payload:"Sorry we couldn't find your city. Please confirm and try again."});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))).apply(this,arguments)}i({type:"loading"}),console.log(e),function(){a.apply(this,arguments)}()}),[e,t]),s};var S=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(l.a)(r,2),i=s[0],j=s[1];Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u()(N);case 3:t=e.sent,c(t.data.city),j(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var p=L("".concat("http://api.openweathermap.org/data/2.5/forecast?q=").concat(a).concat(k)),b=p.response,m=p.isLoading,v=p.error,f=L("".concat("http://api.openweathermap.org/data/2.5/weather?q=").concat(a).concat(k)),y=f.response,C=(f.isLoading,f.error);return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(O,{onChangeCity:c}),C&&i?null:y?Object(h.jsxs)("div",{className:"banner",children:[Object(h.jsx)("h2",{children:a}),Object(h.jsxs)("span",{className:"degree",children:[g(y.data.main.temp),"\xb0"]})]}):void 0,v&&i?Object(h.jsx)("p",{className:"error",children:v}):m&&!b&&i?Object(h.jsx)(x,{}):b?(console.log(b.data),Object(h.jsx)("main",{children:Object(h.jsx)(w,{list:b.data.list})})):void 0]})};s.a.render(Object(h.jsx)(S,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.3916a42c.chunk.js.map