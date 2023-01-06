"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[5201],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return k}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),k=o,h=u["".concat(p,".").concat(k)]||u[k]||d[k]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9171:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var r=n(3117),o=(n(7294),n(3905));const a={title:"\u6545\u969c\u6392\u9664\u63d0\u793a"},i=void 0,s={unversionedId:"troubleshooting-tips",id:"version-1.7/troubleshooting-tips",title:"\u6545\u969c\u6392\u9664\u63d0\u793a",description:"\u6b64\u9875\u9762\u63d0\u4f9b\u4e86 Rancher Desktop \u76f8\u5173\u95ee\u9898\u7684\u6545\u969c\u6392\u9664\u63d0\u793a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7/troubleshooting-tips.md",sourceDirName:".",slug:"/troubleshooting-tips",permalink:"/zh/1.7/troubleshooting-tips",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.7/troubleshooting-tips.md",tags:[],version:"1.7",frontMatter:{title:"\u6545\u969c\u6392\u9664\u63d0\u793a"},sidebar:"tutorialSidebar",previous:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/zh/1.7/faq"}},p={},c=[{value:"\u95ee\uff1a\u4e3a\u4ec0\u4e48\u6211\u5728 Rancher Desktop \u7684 WSL \u96c6\u6210\u9875\u9762\u4e0b\u770b\u4e0d\u5230\u6211\u7684 WSL \u53d1\u884c\u7248\uff1f",id:"\u95ee\u4e3a\u4ec0\u4e48\u6211\u5728-rancher-desktop-\u7684-wsl-\u96c6\u6210\u9875\u9762\u4e0b\u770b\u4e0d\u5230\u6211\u7684-wsl-\u53d1\u884c\u7248",level:4},{value:"\u95ee\uff1a\u8fd0\u884c <code>kubectl config get-contexts</code> \u65f6\uff0c\u6211\u6ca1\u6709\u770b\u5230 Rancher Desktop \u7684\u6761\u76ee\uff0c\u5b83\u5728\u54ea\u91cc\uff1f",id:"\u95ee\u8fd0\u884c-kubectl-config-get-contexts-\u65f6\u6211\u6ca1\u6709\u770b\u5230-rancher-desktop-\u7684\u6761\u76ee\u5b83\u5728\u54ea\u91cc",level:4},{value:"\u95ee\uff1aRancher Desktop \u5361\u5728 <code>Waiting for Kubernetes API</code>\uff0c\u6211\u8be5\u600e\u4e48\u529e\uff1f",id:"\u95eerancher-desktop-\u5361\u5728-waiting-for-kubernetes-api\u6211\u8be5\u600e\u4e48\u529e",level:4},{value:"\u95ee\uff1a\u5b89\u88c5 Rancher Desktop \u5e76\u5378\u8f7d Docker Desktop \u540e\uff0c\u6211\u65e0\u6cd5\u518d\u8fd0\u884c <code>docker compose</code>\uff0c\u4e3a\u4ec0\u4e48\uff1f",id:"\u95ee\u5b89\u88c5-rancher-desktop-\u5e76\u5378\u8f7d-docker-desktop-\u540e\u6211\u65e0\u6cd5\u518d\u8fd0\u884c-docker-compose\u4e3a\u4ec0\u4e48",level:4},{value:"\u95ee\uff1a\u6211\u4f7f\u7528 Homebrew \u6765\u5b89\u88c5 Rancher Desktop\uff0c\u4f46\u662f <code>brew install rancher-desktop</code> \u63d0\u793a\u5931\u8d25\uff0c\u4e3a\u4ec0\u4e48\uff1f",id:"\u95ee\u6211\u4f7f\u7528-homebrew-\u6765\u5b89\u88c5-rancher-desktop\u4f46\u662f-brew-install-rancher-desktop-\u63d0\u793a\u5931\u8d25\u4e3a\u4ec0\u4e48",level:4},{value:"\u95ee\uff1a\u5c1d\u8bd5\u5728 WSL \u4e0a\u4f7f\u7528 Docker \u65f6\uff0c\u5982\u4f55\u4fee\u590d <code>permission denied</code> \u9519\u8bef\uff1f",id:"\u95ee\u5c1d\u8bd5\u5728-wsl-\u4e0a\u4f7f\u7528-docker-\u65f6\u5982\u4f55\u4fee\u590d-permission-denied-\u9519\u8bef",level:4},{value:"\u95ee\uff1a\u5982\u4f55\u89e3\u51b3 Linux \u4e0a\u7684 <code>kubectl: command not found</code> \u95ee\u9898\uff1f",id:"\u95ee\u5982\u4f55\u89e3\u51b3-linux-\u4e0a\u7684-kubectl-command-not-found-\u95ee\u9898",level:4},{value:"\u95ee\uff1a\u4f7f\u7528 <code>nerdctl run</code> \u8fd0\u884c\u5bb9\u5668\u65f6\uff0c\u5982\u4f55\u4fee\u590d <code>FATA[0005] subnet 10.4.0.0/24 overlaps with other one on this address space</code> \u95ee\u9898\uff1f",id:"\u95ee\u4f7f\u7528-nerdctl-run-\u8fd0\u884c\u5bb9\u5668\u65f6\u5982\u4f55\u4fee\u590d-fata0005-subnet-1040024-overlaps-with-other-one-on-this-address-space-\u95ee\u9898",level:4},{value:"\u95ee\uff1a\u5728 Windows \u4e0a\u5c06\u73b0\u6709 MSI \u964d\u7ea7\u5230\u8f83\u65e7\u7684 EXE \u7248\u672c\uff081.6.x \u6216\u66f4\u65e9\u7248\u672c\uff09\u65f6\uff0c\u5982\u4f55\u4fee\u590d <code>Installation Aborted</code> \u9519\u8bef\uff1f",id:"\u95ee\u5728-windows-\u4e0a\u5c06\u73b0\u6709-msi-\u964d\u7ea7\u5230\u8f83\u65e7\u7684-exe-\u7248\u672c16x-\u6216\u66f4\u65e9\u7248\u672c\u65f6\u5982\u4f55\u4fee\u590d-installation-aborted-\u9519\u8bef",level:4}],l={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6b64\u9875\u9762\u63d0\u4f9b\u4e86 Rancher Desktop \u76f8\u5173\u95ee\u9898\u7684\u6545\u969c\u6392\u9664\u63d0\u793a\u3002"),(0,o.kt)("h4",{id:"\u95ee\u4e3a\u4ec0\u4e48\u6211\u5728-rancher-desktop-\u7684-wsl-\u96c6\u6210\u9875\u9762\u4e0b\u770b\u4e0d\u5230\u6211\u7684-wsl-\u53d1\u884c\u7248"},"\u95ee\uff1a\u4e3a\u4ec0\u4e48\u6211\u5728 Rancher Desktop \u7684 WSL \u96c6\u6210\u9875\u9762\u4e0b\u770b\u4e0d\u5230\u6211\u7684 WSL \u53d1\u884c\u7248\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b54"),"\uff1a\u4f60\u53ef\u80fd\u4f7f\u7528\u7684\u662f WSL 1 \u53d1\u884c\u7248\u3002Rancher Desktop \u4ec5\u652f\u6301 WSL 2 \u53d1\u884c\u7248\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"wsl --set-version <distro-name> 2")," \u547d\u4ee4\u5c06 WSL 1 \u53d1\u884c\u7248\u8f6c\u6362\u4e3a WSL 2 \u53d1\u884c\u7248\u3002\u4f60\u8fd8\u53ef\u4ee5\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"wsl --set-default-version 2")," \u547d\u4ee4\u6765\u5c06\u4f60\u4e4b\u540e\u53ef\u80fd\u5b89\u88c5\u7684\u6240\u6709\u53d1\u884c\u7248\u8bbe\u7f6e\u4e3a\u4f7f\u7528 WSL 2\u3002"),(0,o.kt)("h4",{id:"\u95ee\u8fd0\u884c-kubectl-config-get-contexts-\u65f6\u6211\u6ca1\u6709\u770b\u5230-rancher-desktop-\u7684\u6761\u76ee\u5b83\u5728\u54ea\u91cc"},"\u95ee\uff1a\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"h4"},"kubectl config get-contexts")," \u65f6\uff0c\u6211\u6ca1\u6709\u770b\u5230 Rancher Desktop \u7684\u6761\u76ee\uff0c\u5b83\u5728\u54ea\u91cc\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b54"),"\uff1aRancher Desktop \u5c06\u914d\u7f6e\u653e\u7f6e\u5728\u9ed8\u8ba4\u4f4d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),"\u3002\u4f60\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," \u73af\u5883\u53d8\u91cf\u53ef\u80fd\u88ab\u8bbe\u7f6e\u4e3a\u5728\u5176\u4ed6\u4f4d\u7f6e\u67e5\u627e\u914d\u7f6e\u6587\u4ef6\u3002"),(0,o.kt)("h4",{id:"\u95eerancher-desktop-\u5361\u5728-waiting-for-kubernetes-api\u6211\u8be5\u600e\u4e48\u529e"},"\u95ee\uff1aRancher Desktop \u5361\u5728 ",(0,o.kt)("inlineCode",{parentName:"h4"},"Waiting for Kubernetes API"),"\uff0c\u6211\u8be5\u600e\u4e48\u529e\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b54"),"\uff1a\u6ca1\u6709\u989d\u5916\u4fe1\u606f\u6211\u4eec\u5f88\u96be\u786e\u5b9a\u539f\u56e0\u3002\u5bfc\u822a\u5230 ",(0,o.kt)("strong",{parentName:"p"},"Troubleshooting")," \u9009\u9879\u5361\u5e76\u8bbf\u95ee\u65e5\u5fd7\u3002\u7136\u540e\uff0c\u8f6c\u5230 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-desktop/issues"},"Rancher Desktop GitHub")," \u9875\u9762\u5e76\u63d0\u4ea4\u9644\u52a0\u4e86\u4f60\u7684\u65e5\u5fd7\u7684 Issue\u3002"),(0,o.kt)("h4",{id:"\u95ee\u5b89\u88c5-rancher-desktop-\u5e76\u5378\u8f7d-docker-desktop-\u540e\u6211\u65e0\u6cd5\u518d\u8fd0\u884c-docker-compose\u4e3a\u4ec0\u4e48"},"\u95ee\uff1a\u5b89\u88c5 Rancher Desktop \u5e76\u5378\u8f7d Docker Desktop \u540e\uff0c\u6211\u65e0\u6cd5\u518d\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"h4"},"docker compose"),"\uff0c\u4e3a\u4ec0\u4e48\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b54"),"\uff1a\u8fd9\u662f Rancher Desktop \u65e9\u671f\u7248\u672c\uff081.1.0 \u4e4b\u524d\uff09\u7684\u95ee\u9898\u3002Rancher Desktop 1.1.0 \u53ca\u4ee5\u4e0a\u7248\u672c\u9644\u5e26\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose"),"\uff0c\u5e76\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.docker/cli-plugins")," \u63d0\u4f9b\u4e86 CLI \u63d2\u4ef6\u3002\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u4f60\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\u7684 Rancher Desktop\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u4ecd\u7136\u65e0\u6cd5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose"),"\uff0c\u8bf7\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-desktop/issues/new?assignees=&labels=kind%2Fbug&template=bug_report.yml"},"Github"),"\u4e0a\u62a5\u544a\u8fd9\u4e2a Bug\u3002"),(0,o.kt)("h4",{id:"\u95ee\u6211\u4f7f\u7528-homebrew-\u6765\u5b89\u88c5-rancher-desktop\u4f46\u662f-brew-install-rancher-desktop-\u63d0\u793a\u5931\u8d25\u4e3a\u4ec0\u4e48"},"\u95ee\uff1a\u6211\u4f7f\u7528 Homebrew \u6765\u5b89\u88c5 Rancher Desktop\uff0c\u4f46\u662f ",(0,o.kt)("inlineCode",{parentName:"h4"},"brew install rancher-desktop")," \u63d0\u793a\u5931\u8d25\uff0c\u4e3a\u4ec0\u4e48\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b54"),"\uff1aHomebrew cask \u7684\u547d\u540d\u7ea6\u5b9a\u89c4\u5b9a\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"-desktop")," \u540e\u7f00\u8981\u4ece cask formula \u540d\u79f0\u4e2d\u5220\u9664\u3002\u56e0\u6b64\uff0c\u8bf7\u6539\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"brew install rancher"),"\u3002"),(0,o.kt)("h4",{id:"\u95ee\u5c1d\u8bd5\u5728-wsl-\u4e0a\u4f7f\u7528-docker-\u65f6\u5982\u4f55\u4fee\u590d-permission-denied-\u9519\u8bef"},"\u95ee\uff1a\u5c1d\u8bd5\u5728 WSL \u4e0a\u4f7f\u7528 Docker \u65f6\uff0c\u5982\u4f55\u4fee\u590d ",(0,o.kt)("inlineCode",{parentName:"h4"},"permission denied")," \u9519\u8bef\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b54"),"\uff1a\u4f60\u9700\u8981\u5199\u6743\u9650\u624d\u80fd\u8bbf\u95ee docker socket\u3002\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u7684\u65b9\u6cd5\u6709\u5f88\u591a\uff0c\u4ee5\u4e0b\u662f\u5e38\u89c1\u7684\u65b9\u6cd5\u4e4b\u4e00\u3002\u4f7f\u7528 Ubuntu WSL \u547d\u4ee4\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo groupadd docker\nsudo adduser $USER docker\nsudo chown root:docker /var/run/docker.sock\nsudo chmod g+w /var/run/docker.sock\nnewgrp docker\n")),(0,o.kt)("h4",{id:"\u95ee\u5982\u4f55\u89e3\u51b3-linux-\u4e0a\u7684-kubectl-command-not-found-\u95ee\u9898"},"\u95ee\uff1a\u5982\u4f55\u89e3\u51b3 Linux \u4e0a\u7684 ",(0,o.kt)("inlineCode",{parentName:"h4"},"kubectl: command not found")," \u95ee\u9898\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRancher Desktop \u4f1a\u5728 Linux \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/<user>/.local/bin")," \u4e0b\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"docker"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"helm")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"nerdctl")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u7b26\u53f7\u94fe\u63a5\u3002\u8981\u76f4\u63a5\u4ece\u63a7\u5236\u53f0\u8c03\u7528\u8fd9\u4e9b\u547d\u4ee4\uff0c\u4f60\u53ef\u4ee5\u5728\u63a7\u5236\u53f0\u4e2d\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5e76\u6267\u884c\u6ce8\u9500\u548c\u767b\u5f55\u6765\u5c06\u76ee\u5f55\u6dfb\u52a0\u5230\u4f60\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," \u73af\u5883\u53d8\u91cf\u4e2d\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'echo "export PATH=\\$PATH:/home/$(whoami)/.local/bin" >> ~/.bashrc\n')),(0,o.kt)("h4",{id:"\u95ee\u4f7f\u7528-nerdctl-run-\u8fd0\u884c\u5bb9\u5668\u65f6\u5982\u4f55\u4fee\u590d-fata0005-subnet-1040024-overlaps-with-other-one-on-this-address-space-\u95ee\u9898"},"\u95ee\uff1a\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"h4"},"nerdctl run")," \u8fd0\u884c\u5bb9\u5668\u65f6\uff0c\u5982\u4f55\u4fee\u590d ",(0,o.kt)("inlineCode",{parentName:"h4"},"FATA[0005] subnet 10.4.0.0/24 overlaps with other one on this address space")," \u95ee\u9898\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b54"),"\uff1a\u5982\u679c\u8def\u7531\u89c4\u5219\u7684 IP \u5730\u5740\u6765\u81ea Iptables \u4e0a\u7684\u51b2\u7a81\u5b50\u7f51\uff0c\u4f60\u5c06\u770b\u5230\u6b64\u9519\u8bef\u3002\u51b2\u7a81\u7684\u8def\u7531\u53ef\u80fd\u6765\u81ea\u4e3b\u673a\u7f51\u7edc\uff08\u6865\u63a5\u6a21\u5f0f\uff09\u6216 Kubernetes \u7f51\u7edc\u3002\u6b64\u95ee\u9898\u7684\u5feb\u901f\u89e3\u51b3\u65b9\u6cd5\u662f\u901a\u8fc7\u547d\u4ee4 ",(0,o.kt)("inlineCode",{parentName:"p"},"wsl --shutdown")," \u5173\u95ed WSL\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8b66\u544a\uff1a\u5173\u95ed WSL \u5c06\u505c\u6b62\u6240\u6709\u5176\u4ed6\u53d1\u884c\u7248\u4ee5\u53ca ",(0,o.kt)("inlineCode",{parentName:"strong"},"rancher-desktop")," \u53d1\u884c\u7248\u3002")),(0,o.kt)("h4",{id:"\u95ee\u5728-windows-\u4e0a\u5c06\u73b0\u6709-msi-\u964d\u7ea7\u5230\u8f83\u65e7\u7684-exe-\u7248\u672c16x-\u6216\u66f4\u65e9\u7248\u672c\u65f6\u5982\u4f55\u4fee\u590d-installation-aborted-\u9519\u8bef"},"\u95ee\uff1a\u5728 Windows \u4e0a\u5c06\u73b0\u6709 MSI \u964d\u7ea7\u5230\u8f83\u65e7\u7684 EXE \u7248\u672c\uff081.6.x \u6216\u66f4\u65e9\u7248\u672c\uff09\u65f6\uff0c\u5982\u4f55\u4fee\u590d ",(0,o.kt)("inlineCode",{parentName:"h4"},"Installation Aborted")," \u9519\u8bef\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b54"),"\uff1a\u5728 MSI \u5378\u8f7d\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u5e94\u8be5\u5220\u9664\u7684 Windows \u6ce8\u518c\u8868\u9879 ",(0,o.kt)("inlineCode",{parentName:"p"},"HKEY_LOCAL_MACHINE\\\\System\\\\CurrentControlSet\\\\Services\\\\EventLog\\\\Application\\\\RancherDesktopPrivilegedService")," \u6ca1\u6709\u88ab\u5220\u9664\uff0c\u4f60\u5c06\u770b\u5230\u6b64\u9519\u8bef\u3002\u8bf7\u624b\u52a8\u5220\u9664\u6ce8\u518c\u8868\u9879\u5e76\u5c1d\u8bd5\u5b89\u88c5 EXE \u7248\u672c\u3002\u4f60\u53ef\u4ee5\u5728\u7279\u6743 shell \u4e2d\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5220\u9664\u6ce8\u518c\u8868\u9879\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"reg.exe delete HKLM\\System\\CurrentControlSet\\Services\\EventLog\\Application\\RancherDesktopPrivilegedService /reg:64 /f\n")))}d.isMDXComponent=!0}}]);