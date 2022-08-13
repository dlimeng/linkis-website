"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[77220],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),c=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),g=a,k=u["".concat(o,".").concat(g)]||u[g]||d[g]||s;return t?i.createElement(k,r(r({ref:n},p),{},{components:t})):i.createElement(k,r({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<s;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2422:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var i=t(87462),a=t(63366),s=(t(67294),t(3905)),r=["components"],l={title:"Linkis Debug In Mac",sidebar_position:2},o=void 0,c={unversionedId:"development/linkis-debug-in-mac",id:"development/linkis-debug-in-mac",isDocsHomePage:!1,title:"Linkis Debug In Mac",description:"Introduction: This article records in detail how to configure and start various microservices of Linkis in IDEA, and implement the submission and execution of scripts such as JDBC, Python, and Shell.",source:"@site/docs/development/linkis-debug-in-mac.md",sourceDirName:"development",slug:"/development/linkis-debug-in-mac",permalink:"/docs/1.2.0/development/linkis-debug-in-mac",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/development/linkis-debug-in-mac.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Linkis Debug In Mac",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction to Linkis Configuration Parameters",permalink:"/docs/1.2.0/development/linkis-config"},next:{title:"Linkis Debug",permalink:"/docs/1.2.0/development/linkis-debug"}},p=[{value:"1. Code debugging environment",id:"1-code-debugging-environment",children:[]},{value:"2. Prepare the code and compile",id:"2-prepare-the-code-and-compile",children:[]},{value:"3. Configure and start the service",id:"3-configure-and-start-the-service",children:[{value:"3.1 add mysql-connector-java to the classpath",id:"31-add-mysql-connector-java-to-the-classpath",children:[]},{value:"3.2 Adjust log4j2.xml configuration",id:"32-adjust-log4j2xml-configuration",children:[]},{value:"3.3 Start the eureka service",id:"33-start-the-eureka-service",children:[]},{value:"3.4 Start linkis-mg-gateway",id:"34-start-linkis-mg-gateway",children:[]},{value:"3.5 Start linkis-ps-publicservice",id:"35-start-linkis-ps-publicservice",children:[]},{value:"3.6 Start linkis-ps-cs",id:"36-start-linkis-ps-cs",children:[]},{value:"3.7 Start linkis-cg-linkismanager",id:"37-start-linkis-cg-linkismanager",children:[]},{value:"3.8 Start linkis-cg-entrance",id:"38-start-linkis-cg-entrance",children:[]},{value:"3.9 Start cg-engineconnmanager",id:"39-start-cg-engineconnmanager",children:[]},{value:"3.10 Start linkis-cg-engineplugin",id:"310-start-linkis-cg-engineplugin",children:[]},{value:"3.11 Key Configuration Modifications",id:"311-key-configuration-modifications",children:[]},{value:"3.12 Set sudo password-free for the current user",id:"312-set-sudo-password-free-for-the-current-user",children:[]},{value:"3.13 Service Testing",id:"313-service-testing",children:[]}]}],d={toc:p};function u(e){var n=e.components,l=(0,a.Z)(e,r);return(0,s.kt)("wrapper",(0,i.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Introduction: This article records in detail how to configure and start various microservices of Linkis in IDEA, and implement the submission and execution of scripts such as JDBC, Python, and Shell.")),(0,s.kt)("h2",{id:"1-code-debugging-environment"},"1. Code debugging environment"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Mac OS m1 chip, Linkis' ",(0,s.kt)("inlineCode",{parentName:"li"},"linkis-cg-engineplugin")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"linkis-cg-engineconnmanager")," services do not currently support debugging on Windows. You can refer to the development documentation on the official website for remote debugging."),(0,s.kt)("li",{parentName:"ul"},"Zulu openjdk 1.8"),(0,s.kt)("li",{parentName:"ul"},"maven3.6.3"),(0,s.kt)("li",{parentName:"ul"},"Linkis 1.1.x, this article theoretically supports local development and debugging of Linkis 1.0.3 and above")),(0,s.kt)("h2",{id:"2-prepare-the-code-and-compile"},"2. Prepare the code and compile"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:apache/incubator-linkis.git\ncd incubator-linkis\ngit checkout dev-1.2.0\n")),(0,s.kt)("p",null,"Clone the source code of Linkis to the local, and open it with IDEA. When you open the project for the first time, the dependency jar package required for the compilation of the Linkis project will be downloaded from the maven repository. When the dependent jar package is loaded, run the following compile and package command."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"mvn -N install\nmvn clean Install\n")),(0,s.kt)("p",null,"After the compilation command runs successfully, the compiled installation package can be found in the directory incubator-linkis/linkis-dist/target/: apache-linkis-version-incubating-bin.tar.gz"),(0,s.kt)("h2",{id:"3-configure-and-start-the-service"},"3. Configure and start the service"),(0,s.kt)("h3",{id:"31-add-mysql-connector-java-to-the-classpath"},"3.1 add mysql-connector-java to the classpath"),(0,s.kt)("p",null,"If the mysql driver class cannot be found during the service startup, you can add mysql-connector-java-version.jar to the classpath of the corresponding service module. For details, please refer to Section 3.5."),(0,s.kt)("p",null,"The services currently relying on mysql are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"linkis-mg-gateway"),(0,s.kt)("li",{parentName:"ul"},"linkis-ps-publicservice"),(0,s.kt)("li",{parentName:"ul"},"linkis-cg-linkismanage")),(0,s.kt)("h3",{id:"32-adjust-log4j2xml-configuration"},"3.2 Adjust log4j2.xml configuration"),(0,s.kt)("p",null,"Under the Linkis source code folder, in the subdirectory linkis-dist/package/conf, are some default configuration files of Linkis. First, edit the log4j2.xml file, and add the configuration of log output to the console."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"log4j2.xml",src:t(84439).Z})),(0,s.kt)("p",null,"Only the configuration content that needs to be added is posted here."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},'<configuration status="error" monitorInterval="30">\n    <appenders>\n        <Console name="Console" target="SYSTEM_OUT">\n            <ThresholdFilter level="INFO" onMatch="ACCEPT" onMismatch="DENY"/>\n            <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%t] %logger{36} %L %M - %msg%xEx%n"/>\n        </Console>\n    </appenders>\n    <loggers>\n        <root level="INFO">\n            <appender-ref ref="Console"/>\n        </root>\n    </loggers>\n</configuration>\n')),(0,s.kt)("h3",{id:"33-start-the-eureka-service"},"3.3 Start the eureka service"),(0,s.kt)("p",null,"Both Linkis and DSS services depend on Eureka, so we need to start the Eureka service first. The Eureka service can be started locally or remotely. After ensuring that each service can access Eureka's IP and port, you can start to start other microservices."),(0,s.kt)("p",null,"Inside Linkis, the application name and configuration file are set through the -DserviceName parameter, so -DserviceName is a VM startup parameter that must be specified."),(0,s.kt)("p",null,'You can use the "-Xbootclasspath/a: configuration file path" command to append the configuration file to the end of the bootstrap class path, that is, add the dependent configuration file to the classpath.'),(0,s.kt)("p",null,'By checking Include dependencies with "Provided" scope, you can introduce provided-level dependency packages during debugging.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"eureka",src:t(38834).Z})),(0,s.kt)("p",null,"Parameter explanation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"[service name]\nlinkis-mg-eureka\n\n[Use classpath of module]\nlinkis-eureka\n\n[Main Class]\norg.apache.linkis.eureka.SpringCloudEurekaApplication\n\n[VM Opitons]\n-DserviceName=linkis-mg-eureka -Xbootclasspath/a:/Users/leojie/other_project/apache/linkis/incubator-linkis/linkis-dist/package/conf\n\n[Program arguments]\n--spring.profiles.active=eureka --eureka.instance.preferIpAddress=true\n")),(0,s.kt)("p",null,"If you don't want the default 20303 port, you can modify the port configuration:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"File path: conf/application-eureka.yml\nModify the port:\nserver:\n   port: 8080 ##Starting port\n")),(0,s.kt)("p",null,"After the above settings are completed, run the Application directly. After successful startup, you can view the eureka service list through http://localhost:20303/."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"eureka-web",src:t(49114).Z})),(0,s.kt)("h3",{id:"34-start-linkis-mg-gateway"},"3.4 Start linkis-mg-gateway"),(0,s.kt)("p",null,"linkis-mg-gateway is the service gateway of Linkis, and all requests will be forwarded to the corresponding service through the gateway."),(0,s.kt)("p",null,"Before starting the server, you first need to edit the conf/linkis-mg-gateway.properties configuration file and add the administrator username and password. The username must be the same as the mac username you are currently logged in to."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-properties"},"wds.linkis.admin.user=leojie\nwds.linkis.admin.password=123456\n")),(0,s.kt)("p",null,"Set the startup Application of linkis-mg-gateway"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"gateway-app",src:t(9329).Z})),(0,s.kt)("p",null,"Parameter explanation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"[Service Name]\nlinkis-mg-gateway\n\n[Use classpath of module]\nlinkis-gateway-server-support\n\n[VM Opitons]\n-DserviceName=linkis-mg-gateway -Xbootclasspath/a:/Users/leojie/other_project/apache/linkis/incubator-linkis/linkis-dist/package/conf\n\n[main Class]\norg.apache.linkis.gateway.springcloud.LinkisGatewayApplication\n")),(0,s.kt)("p",null,"After the above settings are completed, the Application can be run directly."),(0,s.kt)("h3",{id:"35-start-linkis-ps-publicservice"},"3.5 Start linkis-ps-publicservice"),(0,s.kt)("p",null,"publicservice is a public enhancement service of Linkis, a module that provides functions such as unified configuration management, context service, material library, data source management, microservice management and historical task query for other microservice modules."),(0,s.kt)("p",null,"Set the startup Application of linkis-ps-publicservice"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"publicservice-app",src:t(82272).Z})),(0,s.kt)("p",null,"Parameter explanation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'[Service Name]\nlinkis-ps-publicservice\n\n[Module Name]\nlinkis-public-enhancements\n\n[VM Opitons]\n-DserviceName=linkis-ps-publicservice -Xbootclasspath/a:/Users/leojie/other_project/apache/linkis/incubator-linkis/linkis-dist/package/conf \n\n[main Class]\norg.apache.linkis.filesystem.LinkisPublicServiceApp\n\n[Add provided scope to classpath]\nBy checking Include dependencies with "Provided" scope, you can introduce provided-level dependency packages during debugging.\n')),(0,s.kt)("p",null,"When starting publicservice directly, you may encounter the following errors:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"publicservice-debug-error",src:t(63755).Z})),(0,s.kt)("p",null,"The public-module module needs to be added to the classpath of the linkis-public-enhancements module. The detailed steps are as follows:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"step-1",src:t(80218).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"step-2",src:t(55873).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"step-3",src:t(62317).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"step-4",src:t(1258).Z})),(0,s.kt)("p",null,"After completing the above configuration, restart the Application of publicservice"),(0,s.kt)("h3",{id:"36-start-linkis-ps-cs"},"3.6 Start linkis-ps-cs"),(0,s.kt)("p",null,"Before starting the ps-cs service, you need to ensure that the publicservice service starts successfully."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"ps-cs-App",src:t(87310).Z})),(0,s.kt)("p",null,"Parameter explanation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'[Service Name]\nlinkis-ps-cs\n\n[Use classpath of module]\nlinkis-cs-server\n\n[VM Opitons]\n-DserviceName=linkis-ps-cs -Xbootclasspath/a:/Users/leojie/other_project/apache/linkis/incubator-linkis/linkis-dist/package/conf \n\n[main Class]\norg.apache.linkis.cs.server.LinkisCSApplication\n\n[Add provided scope to classpath]\nBy checking Include dependencies with "Provided" scope, you can introduce provided-level dependency packages during debugging.\n')),(0,s.kt)("h3",{id:"37-start-linkis-cg-linkismanager"},"3.7 Start linkis-cg-linkismanager"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"cg-linkismanager-APP",src:t(77681).Z})),(0,s.kt)("p",null,"Parameter explanation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'[Service Name]\nlinkis-cg-linkismanager\n\n[Use classpath of module]\nlinkis-application-manager\n\n[VM Opitons]\n-DserviceName=linkis-cg-linkismanager -Xbootclasspath/a:/Users/leojie/other_project/apache/linkis/incubator-linkis/linkis-dist/package/conf\n\n[main Class]\norg.apache.linkis.manager.am.LinkisManagerApplication\n\n[Add provided scope to classpath]\nBy checking Include dependencies with "Provided" scope, you can introduce provided-level dependency packages during debugging.\n')),(0,s.kt)("h3",{id:"38-start-linkis-cg-entrance"},"3.8 Start linkis-cg-entrance"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"cg-entrance-APP",src:t(29993).Z})),(0,s.kt)("p",null,"Parameter explanation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'[Service Name]\nlinkis-cg-entrance\n\n[Use classpath of module]\nlinkis-entrance\n\n[VM Opitons]\n-DserviceName=linkis-cg-entrance -Xbootclasspath/a:D:\\yourDir\\incubator-linkis\\linkis-dist\\package\\conf\n\n[main Class]\norg.apache.linkis.entrance.LinkisEntranceApplication\n\n[Add provided scope to classpath]\nBy checking Include dependencies with "Provided" scope, you can introduce provided-level dependency packages during debugging.\n')),(0,s.kt)("h3",{id:"39-start-cg-engineconnmanager"},"3.9 Start cg-engineconnmanager"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"engineconnmanager-app",src:t(38561).Z})),(0,s.kt)("p",null,"Parameter explanation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'[Service Name]\nlinkis-cg-engineconnmanager\n\n[Use classpath of module]\nlinkis-engineconn-manager-server\n\n[VM Opitons]\n-DserviceName=linkis-cg-engineconnmanager -Xbootclasspath/a:/Users/leojie/other_project/apache/linkis/incubator-linkis/linkis-dist/package/conf -DJAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-8.jdk/Contents/Home/\n\n[main Class]\norg.apache.linkis.ecm.server.LinkisECMApplication\n\n[Add provided scope to classpath]\nBy checking Include dependencies with "Provided" scope, you can introduce provided-level dependency packages during debugging.\n')),(0,s.kt)("p",null,"-DJAVA_HOME is to specify the path where the java command used by ecm to start the engine is located"),(0,s.kt)("h3",{id:"310-start-linkis-cg-engineplugin"},"3.10 Start linkis-cg-engineplugin"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"engineplugin-app",src:t(27713).Z})),(0,s.kt)("p",null,"Parameter explanation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'[Service Name]\nlinkis-cg-engineplugin\n\n[Use classpath of module]\nlinkis-engineconn-plugin-server\n\n[VM Opitons]\n-DserviceName=linkis-cg-engineplugin -Xbootclasspath/a:/Users/leojie/other_project/apache/linkis/incubator-linkis/linkis-dist/package/conf\n\n[main Class]\norg.apache.linkis.engineplugin.server.LinkisEngineConnPluginServer\n\n[Add provided scope to classpath]\nBy checking Include dependencies with "Provided" scope, you can introduce provided-level dependency packages during debugging.\n')),(0,s.kt)("p",null,"When starting engineplugin, you may encounter the following error:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"engineplugin-debug-error",src:t(91197).Z})),(0,s.kt)("p",null,"The solution is to add the public-module module to the classpath of the linkis-engineconn-plugin-server module, refer to section 3.5"),(0,s.kt)("h3",{id:"311-key-configuration-modifications"},"3.11 Key Configuration Modifications"),(0,s.kt)("p",null,"The above operation only completes the configuration of the application startup of each Linkis microservice. In addition, in the configuration file loaded when the Linkis service starts, some key configurations also need to be modified in a targeted manner, otherwise the process of starting the service or script execution Some errors will be encountered. The key configuration modifications are summarized as follows:"),(0,s.kt)("h4",{id:"3111-conflinkisproperties"},"3.11.1 conf/linkis.properties"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-properties"},"# linkis underlying database connection parameter configuration\nwds.linkis.server.mybatis.datasource.url=jdbc:mysql://yourip:3306/linkis?characterEncoding=UTF-8\nwds.linkis.server.mybatis.datasource.username=your username\nwds.linkis.server.mybatis.datasource.password=your password\n\n# Set the bml material storage path to not hdfs\nwds.linkis.bml.is.hdfs=false\nwds.linkis.bml.local.prefix=/Users/leojie/software/linkis/data/bml\n\nwds.linkis.home=/Users/leojie/software/linkis\n\n# Set the administrator username, your local username\nwds.linkis.governance.station.admin=leojie\n")),(0,s.kt)("p",null,"Before configuring linkis underlying database connection parameters, please create linkis database and run linkis-dist/package/db/linkis_ddl.sql and linkis-dist/package/db/linkis_dml.sql to initialize all tables and data."),(0,s.kt)("p",null,"The directory structure of wds.linkis.home=/Users/leojie/software/linkis is as follows, only the lib directory and the conf directory are placed in it. When the engine process starts, the conf and lib paths in wds.linkis.home will be added to the classpath. If wds.linkis.home is not specified, an exception that the directory cannot be found may be encountered."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"linkis-home",src:t(17097).Z})),(0,s.kt)("h4",{id:"3112-conflinkis-cg-entranceproperties"},"3.11.2 conf/linkis-cg-entrance.properties"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-properties"},"# The log directory of the entrance service execution task\nwds.linkis.entrance.config.log.path=file:///Users/leojie/software/linkis/data/entranceConfigLog\n\n# The result set is saved in the directory, the local user needs read and write permissions\nwds.linkis.resultSet.store.path=file:///Users/leojie/software/linkis/data/resultSetDir\n")),(0,s.kt)("h4",{id:"3113-conflinkis-cg-engineconnmanagerproperties"},"3.11.3 conf/linkis-cg-engineconnmanager.properties"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-properties"},"wds.linkis.engineconn.root.dir=/Users/leojie/software/linkis/data/engineconnRootDir\n")),(0,s.kt)("p",null,"If you do not modify it, you may encounter an exception that the path does not exist."),(0,s.kt)("h4",{id:"3114-conflinkis-cg-enginepluginproperties"},"3.11.4 conf/linkis-cg-engineplugin.properties"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-properties"},"wds.linkis.engineconn.home=/Users/leojie/other_project/apache/linkis/incubator-linkis/linkis-engineconn-plugins/shell/target/out\n\nwds.linkis.engineconn.plugin.loader.store.path=/Users/leojie/other_project/apache/linkis/incubator-linkis/linkis-engineconn-plugins/shell/target/out\n")),(0,s.kt)("p",null,"The two configurations here are mainly to specify the root directory of the engine storage, and the main purpose of specifying it as target/out is that after the engine-related code or configuration changes, the engineplugin service can be restarted directly to take effect."),(0,s.kt)("h3",{id:"312-set-sudo-password-free-for-the-current-user"},"3.12 Set sudo password-free for the current user"),(0,s.kt)("p",null,"When the engine is started, sudo needs to be used to execute the shell command to start the engine process. The current user on the mac generally needs to enter a password when using sudo. Therefore, it is necessary to set sudo password-free for the current user. The setting method is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sudo chmod u-w /etc/sudoers\nsudo visudo\nReplace #%admin ALL=(ALL) AL with %admin ALL=(ALL) NOPASSWD: ALL\nsave file exit\n")),(0,s.kt)("h3",{id:"313-service-testing"},"3.13 Service Testing"),(0,s.kt)("p",null,"Make sure that the above services are all successfully started, and then test and submit the shell script job in postman."),(0,s.kt)("p",null,"First visit the login interface to generate a cookie:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"login",src:t(69987).Z})),(0,s.kt)("p",null,"Then submit the shell code for execution"),(0,s.kt)("p",null,"POST: ",(0,s.kt)("a",{parentName:"p",href:"http://127.0.0.1:9001/api/rest_j/v1/entrance/submit"},"http://127.0.0.1:9001/api/rest_j/v1/entrance/submit")),(0,s.kt)("p",null,"body parameter:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "executionContent": {\n    "code": "echo \'hello\'",\n    "runType": "shell"\n  },\n  "params": {\n    "variable": {\n      "testvar": "hello"\n    },\n    "configuration": {\n      "runtime": {},\n      "startup": {}\n    }\n  },\n  "source": {\n    "scriptPath": "file:///tmp/hadoop/test.sql"\n  },\n  "labels": {\n    "engineType": "shell-1",\n    "userCreator": "leojie-IDE"\n  }\n}\n')),(0,s.kt)("p",null,"Results of the:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "/api/entrance/submit",\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "taskID": 1,\n        "execID": "exec_id018017linkis-cg-entrance192.168.3.13:9104IDE_leojie_shell_0"\n    }\n}\n')),(0,s.kt)("p",null,"Finally, check the running status of the task and get the running result set:"),(0,s.kt)("p",null,"GET ",(0,s.kt)("a",{parentName:"p",href:"http://127.0.0.1:9001/api/rest_j/v1/entrance/exec_id018017linkis-cg-entrance192.168.3.13:9104IDE_leojie_shell_0/progress"},"http://127.0.0.1:9001/api/rest_j/v1/entrance/exec_id018017linkis-cg-entrance192.168.3.13:9104IDE_leojie_shell_0/progress")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "/api/entrance/exec_id018017linkis-cg-entrance192.168.3.13:9104IDE_leojie_shell_0/progress",\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "progress": 1,\n        "progressInfo": [],\n        "execID": "exec_id018017linkis-cg-entrance192.168.3.13:9104IDE_leojie_shell_0"\n    }\n}\n')),(0,s.kt)("p",null,"GET ",(0,s.kt)("a",{parentName:"p",href:"http://127.0.0.1:9001/api/rest_j/v1/jobhistory/1/get"},"http://127.0.0.1:9001/api/rest_j/v1/jobhistory/1/get")),(0,s.kt)("p",null,"GET ",(0,s.kt)("a",{parentName:"p",href:"http://127.0.0.1:9001/api/rest_j/v1/filesystem/openFile?path=file:///Users/leojie/software/linkis/data/resultSetDir/leojie/linkis/2022-07-16/214859/IDE/1/1_0.dolphin"},"http://127.0.0.1:9001/api/rest_j/v1/filesystem/openFile?path=file:///Users/leojie/software/linkis/data/resultSetDir/leojie/linkis/2022-07-16/214859/IDE/1/1_0.dolphin")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "/api/filesystem/openFile",\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "metadata": "NULL",\n        "totalPage": 0,\n        "totalLine": 1,\n        "page": 1,\n        "type": "1",\n        "fileContent": [\n            [\n                "hello"\n            ]\n        ]\n    }\n}\n')))}u.isMDXComponent=!0},29993:function(e,n,t){n.Z=t.p+"assets/images/cg-entrance-APP-f0c937755fc868ac51548de8e5c790d5.png"},77681:function(e,n,t){n.Z=t.p+"assets/images/cg-linkismanager-APP-e49c0332d64c00dcd142db174b63c680.png"},38561:function(e,n,t){n.Z=t.p+"assets/images/engineconnmanager-app-cfc54344d2615db56fdaf790af6b7050.png"},27713:function(e,n,t){n.Z=t.p+"assets/images/engineplugin-app-39de72c76314abb56b0b172c2358e8cd.png"},91197:function(e,n,t){n.Z=t.p+"assets/images/engineplugin-debug-error-0d3a0d4e0aae681544b8a8d3c1bcb215.png"},49114:function(e,n,t){n.Z=t.p+"assets/images/eureka-web-2376b442cf152211c2281756f7ad5bf4.png"},38834:function(e,n,t){n.Z=t.p+"assets/images/eureka-b5633ec1272b5fd4416cd71c92fbe6e1.png"},9329:function(e,n,t){n.Z=t.p+"assets/images/gateway-daa58482c3f13ea3e0929051a0586ce4.png"},17097:function(e,n,t){n.Z=t.p+"assets/images/linkis-home-773bce7056eb86683dfecbd1862c0283.png"},84439:function(e,n,t){n.Z=t.p+"assets/images/log4j-a8e64d5a053e47ea50ba44f512b6e3ab.png"},69987:function(e,n,t){n.Z=t.p+"assets/images/login-84e518976ef0b4fec8701c02d3aa072e.png"},87310:function(e,n,t){n.Z=t.p+"assets/images/ps-cs-App-5041b0aa8b70e2e0428aeeeca390b3f9.png"},63755:function(e,n,t){n.Z=t.p+"assets/images/publicservice-debug-error-cf31cfa4d3006a760b65e69f97632072.png"},82272:function(e,n,t){n.Z=t.p+"assets/images/publicservice-d20c48a47309a442fc16e33699d71ed1.png"},80218:function(e,n,t){n.Z=t.p+"assets/images/step-1-f8322d9cf5b32ae026e4df667176ff86.png"},55873:function(e,n,t){n.Z=t.p+"assets/images/step-2-96c3bbbfa006ac9692e36607125d9a69.png"},62317:function(e,n,t){n.Z=t.p+"assets/images/step-3-040f3f12abb063ad2c337b640bee6591.png"},1258:function(e,n,t){n.Z=t.p+"assets/images/step-4-43017933890a7a5bd55ad120dd212f78.png"}}]);