"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[9947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=i,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},33345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={title:"Python Engine",sidebar_position:2},a=void 0,s={unversionedId:"engine-usage/python",id:"version-0.11.0/engine-usage/python",title:"Python Engine",description:"1 Use of Python Engine",source:"@site/versioned_docs/version-0.11.0/engine-usage/python.md",sourceDirName:"engine-usage",slug:"/engine-usage/python",permalink:"/docs/0.11.0/engine-usage/python",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-0.11.0/engine-usage/python.md",tags:[],version:"0.11.0",sidebarPosition:2,frontMatter:{title:"Python Engine",sidebar_position:2},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Hive Engine",permalink:"/docs/0.11.0/engine-usage/hive"},next:{title:"Spark Engine",permalink:"/docs/0.11.0/engine-usage/spark"}},l={},p=[{value:"1 Use of Python Engine",id:"1-use-of-python-engine",level:2},{value:"1.1 Environment variable configuration",id:"11-environment-variable-configuration",level:3},{value:"1.2 Dependent service startup",id:"12-dependent-service-startup",level:3},{value:"1.3 Custom parameter configuration",id:"13-custom-parameter-configuration",level:3},{value:"1.4 Determination of python execution path",id:"14-determination-of-python-execution-path",level:3},{value:"1.5 Front-end deployment",id:"15-front-end-deployment",level:3},{value:"1.6 running examples",id:"16-running-examples",level:3},{value:"2 Implementation of Python engine",id:"2-implementation-of-python-engine",level:2},{value:"3 Future goals",id:"3-future-goals",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-use-of-python-engine"},"1 Use of Python Engine"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Many users of the current big data platform choose to use python for data analysis, so Linkis natively implements the python execution engine."),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Users use the python engine provided by Linkis to submit a stand-alone python program to the server and execute it, and the python engine will display the executed log and printed results to the user Check."),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","If you want to use the Linkis system to execute the python program, you need to download the Linkis release installation package and configure, install and start the specified microservice."),(0,i.kt)("h3",{id:"11-environment-variable-configuration"},"1.1 Environment variable configuration"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The execution of Python in principle does not need to specify the environment variables of the hadoop ecosystem. If you want to store the result set in hdfs, you also need to configure HADOOP_HOME and HADOOP_CONF_DIR Configuration information."),(0,i.kt)("p",null,"You can set it in the linkis.properties configuration file in the /home/${USER}/.bash_rc or linkis-ujes-spark-enginemanager/conf directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"HADOOP_HOME=${Real hadoop configuration directory}\nHADOOP_CONF_DIR=${Real hadoop installation directory}\n")),(0,i.kt)("h3",{id:"12-dependent-service-startup"},"1.2 Dependent service startup"),(0,i.kt)("p",null,"The startup of the Python engine requires the following Linkis microservices:"),(0,i.kt)("p",null,"-1), Eureka: Used for service registration and discovery.\n-2), Linkis-gateway: used for user request forwarding.\n-3) Linkis-publicService: Provides basic functions such as persistence and udf.\n-4) Linkis-ResourceManager: Provides Linkis resource management functions."),(0,i.kt)("h3",{id:"13-custom-parameter-configuration"},"1.3 Custom parameter configuration"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Linkis has opened an interface, allowing users to set the relevant parameters of the engine, so as to more freely configure according to the cluster information."),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","For example, how many engines can be started by an engine manager or how much memory can be used in total, etc."),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Users can do this by setting the parameters in the following table:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,i.kt)("th",{parentName:"tr",align:null},"Reference value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"wds.linkis.enginemanager.memory.max"),(0,i.kt)("td",{parentName:"tr",align:null},"40G"),(0,i.kt)("td",{parentName:"tr",align:null},"Used to specify the total memory of the client of all engines started by hiveEM")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"wds.linkis.enginemanager.cores.max"),(0,i.kt)("td",{parentName:"tr",align:null},"20"),(0,i.kt)("td",{parentName:"tr",align:null},"Used to specify the total number of CPU cores of the clients of all engines started by hiveEM")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"wds.linkis.enginemanager.engine.instances.max"),(0,i.kt)("td",{parentName:"tr",align:null},"10"),(0,i.kt)("td",{parentName:"tr",align:null},"Used to specify the number of engines that hiveEM can start")))),(0,i.kt)("h3",{id:"14-determination-of-python-execution-path"},"1.4 Determination of python execution path"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The python environment in the user cluster is very different. Liniks recommends that users use the anaconda release version."),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","In addition, users can specify the path of the python interpreter in the configuration file linkis-engine.properties of pythonEngineManger. The specific method is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"python.script=$(Real python parser path, such as /usr/bin/python)\n")),(0,i.kt)("h3",{id:"15-front-end-deployment"},"1.5 Front-end deployment"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","After the above microservices are successfully launched and deployed, users need to submit their python code through a web browser. You can deploy another open source front-end product ","[Scriptis]","(",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Scriptis/blob/master/docs/zh_CN/ch1/%E5%89%8D%E5%8F%B0%25"},"https://github.com/WeBankFinTech/Scriptis/blob/master/docs/zh_CN/ch1/%E5%89%8D%E5%8F%B0%")," E9%83%A8%E7%BD%B2%E6%96%87%E6%A1%A3.md), this product allows users to edit and submit execution codes on web pages, and receive the background in real time Information given."),(0,i.kt)("h3",{id:"16-running-examples"},"1.6 running examples"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","In the web browser, open the address of scriptis, the user can create a new python script in the workspace on the left column and write the script code in the script editing area, and the writing is complete After that, click Run to submit your code to the Linkis background for execution. After submission, the background will push the log, progress, status and other information to the user in real time via websocket. And after finishing, show the result to the user."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Python running effect chart 1",src:n(46875).Z,width:"1594",height:"899"}),(0,i.kt)("br",null),"\nFigure 2 Python running effect figure 2"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Python running effect chart 1",src:n(95300).Z,width:"1325",height:"921"}),(0,i.kt)("br",null),"\nFigure 3 Spark running effect Figure 2"),(0,i.kt)("h2",{id:"2-implementation-of-python-engine"},"2 Implementation of Python engine"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The implementation of the Linkis-Python execution engine is based on ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.11.0/development/new-engine-conn"},"How to implement a new engine")," to implement the Entrance, EngineManager and Engine three The necessary interface of the module."),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The implementation of the execution module uses the py4j framework to allow the python executor to interact with the JVM. After the user submits the code, the JVM submits the code to the py4j framework The python interpreter executes and gets the output or error message from the python process."),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Specifically, you can view the python.py source code in the python execution source code. There are several python methods defined by Linkis for process interaction."),(0,i.kt)("h2",{id:"3-future-goals"},"3 Future goals"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The deployment method is simpler, try to use the containerized method."),(0,i.kt)("li",{parentName:"ol"},"Support the submission of spark jar package"),(0,i.kt)("li",{parentName:"ol"},"Better support the submission of spark's yarn-cluster mode.")))}c.isMDXComponent=!0},46875:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/python_run1-7b5130653f82b6cdc9427b1cea65d6ad.png"},95300:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/python_run2-f9edde34fa0037c8e7c9d00ce241aa3c.png"}}]);