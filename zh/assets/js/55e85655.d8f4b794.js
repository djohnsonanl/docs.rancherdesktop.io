"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[9239],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,f=d["".concat(o,".").concat(b)]||d[b]||p[b]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3687:function(e,t,n){var a=n(412);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",u=r?"macOS":l?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:u,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(4334),l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(3117),r=n(7294),l=n(4334),i=n(2389),u=n(7392),o=n(7094),s=n(2466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:b,groupId:f,className:m}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=b??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,u.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==h&&!k.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,o.U)(),[O,T]=(0,r.useState)(h),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=f){const e=y[f];null!=e&&e!==O&&k.some((t=>t.value===e))&&T(e)}const N=e=>{const t=e.currentTarget,n=E.indexOf(t),a=k[n].value;a!==O&&(x(t),T(a),null!=f&&w(f,String(a)))},K=e=>{var t;let n=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},m)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:K,onClick:N},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":O===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function b(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},4731:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var a=n(3117),r=(n(7294),n(3905)),l=n(5488),i=n(5162),u=n(3687);const o={sidebar_label:"Kubernetes",title:"Kubernetes"},s=void 0,c={unversionedId:"ui/preferences/kubernetes",id:"version-latest/ui/preferences/kubernetes",title:"Kubernetes",description:"Enable Kubernetes",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-latest/ui/preferences/kubernetes.md",sourceDirName:"ui/preferences",slug:"/ui/preferences/kubernetes",permalink:"/zh/ui/preferences/kubernetes",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/ui/preferences/kubernetes.md",tags:[],version:"latest",frontMatter:{sidebar_label:"Kubernetes",title:"Kubernetes"},sidebar:"tutorialSidebar",previous:{title:"\u5bb9\u5668\u5f15\u64ce",permalink:"/zh/ui/preferences/container-engine"},next:{title:"\u4f7f\u7528\u955c\u50cf",permalink:"/zh/tutorials/working-with-images"}},p={},d=[{value:"Enable Kubernetes",id:"enable-kubernetes",level:3},{value:"Kubernetes Version",id:"kubernetes-version",level:3},{value:"Kubernetes Port",id:"kubernetes-port",level:3},{value:"Enable Traefik",id:"enable-traefik",level:3}],b={toc:d};function f(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"enable-kubernetes"},"Enable Kubernetes"),(0,r.kt)("p",null,"\u6b64\u9009\u9879\u5141\u8bb8\u4f60\u542f\u7528\u6216\u7981\u7528 Kubernetes\u3002\u7981\u7528 Kubernetes \u540e\uff0c\u4f60\u53ef\u4ee5\u53ea\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"containerd")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"dockerd")," \u6765\u51cf\u5c11\u8d44\u6e90\u6d88\u8017\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cKubernetes \u662f\u542f\u7528\u7684\u3002"),(0,r.kt)("p",null,"\u8981\u542f\u7528/\u7981\u7528 Kubernetes\uff0c\u53ea\u9700\u9009\u4e2d/\u53d6\u6d88\u9009\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"Enable Kubernetes")," \u590d\u9009\u6846\u3002\u542f\u7528/\u7981\u7528 Kubernetes \u65f6\uff0c\u8be5\u5e94\u7528\u7a0b\u5e8f\u5c06\u91cd\u65b0\u542f\u52a8\u3002\u7981\u7528 Kubernetes \u4e0d\u4f1a\u5220\u9664\u73b0\u6709\u8d44\u6e90\uff0c\u91cd\u65b0\u542f\u7528 Kubernetes \u65f6\uff0c\u4f60\u53ef\u4ee5\u518d\u6b21\u4f7f\u7528\u8fd9\u4e9b\u8d44\u6e90\u3002"),(0,r.kt)("h3",{id:"kubernetes-version"},"Kubernetes Version"),(0,r.kt)("p",null,"\u8be5\u9009\u9879\u663e\u793a\u4e86 Rancher Desktop \u5b9e\u4f8b\u53ef\u4ee5\u4f7f\u7528\u7684 Kubernetes \u7248\u672c\u5217\u8868\u3002"),(0,r.kt)("p",null,"\u5347\u7ea7\u65f6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f1a\u8fdb\u884c\u68c0\u67e5\uff0c\u770b\u76ee\u6807 Kubernetes \u7248\u672c\u662f\u5426\u53ef\u4ee5\u5728\u672c\u5730\u4f7f\u7528\u3002\u5982\u679c\u6ca1\u6709\uff0c\u5b83\u4f1a\u4e0b\u8f7d\u5bf9\u5e94\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4fdd\u7559\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4fdd\u7559\u955c\u50cf\u3002")),(0,r.kt)("p",null,"\u964d\u7ea7\u65f6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u79fb\u9664\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4fdd\u7559\u955c\u50cf\u3002")),(0,r.kt)("p",null,"\u8981\u5207\u6362\u7248\u672c\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Kubernetes version")," \u4e0b\u62c9\u83dc\u5355\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u8981\u8f6c\u6362\u7684\u7248\u672c\u3002")),(0,r.kt)("h3",{id:"kubernetes-port"},"Kubernetes Port"),(0,r.kt)("p",null,"\u8bbe\u7f6e Kubernetes \u66b4\u9732\u7684\u7aef\u53e3\u3002\u5982\u679c\u6709\u591a\u4e2a K3s \u5b9e\u4f8b\u6b63\u5728\u8fd0\u884c\uff0c\u4f7f\u7528\u6b64\u8bbe\u7f6e\u53ef\u4ee5\u907f\u514d\u7aef\u53e3\u51b2\u7a81\u3002"),(0,r.kt)("h3",{id:"enable-traefik"},"Enable Traefik"),(0,r.kt)("p",null,"\u6b64\u9009\u9879\u5141\u8bb8\u4f60\u542f\u7528\u6216\u7981\u7528 Traefik\u3002\u7981\u7528 Traefik \u540e\uff0c\u4f60\u53ef\u4ee5\u91ca\u653e\u7aef\u53e3 80 \u548c 443\uff0c\u4ee5\u4fbf\u5c06\u5176\u7528\u4e8e\u5907\u7528 ingress \u914d\u7f6e\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cTraefik \u662f\u542f\u7528\u7684\u3002"),(0,r.kt)("p",null,"\u7981\u7528 Traefik \u4e0d\u4f1a\u5220\u9664\u73b0\u6709\u8d44\u6e90\u3002"),(0,r.kt)(l.Z,{groupId:"os",defaultValue:u.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4304).Z,width:"764",height:"510"}))),(0,r.kt)(i.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7277).Z,width:"1760",height:"1248"}))),(0,r.kt)(i.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(658).Z,width:"768",height:"538"})))))}f.isMDXComponent=!0},658:function(e,t,n){t.Z=n.p+"assets/images/Linux_kubernetes-584b03d1312f07c6ce56f5971c07d77b.png"},4304:function(e,t,n){t.Z=n.p+"assets/images/Windows_kubernetes-7ae196a3965a1831e5bbc5d3425623c8.png"},7277:function(e,t,n){t.Z=n.p+"assets/images/macOS_kubernetes-f4cf66e6ae025e8be8f642ae7be51afe.png"}}]);