"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[6554],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=i(a),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(f,u(u({ref:t},c),{},{components:a})):n.createElement(f,u({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,u=new Array(l);u[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,u[1]=o;for(var i=2;i<l;i++)u[i]=a[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},93687:function(e,t,a){var n=a(10412);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),u=r?"ios":"android",o=r?"macOS":l?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:u,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(67294),r=a(34334),l="tabItem_Ymn6";function u(e){let{children:t,hidden:a,className:u}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,u),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(83117),r=a(67294),l=a(34334),u=a(12466),o=a(76775),s=a(91980),i=a(67392),c=a(50012);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[u,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,i]=f({queryString:a,groupId:n}),[d,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:u,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),i(e),v(e)}),[i,v,l]),tabValues:l}}var b=a(72389),g="tabList__CuJ",h="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,u.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=i[a].value;n!==o&&(d(t),s(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:u}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},u,{className:(0,l.Z)("tabs__item",h,null==u?void 0:u.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=v(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function x(e){const t=(0,b.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},2381:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(83117),r=(a(67294),a(3905)),l=a(74866),u=a(85162),o=a(93687);const s={sidebar_label:"\u6269\u5c55",title:"\u6269\u5c55"},i=void 0,c={unversionedId:"ui/extensions",id:"version-1.9/ui/extensions",title:"\u6269\u5c55",description:"Catalog",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.9/ui/extensions.md",sourceDirName:"ui",slug:"/ui/extensions",permalink:"/zh/1.9/ui/extensions",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9/ui/extensions.md",tags:[],version:"1.9",frontMatter:{sidebar_label:"\u6269\u5c55",title:"\u6269\u5c55"},sidebar:"tutorialSidebar",previous:{title:"\u8bca\u65ad",permalink:"/zh/1.9/ui/diagnostics"},next:{title:"\u901a\u7528",permalink:"/zh/1.9/ui/preferences/application/general"}},d={},p=[{value:"Catalog",id:"catalog",level:3},{value:"\u641c\u7d22",id:"\u641c\u7d22",level:4},{value:"Installed",id:"installed",level:3},{value:"Name",id:"name",level:4}],m={toc:p};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"catalog"},"Catalog"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Catalog")," \u9009\u9879\u5361\u662f Rancher Desktop \u7684\u6269\u5c55\u5e02\u573a\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5355\u51fb\u6269\u5c55\u6765\u83b7\u5f97\u66f4\u591a\u4fe1\u606f\uff0c\u5e76\u76f4\u63a5\u4f7f\u7528 UI \u5b89\u88c5\u6269\u5c55\u3002"),(0,r.kt)(l.Z,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.9/ui-main/Windows_Extensions.png",alt:null}))),(0,r.kt)(u.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.9/ui-main/macOS_Extensions.png",alt:null}))),(0,r.kt)(u.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.9/ui-main/Linux_Extensions.png",alt:null})))),(0,r.kt)("h4",{id:"\u641c\u7d22"},"\u641c\u7d22"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"\u641c\u7d22"),"\u529f\u80fd\u6765\u67e5\u8be2\u53ef\u7528\u7684\u6269\u5c55\u3002"),(0,r.kt)("h3",{id:"installed"},"Installed"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Installed")," \u9009\u9879\u5361\u5217\u51fa\u4e86 Rancher Desktop \u4e0a\u6240\u6709\u5df2\u5b89\u88c5\u6269\u5c55\u3002"),(0,r.kt)(l.Z,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.9/ui-main/Windows_Extensions-Installed.png",alt:null}))),(0,r.kt)(u.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.9/ui-main/macOS_Extensions-Installed.png",alt:null}))),(0,r.kt)(u.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.9/ui-main/Linux_Extensions-Installed.png",alt:null})))),(0,r.kt)("h4",{id:"name"},"Name"),(0,r.kt)("p",null,"\u5df2\u5b89\u88c5\u6269\u5c55\u7684\u540d\u79f0\u5217\u8868\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5355\u51fb\u53f3\u4fa7\u7684 ",(0,r.kt)("strong",{parentName:"p"},"Uninstall")," \u6309\u94ae\u76f4\u63a5\u5378\u8f7d\u6269\u5c55\u3002"))}f.isMDXComponent=!0}}]);