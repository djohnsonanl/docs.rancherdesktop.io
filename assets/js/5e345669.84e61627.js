"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[6390],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(4334),o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(3117),r=n(7294),o=n(4334),l=n(2466),i=n(6775),s=n(1980),u=n(7392),c=n(12);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:n,groupId:a}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=s??m;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var h=n(2389),k="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(m(t),s(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:p},l,{className:(0,o.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function T(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return r.createElement(T,(0,a.Z)({key:String(t)},e))}},2322:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var a=n(3117),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const i={title:"Transfer Container Images"},s=void 0,u={unversionedId:"how-to-guides/transfer-container-images",id:"version-latest/how-to-guides/transfer-container-images",title:"Transfer Container Images",description:"Rancher Desktop provides dockerd and containerd as container engine options to manage containers. There are occasions when you might want to transfer the images from one container engine environment to the other. Or you may have migrated to Rancher Desktop from a different container management application and might want to bring the local images from the previous application environment to the Rancher Desktop environment.  This guide provides steps to transfer images using the save and load commands.",source:"@site/versioned_docs/version-latest/how-to-guides/transfer-container-images.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/transfer-container-images",permalink:"/how-to-guides/transfer-container-images",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/how-to-guides/transfer-container-images.md",tags:[],version:"latest",frontMatter:{title:"Transfer Container Images"},sidebar:"tutorialSidebar",previous:{title:"Hello World Example",permalink:"/how-to-guides/hello-world-example"},next:{title:"Create a Multi-Node Cluster with k3d",permalink:"/how-to-guides/create-multi-node-cluster"}},c={},m=[{value:"Steps",id:"steps",level:3}],p={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rancher Desktop provides ",(0,r.kt)("inlineCode",{parentName:"p"},"dockerd")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"containerd")," as container engine options to manage containers. There are occasions when you might want to transfer the images from one container engine environment to the other. Or you may have migrated to Rancher Desktop from a different container management application and might want to bring the local images from the previous application environment to the Rancher Desktop environment.  This guide provides steps to transfer images using the ",(0,r.kt)("inlineCode",{parentName:"p"},"save")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," commands."),(0,r.kt)("h3",{id:"steps"},"Steps"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Save image(s) from the source environment to a tar archive.")),(0,r.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Save a single image")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nerdctl save -o local-image.tar image:tag\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Save multiple images")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nerdctl save -o local-images.tar image1:tag1 image2:tag2\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Save all images in a namespace")),(0,r.kt)("p",null,"Below two commands use ",(0,r.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq")," for JSON parsing. The long command performs the below steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"nerdctl -n k8s.io image ls")," sub command gets the list of all images present in the ",(0,r.kt)("inlineCode",{parentName:"li"},"k8s.io")," namespace, hence doesn't include images from any other namespace, ",(0,r.kt)("inlineCode",{parentName:"li"},"default")," for instance."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"jq")," sub command filters and formats the images list from the previous step.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},'select(.Repository!=\\"<none>\\")')," part of the command skips those images with repository having a value of ",(0,r.kt)("inlineCode",{parentName:"li"},"<none>"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},'if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end\')')," part of the command formats the name of the images to be just the ",(0,r.kt)("inlineCode",{parentName:"li"},"<Repository>")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"<Repository>:<Tag>")," depending on whether a image tag has a value of ",(0,r.kt)("inlineCode",{parentName:"li"},"<none>")," or not."))),(0,r.kt)("li",{parentName:"ul"},"Finally the ",(0,r.kt)("inlineCode",{parentName:"li"},"nerdctl -n k8s.io save -o all-local-images-in-namespace.tar")," part of the command saves the filtered and formatted images list from the previous two steps into a tar file. ")),(0,r.kt)(o.Z,{groupId:"shell",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Bash",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'nerdctl -n k8s.io save -o all-local-images-in-namespace.tar $(nerdctl -n k8s.io image ls --format \'{{json .}}\' | jq -r \'select(.Repository!="<none>") | if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end\')\n'))),(0,r.kt)(l.Z,{value:"PowerShell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'nerdctl -n k8s.io save -o all-local-images-in-namespace.tar $(nerdctl -n k8s.io image ls --format \'{{json .}}\' | jq -r \'select(.Repository!=\\"<none>\\") | if (.Tag==\\"<none>\\") then .Repository else (.Repository+\\":\\"+.Tag) end\')\n'))))),(0,r.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Save a single image")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker save -o local-image.tar image:tag\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Save multiple images")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker save -o local-images.tar image1:tag1 image2:tag2\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Save all local images")),(0,r.kt)("p",null,"Below two commands use ",(0,r.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq")," for JSON parsing. The long command performs the below steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"docker image ls")," sub command gets the list of all local images."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"jq")," sub command filters and formats the images list from the previous step.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},'select(.Repository!=\\"<none>\\")')," part of the command skips those images with repository having a value of ",(0,r.kt)("inlineCode",{parentName:"li"},"<none>"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},'if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end\')')," part of the command formats the name of the images to be just the ",(0,r.kt)("inlineCode",{parentName:"li"},"<Repository>")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"<Repository>:<Tag>")," depending on whether a image tag has a value of ",(0,r.kt)("inlineCode",{parentName:"li"},"<none>")," or not."))),(0,r.kt)("li",{parentName:"ul"},"Finally the ",(0,r.kt)("inlineCode",{parentName:"li"},"docker save -o all-local-images-in-namespace.tar")," part of the command saves the filtered and formatted images list from the previous two steps into a tar file. ")),(0,r.kt)(o.Z,{groupId:"shell",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Bash",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'docker save -o all-local-images-in-namespace.tar $(docker image ls --format \'{{json .}}\' | jq -r \'select(.Repository!="<none>") | if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end\')\n'))),(0,r.kt)(l.Z,{value:"PowerShell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'docker save -o all-local-images-in-namespace.tar $(docker image ls --format \'{{json .}}\' | jq -r \'select(.Repository!=\\"<none>\\") | if (.Tag==\\"<none>\\") then .Repository else (.Repository+\\":\\"+.Tag) end\')\n')))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Load images from the saved tar archive in the target environment.")),(0,r.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nerdctl load < local-images.tar\n"))),(0,r.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker load < local-images.tar\n")))))}d.isMDXComponent=!0}}]);