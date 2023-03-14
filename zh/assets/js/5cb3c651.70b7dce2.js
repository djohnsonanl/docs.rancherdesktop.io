"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[7914],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||u;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=r.length,o=new Array(u);o[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<u;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(7294),a=r(4334),u="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(u,o),hidden:r},t)}},4866:function(e,t,r){r.d(t,{Z:function(){return E}});var n=r(3117),a=r(7294),u=r(4334),o=r(2466),l=r(6775),i=r(1980),s=r(7392),c=r(12);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function f(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),u=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(u),(0,a.useCallback)((e=>{if(!u)return;const t=new URLSearchParams(n.location.search);t.set(u,e),n.replace({...n.location,search:t.toString()})}),[u,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,u=f(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:u}))),[i,s]=m({queryString:r,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,u]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&u.set(e)}),[r,u])]}({groupId:n}),h=(()=>{const e=i??p;return d({value:e,tabValues:u})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:u}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),b(e)}),[s,b,u]),tabValues:u}}var h=r(2389),v="tabList__CuJ",y="tabItem_LNqP";function g(e){let{className:t,block:r,selectedValue:l,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),f=e=>{const t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==l&&(p(t),i(n))},d=e=>{var t;let r=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:f},o,{className:(0,u.Z)("tabs__item",y,null==o?void 0:o.className,{"tabs__item--active":l===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=b(e);return a.createElement("div",{className:(0,u.Z)("tabs-container",v)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(w,(0,n.Z)({},e,t)))}function E(e){const t=(0,h.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},8528:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var n=r(3117),a=(r(7294),r(3905));r(4866),r(5162);const u={sidebar_label:"WSL",title:"WSL (Windows)"},o=void 0,l={unversionedId:"ui/preferences/wsl",id:"ui/preferences/wsl",title:"WSL (Windows)",description:"\u8be5\u9009\u9879\u4f7f Rancher Desktop Kubernetes \u914d\u7f6e\u80fd\u591f\u88ab\u4efb\u4f55 WSL \u914d\u7f6e\u7684 Linux \u53d1\u884c\u7248\u6240\u8bbf\u95ee\u3002\u4e00\u65e6\u542f\u7528\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 WSL \u53d1\u884c\u7248\u4e2d\u7684 kubectl \u7b49\u5de5\u5177\u4e0e Rancher Desktop Kubernetes \u96c6\u7fa4\u8fdb\u884c\u901a\u4fe1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/ui/preferences/wsl.md",sourceDirName:"ui/preferences",slug:"/ui/preferences/wsl",permalink:"/zh/next/ui/preferences/wsl",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/ui/preferences/wsl.md",tags:[],version:"current",frontMatter:{sidebar_label:"WSL",title:"WSL (Windows)"},sidebar:"tutorialSidebar",previous:{title:"\u865a\u62df\u673a",permalink:"/zh/next/ui/preferences/virtual-machine"},next:{title:"\u5bb9\u5668\u5f15\u64ce",permalink:"/zh/next/ui/preferences/container-engine"}},i={},s=[],c={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8be5\u9009\u9879\u4f7f Rancher Desktop Kubernetes \u914d\u7f6e\u80fd\u591f\u88ab\u4efb\u4f55 WSL \u914d\u7f6e\u7684 Linux \u53d1\u884c\u7248\u6240\u8bbf\u95ee\u3002\u4e00\u65e6\u542f\u7528\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 WSL \u53d1\u884c\u7248\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," \u7b49\u5de5\u5177\u4e0e Rancher Desktop Kubernetes \u96c6\u7fa4\u8fdb\u884c\u901a\u4fe1\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/Windows_wsl.png",alt:null})),(0,a.kt)("p",null,"WSL \u8ba9\u4f60\u5728\u6240\u6709 Linux \u53d1\u884c\u7248\u4e2d\u5168\u5c40\u914d\u7f6e\u5185\u5b58\u548c CPU \u5206\u914d\u3002\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/wsl-config#options-for-wslconfig"},"WSL \u6587\u6863"),"\u4e2d\u7684\u8bf4\u660e\u3002"))}p.isMDXComponent=!0}}]);