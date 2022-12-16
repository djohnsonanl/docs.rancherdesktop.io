"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[475],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=l.createContext({}),u=function(e){var t=l.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return l.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,h=s["".concat(d,".").concat(m)]||s[m]||c[m]||r;return n?l.createElement(h,o(o({ref:t},p),{},{components:n})):l.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var l=n(7294),a=n(4334),r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return l.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var l=n(3117),a=n(7294),r=n(4334),o=n(2389),i=n(7392),d=n(7094),u=n(2466),p="tabList__CuJ",c="tabItem_LNqP";function s(e){var t;const{lazy:n,block:o,defaultValue:s,values:m,groupId:h,className:k}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??f.map((e=>{let{props:{value:t,label:n,attributes:l}}=e;return{value:t,label:n,attributes:l}})),g=(0,i.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===s?s:s??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:y}=(0,d.U)(),[x,N]=(0,a.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=h){const e=w[h];null!=e&&e!==x&&b.some((t=>t.value===e))&&N(e)}const D=e=>{const t=e.currentTarget,n=C.indexOf(t),l=b[n].value;l!==x&&(T(t),N(l),null!=h&&y(h,String(l)))},O=e=>{var t;let n=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},k)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>C.push(e),onKeyDown:O,onClick:D},o,{className:(0,r.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,o.Z)();return a.createElement(s,(0,l.Z)({key:String(t)},e))}},6850:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var l=n(3117),a=(n(7294),n(3905)),r=n(5488),o=n(5162);const i={title:"Hello World Example"},d=void 0,u={unversionedId:"how-to-guides/hello-world-example",id:"how-to-guides/hello-world-example",title:"Hello World Example",description:"This tutorial will demonstrate how to get started with Rancher Desktop by pushing an app to a local Kubernetes cluster.",source:"@site/docs/how-to-guides/hello-world-example.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/hello-world-example",permalink:"/next/how-to-guides/hello-world-example",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/how-to-guides/hello-world-example.md",tags:[],version:"current",frontMatter:{title:"Hello World Example"},sidebar:"tutorialSidebar",previous:{title:"Working with Containers",permalink:"/next/tutorials/working-with-containers"},next:{title:"Transfer Container Images",permalink:"/next/how-to-guides/transfer-container-images"}},p={},c=[{value:"Example#1 - Build Image &amp; Run Container",id:"example1---build-image--run-container",level:3},{value:"Create a folder",id:"create-a-folder",level:4},{value:"Create a blank Dockerfile",id:"create-a-blank-dockerfile",level:4},{value:"Populate the Dockerfile with the command below",id:"populate-the-dockerfile-with-the-command-below",level:4},{value:"Build and run the image for verification purposes",id:"build-and-run-the-image-for-verification-purposes",level:4},{value:"Example#2 - Build Image &amp; Deploy Container to Kubernetes",id:"example2---build-image--deploy-container-to-kubernetes",level:3},{value:"Create a folder and add a sample index.html file as follows",id:"create-a-folder-and-add-a-sample-indexhtml-file-as-follows",level:4},{value:"Create a blank Dockerfile",id:"create-a-blank-dockerfile-1",level:4},{value:"Populate the Dockerfile with the command below",id:"populate-the-dockerfile-with-the-command-below-1",level:4},{value:"Build image from code locally",id:"build-image-from-code-locally",level:4},{value:"Deploy to Kubernetes",id:"deploy-to-kubernetes",level:4},{value:"Delete the pod and the image",id:"delete-the-pod-and-the-image",level:4}],s={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This tutorial will demonstrate how to get started with Rancher Desktop by pushing an app to a local Kubernetes cluster."),(0,a.kt)("p",null,"Rancher Desktop works with two container engines, ",(0,a.kt)("a",{parentName:"p",href:"https://containerd.io/"},"containerd")," and ",(0,a.kt)("a",{parentName:"p",href:"https://mobyproject.org/"},"Moby"),", the open-sourced components of the Docker ecosystem. For ",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl"),", use the ",(0,a.kt)("strong",{parentName:"p"},"containerd")," runtime. For ",(0,a.kt)("inlineCode",{parentName:"p"},"docker"),", use the ",(0,a.kt)("strong",{parentName:"p"},"dockerd(moby)")," runtime."),(0,a.kt)("h3",{id:"example1---build-image--run-container"},"Example#1 - Build Image & Run Container"),(0,a.kt)("h4",{id:"create-a-folder"},"Create a folder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir ../hello-world\ncd ../hello-world\n")),(0,a.kt)("h4",{id:"create-a-blank-dockerfile"},"Create a blank Dockerfile"),(0,a.kt)("p",null,"On Windows, Create a blank file named ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")),(0,a.kt)("p",null,"On Linux, You can use below command to create a blank ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vi Dockerfile\n")),(0,a.kt)("h4",{id:"populate-the-dockerfile-with-the-command-below"},"Populate the Dockerfile with the command below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'FROM alpine  \nCMD ["echo", "Hello World!!"]\n')),(0,a.kt)("h4",{id:"build-and-run-the-image-for-verification-purposes"},"Build and run the image for verification purposes"),(0,a.kt)(r.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl build --tag helloworld:v1.0 .\nnerdctl images | grep helloworld\nnerdctl run --rm helloworld:v1.0\n# Remove the image\nnerdctl rmi helloworld:v1.0 \n"))),(0,a.kt)(o.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build --tag helloworld:v1.0 .\ndocker images | grep helloworld\ndocker run --rm helloworld:v1.0\n# Remove the image\ndocker rmi helloworld:v1.0 \n")))),(0,a.kt)("h3",{id:"example2---build-image--deploy-container-to-kubernetes"},"Example#2 - Build Image & Deploy Container to Kubernetes"),(0,a.kt)("p",null,"Make sure that you switch the ",(0,a.kt)("strong",{parentName:"p"},"Container Runtime")," setting in the ",(0,a.kt)("strong",{parentName:"p"},"Kubernetes Settings")," panel to either ",(0,a.kt)("inlineCode",{parentName:"p"},"dockerd")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"containerd")," as needed."),(0,a.kt)("h4",{id:"create-a-folder-and-add-a-sample-indexhtml-file-as-follows"},"Create a folder and add a sample index.html file as follows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'mkdir ../nginx\ncd ../nginx\necho "<h1>Hello World from NGINX!!</h1>" > index.html\n')),(0,a.kt)("h4",{id:"create-a-blank-dockerfile-1"},"Create a blank Dockerfile"),(0,a.kt)("p",null,"On Windows, Create a blank file named ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")),(0,a.kt)("p",null,"On Linux, You can use below command to create a blank ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vi Dockerfile\n")),(0,a.kt)("h4",{id:"populate-the-dockerfile-with-the-command-below-1"},"Populate the Dockerfile with the command below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"FROM nginx:alpine\nCOPY . /usr/share/nginx/html\n")),(0,a.kt)("h4",{id:"build-image-from-code-locally"},"Build image from code locally"),(0,a.kt)("p",null,"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Note:")," Please note that you need to pass the flag ",(0,a.kt)("inlineCode",{parentName:"p"},"--namespace k8s.io")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl")," build command, so that ",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl")," builds the image and then makes it available in the ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s.io")," namespace."),(0,a.kt)(r.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl --namespace k8s.io build --tag nginx-helloworld:latest .\nnerdctl --namespace k8s.io images | grep nginx-helloworld\n"))),(0,a.kt)(o.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build --tag nginx-helloworld:latest .\ndocker images | grep nginx-helloworld\n")))),(0,a.kt)("h4",{id:"deploy-to-kubernetes"},"Deploy to Kubernetes"),(0,a.kt)("p",null,"Run below command to create and run a pod using the image built in the previous step. "),(0,a.kt)("p",null,"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Note:")," Please note that you need to pass the flag ",(0,a.kt)("inlineCode",{parentName:"p"},"--image-pull-policy=Never")," to use a local image with ",(0,a.kt)("inlineCode",{parentName:"p"},":latest")," tag, as ",(0,a.kt)("inlineCode",{parentName:"p"},":latest")," tag will always try to pull the images from a remote repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl run hello-world --image=nginx-helloworld:latest --image-pull-policy=Never --port=80\nkubectl port-forward pods/hello-world 8080:80\n")),(0,a.kt)("p",null,"Point your web browser to ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:8080"),", and you will see the message ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello World from NGINX!!"),". If you prefer to stay on the command line, use ",(0,a.kt)("inlineCode",{parentName:"p"},"curl localhost:8080"),"."),(0,a.kt)("h4",{id:"delete-the-pod-and-the-image"},"Delete the pod and the image"),(0,a.kt)(r.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl delete pod hello-world\n# Remove the image\nnerdctl --namespace k8s.io rmi nginx-helloworld:latest \n"))),(0,a.kt)(o.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl delete pod hello-world \n# Remove the image\ndocker rmi nginx-helloworld:latest\n")))))}m.isMDXComponent=!0}}]);