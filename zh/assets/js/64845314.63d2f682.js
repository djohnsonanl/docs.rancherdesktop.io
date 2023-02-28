"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[4304],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3687:function(e,t,a){var n=a(412);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",o=r?"macOS":l?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},5162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(4334),l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(3117),r=a(7294),l=a(4334),i=a(2389),o=a(7392),u=a(7094),s=a(2466),c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:a,block:i,defaultValue:m,values:d,groupId:g,className:v}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,o.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,u.U)(),[w,O]=(0,r.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=g){const e=y[g];null!=e&&e!==w&&b.some((t=>t.value===e))&&O(e)}const S=e=>{const t=e.currentTarget,a=T.indexOf(t),n=b[a].value;n!==w&&(x(t),O(n),null!=g&&N(g,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},v)},b.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:I,onClick:S},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,i.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},5191:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var n=a(3117),r=(a(7294),a(3905)),l=a(5488),i=a(5162),o=a(3687);const u={sidebar_label:"\u955c\u50cf",title:"\u955c\u50cf"},s=void 0,c={unversionedId:"ui/images",id:"version-1.7/ui/images",title:"\u955c\u50cf",description:"Images \u9009\u9879\u5361\u5141\u8bb8\u4f60\u7ba1\u7406\u865a\u62df\u673a\u4e0a\u7684\u955c\u50cf\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7/ui/images.md",sourceDirName:"ui",slug:"/ui/images",permalink:"/zh/1.7/ui/images",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.7/ui/images.md",tags:[],version:"1.7",frontMatter:{sidebar_label:"\u955c\u50cf",title:"\u955c\u50cf"},sidebar:"tutorialSidebar",previous:{title:"\u7aef\u53e3\u8f6c\u53d1",permalink:"/zh/1.7/ui/port-forwarding"},next:{title:"\u6545\u969c\u6392\u9664",permalink:"/zh/1.7/ui/troubleshooting"}},p={},m=[{value:"Scanning Images",id:"scanning-images",level:3},{value:"Adding Images",id:"adding-images",level:3},{value:"Pulling Images",id:"pulling-images",level:4},{value:"Building Images",id:"building-images",level:4}],d={toc:m};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Images")," \u9009\u9879\u5361\u5141\u8bb8\u4f60\u7ba1\u7406\u865a\u62df\u673a\u4e0a\u7684\u955c\u50cf\u3002"),(0,r.kt)("p",null,"\u8981\u6539\u7528 nerdctl \u7ba1\u7406\u955c\u50cf\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"../tutorials/working-with-images"},"\u955c\u50cf"),"\u3002"),(0,r.kt)(l.Z,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/ui-main/Windows_Images.png",alt:null}))),(0,r.kt)(i.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/ui-main/macOS_Images.png",alt:null}))),(0,r.kt)(i.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/ui-main/Linux_Images.png",alt:null})))),(0,r.kt)("h3",{id:"scanning-images"},"Scanning Images"),(0,r.kt)("p",null,"\u6b64\u529f\u80fd\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquasecurity/trivy"},"Trivy")," \u6765\u626b\u63cf\u4f60\u7684\u955c\u50cf\uff0c\u4ece\u800c\u67e5\u627e\u6f0f\u6d1e\u548c\u914d\u7f6e\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u8981\u626b\u63cf\u955c\u50cf\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4ece\u955c\u50cf\u5217\u8868\u4e2d\uff0c\u627e\u5230\u8981\u626b\u63cf\u7684\u955c\u50cf\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Scan"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5c06\u663e\u793a\u6309\u4e25\u91cd\u7a0b\u5ea6\u6392\u5e8f\u7684\u6f0f\u6d1e\u6458\u8981\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},">")," \u67e5\u770b\u200b\u200b\u6bcf\u4e2a\u6f0f\u6d1e\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5176\u4e2d\u5305\u62ec\u6f0f\u6d1e\u8be6\u60c5\u7684\u94fe\u63a5\u3002")),(0,r.kt)("h3",{id:"adding-images"},"Adding Images"),(0,r.kt)("h4",{id:"pulling-images"},"Pulling Images"),(0,r.kt)("p",null,"\u6b64\u9009\u9879\u53ef\u4ee5\u8ba9\u4f60\u5c06\u955c\u50cf\u4ece\u955c\u50cf\u4ed3\u5e93\u62c9\u53d6\u5230\u4f60\u7684\u865a\u62df\u673a\u4e2d\u3002"),(0,r.kt)("p",null,"\u8981\u62c9\u53d6\u955c\u50cf\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb\u53f3\u4e0a\u89d2\u7684 ",(0,r.kt)("strong",{parentName:"li"},"+")," \u6309\u94ae\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Pull")," \u9009\u9879\u5361\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f93\u5165\u8981\u62c9\u53d6\u7684\u955c\u50cf\u7684\u540d\u79f0\u3002",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u955c\u50cf\u662f\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub")," \u4e2d\u63d0\u53d6\u7684\uff08\u683c\u5f0f\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"repo/image[:tag]"),"\uff09\u3002\u8981\u4ece\u5176\u4ed6\u955c\u50cf\u4ed3\u5e93\u4e2d\u62c9\u53d6\uff0c\u8bf7\u5305\u542b\u4e3b\u673a\u540d ",(0,r.kt)("inlineCode",{parentName:"p"},"registry.example.com/repo/image[:tag]"),"\u3002"))),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Pull"),"\u3002")),(0,r.kt)("h4",{id:"building-images"},"Building Images"),(0,r.kt)("p",null,"\u4f7f\u7528\u6b64\u9009\u9879\u6784\u5efa\u955c\u50cf\u5e76\u5c06\u5176\u6dfb\u52a0\u5230\u4f60\u7684\u865a\u62df\u673a\u3002"),(0,r.kt)("p",null,"\u8981\u6784\u5efa\u955c\u50cf\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb\u53f3\u4e0a\u89d2\u7684 ",(0,r.kt)("strong",{parentName:"li"},"+")," \u6309\u94ae\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Build")," \u9009\u9879\u5361\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f93\u5165\u6784\u5efa\u7684\u955c\u50cf\u7684\u540d\u79f0\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"repo/image"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"repo/image:tag"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"registry.example.com/repo/image")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"registry.example.com/repo/image:tag"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Build"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u6587\u4ef6\u6d4f\u89c8\u5668\u4e2d\uff0c\u9009\u62e9\u8981\u7528\u6765\u6784\u5efa\u955c\u50cf\u7684 Dockerfile\u3002")))}g.isMDXComponent=!0}}]);