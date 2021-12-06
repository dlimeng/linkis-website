"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[391],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6818:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={title:"Exception Throws",sidebar_position:1},c=void 0,p={unversionedId:"development/development_specification/exception_throws",id:"development/development_specification/exception_throws",isDocsHomePage:!1,title:"Exception Throws",description:"How to define a new exception?",source:"@site/docs/development/development_specification/exception_throws.md",sourceDirName:"development/development_specification",slug:"/development/development_specification/exception_throws",permalink:"/docs/next/development/development_specification/exception_throws",editUrl:"https://github.com/apache/incubator-linkis-website/edit/master/docs/development/development_specification/exception_throws.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Exception Throws",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Exception Catch",permalink:"/docs/next/development/development_specification/exception_catch"},next:{title:"Log",permalink:"/docs/next/development/development_specification/log"}},s=[{value:"How to define a new exception?",id:"how-to-define-a-new-exception",children:[]},{value:"Module exception specification",id:"module-exception-specification",children:[]}],d={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-define-a-new-exception"},"How to define a new exception?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Customized exceptions must inherit one of LinkisretryException, WarnException, ErroException, or FatalException")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Customized exceptions must contain error codes and error descriptions. If necessary, the IP address and process port where the exception occurred can also be encapsulated in the exception")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Be careful with WarnException! An exception thrown by WarnException, if caught in a RESTful or RPC Receiver, does not throw a failure to the front end or sender, but only returns a warning message!")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"WarnException has an exception level of 1, ErroException has an exception level of 2, FatalException has an exception level of 3, and LinkisretryException has an exception level of 4")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"exception class"),(0,o.kt)("th",{parentName:"tr",align:"left"},"service"),(0,o.kt)("th",{parentName:"tr",align:"left"},"error code"),(0,o.kt)("th",{parentName:"tr",align:"left"},"error description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"LinkisException"),(0,o.kt)("td",{parentName:"tr",align:"left"},"common"),(0,o.kt)("td",{parentName:"tr",align:"left"},"None"),(0,o.kt)("td",{parentName:"tr",align:"left"},"top level parent class inherited from the Exception, does not allow direct inheritance")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"LinkisRuntimeException"),(0,o.kt)("td",{parentName:"tr",align:"left"},"common"),(0,o.kt)("td",{parentName:"tr",align:"left"},"None"),(0,o.kt)("td",{parentName:"tr",align:"left"},"top level parent class, inherited from RuntimeException, does not allow direct inheritance")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"WarnException"),(0,o.kt)("td",{parentName:"tr",align:"left"},"common"),(0,o.kt)("td",{parentName:"tr",align:"left"},"None"),(0,o.kt)("td",{parentName:"tr",align:"left"},"secondary level parent classes, inherit from LinkisRuntimeException. Warn level exception, must inherit this class directly or indirectly")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ErrorException"),(0,o.kt)("td",{parentName:"tr",align:"left"},"common"),(0,o.kt)("td",{parentName:"tr",align:"left"},"None"),(0,o.kt)("td",{parentName:"tr",align:"left"},"secondary level parent classes, inherited from LinkisException. Error exception, must inherit this class directly or indirectly")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"FatalException"),(0,o.kt)("td",{parentName:"tr",align:"left"},"common"),(0,o.kt)("td",{parentName:"tr",align:"left"},"None"),(0,o.kt)("td",{parentName:"tr",align:"left"},"secondary level parent classes, inherited from LinkisException. Fatal level exception, must inherit this class directly or indirectly")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"LinkisRetryException"),(0,o.kt)("td",{parentName:"tr",align:"left"},"common"),(0,o.kt)("td",{parentName:"tr",align:"left"},"None"),(0,o.kt)("td",{parentName:"tr",align:"left"},"secondary level parent classes, inherited from LinkisException. Retryable exceptions, must inherit this class directly or indirectly")))),(0,o.kt)("h2",{id:"module-exception-specification"},"Module exception specification"),(0,o.kt)("p",null,"linkis-commons:10000-11000"),(0,o.kt)("p",null,"linkis-computattion-governace:11000-12000"),(0,o.kt)("p",null,"linkis-engineconn-plugins:12000-13000"),(0,o.kt)("p",null,"linkis-orchestrator:13000-14000"),(0,o.kt)("p",null,"linkis-public-enghancements:14000-15000"),(0,o.kt)("p",null,"linkis-spring-cloud-service:15100-15500"),(0,o.kt)("p",null,"linkis-extensions:15500-16000"),(0,o.kt)("p",null,"linkis-tuning:16100-16200"),(0,o.kt)("p",null,"linkis-user-control:16200-16300"))}m.isMDXComponent=!0}}]);