"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[99597],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),k=r,g=u["".concat(s,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},27855:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"Recommended Configuration",sidebar_position:3},i="1. Recommended configuration of hardware and software environment",o={unversionedId:"about/configuration",id:"about/configuration",title:"Recommended Configuration",description:"Linkis builds a layer of computing middleware between the upper application and the underlying engine. As an open source distributed computing middleware, it can be well deployed and run on Intel architecture servers and mainstream virtualization environments, and supports mainstream Linux operating system environments",source:"@site/docs/about/configuration.md",sourceDirName:"about",slug:"/about/configuration",permalink:"/docs/1.3.1/about/configuration",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/about/configuration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Recommended Configuration",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Version Overview",permalink:"/docs/1.3.1/about/release"},next:{title:"Glossary",permalink:"/docs/1.3.1/about/glossary"}},s={},d=[{value:"1.1. Linux operating system version requirements",id:"11-linux-operating-system-version-requirements",level:2},{value:"1.2. Server recommended configuration",id:"12-server-recommended-configuration",level:2},{value:"Production Environment",id:"production-environment",level:3},{value:"1.3. Software requirements",id:"13-software-requirements",level:2},{value:"1.4. Client web browser requirements",id:"14-client-web-browser-requirements",level:2},{value:"2.1 Open test mode",id:"21-open-test-mode",level:2},{value:"2.2 Login user settings",id:"22-login-user-settings",level:2},{value:"2.3 LDAP Settings",id:"23-ldap-settings",level:2},{value:"2.4 Turn off resource checking",id:"24-turn-off-resource-checking",level:2},{value:"2.5 Enable engine debugging",id:"25-enable-engine-debugging",level:2},{value:"2.6 Hive metadata configuration",id:"26-hive-metadata-configuration",level:2},{value:"2.7 Linkis database configuration",id:"27-linkis-database-configuration",level:2},{value:"2.8 Linkis Session cache configuration",id:"28-linkis-session-cache-configuration",level:2},{value:"2.9 Linkis module development configuration",id:"29-linkis-module-development-configuration",level:2},{value:"2.10 Linkis module development configuration",id:"210-linkis-module-development-configuration",level:2},{value:"2.11 Linkis file system and material storage path",id:"211-linkis-file-system-and-material-storage-path",level:2}],p={toc:d};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1-recommended-configuration-of-hardware-and-software-environment"},"1. Recommended configuration of hardware and software environment"),(0,r.kt)("p",null,"Linkis builds a layer of computing middleware between the upper application and the underlying engine. As an open source distributed computing middleware, it can be well deployed and run on Intel architecture servers and mainstream virtualization environments, and supports mainstream Linux operating system environments"),(0,r.kt)("h2",{id:"11-linux-operating-system-version-requirements"},"1.1. Linux operating system version requirements"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"OS"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Red Hat Enterprise Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"7.0 and above")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CentOS"),(0,r.kt)("td",{parentName:"tr",align:null},"7.0 and above")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oracle Enterprise Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"7.0 and above")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu LTS"),(0,r.kt)("td",{parentName:"tr",align:null},"16.04 and above")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," The above Linux operating systems can run on physical servers and mainstream virtualization environments such as VMware, KVM, and XEN")),(0,r.kt)("h2",{id:"12-server-recommended-configuration"},"1.2. Server recommended configuration"),(0,r.kt)("p",null,"Linkis supports 64-bit general-purpose hardware server platforms running on the Intel x86-64 architecture. The following recommendations are made for the server hardware configuration of the production environment:"),(0,r.kt)("h3",{id:"production-environment"},"Production Environment"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"CPU")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Memory")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Disk type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Network")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Number of instances")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"16 cores +"),(0,r.kt)("td",{parentName:"tr",align:null},"32GB +"),(0,r.kt)("td",{parentName:"tr",align:null},"SAS"),(0,r.kt)("td",{parentName:"tr",align:null},"Gigabit network card"),(0,r.kt)("td",{parentName:"tr",align:null},"1+")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"The above recommended configuration is the minimum configuration for deploying Linkis, and a higher configuration is strongly recommended for production environments"),(0,r.kt)("li",{parentName:"ul"},"The hard disk size configuration is recommended to be 50GB+, and the system disk and data disk are separated"))),(0,r.kt)("h2",{id:"13-software-requirements"},"1.3. Software requirements"),(0,r.kt)("p",null,"Linkis binary packages are compiled based on the following software versions:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Component"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hadoop"),(0,r.kt)("td",{parentName:"tr",align:null},"2.7.2"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hive"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.3"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Spark"),(0,r.kt)("td",{parentName:"tr",align:null},"2.4.3"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Flink"),(0,r.kt)("td",{parentName:"tr",align:null},"1.12.2"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openLooKeng"),(0,r.kt)("td",{parentName:"tr",align:null},"1.5.0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sqoop"),(0,r.kt)("td",{parentName:"tr",align:null},"1.4.6"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ElasticSearch"),(0,r.kt)("td",{parentName:"tr",align:null},"7.6.2"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Presto"),(0,r.kt)("td",{parentName:"tr",align:null},"0.234"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"Python2"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:"),"\nIf the locally installed component version is inconsistent with the above, you need to modify the corresponding component version and compile the binary package yourself for installation.")),(0,r.kt)("h2",{id:"14-client-web-browser-requirements"},"1.4. Client web browser requirements"),(0,r.kt)("p",null,"Linkis recommends Chrome version 73 for front-end access"),(0,r.kt)("h1",{id:"2-common-scenarios"},"2. Common scenarios"),(0,r.kt)("h2",{id:"21-open-test-mode"},"2.1 Open test mode"),(0,r.kt)("p",null,"The development process requires a password-free interface, which can be replaced or appended to ",(0,r.kt)("inlineCode",{parentName:"p"},"linkis.properties")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.test.mode"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable debugging mode, if set to true, all microservices support password-free login, and all EngineConn open remote debugging ports")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.test.user"),(0,r.kt)("td",{parentName:"tr",align:null},"hadoop"),(0,r.kt)("td",{parentName:"tr",align:null},"When wds.linkis.test.mode=true, the default login user for password-free login")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(73378).Z,width:"806",height:"339"})),(0,r.kt)("h2",{id:"22-login-user-settings"},"2.2 Login user settings"),(0,r.kt)("p",null,"Apache Linkis uses configuration files to manage admin users by default, and this configuration can be replaced or appended to ",(0,r.kt)("inlineCode",{parentName:"p"},"linkis-mg-gateway.properties"),". For multi-user access LDAP implementation."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.admin.user"),(0,r.kt)("td",{parentName:"tr",align:null},"hadoop"),(0,r.kt)("td",{parentName:"tr",align:null},"admin username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.admin.password"),(0,r.kt)("td",{parentName:"tr",align:null},"123456"),(0,r.kt)("td",{parentName:"tr",align:null},"Admin user password")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(91455).Z,width:"1421",height:"583"})),(0,r.kt)("h2",{id:"23-ldap-settings"},"2.3 LDAP Settings"),(0,r.kt)("p",null,"Apache Linkis can access LDAP through parameters to achieve multi-user management, and this configuration can be replaced or added in ",(0,r.kt)("inlineCode",{parentName:"p"},"linkis-mg-gateway.properties"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.ldap.proxy.url"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"LDAP URL address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.ldap.proxy.baseDN"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"LDAP baseDN address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.ldap.proxy.userNameFormat"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(49282).Z,width:"1404",height:"586"})),(0,r.kt)("h2",{id:"24-turn-off-resource-checking"},"2.4 Turn off resource checking"),(0,r.kt)("p",null,"Apache Linkis sometimes debugs exceptions when submitting tasks, such as: insufficient resources; you can replace or append this configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"linkis-cg-linkismanager.properties"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.manager.rm.request.enable"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"resource check")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(74357).Z,width:"1305",height:"547"})),(0,r.kt)("h2",{id:"25-enable-engine-debugging"},"2.5 Enable engine debugging"),(0,r.kt)("p",null,"Apache Linkis EC can enable debugging mode, and this configuration can be replaced or added in ",(0,r.kt)("inlineCode",{parentName:"p"},"linkis-cg-linkismanager.properties"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.engineconn.debug.enable"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable engine debugging")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(84013).Z,width:"1220",height:"544"})),(0,r.kt)("h2",{id:"26-hive-metadata-configuration"},"2.6 Hive metadata configuration"),(0,r.kt)("p",null,"The public-service service of Apache Linkis needs to read hive metadata; this configuration can be replaced or appended in ",(0,r.kt)("inlineCode",{parentName:"p"},"linkis-ps-publicservice.properties"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hive.meta.url"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"The URL of the HiveMetaStore database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hive.meta.user"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"user of the HiveMetaStore database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hive.meta.password"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"password for the HiveMetaStore database")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(62887).Z,width:"1183",height:"779"})),(0,r.kt)("h2",{id:"27-linkis-database-configuration"},"2.7 Linkis database configuration"),(0,r.kt)("p",null,"Apache Linkis access uses Mysql as data storage by default, you can replace or append this configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"linkis.properties"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mybatis.datasource.url"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Database connection string, for example: jdbc:mysql://127.0.0.1:3306/dss?characterEncoding=UTF-8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mybatis.datasource.username"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Database user name, for example: root")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mybatis.datasource.password"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Database password, for example: root")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(82383).Z,width:"831",height:"536"})),(0,r.kt)("h2",{id:"28-linkis-session-cache-configuration"},"2.8 Linkis Session cache configuration"),(0,r.kt)("p",null,"Apache Linkis supports using redis for session sharing; this configuration can be replaced or appended in ",(0,r.kt)("inlineCode",{parentName:"p"},"linkis.properties"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"linkis.session.redis.cache.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"linkis.session.redis.host"),(0,r.kt)("td",{parentName:"tr",align:null},"127.0.0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"hostname")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"linkis.session.redis.port"),(0,r.kt)("td",{parentName:"tr",align:null},"6379"),(0,r.kt)("td",{parentName:"tr",align:null},"Port, eg")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"linkis.session.redis.password"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"password")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(57594).Z,width:"753",height:"403"})),(0,r.kt)("h2",{id:"29-linkis-module-development-configuration"},"2.9 Linkis module development configuration"),(0,r.kt)("p",null,"When developing Apache Linkis, you can use this parameter to customize the database, Rest interface, and entity objects of the loading module; you can modify it in ",(0,r.kt)("inlineCode",{parentName:"p"},"linkis-ps-publicservice.properties"),", and use commas to separate multiple modules."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.restful.scan.packages"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"restful scan packages, for example: org.apache.linkis.basedatamanager.server.restful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mybatis.mapperLocations"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Mybatis mapper file path, for example: classpath",(0,r.kt)("em",{parentName:"td"},":org/apache/linkis/basedatamanager/server/dao/mapper/"),".xml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mybatis.typeAliasesPackage"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Entity alias scanning package, for example: org.apache.linkis.basedatamanager.server.domain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mybatis.BasePackage"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Database dao layer scan, for example: org.apache.linkis.basedatamanager.server.dao")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(11588).Z,width:"843",height:"590"})),(0,r.kt)("h2",{id:"210-linkis-module-development-configuration"},"2.10 Linkis module development configuration"),(0,r.kt)("p",null,"This parameter can be used to customize the route of loading modules during Apache Linkis development; it can be modified in ",(0,r.kt)("inlineCode",{parentName:"p"},"linkis.properties"),", and commas are used to separate multiple modules."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.gateway.conf.publicservice.list"),(0,r.kt)("td",{parentName:"tr",align:null},"cs,contextservice,data-source-manager,metadataQuery,metadatamanager,query,jobhistory,application,configuration,filesystem,udf,variable,microservice,errorcode,bml,datasource,basedata -manager"),(0,r.kt)("td",{parentName:"tr",align:null},"publicservice services support routing modules")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(70084).Z,width:"1205",height:"461"})),(0,r.kt)("h2",{id:"211-linkis-file-system-and-material-storage-path"},"2.11 Linkis file system and material storage path"),(0,r.kt)("p",null,"This parameter can be used to customize the route of loading modules during Apache Linkis development; it can be modified in ",(0,r.kt)("inlineCode",{parentName:"p"},"linkis.properties"),", and commas are used to separate multiple modules."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.filesystem.root.path"),(0,r.kt)("td",{parentName:"tr",align:null},"file:///tmp/linkis/"),(0,r.kt)("td",{parentName:"tr",align:null},"Local user directory, a folder named after the user name needs to be created under this directory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.filesystem.hdfs.root.path"),(0,r.kt)("td",{parentName:"tr",align:null},"hdfs:///tmp/"),(0,r.kt)("td",{parentName:"tr",align:null},"HDFS user directory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.bml.is.hdfs"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable hdfs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.bml.hdfs.prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"/apps-data"),(0,r.kt)("td",{parentName:"tr",align:null},"hdfs path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.bml.local.prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"/apps-data"),(0,r.kt)("td",{parentName:"tr",align:null},"local path")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(34293).Z,width:"540",height:"344"})))}m.isMDXComponent=!0},11588:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deverlop-conf-09543dc2b1c9e5b57ffbc9f87a402873.png"},84013:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/engine-debug-d6d34a5e0ff4318bee1c2ec6145d2aad.png"},34293:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fs-conf-4dd57caa5f812496174bda5b25d6f36b.png"},62887:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hive-meta-d9866b2a627ba0e9323b902bce2c5c94.png"},49282:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ldap-d8623897124ad621c0013d7e35c3bc22.png"},82383:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/linkis-db-c9e5a90db880655bc6169b28fbc5822c.png"},70084:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/list-conf-63213b57ab66a41758c14cdb731a9731.png"},91455:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/login-user-058dbc811831c9c5a3d647032f4b77a0.png"},57594:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/redis-93c88ca8d619cc6b131b5b77d31097c3.png"},74357:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/resource-enable-548b1bfdb4f8e206c4ddbd4485f65a73.png"},73378:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/test-mode-ab84afe3444112b960a11dc9c04d24b1.png"}}]);