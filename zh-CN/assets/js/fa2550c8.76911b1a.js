"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[80172],{3905:(e,i,n)=>{n.d(i,{Zo:()=>s,kt:()=>c});var t=n(67294);function l(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function a(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?a(Object(n),!0).forEach((function(i){l(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function k(e,i){if(null==e)return{};var n,t,l=function(e,i){if(null==e)return{};var n,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],i.indexOf(n)>=0||(l[n]=e[n]);return l}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=t.createContext({}),p=function(e){var i=t.useContext(o),n=i;return e&&(n="function"==typeof e?e(i):r(r({},i),e)),n},s=function(e){var i=p(e.components);return t.createElement(o.Provider,{value:i},e.children)},d={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},u=t.forwardRef((function(e,i){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,s=k(e,["components","mdxType","originalType","parentName"]),u=p(n),c=l,m=u["".concat(o,".").concat(c)]||u[c]||d[c]||a;return n?t.createElement(m,r(r({ref:i},s),{},{components:n})):t.createElement(m,r({ref:i},s))}));function c(e,i){var n=arguments,l=i&&i.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=u;var k={};for(var o in i)hasOwnProperty.call(i,o)&&(k[o]=i[o]);k.originalType=e,k.mdxType="string"==typeof e?e:l,r[1]=k;for(var p=2;p<a;p++)r[p]=n[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26613:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>k,toc:()=>p});var t=n(87462),l=(n(67294),n(3905));const a={title:"Docker \u7f16\u8bd1",sidebar_position:5},r=void 0,k={unversionedId:"development/build-docker",id:"development/build-docker",title:"Docker \u7f16\u8bd1",description:"Linkis \u955c\u50cf\u7ec4\u6210",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/build-docker.md",sourceDirName:"development",slug:"/development/build-docker",permalink:"/zh-CN/docs/1.3.1/development/build-docker",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/build-docker.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Docker \u7f16\u8bd1",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u7ba1\u7406\u53f0\u7f16\u8bd1",permalink:"/zh-CN/docs/1.3.1/development/build-console"},next:{title:"\u8c03\u8bd5 Debug \u6307\u5f15",permalink:"/zh-CN/docs/1.3.1/development/debug"}},o={},p=[{value:"Linkis \u955c\u50cf\u7ec4\u6210",id:"linkis-\u955c\u50cf\u7ec4\u6210",level:2},{value:"linkis-base",id:"linkis-base",level:3},{value:"linkis",id:"linkis",level:3},{value:"linkis-web",id:"linkis-web",level:3},{value:"linkis-ldh",id:"linkis-ldh",level:3},{value:"\u96c6\u6210 MySQL JDBC",id:"\u96c6\u6210-mysql-jdbc",level:3},{value:"Linkis \u955c\u50cf\u5236\u4f5c",id:"linkis-\u955c\u50cf\u5236\u4f5c",level:2},{value:"\u4f7f\u7528 Maven \u6784\u5efa\u955c\u50cf",id:"\u4f7f\u7528-maven-\u6784\u5efa\u955c\u50cf",level:3},{value:"\u4f7f\u7528 docker build \u547d\u4ee4\u6784\u5efa\u955c\u50cf",id:"\u4f7f\u7528-docker-build-\u547d\u4ee4\u6784\u5efa\u955c\u50cf",level:3}],s={toc:p};function d(e){let{components:i,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},s,n,{components:i,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"linkis-\u955c\u50cf\u7ec4\u6210"},"Linkis \u955c\u50cf\u7ec4\u6210"),(0,l.kt)("p",null,"\u4ece1.3.0\u7248\u672c\u8d77\uff0cLinkis\u5f15\u5165\u4e86\u4e00\u4e9b Docker \u955c\u50cf\uff0c\u9879\u76ee\u6240\u6709\u955c\u50cf\u7684 Dockerfile \u6587\u4ef6\u90fd\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"linkis-dist/docker"),"\u76ee\u5f55\u4e0b\u3002"),(0,l.kt)("p",null,"\u76ee\u524d\u7531\u5982\u4e0b\u51e0\u4e2a\u955c\u50cf\u7ec4\u6210:"),(0,l.kt)("h3",{id:"linkis-base"},"linkis-base"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Dockerfile"),": ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u540d: linkis.Dockerfile"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u6570, \u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"docker build")," \u547d\u4ee4\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"--build-arg")," \u53c2\u6570\u6765\u91cd\u8f7d\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"JDK_VERSION: JDK \u7248\u672c\uff0c\u9ed8\u8ba4\u4e3a 1.8.0-openjdk"),(0,l.kt)("li",{parentName:"ul"},"JDK_BUILD_REVISION: JDK \u53d1\u5e03\u7248\u672c, \u9ed8\u8ba4\u4e3a 1.8.0.332.b09-1.el7_9"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u8bf4\u660e"),": Linkis\u670d\u52a1\u57fa\u7840\u955c\u50cf\uff0c\u4e3b\u8981\u7528\u4e8e\u9884\u5b89\u88c5 Linkis \u7cfb\u7edf\u9700\u8981\u7684\u5916\u90e8\u5e93\uff0c\u521d\u59cb\u5316\u7cfb\u7edf\u73af\u5883\u548c\u76ee\u5f55\u3002\u672c\u955c\u50cf\u4e0d\u9700\u8981\u7ecf\u5e38\u66f4\u65b0\uff0c\u5229\u7528 docker \u7684\u955c\u50cf\u7f13\u5b58\u673a\u5236\uff0c\u53ef\u4ee5\u52a0\u901f Linkis \u955c\u50cf\u7684\u5236\u4f5c\u3002")),(0,l.kt)("h3",{id:"linkis"},"linkis"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Dockerfile"),": ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u540d: linkis.Dockerfile"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u6570:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"LINKIS_VERSION: Linkis \u7248\u672c\u53f7\uff0c\u9ed8\u8ba4\u4e3a 0.0.0"),(0,l.kt)("li",{parentName:"ul"},"LINKIS_SYSTEM_USER: \u7cfb\u7edf\u7528\u6237\uff0c\u9ed8\u8ba4\u4e3a hadoop "),(0,l.kt)("li",{parentName:"ul"},"LINKIS_SYSTEM_UID: \u7cfb\u7edf\u7528\u6237UID, \u9ed8\u8ba4\u4e3a 9001"),(0,l.kt)("li",{parentName:"ul"},"LINKIS_HOME: Linkis \u4e3b\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4e3a /opt/linkis , \u7cfb\u7edf\u7684\u4e8c\u8fdb\u5236\u5305\u548c\u5404\u7c7b\u811a\u672c\u4f1a\u90e8\u7f72\u5230\u8fd9\u91cc"),(0,l.kt)("li",{parentName:"ul"},"LINKIS_CONF_DIR: Linkis \u914d\u7f6e\u6587\u4ef6\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4e3a /etc/linkis-conf"),(0,l.kt)("li",{parentName:"ul"},"LINKIS_LOG_DIR: Linkis \u65e5\u5fd7\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4e3a /var/logs/linkis"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u8bf4\u660e"),": Linkis\u670d\u52a1\u955c\u50cf\uff0c\u955c\u50cf\u4e2d\u5305\u542b\u4e86 Apache Linkis \u7684\u6240\u6709\u7ec4\u4ef6\u7684\u4e8c\u8fdb\u5236\u5305\u548c\u5404\u7c7b\u811a\u672c\u3002")),(0,l.kt)("h3",{id:"linkis-web"},"linkis-web"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Dockerfile"),": ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u540d: linkis.Dockerfile"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u6570:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"LINKIS_VERSION: Linkis \u7248\u672c\u53f7\uff0c\u9ed8\u8ba4\u4e3a 0.0.0"),(0,l.kt)("li",{parentName:"ul"},"LINKIS_HOME: Linkis \u4e3b\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4e3a /opt/linkis , Web \u76f8\u5173\u7684\u5305\u4f1a\u88ab\u653e\u7f6e\u5728 ${LINKIS_HOME}-web \u4e0b "))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u8bf4\u660e"),": Linkis Web \u63a7\u5236\u53f0\u955c\u50cf\uff0c\u955c\u50cf\u4e2d\u5305\u542b\u4e86 Apache Linkis Web \u63a7\u5236\u53f0\u7684\u7684\u4e8c\u8fdb\u5236\u5305\u548c\u5404\u7c7b\u811a\u672c\uff0c\u672c\u955c\u50cf\u4f7f\u7528 nginx \u4f5c\u4e3a Web \u670d\u52a1\u5668\u3002")),(0,l.kt)("h3",{id:"linkis-ldh"},"linkis-ldh"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Dockerfile"),": ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u540d: ldh.Dockerfile"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u6570:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"JDK_VERSION: JDK \u7248\u672c\uff0c\u9ed8\u8ba4\u4e3a 1.8.0-openjdk"),(0,l.kt)("li",{parentName:"ul"},"JDK_BUILD_REVISION: JDK \u53d1\u5e03\u7248\u672c, \u9ed8\u8ba4\u4e3a 1.8.0.332.b09-1.el7_9"),(0,l.kt)("li",{parentName:"ul"},"LINKIS_VERSION: Linkis \u7248\u672c\u53f7\uff0c\u9ed8\u8ba4\u4e3a 0.0.0"),(0,l.kt)("li",{parentName:"ul"},"MYSQL_JDBC_VERSION: MySQL JDBC \u7248\u672c\uff0c\u9ed8\u8ba4\u4e3a 8.0.28"),(0,l.kt)("li",{parentName:"ul"},"HADOOP_VERSION: Apache Hadoop \u7ec4\u4ef6\u7248\u672c\uff0c\u9ed8\u8ba4\u4e3a 2.7.2"),(0,l.kt)("li",{parentName:"ul"},"HIVE_VERSION: Apache Hive \u7ec4\u4ef6\u7248\u672c\uff0c\u9ed8\u8ba4\u4e3a 2.3.3"),(0,l.kt)("li",{parentName:"ul"},"SPARK_VERSION:  Apache Spark \u7ec4\u4ef6\u7248\u672c\uff0c\u9ed8\u8ba4\u4e3a 2.4.3"),(0,l.kt)("li",{parentName:"ul"},"SPARK_HADOOP_VERSION:  \u9884\u7f16\u8bd1\u7684 Apache Spark \u53d1\u5e03\u5305 Hadoop \u7248\u672c\u540e\u7f00\uff0c\u9ed8\u8ba4\u4e3a 2.7\uff0c\u8be5\u503c\u4e0d\u80fd\u4efb\u610f\u8bbe\u7f6e\uff0c\u9700\u8981\u548c Apache Spark \u5b98\u65b9\u53d1\u5e03\u7248\u672c\u4fdd\u6301\u4e00\u81f4\uff0c\u5426\u5219\u65e0\u6cd5\u81ea\u52a8\u4e0b\u8f7d\u76f8\u5173\u7ec4\u4ef6 "),(0,l.kt)("li",{parentName:"ul"},"FLINK_VERSION:  Apache Flink \u7ec4\u4ef6\u7248\u672c\uff0c\u9ed8\u8ba4\u4e3a 1.12.2"),(0,l.kt)("li",{parentName:"ul"},"ZOOKEEPER_VERSION:  Apache Zookeeper \u7ec4\u4ef6\u7248\u672c\uff0c\u9ed8\u8ba4\u4e3a 3.5.9"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u8bf4\u660e"),": LDH \u662f\u4e00\u4e2a\u9762\u5411\u6d4b\u8bd5\u7528\u9014\u7684\u955c\u50cf\uff0cLDH \u955c\u50cf\u63d0\u4f9b\u4e86\u4e00\u5957\u5b8c\u6574\u7684\u3001\u4f2a\u5206\u5e03\u5f0f\u6a21\u5f0f\u7684 Apache Hadoop \u8fd0\u884c\u73af\u5883\uff0c\u5305\u542b\u4e86 HDFS, YARN, HIVE, Spark, Flink \u548c Zookeeper, \u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u5728\u5f00\u53d1\u73af\u5883\u4e2d\u62c9\u8d77\u4e00\u4e2a\u5168\u771f\u7684 Hadoop \u73af\u5883\u7528\u6765\u6d4b\u8bd5 Linkis \u7684\u529f\u80fd\u3002LDH \u955c\u50cf\u7684 ENTRYPOINT \u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"linkis-dist/docker/scripts/entry-point-ldh.sh"),"\uff0c\u4e00\u4e9b\u521d\u59cb\u5316\u64cd\u4f5c\uff0c\u5982 HDFS \u7684 format \u64cd\u4f5c\u90fd\u662f\u5728\u8fd9\u4e2a\u811a\u672c\u4e2d\u5b8c\u6210\u7684\u3002")),(0,l.kt)("h3",{id:"\u96c6\u6210-mysql-jdbc"},"\u96c6\u6210 MySQL JDBC"),(0,l.kt)("p",null,"\u7531\u4e8eMySQL\u7684\u8bb8\u53ef\u534f\u8bae\u9650\u5236\uff0c\u5b98\u65b9\u53d1\u5e03\u7684 Linkis \u955c\u50cf\u6ca1\u6709\u96c6\u6210 MySQL JDBC \u9a71\u52a8\uff0c\u7528\u6237\u5728\u4f7f\u7528 Linkis \u5bb9\u5668\u524d\u9700\u8981\u81ea\u884c\u5c06 MySQL JDBC \u9a71\u52a8\u653e\u7f6e\u5230\u5bb9\u5668\u4e2d\u3002\u4e3a\u4e86\u7b80\u5316\u8fd9\u4e2a\u8fc7\u7a0b\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a Dockerfile:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u540d: linkis-with-mysql-jdbc.Dockerfile"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u6570:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"LINKIS_IMAGE: Linkis \u955c\u50cf\u540d\uff0c\u57fa\u4e8e\u8fd9\u4e2a\u955c\u50cf\u6765\u5236\u4f5c\u5305\u542b MySQL JDBC \u9a71\u52a8\u7684\u81ea\u5b9a\u4e49\u955c\u50cf, \u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"linkis:dev")),(0,l.kt)("li",{parentName:"ul"},"LINKIS_HOME: Linkis \u4e3b\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4e3a /opt/linkis"),(0,l.kt)("li",{parentName:"ul"},"MYSQL_JDBC_VERSION: MySQL JDBC \u7248\u672c\uff0c\u9ed8\u8ba4\u4e3a 8.0.28")))),(0,l.kt)("h2",{id:"linkis-\u955c\u50cf\u5236\u4f5c"},"Linkis \u955c\u50cf\u5236\u4f5c"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u56e0\u4e3a\u955c\u50cf\u5236\u4f5c\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u4e86\u4e00\u4e9b Bash \u811a\u672c\uff0c\u76ee\u524d\u4ec5\u652f\u6301\u5728 Linux/MaxOS \u4e0b\u5b8c\u6210 Linkis \u955c\u50cf\u6253\u5305\u7684\u5de5\u4f5c\u3002")),(0,l.kt)("h3",{id:"\u4f7f\u7528-maven-\u6784\u5efa\u955c\u50cf"},"\u4f7f\u7528 Maven \u6784\u5efa\u955c\u50cf"),(0,l.kt)("p",null,"Linkis \u955c\u50cf\u5236\u4f5c\u8fc7\u7a0b\u90fd\u5df2\u7ecf\u96c6\u6210\u5230\u9879\u76ee\u7684 Maven Profile \u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7 Maven \u547d\u4ee4\u5b9e\u73b0 Liniks \u955c\u50cf\u7684\u5236\u4f5c\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6784\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"linkis")," \u955c\u50cf"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u6784\u5efa\u4e0d\u5305\u542b MySQL JDBC \u7684 Linkis \u955c\u50cf\n$> ./mvnw clean install -Pdocker -Dmaven.javadoc.skip=true -Dmaven.test.skip=true\n# \u6784\u5efa\u5305\u542b MySQL JDBC \u7684 Linkis \u955c\u50cf\n$> ./mvnw clean install -Pdocker -Dmaven.javadoc.skip=true -Dmaven.test.skip=true -Dlinkis.build.with.jdbc=true\n")),(0,l.kt)("p",{parentName:"li"},"\u9700\u8981\u6ce8\u610f\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"linkis-base")," \u955c\u50cf\u4f1a\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"linkis")," \u955c\u50cf\u7b2c\u4e00\u6b21\u6784\u5efa\u65f6\u88ab\u6784\u5efa\uff0c\u540e\u7eed\u5982\u679c Dockerfile \u6ca1\u6709\u88ab\u4fee\u6539\uff0c\u5c06\u4e0d\u4f1a\u88ab\u91cd\u590d\u6784\u5efa;"),(0,l.kt)("li",{parentName:"ul"},"\u53d7\u5236\u4e8e Maven POM \u6587\u4ef6\u7684\u8bed\u6cd5\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"linkis.build.with.jdbc")," \u662f\u4e00\u4e2a\u4f2a\u5e03\u5c14\u53c2\u6570\uff0c\u5b9e\u9645\u4e0a",(0,l.kt)("inlineCode",{parentName:"li"},"-Dlinkis.build.with.jdbc=false"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"-Dlinkis.build.with.jdbc=true"),"\u662f\u4e00\u6837\u7684\uff0c\u5982\u5e0c\u671b\u8868\u8fbe",(0,l.kt)("inlineCode",{parentName:"li"},"-Dlinkis.build.with.jdbc=false"),"\uff0c\u8bf7\u76f4\u63a5\u5c06\u8fd9\u4e2a\u53c2\u6570\u53bb\u6389\u3002\u5176\u4ed6\u53c2\u6570\u7c7b\u4f3c\u3002"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6784\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"linkis-web")," \u955c\u50cf "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$> ./mvnw clean install -Pdocker -Dmaven.javadoc.skip=true -Dmaven.test.skip=true -Dlinkis.build.web=true\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6784\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"linkis-ldh")," \u955c\u50cf "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$> ./mvnw clean install -Pdocker -Dmaven.javadoc.skip=true -Dmaven.test.skip=true -Dlinkis.build.ldh=true\n")),(0,l.kt)("p",{parentName:"li"},"\u9700\u8981\u6ce8\u610f\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5728\u5236\u4f5c\u672c\u955c\u50cf\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4ece ",(0,l.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/"},"Apache Archives")," \u8fd9\u4e2a\u5b98\u65b9\u7ad9\u70b9\u4e0b\u8f7d\u6bcf\u4e2ahadoop\u7ec4\u4ef6\u7684\u9884\u5efa\u4e8c\u8fdb\u5236\u53d1\u884c\u7248\u3002\u4f46\u662f\uff0c\u53d7\u5236\u4e8e\u56fd\u5185\u7684\u7f51\u7edc\u73af\u5883\uff0c\u8fd9\u79cd\u65b9\u5f0f\u53ef\u80fd\u4f1a\u975e\u5e38\u7f13\u6162\u3002\u5982\u679c\u4f60\u6709\u66f4\u5feb\u7684\u7ad9\u70b9\uff0c\u4f60\u53ef\u4ee5\u624b\u52a8\u4ece\u8fd9\u4e9b\u7ad9\u70b9\u4e0b\u8f7d\u76f8\u5e94\u7684\u5305\uff0c\u5e76\u5c06\u5176\u79fb\u52a8\u5230\u5982\u4e0b\u8fd9\u4e2a\u76ee\u5f55",(0,l.kt)("inlineCode",{parentName:"li"},"${HOME}/.linkis-build-cache")," \u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002")))),(0,l.kt)("p",null,"\u4e0a\u8ff0\u53c2\u6570\u90fd\u53ef\u4ee5\u7ec4\u5408\u4f7f\u7528\uff0c\u5982\u5e0c\u671b\u4e00\u6b21\u6027\u6784\u5efa\u6240\u6709\u955c\u50cf\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$> ./mvnw clean install -Pdocker -Dmaven.javadoc.skip=true -Dmaven.test.skip=true -Dlinkis.build.web=true -Dlinkis.build.ldh=true\n")),(0,l.kt)("h3",{id:"\u4f7f\u7528-docker-build-\u547d\u4ee4\u6784\u5efa\u955c\u50cf"},"\u4f7f\u7528 docker build \u547d\u4ee4\u6784\u5efa\u955c\u50cf"),(0,l.kt)("p",null,"\u4f7f\u7528 Maven \u547d\u4ee4\u6784\u5efa\u955c\u50cf\u56fa\u7136\u65b9\u4fbf\uff0c\u4f46\u662f\u6784\u5efa\u8fc7\u7a0b\u4e2d\u5f15\u5165\u4e86\u4e0d\u5c11\u91cd\u590d\u7684\u7f16\u8bd1\u8fc7\u7a0b\uff0c\u6574\u4e2a\u8fc7\u7a0b\u6bd4\u8f83\u6f2b\u957f\u3002\u5982\u679c\u4ec5\u8c03\u6574\u955c\u50cf\u5185\u90e8\u7ed3\u6784\uff0c\u5982\u76ee\u5f55\u7ed3\u6784\uff0c\u521d\u59cb\u5316\u547d\u4ee4\u7b49\uff0c\u53ef\u4ee5\u5728\u7b2c\u4e00\u6b21\u4f7f\u7528 Maven \u547d\u4ee4\u6784\u5efa\u955c\u50cf\u540e\uff0c\u76f4\u63a5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"docker build")," \u547d\u4ee4\u6765\u5feb\u901f\u6784\u5efa\u955c\u50cf\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"docker build")," \u547d\u4ee4\u6784\u5efa linkis-ldh \u955c\u50cf\u793a\u4f8b\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$> docker build -t linkis-ldh:dev --target linkis-ldh -f linkis-dist/docker/ldh.Dockerfile linkis-dist/target\n\n[+] Building 0.2s (19/19) FINISHED                                                                                                                                                                                      \n => [internal] load build definition from ldh.Dockerfile               0.0s\n => => transferring dockerfile: 41B                                    0.0s\n => [internal] load .dockerignore                                      0.0s\n => => transferring context: 2B                                        0.0s\n => [internal] load metadata for docker.io/library/centos:7            0.0s\n => [ 1/14] FROM docker.io/library/centos:7                            0.0s\n => [internal] load build context                                      0.0s\n => => transferring context: 1.93kB                                    0.0s\n => CACHED [ 2/14] RUN useradd -r -s ...                               0.0s\n => CACHED [ 3/14] RUN yum install -y       ...                        0.0s\n ...\n => CACHED [14/14] RUN chmod +x /usr/bin/start-all.sh                  0.0s\n => exporting to image                                                 0.0s\n => => exporting layers                                                0.0s\n => => writing image sha256:aa3bde0a31bf704413fb75673fc2894b03a0840473d8fe15e2d7f7dd22f1f854     0.0s\n => => naming to docker.io/library/linkis-ldh:dev \n")),(0,l.kt)("p",null,"\u5176\u4ed6\u955c\u50cf\u7684\u6784\u5efa\u547d\u4ee4\u8bf7\u53c2\u8003 ",(0,l.kt)("inlineCode",{parentName:"p"},"linkis-dist/pom.xml")," \u4e2d\u76f8\u5173\u7684 profile."))}d.isMDXComponent=!0}}]);