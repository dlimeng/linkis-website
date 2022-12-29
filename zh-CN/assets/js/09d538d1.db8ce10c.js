"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[22084],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(t),k=i,m=u["".concat(p,".").concat(k)]||u[k]||c[k]||a;return t?r.createElement(m,l(l({ref:n},d),{},{components:t})):r.createElement(m,l({ref:n},d))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},98426:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const a={title:"\u7ba1\u7406\u53f0\u90e8\u7f72",sidebar_position:6},l=void 0,o={unversionedId:"deployment/web-install",id:"version-1.1.3/deployment/web-install",title:"\u7ba1\u7406\u53f0\u90e8\u7f72",description:"web\u7aef\u662f\u4f7f\u7528nginx\u4f5c\u4e3a\u9759\u6001\u8d44\u6e90\u670d\u52a1\u5668\u7684\uff0c\u8bbf\u95ee\u8bf7\u6c42\u6d41\u7a0b\u662fport->linkis-gateway ip:port-> \u5176\u4ed6\u670d\u52a1",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.3/deployment/web-install.md",sourceDirName:"deployment",slug:"/deployment/web-install",permalink:"/zh-CN/docs/1.1.3/deployment/web-install",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.3/deployment/web-install.md",tags:[],version:"1.1.3",sidebarPosition:6,frontMatter:{title:"\u7ba1\u7406\u53f0\u90e8\u7f72",sidebar_position:6},sidebar:"version-1.1.3/tutorialSidebar",previous:{title:"\u6e90\u7801\u76ee\u5f55\u7ed3\u6784",permalink:"/zh-CN/docs/1.1.3/deployment/sourcecode-hierarchical-structure"},next:{title:"\u5f00\u542f SkyWalking",permalink:"/zh-CN/docs/1.1.3/deployment/involve-skywalking-into-linkis"}},p={},s=[{value:"1 \u51c6\u5907\u5de5\u4f5c",id:"1-\u51c6\u5907\u5de5\u4f5c",level:2},{value:"2 \u90e8\u7f72",id:"2-\u90e8\u7f72",level:2},{value:"2.1 \u81ea\u52a8\u5316\u90e8\u7f72(\u63a8\u8350)",id:"21-\u81ea\u52a8\u5316\u90e8\u7f72\u63a8\u8350",level:3},{value:"2.1.1 \u4fee\u6539\u914d\u7f6econfig.sh",id:"211-\u4fee\u6539\u914d\u7f6econfigsh",level:4},{value:"2.1.2 \u6267\u884c\u90e8\u7f72\u811a\u672c",id:"212-\u6267\u884c\u90e8\u7f72\u811a\u672c",level:4},{value:"2.2 \u624b\u52a8\u90e8\u7f72",id:"22-\u624b\u52a8\u90e8\u7f72",level:3},{value:"2.2.1 \u5b89\u88c5Nginx",id:"221-\u5b89\u88c5nginx",level:4},{value:"2.2.2 \u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"222-\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",level:4},{value:"2.2.3 \u8d44\u6e90\u90e8\u7f72",id:"223-\u8d44\u6e90\u90e8\u7f72",level:4},{value:"2.2.4  \u542f\u52a8\u670d\u52a1",id:"224--\u542f\u52a8\u670d\u52a1",level:4},{value:"3 \u767b\u5f55\u7ba1\u7406\u53f0",id:"3-\u767b\u5f55\u7ba1\u7406\u53f0",level:2},{value:"4 \u6ce8\u610f\u4e8b\u9879",id:"4-\u6ce8\u610f\u4e8b\u9879",level:2},{value:"5 \u5e38\u89c1\u95ee\u9898",id:"5-\u5e38\u89c1\u95ee\u9898",level:2},{value:"5.1 \u4e0a\u4f20\u6587\u4ef6\u5927\u5c0f\u9650\u5236",id:"51-\u4e0a\u4f20\u6587\u4ef6\u5927\u5c0f\u9650\u5236",level:3},{value:"5.2 \u63a5\u53e3\u8d85\u65f6",id:"52-\u63a5\u53e3\u8d85\u65f6",level:3}],d={toc:s};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"web\u7aef\u662f\u4f7f\u7528nginx\u4f5c\u4e3a\u9759\u6001\u8d44\u6e90\u670d\u52a1\u5668\u7684\uff0c\u8bbf\u95ee\u8bf7\u6c42\u6d41\u7a0b\u662f:",(0,i.kt)("inlineCode",{parentName:"p"},"Linkis\u7ba1\u7406\u53f0\u8bf7\u6c42->nginx ip:port->linkis-gateway ip:port-> \u5176\u4ed6\u670d\u52a1"))),(0,i.kt)("p",null,"Linkis \u63d0\u4f9b\u4e86\u5355\u72ec\u7684\u524d\u7aef\u7ba1\u7406\u53f0\u529f\u80fd\uff0c\u63d0\u4f9b\u4e86\u5c55\u793a\u5386\u53f2\u4efb\u52a1\u7684\u5168\u5c40\u5386\u53f2\u3001\u4fee\u6539\u7528\u6237\u53c2\u6570\u3001\u7ba1\u7406ECM\u548c\u5fae\u670d\u52a1\u7b49\u529f\u80fd\uff0c\u90e8\u7f72\u524d\u7aef\u7ba1\u7406\u53f0\u524d\u9700\u8981\u5148\u5c06Linkis\u540e\u7aef\u8fdb\u884c\u90e8\u7f72\uff0cLinkis\u7684\u90e8\u7f72\u624b\u518c\u89c1\uff1a",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.1.3/deployment/quick-deploy"},"Linkis\u90e8\u7f72\u624b\u518c")),(0,i.kt)("h2",{id:"1-\u51c6\u5907\u5de5\u4f5c"},"1 \u51c6\u5907\u5de5\u4f5c"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4ecelinkis\u7684release\u9875\u9762\uff08",(0,i.kt)("a",{parentName:"li",href:"https://linkis.apache.org/zh-CN/download/main"},"\u70b9\u51fb\u8fd9\u91cc\u8fdb\u5165\u4e0b\u8f7d\u9875\u9762"),"\uff09\u4e0b\u8f7dweb\u5b89\u88c5\u5305",(0,i.kt)("inlineCode",{parentName:"li"},"apache-linkis-x.x.x-incubating-web-bin.tar.gz"),"\n\u624b\u52a8\u89e3\u538b\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"tar -xvf  apache-linkis-x.x.x-incubating-web-bin.tar.gz"),"\uff0c")),(0,i.kt)("p",null,"\u89e3\u538b\u540e\u76ee\u5f55\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 config.sh\n\u251c\u2500\u2500 DISCLAIMER\n\u251c\u2500\u2500 dist\n\u251c\u2500\u2500 install.sh\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 licenses\n\u2514\u2500\u2500 NOTICE\n")),(0,i.kt)("h2",{id:"2-\u90e8\u7f72"},"2 \u90e8\u7f72"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5206\u4e3a\u4e24\u79cd\u90e8\u7f72\u65b9\u5f0f\uff0c\u81ea\u52a8\u5316\u90e8\u7f72\u548c\u624b\u52a8\u90e8\u7f72")),(0,i.kt)("h3",{id:"21-\u81ea\u52a8\u5316\u90e8\u7f72\u63a8\u8350"},"2.1 \u81ea\u52a8\u5316\u90e8\u7f72(\u63a8\u8350)"),(0,i.kt)("h4",{id:"211-\u4fee\u6539\u914d\u7f6econfigsh"},"2.1.1 \u4fee\u6539\u914d\u7f6econfig.sh"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'#linkis-mg-gateway\u670d\u52a1\u5730\u5740\nlinkis_url="http://127.0.0.1:9001"\n\n#\u53ef\u4ee5\u914d\u7f6e\u4e3a\u5b89\u88c5\u673a\u5668\u7684ip \u4e5f\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u503c\nlinkis_ipaddr=127.0.0.1\n# \u8bbf\u95ee\u7ba1\u7406\u53f0\u7684\u7aef\u53e3\nlinkis_port=8088\n\n')),(0,i.kt)("h4",{id:"212-\u6267\u884c\u90e8\u7f72\u811a\u672c"},"2.1.2 \u6267\u884c\u90e8\u7f72\u811a\u672c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# nginx \u9700\u8981sudo\u6743\u9650\u8fdb\u884c\u5b89\u88c5\nsudo sh install.sh\n")),(0,i.kt)("p",null,"\u5b89\u88c5\u540e\uff0clinkis\u7684nginx\u914d\u7f6e\u6587\u4ef6\u9ed8\u8ba4\u662f \u5728",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/linkis.conf"),"\nnginx\u7684\u65e5\u5fd7\u6587\u4ef6\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/log/nginx/access.log")," \u548c",(0,i.kt)("inlineCode",{parentName:"p"},"/var/log/nginx/error.log"),"\n\u751f\u6210\u7684linkis\u7ba1\u7406\u53f0\u7684nginx\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b\u5982\u4e0b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"\n        server {\n            listen       8188;# \u8bbf\u95ee\u7aef\u53e3 \u5982\u679c\u7aef\u53e3\u88ab\u5360\u7528\uff0c\u5219\u9700\u8981\u4fee\u6539\n            server_name  localhost;\n            #charset koi8-r;\n            #access_log  /var/log/nginx/host.access.log  main;\n            location / {\n            root   /appcom/Install/linkis-web/dist; # \u9759\u6001\u6587\u4ef6\u76ee\u5f55 \n            index  index.html index.html;\n            }\n            location /ws {\n            proxy_pass http://localhost:9020;#\u540e\u7aefLinkis\u7684\u5730\u5740\n            proxy_http_version 1.1;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection upgrade;\n            }\n\n            location /api {\n            proxy_pass http://localhost:9020; #\u540e\u7aefLinkis\u7684\u5730\u5740\n            proxy_set_header Host $host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header x_real_ipP $remote_addr;\n            proxy_set_header remote_addr $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_http_version 1.1;\n            proxy_connect_timeout 4s;\n            proxy_read_timeout 600s;\n            proxy_send_timeout 12s;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection upgrade;\n            }\n\n            #error_page  404              /404.html;\n            # redirect server error pages to the static page /50x.html\n            #\n            error_page   500 502 503 504  /50x.html;\n            location = /50x.html {\n            root   /usr/share/nginx/html;\n            }\n        }\n")),(0,i.kt)("h3",{id:"22-\u624b\u52a8\u90e8\u7f72"},"2.2 \u624b\u52a8\u90e8\u7f72"),(0,i.kt)("h4",{id:"221-\u5b89\u88c5nginx"},"2.2.1 \u5b89\u88c5Nginx"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u5df2\u7ecf\u5b89\u88c5\u8fc7nginx \u53ef\u4ee5\u8df3\u8fc7")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"sudo yum install nginx -y\n")),(0,i.kt)("h4",{id:"222-\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"},"2.2.2 \u4fee\u6539\u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"sudo vi /etc/nginx/conf.d/linkis.conf\n")),(0,i.kt)("p",null,"\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"server {\n            listen       8080;# \u8bbf\u95ee\u7aef\u53e3\n            server_name  localhost;\n            #charset koi8-r;\n            #access_log  /var/log/nginx/host.access.log  main;\n            location / {\n            root   /appcom/Install/linkis/dist; # \u524d\u7aef\u5305\u89e3\u538b\u7684\u76ee\u5f55\n            index  index.html index.html;\n            }\n          \n            location /api {\n            proxy_pass http://192.168.xxx.xxx:9001; # linkis-gateway\u670d\u52a1\u7684ip\u7aef\u53e3\n            proxy_set_header Host $host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header x_real_ipP $remote_addr;\n            proxy_set_header remote_addr $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_http_version 1.1;\n            proxy_connect_timeout 4s;\n            proxy_read_timeout 600s;\n            proxy_send_timeout 12s;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection upgrade;\n            }\n            #error_page  404              /404.html;\n            # redirect server error pages to the static page /50x.html\n            #\n            error_page   500 502 503 504  /50x.html;\n            location = /50x.html {\n            root   /usr/share/nginx/html;\n            }\n        }\n\n")),(0,i.kt)("h4",{id:"223-\u8d44\u6e90\u90e8\u7f72"},"2.2.3 \u8d44\u6e90\u90e8\u7f72"),(0,i.kt)("p",null,"\u5c06\u524d\u7aef\u5305\u62f7\u8d1d\u5230\u5bf9\u5e94\u7684\u76ee\u5f55:",(0,i.kt)("inlineCode",{parentName:"p"},"/appcom/Install/linkis/dist")),(0,i.kt)("h4",{id:"224--\u542f\u52a8\u670d\u52a1"},"2.2.4  \u542f\u52a8\u670d\u52a1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo systemctl restart nginx\n")),(0,i.kt)("h2",{id:"3-\u767b\u5f55\u7ba1\u7406\u53f0"},"3 \u767b\u5f55\u7ba1\u7406\u53f0"),(0,i.kt)("p",null,"\u6d4f\u89c8\u5668\u8bbf\u95ee",(0,i.kt)("inlineCode",{parentName:"p"},"http://linkis_ipaddr:linkis_port")," \u5176\u4e2dlinkis_port\u4e3aconfig.sh\u91cc\u9762\u914d\u7f6e\u7684\u7aef\u53e3\uff0clinkis_ipaddr\u4e3a\u5b89\u88c5\u673a\u5668\u7684IP"),(0,i.kt)("p",null,"\u7528\u6237\u540d/\u5bc6\u7801\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"{LINKIS_HOME}/conf/linkis-mg-gateway.properties"),"\u4e2d\u67e5\u770b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"wds.linkis.admin.user= #\u7528\u6237\nwds.linkis.admin.password= #\u5bc6\u7801\n\n")),(0,i.kt)("p",null,"\u7ba1\u7406\u53f0\u4f7f\u7528\u6307\u5f15\u89c1",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.1.3/user-guide/console-manual"},"\u4f7f\u7528\u624b\u518c")),(0,i.kt)("h2",{id:"4-\u6ce8\u610f\u4e8b\u9879"},"4 \u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("p",null,"\u5982\u679c\u9700\u8981\u4fee\u6539\u7aef\u53e3\u6216\u5219\u9759\u6001\u8d44\u6e90\u76ee\u5f55\u7b49\uff0c\u8bf7\u4fee\u6539",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/linkis.conf")," \u6587\u4ef6\u540e\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo nginx -s reload")," \u547d\u4ee4"),(0,i.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"\u76ee\u524d\u6682\u672a\u96c6\u6210visualis\u529f\u80fd\uff0c\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u5982\u679c\u63d0\u793a\u5b89\u88c5linkis/visualis\u5931\u8d25\uff0c\u53ef\u4ee5\u5ffd\u7565 "),(0,i.kt)("li",{parentName:"ul"},"\u67e5\u770bnginx\u662f\u5426\u6b63\u5e38\u542f\u52a8\uff1a\u68c0\u67e5nginx\u8fdb\u7a0b\u662f\u5426\u5b58\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"ps -ef |grep nginx")," "),(0,i.kt)("li",{parentName:"ul"},"\u68c0\u67e5nginx\u7684\u914d\u7f6e\u662f\u5426\u6b63\u786e ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo nginx -T ")," "),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u7aef\u53e3\u88ab\u5360\u7528\uff0c\u53ef\u4ee5\u4fee\u6539nginx\u542f\u52a8\u7684\u670d\u52a1\u7aef\u53e3",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/nginx/conf.d/linkis.conf"),"listen\u7aef\u53e3\u503c\uff0c\u4fdd\u5b58\u540e\u91cd\u65b0\u542f\u52a8"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u8bbf\u95ee\u7ba1\u7406\u53f0\u51fa\u73b0\u63a5\u53e3502\uff0c\u6216\u5219",(0,i.kt)("inlineCode",{parentName:"li"},"Unexpected token < in JSON at position 0"),"\u5f02\u5e38\uff0c\u8bf7\u786e\u8ba4linkis-mg-gateway\u662f\u5426\u6b63\u5e38\u542f\u52a8\uff0c\u5982\u679c\u6b63\u5e38\u542f\u52a8\uff0c\u67e5\u770bnginx\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u7684linkis-mg-gateway\u670d\u52a1\u5730\u5740\u662f\u5426\u6b63\u786e"))),(0,i.kt)("h2",{id:"5-\u5e38\u89c1\u95ee\u9898"},"5 \u5e38\u89c1\u95ee\u9898"),(0,i.kt)("h3",{id:"51-\u4e0a\u4f20\u6587\u4ef6\u5927\u5c0f\u9650\u5236"},"5.1 \u4e0a\u4f20\u6587\u4ef6\u5927\u5c0f\u9650\u5236"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo vi /etc/nginx/nginx.conf\n")),(0,i.kt)("p",null,"\u66f4\u6539\u4e0a\u4f20\u5927\u5c0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"client_max_body_size 200m\n")),(0,i.kt)("h3",{id:"52-\u63a5\u53e3\u8d85\u65f6"},"5.2 \u63a5\u53e3\u8d85\u65f6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo vi /etc/nginx/conf.d/linkis.conf\n")),(0,i.kt)("p",null,"\u66f4\u6539\u63a5\u53e3\u8d85\u65f6\u65f6\u95f4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"proxy_read_timeout 600s\n")))}c.isMDXComponent=!0}}]);