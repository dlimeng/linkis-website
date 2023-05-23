"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[35493],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Task Fixed EngineConn Execution",sidebar_position:.3},o=void 0,s={unversionedId:"feature/ec-fix-label",id:"version-1.3.2/feature/ec-fix-label",title:"Task Fixed EngineConn Execution",description:"1. Requirement Background",source:"@site/versioned_docs/version-1.3.2/feature/ec-fix-label.md",sourceDirName:"feature",slug:"/feature/ec-fix-label",permalink:"/docs/latest/feature/ec-fix-label",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.2/feature/ec-fix-label.md",tags:[],version:"1.3.2",sidebarPosition:.3,frontMatter:{title:"Task Fixed EngineConn Execution",sidebar_position:.3},sidebar:"tutorialSidebar",previous:{title:"Spark-Submit Jar package task",permalink:"/docs/latest/feature/spark-submit-jar"},next:{title:"Remove DSS Support dependency",permalink:"/docs/latest/feature/remove-dss-support"}},l={},c=[{value:"1. Requirement Background",id:"1-requirement-background",level:2},{value:"2. Instructions for use",id:"2-instructions-for-use",level:2},{value:"3. Precautions",id:"3-precautions",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-requirement-background"},"1. Requirement Background"),(0,a.kt)("p",null,"Now when Linkis tasks are submitted, they are created or reused based on the tags of EngineConn (hereinafter referred to as EC), and the ECs between multiple tasks are random. However, for the existence of multi-tasks that need to be able to meet the dependencies of the tasks, execution on the same EC cannot be well supported. Add a new EngineConnInstanceLabel to multi-tasks to fix the same EC for multiple tasks."),(0,a.kt)("h2",{id:"2-instructions-for-use"},"2. Instructions for use"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The management console adds a specific label, and the adding path is as follows: login to the control panel -> ECM management -> click on an ECM instance name -> edit the EC to be fixed -> add a label of type FixdEngineConnLabel.\n",(0,a.kt)("img",{src:n(55145).Z,width:"1890",height:"461"}),(0,a.kt)("img",{src:n(49312).Z,width:"1894",height:"426"}),(0,a.kt)("img",{src:n(16658).Z,width:"510",height:"497"})),(0,a.kt)("li",{parentName:"ol"},"To submit the task execution, you need to add: FixdEngineConnLabel label and submit it to the fixed instance")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"labels": {\n    "engineType": "spark-2.4.3",\n    "userCreator": "hadoop-IDE",\n    "fixedEngineConn": "idvalue"\n}\n')),(0,a.kt)("h2",{id:"3-precautions"},"3. Precautions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For the first task, you can choose to obtain the list of EC instances for selection, or you can directly submit the task for creation")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If the EC is not idle and available, a new EC instance will be created to execute the task. If you need to avoid this situation, you can call the EC instance query interface when the task is submitted to determine whether the corresponding EC exists and status before submitting."))))}p.isMDXComponent=!0},49312:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ec-8becc0fd8385fd233b417b0ea295ad81.png"},55145:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ecm-bd0db3f43b8738ac289b662abbaa070f.png"},16658:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/label-caf1671b63bdc8c1faa7a5efdfdd6f44.png"}}]);