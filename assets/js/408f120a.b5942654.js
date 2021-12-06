"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[2975],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),g=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=g(e.components);return i.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=g(t),p=o,h=d["".concat(l,".").concat(p)]||d[p]||s[p]||r;return t?i.createElement(h,c(c({ref:n},u),{},{components:t})):i.createElement(h,c({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var g=2;g<r;g++)c[g]=t[g];return i.createElement.apply(null,c)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2655:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return g},toc:function(){return u},default:function(){return d}});var i=t(7462),o=t(3366),r=(t(7294),t(3905)),c=["components"],a={title:"EngineConnPlugin (ECP) Design",sidebar_position:3},l="EngineConnPlugin (ECP) architecture design",g={unversionedId:"architecture/computation_governance_services/engine/engine_conn_plugin",id:"architecture/computation_governance_services/engine/engine_conn_plugin",isDocsHomePage:!1,title:"EngineConnPlugin (ECP) Design",description:"The engine connector plug-in is an implementation that can dynamically load the engine connector and reduce the occurrence of version conflicts. It has the characteristics of convenient expansion, fast refresh, and selective loading. In order to allow developers to freely extend Linkis's Engine engine, and dynamically load engine dependencies to avoid version conflicts, the EngineConnPlugin was designed and developed, allowing new engines to be introduced into the execution life cycle of computing middleware by implementing established plug-in interfaces.",source:"@site/docs/architecture/computation_governance_services/engine/engine_conn_plugin.md",sourceDirName:"architecture/computation_governance_services/engine",slug:"/architecture/computation_governance_services/engine/engine_conn_plugin",permalink:"/docs/next/architecture/computation_governance_services/engine/engine_conn_plugin",editUrl:"https://github.com/apache/incubator-linkis-website/edit/master/docs/architecture/computation_governance_services/engine/engine_conn_plugin.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"EngineConnPlugin (ECP) Design",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"EngineConnManager Design",permalink:"/docs/next/architecture/computation_governance_services/engine/engine_conn_manager"},next:{title:"Overview",permalink:"/docs/next/architecture/computation_governance_services/linkis_manager/overview"}},u=[{value:"EngineConn-Plugin-Server",id:"engineconn-plugin-server",children:[]},{value:"EngineConn-Plugin-Loader Engine Connector Plugin Loader",id:"engineconn-plugin-loader-engine-connector-plugin-loader",children:[]},{value:"EngineConn-Plugin-Cache engine plug-in cache module",id:"engineconn-plugin-cache-engine-plug-in-cache-module",children:[]},{value:"EngineConn-Plugin-Core: Engine connector plug-in core module",id:"engineconn-plugin-core-engine-connector-plug-in-core-module",children:[]},{value:"EngineConn-Plugins: Engine connection plugin collection",id:"engineconn-plugins-engine-connection-plugin-collection",children:[]}],s={toc:u};function d(e){var n=e.components,a=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,i.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"engineconnplugin-ecp-architecture-design"},"EngineConnPlugin (ECP) architecture design"),(0,r.kt)("p",null,"The engine connector plug-in is an implementation that can dynamically load the engine connector and reduce the occurrence of version conflicts. It has the characteristics of convenient expansion, fast refresh, and selective loading. In order to allow developers to freely extend Linkis's Engine engine, and dynamically load engine dependencies to avoid version conflicts, the EngineConnPlugin was designed and developed, allowing new engines to be introduced into the execution life cycle of computing middleware by implementing established plug-in interfaces.\nThe plug-in interface disassembles the definition of the engine, including parameter initialization, allocation of engine resources, construction of engine connections, and setting of engine default tags."),(0,r.kt)("p",null,"\u4e00\u3001ECP architecture diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(4885).Z})),(0,r.kt)("h1",{id:"introduction-to-the-second-level-module"},"Introduction to the second-level module:"),(0,r.kt)("h2",{id:"engineconn-plugin-server"},"EngineConn-Plugin-Server"),(0,r.kt)("p",null,"The engine connector plug-in service is an entrance service that provides external registration plug-ins, management plug-ins, and plug-in resource construction. The engine plug-in that is successfully registered and loaded will contain the logic of resource allocation and startup parameter configuration. During the engine initialization process, EngineConn\nOther services such as Manager call the logic of the corresponding plug-in in Plugin Server through RPC requests."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnLaunchService"),(0,r.kt)("td",{parentName:"tr",align:null},"Responsible for building the engine connector launch request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnResourceFactoryService"),(0,r.kt)("td",{parentName:"tr",align:null},"Responsible for generating engine resources")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnResourceService"),(0,r.kt)("td",{parentName:"tr",align:null},"Responsible for downloading the resource files used by the engine connector from BML")))),(0,r.kt)("h2",{id:"engineconn-plugin-loader-engine-connector-plugin-loader"},"EngineConn-Plugin-Loader Engine Connector Plugin Loader"),(0,r.kt)("p",null,"The engine connector plug-in loader is a loader used to dynamically load the engine connector plug-ins according to request parameters, and has the characteristics of caching. The specific loading process is mainly composed of two parts: 1) Plug-in resources such as the main program package and program dependency packages are loaded locally (not open). 2) Plug-in resources are dynamically loaded from the local into the service process environment, for example, loaded into the JVM virtual machine through a class loader.\n| Core Class                          | Core Function                                     |\n|---------------------------------|----------------------------------------------|\n| EngineConnPluginsResourceLoader | Load engine connector plug-in resources                       |\n| EngineConnPluginsLoader         | Load the engine connector plug-in instance, or load an existing one from the cache |\n| EngineConnPluginClassLoader     | Dynamically instantiate engine connector instance from jar              |"),(0,r.kt)("h2",{id:"engineconn-plugin-cache-engine-plug-in-cache-module"},"EngineConn-Plugin-Cache engine plug-in cache module"),(0,r.kt)("p",null,"Engine connector plug-in cache is a cache service specially used to cache loaded engine connectors, and supports the ability to read, update, and remove. The plug-in that has been loaded into the service process will be cached together with its class loader to prevent multiple loading from affecting efficiency; at the same time, the cache module will periodically notify the loader to update the plug-in resources. If changes are found, it will be reloaded and refreshed automatically Cache."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnPluginCache"),(0,r.kt)("td",{parentName:"tr",align:null},"Cache loaded engine connector instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RefreshPluginCacheContainer"),(0,r.kt)("td",{parentName:"tr",align:null},"Engine connector that refreshes the cache regularly")))),(0,r.kt)("h2",{id:"engineconn-plugin-core-engine-connector-plug-in-core-module"},"EngineConn-Plugin-Core: Engine connector plug-in core module"),(0,r.kt)("p",null,"The engine connector plug-in core module is the core module of the engine connector plug-in. Contains the implementation of the basic functions of the engine plug-in, such as the construction of the engine connector start command, the construction of the engine resource factory and the implementation of the core interface of the engine connector plug-in.\n| Core Class                  | Core Function                                                 |\n|-------------------------|----------------------------------------------------------|\n| EngineConnLaunchBuilder | Build Engine Connector Launch Request                                   |\n| EngineConnFactory       | Create Engine Connector                                           |\n| EngineConnPlugin        | The engine connector plug-in implements the interface, including resources, commands, and instance construction methods. |\n| EngineResourceFactory   | Engine Resource Creation Factory                                       |"),(0,r.kt)("h2",{id:"engineconn-plugins-engine-connection-plugin-collection"},"EngineConn-Plugins: Engine connection plugin collection"),(0,r.kt)("p",null,"The engine connection plug-in collection is used to place the default engine connector plug-in library that has been implemented based on the plug-in interface defined by us. Provides the default engine connector implementation, such as jdbc, spark, python, shell, etc. Users can refer to the implemented cases based on their own needs to implement more engine connectors.\n| Core Class              | Core Function         |\n|---------------------|------------------|\n| engineplugin-jdbc   | jdbc engine connector   |\n| engineplugin-shell  | Shell engine connector  |\n| engineplugin-spark  | spark engine connector  |\n| engineplugin-python | python engine connector |"))}d.isMDXComponent=!0},4885:function(e,n,t){n.Z=t.p+"assets/images/linkis-engineConnPlugin-01-1142cb4007b9b71503646f791a0fc367.png"}}]);