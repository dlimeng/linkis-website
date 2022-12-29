"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[52630],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(r),d=i,f=p["".concat(l,".").concat(d)]||p[d]||h[d]||s;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6300:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const s={title:"Access Remote File System Architecture",sidebar_position:1},o=void 0,a={unversionedId:"architecture/storage/remote-file-system-architecture-design",id:"version-0.11.0/architecture/storage/remote-file-system-architecture-design",title:"Access Remote File System Architecture",description:"1 Background",source:"@site/versioned_docs/version-0.11.0/architecture/storage/remote-file-system-architecture-design.md",sourceDirName:"architecture/storage",slug:"/architecture/storage/remote-file-system-architecture-design",permalink:"/docs/0.11.0/architecture/storage/remote-file-system-architecture-design",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-0.11.0/architecture/storage/remote-file-system-architecture-design.md",tags:[],version:"0.11.0",sidebarPosition:1,frontMatter:{title:"Access Remote File System Architecture",sidebar_position:1},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Docking Multiple File Systems",permalink:"/docs/0.11.0/architecture/storage/file-system"},next:{title:"ResultSet File Storage",permalink:"/docs/0.11.0/architecture/storage/resultset-file"}},l={},c=[{value:"1 Background",id:"1-background",level:2},{value:"2 Ideas",id:"2-ideas",level:2},{value:"3 Implementation",id:"3-implementation",level:2},{value:"Note",id:"note",level:2}],u={toc:c};function h(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-background"},"1 Background"),(0,i.kt)("p",null,"Normally after a JVM process the user only has access to file reading and writing from the user."),(0,i.kt)("p",null,"If\uff1aUser A starts a JVM process on the linux server. If the user is not root (superuser), they can only access local files on that server and only have permission to operate with User A files."),(0,i.kt)("p",null,"But there are many scenarios in which we launch the JVM process through User A, hoping to have access to other user files on local filesystem in the context of non-proliferation of document permissions."),(0,i.kt)("p",null,"At the same time, how can the HDFS file system be accessed without HDFS installed locally?"),(0,i.kt)("p",null,"How do you avoid creating Linux users so you can access the relevant files of that user on HDFs?"),(0,i.kt)("h2",{id:"2-ideas"},"2 Ideas"),(0,i.kt)("p",null,"By launching the engine manager (IO-Engineer) of the filesystem on the remote server (",(0,i.kt)("a",{parentName:"p",href:"/docs/0.11.0/architecture/ujes/ujes-design"},"what is EngineManager?"),") and providing a compatible client API, allowing users access to remote file systems."),(0,i.kt)("p",null,"The entire architecture is shown below in graph\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Storage Remote Mode Architecture",src:r(72183).Z,width:"1385",height:"719"})),(0,i.kt)("h2",{id:"3-implementation"},"3 Implementation"),(0,i.kt)("p",null,"(1) User A calls on the client (IO-Client) of the remote filesystem to IO-Client via the incoming file path (FsPath) and user B for proxy;"),(0,i.kt)("p",null,"(2) Client (IO-Client) receives FsPath and proxy user B for ProxyFS."),(0,i.kt)("p",null,"(3) User A operates through ProxyFS on proxyFS files of proxy user B. If the permissions check for the next steps are passed, then you can perform actions such as adding and deleting, reading and writing of files."),(0,i.kt)("p",null,"(4) User A is passed through ProxyFS operations to IO-Client and to remote filesystem services that are transmitted via the network and are obtained through the Smart Routing Service (IR) with a lower load remote file service (IO-Engine) during the transmission process."),(0,i.kt)("p",null,"(5) When the remote file service (IO-Engine) receives an IO-Client operation, safety rules are used to determine first whether the transferred token is lawful, then whether the IP is lawful, and then whether User A is authorized to act on the file to User B."),(0,i.kt)("p",null,"(6) The IO-Engineering will then access the superuser's Fs through which to access the actual filesystem and operate user B files.Since the IO-Engineering service is started by a superuser, it can access all user files and operates."),(0,i.kt)("p",null,"(7) The IO-Engineering operation completed the user B file operation and returned the result to IO-client, thus returning the result to user A, and the complete process for proxy remote access files was completed."),(0,i.kt)("h2",{id:"note"},"Note"),(0,i.kt)("p",null,"The engine manager (IO-EM) service in the graph above is responsible for stopping the IO-Engineering service."),(0,i.kt)("p",null,"The Smart Routing Service (IR) in the above graph is responsible for determining the load of each IO-Engineering and for the balancing redirection of the IO-Client request to send it, and for notifying IOEM to start the new IO-Engineering service if all IO-Engineering is overloaded and IOEM to stop the idle IO-Engineering service when the load is low."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Through the process above before you can write to you at least\uff1a")),(0,i.kt)("p",null,"From point (5) it is clear that full control of permissions can be achieved and that users can configure their own security rules;"),(0,i.kt)("p",null,"Features similar to shared storage can be achieved from the remote filesystem service access;"),(0,i.kt)("p",null,"Multiple filesystems can be supported from points (1) and (2) through different types of incoming FS."))}h.isMDXComponent=!0},72183:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/storage_remote-bd7771585d51d46072ec998c9d8ffeae.png"}}]);