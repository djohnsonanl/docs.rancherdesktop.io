"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[4175],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3687:function(e,t,n){var a=n(412);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",l=r?"macOS":i?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(4334),i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return O}});var a=n(3117),r=n(7294),i=n(4334),o=n(2466),l=n(6775),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=f({queryString:n,groupId:a}),[p,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),b=(()=>{const e=s??p;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,i]),tabValues:i}}var b=n(2389),h="tabList__CuJ",g="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",g,null==o?void 0:o.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=v(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",h)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function O(e){const t=(0,b.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},7543:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905)),i=n(4866),o=n(5162);n(3687);const l={title:"Increasing Open File Limit"},s=void 0,u={unversionedId:"how-to-guides/increasing-open-file-limit",id:"how-to-guides/increasing-open-file-limit",title:"Increasing Open File Limit",description:"You may wish to increase the open file limit as Rancher Desktop's default ulimit setting for pods may be too low, depending on your use case. This guide provides steps for increasing the open file limit using provisioning scripts alongside Rancher Desktop's internal processes.",source:"@site/docs/how-to-guides/increasing-open-file-limit.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/increasing-open-file-limit",permalink:"/next/how-to-guides/increasing-open-file-limit",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/how-to-guides/increasing-open-file-limit.md",tags:[],version:"current",frontMatter:{title:"Increasing Open File Limit"},sidebar:"tutorialSidebar",previous:{title:"Provisioning Scripts",permalink:"/next/how-to-guides/provisioning-scripts"},next:{title:"Running When Offline",permalink:"/next/how-to-guides/running-air-gapped"}},c={},p=[{value:"macOS &amp; Linux Steps",id:"macos--linux-steps",level:2},{value:"Windows Steps",id:"windows-steps",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You may wish to increase the open file limit as Rancher Desktop's default ",(0,r.kt)("inlineCode",{parentName:"p"},"ulimit")," setting for pods may be too low, depending on your use case. This guide provides steps for increasing the open file limit using provisioning scripts alongside Rancher Desktop's internal processes."),(0,r.kt)("h2",{id:"macos--linux-steps"},"macOS & Linux Steps"),(0,r.kt)("p",null,"First, use lima override.yaml to write the provisioning scripts."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create ",(0,r.kt)("inlineCode",{parentName:"li"},"override.yaml")," file at below path")),(0,r.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"~/Library/Application Support/rancher-desktop/lima/_config/override.yaml\n"))),(0,r.kt)(o.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"~/.local/share/rancher-desktop/lima/_config/override.yaml\n")))),(0,r.kt)("p",null,"You can then use the script below to increase the ",(0,r.kt)("inlineCode",{parentName:"p"},"ulimit")," for containers inside your created ",(0,r.kt)("inlineCode",{parentName:"p"},"override.yaml")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"provision:\n- mode: system\n  script: |\n    #!/bin/sh\n    cat <<'EOF' > /etc/security/limits.d/rancher-desktop.conf\n    * soft     nofile         82920\n    * hard     nofile         82920\n    EOF\n")),(0,r.kt)("p",null,"If using the Elastic platform, please use the script below to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"vm.max_map_count")," parameter as well."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"provision:\n- mode: system\n  script: |\n    #!/bin/sh\n    cat <<'EOF' > /etc/security/limits.d/rancher-desktop.conf\n    * soft     nofile         82920\n    * hard     nofile         82920\n    sysctl -w vm.max_map_count=262144\n    EOF\n")),(0,r.kt)("p",null,"Lastly, please stop and restart Rancher Desktop in order for the updated limits to take effect."),(0,r.kt)("h2",{id:"windows-steps"},"Windows Steps"),(0,r.kt)("p",null,"First, be sure that you have run Rancher Desktop at least once in order for the configurations to initialize."),(0,r.kt)("p",null,"You can then create a provisioning script, say ",(0,r.kt)("inlineCode",{parentName:"p"},"map_count.start"),", at ",(0,r.kt)("inlineCode",{parentName:"p"},"%AppData%\\rancher-desktop\\provisioning")," with the below code to update the open file limit by increasing the ",(0,r.kt)("inlineCode",{parentName:"p"},"max_map_count")," parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#!/bin/sh\n\nsysctl -w vm.max_map_count=262144\n")),(0,r.kt)("p",null,"Lastly, please stop and restart Rancher Desktop for these changes to take effect."))}m.isMDXComponent=!0}}]);