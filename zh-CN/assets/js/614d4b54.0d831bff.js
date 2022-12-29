"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[2683],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,k=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},90162:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={title:"\u6570\u636e\u6e90\u529f\u80fd\u4f7f\u7528",sidebar_position:6},l=void 0,s={unversionedId:"user-guide/datasource-manual",id:"version-1.3.0/user-guide/datasource-manual",title:"\u6570\u636e\u6e90\u529f\u80fd\u4f7f\u7528",description:"\u4ecb\u7ecd\u4e00\u4e0b\u5982\u4f55\u4f7f\u75281.1.0\u7248\u672c\u7684\u65b0\u7279\u6027\u529f\u80fd\u6570\u636e\u6e90",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.0/user-guide/datasource-manual.md",sourceDirName:"user-guide",slug:"/user-guide/datasource-manual",permalink:"/zh-CN/docs/latest/user-guide/datasource-manual",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.0/user-guide/datasource-manual.md",tags:[],version:"1.3.0",sidebarPosition:6,frontMatter:{title:"\u6570\u636e\u6e90\u529f\u80fd\u4f7f\u7528",sidebar_position:6},sidebar:"version-1.3.0/tutorialSidebar",previous:{title:"\u7ba1\u7406\u53f0\u7684\u4f7f\u7528",permalink:"/zh-CN/docs/latest/user-guide/console-manual"},next:{title:"\u6570\u636e\u6e90 Client SDK \u7684\u4f7f\u7528",permalink:"/zh-CN/docs/latest/user-guide/datasource-client"}},o={},u=[{value:"1.\u6570\u636e\u6e90\u529f\u80fd\u4ecb\u7ecd",id:"1\u6570\u636e\u6e90\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"1.1 \u6982\u5ff5",id:"11-\u6982\u5ff5",level:3},{value:"1.2 \u4e09\u4e2a\u4e3b\u8981\u6a21\u5757",id:"12-\u4e09\u4e2a\u4e3b\u8981\u6a21\u5757",level:3},{value:"1.3 \u5904\u7406\u903b\u8f91",id:"13-\u5904\u7406\u903b\u8f91",level:3},{value:"1.3.1 LinkisDataSourceRemoteClient",id:"131-linkisdatasourceremoteclient",level:4},{value:"1.3.2 LinkisMetaDataRemoteClient",id:"132-linkismetadataremoteclient",level:4},{value:"1.3 \u6e90\u7801\u6a21\u5757\u76ee\u5f55\u7ed3\u6784",id:"13-\u6e90\u7801\u6a21\u5757\u76ee\u5f55\u7ed3\u6784",level:3},{value:"1.4 \u5b89\u88c5\u5305\u76ee\u5f55\u7ed3\u6784",id:"14-\u5b89\u88c5\u5305\u76ee\u5f55\u7ed3\u6784",level:3},{value:"1.5 \u914d\u7f6e\u53c2\u6570",id:"15-\u914d\u7f6e\u53c2\u6570",level:3},{value:"2. \u6570\u636e\u6e90\u529f\u80fd\u7684\u542f\u7528",id:"2-\u6570\u636e\u6e90\u529f\u80fd\u7684\u542f\u7528",level:2},{value:"3.  \u6570\u636e\u6e90\u7684\u4f7f\u7528",id:"3--\u6570\u636e\u6e90\u7684\u4f7f\u7528",level:2},{value:"3.1  Mysql \u6570\u636e\u6e90",id:"31--mysql-\u6570\u636e\u6e90",level:3},{value:"3.1.1 \u901a\u8fc7\u7ba1\u7406\u53f0\u521b\u5efa",id:"311-\u901a\u8fc7\u7ba1\u7406\u53f0\u521b\u5efa",level:4},{value:"3.1.2 \u4f7f\u7528\u5ba2\u6237\u7aef",id:"312-\u4f7f\u7528\u5ba2\u6237\u7aef",level:4},{value:"3.2  Hive \u6570\u636e\u6e90",id:"32--hive-\u6570\u636e\u6e90",level:3},{value:"3.2.1 \u901a\u8fc7\u7ba1\u7406\u53f0\u521b\u5efa",id:"321-\u901a\u8fc7\u7ba1\u7406\u53f0\u521b\u5efa",level:4},{value:"3.2.2 \u4f7f\u7528\u5ba2\u6237\u7aef",id:"322-\u4f7f\u7528\u5ba2\u6237\u7aef",level:4}],c={toc:u};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ecb\u7ecd\u4e00\u4e0b\u5982\u4f55\u4f7f\u75281.1.0\u7248\u672c\u7684\u65b0\u7279\u6027\u529f\u80fd\u6570\u636e\u6e90")),(0,r.kt)("h2",{id:"1\u6570\u636e\u6e90\u529f\u80fd\u4ecb\u7ecd"},"1.\u6570\u636e\u6e90\u529f\u80fd\u4ecb\u7ecd"),(0,r.kt)("h3",{id:"11-\u6982\u5ff5"},"1.1 \u6982\u5ff5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u6e90:\u6211\u4eec\u5c06\u80fd\u63d0\u4f9b\u6570\u636e\u5b58\u50a8\u7684\u6570\u636e\u5e93\u670d\u52a1\u79f0\u4e3a\u6570\u636e\u5e93\uff0c\u5982mysql/hive/kafka\uff0c\u6570\u636e\u6e90\u5b9a\u4e49\u7684\u662f\u8fde\u63a5\u5230\u5b9e\u9645\u6570\u636e\u5e93\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u914d\u7f6e\u4fe1\u606f\u4e3b\u8981\u662f\u662f\u8fde\u63a5\u9700\u8981\u7684\u5730\u5740\uff0c\u7528\u6237\u8ba4\u8bc1\u4fe1\u606f\uff0c\u8fde\u63a5\u53c2\u6570\u7b49\u3002\u5b58\u50a8\u4e0elinkis\u7684\u6570\u636e\u5e93\u7684linkis",(0,r.kt)("em",{parentName:"li"},"ps_dm_datasource"),"*\u76f8\u5173\u7684\u8868\u4e2d"),(0,r.kt)("li",{parentName:"ul"},"\u5143\u6570\u636e:\u5355\u6307\u6570\u636e\u5e93\u7684\u5143\u6570\u636e\uff0c\u662f\u6307\u5b9a\u4e49\u6570\u636e\u7ed3\u6784\u7684\u6570\u636e\uff0c\u6570\u636e\u5e93\u5404\u7c7b\u5bf9\u8c61\u7ed3\u6784\u7684\u6570\u636e\u3002 \u4f8b\u5982\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e\u5e93\u540d\uff0c\u8868\u540d\uff0c\u5217\u540d\uff0c\u5b57\u6bb5\u7684\u957f\u5ea6\u3001\u7c7b\u578b\u7b49\u4fe1\u606f\u6570\u636e\u3002")),(0,r.kt)("h3",{id:"12-\u4e09\u4e2a\u4e3b\u8981\u6a21\u5757"},"1.2 \u4e09\u4e2a\u4e3b\u8981\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," linkis-datasource-client "),"\n\u5ba2\u6237\u7aef\u6a21\u5757\uff0c\u7528\u6237\u6570\u636e\u6e90\u7684\u57fa\u672c\u7ba1\u7406\u7684DataSourceRemoteClient\uff0c\u4ee5\u53ca\u8fdb\u884c\u5143\u6570\u636e\u7684\u67e5\u8be2\u64cd\u4f5c\u7684MetaDataRemoteClient."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," linkis-datasource-manager-server "),"\n\u6570\u636e\u6e90\u7ba1\u7406\u6a21\u5757,\u670d\u52a1\u540dps-data-source-manager\u3002\u5bf9\u6570\u636e\u6e90\u7684\u8fdb\u884c\u57fa\u672c\u7684\u7ba1\u7406\uff0c\u5bf9\u5916\u63d0\u4f9b\u6570\u636e\u6e90\u7684\u65b0\u589e\uff0c\u67e5\u8be2\uff0c\u4fee\u6539\uff0c\u8fde\u63a5\u6d4b\u8bd5\u7b49http\u63a5\u53e3\u3002\u5bf9\u5185\u63d0\u4f9b\u4e86rpc\u670d\u52a1 \uff0c\u65b9\u4fbf\u5143\u6570\u636e\u67e5\u8be2\u6a21\u5757\u901a\u8fc7rpc\u8c03\u7528\uff0c\u67e5\u8be2\u6570\u636e\u5e93\u5efa\u7acb\u8fde\u63a5\u9700\u8981\u7684\u5fc5\u8981\u4fe1\u606f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/latest/api/http/linkis-ps-publicservice-api/data-source-manager-api"},"http\u63a5\u53e3\u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},"http\u63a5\u53e3\u7c7b org.apache.linkis.metadatamanager.server.restful"),(0,r.kt)("li",{parentName:"ul"},"rpc\u63a5\u53e3\u7c7b org.apache.linkis.metadatamanager.server.receiver")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," linkis-metedata-manager-server  "),"\n\u5143\u6570\u636e\u67e5\u8be2\u6a21\u5757,\u670d\u52a1\u540dps-metadatamanager\u3002\u63d0\u4f9b\u5bf9\u6570\u636e\u5e93\u5143\u6570\u636e\u7684\u57fa\u672c\u67e5\u8be2\u529f\u80fd,\u5bf9\u5916\u63d0\u4f9b\u4e86http\u63a5\u53e3\uff0c\u5bf9\u5185\u63d0\u4f9b\u4e86rpc\u670d\u52a1\uff0c\u65b9\u4fbf\u6570\u636e\u6e90\u7ba1\u7406\u6a21\u5757\uff0c\u901a\u8fc7rpc\u8c03\u7528\uff0c\u8fdb\u884c\u8be5\u6570\u636e\u6e90\u7684\u8fde\u901a\u6027\u6d4b\u8bd5\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/latest/api/http/linkis-ps-publicservice-api/metadatamanager-api"},"http\u63a5\u53e3\u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},"http\u63a5\u53e3\u7c7b org.apache.linkis.datasourcemanager.core.restful"),(0,r.kt)("li",{parentName:"ul"},"rpc\u63a5\u53e3\u7c7b org.apache.linkis.datasourcemanager.core.receivers")),(0,r.kt)("h3",{id:"13-\u5904\u7406\u903b\u8f91"},"1.3 \u5904\u7406\u903b\u8f91"),(0,r.kt)("h4",{id:"131-linkisdatasourceremoteclient"},"1.3.1 LinkisDataSourceRemoteClient"),(0,r.kt)("p",null,"\u529f\u80fd\u7ed3\u6784\u56fe\u5982\u4e0b:\n",(0,r.kt)("img",{alt:"datasource",src:a(72023).Z,width:"860",height:"661"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LinkisDataSourceRemoteClient\u5ba2\u6237\u7aef\u6839\u636e\u8bf7\u6c42\u53c2\u6570\uff0c\u7ec4\u88c5http\u8bf7\u6c42\uff0c"),(0,r.kt)("li",{parentName:"ul"},"HTTP\u8bf7\u6c42\u53d1\u9001\u5230linkis-ps-data-source-manager"),(0,r.kt)("li",{parentName:"ul"},"linkis-ps-data-source-manager \u4f1a\u8fdb\u884c\u57fa\u672c\u53c2\u6570\u6821\u9a8c\uff0c\u90e8\u5206\u63a5\u53e3\u53ea\u80fd\u7ba1\u7406\u5458\u89d2\u8272\u80fd\u64cd\u4f5c "),(0,r.kt)("li",{parentName:"ul"},"linkis-ps-data-source-manager \u4e0e\u6570\u636e\u5e93\u8fdb\u884c\u57fa\u672c\u7684\u6570\u636e\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"linkis-ps-data-source-manager \u63d0\u4f9b\u7684\u6570\u636e\u6e90\u6d4b\u8bd5\u8fde\u63a5\u7684\u63a5\u53e3 \u5185\u90e8\u901a\u8fc7rpc\u65b9\u5f0f\uff0c\u8c03\u7528ps-metadatamanager\u65b9\u6cd5\u8fdb\u884c\u8fde\u63a5\u6d4b\u8bd5"),(0,r.kt)("li",{parentName:"ul"},"http\u8bf7\u6c42\u5904\u7406\u540e\u7684\u6570\u636e\u7ed3\u679c\uff0c\u4f1a\u901a\u8fc7\u6ce8\u89e3DWSHttpMessageResult\u529f\u80fd\uff0c\u8fdb\u884c\u7ed3\u679c\u96c6\u5230\u5b9e\u4f53\u7c7b\u7684\u6620\u5c04\u8f6c\u5316")),(0,r.kt)("p",null,"LinkisDataSourceRemoteClient\u63a5\u53e3 "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GetAllDataSourceTypesResult getAllDataSourceTypes(GetAllDataSourceTypesAction) \u67e5\u8be2\u6240\u6709\u6570\u636e\u6e90\u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},"QueryDataSourceEnvResult queryDataSourceEnv(QueryDataSourceEnvAction) \u67e5\u8be2\u6570\u636e\u6e90\u53ef\u4f7f\u7528\u7684\u96c6\u7fa4\u914d\u7f6e\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"GetInfoByDataSourceIdResult getInfoByDataSourceId(GetInfoByDataSourceIdAction): \u901a\u8fc7\u6570\u636e\u6e90id\u67e5\u8be2\u6570\u636e\u6e90\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"QueryDataSourceResult queryDataSource(QueryDataSourceAction)  \u67e5\u8be2\u6570\u636e\u6e90\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"GetConnectParamsByDataSourceIdResult getConnectParams(GetConnectParamsByDataSourceIdAction) \u83b7\u53d6\u8fde\u63a5\u914d\u7f6e\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"CreateDataSourceResult createDataSource(CreateDataSourceAction) \u521b\u5efa\u6570\u636e\u6e90"),(0,r.kt)("li",{parentName:"ul"},"DataSourceTestConnectResult getDataSourceTestConnect(DataSourceTestConnectAction)  \u6d4b\u8bd5\u6570\u636e\u6e90\u662f\u5426\u80fd\u6b63\u5e38\u5efa\u7acb\u8fde\u63a5"),(0,r.kt)("li",{parentName:"ul"},"DeleteDataSourceResult deleteDataSource(DeleteDataSourceAction) \u5220\u9664\u6570\u636e\u6e90"),(0,r.kt)("li",{parentName:"ul"},"ExpireDataSourceResult expireDataSource(ExpireDataSourceAction) \u8bbe\u7f6e\u6570\u636e\u6e90\u4e3a\u8fc7\u671f\u72b6\u6001"),(0,r.kt)("li",{parentName:"ul"},"GetDataSourceVersionsResult getDataSourceVersions(GetDataSourceVersionsAction)  \u67e5\u8be2\u6570\u636e\u6e90\u914d\u7f6e\u7684\u7248\u672c\u5217\u8868"),(0,r.kt)("li",{parentName:"ul"},"PublishDataSourceVersionResult publishDataSourceVersion(PublishDataSourceVersionAction) \u53d1\u5e03\u6570\u636e\u6e90\u914d\u7f6e\u7248\u672c "),(0,r.kt)("li",{parentName:"ul"},"UpdateDataSourceResult updateDataSource(UpdateDataSourceAction) \u66f4\u65b0\u6570\u636e\u6e90 "),(0,r.kt)("li",{parentName:"ul"},"UpdateDataSourceParameterResult updateDataSourceParameter(UpdateDataSourceParameterAction) \u66f4\u65b0\u6570\u636e\u6e90\u914d\u7f6e\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"GetKeyTypeDatasourceResult getKeyDefinitionsByType(GetKeyTypeDatasourceAction) \u67e5\u8be2\u67d0\u6570\u636e\u6e90\u7c7b\u578b\u9700\u8981\u7684\u914d\u7f6e\u5c5e\u6027")),(0,r.kt)("h4",{id:"132-linkismetadataremoteclient"},"1.3.2 LinkisMetaDataRemoteClient"),(0,r.kt)("p",null,"\u529f\u80fd\u7ed3\u6784\u56fe\u5982\u4e0b:\n",(0,r.kt)("img",{alt:"metadata",src:a(56595).Z,width:"931",height:"527"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LinkisMetaDataRemoteClient\u5ba2\u6237\u7aef\uff0c\u6839\u636e\u8bf7\u6c42\u53c2\u6570\uff0c\u7ec4\u88c5http\u8bf7\u6c42\uff0c "),(0,r.kt)("li",{parentName:"ul"},"HTTP\u8bf7\u6c42\u53d1\u9001\u5230ps-metadatamanager"),(0,r.kt)("li",{parentName:"ul"},"ps-metadatamanager \u4f1a\u8fdb\u884c\u57fa\u672c\u53c2\u6570\u6821\u9a8c\uff0c"),(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u4f1a\u6839\u636e\u53c2\u6570 datasourceId\uff0c\u53d1\u9001RPC\u8bf7\u6c42\u5230linkis-ps-data-source-manager\uff0c\u83b7\u53d6\u8be5\u6570\u636e\u6e90\u7684\u7c7b\u578b\uff0c\u8fde\u63a5\u53c2\u6570\u5982\u7528\u6237\u540d\u5bc6\u7801\u7b49\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"\u62ff\u5230\u8fde\u63a5\u9700\u8981\u7684\u4fe1\u606f\u540e\uff0c\u6839\u636e\u6570\u636e\u6e90\u7c7b\u578b\uff0c\u52a0\u8f7d\u5bf9\u5e94\u76ee\u5f55\u4e0b\u7684lib\u5305\uff0c\u901a\u8fc7\u53cd\u5c04\u673a\u5236\u8c03\u7528\u5bf9\u5e94\u7684\u51fd\u6570\u65b9\u6cd5\uff0c\u4ece\u800c\u67e5\u8be2\u5230\u5143\u6570\u636e\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"http\u8bf7\u6c42\u5904\u7406\u540e\u7684\u6570\u636e\u7ed3\u679c\uff0c\u4f1a\u901a\u8fc7\u6ce8\u89e3DWSHttpMessageResult\u529f\u80fd\uff0c\u8fdb\u884c\u7ed3\u679c\u96c6\u5230\u5b9e\u4f53\u7c7b\u7684\u6620\u5c04\u8f6c\u5316 ")),(0,r.kt)("p",null,"LinkisMetaDataRemoteClient\u63a5\u53e3 "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MetadataGetDatabasesResult getDatabases(MetadataGetDatabasesAction) \u67e5\u8be2\u6570\u636e\u5e93\u5217\u8868"),(0,r.kt)("li",{parentName:"ul"},"MetadataGetTablesResult getTables(MetadataGetTablesAction) \u67e5\u8be2table\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"MetadataGetTablePropsResult getTableProps(MetadataGetTablePropsAction)"),(0,r.kt)("li",{parentName:"ul"},"MetadataGetPartitionsResult getPartitions(MetadataGetPartitionsAction) \u67e5\u8be2\u5206\u533a\u8868"),(0,r.kt)("li",{parentName:"ul"},"MetadataGetColumnsResult getColumns(MetadataGetColumnsAction) \u67e5\u8be2\u6570\u636e\u8868\u5b57\u6bb5")),(0,r.kt)("h3",{id:"13-\u6e90\u7801\u6a21\u5757\u76ee\u5f55\u7ed3\u6784"},"1.3 \u6e90\u7801\u6a21\u5757\u76ee\u5f55\u7ed3\u6784"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"linkis-public-enhancements/linkis-datasource\n\n\u251c\u2500\u2500 linkis-datasource-client //\u5ba2\u6237\u7aef\u4ee3\u7801\n\u251c\u2500\u2500 linkis-datasource-manager //\u6570\u636e\u6e90\u7ba1\u7406\u6a21\u5757\n\u2502\xa0\xa0 \u251c\u2500\u2500 common  //\u6570\u636e\u6e90\u7ba1\u7406\u516c\u5171\u6a21\u5757\n\u2502\xa0\xa0 \u2514\u2500\u2500 server  //\u6570\u636e\u6e90\u7ba1\u7406\u670d\u52a1\u6a21\u5757\n\u251c\u2500\u2500 linkis-metadata //\u65e7\u7248\u672c\u5df2\u6709\u7684\u6a21\u5757\uff0c\u4fdd\u7559\n\u251c\u2500\u2500 linkis-metadata-manager //\u5143\u6570\u636e\u67e5\u8be2\u6a21\u5757\n\u2502\xa0\xa0 \u251c\u2500\u2500 common //\u5143\u6570\u636e\u67e5\u8be2\u516c\u5171\u6a21\u5757\n\u2502\xa0\xa0 \u251c\u2500\u2500 server //\u5143\u6570\u636e\u67e5\u8be2\u670d\u52a1\u6a21\u5757\n\u2502\xa0\xa0 \u2514\u2500\u2500 service //\u652f\u6301\u7684\u6570\u636e\u6e90\u7c7b\u578b \n\u2502\xa0\xa0     \u251c\u2500\u2500 elasticsearch\n\u2502\xa0\xa0     \u251c\u2500\u2500 hive \n\u2502\xa0\xa0     \u251c\u2500\u2500 kafka\n\u2502\xa0\xa0     \u2514\u2500\u2500 mysql\n\n\n")),(0,r.kt)("h3",{id:"14-\u5b89\u88c5\u5305\u76ee\u5f55\u7ed3\u6784"},"1.4 \u5b89\u88c5\u5305\u76ee\u5f55\u7ed3\u6784"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"/lib/linkis-public-enhancements/\n\n\u251c\u2500\u2500 linkis-ps-data-source-manager\n\u251c\u2500\u2500 linkis-ps-metadatamanager\n\u2502\xa0\xa0 \u2514\u2500\u2500 service\n\u2502\xa0\xa0     \u251c\u2500\u2500 elasticsearch\n\u2502\xa0\xa0     \u251c\u2500\u2500 hive\n\u2502\xa0\xa0     \u251c\u2500\u2500 kafka\n\u2502\xa0\xa0     \u2514\u2500\u2500 mysql\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wds.linkis.server.mdm.service.lib.dir")," \u63a7\u5236\u53cd\u5c04\u8c03\u7528\u65f6\u52a0\u8f7d\u7684\u7c7b\u8def\u5f84\uff0c\u53c2\u6570\u9ed8\u8ba4\u503c\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"/lib/linkis-public-enhancements/linkis-ps-metadatamanager/service")),(0,r.kt)("h3",{id:"15-\u914d\u7f6e\u53c2\u6570"},"1.5 \u914d\u7f6e\u53c2\u6570"),(0,r.kt)("p",null,"\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.0/tuning-and-troubleshooting/configuration/#6-%E6%95%B0%E6%8D%AE%E6%BA%90%E5%8F%8A%E5%85%83%E6%95%B0%E6%8D%AE%E6%9C%8D%E5%8A%A1%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0"},"\u8c03\u4f18\u6392\u969c>\u53c2\u6570\u5217\u8868#datasource\u914d\u7f6e\u53c2\u6570")),(0,r.kt)("h2",{id:"2-\u6570\u636e\u6e90\u529f\u80fd\u7684\u542f\u7528"},"2. \u6570\u636e\u6e90\u529f\u80fd\u7684\u542f\u7528"),(0,r.kt)("p",null,"linkis\u7684\u542f\u52a8\u811a\u672c\u4e2d\u9ed8\u8ba4\u4e0d\u4f1a\u542f\u52a8\u6570\u636e\u6e90\u76f8\u5173\u7684\u670d\u52a1\u4e24\u4e2a\u670d\u52a1\uff08ps-data-source-manager\uff0cps-metadatamanager\uff09\uff0c\n\u5982\u679c\u60f3\u4f7f\u7528\u6570\u636e\u6e90\u670d\u52a1\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u8fdb\u884c\u5f00\u542f:\n\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"$LINKIS_CONF_DIR/linkis-env.sh"),"\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"export ENABLE_METADATA_MANAGER=true"),"\u503c\u4e3atrue\u3002\n\u901a\u8fc7linkis-start-all.sh/linkis-stop-all.sh \u8fdb\u884c\u670d\u52a1\u542f\u505c\u65f6\uff0c\u4f1a\u8fdb\u884c\u6570\u636e\u6e90\u670d\u52a1\u7684\u542f\u52a8\u4e0e\u505c\u6b62\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7eureka\u9875\u9762\u67e5\u770b\u670d\u52a1\u662f\u5426\u6b63\u5e38\u542f\u52a8 "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"datasource eureka",src:a(65533).Z,width:"1820",height:"450"})),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"1.linkis\u7684\u7ba1\u7406\u53f0web\u7248\u672c\u9700\u8981\u914d\u5408\u5347\u7ea7\u81f31.1.0\u7248\u672c\u624d\u80fd\u5728linkis\u7ba1\u7406\u53f0\u4e0a\u4f7f\u7528\u6570\u636e\u6e90\u7ba1\u7406\u9875\u9762\u529f\u80fd\u3002"),(0,r.kt)("li",{parentName:"ul"},"2.\u76ee\u524d\u6570\u636e\u6e90\u4e2d\u5df2\u6709mysql/hive/kafak/elasticsearch\u7684jar\u5305, \u4f46\u662fkafak/elasticsearch\u6570\u636e\u6e90\u672a\u7ecf\u8fc7\u4e25\u683c\u7684\u6d4b\u8bd5\uff0c\u4e0d\u4fdd\u8bc1\u529f\u80fd\u7684\u5b8c\u6574\u53ef\u7528\u6027\u3002"))),(0,r.kt)("h2",{id:"3--\u6570\u636e\u6e90\u7684\u4f7f\u7528"},"3.  \u6570\u636e\u6e90\u7684\u4f7f\u7528"),(0,r.kt)("p",null,"\u6570\u636e\u6e90\u7684\u4f7f\u7528\u5206\u4e3a\u4e09\u6b65:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"step 1. \u521b\u5efa\u6570\u636e\u6e90/\u914d\u7f6e\u8fde\u63a5\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"step 2. \u53d1\u5e03\u6570\u636e\u6e90,\u9009\u62e9\u8981\u4f7f\u7528\u7684\u8fde\u63a5\u914d\u7f6e\u7248\u672c"),(0,r.kt)("li",{parentName:"ul"},"step 3. \u6570\u636e\u6e90\u4f7f\u7528\uff0c\u67e5\u8be2\u5143\u6570\u636e\u4fe1\u606f\n,hive/kafka/elasticsearch\u914d\u7f6e\u662f\u5173\u8054\u5bf9\u5e94\u7684\u96c6\u7fa4\u73af\u5883\u914d\u7f6e.")),(0,r.kt)("h3",{id:"31--mysql-\u6570\u636e\u6e90"},"3.1  Mysql \u6570\u636e\u6e90"),(0,r.kt)("h4",{id:"311-\u901a\u8fc7\u7ba1\u7406\u53f0\u521b\u5efa"},"3.1.1 \u901a\u8fc7\u7ba1\u7406\u53f0\u521b\u5efa"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53ea\u80fd\u521b\u5efa\u914d\u7f6e\u6570\u636e\u6e90\uff0c\u4ee5\u53ca\u6d4b\u8bd5\u6570\u636e\u6e90\u662f\u5426\u80fd\u6b63\u5e38\u8fde\u63a5\uff0c\u65e0\u6cd5\u8fdb\u884c\u76f4\u63a5\u8fdb\u884c\u5143\u6570\u636e\u67e5\u8be2")),(0,r.kt)("p",null,"\u6570\u636e\u6e90\u7ba1\u7406>\u65b0\u589e\u6570\u636e\u6e90>\u9009\u62e9mysql\u7c7b\u578b"),(0,r.kt)("p",null,"\u8f93\u5165\u76f8\u5173\u7684\u914d\u7f6e\u4fe1\u606f"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create mysql",src:a(57649).Z,width:"1889",height:"751"})),(0,r.kt)("p",null,"\u5f55\u5165\u6210\u529f\u540e\u53ef\u4ee5\u901a\u8fc7\u8fde\u63a5\u6d4b\u8bd5\u9a8c\u8bc1\u662f\u5426\u80fd\u591f\u6b63\u5e38\u8fdb\u884c\u8fde\u63a5"),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u7ba1\u7406\u53f0\u521b\u5efa\u7684\u6570\u636e\u6e90\u5f52\u5c5e\u7684system\u662fLinkis"),(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6210\u529f\u540e\uff0c\u8fd8\u9700\u8981\u8fdb\u884c\u53d1\u5e03(\u53d1\u5e03\u65f6\u8fdb\u884c\u914d\u7f6e\u53c2\u6570\u7248\u672c\u7684\u5207\u6362\u548c\u9009\u62e9)\uff0c\u624d\u80fd\u88ab\u6b63\u5e38\u4f7f\u7528"))),(0,r.kt)("p",null,"\u914d\u7f6e\u7684\u53d1\u5e03(\u4f7f\u7528\u90a3\u4e2a\u914d\u7f6e\u8fdb\u884c\u6570\u636e\u6e90\u7684\u5efa\u8fde):"),(0,r.kt)("p",null,"\u70b9\u51fb\u7248\u672c\u540e\u518d\u5f39\u7a97\u9875\u9762\u9009\u62e9\u5408\u9002\u7684\u914d\u7f6e\u8fdb\u884c\u53d1\u5e03"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"publish",src:a(32204).Z,width:"1635",height:"574"})),(0,r.kt)("h4",{id:"312-\u4f7f\u7528\u5ba2\u6237\u7aef"},"3.1.2 \u4f7f\u7528\u5ba2\u6237\u7aef"),(0,r.kt)("p",null,"scala \u4ee3\u7801\u793a\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'package org.apache.linkis.datasource.client\nimport java.util\nimport java.util.concurrent.TimeUnit\n\nimport org.apache.linkis.common.utils.JsonUtils\nimport org.apache.linkis.datasource.client.impl.{LinkisDataSourceRemoteClient, LinkisMetaDataRemoteClient}\nimport org.apache.linkis.datasource.client.request._\nimport org.apache.linkis.datasource.client.response._\nimport org.apache.linkis.datasourcemanager.common.domain.DataSource\nimport org.apache.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy\nimport org.apache.linkis.httpclient.dws.config.DWSClientConfigBuilder\nimport org.junit.jupiter.api.{Disabled, Test}\n\nobject TestMysqlClient {\n\n  val gatewayUrl = "http://127.0.0.1:9001"\n  val clientConfig = DWSClientConfigBuilder.newBuilder\n    .addServerUrl(gatewayUrl)\n    .connectionTimeout(30000)\n    .discoveryEnabled(false)\n    .discoveryFrequency(1, TimeUnit.MINUTES)\n    .loadbalancerEnabled(true)\n    .maxConnectionSize(1)\n    .retryEnabled(false)\n    .readTimeout(30000)\n    .setAuthenticationStrategy(new StaticAuthenticationStrategy)\n    .setAuthTokenKey("hadoop")\n    .setAuthTokenValue("xxxxx")\n    .setDWSVersion("v1")\n\n  val dataSourceclient = new LinkisDataSourceRemoteClient(clientConfig.build())\n\n  val clientConfig2 = DWSClientConfigBuilder.newBuilder\n    .addServerUrl(gatewayUrl)\n    .connectionTimeout(30000)\n    .discoveryEnabled(false)\n    .discoveryFrequency(1, TimeUnit.MINUTES)\n    .loadbalancerEnabled(true)\n    .maxConnectionSize(1)\n    .retryEnabled(false)\n    .readTimeout(30000)\n    .setAuthenticationStrategy(new StaticAuthenticationStrategy)\n    .setAuthTokenKey("hadoop")\n    .setAuthTokenValue("xxxxx")\n    .setDWSVersion("v1")\n\n  val metaDataClient = new LinkisMetaDataRemoteClient(clientConfig2.build())\n\n  @Test\n  @Disabled\n  def testCreateDataSourceMysql: Unit = {\n    val user = "hadoop"\n    val system = "Linkis"\n\n    //\u521b\u5efa\u6570\u636e\u6e90\n    val dataSource = new DataSource();\n    dataSource.setDataSourceName("for-mysql-test")\n    dataSource.setDataSourceDesc("this is for mysql test")\n    dataSource.setCreateSystem(system)\n    dataSource.setDataSourceTypeId(1L)\n\n    val map = JsonUtils.jackson.readValue(JsonUtils.jackson.writeValueAsString(dataSource), new util.HashMap[String, Any]().getClass)\n    val createDataSourceAction: CreateDataSourceAction = CreateDataSourceAction.builder()\n      .setUser(user)\n      .addRequestPayloads(map)\n      .build()\n    val createDataSourceResult: CreateDataSourceResult = dataSourceclient.createDataSource(createDataSourceAction)\n    val dataSourceId = createDataSourceResult.getInsertId\n\n\n    //\u8bbe\u7f6e\u8fde\u63a5\u53c2\u6570\n    val params = new util.HashMap[String, Any]\n\n    val connectParams = new util.HashMap[String, Any]\n    connectParams.put("host", "127.0.0.1")\n    connectParams.put("port", "36000")\n    connectParams.put("username", "db username")\n    connectParams.put("password", "db password")\n\n    params.put("connectParams", connectParams)\n    params.put("comment", "init")\n\n    val updateParameterAction: UpdateDataSourceParameterAction = UpdateDataSourceParameterAction.builder()\n      .setUser(user)\n      .setDataSourceId(dataSourceId)\n      .addRequestPayloads(params)\n      .build()\n    val updateParameterResult: UpdateDataSourceParameterResult = dataSourceclient.updateDataSourceParameter(updateParameterAction)\n\n    val version: Long = updateParameterResult.getVersion\n\n    //\u53d1\u5e03\u914d\u7f6e\u7248\u672c\n    dataSourceclient.publishDataSourceVersion(\n      PublishDataSourceVersionAction.builder()\n        .setDataSourceId(dataSourceId)\n        .setUser(user)\n        .setVersion(version)\n        .build())\n\n     //\u4f7f\u7528\u793a\u4f8b\n    val metadataGetDatabasesAction: MetadataGetDatabasesAction = MetadataGetDatabasesAction.builder()\n      .setUser(user)\n      .setDataSourceId(dataSourceId)\n      .setSystem(system)\n      .build()\n    val metadataGetDatabasesResult: MetadataGetDatabasesResult = metaDataClient.getDatabases(metadataGetDatabasesAction)\n\n    val metadataGetTablesAction: MetadataGetTablesAction = MetadataGetTablesAction.builder()\n      .setUser(user)\n      .setDataSourceId(dataSourceId)\n      .setDatabase("linkis")\n      .setSystem(system)\n      .build()\n    val metadataGetTablesResult: MetadataGetTablesResult = metaDataClient.getTables(metadataGetTablesAction)\n\n    val metadataGetColumnsAction = MetadataGetColumnsAction.builder()\n      .setUser(user)\n      .setDataSourceId(dataSourceId)\n      .setDatabase("linkis")\n      .setSystem(system)\n      .setTable("linkis_datasource")\n      .build()\n    val metadataGetColumnsResult: MetadataGetColumnsResult = metaDataClient.getColumns(metadataGetColumnsAction)\n    \n  }\n}\n\n')),(0,r.kt)("h3",{id:"32--hive-\u6570\u636e\u6e90"},"3.2  Hive \u6570\u636e\u6e90"),(0,r.kt)("h4",{id:"321-\u901a\u8fc7\u7ba1\u7406\u53f0\u521b\u5efa"},"3.2.1 \u901a\u8fc7\u7ba1\u7406\u53f0\u521b\u5efa"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53ea\u80fd\u521b\u5efa\u914d\u7f6e\u6570\u636e\u6e90\uff0c\u4ee5\u53ca\u6d4b\u8bd5\u6570\u636e\u6e90\u662f\u5426\u80fd\u6b63\u5e38\u8fde\u63a5\uff0c\u65e0\u6cd5\u8fdb\u884c\u76f4\u63a5\u8fdb\u884c\u5143\u6570\u636e\u67e5\u8be2")),(0,r.kt)("p",null,"\u5148\u9700\u8981\u8fdb\u884c\u96c6\u7fa4\u73af\u5883\u4fe1\u606f\u7684\u914d\u7f6e"),(0,r.kt)("p",null,"\u8868",(0,r.kt)("inlineCode",{parentName:"p"},"linkis_ps_dm_datasource_env")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-roomsql"},'INSERT INTO `linkis_ps_dm_datasource_env` \n(`env_name`, `env_desc`, `datasource_type_id`, `parameter`,`create_user`,`modify_user`) \nVALUES \n(\'testEnv\', \'\u6d4b\u8bd5\u73af\u5883\', 4, \n\'{\\r\\n    "uris": "thrift://clustername:9083",\\r\\n    "keytab": "4dd408ad-a2f9-4501-83b3-139290977ca2",\\r\\n    "principle":"hadoop@WEBANK.COM",\\r\\n    "hadoopConf":{"hive.metastore.execute.setugi":"true"}\\r\\n}\',\n\'user\',\'user\');\n')),(0,r.kt)("p",null,"\u4e3b\u952eid\u4f5c\u4e3aenvId\uff0c\u5728\u5efa\u7acb\u8fde\u63a5\u65f6\uff0c\u9700\u8981\u901a\u8fc7\u6b64envId\u53c2\u6570\uff0c\u83b7\u53d6\u96c6\u7fa4\u914d\u7f6e\u76f8\u5173\u4fe1\u606f\u3002\n\u914d\u7f6e\u5b57\u6bb5\u89e3\u91ca:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "uris": "thrift://clustername:9083", # \u5fc5\u9009 \u5982\u679c\u672a\u5f00\u542fkerberos\u8ba4\u8bc1 \u4e0b\u5217[keytab][principle]\u53c2\u6570\u53ef\u4ee5\u4e3a\u7a7a\n    "keytab": "bml resource id",//keytab \u5b58\u50a8\u518d\u7269\u6599\u5e93\u4e2d\u7684resourceId,\u76ee\u524d\u9700\u8981\u901a\u8fc7http\u63a5\u53e3\u624b\u52a8\u4e0a\u4f20\u3002\n    "principle":"hadoop@WEBANK.COM" //\u8ba4\u8bc1\u7684principle\n    "hadoopConf":{} //\u989d\u5916\u7684\u8fde\u63a5\u53c2\u6570 \u53ef\u9009\n}\n')),(0,r.kt)("p",null,"keytab\u7684resourceId\u83b7\u53d6\u65b9\u5f0f\uff0c\u76ee\u524d\u57fa\u7840\u6570\u636e\u7ba1\u7406\u529f\u80fd\u8fd8\u5728\u89c4\u5212\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7http\u63a5\u53e3\u8bf7\u6c42\u83b7\u53d6\u5230\n\u53c2\u8003\u793a\u4f8b "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'curl --form "file=@\u6587\u4ef6\u8def\u5f84"  \\\n--form system=\u5b50\u7cfb\u7edf\u540d   \\\n-H "Token-Code:\u8ba4\u8bc1token" \\\n-H "Token-User:\u8ba4\u8bc1\u7528\u6237\u540d"  \\\nhttp://linkis-gatewayip:port/api/rest_j/v1/bml/upload\n\n\u793a\u4f8b:\ncurl --form "file=@/appcom/keytab/hadoop.keytab"  \\\n--form system=ABCD   \\\n-H "Token-Code:QML-AUTH" \\\n-H "Token-User:hadoop"  \\\nhttp://127.0.0.1:9001/api/rest_j/v1/bml/upload\n\n\u8bf7\u6c42\u7ed3\u679c\u4e2d\u7684resourceId \u5373\u4e3a\u5bf9\u5e94\u7684`bml resource id`\u503c \n{"method":"/bml/upload","status":0,"message":"The task of submitting and uploading resources was successful(\u63d0\u4ea4\u4e0a\u4f20\u8d44\u6e90\u4efb\u52a1\u6210\u529f)","data":{"resourceId":"6e4e54fc-cc97-4d0d-8d5e-a311129ec84e","version":"v000001","taskId":35}}\n')),(0,r.kt)("p",null,"web\u7aef\u521b\u5efa:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create_hive",src:a(76728).Z,width:"1624",height:"554"})),(0,r.kt)("h4",{id:"322-\u4f7f\u7528\u5ba2\u6237\u7aef"},"3.2.2 \u4f7f\u7528\u5ba2\u6237\u7aef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'package org.apache.linkis.datasource.client\n\nimport java.util\nimport java.util.concurrent.TimeUnit\n\nimport org.apache.linkis.common.utils.JsonUtils\nimport org.apache.linkis.datasource.client.impl.{LinkisDataSourceRemoteClient, LinkisMetaDataRemoteClient}\nimport org.apache.linkis.datasource.client.request._\nimport org.apache.linkis.datasource.client.response._\nimport org.apache.linkis.datasourcemanager.common.domain.DataSource\nimport org.apache.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy\nimport org.apache.linkis.httpclient.dws.config.DWSClientConfigBuilder\nimport org.junit.jupiter.api.{Disabled, Test}\n\nobject TestHiveClient {\n  val gatewayUrl = "http://127.0.0.1:9001"\n  val clientConfig = DWSClientConfigBuilder.newBuilder\n    .addServerUrl(gatewayUrl)\n    .connectionTimeout(30000)\n    .discoveryEnabled(false)\n    .discoveryFrequency(1, TimeUnit.MINUTES)\n    .loadbalancerEnabled(true)\n    .maxConnectionSize(1)\n    .retryEnabled(false)\n    .readTimeout(30000)\n    .setAuthenticationStrategy(new StaticAuthenticationStrategy)\n    .setAuthTokenKey("hadoop")\n    .setAuthTokenValue("xxxxx")\n    .setDWSVersion("v1")\n\n  val dataSourceclient = new LinkisDataSourceRemoteClient(clientConfig.build())\n\n  val clientConfig2 = DWSClientConfigBuilder.newBuilder\n    .addServerUrl(gatewayUrl)\n    .connectionTimeout(30000)\n    .discoveryEnabled(false)\n    .discoveryFrequency(1, TimeUnit.MINUTES)\n    .loadbalancerEnabled(true)\n    .maxConnectionSize(1)\n    .retryEnabled(false)\n    .readTimeout(30000)\n    .setAuthenticationStrategy(new StaticAuthenticationStrategy)\n    .setAuthTokenKey("hadoop")\n    .setAuthTokenValue("xxxxx")\n    .setDWSVersion("v1")\n\n  val metaDataClient = new LinkisMetaDataRemoteClient(clientConfig2.build())\n\n\n  @Test\n  @Disabled\n  def testCreateDataSourceMysql: Unit = {\n    val user = "hadoop"\n    val system = "Linkis"\n\n   //\u521b\u5efa\u6570\u636e\u6e90\n    val dataSource = new DataSource();\n    dataSource.setDataSourceName("for-hive-test")\n    dataSource.setDataSourceDesc("this is for hive test")\n    dataSource.setCreateSystem(system)\n    dataSource.setDataSourceTypeId(4L)\n\n    val map = JsonUtils.jackson.readValue(JsonUtils.jackson.writeValueAsString(dataSource), new util.HashMap[String, Any]().getClass)\n    val createDataSourceAction: CreateDataSourceAction = CreateDataSourceAction.builder()\n      .setUser(user)\n      .addRequestPayloads(map)\n      .build()\n    val createDataSourceResult: CreateDataSourceResult = dataSourceclient.createDataSource(createDataSourceAction)\n    val dataSourceId = createDataSourceResult.getInsertId\n\n     //\u8bbe\u7f6e\u8fde\u63a5\u53c2\u6570\n    val params = new util.HashMap[String, Any]\n    val connectParams = new util.HashMap[String, Any]\n    connectParams.put("envId", "3")\n    params.put("connectParams", connectParams)\n    params.put("comment", "init")\n\n    val updateParameterAction: UpdateDataSourceParameterAction = UpdateDataSourceParameterAction.builder()\n      .setUser(user)\n      .setDataSourceId(dataSourceId)\n      .addRequestPayloads(params)\n      .build()\n    val updateParameterResult: UpdateDataSourceParameterResult = dataSourceclient.updateDataSourceParameter(updateParameterAction)\n\n    val version: Long = updateParameterResult.getVersion\n\n    //\u53d1\u5e03\u914d\u7f6e\u7248\u672c\n    dataSourceclient.publishDataSourceVersion(\n      PublishDataSourceVersionAction.builder()\n        .setDataSourceId(dataSourceId)\n        .setUser(user)\n        .setVersion(version)\n        .build())\n\n    //\u4f7f\u7528\u793a\u4f8b\n    val metadataGetDatabasesAction: MetadataGetDatabasesAction = MetadataGetDatabasesAction.builder()\n      .setUser(user)\n      .setDataSourceId(dataSourceId)\n      .setSystem(system)\n      .build()\n    val metadataGetDatabasesResult: MetadataGetDatabasesResult = metaDataClient.getDatabases(metadataGetDatabasesAction)\n\n    val metadataGetTablesAction: MetadataGetTablesAction = MetadataGetTablesAction.builder()\n      .setUser(user)\n      .setDataSourceId(dataSourceId)\n      .setDatabase("linkis_test_ind")\n      .setSystem(system)\n      .build()\n    val metadataGetTablesResult: MetadataGetTablesResult = metaDataClient.getTables(metadataGetTablesAction)\n\n\n\n    val metadataGetColumnsAction = MetadataGetColumnsAction.builder()\n      .setUser(user)\n      .setDataSourceId(dataSourceId)\n      .setDatabase("linkis_test_ind")\n      .setSystem(system)\n      .setTable("test")\n      .build()\n    val metadataGetColumnsResult: MetadataGetColumnsResult = metaDataClient.getColumns(metadataGetColumnsAction)\n\n  }\n}\n')))}d.isMDXComponent=!0},76728:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_hive-6b7da346506ec10f1ebd68ed37ff4e12.png"},57649:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_mysql-748ae7a51622be09651e31630bf6403e.png"},72023:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/datasource-33466f8154b90ce8c308f80af54fed9d.png"},65533:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eureka-6c655a155cf632afe0003ad92f7cddd7.png"},56595:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/metadata-00c6c1e49a4eafa8a2496b9a08917758.png"},32204:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/publish_version-74eb63ec4aedd2b4a28ff93fbb5e567d.png"}}]);