"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[14065],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2766:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Login Api",sidebar_position:1},s="Login Document",p={unversionedId:"api/login_api",id:"version-1.0.2/api/login_api",isDocsHomePage:!1,title:"Login Api",description:"1. Docking With LDAP Service",source:"@site/versioned_docs/version-1.0.2/api/login_api.md",sourceDirName:"api",slug:"/api/login_api",permalink:"/docs/1.0.2/api/login_api",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.2/api/login_api.md",tags:[],version:"1.0.2",sidebarPosition:1,frontMatter:{title:"Login Api",sidebar_position:1},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Overview",permalink:"/docs/1.0.2/api/overview"},next:{title:"Task Submission And Execution Of JDBC API",permalink:"/docs/1.0.2/api/jdbc_api"}},u=[{value:"1. Docking With LDAP Service",id:"1-docking-with-ldap-service",children:[]},{value:"2. How To Open The Test Mode To Achieve Login-Free",id:"2-how-to-open-the-test-mode-to-achieve-login-free",children:[]},{value:"3.Log In Interface Summary",id:"3log-in-interface-summary",children:[]},{value:"4. Interface details",id:"4-interface-details",children:[{value:"1). Login In",id:"1-login-in",children:[]},{value:"2). Login Out",id:"2-login-out",children:[]},{value:"3). Heart Beat",id:"3-heart-beat",children:[]}]}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"login-document"},"Login Document"),(0,i.kt)("h2",{id:"1-docking-with-ldap-service"},"1. Docking With LDAP Service"),(0,i.kt)("p",null,"Enter the /conf/linkis-spring-cloud-services/linkis-mg-gateway directory and execute the command:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    vim linkis-server.properties\n")),(0,i.kt)("p",null,"Add LDAP related configuration:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wds.linkis.ldap.proxy.url=ldap://127.0.0.1:389/ #LDAP service URL\nwds.linkis.ldap.proxy.baseDN=dc=webank,dc=com #Configuration of LDAP service    \n")),(0,i.kt)("h2",{id:"2-how-to-open-the-test-mode-to-achieve-login-free"},"2. How To Open The Test Mode To Achieve Login-Free"),(0,i.kt)("p",null,"Enter the /conf/linkis-spring-cloud-services/linkis-mg-gateway directory and execute the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    vim linkis-server.properties\n")),(0,i.kt)("p",null,"Turn on the test mode and the parameters are as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    wds.linkis.test.mode=true   # Open test mode\n    wds.linkis.test.user=hadoop  # Specify which user to delegate all requests to in test mode\n")),(0,i.kt)("h2",{id:"3log-in-interface-summary"},"3.Log In Interface Summary"),(0,i.kt)("p",null,"We provide the following login-related interfaces:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Login In")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Login Out")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Heart Beat"))),(0,i.kt)("h2",{id:"4-interface-details"},"4. Interface details"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The return of the Linkis Restful interface follows the following standard return format:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "",\n "status": 0,\n "message": "",\n "data": {}\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Protocol"),"\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"method: Returns the requested Restful API URI, which is mainly used in WebSocket mode."),(0,i.kt)("li",{parentName:"ul"},"status: returns status information, where: -1 means no login, 0 means success, 1 means error, 2 means verification failed, 3 means no access to the interface."),(0,i.kt)("li",{parentName:"ul"},"data: return specific data."),(0,i.kt)("li",{parentName:"ul"},"message: return the requested prompt message. If the status is not 0, the message returns an error message, and the data may have a stack field, which returns specific stack information.")),(0,i.kt)("p",null,"For more information about the Linkis Restful interface specification, please refer to: ",(0,i.kt)("a",{parentName:"p",href:"/community/development_specification/api"},"Linkis Restful Interface Specification")),(0,i.kt)("h3",{id:"1-login-in"},"1). Login In"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Interface ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/user/login"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Submission method ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'      {\n        "userName": "",\n        "password": ""\n      }\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Return to example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "method": null,\n        "status": 0,\n        "message": "login successful(\u767b\u5f55\u6210\u529f)\uff01",\n        "data": {\n            "isAdmin": false,\n            "userName": ""\n        }\n     }\n')),(0,i.kt)("p",null,"Among them:"),(0,i.kt)("p",null,"-isAdmin: Linkis only has admin users and non-admin users. The only privilege of admin users is to support viewing the historical tasks of all users in the Linkis management console."),(0,i.kt)("h3",{id:"2-login-out"},"2). Login Out"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Interface ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/user/logout"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Submission method ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")),(0,i.kt)("p",{parentName:"li"},"No parameters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Return to example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "method": "/api/rest_j/v1/user/logout",\n        "status": 0,\n        "message": "Logout successful(\u9000\u51fa\u767b\u5f55\u6210\u529f)\uff01"\n    }\n')),(0,i.kt)("h3",{id:"3-heart-beat"},"3). Heart Beat"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Interface ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/user/heartbeat"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Submission method ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")),(0,i.kt)("p",{parentName:"li"},"No parameters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Return to example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    {\n         "method": "/api/rest_j/v1/user/heartbeat",\n         "status": 0,\n         "message": "Maintain heartbeat success(\u7ef4\u7cfb\u5fc3\u8df3\u6210\u529f)!"\n    }\n')))}m.isMDXComponent=!0}}]);