"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[4276],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),h=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=h(e.components);return a.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=h(t),f=n,d=p["".concat(s,".").concat(f)]||p[f]||l[f]||o;return t?a.createElement(d,c(c({ref:r},u),{},{components:t})):a.createElement(d,c({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=p;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var h=2;h<o;h++)c[h]=t[h];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7020:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return h},toc:function(){return u},default:function(){return p}});var a=t(7462),n=t(3366),o=(t(7294),t(3905)),c=["components"],i={},s=void 0,h={unversionedId:"architecture/orchestrator/orchestrator_reheater_architecture",id:"architecture/orchestrator/orchestrator_reheater_architecture",isDocsHomePage:!1,title:"orchestrator_reheater_architecture",description:"Orchestrator Reheater\u67b6\u6784",source:"@site/docs/architecture/orchestrator/orchestrator_reheater_architecture.md",sourceDirName:"architecture/orchestrator",slug:"/architecture/orchestrator/orchestrator_reheater_architecture",permalink:"/docs/next/architecture/orchestrator/orchestrator_reheater_architecture",editUrl:"https://github.com/apache/incubator-linkis-website/edit/master/docs/architecture/orchestrator/orchestrator_reheater_architecture.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Orchestrator-Operation\u67b6\u6784\u8bbe\u8ba1",permalink:"/docs/next/architecture/orchestrator/orchestrator_operation_architecture_doc"},next:{title:"orchestrator_transform_architecture",permalink:"/docs/next/architecture/orchestrator/orchestrator_transform_architecture"}},u=[{value:"<strong>Orchestrator Reheater\u67b6\u6784</strong>",id:"orchestrator-reheater\u67b6\u6784",children:[{value:"<strong>\u4e00. Reheater\u6982\u5ff5</strong>",id:"\u4e00-reheater\u6982\u5ff5",children:[]},{value:"<strong>\u4e8c. Reheater\u67b6\u6784\u56fe</strong>",id:"\u4e8c-reheater\u67b6\u6784\u56fe",children:[]}]}],l={toc:u};function p(e){var r=e.components,i=(0,n.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},l,i,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"orchestrator-reheater\u67b6\u6784"},(0,o.kt)("strong",{parentName:"h2"},"Orchestrator Reheater\u67b6\u6784")),(0,o.kt)("h3",{id:"\u4e00-reheater\u6982\u5ff5"},(0,o.kt)("strong",{parentName:"h3"},"\u4e00. Reheater\u6982\u5ff5")),(0,o.kt)("p",null,"Orchestrator-Reheater\u6a21\u5757\u662fOrchestrator\u7684\u91cd\u653e\u6a21\u5757\uff0c\u7528\u4e8e\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u52a8\u6001\u8c03\u6574JobGroup\u7684\u6267\u884c\u8ba1\u5212\uff0c\u4e3aJobGroup\u52a8\u6001\u6dfb\u52a0Job\u3001Stage\u548cTask\u3002\u4ece\u800c\u907f\u514d\u7f51\u7edc\u7b49\u539f\u56e0\u5f15\u8d77\u7684\u5b50\u4efb\u52a1\u5931\u8d25\u3002\u76ee\u524d\u4e3b\u8981\u6709\u4efb\u52a1\u76f8\u5173\u7684TaskReheater\uff0c\u5305\u542b\u91cd\u8bd5\u7c7b\u578b\u7684RetryTaskReheater"),(0,o.kt)("h3",{id:"\u4e8c-reheater\u67b6\u6784\u56fe"},(0,o.kt)("strong",{parentName:"h3"},"\u4e8c. Reheater\u67b6\u6784\u56fe")),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(918).Z})),(0,o.kt)("p",null,"Reheater\u5728\u4efb\u52a1\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u6536\u5230ReheaterEvent\uff0c\u4ece\u800c\u4f1a\u5bf9\u7f16\u6392\u540e\u7684PhysicalTree\u8fdb\u884c\u8c03\u6574\uff0c\u52a8\u6001\u6dfb\u52a0Job\u3001Stage\u3001Task\u3002\u76ee\u524d\u5e38\u7528\u7684\u6709TaskReheater\uff0c\u5305\u542b\u91cd\u8bd5\u7c7b\u578b\u7684RetryTaskReheater\u3001\u5207\u6362\u7c7b\u578b\u7684SwitchTaskReheater\uff0c\u4ee5\u53ca\u6267\u884c\u5931\u8d25\u4efb\u52a1\u65f6\u7684\u4efb\u52a1\u4fe1\u606f\u5199\u5165PlaybackService\u7684PlaybackWrittenTaskReheater\u3002"))}p.isMDXComponent=!0},918:function(e,r,t){r.Z=t.p+"assets/images/linkis-orchestrator-reheater-01-6005816d9d3145a880958457b57eddbd.png"}}]);