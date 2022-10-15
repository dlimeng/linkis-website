"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[53544],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),s=a,k=d["".concat(p,".").concat(s)]||d[s]||m[s]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56499:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"Version overview",sidebar_position:.1},o=void 0,i={unversionedId:"release",id:"version-1.1.1/release",isDocsHomePage:!1,title:"Version overview",description:"- Introduction of Proxy User Mode",source:"@site/versioned_docs/version-1.1.1/release.md",sourceDirName:".",slug:"/release",permalink:"/docs/1.1.1/release",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.1/release.md",tags:[],version:"1.1.1",sidebarPosition:.1,frontMatter:{title:"Version overview",sidebar_position:.1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/1.1.1/introduction"},next:{title:"Quick Deployment",permalink:"/docs/1.1.1/deployment/quick-deploy"}},p=[{value:"Configuration Item",id:"configuration-item",children:[]},{value:"DB Table Changes",id:"db-table-changes",children:[]}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.1.1/architecture/proxy-user"},"Introduction of Proxy User Mode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.1.1/user-guide/udf"},"UDF function introduction and usage guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.1.1/api/http/engineconn-plugin-refesh"},"Engine material refresh HTTP interface")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.1.1/api/http/udf-api"},"UDF related HTTP interface")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.1.1/table/udf-table"},"UDF related table structure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/blog/2022/03/20/openlookeng"},"Implementation of OpenLookEng Engine")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.1.1/engine-usage/openlookeng"},"Use of OpenLookEng")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/download/release-notes-1.1.1"},"release-notes"))),(0,a.kt)("h2",{id:"configuration-item"},"Configuration Item"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Module Name (Service Name)"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ec-openlookeng"),(0,a.kt)("td",{parentName:"tr",align:null},"New"),(0,a.kt)("td",{parentName:"tr",align:null},"linkis.openlookeng.engineconn.concurrent.limit"),(0,a.kt)("td",{parentName:"tr",align:null},"100"),(0,a.kt)("td",{parentName:"tr",align:null},"Concurrency Limit")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ec-openlookeng"),(0,a.kt)("td",{parentName:"tr",align:null},"New"),(0,a.kt)("td",{parentName:"tr",align:null},"linkis.openlookeng.http.connectTimeout"),(0,a.kt)("td",{parentName:"tr",align:null},"60L"),(0,a.kt)("td",{parentName:"tr",align:null},"Client request timeout time http request based on OKhttp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ec-openlookeng"),(0,a.kt)("td",{parentName:"tr",align:null},"New"),(0,a.kt)("td",{parentName:"tr",align:null},"linkis.openlookeng.http.readTimeout"),(0,a.kt)("td",{parentName:"tr",align:null},"60L"),(0,a.kt)("td",{parentName:"tr",align:null},"Client read timeout HTTP request built on OKhttp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ec-openlookeng"),(0,a.kt)("td",{parentName:"tr",align:null},"New"),(0,a.kt)("td",{parentName:"tr",align:null},"linkis.openlookeng.url"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"http://127.0.0.1:8080"},"http://127.0.0.1:8080")),(0,a.kt)("td",{parentName:"tr",align:null},"openlookeng service")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ec-openlookeng"),(0,a.kt)("td",{parentName:"tr",align:null},"New"),(0,a.kt)("td",{parentName:"tr",align:null},"linkis.openlookeng.catalog"),(0,a.kt)("td",{parentName:"tr",align:null},"system"),(0,a.kt)("td",{parentName:"tr",align:null},"catalog")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ec-openlookeng"),(0,a.kt)("td",{parentName:"tr",align:null},"New"),(0,a.kt)("td",{parentName:"tr",align:null},"linkis.openlookeng.schema"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"schema")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ec-openlookeng"),(0,a.kt)("td",{parentName:"tr",align:null},"New"),(0,a.kt)("td",{parentName:"tr",align:null},"linkis.openlookeng.source"),(0,a.kt)("td",{parentName:"tr",align:null},"global"),(0,a.kt)("td",{parentName:"tr",align:null},"source")))),(0,a.kt)("h2",{id:"db-table-changes"},"DB Table Changes"),(0,a.kt)("p",null,"For details, see the upgrade schema",(0,a.kt)("inlineCode",{parentName:"p"},"db/upgrade/1.1.1_schema")," file in the corresponding branch of the code repository (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis"},"https://github.com/apache/incubator-linkis"),")."))}c.isMDXComponent=!0}}]);