"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[4436],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2421:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={title:"Test Specification",sidebar_position:7},s=void 0,l={unversionedId:"development_specification/unit_test",id:"development_specification/unit_test",title:"Test Specification",description:"1. [Mandatory] Tool classes and internal interfaces of services must have test case.",source:"@site/community/development_specification/unit_test.md",sourceDirName:"development_specification",slug:"/development_specification/unit_test",permalink:"/community/development_specification/unit_test",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/community/development_specification/unit_test.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Test Specification",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Path Usage",permalink:"/community/development_specification/path_usage"},next:{title:"version and new feature specification",permalink:"/community/development_specification/version_feature_specifications"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"[",(0,o.kt)("strong",{parentName:"li"},"Mandatory"),"]"," Tool classes and internal interfaces of services must have test case."),(0,o.kt)("li",{parentName:"ol"},"[",(0,o.kt)("strong",{parentName:"li"},"Mandatory"),"]"," Unit testing needs to be able to be automated (triggered by mvn compilation), independence (unit test cases cannot call each other), and repeatable execution (can be executed multiple times, with the same result)"),(0,o.kt)("li",{parentName:"ol"},"[",(0,o.kt)("strong",{parentName:"li"},"Mandatory"),"]"," A test case should only test one method."),(0,o.kt)("li",{parentName:"ol"},"[",(0,o.kt)("strong",{parentName:"li"},"Mandatory"),"]"," Test case exceptions cannot be caught and need to be thrown upwards."),(0,o.kt)("li",{parentName:"ol"},"[",(0,o.kt)("strong",{parentName:"li"},"Mandatory"),"]"," The unit test code must be written in the following project directory: src/test/java or scala, and it is not allowed to be written in other records."),(0,o.kt)("li",{parentName:"ol"},"[Recommended]"," Unit testing needs to consider boundary conditions, such as the end of the month and February."),(0,o.kt)("li",{parentName:"ol"},"[Recommended]"," For database-related unit tests, consider data rollback.")))}d.isMDXComponent=!0}}]);