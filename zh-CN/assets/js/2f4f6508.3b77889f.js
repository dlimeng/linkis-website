"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[9539],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var m=a.createContext({}),k=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},u=function(t){var e=k(t.components);return a.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),N=k(n),g=l,o=N["".concat(m,".").concat(g)]||N[g]||d[g]||r;return n?a.createElement(o,p(p({ref:e},u),{},{components:n})):a.createElement(o,p({ref:e},u))}));function g(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,p=new Array(r);p[0]=N;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:l,p[1]=i;for(var k=2;k<r;k++)p[k]=n[k];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},33538:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>k});var a=n(87462),l=(n(67294),n(3905));const r={title:"\u5b9e\u4f8b\u7ba1\u7406",sidebar_position:6},p=void 0,i={unversionedId:"api/http/linkis-ps-publicservice-api/instance-management-api",id:"version-1.1.3/api/http/linkis-ps-publicservice-api/instance-management-api",title:"\u5b9e\u4f8b\u7ba1\u7406",description:"InstanceRestful \u7c7b",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.3/api/http/linkis-ps-publicservice-api/instance-management-api.md",sourceDirName:"api/http/linkis-ps-publicservice-api",slug:"/api/http/linkis-ps-publicservice-api/instance-management-api",permalink:"/zh-CN/docs/1.1.3/api/http/linkis-ps-publicservice-api/instance-management-api",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.3/api/http/linkis-ps-publicservice-api/instance-management-api.md",tags:[],version:"1.1.3",sidebarPosition:6,frontMatter:{title:"\u5b9e\u4f8b\u7ba1\u7406",sidebar_position:6},sidebar:"version-1.1.3/tutorialSidebar",previous:{title:"Linkis\u9519\u8bef\u4ee3\u7801",permalink:"/zh-CN/docs/1.1.3/api/http/linkis-ps-publicservice-api/link-error-code"},next:{title:"\u7ba1\u7406\u53f0\u9996\u9875API",permalink:"/zh-CN/docs/1.1.3/api/http/linkis-ps-publicservice-api/homepage-function-interface-api"}},m={},k=[{value:"\u5fae\u670d\u52a1\u5b9e\u4f8b\u5217\u8868",id:"\u5fae\u670d\u52a1\u5b9e\u4f8b\u5217\u8868",level:2},{value:"\u83b7\u53d6eurekaURL",id:"\u83b7\u53d6eurekaurl",level:2},{value:"\u7f16\u8f91\u5fae\u670d\u52a1\u5b9e\u4f8b",id:"\u7f16\u8f91\u5fae\u670d\u52a1\u5b9e\u4f8b",level:2},{value:"\u53ef\u4ee5\u4fee\u6539\u7684label \u7c7b\u578b",id:"\u53ef\u4ee5\u4fee\u6539\u7684label-\u7c7b\u578b",level:2}],u={toc:k};function d(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," InstanceRestful \u7c7b ")),(0,l.kt)("h2",{id:"\u5fae\u670d\u52a1\u5b9e\u4f8b\u5217\u8868"},"\u5fae\u670d\u52a1\u5b9e\u4f8b\u5217\u8868"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/microservice/allInstance")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,l.kt)("inlineCode",{parentName:"p"},"GET")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"*/*")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":",(0,l.kt)("p",null,"\u83b7\u53d6\u5fae\u670d\u52a1\u7ba1\u7406\u6a21\u5757\u5b9e\u4f8b\u5217\u8868\u53ef\u83b7\u53d6\u5355\u4e2a\u6216\u591a\u4e2a\u9ed8\u8ba4\u5168\u90e8")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,l.kt)("p",null,"\u6682\u65e0"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u72b6\u6001"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"Message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u96c6"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "instances": [{\n            "id": ,\n            "updateTime": ,\n            "createTime": ,\n            "applicationName": ",\n            "instance": "",\n            "labels": [{\n                "stringValue": "",\n                "labelKey": "",\n                "feature": "",\n                "id": 5,\n                "labelValueSize": 0,\n                "modifiable": true,\n                "updateTime": ,\n                "createTime": ,\n                "featureKey": "",\n                "empty": \n            }]\n        }]\n    }\n}\n')),(0,l.kt)("h2",{id:"\u83b7\u53d6eurekaurl"},"\u83b7\u53d6eurekaURL"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/microservice/eurekaURL")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,l.kt)("inlineCode",{parentName:"p"},"GET")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"*/*")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":",(0,l.kt)("p",null,"\u8fd4\u56deeurekaURL")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,l.kt)("p",null,"\u6682\u65e0"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u72b6\u6001"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"Message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u96c6"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "url": ""\n    }\n}\n')),(0,l.kt)("h2",{id:"\u7f16\u8f91\u5fae\u670d\u52a1\u5b9e\u4f8b"},"\u7f16\u8f91\u5fae\u670d\u52a1\u5b9e\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/microservice/instanceLabel")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,l.kt)("inlineCode",{parentName:"p"},"PUT")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"*/*")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":",(0,l.kt)("p",null,"\u7f16\u8f91\u6216\u4fee\u6539\u4e0b\u5fae\u670d\u52a1\u7ba1\u7406\u4e2d\u7684\u5b9e\u4f8b")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u793a\u4f8b"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'\uff5b\n    applicationName: "linkis-ps-cs"\n    instance: "bdpdws110004:9108"\n    labels: [{\n        labelKey: "route",\n        stringValue: "cs_2_dev"\n}]\uff5d\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"applicationName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f15\u64ce\u6807\u7b7e"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"instance"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f15\u64ce\u5b9e\u4f8b\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"labelKey"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u5185\u5bb9\u91cc\u9762\u7684\u6807\u7b7e\uff0c\u5c5e\u4e8elabels\u96c6\u5408 \u5185 map\u91cc\u7684key"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"labels"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f15\u64ce\u5b9e\u4f8b\u66f4\u65b0\u53c2\u6570\u5185\u5bb9\uff0c\u96c6\u5408\u5b58\u653e\u7684\u662fmap\u7c7b\u578b\u7684"),(0,l.kt)("td",{parentName:"tr",align:null},"List"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"List"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stringValue"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u5185\u5bb9\u91cc\u9762\u7684\u6807\u7b7e\u5bf9\u4e8e\u7684\u503c\uff0c\u5c5e\u4e8elabels\u96c6\u5408 \u5185 map\u91cc\u7684value"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u72b6\u6001"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"Message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"201"),(0,l.kt)("td",{parentName:"tr",align:null},"Created"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u96c6"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n    "status": 0,\n    "message": "success",\n    "data": {\n        "labels": [{\n            "stringValue": "",\n            "labelKey": "",\n            "feature": null,\n            "modifiable": ,\n            "featureKey": "",\n            "empty": \n        }]\n    }\n}\n')),(0,l.kt)("h2",{id:"\u53ef\u4ee5\u4fee\u6539\u7684label-\u7c7b\u578b"},"\u53ef\u4ee5\u4fee\u6539\u7684label \u7c7b\u578b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/microservice/modifiableLabelKey")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,l.kt)("inlineCode",{parentName:"p"},"GET")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"*/*")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":",(0,l.kt)("p",null,"\u83b7\u53d6\u53ef\u4ee5\u4fee\u6539\u7684label\u7c7b\u578b\u5217\u8868\uff0c\u5217\u8868\u6570\u636e\u5982\u2018userCreator\uff0croute\u2019")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,l.kt)("p",null,"\u6682\u65e0"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u72b6\u6001"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"Message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u96c6"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "keyList": []\n    }\n}\n')))}d.isMDXComponent=!0}}]);