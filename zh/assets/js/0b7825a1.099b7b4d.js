"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[5910],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return k}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),p=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(t),k=r,m=d["".concat(u,".").concat(k)]||d[k]||c[k]||l;return t?a.createElement(m,i(i({ref:n},s),{},{components:t})):a.createElement(m,i({ref:n},s))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3687:function(e,n,t){var a=t(412);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",o=r?"macOS":l?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},5162:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7294),r=t(4334),l="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:t},n)}},4866:function(e,n,t){t.d(n,{Z:function(){return O}});var a=t(3117),r=t(7294),l=t(4334),i=t(2466),o=t(6775),u=t(1980),p=t(7392),s=t(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??c(t);return function(e){const n=(0,p.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function k(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!k({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[u,p]=m({queryString:t,groupId:a}),[c,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,s.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),b=(()=>{const e=u??c;return k({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!k({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),v(e)}),[p,v,l]),tabValues:l}}var b=t(2389),C="tabList__CuJ",f="tabItem_LNqP";function h(e){let{className:n,block:t,selectedValue:o,selectValue:u,tabValues:p}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=s.indexOf(n),a=p[t].value;a!==o&&(c(n),u(a))},k=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},p.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>s.push(e),onKeyDown:k,onClick:d},i,{className:(0,l.Z)("tabs__item",f,null==i?void 0:i.className,{"tabs__item--active":o===n})}),t??n)})))}function N(e){let{lazy:n,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],n){const e=t.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function g(e){const n=v(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",C)},r.createElement(h,(0,a.Z)({},e,n)),r.createElement(N,(0,a.Z)({},e,n)))}function O(e){const n=(0,b.Z)();return r.createElement(g,(0,a.Z)({key:String(n)},e))}},295:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var a=t(3117),r=(t(7294),t(3905)),l=t(4866),i=t(5162),o=t(3687);const u={title:"\u79bb\u7ebf\u8fd0\u884c"},p=void 0,s={unversionedId:"how-to-guides/running-air-gapped",id:"version-1.7/how-to-guides/running-air-gapped",title:"\u79bb\u7ebf\u8fd0\u884c",description:"Rancher Desktop \u53ef\u4ee5\u5728\u79bb\u7ebf\u6a21\u5f0f\u4e0b\u8fd0\u884c\u3002\u672c\u6587\u4ecb\u7ecd\u4e86\u79bb\u7ebf\u8fd0\u884c\u7684\u8981\u6c42\u4ee5\u53ca\u53ef\u80fd\u51fa\u73b0\u7684\u95ee\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7/how-to-guides/running-air-gapped.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/running-air-gapped",permalink:"/zh/1.7/how-to-guides/running-air-gapped",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.7/how-to-guides/running-air-gapped.md",tags:[],version:"1.7",frontMatter:{title:"\u79bb\u7ebf\u8fd0\u884c"},sidebar:"tutorialSidebar",previous:{title:"Increasing Open File Limit",permalink:"/zh/1.7/how-to-guides/increasing-open-file-limit"},next:{title:"\u67b6\u6784",permalink:"/zh/1.7/references/architecture"}},c={},d=[{value:"Windows \u7528\u6237\u987b\u77e5",id:"windows-\u7528\u6237\u987b\u77e5",level:3},{value:"\u7f51\u7edc\u654f\u611f\u533a\u57df",id:"\u7f51\u7edc\u654f\u611f\u533a\u57df",level:3},{value:"\u73b0\u6709 Deployment",id:"\u73b0\u6709-deployment",level:3},{value:"\u51c6\u5907\u79bb\u7ebf\u7cfb\u7edf",id:"\u51c6\u5907\u79bb\u7ebf\u7cfb\u7edf",level:3},{value:"Cache \u76ee\u5f55",id:"cache-\u76ee\u5f55",level:4},{value:"kuberlr \u76ee\u5f55",id:"kuberlr-\u76ee\u5f55",level:4},{value:"\u7248\u672c\u8bf4\u660e",id:"\u7248\u672c\u8bf4\u660e",level:5}],k={toc:d};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rancher Desktop \u53ef\u4ee5\u5728\u79bb\u7ebf\u6a21\u5f0f\u4e0b\u8fd0\u884c\u3002\u672c\u6587\u4ecb\u7ecd\u4e86\u79bb\u7ebf\u8fd0\u884c\u7684\u8981\u6c42\u4ee5\u53ca\u53ef\u80fd\u51fa\u73b0\u7684\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"windows-\u7528\u6237\u987b\u77e5"},"Windows \u7528\u6237\u987b\u77e5"),(0,r.kt)("p",null,"\u672c\u6587\u6863\u7684\u73af\u5883\u53d8\u91cf\u4f7f\u7528 Powershell \u8bed\u6cd5\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f Command shell\uff0c\u770b\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"$env:FOO")," \u73af\u5883\u53d8\u91cf\u7684\u5f15\u7528\u65f6\uff0c\u8bf7\u5c06\u5176\u66ff\u6362\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"%FOO%"),"\u3002"),(0,r.kt)("h3",{id:"\u7f51\u7edc\u654f\u611f\u533a\u57df"},"\u7f51\u7edc\u654f\u611f\u533a\u57df"),(0,r.kt)("p",null,"Rancher Desktop \u5047\u8bbe\u6709\u4e24\u4e2a\u7684\u533a\u57df\u7684\u7f51\u7edc\u53ef\u7528\uff0c\u5e76\u4f1a\u5728\u79bb\u7ebf\u7684\u60c5\u51b5\u4e0b\u8fdb\u884c\u6062\u590d\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06 Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"k3s")," \u955c\u50cf\u62c9\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"k3s")," \u7f13\u5b58\u76ee\u5f55")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kuberlr")," \u4f5c\u4e3a\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u7684\u7248\u672c\u611f\u77e5\u5305\u88c5\u5668\uff0c\u56e0\u6b64\u5ba2\u6237\u7aef\u4e0e Kubernetes Server \u7684\u5dee\u5f02\u4e0d\u4f1a\u8d85\u8fc7\u4e00\u4e2a\u6b21\u8981\u7248\u672c\u3002"))),(0,r.kt)("h3",{id:"\u73b0\u6709-deployment"},"\u73b0\u6709 Deployment"),(0,r.kt)("p",null,"\u5982\u679c Rancher Desktop \u5b89\u88c5\u5728\u6700\u521d\u5c31\u5177\u6709\u7f51\u7edc\u8bbf\u95ee\u6743\u9650\u7684\u4e3b\u673a\u4e0a\uff0c\u5728\u5173\u95ed\u7f51\u7edc\u8fde\u63a5\u540e\uff0cRancher Desktop \u4ecd\u80fd\u5728\u8be5\u4e3b\u673a\u4e0a\u8fd0\u884c\u3002\u4f46\u662f\uff0c\u4e0b\u62c9\u83dc\u5355\u4e2d\u53ef\u7528\u7684 Kubernetes \u7248\u672c\u4f1a\u9650\u5236\u4e3a\u5df2\u4e0b\u8f7d\u5e76\u5b58\u50a8\u5728\u7f13\u5b58\u4e2d\u7684\u7248\u672c\u3002"),(0,r.kt)("p",null,"\u7531\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"kuberlr")," \u5305\u88c5\u5668\uff08Windows \u7528\u6237\u9700\u8981\u4e3a\u6bcf\u4e2a\u53ef\u6267\u884c\u5b9e\u7528\u7a0b\u5e8f\u6587\u4ef6\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},".exe")," \u540e\u7f00\uff09\uff0c\u56e0\u6b64\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u5ba2\u6237\u7aef\u4f1a\u5b58\u5728\u4e00\u4e2a\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u867d\u7136\u6211\u4eec\u7684\u7cfb\u7edf\u5728\u521d\u59cb\u5316\u65f6\u5df2\u7ecf\u8fde\u63a5\u5230\u4e92\u8054\u7f51\uff0c\u4f46\u662f\u540e\u7eed\u4f7f\u7528\u65f6\u4f1a\u8ba9\u4e3b\u673a\u8131\u673a\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u5047\u8bbe ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-desktop")," \u7f13\u5b58\u4e2d\u6709\u4e09\u4e2a\u7248\u672c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"k3s"),"\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"1.24.3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"1.21.14")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"1.19.16"))),(0,r.kt)("p",null,"\u5047\u8bbe\u5728\u8fd9\u4e2a\u7cfb\u7edf\u4e0a\u6211\u4eec\u53ea\u6709\u5728\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"1.24.3")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"1.21.14")," \u65f6\u8fd0\u884c\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),"\u3002\u6362\u8a00\u4e4b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"~/.kuberlr/PLATFORM-ARCH/")," \u76ee\u5f55\uff08Windows \u4e0a\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"$env:HOMEDRIVE%\\$env:HOMEPATH/.kuberlr/windows-amd64"),"\uff09\u53ea\u5305\u542b\u4e24\u4e2a\u6587\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"kubectl1.24.3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"kubectl1.21.14"))),(0,r.kt)("p",null,"\u5982\u679c\u6211\u4eec\u5c06\u7cfb\u7edf\u8131\u673a\uff0c\u5e76\u901a\u8fc7 UI \u5207\u6362\u5230 Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"1.19.16"),"\uff0c\u5219\u7cfb\u7edf\u4f1a\u5728\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u7684\u65f6\u5019\u5931\u8d25\u3002\n\u95ee\u9898\u5728\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"kuberlr")," \u7684\u522b\u540d\uff0c\u5b83\u4f1a\u5c1d\u8bd5\u4e0b\u8f7d ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl 1.19.16")," \u5e76\u5c06\u5b83\u5b89\u88c5\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},".kuberlr")," \u76ee\u5f55\u4e2d\uff0c\u4f46\u5374\u65e0\u6cd5\u8fdb\u884c\u8bbf\u95ee\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6700\u597d\u7684\u65b9\u6cd5\u662f\u9009\u62e9\u7f13\u5b58\u4e2d\u6bcf\u4e2a\u53ef\u7528\u7684 Kubernetes \u7248\u672c\uff0c\u5e76\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl --context rancher-desktop cluster-info")," \u6765\u786e\u4fdd\u5b89\u88c5\u4e86\u9002\u5f53\u7248\u672c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u5ba2\u6237\u7aef\uff0c\u4ee5\u4fbf\u5728\u65ad\u5f00\u8fde\u63a5\u65f6\u80fd\u8fde\u63a5\u7cfb\u7edf\u3002"),(0,r.kt)("p",null,"\u4f60",(0,r.kt)("em",{parentName:"p"},"\u53ef\u4ee5"),"\u624b\u52a8\u5b89\u88c5\u7248\u672c\u5316\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),"\uff0c\u5177\u4f53\u5185\u5bb9\u4f1a\u5728\u4e0b\u4e00\u8282\u4e2d\u4ecb\u7ecd\u3002"),(0,r.kt)("h3",{id:"\u51c6\u5907\u79bb\u7ebf\u7cfb\u7edf"},"\u51c6\u5907\u79bb\u7ebf\u7cfb\u7edf"),(0,r.kt)("p",null,"\u6b64\u5904\u5047\u8bbe\u4f60\u6709\u67d0\u79cd\u79fb\u52a8\u5a92\u4f53\uff0c\u4f60\u53ef\u4ee5\u5c06\u5176\u586b\u5145\u5230\u8054\u7f51\u7cfb\u7edf\u4e0a\uff0c\u7136\u540e\u79fb\u81f3\u79bb\u7ebf\u7cfb\u7edf\u4e2d\u3002"),(0,r.kt)("p",null,"\u8981\u8ba9 Rancher Desktop \u79bb\u7ebf\u8fd0\u884c\uff0c\u4f60\u9700\u8981\u586b\u5145\u4e24\u4e2a\u76ee\u5f55\uff1a"),(0,r.kt)("h4",{id:"cache-\u76ee\u5f55"},"Cache \u76ee\u5f55"),(0,r.kt)("p",null,"\u8981\u586b\u5145\u6e90\u78c1\u76d8\uff08\u6211\u4eec\u5728\u6b64\u5c06\u5176\u79f0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"%SOURCEDISK%"),"\uff0c\u5b9e\u9645\u4e0a\u5b83\u4e5f\u53ef\u80fd\u662f\u67d0\u79cd\u53ef\u79fb\u52a8\u8bbe\u5907\uff0c\u4f8b\u5982 USB \u9a71\u52a8\u5668\uff09\uff0c\u4f60\u9700\u8981\u4ee5\u4e0b\u6587\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"k3s-versions.json"),"\uff1a\u8be5\u6587\u4ef6\u7531 Rancher Desktop \u521b\u5efa\u3002\u5b83\u4ece ",(0,r.kt)("inlineCode",{parentName:"li"},"https://update.k3s.io/v1-release/channels")," \u8bfb\u53d6\u539f\u59cb JSON \u6587\u4ef6\u5e76\u5c06\u5176\u8f6c\u6362\u4e3a\u4e0d\u540c\u7c7b\u578b\u7684 JSON \u6587\u4ef6\u3002\u76ee\u524d\u6ca1\u6709\u5b9e\u7528\u7a0b\u5e8f\u6765\u8fdb\u884c\u8fd9\u79cd\u8f6c\u6362\u3002\u83b7\u53d6\u6b64\u6587\u4ef6\u7684\u6700\u7b80\u5355\u65b9\u6cd5\u662f\u5728\u8fde\u63a5\u7684\u7cfb\u7edf\u4e0a\u8fd0\u884c Rancher Desktop \u5e76\u4fdd\u5b58 ",(0,r.kt)("inlineCode",{parentName:"li"},"CACHE/k3s-versions.json")," \u6587\u4ef6\uff08\u8bf7\u53c2\u9605\u4e0b\u65b9\u4e0d\u540c\u7cfb\u7edf\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"CACHE")," \u4f4d\u7f6e\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"Kubernetes K3s \u955c\u50cf\u7684 Tar \u5305\u3002\u5b83\u4eec\u5217\u5728 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/k3s-io%E2%80%8B%E2%80%8B/k3s/releases%E3%80%82%E5%A6%82%E6%9E%9C%E4%BD%A0%E4%BD%BF%E7%94%A8%E7%9A%84%E6%98%AF"},"https://github.com/k3s-io\u200b\u200b/k3s/releases\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f")," ",(0,r.kt)("inlineCode",{parentName:"li"},"k3s")," v1.26.1 \u53ca\u66f4\u9ad8\u7248\u672c\uff0c\u4f60\u9700\u8981\u4e3a AMD/Intel \u4e3b\u673a\u4e0b\u8f7d ",(0,r.kt)("inlineCode",{parentName:"li"},"k3s-airgap-images-amd64.tar"),"\uff0c\u4e3a M1 \u4e3b\u673a\u4e0b\u8f7d ",(0,r.kt)("inlineCode",{parentName:"li"},"k3s-airgap-images-arm64.tar"),"\uff0c\u6216\u4e0b\u8f7d\u76f8\u5e94\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"*.tar.zst")," \u538b\u7f29\u5305\u3002\u6700\u540e\uff0c\u4f60\u9700\u8981\u4e0b\u8f7d\u6240\u9009\u7248\u672c\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"k3s")," \u53ef\u6267\u884c\u6587\u4ef6\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u547d\u4ee4\u5c06\u8ba9\u4f60\u79bb\u7ebf\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528 K3s v1.24.3 build 1\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd .../CACHE\nmkdir v1.24.3+k3s1\ncd v1.24.3+k3s1\nwget https://github.com/k3s-io/k3s/releases/download/v1.24.3%2Bk3s1/k3s-airgap-images-amd64.tar\nwget https://github.com/k3s-io/k3s/releases/download/v1.24.3%2Bk3s1/sha256sum-amd64.txt\nwget https://github.com/k3s-io/k3s/releases/download/v1.24.3%2Bk3s1/k3s\n")),(0,r.kt)(l.Z,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,"\u5728 Windows \u4e0a\uff0c\u7f13\u5b58\u76ee\u5f55\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"$env:HOMEDRIVE%\\$env:HOMEPATH\\AppData\\Local\\rancher-desktop\\cache\\k3s"),"\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u8be5\u76ee\u5f55\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir -Force $env:HOMEDRIVE%\\$env:HOMEPATH\\AppData\\Local\\rancher-desktop\\cache\\k3s\n")),(0,r.kt)("p",null,"\u5047\u8bbe\u4f60\u5df2\u6709\u67d0\u4e9b\u6e90\u5a92\u4f53\uff0c\u4f60\u8fd8\u9700\u8981\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u9884\u586b\u5145\u7f13\u5b58\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"copy-item -Force $env:SOURCEDISK\\k3s-versions.json $env:HOMEDRIVE%\\$env:HOMEPATH\\AppData\\Local\\rancher-desktop\\cache\\\ncopy-item -Recurse -Force $env:SOURCEDISK\\v<MAJOR>.<MINOR>.<PATCH>+k3s<BUILD> $env:HOMEDRIVE%\\$env:HOMEPATH\\AppData\\Local\\rancher-desktop\\cache\\k3s\\\n"))),(0,r.kt)(i.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,"\u5728 macOS \u4e0a\uff0c\u7f13\u5b58\u76ee\u5f55\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/Library/Caches/rancher-desktop"),"\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u586b\u5145\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CACHEDIR=$HOME/Library/Caches/rancher-desktop\nmkdir -p $CACHEDIR/k3s\ncp $SOURCEDISK/k3s-versions.json $CACHEDIR/\ncp -r $SOURCEDISK/v<MAJOR>.<MINOR>.<PATCH>+k3s<BUILD> $CACHEDIR/k3s/\n"))),(0,r.kt)(i.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,"\u5728 Linux \u4e0a\uff0c\u7f13\u5b58\u76ee\u5f55\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.cache/rancher-desktop"),"\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u586b\u5145\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CACHEDIR=$HOME/.cache/rancher-desktop\nmkdir -p $CACHEDIR/k3s\ncp $SOURCEDISK/k3s-versions.json $CACHEDIR/\ncp -r $SOURCEDISK/v<MAJOR>.<MINOR>.<PATCH>+k3s<BUILD> $CACHEDIR/k3s/\n")))),(0,r.kt)("h4",{id:"kuberlr-\u76ee\u5f55"},"kuberlr \u76ee\u5f55"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u76ee\u5f55\u7684\u4f4d\u7f6e\u66f4\u76f4\u63a5\uff0c\u5728\u6240\u6709\u5e73\u53f0\u4e0a\uff0c\u8be5\u76ee\u5f55\u90fd\u4f4d\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"HOME/.kuberlr/PLATFORM-ARCH"),"\uff0c\u5176\u4e2d\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HOME")," \u662f\u4e3b\u76ee\u5f55\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u5728 Windows \u4e0a\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"$env:HOMEDRIVE%\\$env:HOMEPATH"),"\uff0c\u5728 macOS \u548c Linux \u4e0a\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"~")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PLATFORM")," \u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"windows"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"linux")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"darwin"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ARCH")," \u5728 M1 \u4e3b\u673a\u4e0a\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"aarch64"),"\uff0c\u5728\u5176\u5b83\u4e3b\u673a\u4e0a\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"amd64"),"\u3002")),(0,r.kt)("p",null,"\u8981\u8fdb\u884c\u586b\u5145\uff0c\u8bf7\u786e\u5b9a\u4f60\u8981\u4f7f\u7528\u7684 Kubernetes \u7248\u672c\uff0c\u5e76\u8054\u7f51\u4e0b\u8f7d\u9002\u5f53\u7684\u53ef\u6267\u884c\u6587\u4ef6\u3002\u5b83\u4eec\u5c06\u4f4d\u4e8e\uff1a"),(0,r.kt)(l.Z,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"https://dl.k8s.io/VERSION/bin/PLATFORM/CPU/kubectl.exe"))),(0,r.kt)(i.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"https://dl.k8s.io/VERSION/bin/PLATFORM/CPU/kubectl"))),(0,r.kt)(i.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"https://dl.k8s.io/VERSION/bin/PLATFORM/CPU/kubectl")))),(0,r.kt)("p",null,"\u5176\u4e2d\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"VERSION")," \u7684\u683c\u5f0f\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"vMAJOR.MINOR.PATCH"),"\uff08\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"v1.22.1"),"\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PLATFORM")," \u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"darwin"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"linux")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"windows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CPU")," \u5728 M1 \u4e3b\u673a\u4e0a\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"arm64"),"\uff0c\u5728\u5176\u4ed6\u4e3b\u673a\u4e0a\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"amd64"))),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u8981\u83b7\u53d6\u4f7f\u7528 Kubernetes v1.22 \u4e14\u7528\u4e8e Windows \u7684 kubectl\uff0c\u6b64 Windows \u547d\u4ee4 shell\uff08\u4e0d\u662f PowerShell\uff09\u547d\u4ee4\u4f1a\u5c06\u5176\u653e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"SOURCEDISK")," \u4e0a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wget -O %SOURCEDISK/kubectl1.22.1.exe https://dl.k8s.io/v1.22.1/bin/windows/amd64/kubectl.exe\n")),(0,r.kt)("h5",{id:"\u7248\u672c\u8bf4\u660e"},"\u7248\u672c\u8bf4\u660e"),(0,r.kt)("p",null,"Kubectl \u5ba2\u6237\u7aef\u4fdd\u8bc1\u4f7f\u7528\u4e3b\u8981\u7248\u672c\u76f8\u540c\u7684 Server\uff0c\u4e14\u5b83\u4eec\u6700\u591a\u53ea\u76f8\u5dee\u4e00\u4e2a\u6b21\u8981\u7248\u672c\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u7684\u7ec4\u7ec7\u4f7f\u7528\u7684 Kubernetes \u7248\u672c\u662f v1.21.x\u3001v1.22.x \u548c v1.23.x\uff0c\u5bf9\u4e8e\u4efb\u4f55 ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," \u8865\u4e01\u7248\u672c\uff0c\u4f60\u53ea\u9700\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},".kuberlr")," \u76ee\u5f55\u4e2d\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl1.22.x")," \u5373\u53ef\u3002\u4f46\u662f\uff0c\u5982\u679c\u4f60\u590d\u5236\u4e00\u4e2a Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.24.x")," \u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"CACHE")," \u76ee\u5f55\uff0c\u4f60\u9700\u8981\u786e\u4fdd ",(0,r.kt)("inlineCode",{parentName:"p"},".kuberlr")," \u76ee\u5f55\u4e2d\u4e5f\u6709\u4e00\u4e2a\u517c\u5bb9\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),"\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"v1.23.x"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"v1.24.x")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.25.x")," \u4e2d\u7684\u5176\u4e2d\u4e00\u4e2a\u5373\u53ef\uff09\u3002"))}m.isMDXComponent=!0}}]);