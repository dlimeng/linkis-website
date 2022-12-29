"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[61686],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return n?r.createElement(h,a(a({ref:t},m),{},{components:n})):r.createElement(h,a({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"Overview",sidebar_position:0},a=void 0,s={unversionedId:"tuning-and-troubleshooting/overview",id:"version-1.1.1/tuning-and-troubleshooting/overview",title:"Overview",description:"Tuning and troubleshooting",source:"@site/versioned_docs/version-1.1.1/tuning-and-troubleshooting/overview.md",sourceDirName:"tuning-and-troubleshooting",slug:"/tuning-and-troubleshooting/overview",permalink:"/docs/1.1.1/tuning-and-troubleshooting/overview",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.1.1/tuning-and-troubleshooting/overview.md",tags:[],version:"1.1.1",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Upgrade From 0.X To 1.0 Guide",permalink:"/docs/1.1.1/upgrade/upgrade-from-0.X-to-1.0-guide"},next:{title:"Configurations",permalink:"/docs/1.1.1/tuning-and-troubleshooting/configuration"}},l={},c=[{value:"Tuning and troubleshooting",id:"tuning-and-troubleshooting",level:2},{value:"\u2160. How to locate the exception log",id:"\u2170-how-to-locate-the-exception-log",level:3},{value:"\u2161. community issue column search keywords",id:"\u2171-community-issue-column-search-keywords",level:3},{value:"\u2162. &quot;Q&amp;A Question Summary&quot;",id:"\u2172-qa-question-summary",level:3},{value:"\u2163. Locating system log",id:"\u2173-locating-system-log",level:3},{value:"\u2164. Community user group consultation and communication",id:"\u2174-community-user-group-consultation-and-communication",level:3},{value:"\u2165. locate the source code by remote debug",id:"\u2175-locate-the-source-code-by-remote-debug",level:3}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"tuning-and-troubleshooting"},"Tuning and troubleshooting"),(0,o.kt)("p",null,"In the process of preparing for the release of a version, we will try our best to find deployment and installation problems in advance and then repair them. Because everyone has some differences in the deployment environments, we sometimes have no way to predict all the problems and solutions in advance. However, due to the existence of the community, many of your problems will overlap. Perhaps the installation and deployment problems you have encountered have already been discovered and solved by users. Therefore, for some problems that cannot be accurately located by themselves, the basic idea and priority of the recommended troubleshooting steps can be: ",(0,o.kt)("strong",{parentName:"p"},"Search keywords in the community issue catalog \u2014",">",'Check the "Q\\&A Problem Summary" document in the community\u2014',">","Locate system log\u2014",">","Community user group consultation and communication\u2014",">","Locate source code and do remote debug")),(0,o.kt)("h3",{id:"\u2170-how-to-locate-the-exception-log"},"\u2160. How to locate the exception log"),(0,o.kt)("p",null,"If an interface request reports an error, we can locate the problematic microservice based on the return of the interface. Under normal circumstances, we can ",(0,o.kt)("strong",{parentName:"p"},"locate according to the URL specification. "),"URLs in the Linkis interface follow certain design specifications. That is, the format of ",(0,o.kt)("strong",{parentName:"p"},"/api/rest_j/v1/{applicationName}/.+"),", the application name can be located through applicationName. Some applications themselves are microservices. At this time, the application name is the same as the microservice name, and part of the application itself is a microservice, at this time, you should find the belonging microservice by the application name, and check the log under the corresponding microservice. The corresponding relationship between the microservice and the application name is given below."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"ApplicationName")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Microservice")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cg-linkismanager"),(0,o.kt)("td",{parentName:"tr",align:null},"cg-linkismanager")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cg-engineplugin"),(0,o.kt)("td",{parentName:"tr",align:null},"cg-engineplugin")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,o.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cg-entrance"),(0,o.kt)("td",{parentName:"tr",align:null},"cg-entrance")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ps-bml"),(0,o.kt)("td",{parentName:"tr",align:null},"ps-bml")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ps-cs"),(0,o.kt)("td",{parentName:"tr",align:null},"ps-cs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ps-datasource"),(0,o.kt)("td",{parentName:"tr",align:null},"ps-datasource")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"configuration"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"instance-label"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"jobhistory"),(0,o.kt)("td",{parentName:"tr",align:null},"ps-publicservice")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"variable"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"udf"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h3",{id:"\u2171-community-issue-column-search-keywords"},"\u2161. community issue column search keywords"),(0,o.kt)("p",null,"On the homepage of the github community, the issue column retains some of the problems and solutions encountered by community users, which is very suitable for quickly finding solutions after encountering problems, just search for keywords that report errors in the filter filter."),(0,o.kt)("h3",{id:"\u2172-qa-question-summary"},'\u2162. "Q\\&A Question Summary"'),(0,o.kt)("p",null,'"Linkis 1.0 FAQ", this document contains a summary of common problems and solutions during the installation and deployment process.'),(0,o.kt)("h3",{id:"\u2173-locating-system-log"},"\u2163. Locating system log"),(0,o.kt)("p",null,"Generally, errors can be divided into three stages: an error is reported when installing and executing install.sh, an error is reported when the microservice is started, and an error is reported when the engine is started."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"An error occurred when executing install.sh"),", usually in the following situations"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Missing environment variables: For example, the environment of java/python/Hadoop/hive/spark needs to be configured under the standard version, and the corresponding verification operation will be performed when the script is installed. If you encounter this kind of problem, there will be a lot of problems. Clear prompts for missing environment variables, such as exception -bash\nspark-submit: command not found, etc.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The system version does not match: Linkis currently supports most versions of Linux.\nThe compatibility of the os version is the best, and some system versions may have command incompatibility. For example, the poor compatibility of yum in ubantu may cause yum-related errors in the installation and deployment. In addition, it is also recommended not to use windows as much as possible. Deploying linkis, currently no script is fully compatible with the .bat command.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Missing configuration item: There are two configuration files that need to be modified in linkis1.0 version, linkis-env.sh and db.sh"),(0,o.kt)("p",{parentName:"li"},"The former contains the environment parameters that linkis needs to load during execution, and the latter is the database information that linkis itself needs to store related tables. Under normal circumstances, if the corresponding configuration is missing, the error message will show an exception related to the Key value. For example, when db.sh does not fill in the relevant database configuration, unknow will appear mysql server host \u2018-P\u2019 is abnormal, which is caused by missing host.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Report error when starting microservice")),(0,o.kt)("p",{parentName:"li"},"Linkis puts the log files of all microservices into the logs directory. The log directory levels are as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 linkis-computation-governance\n\u2502 \u251c\u2500\u2500 linkis-cg-engineconnmanager\n\u2502 \u251c\u2500\u2500 linkis-cg-engineplugin\n\u2502 \u251c\u2500\u2500 linkis-cg-entrance\n\u2502 \u2514\u2500\u2500 linkis-cg-linkismanager\n\u251c\u2500\u2500 linkis-public-enhancements\n\u2502 \u251c\u2500\u2500 linkis-ps-bml\n\u2502 \u251c\u2500\u2500 linkis-ps-cs\n\u2502 \u251c\u2500\u2500 linkis-ps-datasource\n\u2502 \u2514\u2500\u2500 linkis-ps-publicservice\n\u2514\u2500\u2500 linkis-spring-cloud-services\n\u2502 \u251c\u2500\u2500 linkis-mg-eureka\n\u2514\u2500\u251c\u2500\u2500 linkis-mg-gateway\n")),(0,o.kt)("p",{parentName:"li"},"It includes three microservice modules: computing governance, public enhancement, and microservice management. Each microservice contains three logs, linkis-gc.log, linkis.log, and linkis.out, corresponding to the service's GC log, service log, and service System.out log."),(0,o.kt)("p",{parentName:"li"},"Under normal circumstances, when an error occurs when starting a microservice, you can cd to the corresponding service in the log directory to view the related log to troubleshoot the problem. Generally, the most frequently occurring problems can also be divided into three categories:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Port Occupation"),": Since the default port of Linkis microservices is mostly concentrated at 9000, it is necessary to check whether the port of each microservice is occupied by other microservices before starting. If it is occupied, you need to change conf/ The microservice port corresponding to the linkis-env.sh file")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Necessary configuration parameters are missing"),": For some microservices, certain user-defined parameters must be loaded before they can be started normally. For example, the linkis-cg-engineplugin microservice will load conf/ when it starts. For the configuration related to wds.linkis.engineconn.","*"," in linkis.properties, if the user changes the Linkis path after installation, if the configuration does not correspond to the modification, an error will be reported when the linkis-cg-engineplugin microservice is started.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"System environment is not compatible"),': It is recommended that users refer to the recommended system and application versions in the official documents as much as possible when deploying and installing, and install necessary system plug-ins, such as expect, yum, etc. If the application version is not compatible, It may cause errors related to the application. For example, the incompatibility of SQL statements in the mysql5.7 version may cause errors in the linkis.ddl and linkis.dml files when initializing the db during the installation process. You need to refer to the "Q\\&A Problem Summary" or the deployment documentation to make the corresponding settings.')))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Report error during microservice execution period")),(0,o.kt)("p",{parentName:"li"},"The situation of error reporting during the execution of microservices is more complicated, and the situations encountered are also different depending on the environment, but the troubleshooting methods are basically the same. Starting from the corresponding microservice error catalog, we can roughly divide it into three situations:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Manually installed and deployed microservices report errors"),": The logs of this type of microservice are unified under the log/ directory. After locating the microservice, enter the corresponding directory to view it.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"engine start failure"),": insufficient resources, request engine failure: When this type of error occurs, it is not necessarily due to insufficient resources, because the front end will only grab the logs after the Spring project is started, for errors before the engine is started cannot be fetched well. There are three kinds of high-frequency problems found in the actual use process of internal test users:"),(0,o.kt)("p",{parentName:"li"},"a. ",(0,o.kt)("strong",{parentName:"p"},"The engine cannot be created because there is no engine directory permission"),": The log will be printed to the linkis.out file under the cg-engineconnmanager microservice. You need to enter the file to view the specific reason."),(0,o.kt)("p",{parentName:"li"},"b. ",(0,o.kt)("strong",{parentName:"p"},"There is a dependency conflict in the engine lib package"),", ",(0,o.kt)("strong",{parentName:"p"},"The server cannot start normally because of insufficient memory resources: "),"Since the engine directory has been created, the log will be printed to the stdout file under the engine, and the engine path can refer to c"),(0,o.kt)("p",{parentName:"li"},"c. ",(0,o.kt)("strong",{parentName:"p"},"Errors reported during engine execution"),": Each started engine is a microservice that is dynamically loaded and started during runtime. When the engine is started, if an error occurs, you need to find the corresponding log of the engine in the corresponding startup user directory. The corresponding root path is ",(0,o.kt)("strong",{parentName:"p"},"ENGINECONN_ROOT_PATH")," filled in ",(0,o.kt)("strong",{parentName:"p"},"linkis-env")," before installation. If you need to modify the path after installation, you need to modify wds.linkis.engineconn.root.dir in linkis.properties."))))),(0,o.kt)("h3",{id:"\u2174-community-user-group-consultation-and-communication"},"\u2164. Community user group consultation and communication"),(0,o.kt)("p",null,"For problems that cannot be resolved according to the above process positioning during the installation and deployment process, you can send error messages in our community group. In order to facilitate community partners and developers to help solve them and improve efficiency, it is recommended that when you ask questions, You can describe the problem phenomenon, related log information, and the places that have been checked are sent out together. If you think it may be an environmental problem, you need to list the corresponding application version together**. We provide two online groups: WeChat group and QQ group. The communication channels and specific contact information can be found at the bottom of the Linkis github homepage."),(0,o.kt)("h3",{id:"\u2175-locate-the-source-code-by-remote-debug"},"\u2165. locate the source code by remote debug"),(0,o.kt)("p",null,"Under normal circumstances, remote debugging of source code is the most effective way to locate problems, but compared to document review, users need to have a certain understanding of the source code structure. It is recommended that you check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.1.1/deployment/sourcecode-hierarchical-structure"},"Linkis source code level detailed structure")," in the Linkis WIKI before remote debugging.After having a certain degree of familiarity to the the source code structure of the project, after a certain degree of familiarity, you can refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.1.1/development/linkis-debug"},"How to Debug Linkis"),"."))}p.isMDXComponent=!0}}]);