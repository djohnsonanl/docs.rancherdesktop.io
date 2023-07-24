"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[8663],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||o;return n?r.createElement(m,s(s({ref:t},i),{},{components:n})):r.createElement(m,s({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},54063:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(83117),a=(n(67294),n(3905));const o={title:"Rancher on Rancher Desktop"},s=void 0,l={unversionedId:"how-to-guides/rancher-on-rancher-desktop",id:"how-to-guides/rancher-on-rancher-desktop",title:"Rancher on Rancher Desktop",description:"While Rancher and Rancher Desktop share the Rancher name, they do different things. Rancher Desktop is not Rancher on the Desktop. Rancher is a powerful solution to manage Kubernetes clusters. Rancher Desktop runs local Kubernetes and a container management platform. The two solutions complement each other. For example, you can install Rancher as a workload in Rancher Desktop.",source:"@site/docs/how-to-guides/rancher-on-rancher-desktop.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/rancher-on-rancher-desktop",permalink:"/next/how-to-guides/rancher-on-rancher-desktop",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/how-to-guides/rancher-on-rancher-desktop.md",tags:[],version:"current",frontMatter:{title:"Rancher on Rancher Desktop"},sidebar:"tutorialSidebar",previous:{title:"VS Code Remote Containers",permalink:"/next/how-to-guides/vs-code-remote-containers"},next:{title:"Skaffold and Rancher Desktop",permalink:"/next/how-to-guides/skaffold-and-rancher-desktop"}},c={},p=[],i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=i("Tabs"),h=i("TabItem"),d={toc:p};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/rancher-on-rancher-desktop"})),(0,a.kt)("p",null,"While ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/"},"Rancher")," and ",(0,a.kt)("a",{parentName:"p",href:"https://rancherdesktop.io/"},"Rancher Desktop")," share the ",(0,a.kt)("em",{parentName:"p"},"Rancher")," name, they do different things. Rancher Desktop is not Rancher on the Desktop. Rancher is a powerful solution to manage Kubernetes clusters. Rancher Desktop runs local Kubernetes and a container management platform. The two solutions complement each other. For example, you can install Rancher as a workload in Rancher Desktop."),(0,a.kt)("p",null,"This guide outlines steps to install Rancher Dashboard on Rancher Desktop using ",(0,a.kt)("inlineCode",{parentName:"p"},"container runtime")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"helm")," (local environment):"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," You may encounter issues if the supporting utilities (ex: helm), or your workload versions are incompatible with the Kubernetes version in your session. As a potential fix, you can switch to a compatible Kubernetes version via the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rancherdesktop.io/getting-started/features/#kubernetes"},"Preferences > Kubernetes")," dialog. Supported Kubernetes platforms for Rancher are available on the ",(0,a.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/rancher-v2-7-1/"},"support matrix page"),"."),(0,a.kt)(u,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(h,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl run --privileged -d --restart=always -p 8080:80 -p 8443:443 rancher/rancher\n"))),(0,a.kt)(h,{value:"docker",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run --privileged -d --restart=always -p 8080:80 -p 8443:443 rancher/rancher\n"))),(0,a.kt)(h,{value:"helm",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"1: Add Jetstack charts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add jetstack https://charts.jetstack.io\n")),(0,a.kt)("p",null,"2: Add latest Rancher charts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n")),(0,a.kt)("p",null,"3: Create cert-manager namespace:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"kubectl create namespace cert-manager\n")),(0,a.kt)("p",null,"4: Install cert-manager services:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"helm install cert-manager jetstack/cert-manager --namespace cert-manager --version v1.7.1 --set installCRDs=true\n")),(0,a.kt)("p",null,"5: Apply CRDs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v1.7.1/cert-manager.crds.yaml\n")),(0,a.kt)("p",null,"6: Create cattle-system namespace:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"kubectl create namespace cattle-system\n")),(0,a.kt)("p",null,"7: Install Rancher application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"helm install rancher rancher-latest/rancher --namespace cattle-system --set hostname=rancher.rd.localhost --wait --timeout=10m\n")))),(0,a.kt)("p",null,"The installation takes a few minutes to complete. After the installation, you can access the Rancher UI as follows: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Installed through ",(0,a.kt)("inlineCode",{parentName:"li"},"container runtime"),": ",(0,a.kt)("a",{parentName:"li",href:"https://localhost:8443/"},"https://localhost:8443/")," "),(0,a.kt)("li",{parentName:"ul"},"Installed through ",(0,a.kt)("inlineCode",{parentName:"li"},"helm")," ",(0,a.kt)("a",{parentName:"li",href:"https://rancher.rd.localhost/"},"https://rancher.rd.localhost/"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(72974).Z,width:"1189",height:"875"})),(0,a.kt)(u,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(h,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"In order to access the Rancher UI, you need to get the Bootstrap Password:"),(0,a.kt)("p",null,"1: Get Rancher UI container ID/Name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl ps\n")),(0,a.kt)("p",null,"2: Get the Bootstrap Password:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'nerdctl logs [rancherContainerID] 2>&1 | grep "Bootstrap Password:"\n')),(0,a.kt)("p",null,"3: Bootstrap Password example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"[INFO] Bootstrap Password: 7fwjjw4ldcmnq8ghns22q7nhl5lrznwwt9p9vjljfjc6tqbcvhxmwq\n"))),(0,a.kt)(h,{value:"docker",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"In order to access the Rancher UI, you need to get the Bootstrap Password:"),(0,a.kt)("p",null,"1: Get Rancher UI container ID/Name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker ps\n")),(0,a.kt)("p",null,"2: Get the Bootstrap Password:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'docker logs [rancherContainerID] 2>&1 | grep "Bootstrap Password:"\n')),(0,a.kt)("p",null,"3: Bootstrap Password example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"[INFO] Bootstrap Password: 7fwjjw4ldcmnq8ghns22q7nhl5lrznwwt9p9vjljfjc6tqbcvhxmwq\n")))),(0,a.kt)("p",null,"Follow the wizard instructions and click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Continue")," to land on the main Rancher UI page."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(86055).Z,width:"1589",height:"979"})),(0,a.kt)("p",null,"From the Rancher UI, you can manage your local cluster, node, and more. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/"},"Rancher Docs"),"."))}m.isMDXComponent=!0},86055:function(e,t,n){t.Z=n.p+"assets/images/rancherUiMainPage-b53cd5a80ad0bacb7aa613f3ae7bd0b7.png"},72974:function(e,t,n){t.Z=n.p+"assets/images/rancherUiWelcomePage-21a9632bf47edafe852af976ed625bf1.png"}}]);