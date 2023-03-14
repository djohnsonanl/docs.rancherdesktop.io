"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[1334],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||l;return r?n.createElement(m,o(o({ref:t},i),{},{components:r})):n.createElement(m,o({ref:t},i))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(7294),a=r(4334),l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},4866:function(e,t,r){r.d(t,{Z:function(){return N}});var n=r(3117),a=r(7294),l=r(4334),o=r(2466),c=r(6775),s=r(1980),u=r(7392),i=r(12);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,c.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=d(e),[o,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=m({queryString:r,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,i.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),k=(()=>{const e=s??p;return h({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{k&&c(k)}),[k]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var k=r(2389),g="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:r,selectedValue:c,selectValue:s,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,r=i.indexOf(t),n=u[r].value;n!==c&&(p(t),s(n))},h=e=>{var t;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>i.push(e),onKeyDown:h,onClick:d},o,{className:(0,l.Z)("tabs__item",b,null==o?void 0:o.className,{"tabs__item--active":c===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",g)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},7358:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(3117),a=(r(7294),r(3905)),l=r(4866),o=r(5162);const c={title:"Rancher Desktop \u4e0a\u7684 Rancher"},s=void 0,u={unversionedId:"how-to-guides/rancher-on-rancher-desktop",id:"version-latest/how-to-guides/rancher-on-rancher-desktop",title:"Rancher Desktop \u4e0a\u7684 Rancher",description:"\u867d\u7136 Rancher \u548c Rancher Desktop \u7684\u540d\u5b57\u91cc\u90fd\u5305\u542b Rancher\uff0c\u4f46\u5b83\u4eec\u7684\u529f\u80fd\u662f\u6709\u5dee\u522b\u7684\u3002Rancher Desktop \u4e0d\u662f\u684c\u9762\u7248 Rancher\u3002Rancher \u662f\u7ba1\u7406 Kubernetes \u96c6\u7fa4\u7684\u5f3a\u5927\u89e3\u51b3\u65b9\u6848\uff0c\u800c Rancher Desktop \u8fd0\u884c\u672c\u5730 Kubernetes \u548c\u5bb9\u5668\u7ba1\u7406\u5e73\u53f0\uff0c\u8fd9\u4e24\u79cd\u89e3\u51b3\u65b9\u6848\u76f8\u8f85\u76f8\u6210\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u5c06 Rancher \u4f5c\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u5b89\u88c5\u5728 Rancher Desktop \u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-latest/how-to-guides/rancher-on-rancher-desktop.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/rancher-on-rancher-desktop",permalink:"/zh/how-to-guides/rancher-on-rancher-desktop",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/how-to-guides/rancher-on-rancher-desktop.md",tags:[],version:"latest",frontMatter:{title:"Rancher Desktop \u4e0a\u7684 Rancher"},sidebar:"tutorialSidebar",previous:{title:"VS Code Remote Containers",permalink:"/zh/how-to-guides/vs-code-remote-containers"},next:{title:"Skaffold \u4e0e Rancher Desktop",permalink:"/zh/how-to-guides/skaffold-and-rancher-desktop"}},i={},p=[],d={toc:p};function h(e){let{components:t,...c}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u867d\u7136 ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/"},"Rancher")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"https://rancherdesktop.io/"},"Rancher Desktop")," \u7684\u540d\u5b57\u91cc\u90fd\u5305\u542b ",(0,a.kt)("em",{parentName:"p"},"Rancher"),"\uff0c\u4f46\u5b83\u4eec\u7684\u529f\u80fd\u662f\u6709\u5dee\u522b\u7684\u3002Rancher Desktop \u4e0d\u662f\u684c\u9762\u7248 Rancher\u3002Rancher \u662f\u7ba1\u7406 Kubernetes \u96c6\u7fa4\u7684\u5f3a\u5927\u89e3\u51b3\u65b9\u6848\uff0c\u800c Rancher Desktop \u8fd0\u884c\u672c\u5730 Kubernetes \u548c\u5bb9\u5668\u7ba1\u7406\u5e73\u53f0\uff0c\u8fd9\u4e24\u79cd\u89e3\u51b3\u65b9\u6848\u76f8\u8f85\u76f8\u6210\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u5c06 Rancher \u4f5c\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u5b89\u88c5\u5728 Rancher Desktop \u4e2d\u3002"),(0,a.kt)("p",null,"\u672c\u6307\u5357\u6982\u8ff0\u4e86\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"container runtime")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"helm"),"\uff08\u672c\u5730\u73af\u5883\uff09\u5728 Rancher Desktop \u4e0a\u5b89\u88c5 Rancher Dashboard \u7684\u6b65\u9aa4\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5982\u679c\u5b9e\u7528\u7a0b\u5e8f\uff08\u4f8b\u5982\uff1ahelm\uff09\u6216\u4f60\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7248\u672c\u4e0e\u4f1a\u8bdd\u4e2d\u7684 Kubernetes \u7248\u672c\u4e0d\u517c\u5bb9\uff0c\u4f60\u53ef\u80fd\u4f1a\u9047\u5230\u95ee\u9898\u3002\u4f5c\u4e3a\u4e00\u4e2a\u6f5c\u5728\u7684\u4fee\u590d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rancherdesktop.io/getting-started/features/#kubernetes"},"Preferences > Kubernetes")," \u5bf9\u8bdd\u6846\u5207\u6362\u5230\u517c\u5bb9\u7684 Kubernetes \u7248\u672c\u3002",(0,a.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/rancher-v2-7-1/"},"\u652f\u6301\u77e9\u9635\u9875\u9762"),"\u4e0a\u5217\u51fa\u4e86 Rancher \u652f\u6301\u7684 Kubernetes \u5e73\u53f0\u3002"),(0,a.kt)(l.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl run --privileged -d --restart=always -p 8080:80 -p 8443:443 rancher/rancher\n"))),(0,a.kt)(o.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run --privileged -d --restart=always -p 8080:80 -p 8443:443 rancher/rancher\n"))),(0,a.kt)(o.Z,{value:"helm",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"1\uff1a\u6dfb\u52a0 Jetstack Chart\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add jetstack https://charts.jetstack.io\n")),(0,a.kt)("p",null,"2\uff1a\u6dfb\u52a0\u6700\u65b0\u7684 Rancher Chart\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n")),(0,a.kt)("p",null,"3\uff1a\u521b\u5efa cert-manager \u547d\u540d\u7a7a\u95f4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"kubectl create namespace cert-manager\n")),(0,a.kt)("p",null,"4\uff1a\u5b89\u88c5 cert-manager \u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"helm install cert-manager jetstack/cert-manager --namespace cert-manager --version v1.7.1 --set installCRDs=true\n")),(0,a.kt)("p",null,"5\uff1a\u521b\u5efa cattle-system \u547d\u540d\u7a7a\u95f4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"kubectl create namespace cattle-system\n")),(0,a.kt)("p",null,"6\uff1a\u5b89\u88c5 Rancher \u5e94\u7528\u7a0b\u5e8f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"helm install rancher rancher-latest/rancher --namespace cattle-system --set hostname=rancher.rd.localhost --wait --timeout=10m\n")))),(0,a.kt)("p",null,"\u5b89\u88c5\u9700\u8981\u51e0\u5206\u949f\u624d\u80fd\u5b8c\u6210\u3002\u5b89\u88c5\u540e\uff0c\u4f60\u53ef\u4ee5\u8bbf\u95ee Rancher UI\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"container runtime")," \u5b89\u88c5\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://localhost:8443/"},"https://localhost:8443/")),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"helm")," \u5b89\u88c5\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://rancher.rd.localhost/"},"https://rancher.rd.localhost/"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(4689).Z,width:"1189",height:"875"})),(0,a.kt)(l.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"\u8981\u8bbf\u95ee Rancher UI\uff0c\u4f60\u9700\u8981\u83b7\u53d6\u5f15\u5bfc\u5bc6\u7801\uff1a"),(0,a.kt)("p",null,"1\uff1a\u83b7\u53d6 Rancher UI \u5bb9\u5668 ID/\u540d\u79f0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl ps\n")),(0,a.kt)("p",null,"2\uff1a\u83b7\u53d6\u5f15\u5bfc\u5bc6\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'nerdctl logs [rancherContainerID] 2>&1 | grep "Bootstrap Password:"\n')),(0,a.kt)("p",null,"3\uff1a\u5f15\u5bfc\u5bc6\u7801\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"[INFO] Bootstrap Password: 7fwjjw4ldcmnq8ghns22q7nhl5lrznwwt9p9vjljfjc6tqbcvhxmwq\n"))),(0,a.kt)(o.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"\u8981\u8bbf\u95ee Rancher UI\uff0c\u4f60\u9700\u8981\u83b7\u53d6\u5f15\u5bfc\u5bc6\u7801\uff1a"),(0,a.kt)("p",null,"1\uff1a\u83b7\u53d6 Rancher UI \u5bb9\u5668 ID/\u540d\u79f0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker ps\n")),(0,a.kt)("p",null,"2\uff1a\u83b7\u53d6\u5f15\u5bfc\u5bc6\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'docker logs [rancherContainerID] 2>&1 | grep "Bootstrap Password:"\n')),(0,a.kt)("p",null,"3\uff1a\u5f15\u5bfc\u5bc6\u7801\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"[INFO] Bootstrap Password: 7fwjjw4ldcmnq8ghns22q7nhl5lrznwwt9p9vjljfjc6tqbcvhxmwq\n")))),(0,a.kt)("p",null,"\u6309\u7167\u5411\u5bfc\u8bf4\u660e\u5e76\u5355\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Continue")," \u4ee5\u8fdb\u5165 Rancher UI \u4e3b\u9875\u9762\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(1637).Z,width:"1589",height:"979"})),(0,a.kt)("p",null,"\u5728 Rancher UI \u4e2d\uff0c\u4f60\u53ef\u4ee5\u7ba1\u7406 local \u96c6\u7fa4\u3001\u8282\u70b9\u7b49\u3002\u5982\u9700\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/"},"Rancher \u6587\u6863"),"\u3002"))}h.isMDXComponent=!0},1637:function(e,t,r){t.Z=r.p+"assets/images/rancherUiMainPage-b53cd5a80ad0bacb7aa613f3ae7bd0b7.png"},4689:function(e,t,r){t.Z=r.p+"assets/images/rancherUiWelcomePage-21a9632bf47edafe852af976ed625bf1.png"}}]);