"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[34643],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58814:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const o={title:"Overview",sidebar_position:0},a=void 0,p={unversionedId:"api/overview",id:"api/overview",title:"Overview",description:"1. Document description",source:"@site/docs/api/overview.md",sourceDirName:"api",slug:"/api/overview",permalink:"/docs/1.3.2/api/overview",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/api/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Kerberos",permalink:"/docs/1.3.2/auth/kerberos"},next:{title:"Login API",permalink:"/docs/1.3.2/api/login-api"}},c={},s=[{value:"1. Document description",id:"1-document-description",level:2}],l={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-document-description"},"1. Document description"),(0,i.kt)("p",null,"Linkis1.0 has been refactored and optimized on the basis of Linkix0.x, and it is also compatible with the 0.x interface. However, in order to prevent compatibility problems when using version 1.0, you need to read the following documents carefully:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When using Linkis1.0 for customized development, you need to use Linkis's authorization authentication interface. Please read ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.3.2/api/login-api"},"Login API Document")," carefully.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Linkis1.0 provides a JDBC interface. You need to use JDBC to access Linkis. Please read ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.3.2/api/jdbc-api"},"Task Submit and Execute JDBC API Document"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Linkis1.0 provides the Rest interface. If you need to develop upper-level applications on the basis of Linkis, please read ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.3.2/api/linkis-task-operator"},"Task Submit and Execute Rest API Document"),"."))))}u.isMDXComponent=!0}}]);