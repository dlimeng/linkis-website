"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[3851],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),k=i,d=m["".concat(o,".").concat(k)]||m[k]||s[k]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5176:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],c={},o=void 0,u={unversionedId:"architecture/computation_governance_services/linkis_client/readme",id:"architecture/computation_governance_services/linkis_client/readme",isDocsHomePage:!1,title:"readme",description:"Linkis-Client\u67b6\u6784\u8bbe\u8ba1",source:"@site/docs/architecture/computation_governance_services/linkis_client/readme.md",sourceDirName:"architecture/computation_governance_services/linkis_client",slug:"/architecture/computation_governance_services/linkis_client/readme",permalink:"/docs/next/architecture/computation_governance_services/linkis_client/readme",editUrl:"https://github.com/apache/incubator-linkis-website/edit/master/docs/architecture/computation_governance_services/linkis_client/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Entrance\u67b6\u6784\u8bbe\u8ba1",permalink:"/docs/next/architecture/computation_governance_services/entrance/entrance"},next:{title:"Overview",permalink:"/docs/next/architecture/microservice_governance_services/overview"}},p=[{value:"Linkis-Client\u67b6\u6784\u8bbe\u8ba1",id:"linkis-client\u67b6\u6784\u8bbe\u8ba1",children:[]}],s={toc:p};function m(e){var t=e.components,c=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"linkis-client\u67b6\u6784\u8bbe\u8ba1"},"Linkis-Client\u67b6\u6784\u8bbe\u8ba1"),(0,a.kt)("p",null,"\u4e3a\u7528\u6237\u63d0\u4f9b\u5411Linkis\u63d0\u4ea4\u6267\u884c\u4efb\u52a1\u7684\u8f7b\u91cf\u7ea7\u5ba2\u6237\u7aef\u3002"),(0,a.kt)("h4",{id:"linkis-client\u67b6\u6784\u56fe"},"Linkis-Client\u67b6\u6784\u56fe"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(2996).Z})),(0,a.kt)("h4",{id:"\u4e8c\u7ea7\u6a21\u5757\u4ecb\u7ecd"},"\u4e8c\u7ea7\u6a21\u5757\u4ecb\u7ecd"),(0,a.kt)("h5",{id:"linkis-computation-client"},"Linkis-Computation-Client"),(0,a.kt)("p",null,"\u4ee5SDK\u7684\u5f62\u5f0f\u4e3a\u7528\u6237\u63d0\u4f9b\u5411Linkis\u63d0\u4ea4\u6267\u884c\u4efb\u52a1\u7684\u63a5\u53e3\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u7c7b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u529f\u80fd"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Action"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86\u8bf7\u6c42\u7684\u5c5e\u6027\uff0c\u5305\u542b\u7684\u65b9\u6cd5\u548c\u53c2\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Result"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86\u8fd4\u56de\u7ed3\u679c\u7684\u5c5e\u6027\uff0c\u5305\u542b\u7684\u65b9\u6cd5\u548c\u53c2\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UJESClient"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8d1f\u8d23\u8bf7\u6c42\u7684\u63d0\u4ea4\uff0c\u6267\u884c\uff0c\u72b6\u6001\u3001\u7ed3\u679c\u548c\u76f8\u5173\u53c2\u6570\u7684\u83b7\u53d6")))),(0,a.kt)("h5",{id:"linkis-cli"},"Linkis-Cli"),(0,a.kt)("p",null,"\u4ee5shell\u547d\u4ee4\u7aef\u7684\u5f62\u5f0f\u4e3a\u7528\u6237\u63d0\u4f9b\u5411Linkis\u63d0\u4ea4\u6267\u884c\u4efb\u52a1\u7684\u65b9\u5f0f\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u7c7b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u529f\u80fd"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Common"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86\u6307\u4ee4\u6a21\u677f\u7236\u7c7b\u3001\u6307\u4ee4\u89e3\u6790\u5b9e\u4f53\u7c7b\u3001\u4efb\u52a1\u63d0\u4ea4\u6267\u884c\u5404\u73af\u8282\u7684\u7236\u7c7b\u548c\u63a5\u53e3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Core"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8d1f\u8d23\u89e3\u6790\u8f93\u5165\u3001\u4efb\u52a1\u6267\u884c\u548c\u5b9a\u4e49\u8f93\u51fa\u65b9\u5f0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Application"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528linkis-computation-client\u6267\u884c\u4efb\u52a1\uff0c\u5e76\u5b9e\u65f6\u62c9\u53d6\u65e5\u5fd7\u548c\u6700\u7ec8\u7ed3\u679c")))))}m.isMDXComponent=!0},2996:function(e,t,n){t.Z=n.p+"assets/images/linkis-client-01-741a1ba0a041967a2b2b33bbd11baa75.png"}}]);