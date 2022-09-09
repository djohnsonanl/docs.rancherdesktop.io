"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[205],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7462),a=n(7294),l=n(2389),o=n(9443);var i=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3616),c=n(6010),u="tabItem_vU9c";function d(e){var t,n,l,o=e.lazy,d=e.block,p=e.defaultValue,m=e.values,h=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,s.lx)(k,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=i(),w=y.tabGroupChoices,T=y.setTabGroupChoices,N=(0,a.useState)(b),C=N[0],I=N[1],x=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var P=w[h];null!=P&&P!==C&&k.some((function(e){return e.value===P}))&&I(P)}var R=function(e){var t=e.currentTarget,n=x.indexOf(t),r=k[n].value;r!==C&&(E(t),I(r),null!=h&&T(h,r))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":d},f)},k.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return x.push(e)},onKeyDown:O,onFocus:R,onClick:R},l,{className:(0,c.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},4163:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return h}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(6396),i=n(8215),s=["components"],c={title:"rdctl Command Reference"},u=void 0,d={unversionedId:"references/rdctl-command-reference",id:"references/rdctl-command-reference",title:"rdctl Command Reference",description:"rdctl is a command-line tool, included in Rancher Desktop that enables command-line access to GUI features. rdctl is developed to help users with tasks such as scripting (for automation, CI/CD), troubleshooting, remote management, etc. The current version of rdctl supports the below commands (with support for more commands to be added in upcoming releases):",source:"@site/docs/references/rdctl-command-reference.md",sourceDirName:"references",slug:"/references/rdctl-command-reference",permalink:"/references/rdctl-command-reference",editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/references/rdctl-command-reference.md",tags:[],version:"current",frontMatter:{title:"rdctl Command Reference"},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/references/architecture"},next:{title:"FAQ",permalink:"/faq"}},p=[{value:"rdctl or rdctl help",id:"rdctl-or-rdctl-help",children:[],level:2},{value:"rdctl api",id:"rdctl-api",children:[],level:2},{value:"rdctl api /vX",id:"rdctl-api-vx",children:[],level:2},{value:"rdctl api /v0/settings",id:"rdctl-api-v0settings",children:[],level:2},{value:"rdctl list-settings",id:"rdctl-list-settings",children:[],level:2},{value:"rdctl set",id:"rdctl-set",children:[],level:2},{value:"rdctl shutdown",id:"rdctl-shutdown",children:[],level:2},{value:"rdctl start",id:"rdctl-start",children:[],level:2},{value:"rdctl version",id:"rdctl-version",children:[],level:2}],m={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," is a command-line tool, included in Rancher Desktop that enables command-line access to GUI features. ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," is developed to help users with tasks such as scripting (for automation, CI/CD), troubleshooting, remote management, etc. The current version of ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," supports the below commands (with support for more commands to be added in upcoming releases):"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u26a0\ufe0f As the current version of ",(0,l.kt)("inlineCode",{parentName:"strong"},"rdctl")," is experimental, all subcommands names, their arguments, and their output are still subjected to change.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u26a0\ufe0f Rancher Desktop app must be running on your machine to use ",(0,l.kt)("inlineCode",{parentName:"strong"},"rdctl")," commands.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," For many ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," commands, there are corresponding ",(0,l.kt)("inlineCode",{parentName:"p"},"API")," calls that can be applied. Listed below are the available commands shown in both formats. The ",(0,l.kt)("inlineCode",{parentName:"p"},"api")," examples will assume ",(0,l.kt)("inlineCode",{parentName:"p"},"curl")," as the tool being used to talk to the API."),(0,l.kt)("h2",{id:"rdctl-or-rdctl-help"},"rdctl or rdctl help"),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl help")," to see the list of available commands."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'> rdctl help\nThe eventual goal of this CLI is to enable any UI-based operation to be done from the command-line as well.\n\nUsage:\n  rdctl [command]\n\nAvailable Commands:\n  api           Runs API endpoints directly\n  api /vX       Enables you to see the endpoints for a particular version; e.g., v0\n  completion    Generates the autocompletion script for the specified shell\n  help          Help about any command\n  list-settings Lists the current settings\n  set           Updates selected fields in the Rancher Desktop UI and restart the backend\n  shell         Run an interactive shell or a command in a Rancher Desktop-managed VM\n  shutdown      Shuts down the running Rancher Desktop application\n  start         Start up Rancher Desktop or update its settings\n  version       Shows the CLI version\n\nFlags:\n      --config-path string   config file (default C:\\Users\\GunasekharMatamalam\\AppData\\Roaming\\rancher-desktop\\rd-engine.json)\n  -h, --help                 help for rdctl\n      --host string          default is localhost; most useful for WSL\n      --password string      overrides the password setting in the config file\n      --port string          overrides the port setting in the config file\n      --user string          overrides the user setting in the config file\n\nUse "rdctl [command] --help" for more information about a command.\n')),(0,l.kt)("h2",{id:"rdctl-api"},"rdctl api"),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl api")," to list all endpoints globally."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$ ../../../resources/darwin/bin/rdctl api / | jq -r .\n[\n  "GET /",\n  "GET /v0",\n  "GET /v0/settings",\n  "PUT /v0/settings",\n  "PUT /v0/shutdown"\n]\n')),(0,l.kt)("h2",{id:"rdctl-api-vx"},"rdctl api /vX"),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl api /v0")," to list all endpoints in a specified version."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$ rdctl api /v0 | jq -r .\n[\n  "GET /v0",\n  "GET /v0/settings",\n  "PUT /v0/settings",\n  "PUT /v0/shutdown"\n]\n')),(0,l.kt)("h2",{id:"rdctl-api-v0settings"},"rdctl api /v0/settings"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rdctl api [endpoints]")," are commands that are most useful for users working directly with the API itself, and therefore they would not be for everyday use, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl set")," might be. For example,"),(0,l.kt)("p",null,"a command such as"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'rdctl api /v0/settings --method PUT --body \'{"kubernetes": {"enabled": false}}\'\n')),(0,l.kt)("p",null,"is the same as "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rdctl set --kubernetes-enabled=false\n")),(0,l.kt)("p",null,"but less concise and user-friendly."),(0,l.kt)("h2",{id:"rdctl-list-settings"},"rdctl list-settings"),(0,l.kt)(o.Z,{groupId:"command-reference",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"CLI",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl list-settings")," to see the current active configuration."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'> rdctl list-settings\n{\n  "version": 4,\n  "kubernetes": {\n    "version": "1.22.7",\n    "memoryInGB": 2,\n    "numberCPUs": 2,\n    "port": 6443,\n    "containerEngine": "moby",\n    "checkForExistingKimBuilder": false,\n    "enabled": true,\n    "WSLIntegrations": {},\n    "options": {\n      "traefik": true\n    }\n  },\n  "portForwarding": {\n    "includeKubernetesServices": false\n  },\n  "images": {\n    "showAll": true,\n    "namespace": "k8s.io"\n  },\n  "telemetry": true,\n  "updater": true,\n  "debug": false\n}\n'))),(0,l.kt)(i.Z,{value:"API",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Run the following API call to see the current active configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/settings -X GET\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Using ",(0,l.kt)("inlineCode",{parentName:"p"},"-X GET")," is optional. You could also just use the preceding command by itself."))),(0,l.kt)("h2",{id:"rdctl-set"},"rdctl set"),(0,l.kt)(o.Z,{groupId:"command-reference",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"CLI",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl set [flags]")," to set properties. In most of the cases, Kubernetes would be reset on running the ",(0,l.kt)("inlineCode",{parentName:"p"},"set")," command. You can set multiple properties by chaining in a single command. See some examples below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> rdctl set --kubernetes-enabled=false\n> rdctl set --container-engine docker --kubernetes-version 1.21.2\n"))),(0,l.kt)(i.Z,{value:"API",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Run the following API call to set properties:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/settings -d \'{ "kubernetes": { "containerEngine": "docker", "enabled": false, "version":"1.23.5" }}\' -X PUT\n')))),(0,l.kt)("h2",{id:"rdctl-shutdown"},"rdctl shutdown"),(0,l.kt)(o.Z,{groupId:"command-reference",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"CLI",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl shutdown")," to gracefully shut down Rancher Desktop."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> rdctl shutdown\nShutting down.\n"))),(0,l.kt)(i.Z,{value:"API",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Run the following API call to shut down Rancher Desktop:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'shutdown: curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/shutdown -X PUT\n')))),(0,l.kt)("h2",{id:"rdctl-start"},"rdctl start"),(0,l.kt)(o.Z,{groupId:"command-reference",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"CLI",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl start")," to ensure that Rancher Desktop is running and configured as requested."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> rdctl start --container-runtime dockerd -- kubernetes-version 1.19.3\n"))),(0,l.kt)(i.Z,{value:"API",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Run the following API call to ensure Rancher Desktop is running and configured, making sure to fill in your respective user and password values:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -s -H "Authorization: Basic $(echo -n "user:PASSWORD" | base64)"\n')))),(0,l.kt)("h2",{id:"rdctl-version"},"rdctl version"),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl version")," to see the current rdctl CLI version."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> rdctl version\nrdctl client version: 1.0.0, targeting server version: v0\n")))}h.isMDXComponent=!0}}]);