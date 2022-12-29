"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[20384],{3905:(e,n,i)=>{i.d(n,{Zo:()=>u,kt:()=>_});var t=i(67294);function l(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){l(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function p(e,n){if(null==e)return{};var i,t,l=function(e,n){if(null==e)return{};var i,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(l[i]=e[i]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var o=t.createContext({}),s=function(e){var n=t.useContext(o),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},u=function(e){var n=s(e.components);return t.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var i=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(i),_=l,g=c["".concat(o,".").concat(_)]||c[_]||d[_]||a;return i?t.createElement(g,r(r({ref:n},u),{},{components:i})):t.createElement(g,r({ref:n},u))}));function _(e,n){var i=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=i.length,r=new Array(a);r[0]=c;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var s=2;s<a;s++)r[s]=i[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,i)}c.displayName="MDXCreateElement"},32775:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var t=i(87462),l=(i(67294),i(3905));const a={title:"Pipeline",sidebar_position:9},r=void 0,p={unversionedId:"engine-usage/pipeline",id:"engine-usage/pipeline",title:"Pipeline",description:"Pipeline \u4e3b\u8981\u662f\u7528\u6765\u5bf9\u6587\u4ef6\u8fdb\u884c\u5bfc\u5165\u548c\u5bfc\u51fa\u7684\u3002\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 Linkis \u4e2d\uff0c Pipeline \u5f15\u64ce\u63d2\u4ef6\u7684\u5b89\u88c5\u3001\u4f7f\u7528\u548c\u914d\u7f6e\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/engine-usage/pipeline.md",sourceDirName:"engine-usage",slug:"/engine-usage/pipeline",permalink:"/zh-CN/docs/1.3.1/engine-usage/pipeline",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/engine-usage/pipeline.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Pipeline",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Sqoop",permalink:"/zh-CN/docs/1.3.1/engine-usage/sqoop"},next:{title:"ElasticSearch",permalink:"/zh-CN/docs/1.3.1/engine-usage/elasticsearch"}},o={},s=[{value:"1. \u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5",id:"1-\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5",level:2},{value:"1.1 \u5f15\u64ce\u63d2\u4ef6\u51c6\u5907\uff08\u4e8c\u9009\u4e00\uff09\u975e\u9ed8\u8ba4\u5f15\u64ce",id:"11-\u5f15\u64ce\u63d2\u4ef6\u51c6\u5907\u4e8c\u9009\u4e00\u975e\u9ed8\u8ba4\u5f15\u64ce",level:3},{value:"1.2 \u5f15\u64ce\u63d2\u4ef6\u7684\u4e0a\u4f20\u548c\u52a0\u8f7d",id:"12-\u5f15\u64ce\u63d2\u4ef6\u7684\u4e0a\u4f20\u548c\u52a0\u8f7d",level:3},{value:"1.3 \u5f15\u64ce\u5237\u65b0",id:"13-\u5f15\u64ce\u5237\u65b0",level:3},{value:"1.3.1 \u91cd\u542f\u5237\u65b0",id:"131-\u91cd\u542f\u5237\u65b0",level:4},{value:"1.3.2 \u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f",id:"132-\u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f",level:3},{value:"2 \u5f15\u64ce\u7684\u4f7f\u7528",id:"2-\u5f15\u64ce\u7684\u4f7f\u7528",level:2},{value:"2.1 \u901a\u8fc7 <code>Linkis-cli</code> \u63d0\u4ea4\u4efb\u52a1",id:"21-\u901a\u8fc7-linkis-cli-\u63d0\u4ea4\u4efb\u52a1",level:3},{value:"3. \u5f15\u64ce\u914d\u7f6e\u8bf4\u660e",id:"3-\u5f15\u64ce\u914d\u7f6e\u8bf4\u660e",level:2},{value:"3.1 \u9ed8\u8ba4\u914d\u7f6e\u8bf4\u660e",id:"31-\u9ed8\u8ba4\u914d\u7f6e\u8bf4\u660e",level:3},{value:"4.2 \u914d\u7f6e\u4fee\u6539",id:"42-\u914d\u7f6e\u4fee\u6539",level:3},{value:"4.2.1 \u7ba1\u7406\u53f0\u914d\u7f6e",id:"421-\u7ba1\u7406\u53f0\u914d\u7f6e",level:4},{value:"4.2.2 \u4efb\u52a1\u63a5\u53e3\u914d\u7f6e",id:"422-\u4efb\u52a1\u63a5\u53e3\u914d\u7f6e",level:4},{value:"4.3 \u5f15\u64ce\u76f8\u5173\u6570\u636e\u8868",id:"43-\u5f15\u64ce\u76f8\u5173\u6570\u636e\u8868",level:3}],u={toc:s};function d(e){let{components:n,...a}=e;return(0,l.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Pipeline")," \u4e3b\u8981\u662f\u7528\u6765\u5bf9\u6587\u4ef6\u8fdb\u884c\u5bfc\u5165\u548c\u5bfc\u51fa\u7684\u3002\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Linkis")," \u4e2d\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"Pipeline")," \u5f15\u64ce\u63d2\u4ef6\u7684\u5b89\u88c5\u3001\u4f7f\u7528\u548c\u914d\u7f6e\u3002"),(0,l.kt)("h2",{id:"1-\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5"},"1. \u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5"),(0,l.kt)("h3",{id:"11-\u5f15\u64ce\u63d2\u4ef6\u51c6\u5907\u4e8c\u9009\u4e00\u975e\u9ed8\u8ba4\u5f15\u64ce"},"1.1 \u5f15\u64ce\u63d2\u4ef6\u51c6\u5907\uff08\u4e8c\u9009\u4e00\uff09",(0,l.kt)("a",{parentName:"h3",href:"/zh-CN/docs/1.3.1/engine-usage/overview"},"\u975e\u9ed8\u8ba4\u5f15\u64ce")),(0,l.kt)("p",null,"\u65b9\u5f0f\u4e00\uff1a\u76f4\u63a5\u4e0b\u8f7d\u5f15\u64ce\u63d2\u4ef6\u5305"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"},"Linkis \u5f15\u64ce\u63d2\u4ef6\u4e0b\u8f7d")),(0,l.kt)("p",null,"\u65b9\u5f0f\u4e8c\uff1a\u5355\u72ec\u7f16\u8bd1\u5f15\u64ce\u63d2\u4ef6\uff08\u9700\u8981\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"maven")," \u73af\u5883\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u7f16\u8bd1\ncd ${linkis_code_dir}/linkis-engineconn-plugins/pipeline/\nmvn clean install\n# \u7f16\u8bd1\u51fa\u6765\u7684\u5f15\u64ce\u63d2\u4ef6\u5305\uff0c\u4f4d\u4e8e\u5982\u4e0b\u76ee\u5f55\u4e2d\n${linkis_code_dir}/linkis-engineconn-plugins/pipeline/target/out/\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.1/deployment/install-engineconn"},"EngineConnPlugin \u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5")),(0,l.kt)("h3",{id:"12-\u5f15\u64ce\u63d2\u4ef6\u7684\u4e0a\u4f20\u548c\u52a0\u8f7d"},"1.2 \u5f15\u64ce\u63d2\u4ef6\u7684\u4e0a\u4f20\u548c\u52a0\u8f7d"),(0,l.kt)("p",null,"\u5c06 1.1 \u4e2d\u7684\u5f15\u64ce\u63d2\u4ef6\u5305\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u7684\u5f15\u64ce\u76ee\u5f55\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,l.kt)("p",null,"\u4e0a\u4f20\u540e\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\u6240\u793a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"linkis-engineconn-plugins/\n\u251c\u2500\u2500 pipeline\n\u2502\xa0\xa0 \u251c\u2500\u2500 dist\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 v1\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 lib\n\u2502\xa0\xa0 \u2514\u2500\u2500 plugin\n\u2502\xa0\xa0     \u2514\u2500\u2500 1\n")),(0,l.kt)("h3",{id:"13-\u5f15\u64ce\u5237\u65b0"},"1.3 \u5f15\u64ce\u5237\u65b0"),(0,l.kt)("h4",{id:"131-\u91cd\u542f\u5237\u65b0"},"1.3.1 \u91cd\u542f\u5237\u65b0"),(0,l.kt)("p",null,"\u901a\u8fc7\u91cd\u542f ",(0,l.kt)("inlineCode",{parentName:"p"},"linkis-cg-linkismanager")," \u670d\u52a1\u5237\u65b0\u5f15\u64ce"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKIS_HOME}/sbin\nsh linkis-daemon.sh restart cg-linkismanager\n")),(0,l.kt)("h3",{id:"132-\u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f"},"1.3.2 \u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f"),(0,l.kt)("p",null,"\u53ef\u4ee5\u67e5\u770b\u6570\u636e\u5e93\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"linkis_engine_conn_plugin_bml_resources")," \u8fd9\u5f20\u8868\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"last_update_time")," \u662f\u5426\u4e3a\u89e6\u53d1\u5237\u65b0\u7684\u65f6\u95f4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"#\u767b\u9646\u5230linkis\u7684\u6570\u636e\u5e93 \nselect * from linkis_cg_engine_conn_plugin_bml_resources;\n")),(0,l.kt)("h2",{id:"2-\u5f15\u64ce\u7684\u4f7f\u7528"},"2 \u5f15\u64ce\u7684\u4f7f\u7528"),(0,l.kt)("p",null,"\u56e0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Pipeline")," \u5f15\u64ce\u4e3b\u8981\u7528\u6765\u5bfc\u5165\u5bfc\u51fa\u6587\u4ef6\u4e3a\u4e3b\uff0c\u73b0\u5728\u6211\u4eec\u5047\u8bbe\u4eceA\u5411B\u5bfc\u5165\u6587\u4ef6\u4e3a\u4ecb\u7ecd\u6848\u4f8b"),(0,l.kt)("h3",{id:"21-\u901a\u8fc7-linkis-cli-\u63d0\u4ea4\u4efb\u52a1"},"2.1 \u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"h3"},"Linkis-cli")," \u63d0\u4ea4\u4efb\u52a1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'sh bin/linkis-cli -submitUser  hadoop  \\\n-engineType pipeline-1  -codeType pipeline  \\\n-code "from hdfs:///000/000/000/A.dolphin  to file:///000/000/000/B.csv"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"from hdfs:///000/000/000/A.dolphin  to file:///000/000/000/B.csv")," \u8be5\u5185\u5bb9 2.3 \u6709\u89e3\u91ca"),(0,l.kt)("p",null,"\u66f4\u591a ",(0,l.kt)("inlineCode",{parentName:"p"},"Linkis-Cli")," \u547d\u4ee4\u53c2\u6570\u53c2\u8003\uff1a ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.1/user-guide/linkiscli-manual"},"Linkis-Cli \u4f7f\u7528")),(0,l.kt)("h2",{id:"3-\u5f15\u64ce\u914d\u7f6e\u8bf4\u660e"},"3. \u5f15\u64ce\u914d\u7f6e\u8bf4\u660e"),(0,l.kt)("h3",{id:"31-\u9ed8\u8ba4\u914d\u7f6e\u8bf4\u660e"},"3.1 \u9ed8\u8ba4\u914d\u7f6e\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pipeline.output.mold"),(0,l.kt)("td",{parentName:"tr",align:null},"csv"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ed3\u679c\u96c6\u5bfc\u51fa\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pipeline.field.split"),(0,l.kt)("td",{parentName:"tr",align:null},","),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"csv\u5206\u9694\u7b26")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pipeline.output.charset"),(0,l.kt)("td",{parentName:"tr",align:null},"gbk"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ed3\u679c\u96c6\u5bfc\u51fa\u5b57\u7b26\u96c6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pipeline.output.isoverwrite"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u8986\u5199")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.rm.instance"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"pipeline\u5f15\u64ce\u6700\u5927\u5e76\u53d1\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pipeline.output.shuffle.null.type"),(0,l.kt)("td",{parentName:"tr",align:null},"NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a\u503c\u66ff\u6362")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.engineconn.java.driver.memory"),(0,l.kt)("td",{parentName:"tr",align:null},"2g"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"pipeline\u5f15\u64ce\u521d\u59cb\u5316\u5185\u5b58\u5927\u5c0f")))),(0,l.kt)("h3",{id:"42-\u914d\u7f6e\u4fee\u6539"},"4.2 \u914d\u7f6e\u4fee\u6539"),(0,l.kt)("p",null,"\u5982\u679c\u9ed8\u8ba4\u53c2\u6570\u4e0d\u6ee1\u8db3\u65f6\uff0c\u6709\u5982\u4e0b\u51e0\u4e2d\u65b9\u5f0f\u53ef\u4ee5\u8fdb\u884c\u4e00\u4e9b\u57fa\u7840\u53c2\u6570\u914d\u7f6e"),(0,l.kt)("h4",{id:"421-\u7ba1\u7406\u53f0\u914d\u7f6e"},"4.2.1 \u7ba1\u7406\u53f0\u914d\u7f6e"),(0,l.kt)("p",null,(0,l.kt)("img",{src:i(87056).Z,width:"1901",height:"751"})),(0,l.kt)("p",null,"\u6ce8\u610f: \u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"IDE")," \u6807\u7b7e\u4e0b\u7684\u914d\u7f6e\u540e\u9700\u8981\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"-creator IDE")," \u624d\u4f1a\u751f\u6548\uff08\u5176\u5b83\u6807\u7b7e\u7c7b\u4f3c\uff09\uff0c\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'sh bin/linkis-cli -creator IDE \\\n-submitUser hadoop \\\n-engineType pipeline-1  \\\n-codeType pipeline \\\n-code "from hdfs:///000/000/000/A.dolphin to file:///000/000/000/B.csv"\n')),(0,l.kt)("h4",{id:"422-\u4efb\u52a1\u63a5\u53e3\u914d\u7f6e"},"4.2.2 \u4efb\u52a1\u63a5\u53e3\u914d\u7f6e"),(0,l.kt)("p",null,"\u63d0\u4ea4\u4efb\u52a1\u63a5\u53e3\uff0c\u901a\u8fc7\u53c2\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"params.configuration.runtime")," \u8fdb\u884c\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'http \u8bf7\u6c42\u53c2\u6570\u793a\u4f8b \n{\n    "executionContent": {"code": "from hdfs:///000/000/000/A.dolphin to file:///000/000/000/B.csv", "runType":  "pipeline"},\n    "params": {\n                    "variable": {},\n                    "configuration": {\n                            "runtime": {\n                                "pipeline.output.mold":"csv",\n                                "pipeline.output.charset":"gbk"\n                                }\n                            }\n                    },\n    "labels": {\n        "engineType": "pipeline-1",\n        "userCreator": "hadoop-IDE"\n    }\n}\n')),(0,l.kt)("h3",{id:"43-\u5f15\u64ce\u76f8\u5173\u6570\u636e\u8868"},"4.3 \u5f15\u64ce\u76f8\u5173\u6570\u636e\u8868"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Linkis")," \u662f\u901a\u8fc7\u5f15\u64ce\u6807\u7b7e\u6765\u8fdb\u884c\u7ba1\u7406\u7684\uff0c\u6240\u6d89\u53ca\u7684\u6570\u636e\u8868\u4fe1\u606f\u5982\u4e0b\u6240\u793a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"linkis_ps_configuration_config_key:  \u63d2\u5165\u5f15\u64ce\u7684\u914d\u7f6e\u53c2\u6570\u7684key\u548c\u9ed8\u8ba4values\nlinkis_cg_manager_label\uff1a\u63d2\u5165\u5f15\u64celabel\u5982\uff1apipeline-1\nlinkis_ps_configuration_category\uff1a \u63d2\u5165\u5f15\u64ce\u7684\u76ee\u5f55\u5173\u8054\u5173\u7cfb\nlinkis_ps_configuration_config_value\uff1a \u63d2\u5165\u5f15\u64ce\u9700\u8981\u5c55\u793a\u7684\u914d\u7f6e\nlinkis_ps_configuration_key_engine_relation:\u914d\u7f6e\u9879\u548c\u5f15\u64ce\u7684\u5173\u8054\u5173\u7cfb\n")),(0,l.kt)("p",null,"\u8868\u4e2d\u4e0e\u5f15\u64ce\u76f8\u5173\u7684\u521d\u59cb\u6570\u636e\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- set variable\nSET @PIPELINE_LABEL=\"pipeline-1\";\nSET @PIPELINE_ALL=CONCAT('*-*,',@PIPELINE_LABEL);\nSET @PIPELINE_IDE=CONCAT('*-IDE,',@PIPELINE_LABEL);\n\n-- engine label\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @PIPELINE_ALL, 'OPTIONAL', 2, now(), now());\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @PIPELINE_IDE, 'OPTIONAL', 2, now(), now());\n\nselect @label_id := id from linkis_cg_manager_label where `label_value` = @PIPELINE_IDE;\ninsert into linkis_ps_configuration_category (`label_id`, `level`) VALUES (@label_id, 2);\n\n-- configuration key\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('pipeline.output.mold', '\u53d6\u503c\u8303\u56f4\uff1acsv\u6216excel', '\u7ed3\u679c\u96c6\u5bfc\u51fa\u7c7b\u578b','csv', 'OFT', '[\\\"csv\\\",\\\"excel\\\"]', '0', '0', '1', 'pipeline\u5f15\u64ce\u8bbe\u7f6e', 'pipeline');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('pipeline.field.split', '\u53d6\u503c\u8303\u56f4\uff1a\uff0c\u6216\\\\t', 'csv\u5206\u9694\u7b26',',', 'OFT', '[\\\",\\\",\\\"\\\\\\\\t\\\"]', '0', '0', '1', 'pipeline\u5f15\u64ce\u8bbe\u7f6e', 'pipeline');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('pipeline.output.charset', '\u53d6\u503c\u8303\u56f4\uff1autf-8\u6216gbk', '\u7ed3\u679c\u96c6\u5bfc\u51fa\u5b57\u7b26\u96c6','gbk', 'OFT', '[\\\"utf-8\\\",\\\"gbk\\\"]', '0', '0', '1', 'pipeline\u5f15\u64ce\u8bbe\u7f6e', 'pipeline');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('pipeline.output.isoverwrite', '\u53d6\u503c\u8303\u56f4\uff1atrue\u6216false', '\u662f\u5426\u8986\u5199','true', 'OFT', '[\\\"true\\\",\\\"false\\\"]', '0', '0', '1', 'pipeline\u5f15\u64ce\u8bbe\u7f6e', 'pipeline');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.rm.instance', '\u8303\u56f4\uff1a1-3\uff0c\u5355\u4f4d\uff1a\u4e2a', 'pipeline\u5f15\u64ce\u6700\u5927\u5e76\u53d1\u6570','3', 'NumInterval', '[1,3]', '0', '0', '1', 'pipeline\u5f15\u64ce\u8bbe\u7f6e', 'pipeline');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.engineconn.java.driver.memory', '\u53d6\u503c\u8303\u56f4\uff1a1-10\uff0c\u5355\u4f4d\uff1aG', 'pipeline\u5f15\u64ce\u521d\u59cb\u5316\u5185\u5b58\u5927\u5c0f','2g', 'Regex', '^([1-9]|10)(G|g)$', '0', '0', '1', 'pipeline\u8d44\u6e90\u8bbe\u7f6e', 'pipeline');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('pipeline.output.shuffle.null.type', '\u53d6\u503c\u8303\u56f4\uff1aNULL\u6216\u8005BLANK', '\u7a7a\u503c\u66ff\u6362','NULL', 'OFT', '[\\\"NULL\\\",\\\"BLANK\\\"]', '0', '0', '1', 'pipeline\u5f15\u64ce\u8bbe\u7f6e', 'pipeline');\n\n-- key engine relation\ninsert into `linkis_ps_configuration_key_engine_relation` (`config_key_id`, `engine_type_label_id`)\n(select config.id as `config_key_id`, label.id AS `engine_type_label_id` FROM linkis_ps_configuration_config_key config\nINNER JOIN linkis_cg_manager_label label ON config.engine_conn_type = 'pipeline' and label_value = @PIPELINE_ALL);\n\n-- engine default configuration\ninsert into `linkis_ps_configuration_config_value` (`config_key_id`, `config_value`, `config_label_id`)\n(select `relation`.`config_key_id` AS `config_key_id`, '' AS `config_value`, `relation`.`engine_type_label_id` AS `config_label_id` FROM linkis_ps_configuration_key_engine_relation relation\nINNER JOIN linkis_cg_manager_label label ON relation.engine_type_label_id = label.id AND label.label_value = @PIPELINE_ALL);\n\n")))}d.isMDXComponent=!0},87056:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/pipeline-conf-723ac745fc264e75eb587ce2ab33dc86.png"}}]);