"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[3013],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=i,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3058:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={title:"\u603b\u89c8",sidebar_position:1},p=void 0,u={unversionedId:"api/overview",id:"api/overview",isDocsHomePage:!1,title:"\u603b\u89c8",description:"1. \u6587\u6863\u8bf4\u660e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/overview.md",sourceDirName:"api",slug:"/api/overview",permalink:"/zh-CN/docs/next/api/overview",editUrl:"https://github.com/apache/incubator-linkis-website/edit/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u603b\u89c8",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"tuning",permalink:"/zh-CN/docs/next/tuning_and_troubleshooting/tuning"},next:{title:"\u767b\u5f55\u6587\u6863",permalink:"/zh-CN/docs/next/api/login_api"}},l=[{value:"1. \u6587\u6863\u8bf4\u660e",id:"1-\u6587\u6863\u8bf4\u660e",children:[]}],s={toc:l};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-\u6587\u6863\u8bf4\u660e"},"1. \u6587\u6863\u8bf4\u660e"),(0,o.kt)("p",null,"Linkis1.0 \u5728Linkix0.x\u7248\u672c\u7684\u57fa\u7840\u4e0a\u8fdb\u884c\u4e86\u91cd\u6784\u4f18\u5316\uff0c\u540c\u65f6\u4e5f\u517c\u5bb9\u4e860.x\u7684\u63a5\u53e3\uff0c\u4f46\u662f\u4e3a\u4e86\u9632\u6b62\u5728\u4f7f\u75281.0\u7248\u672c\u65f6\u5b58\u5728\u517c\u5bb9\u6027\u95ee\u9898\uff0c\u9700\u8981\u60a8\u4ed4\u7ec6\u9605\u8bfb\u4ee5\u4e0b\u6587\u6863\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4f7f\u7528Linkis1.0\u5b9a\u5236\u5316\u5f00\u53d1\u65f6\uff0c\u9700\u8981\u4f7f\u7528\u5230Linkis\u7684\u6743\u9650\u8ba4\u8bc1\u63a5\u53e3\uff0c\u8bf7\u4ed4\u7ec6\u9605\u8bfb ",(0,o.kt)("a",{parentName:"p",href:"Login_API.md"},"\u767b\u5f55API\u6587\u6863"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Linkis1.0\u63d0\u4f9bJDBC\u7684\u63a5\u53e3\uff0c\u9700\u8981\u4f7f\u7528JDBC\u7684\u65b9\u5f0f\u63a5\u5165Linkis\uff0c\u8bf7\u4ed4\u7ec6\u9605\u8bfb",(0,o.kt)("a",{parentName:"p",href:"%E4%BB%BB%E5%8A%A1%E6%8F%90%E4%BA%A4%E6%89%A7%E8%A1%8CJDBC_API%E6%96%87%E6%A1%A3.md"},"\u4efb\u52a1\u63d0\u4ea4\u6267\u884cJDBC API\u6587\u6863"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Linkis1.0\u63d0\u4f9b\u4e86Rest\u63a5\u53e3\uff0c\u5982\u679c\u9700\u8981\u5728Linkis\u7684\u57fa\u7840\u4e0a\u5f00\u53d1\u4e0a\u5c42\u5e94\u7528\uff0c\u8bf7\u4ed4\u7ec6\u9605\u8bfb",(0,o.kt)("a",{parentName:"p",href:"Linkis%E4%BB%BB%E5%8A%A1%E6%8F%90%E4%BA%A4%E6%89%A7%E8%A1%8CRestAPI%E6%96%87%E6%A1%A3.md"},"\u4efb\u52a1\u63d0\u4ea4\u6267\u884cRest API\u6587\u6863"),"\u3002"))))}f.isMDXComponent=!0}}]);