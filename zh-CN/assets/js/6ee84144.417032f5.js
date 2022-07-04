"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[21639],{3905:function(e,n,i){i.d(n,{Zo:function(){return c},kt:function(){return k}});var t=i(67294);function l(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){l(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function p(e,n){if(null==e)return{};var i,t,l=function(e,n){if(null==e)return{};var i,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(l[i]=e[i]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var o=t.createContext({}),s=function(e){var n=t.useContext(o),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},c=function(e){var n=s(e.components);return t.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var i=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(i),k=l,m=d["".concat(o,".").concat(k)]||d[k]||u[k]||r;return i?t.createElement(m,a(a({ref:n},c),{},{components:i})):t.createElement(m,a({ref:n},c))}));function k(e,n){var i=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=i.length,a=new Array(r);a[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,a[1]=p;for(var s=2;s<r;s++)a[s]=i[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}d.displayName="MDXCreateElement"},380:function(e,n,i){i.r(n),i.d(n,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var t=i(87462),l=i(63366),r=(i(67294),i(3905)),a=["components"],p={title:"Pipeline \u5f15\u64ce",sidebar_position:10},o=void 0,s={unversionedId:"engine_usage/pipeline",id:"version-1.1.1/engine_usage/pipeline",isDocsHomePage:!1,title:"Pipeline \u5f15\u64ce",description:"Pipeline\u7684\u4e3b\u8981\u7528\u6765\u6587\u4ef6\u7684\u5bfc\u5165\u548c\u5bfc\u51fa,\u672c\u6587\u4e3b\u8981\u4ecb\u7ecdpipeline(>=1.1.0\u7248\u672c\u652f\u6301)\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.1/engine_usage/pipeline.md",sourceDirName:"engine_usage",slug:"/engine_usage/pipeline",permalink:"/zh-CN/docs/1.1.1/engine_usage/pipeline",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.1/engine_usage/pipeline.md",tags:[],version:"1.1.1",sidebarPosition:10,frontMatter:{title:"Pipeline \u5f15\u64ce",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"openLooKeng \u5f15\u64ce",permalink:"/zh-CN/docs/1.1.1/engine_usage/openlookeng"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.1.1/api/overview"}},c=[{value:"1 \u914d\u7f6e\u548c\u90e8\u7f72",id:"1-\u914d\u7f6e\u548c\u90e8\u7f72",children:[{value:"1.1 \u5f15\u64ce\u5305\u7684\u83b7\u53d6",id:"11-\u5f15\u64ce\u5305\u7684\u83b7\u53d6",children:[]},{value:"1.2 \u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d",id:"12-\u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d",children:[]},{value:"1.3 \u5f15\u64ce\u7684\u6807\u7b7e(\u53ef\u9009)",id:"13-\u5f15\u64ce\u7684\u6807\u7b7e\u53ef\u9009",children:[]}]},{value:"2 \u5f15\u64ce\u7684\u4f7f\u7528",id:"2-\u5f15\u64ce\u7684\u4f7f\u7528",children:[{value:"2.1 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",id:"21-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",children:[]},{value:"2.2 \u901a\u8fc7 Scriptis \u4f7f\u7528",id:"22-\u901a\u8fc7-scriptis-\u4f7f\u7528",children:[]}]}],u={toc:c};function d(e){var n=e.components,p=(0,l.Z)(e,a);return(0,r.kt)("wrapper",(0,t.Z)({},u,p,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Pipeline\u7684\u4e3b\u8981\u7528\u6765\u6587\u4ef6\u7684\u5bfc\u5165\u548c\u5bfc\u51fa,\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd",(0,r.kt)("inlineCode",{parentName:"p"},"pipeline"),"(>=1.1.0\u7248\u672c\u652f\u6301)\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002")),(0,r.kt)("h2",{id:"1-\u914d\u7f6e\u548c\u90e8\u7f72"},"1 \u914d\u7f6e\u548c\u90e8\u7f72"),(0,r.kt)("h3",{id:"11-\u5f15\u64ce\u5305\u7684\u83b7\u53d6"},"1.1 \u5f15\u64ce\u5305\u7684\u83b7\u53d6"),(0,r.kt)("p",null,"\u56e0\u4e3a\u53d1\u5e03\u7684\u5b89\u88c5\u90e8\u7f72\u5305\u4e2d\u9ed8\u8ba4\u5b89\u88c5\u5305\u4e2d\u6ca1\u6709pipeline\u5f15\u64ce\uff0c\u56e0\u6b64\u9700\u8981\u83b7\u53d6\u5bf9\u5e94\u5f15\u64ce\u7684jar\u5305\u6587\u4ef6 "),(0,r.kt)("h4",{id:"\u65b9\u5f0f1"},"\u65b9\u5f0f1"),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"},"\u975e\u9ed8\u8ba4\u5f15\u64ce\u7269\u6599\u5305")," \u4e0b\u8f7d"),(0,r.kt)("h4",{id:"\u65b9\u5f0f2-\u624b\u52a8\u7f16\u8bd1\u83b7\u53d6"},"\u65b9\u5f0f2 \u624b\u52a8\u7f16\u8bd1\u83b7\u53d6"),(0,r.kt)("p",null,"\u6ce8\u610f: \u7f16\u8bd1",(0,r.kt)("inlineCode",{parentName:"p"},"pipeline"),"\u5f15\u64ce\u4e4b\u524d\u9700\u8981\u8fdb\u884clinkis\u9879\u76ee\u5168\u91cf\u7f16\u8bd1  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd  ${linkis_code_dir} \nmvn -N  install #\u9996\u6b21\u9700\u8981\u8fdb\u884clinkis\u9879\u76ee\u5168\u91cf\u7f16\u8bd1\n\ncd linkis-enginepconn-pugins/engineconn-plugins/pipeline/\nmvn clean install\n")),(0,r.kt)("p",null,"\u7f16\u8bd1\u51fa\u6765\u7684\u5f15\u64ce\u5305,\u4f4d\u4e8e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"${linkis_code_dir}/linkis-engineconn-plugins/engineconn-plugins/pipeline/target/out/pipeline\n")),(0,r.kt)("h3",{id:"12-\u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d"},"1.2 \u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d"),(0,r.kt)("p",null,"\u5c06 \u6b65\u9aa4 1.1\u83b7\u53d6\u5230\u7684\u5f15\u64ce\u7269\u6599\u5305\uff0c\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u7684\u5f15\u64ce\u76ee\u5f55\u4e0b",(0,r.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/lib/linkis-engineplugins")),(0,r.kt)("p",null,"\u5e76\u91cd\u542flinkis-engineplugin\u8fdb\u884c\u5f15\u64ce\u5237\u65b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKIS_HOME}/sbin\nsh linkis-daemon.sh restart cg-engineplugin\n")),(0,r.kt)("p",null,"\u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f\uff1a\u53ef\u4ee5\u67e5\u770b\u6570\u636e\u5e93\u4e2d\u7684linkis_engine_conn_plugin_bml_resources\u8fd9\u5f20\u8868\u7684last_update_time\u662f\u5426\u4e3a\u89e6\u53d1\u5237\u65b0\u7684\u65f6\u95f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"#\u767b\u9646\u5230linkis\u7684\u6570\u636e\u5e93 \nselect *  from linkis_cg_engine_conn_plugin_bml_resources\n")),(0,r.kt)("h3",{id:"13-\u5f15\u64ce\u7684\u6807\u7b7e\u53ef\u9009"},"1.3 \u5f15\u64ce\u7684\u6807\u7b7e(\u53ef\u9009)"),(0,r.kt)("p",null,"\u901a\u8fc7\u6807\u7b7e\u6765\u8fdb\u884c\u7684\uff0c\u6240\u4ee5\u9700\u8981\u5728\u6211\u4eec\u6570\u636e\u5e93\u4e2d\u63d2\u5165\u6570\u636e\uff0c\u63d2\u5165\u7684\u65b9\u5f0f\u5982\u4e0b\u6587\u6240\u793a"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../deployment/engine_conn_plugin_installation"},"EngineConnPlugin\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5")," "),(0,r.kt)("h2",{id:"2-\u5f15\u64ce\u7684\u4f7f\u7528"},"2 \u5f15\u64ce\u7684\u4f7f\u7528"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u56e0\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"pipeline"),"\u5f15\u64ce\u4e3b\u8981\u7528\u6765\u5bfc\u5165\u5bfc\u51fa\u6587\u4ef6\u4e3a\u4e3b\uff0c\u73b0\u5728\u6211\u4eec\u5047\u8bbe\u4eceA\u5411B\u5bfc\u5165\u6587\u4ef6\u6700\u4e3a\u4ecb\u7ecd\u6848\u4f8b")),(0,r.kt)("h3",{id:"21-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"},"2.1 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"),(0,r.kt)("p",null,"\u901a\u8fc7linkis-cli\u7684\u65b9\u5f0f\u63d0\u4ea4\u4efb\u52a1\uff0c\u9700\u8981\u6307\u5b9a\u5bf9\u5e94\u7684EngineConn\u548cCodeType\u6807\u7b7e\u7c7b\u578b\uff0cpipeline\u7684\u4f7f\u7528\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f ",(0,r.kt)("inlineCode",{parentName:"li"},"engineType pipeline-1")," \u5f15\u64ce\u7248\u672c\u8bbe\u7f6e\u662f\u6709\u524d\u7f00\u7684  \u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"pipeline")," \u7248\u672c\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"v1")," \u5219\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"pipeline-1"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'sh bin/linkis-cli -submitUser  hadoop  -engineType pipeline-1  -codeType pipeline  -code "from hdfs:///000/000/000/A.dolphin  to file:///000/000/000/B.csv"\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"from hdfs:///000/000/000/A.dolphin  to file:///000/000/000/B.csv")," \u8be5\u5185\u5bb9 2.3 \u6709\u89e3\u91ca"),(0,r.kt)("p",null,"\u5177\u4f53\u4f7f\u7528\u53ef\u4ee5\u53c2\u8003\uff1a ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.1.1/user_guide/linkiscli_manual"},"Linkis CLI Manual"),"."),(0,r.kt)("h3",{id:"22-\u901a\u8fc7-scriptis-\u4f7f\u7528"},"2.2 \u901a\u8fc7 Scriptis \u4f7f\u7528"),(0,r.kt)("p",null,"\u5de5\u4f5c\u7a7a\u95f4\u6a21\u5757\u53f3\u952e\u9009\u62e9\u65b0\u5efa\u4e00\u4e2a\u7c7b\u578b\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"storage"),"\u7684\u811a\u672c"),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(20903).Z})),(0,r.kt)("h4",{id:"221-\u7f16\u5199\u811a\u672c"},"2.2.1 \u7f16\u5199\u811a\u672c"),(0,r.kt)("h5",{id:"\u8bed\u6cd5\u4e3afrom-path-to-path"},"\u8bed\u6cd5\u4e3a\uff1afrom path to path"),(0,r.kt)("p",null,"\u6587\u4ef6\u62f7\u8d1d\u89c4\u5219\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"dolphin"),"\u540e\u7f00\u7c7b\u578b\u6587\u4ef6\u5c5e\u4e8e\u7ed3\u679c\u96c6\u6587\u4ef6\u53ef\u8f6c\u6362\u6210",(0,r.kt)("inlineCode",{parentName:"p"},".csv"),"\u7c7b\u578b\u53ca",(0,r.kt)("inlineCode",{parentName:"p"},".xlsx"),"\u7c7b\u578b\u6587\u4ef6,\u5176\u4ed6\u7c7b\u578b\u53ea\u80fd\u4eceA\u5730\u5740\u62f7\u8d1d\u5230B\u5730\u5740\uff0c\u7b80\u79f0\u642c\u8fd0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#dolphin \u7c7b\u578b\nfrom hdfs:///000/000/000/A.dolphin to file:///000/000/000/B.csv\nfrom hdfs:///000/000/000/A.dolphin to file:///000/000/000/B.xlsx\n\n#\u5176\u4ed6\u7c7b\u578b\nfrom hdfs:///000/000/000/A.txt to file:///000/000/000/B.txt\n")),(0,r.kt)("p",null,"A\u6587\u4ef6\u5411B\u6587\u4ef6\u5939\u5bfc\u5165\u811a\u672c "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"from hdfs:///000/000/000/A.csv to file:///000/000/000/B.csv\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"from path to path")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hdfs:///000/000/000/A.csv"),"\uff1a \u8f93\u51fa\u6587\u4ef6\u8def\u5f84\u53ca\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"file:///000/000/000/B.csv"),"\uff1a \u8f93\u5165\u6587\u4ef6\u8def\u5f84\u53ca\u6587\u4ef6")),(0,r.kt)("p",null,"B\u6587\u4ef6\u5411A\u6587\u4ef6\u5939\u5bfc\u5165\u811a\u672c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"from hdfs:///000/000/000/B.csv to file:///000/000/000/A.CSV\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hdfs:///000/000/000/B.csv"),"\uff1a \u8f93\u51fa\u6587\u4ef6\u8def\u5f84\u53ca\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"file:///000/000/000/B.csv"),"\uff1a \u8f93\u5165\u6587\u4ef6\u8def\u5f84\u53ca\u6587\u4ef6")),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(32792).Z})),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u8bed\u6cd5\u672b\u7aef\u4e0d\u80fd\u5e26\u5206\u53f7(;),\u5426\u5219\u8bed\u6cd5\u9519\u8bef\u3002"),(0,r.kt)("h4",{id:"222-\u7ed3\u679c"},"2.2.2 \u7ed3\u679c"),(0,r.kt)("p",null,"\u8fdb\u5ea6 "),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(77242).Z})),(0,r.kt)("p",null,"\u5386\u53f2\u8bb0\u5f55"),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(31937).Z})))}d.isMDXComponent=!0},31937:function(e,n,i){n.Z=i.p+"assets/images/historical_information-d99bbfb4230732cea0dbb96a34ac990a.png"},77242:function(e,n,i){n.Z=i.p+"assets/images/job_state-fb7240b087736c48def704b2a683b873.png"},20903:function(e,n,i){n.Z=i.p+"assets/images/new_pipeline_script-3a37e4c0883855702a289b87ded7cd90.png"},32792:function(e,n,i){n.Z=i.p+"assets/images/to_write-6b49f070a804d94e1882f6d11c41508c.png"}}]);