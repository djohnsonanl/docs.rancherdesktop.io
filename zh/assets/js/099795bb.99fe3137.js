"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[5415],{3905:function(e,n,a){a.d(n,{Zo:function(){return c},kt:function(){return u}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return a?t.createElement(k,i(i({ref:n},c),{},{components:a})):t.createElement(k,i({ref:n},c))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},93687:function(e,n,a){var t=a(10412);const r=!!t.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!t.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",s=r?"macOS":o?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:s,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},28160:function(e,n,a){a.r(n),a.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var t=a(83117),r=(a(67294),a(3905)),o=a(93687);const i={title:"Using the Traefik Ingress Controller"},s=void 0,l={unversionedId:"how-to-guides/traefik-ingress-example",id:"version-latest/how-to-guides/traefik-ingress-example",title:"Using the Traefik Ingress Controller",description:"Rancher Desktop uses K3s under the hood, which in turn uses Traefik as the default Ingress controller for your Kubernetes cluster. As an example, the below steps outline creating simple services that can be routed by the Ingress object.",source:"@site/versioned_docs/version-latest/how-to-guides/traefik-ingress-example.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/traefik-ingress-example",permalink:"/zh/how-to-guides/traefik-ingress-example",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/how-to-guides/traefik-ingress-example.md",tags:[],version:"latest",frontMatter:{title:"Using the Traefik Ingress Controller"},sidebar:"tutorialSidebar",previous:{title:"ODO and Rancher Desktop",permalink:"/zh/how-to-guides/odo-rancher-desktop"},next:{title:"\u67b6\u6784",permalink:"/zh/references/architecture"}},p={},c=[{value:"Example Steps: Traefik Ingress Controller",id:"example-steps-traefik-ingress-controller",level:3}],m=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},d=m("Tabs"),u=m("TabItem"),k={toc:c};function h(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},k,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/traefik-ingress-example"})),(0,r.kt)("p",null,"Rancher Desktop uses ",(0,r.kt)("inlineCode",{parentName:"p"},"K3s")," under the hood, which in turn uses ",(0,r.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/"},"Traefik")," as the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.k3s.io/networking#traefik-ingress-controller"},"default Ingress controller")," for your Kubernetes cluster. As an example, the below steps outline creating simple services that can be routed by the Ingress object."),(0,r.kt)("h3",{id:"example-steps-traefik-ingress-controller"},"Example Steps: Traefik Ingress Controller"),(0,r.kt)(d,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(u,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a bash session and set the node IP to your localhost address:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"IP=127.0.0.1\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a namespace called demo:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns demo\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"whoami")," example with basic deployment, service, and Ingress objects defined:"),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Some Linux distributions don't allow listening to priviliged ports by default, please see the documentation on ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rancherdesktop.io/getting-started/installation/#traefik-port-binding-access"},"Traefik port binding access")," to authorize ports if necessary.")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat << EOF | kubectl apply -n demo -f -\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: whoami\n  name: whoami\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: whoami\n  template:\n    metadata:\n      labels:\n        app: whoami\n    spec:\n      containers:\n        - image: traefik/whoami:latest\n          name: whoami\n          ports:\n            - containerPort: 80\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: whoami-svc\nspec:\n  type: ClusterIP\n  selector:\n    app: whoami\n  ports:\n    - port: 80\n---    \napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: whoami-http\n  annotations:\n    traefik.ingress.kubernetes.io/router.entrypoints: web\nspec:\n  rules:\n    - host: whoami.$IP.nip.io\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: whoami-svc\n                port:\n                  number: 80\nEOF\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify the ingress works by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl whoami.$IP.nip.io\nHostname: whoami-6ff6dcfdc8-74mwq\nIP: 127.0.0.1\nIP: ::1\nIP: 10.42.0.42\nIP: fe80::e804:41ff:feac:7eef\nRemoteAddr: 10.42.0.45:35392\nGET / HTTP/1.1\nHost: whoami.127.0.0.1.nip.io\nUser-Agent: curl/7.64.1\nAccept: */*\nAccept-Encoding: gzip\nX-Forwarded-For: 10.42.0.1\nX-Forwarded-Host: whoami.127.0.0.1.nip.io\nX-Forwarded-Port: 80\nX-Forwarded-Proto: http\nX-Forwarded-Server: traefik-d497b4cb6-4vkg9\nX-Real-Ip: 10.42.0.1\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete the resources:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete all,ingress --all -n demo\n"))))),(0,r.kt)(u,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a bash session and set the node IP to your localhost address:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"IP=127.0.0.1\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a namespace called demo:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns demo\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"whoami")," example with basic deployment, service, and Ingress objects defined:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat << EOF | kubectl apply -n demo -f -\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: whoami\n  name: whoami\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: whoami\n  template:\n    metadata:\n      labels:\n        app: whoami\n    spec:\n      containers:\n        - image: traefik/whoami:latest\n          name: whoami\n          ports:\n            - containerPort: 80\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: whoami-svc\nspec:\n  type: ClusterIP\n  selector:\n    app: whoami\n  ports:\n    - port: 80\n---    \napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: whoami-http\n  annotations:\n    traefik.ingress.kubernetes.io/router.entrypoints: web\nspec:\n  rules:\n    - host: whoami.$IP.nip.io\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: whoami-svc\n                port:\n                  number: 80\nEOF\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify the ingress works by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl whoami.$IP.nip.io\nHostname: whoami-6ff6dcfdc8-74mwq\nIP: 127.0.0.1\nIP: 10.42.0.4\nRemoteAddr: 10.42.0.250:54102\nGET / HTTP/1.1\nHost: whoami.127.0.0.1.nip.io\nUser-Agent: curl/8.1.1\nAccept: */*\nAccept-Encoding: gzip\nX-Forwarded-For: 10.42.0.246\nX-Forwarded-Host: whoami.127.0.0.1.nip.io\nX-Forwarded-Port: 80\nX-Forwarded-Proto: http\nX-Forwarded-Server: traefik-64b96ccbcd-26wcv\nX-Real-Ip: 10.42.0.246\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete the resources:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete all,ingress --all -n demo\n"))))),(0,r.kt)(u,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a powershell session and set the node IP to your local address:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$IP = (kubectl get node/$env:COMPUTERNAME -o jsonpath='{.status.addresses[?(@.type==\"InternalIP\")].address}')\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a namespace called demo:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create ns demo\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"whoami")," example with basic deployment, service, and Ingress objects defined:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'echo @"\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: whoami\n  name: whoami\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: whoami\n  template:\n    metadata:\n      labels:\n        app: whoami\n    spec:\n      containers:\n        - image: traefik/whoami:latest\n          name: whoami\n          ports:\n            - containerPort: 80\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: whoami-svc\nspec:\n  type: ClusterIP\n  selector:\n    app: whoami\n  ports:\n    - port: 80\n---\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: whoami-http\n  annotations:\n    traefik.ingress.kubernetes.io/router.entrypoints: web\nspec:\n  rules:\n    - host: whoami.$IP.nip.io\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: whoami-svc\n                port:\n                  number: 80\n"@ | kubectl apply -n demo -f -\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify the ingress works by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl whoami.$IP.nip.io\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete the resources:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete all,ingress --all -n demo\n")))))))}h.isMDXComponent=!0}}]);