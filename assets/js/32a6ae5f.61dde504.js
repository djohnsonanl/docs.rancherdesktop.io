"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[370],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=i,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3687:function(e,t,a){var n=a(412);const i=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=i?"ios":"android",o=i?"macOS":r?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},5162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),i=a(4334),r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return T}});var n=a(3117),i=a(7294),r=a(4334),l=a(2466),o=a(6775),s=a(1980),u=a(7392),c=a(12);function d(e){return function(e){return i.Children.map(e,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}function p(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=p(e),[l,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,u]=h({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,i.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),v=(()=>{const e=s??d;return m({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var v=a(2389),b="tabList__CuJ",k="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==o&&(d(t),s(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,r.Z)("tabs__item",k,null==l?void 0:l.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",b)},i.createElement(g,(0,n.Z)({},e,t)),i.createElement(y,(0,n.Z)({},e,t)))}function T(e){const t=(0,v.Z)();return i.createElement(w,(0,n.Z)({key:String(t)},e))}},2024:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(3117),i=(a(7294),a(3905)),r=a(4866),l=a(5162),o=a(3687);const s={sidebar_label:"Application",title:"Application"},u=void 0,c={unversionedId:"ui/preferences/application",id:"ui/preferences/application",title:"Application",description:"Automatic Updates",source:"@site/docs/ui/preferences/application.md",sourceDirName:"ui/preferences",slug:"/ui/preferences/application",permalink:"/next/ui/preferences/application",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/ui/preferences/application.md",tags:[],version:"current",frontMatter:{sidebar_label:"Application",title:"Application"},sidebar:"tutorialSidebar",previous:{title:"Diagnostics",permalink:"/next/ui/diagnostics"},next:{title:"Virtual Machine",permalink:"/next/ui/preferences/virtual-machine"}},d={},p=[{value:"Automatic Updates",id:"automatic-updates",level:3},{value:"Statistics",id:"statistics",level:3},{value:"Behavior",id:"behavior",level:3},{value:"Administrative Access",id:"administrative-access",level:4},{value:"Automatic Updates",id:"automatic-updates-1",level:4},{value:"Statistics",id:"statistics-1",level:4},{value:"Environment",id:"environment",level:3},{value:"Configure PATH",id:"configure-path",level:4},{value:"Behavior",id:"behavior-1",level:3},{value:"Administrative Access",id:"administrative-access-1",level:4},{value:"Automatic Updates",id:"automatic-updates-2",level:4},{value:"Statistics",id:"statistics-2",level:4},{value:"Environment",id:"environment-1",level:3},{value:"Configure PATH",id:"configure-path-1",level:4}],m={toc:p};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Windows",mdxType:"TabItem"},(0,i.kt)("h3",{id:"automatic-updates"},"Automatic Updates"),(0,i.kt)("p",null,"When an update is available, users are provided a notification and the release notes for the upgrade target. This happens whether automatic updates are enabled or not. If this option is enabled, the update is downloaded and then installed the next time Rancher Desktop is started."),(0,i.kt)("h3",{id:"statistics"},"Statistics"),(0,i.kt)("p",null,"This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/Windows_application.png",alt:null}))),(0,i.kt)(l.Z,{value:"macOS",mdxType:"TabItem"},(0,i.kt)("h3",{id:"behavior"},"Behavior"),(0,i.kt)("h4",{id:"administrative-access"},"Administrative Access"),(0,i.kt)("p",null,"Allows Rancher Desktop to acquire administrative access (sudo access) when starting for some operations. This allows for enhanced functionality, including bridged networking and default docker socket support. Changes will only be applied next time Rancher Desktop starts."),(0,i.kt)("h4",{id:"automatic-updates-1"},"Automatic Updates"),(0,i.kt)("p",null,"When an update is available, users are provided a notification and the release notes for the upgrade target. This happens whether automatic updates are enabled or not. If this option is enabled, the update is downloaded and then installed the next time Rancher Desktop is started."),(0,i.kt)("h4",{id:"statistics-1"},"Statistics"),(0,i.kt)("p",null,"This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/macOS_application_tabBehavior.png",alt:null})),(0,i.kt)("h3",{id:"environment"},"Environment"),(0,i.kt)("h4",{id:"configure-path"},"Configure PATH"),(0,i.kt)("p",null,"A Rancher Desktop installation comes with command-line utilities that are used to interface with its various features. Some examples of these utilities are ",(0,i.kt)("inlineCode",{parentName:"p"},"docker"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nerdctl"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"helm"),". These utilities are located in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.rd/bin")," - you may see which utilities are included in your installation by running ",(0,i.kt)("inlineCode",{parentName:"p"},"ls ~/.rd/bin"),"."),(0,i.kt)("p",null,"In order to use the utilities, ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.rd/bin")," must be in the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," variable in your shell."),(0,i.kt)("p",null,"There are two options for doing this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Automatic"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")," management will add ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," to your ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")," by modifying your shell .rc files for you."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Manual"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")," management does not change anything - in this mode, you must add ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," to your ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")," yourself.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/macOS_application_tabEnvironment.png",alt:null}))),(0,i.kt)(l.Z,{value:"Linux",mdxType:"TabItem"},(0,i.kt)("h3",{id:"behavior-1"},"Behavior"),(0,i.kt)("h4",{id:"administrative-access-1"},"Administrative Access"),(0,i.kt)("p",null,"Allows Rancher Desktop to acquire administrative access (sudo access) when starting for some operations. This allows for enhanced functionality, including bridged networking and default docker socket support. Changes will only be applied next time Rancher Desktop starts."),(0,i.kt)("h4",{id:"automatic-updates-2"},"Automatic Updates"),(0,i.kt)("p",null,"When an update is available, users are provided a notification and the release notes for the upgrade target. This happens whether automatic updates are enabled or not. If this option is enabled, the update is downloaded and then installed the next time Rancher Desktop is started."),(0,i.kt)("h4",{id:"statistics-2"},"Statistics"),(0,i.kt)("p",null,"This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/Linux_application_tabBehavior.png",alt:null})),(0,i.kt)("h3",{id:"environment-1"},"Environment"),(0,i.kt)("h4",{id:"configure-path-1"},"Configure PATH"),(0,i.kt)("p",null,"A Rancher Desktop installation comes with command-line utilities that are used to interface with its various features. Some examples of these utilities are ",(0,i.kt)("inlineCode",{parentName:"p"},"docker"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nerdctl"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"helm"),". These utilities are located in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.rd/bin")," - you may see which utilities are included in your installation by running ",(0,i.kt)("inlineCode",{parentName:"p"},"ls ~/.rd/bin"),"."),(0,i.kt)("p",null,"In order to use the utilities, ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.rd/bin")," must be in the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," variable in your shell."),(0,i.kt)("p",null,"There are two options for doing this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Automatic"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")," management will add ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," to your ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")," by modifying your shell .rc files for you."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Manual"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")," management does not change anything - in this mode, you must add ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," to your ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")," yourself.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/Linux_application_tabEnvironment.png",alt:null})))))}h.isMDXComponent=!0}}]);