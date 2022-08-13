"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[56568],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),k=r,d=m["".concat(l,".").concat(k)]||m[k]||p[k]||i;return n?a.createElement(d,s(s({ref:t},u),{},{components:n})):a.createElement(d,s({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74632:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],o={title:"WebSocket",sidebar_position:3},l=void 0,c={unversionedId:"api/web-socket",id:"version-0.11.0/api/web-socket",isDocsHomePage:!1,title:"WebSocket",description:"Linkis provides access to WebSocket, and the frontend can interact with Link's WebSocket only in real time and does not need to be queried through Restful.",source:"@site/versioned_docs/version-0.11.0/api/web-socket.md",sourceDirName:"api",slug:"/api/web-socket",permalink:"/docs/0.11.0/api/web-socket",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-0.11.0/api/web-socket.md",tags:[],version:"0.11.0",sidebarPosition:3,frontMatter:{title:"WebSocket",sidebar_position:3},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Restful Api",permalink:"/docs/0.11.0/api/rest-api"},next:{title:"Overview",permalink:"/docs/0.11.0/architecture/overview"}},u=[{value:"1 Linkis interface specification",id:"1-linkis-interface-specification",children:[]},{value:"2 WebSocket Interface Summary",id:"2-websocket-interface-summary",children:[]},{value:"3 Interface Details",id:"3-interface-details",children:[{value:"3.1 Establishing a connection",id:"31-establishing-a-connection",children:[]},{value:"3.2 Submission of implementation",id:"32-submission-of-implementation",children:[]},{value:"3.3 Task Status, Logs, Progress Proactive Push",id:"33-task-status-logs-progress-proactive-push",children:[]}]}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Linkis provides access to WebSocket, and the frontend can interact with Link's WebSocket only in real time and does not need to be queried through Restful.")),(0,i.kt)("h2",{id:"1-linkis-interface-specification"},"1 Linkis interface specification"),(0,i.kt)("p",null,"Linkis defines a set of its own interface norms when interacting at the back and back end."),(0,i.kt)("p",null,"If you are interested in interface specifications, please click here",(0,i.kt)("a",{parentName:"p",href:"/community/development-specification/api"},"to view interface norms")),(0,i.kt)("h2",{id:"2-websocket-interface-summary"},"2 WebSocket Interface Summary"),(0,i.kt)("p",null,"We provide the following interfaces to facilitate rapid user submission of Jobs for implementation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create WebSocket Connection"),(0,i.kt)("li",{parentName:"ul"},"Submit for Implementation"),(0,i.kt)("li",{parentName:"ul"},"Service active return status, logs, and progress")),(0,i.kt)("h2",{id:"3-interface-details"},"3 Interface Details"),(0,i.kt)("h3",{id:"31-establishing-a-connection"},"3.1 Establishing a connection"),(0,i.kt)("p",null,"This interface is intended to create a WebSocket connection with Linkis."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"/api/res_j/entrance/connect"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Method ",(0,i.kt)("strong",{parentName:"p"},"GET"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response status code ",(0,i.kt)("strong",{parentName:"p"},"101")))),(0,i.kt)("h3",{id:"32-submission-of-implementation"},"3.2 Submission of implementation"),(0,i.kt)("p",null,"Requested task is to submit user's assignment to Linkis for execution interface"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Interface ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/res_j/entrance/execution"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Submit Method ",(0,i.kt)("inlineCode",{parentName:"p"},"POST"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request JSON Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method":"/api/rest_j/v1/entrance/execute",\n    "data":{\n        "params": {\n            "variable":{\n                "k1":"v1"\n            },\n            "configuration":{\n                "special":{\n                    "k2":"v2"\n                },\n                "runtime":{\n                    "k3":"v3"\n                },\n                "startup":{\n                    "k4":"v4"\n                }\n            }\n        },\n        "executeApplicationName":"spark",\n        "executionCode":"show tables",\n        "runType":"sql",\n        "source":{\n            "scriptPath": "/home/Linkis/Linkis.sql"\n        },\n    "websocketTag":"37fcbd8b762d465a0c870684a0261c6e"\n    }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The parameters in the requested body data are described below.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Definition of parameters"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"executeApplicationName"),(0,i.kt)("td",{parentName:"tr",align:null},"Engine services such as Spark, hive, etc. the user expects to use"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"must not be empty")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"requestApplicationName"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of system to launch the request"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"is empty")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"params"),(0,i.kt)("td",{parentName:"tr",align:null},"User-specified parameters for running the service program"),(0,i.kt)("td",{parentName:"tr",align:null},"Map"),(0,i.kt)("td",{parentName:"tr",align:null},"Required, the value inside is empty")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Execution Code"),(0,i.kt)("td",{parentName:"tr",align:null},"Execution code submitted by user"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"must not be empty")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"runType"),(0,i.kt)("td",{parentName:"tr",align:null},"When users perform such services as spark, they can select python, R, SQL, etc."),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"must not be empty")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"scriptPath"),(0,i.kt)("td",{parentName:"tr",align:null},"Path to store for user submitted code scripts"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"If IDE, it cannot be empty with execution code")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Return Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "/api/rest_j/v1/entrance/execute",\n "status": 0,\n "message": "The request was executed successfully",\n "data": {\n   "execID": "030418IDEhivebdpdwc010004:10087IDE_johnnwang_21",\n   "taskID": "123"  \n }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The execID is the unique execution ID generated for the task after the user task has been submitted to UJES, the String type that is useful only when the task is running, similar to the PID concept.ExecID is designed (requestApplicationName length) (executeAppName length1) (Instalment 2)${requestApplicationName}${executeApplicationName}${entranceInstanceip+port}${requestApplicationName}",(0,i.kt)("em",{parentName:"li"},"${umUser}"),"${index}"),(0,i.kt)("li",{parentName:"ul"},"taskID is the unique ID that represents the user submission of tasks. This ID is generated by database auto-adding, long type")),(0,i.kt)("h3",{id:"33-task-status-logs-progress-proactive-push"},"3.3 Task Status, Logs, Progress Proactive Push"),(0,i.kt)("p",null,"Once executed, the server will take the initiative to push information about the status, logs, progress, etc. You can also use WebSocket to ask for status, logs, and progress."),(0,i.kt)("p",null,"Server has initiated the following content\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Logs")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "/api/rest_j/v1/entrance/${execID}/log",\n  "status": 0,\n  "message": "Return log information",\n  "data": {\n    "execID": "${execID}",\n    "log": ["error","warn","info", "all"],\n  "taskID":28594,\n    "fromLine": 56\n  },\n  "websocketTag":"37fcbd8b762d465a0c870684a0261c6e"\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Status")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'LOD\n  "method": "/api/res_j/v1/entrance/${execID}/status",\n  "status": 0,\n  "message": "Return status information",\n  "data": {\n    "execID": "${execID}",\n    "taskID":28594,\n      "status": "Running",\n  },\n  "websocketTag": "37fcbd8b762d465a0c860684a0261c6e"\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Progress")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "/api/rest_j/v1/entrance/${execID}/log",\n  "status": 0,\n  "message": "Return progress information",\n  "data": {\n    "execID": "${execID}",\n    "taskID":28594,\n    "progress": 0.2,\n    "progressInfo": [\n        {\n            "id": "job-1",\n            "succeedTasks": 2,\n            "failedTasks": 0,\n            "runningTasks": 5,\n            "totalTasks": 10\n        },\n        {\n            "id": "job-2",\n            "succeedTasks": 5,\n            "failedTasks": 0,\n            "runningTasks": 5,\n            "totalTasks": 10\n        }\n    ]\n  },\n  "websocketTag":"37fcbd8b762d465a0c870684a0261c6e"\n}\n')))}m.isMDXComponent=!0}}]);