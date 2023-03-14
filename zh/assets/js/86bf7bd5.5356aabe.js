"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[6758],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,u(u({ref:t},i),{},{components:r})):n.createElement(f,u({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var c=2;c<o;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(7294),a=r(4334),o="tabItem_Ymn6";function u(e){let{children:t,hidden:r,className:u}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:r},t)}},4866:function(e,t,r){r.d(t,{Z:function(){return N}});var n=r(3117),a=r(7294),o=r(4334),u=r(2466),l=r(6775),s=r(1980),c=r(7392),i=r(12);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function k(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[u,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=f({queryString:r,groupId:n}),[p,k]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,i.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),h=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:u,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),k(e)}),[c,k,o]),tabValues:o}}var h=r(2389),b="tabList__CuJ",g="tabItem_LNqP";function v(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:p}=(0,u.o5)(),d=e=>{const t=e.currentTarget,r=i.indexOf(t),n=c[r].value;n!==l&&(p(t),s(n))},m=e=>{var t;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:u}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>i.push(e),onKeyDown:m,onClick:d},u,{className:(0,o.Z)("tabs__item",g,null==u?void 0:u.className,{"tabs__item--active":l===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=k(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},7139:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(3117),a=(r(7294),r(3905)),o=r(4866),u=r(5162);const l={title:"\u4f7f\u7528 k3d \u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4"},s=void 0,c={unversionedId:"how-to-guides/create-multi-node-cluster",id:"version-1.7/how-to-guides/create-multi-node-cluster",title:"\u4f7f\u7528 k3d \u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4",description:"Rancher Desktop \u652f\u6301\u5355\u8282\u70b9\u96c6\u7fa4\u8bbe\u7f6e\uff0c\u8fd9\u6ee1\u8db3\u5927\u591a\u6570\u672c\u5730\u5f00\u53d1\u573a\u666f\u3002\u4f46\u662f\uff0c\u5728\u67d0\u4e9b\u7528\u4f8b\u4e2d\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4\uff0c\u6216\u542f\u52a8\u591a\u4e2a\u96c6\u7fa4\u5e76\u7075\u6d3b\u5730\u5728\u96c6\u7fa4\u4e4b\u95f4\u5207\u6362\u3002\u5c3d\u7ba1 Rancher Desktop \u6ca1\u6709\u5185\u7f6e\u7684\u591a\u8282\u70b9/\u96c6\u7fa4\u529f\u80fd\uff0c\u4f46\u4f60\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528 k3d \u4e0e Rancher Desktop \u6765\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd\u3002k3d \u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u5305\u88c5\u5668\uff0c\u7528\u4e8e\u5728 Docker \u4e2d\u8fd0\u884c k3s\uff08\u4e00\u4e2a\u6700\u5c0f\u5316\u7684 Kubernetes \u53d1\u884c\u7248\uff0cRancher Desktop \u4e5f\u4f7f\u7528\u5b83\uff09\u3002k3d \u80fd\u8ba9\u4f60\u8f7b\u677e\u5728 Docker \u4e2d\u521b\u5efa\u5355\u8282\u70b9\u548c\u591a\u8282\u70b9 k3s \u96c6\u7fa4\uff08\u4f8b\u5982\u7528\u4e8e Kubernetes \u4e0a\u7684\u672c\u5730\u5f00\u53d1\uff09\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7/how-to-guides/create-multi-node-cluster.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/create-multi-node-cluster",permalink:"/zh/1.7/how-to-guides/create-multi-node-cluster",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.7/how-to-guides/create-multi-node-cluster.md",tags:[],version:"1.7",frontMatter:{title:"\u4f7f\u7528 k3d \u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4"},sidebar:"tutorialSidebar",previous:{title:"\u4f20\u8f93\u5bb9\u5668\u955c\u50cf",permalink:"/zh/1.7/how-to-guides/transfer-container-images"},next:{title:"\u8bbe\u7f6e NGINX Ingress Controller",permalink:"/zh/1.7/how-to-guides/setup-NGINX-Ingress-Controller"}},i={},p=[{value:"\u542f\u52a8\u591a\u8282\u70b9\u96c6\u7fa4\u7684\u6b65\u9aa4",id:"\u542f\u52a8\u591a\u8282\u70b9\u96c6\u7fa4\u7684\u6b65\u9aa4",level:3}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rancher Desktop \u652f\u6301",(0,a.kt)("strong",{parentName:"p"},"\u5355\u8282\u70b9\u96c6\u7fa4"),"\u8bbe\u7f6e\uff0c\u8fd9\u6ee1\u8db3\u5927\u591a\u6570\u672c\u5730\u5f00\u53d1\u573a\u666f\u3002\u4f46\u662f\uff0c\u5728\u67d0\u4e9b\u7528\u4f8b\u4e2d\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4\uff0c\u6216\u542f\u52a8\u591a\u4e2a\u96c6\u7fa4\u5e76\u7075\u6d3b\u5730\u5728\u96c6\u7fa4\u4e4b\u95f4\u5207\u6362\u3002\u5c3d\u7ba1 Rancher Desktop \u6ca1\u6709\u5185\u7f6e\u7684\u591a\u8282\u70b9/\u96c6\u7fa4\u529f\u80fd\uff0c\u4f46\u4f60\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://k3d.io"},"k3d")," \u4e0e Rancher Desktop \u6765\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd\u3002k3d \u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u5305\u88c5\u5668\uff0c\u7528\u4e8e\u5728 Docker \u4e2d\u8fd0\u884c k3s\uff08\u4e00\u4e2a\u6700\u5c0f\u5316\u7684 Kubernetes \u53d1\u884c\u7248\uff0cRancher Desktop \u4e5f\u4f7f\u7528\u5b83\uff09\u3002k3d \u80fd\u8ba9\u4f60\u8f7b\u677e\u5728 Docker \u4e2d\u521b\u5efa\u5355\u8282\u70b9\u548c\u591a\u8282\u70b9 k3s \u96c6\u7fa4\uff08\u4f8b\u5982\u7528\u4e8e Kubernetes \u4e0a\u7684\u672c\u5730\u5f00\u53d1\uff09\u3002"),(0,a.kt)("h3",{id:"\u542f\u52a8\u591a\u8282\u70b9\u96c6\u7fa4\u7684\u6b65\u9aa4"},"\u542f\u52a8\u591a\u8282\u70b9\u96c6\u7fa4\u7684\u6b65\u9aa4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u786e\u4fdd\u5728 ",(0,a.kt)("strong",{parentName:"p"},"Kubernetes Settings")," \u9875\u9762\u4e2d\u9009\u62e9\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"dockerd(moby)")," \u4f5c\u4e3a\u5bb9\u5668\u8fd0\u884c\u65f6\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5b89\u88c5 k3d\u3002"))),(0,a.kt)(o.Z,{groupId:"installation-approach",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"wget",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wget -q -O - https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash\n"))),(0,a.kt)(u.Z,{value:"curl",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -s https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash\n")))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"k3d cluster create")," \u547d\u4ee4\u6765\u542f\u52a8\u591a\u8282\u70b9\u96c6\u7fa4\u3002\u4f8b\u5982\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"k3d cluster create two-node-cluster --agents 2\nk3d cluster create three-node-cluster --agents 3\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"k3d \u5c06\u65b0\u521b\u5efa\u7684\u96c6\u7fa4\u8bbe\u7f6e\u4e3a active\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl config use-context")," \u547d\u4ee4\u6765\u5207\u6362\u96c6\u7fa4\u3002\u4f8b\u5982\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl config use-context k3d-two-node-cluster\n")),(0,a.kt)("p",null,"\u8981\u4e86\u89e3\u6709\u5173 ",(0,a.kt)("strong",{parentName:"p"},"k3s")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"k3d")," \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u8fd9\u4e9b\u9879\u76ee\u7684\u6587\u6863\uff08",(0,a.kt)("a",{parentName:"p",href:"https://docs.k3s.io/"},"k3s \u6587\u6863")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"https://k3d.io/"},"k3d \u6587\u6863"),"\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u26a0\ufe0f \u8bf7\u6ce8\u610f\uff0c",(0,a.kt)("inlineCode",{parentName:"strong"},"k3d")," \u521b\u5efa\u7684\u96c6\u7fa4\u4e0d\u662f\u901a\u8fc7 Rancher Desktop GUI \u7ba1\u7406\u7684\u3002")))}m.isMDXComponent=!0}}]);