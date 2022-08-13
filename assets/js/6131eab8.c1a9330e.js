"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[8398],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),o=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},d=function(t){var e=o(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=o(n),k=r,x=m["".concat(s,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(x,p(p({ref:e},d),{},{components:n})):a.createElement(x,p({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var o=2;o<l;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12757:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return d},default:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),p=["components"],i={title:"History Job Interface",sidebar_position:3},s=void 0,o={unversionedId:"api/http/linkis-ps-publicservice-api/jobhistory-api",id:"api/http/linkis-ps-publicservice-api/jobhistory-api",isDocsHomePage:!1,title:"History Job Interface",description:"* QueryRestfulApi class *",source:"@site/docs/api/http/linkis-ps-publicservice-api/jobhistory-api.md",sourceDirName:"api/http/linkis-ps-publicservice-api",slug:"/api/http/linkis-ps-publicservice-api/jobhistory-api",permalink:"/docs/1.2.0/api/http/linkis-ps-publicservice-api/jobhistory-api",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/api/http/linkis-ps-publicservice-api/jobhistory-api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"History Job Interface",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Task Submission And Execution Of JDBC API",permalink:"/docs/1.2.0/api/jdbc-api"},next:{title:"Ceneric Api",permalink:"/docs/1.2.0/api/http/linkis-ps-publicservice-api/currency-api"}},d=[{value:"governanceStationAdmin",id:"governancestationadmin",children:[]},{value:"getHistoryTask",id:"gethistorytask",children:[]},{value:"listHistoryTask",id:"listhistorytask",children:[]},{value:"listUndoneHistoryTask",id:"listundonehistorytask",children:[]}],u={toc:d};function m(t){var e=t.components,n=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," QueryRestfulApi class ")),(0,l.kt)("h2",{id:"governancestationadmin"},"governanceStationAdmin"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface address"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/jobhistory/governanceStationAdmin")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request method"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface description"),": Determine whether the user is an administrator"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request Parameters"),":\nnone"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "admin": true\n    }\n}\n')),(0,l.kt)("h2",{id:"gethistorytask"},"getHistoryTask"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface address"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/jobhistory/{id}/get")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request method"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface description"),": Get the list of database names of the data source"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,l.kt)("th",{parentName:"tr",align:null},"Request type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Data type"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "task": {\n                "taskID": 1,\n                "instance": "xxx",\n                "execId": "exec-id-xxx",\n                "umUser": "test",\n                "engineInstance": "xxx",\n                "progress": "10%",\n                "logPath": "hdfs://xxx/xxx/xxx",\n                "resultLocation": "hdfs://xxx/xxx/xxx",\n                "status": "FAILED",\n                "createdTime": "2019-01-01 00:00:00",\n                "updatedTime": "2019-01-01 01:00:00",\n                "engineType": "spark",\n                "errorCode": 100,\n                "errDesc": "Task Failed with error code 100",\n                "executeApplicationName": "hello world",\n                "requestApplicationName": "hello world",\n                "runType": "xxx",\n                "paramJson": "{\\"xxx\\":\\"xxx\\"}",\n                "costTime": 10000,\n                "strongerExecId": "execId-xxx",\n                "sourceJson": "{\\"xxx\\":\\"xxx\\"}"\n        }\n    }\n}\n')),(0,l.kt)("h2",{id:"listhistorytask"},"listHistoryTask"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface address"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/jobhistory/list")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request method"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface description"),":"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,l.kt)("th",{parentName:"tr",align:null},"Request type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Data type"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startDate"),(0,l.kt)("td",{parentName:"tr",align:null},"startDate"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endDate"),(0,l.kt)("td",{parentName:"tr",align:null},"endDate"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageNow"),(0,l.kt)("td",{parentName:"tr",align:null},"pageNow"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"taskID"),(0,l.kt)("td",{parentName:"tr",align:null},"taskID"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"executeApplicationName"),(0,l.kt)("td",{parentName:"tr",align:null},"executeApplicationName"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"creator"),(0,l.kt)("td",{parentName:"tr",align:null},"creator"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proxyUser"),(0,l.kt)("td",{parentName:"tr",align:null},"proxyUser"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isAdminView"),(0,l.kt)("td",{parentName:"tr",align:null},"isAdminView"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n        "status": 0,\n        "message": "OK",\n        "data": {\n            "tasks": [{\n                "taskID": 1,\n                "instance": "xxx",\n                "execId": "exec-id-xxx",\n                "umUser": "test",\n                "engineInstance": "xxx",\n                "progress": "10%",\n                "logPath": "hdfs://xxx/xxx/xxx",\n                "resultLocation": "hdfs://xxx/xxx/xxx",\n                "status": "FAILED",\n                "createdTime": "2019-01-01 00:00:00",\n                "updatedTime": "2019-01-01 01:00:00",\n                "engineType": "spark",\n                "errorCode": 100,\n                "errDesc": "Task Failed with error code 100",\n                "executeApplicationName": "hello world",\n                "requestApplicationName": "hello world",\n                "runType": "xxx",\n                "paramJson": "{\\"xxx\\":\\"xxx\\"}",\n                "costTime": 10000,\n                "strongerExecId": "execId-xxx",\n                "sourceJson": "{\\"xxx\\":\\"xxx\\"}"\n            },\n            {\n                "taskID": 2,\n                "instance": "xxx",\n                "execId": "exec-id-xxx",\n                "umUser": "test",\n                "engineInstance": "xxx",\n                "progress": "10%",\n                "logPath": "hdfs://xxx/xxx/xxx",\n                "resultLocation": "hdfs://xxx/xxx/xxx",\n                "status": "FAILED",\n                "createdTime": "2019-01-01 00:00:00",\n                "updatedTime": "2019-01-01 01:00:00",\n                "engineType": "spark",\n                "errorCode": 100,\n                "errDesc": "Task Failed with error code 100",\n                "executeApplicationName": "hello world",\n                "requestApplicationName": "hello world",\n                "runType": "xxx",\n                "paramJson": "{\\"xxx\\":\\"xxx\\"}",\n                "costTime": 10000,\n                "strongerExecId": "execId-xxx",\n                "sourceJson": "{\\"xxx\\":\\"xxx\\"}"\n            }],\n            "totalPage": 1\n    }\n}\n')),(0,l.kt)("h2",{id:"listundonehistorytask"},"listUndoneHistoryTask"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface address"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/jobhistory/listundone")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request method"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface description"),":"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,l.kt)("th",{parentName:"tr",align:null},"Request type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Data type"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startDate"),(0,l.kt)("td",{parentName:"tr",align:null},"startDate"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endDate"),(0,l.kt)("td",{parentName:"tr",align:null},"endDate"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageNow"),(0,l.kt)("td",{parentName:"tr",align:null},"pageNow"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startTaskID"),(0,l.kt)("td",{parentName:"tr",align:null},"startTaskID"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"engineType"),(0,l.kt)("td",{parentName:"tr",align:null},"engineType"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"creator"),(0,l.kt)("td",{parentName:"tr",align:null},"creator"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n        "status": 0,\n        "message": "OK",\n        "data": {\n            "tasks": [{\n                "taskID": 1,\n                "instance": "xxx",\n                "execId": "exec-id-xxx",\n                "umUser": "test",\n                "engineInstance": "xxx",\n                "progress": "10%",\n                "logPath": "hdfs://xxx/xxx/xxx",\n                "resultLocation": "hdfs://xxx/xxx/xxx",\n                "status": "Running",\n                "createdTime": "2019-01-01 00:00:00",\n                "updatedTime": "2019-01-01 01:00:00",\n                "engineType": "spark",\n                "errorCode": 100,\n                "errDesc": "Task Failed with error code 100",\n                "executeApplicationName": "hello world",\n                "requestApplicationName": "hello world",\n                "runType": "xxx",\n                "paramJson": "{\\"xxx\\":\\"xxx\\"}",\n                "costTime": 10000,\n                "strongerExecId": "execId-xxx",\n                "sourceJson": "{\\"xxx\\":\\"xxx\\"}"\n            },\n            {\n                "taskID": 2,\n                "instance": "xxx",\n                "execId": "exec-id-xxx",\n                "umUser": "test",\n                "engineInstance": "xxx",\n                "progress": "10%",\n                "logPath": "hdfs://xxx/xxx/xxx",\n                "resultLocation": "hdfs://xxx/xxx/xxx",\n                "status": "Running",\n                "createdTime": "2019-01-01 00:00:00",\n                "updatedTime": "2019-01-01 01:00:00",\n                "engineType": "spark",\n                "errorCode": 100,\n                "errDesc": "Task Failed with error code 100",\n                "executeApplicationName": "hello world",\n                "requestApplicationName": "hello world",\n                "runType": "xxx",\n                "paramJson": "{\\"xxx\\":\\"xxx\\"}",\n                "costTime": 10000,\n                "strongerExecId": "execId-xxx",\n                "sourceJson": "{\\"xxx\\":\\"xxx\\"}"\n            }],\n            "totalPage": 1\n    }\n}\n')))}m.isMDXComponent=!0}}]);