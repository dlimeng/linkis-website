"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[39263],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>o});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),u=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(m.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=u(n),o=r,g=s["".concat(m,".").concat(o)]||s[o]||k[o]||l;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function o(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},53555:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={title:"EC\u8d44\u6e90\u4fe1\u606f\u7ba1\u7406",sidebar_position:4},i=void 0,p={unversionedId:"api/http/linkis-cg-linkismanager-api/ec-resource-management-api",id:"version-1.2.0/api/http/linkis-cg-linkismanager-api/ec-resource-management-api",isDocsHomePage:!1,title:"EC\u8d44\u6e90\u4fe1\u606f\u7ba1\u7406",description:"* ECResourceInfoRestfulApi \u7c7b *",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2.0/api/http/linkis-cg-linkismanager-api/ec-resource-management-api.md",sourceDirName:"api/http/linkis-cg-linkismanager-api",slug:"/api/http/linkis-cg-linkismanager-api/ec-resource-management-api",permalink:"/zh-CN/docs/latest/api/http/linkis-cg-linkismanager-api/ec-resource-management-api",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2.0/api/http/linkis-cg-linkismanager-api/ec-resource-management-api.md",tags:[],version:"1.2.0",sidebarPosition:4,frontMatter:{title:"EC\u8d44\u6e90\u4fe1\u606f\u7ba1\u7406",sidebar_position:4},sidebar:"version-1.2.0/tutorialSidebar",previous:{title:"ECM\u8d44\u6e90\u7ba1\u7406",permalink:"/zh-CN/docs/latest/api/http/linkis-cg-linkismanager-api/ecm-resource-management-api"},next:{title:"\u4e0a\u4e0b\u6587\u5386\u53f2\u8bb0\u5f55\u670d\u52a1",permalink:"/zh-CN/docs/latest/api/http/linkis-ps-cs-api/context-history-service-api"}},m=[{value:"\u5220\u9664EC\u4fe1\u606f",id:"\u5220\u9664ec\u4fe1\u606f",children:[]},{value:"\u83b7\u53d6EC\u4fe1\u606f",id:"\u83b7\u53d6ec\u4fe1\u606f",children:[]},{value:"\u641c\u7d22\u5386\u53f2EC\u4fe1\u606f",id:"\u641c\u7d22\u5386\u53f2ec\u4fe1\u606f",children:[]}],u={toc:m};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," ECResourceInfoRestfulApi \u7c7b ")),(0,r.kt)("h2",{id:"\u5220\u9664ec\u4fe1\u606f"},"\u5220\u9664EC\u4fe1\u606f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/linkisManager/ecinfo/delete/{ticketid}}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":",(0,r.kt)("p",null,"\u5220\u9664EC\u4fe1\u606f")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ticketid"),(0,r.kt)("td",{parentName:"tr",align:null},"ticketid"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u72b6\u6001"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u7801"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"204"),(0,r.kt)("td",{parentName:"tr",align:null},"No Content"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u53c2\u6570"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u96c6"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {},\n    "message": "",\n    "method": "",\n    "status": 0\n}\n')),(0,r.kt)("h2",{id:"\u83b7\u53d6ec\u4fe1\u606f"},"\u83b7\u53d6EC\u4fe1\u606f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/linkisManager/ecinfo/get")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":",(0,r.kt)("p",null,"\u83b7\u53d6EC\u4fe1\u606f")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ticketid"),(0,r.kt)("td",{parentName:"tr",align:null},"ticketid"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u72b6\u6001"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u7801"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u53c2\u6570"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u96c6"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {},\n    "message": "",\n    "method": "",\n    "status": 0\n}\n')),(0,r.kt)("h2",{id:"\u641c\u7d22\u5386\u53f2ec\u4fe1\u606f"},"\u641c\u7d22\u5386\u53f2EC\u4fe1\u606f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/linkisManager/ecinfo/ecrHistoryList")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":",(0,r.kt)("p",null,"\u83b7\u53d6EC\u4fe1\u606f")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instance"),(0,r.kt)("td",{parentName:"tr",align:null},"instance"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"creator"),(0,r.kt)("td",{parentName:"tr",align:null},"creator"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"startDate"),(0,r.kt)("td",{parentName:"tr",align:null},"startDate"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endDate"),(0,r.kt)("td",{parentName:"tr",align:null},"endDate"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"engineType"),(0,r.kt)("td",{parentName:"tr",align:null},"engineType"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageNow"),(0,r.kt)("td",{parentName:"tr",align:null},"pageNow"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u72b6\u6001"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u7801"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u53c2\u6570"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u96c6"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    {\n        "message": "",\n        "status": 0,\n        "data": {\n        "engineList": [\n            {\n                "id": -94209540.07806732,\n                "requestResource": "consectetur dolor eiusmod ipsum",\n                "releasedResource": "est in id Ut",\n                "usedTimes": -51038117.02855969,\n                "ticketId": "adipisicing in nostrud do",\n                "ecmInstance": "id magna Lorem eiusmod",\n                "engineType": "dolor",\n                "usedTime": -38764910.74278392,\n                "logDirSuffix": "sunt eiusmod aute et",\n                "releaseTime": -33417043.232267484,\n                "usedResource": "in amet veniam velit",\n                "requestTimes": -15643696.319572791,\n                "labelValue": "veniam incididunt magna",\n                "releaseTimes": 96384811.3484546,\n                "createTime": 38434279.49900183,\n                "serviceInstance": "consequat aliqua in enim",\n                "createUser": "Lorem Ut occaecat amet"\n            },\n            {\n                "labelValue": "adipisicing deserunt do",\n                "usedTimes": 49828407.223826766,\n                "usedResource": "mollit laboris cupidatat enim",\n                "releaseTimes": -73400915.22672182,\n                "releasedResource": "est qui id ipsum mollit",\n                "requestResource": "deserunt reprehenderit ut",\n                "serviceInstance": "do laborum",\n                "requestTimes": -33074164.700212136,\n                "ecmInstance": "dolore",\n                "logDirSuffix": "ea incididunt",\n                "createUser": "Ut exercitation officia dolore ipsum",\n                "usedTime": 25412456.522457644,\n                "createTime": -93227549.70578489,\n                "id": -84032815.0589972,\n                "ticketId": "eu in mollit do",\n                "engineType": "non Ut eu",\n                "releaseTime": 34923394.9602966\n            },\n            {\n                "releaseTime": -91057731.93164417,\n                "usedTime": 99226623.97199354,\n                "id": 59680041.603043556,\n                "requestResource": "officia Ut enim nulla",\n                "usedTimes": -14680356.219609797,\n                "logDirSuffix": "proident amet reprehenderit tempor",\n                "ticketId": "minim esse",\n                "releaseTimes": 37270921.94107443,\n                "serviceInstance": "enim adipisicing cupidatat",\n                "createUser": "culpa",\n                "requestTimes": -33504917.797325186,\n                "releasedResource": "et dolore quis",\n                "ecmInstance": "elit dolor adipisicing id",\n                "createTime": -38827280.78902944,\n                "engineType": "ullamco in eiusmod reprehenderit aute",\n                "labelValue": "dolore qui labore nulla laboris",\n                "usedResource": "irure sint nostrud Excepteur sunt"\n            },\n            {\n                "requestResource": "deserunt incididunt enim",\n                "releaseTimes": -16708903.732444778,\n                "id": 80588551.12419662,\n                "ecmInstance": "et veniam",\n                "releaseTime": -50240956.63233949,\n                "usedTimes": -5348294.728038415,\n                "labelValue": "incididunt tempor reprehenderit quis eu",\n                "createUser": "in in",\n                "serviceInstance": "minim sit",\n                "ticketId": "in dolore",\n                "usedTime": -30138563.761232898,\n                "logDirSuffix": "quis laborum ea",\n                "createTime": 65920455.93896958,\n                "requestTimes": 38810152.0160971,\n                "engineType": "est in Ut proident",\n                "usedResource": "nulla laboris Ut",\n                "releasedResource": "cupidatat irure"\n            },\n            {\n                "usedResource": "Lorem adipisicing dolor",\n                "createTime": -11906770.11266476,\n                "labelValue": "et id magna",\n                "releaseTimes": 32546901.20497243,\n                "id": -90442428.4679744,\n                "logDirSuffix": "aute ut eu commodo",\n                "ticketId": "cillum sint non deserunt",\n                "requestResource": "non velit sunt consequat culpa",\n                "requestTimes": -75282512.0022062,\n                "usedTime": 6378131.554130778,\n                "releasedResource": "Duis in",\n                "serviceInstance": "dolore ut officia",\n                "usedTimes": 70810503.51038182,\n                "createUser": "voluptate sed",\n                "ecmInstance": "laboris do sit dolore ipsum",\n                "engineType": "id",\n                "releaseTime": 37544575.30154848\n            }\n        ]\n    }\n    }\n')))}d.isMDXComponent=!0}}]);