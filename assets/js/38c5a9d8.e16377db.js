"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[82106],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=s(t),p=a,m=g["".concat(c,".").concat(p)]||g[p]||u[p]||i;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},20002:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const i={title:"EngineConnManager Design",sidebar_position:3},o=void 0,l={unversionedId:"architecture/computation-governance-services/engine/engine-conn-manager",id:"version-1.1.0/architecture/computation-governance-services/engine/engine-conn-manager",title:"EngineConnManager Design",description:"EngineConnManager architecture design",source:"@site/versioned_docs/version-1.1.0/architecture/computation-governance-services/engine/engine-conn-manager.md",sourceDirName:"architecture/computation-governance-services/engine",slug:"/architecture/computation-governance-services/engine/engine-conn-manager",permalink:"/docs/1.1.0/architecture/computation-governance-services/engine/engine-conn-manager",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.1.0/architecture/computation-governance-services/engine/engine-conn-manager.md",tags:[],version:"1.1.0",sidebarPosition:3,frontMatter:{title:"EngineConnManager Design",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Resource Manager",permalink:"/docs/1.1.0/architecture/computation-governance-services/linkis-manager/resource-manager"},next:{title:"EngineConnPlugin (ECP) Design",permalink:"/docs/1.1.0/architecture/computation-governance-services/engine/engine-conn-plugin"}},c={},s=[{value:"EngineConnManager architecture design",id:"engineconnmanager-architecture-design",level:2},{value:"ECM architecture",id:"ecm-architecture",level:3},{value:"Introduction to the second-level module",id:"introduction-to-the-second-level-module",level:3}],d={toc:s};function u(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"engineconnmanager-architecture-design"},"EngineConnManager architecture design"),(0,a.kt)("p",null,"EngineConnManager (ECM): EngineConn's manager, provides engine lifecycle management, and reports load information and its own health status to RM."),(0,a.kt)("h3",{id:"ecm-architecture"},"ECM architecture"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(40875).Z,width:"1006",height:"497"})),(0,a.kt)("h3",{id:"introduction-to-the-second-level-module"},"Introduction to the second-level module"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linkis-engineconn-linux-launch")),(0,a.kt)("p",null,"The engine launcher, whose core class is LinuxProcessEngineConnLauch, is used to provide instructions for executing commands."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linkis-engineconn-manager-core")),(0,a.kt)("p",null,"The core module of ECM includes the top-level interface of ECM health report and EngineConn health report function, defines the relevant indicators of ECM service, and the core method of constructing EngineConn process."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Core top-level interface/class"),(0,a.kt)("th",{parentName:"tr",align:null},"Core function"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EngineConn"),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the properties of EngineConn, including methods and parameters")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EngineConnLaunch"),(0,a.kt)("td",{parentName:"tr",align:null},"Define the start method and stop method of EngineConn")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ECMEvent"),(0,a.kt)("td",{parentName:"tr",align:null},"ECM related events are defined")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ECMEventListener"),(0,a.kt)("td",{parentName:"tr",align:null},"Defined ECM related event listeners")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ECMEventListenerBus"),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the listener bus of ECM")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ECMMetrics"),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the indicator information of ECM")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ECMHealthReport"),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the health report information of ECM")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NodeHealthReport"),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the health report information of the node")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linkis-engineconn-manager-server")),(0,a.kt)("p",null,"The server side of ECM defines top-level interfaces and implementation classes such as ECM health information processing service, ECM indicator information processing service, ECM registration service, EngineConn start service, EngineConn stop service, EngineConn callback service, etc., which are mainly used for ECM to itself and EngineConn Life cycle management, health information reporting, heartbeat sending, etc.\nCore Service and Features module are as follows:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Core service"),(0,a.kt)("th",{parentName:"tr",align:null},"Core function"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EngineConnLaunchService"),(0,a.kt)("td",{parentName:"tr",align:null},"Contains core methods for generating EngineConn and starting the process")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BmlResourceLocallizationService"),(0,a.kt)("td",{parentName:"tr",align:null},"Used to download BML engine related resources and generate localized file directory")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ECMHealthService"),(0,a.kt)("td",{parentName:"tr",align:null},"Report your own healthy heartbeat to AM regularly")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ECMMetricsService"),(0,a.kt)("td",{parentName:"tr",align:null},"Report your own indicator status to AM regularly")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EngineConnKillSerivce"),(0,a.kt)("td",{parentName:"tr",align:null},"Provides related functions to stop the engine")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EngineConnListService"),(0,a.kt)("td",{parentName:"tr",align:null},"Provide caching and management engine related functions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EngineConnCallBackService"),(0,a.kt)("td",{parentName:"tr",align:null},"Provide the function of the callback engine")))))}u.isMDXComponent=!0},40875:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/ecm-01-13af70447ddb9c24bd3779b27cd75b04.png"}}]);