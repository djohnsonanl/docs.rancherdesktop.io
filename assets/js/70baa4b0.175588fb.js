"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[1205],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4163:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=n(83117),r=(n(67294),n(3905));const l={title:"Command Reference: rdctl"},o=void 0,s={unversionedId:"references/rdctl-command-reference",id:"references/rdctl-command-reference",title:"Command Reference: rdctl",description:"rdctl is a command-line tool, included in Rancher Desktop that enables command-line access to GUI features. rdctl is developed to help users with tasks such as scripting (for automation, CI/CD), troubleshooting, remote management, etc. The current version of rdctl supports the below commands (with support for more commands to be added in upcoming releases):",source:"@site/docs/references/rdctl-command-reference.md",sourceDirName:"references",slug:"/references/rdctl-command-reference",permalink:"/next/references/rdctl-command-reference",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/references/rdctl-command-reference.md",tags:[],version:"current",frontMatter:{title:"Command Reference: rdctl"},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/next/references/architecture"},next:{title:"Bundled Utilities",permalink:"/next/references/bundled-utilities"}},i={},p=[{value:"rdctl or rdctl help",id:"rdctl-or-rdctl-help",level:2},{value:"rdctl api",id:"rdctl-api",level:2},{value:"rdctl api /vX",id:"rdctl-api-vx",level:2},{value:"rdctl api /v0/settings",id:"rdctl-api-v0settings",level:2},{value:"rdctl create-profile",id:"rdctl-create-profile",level:2},{value:"rdctl extension install",id:"rdctl-extension-install",level:2},{value:"rdctl extension ls",id:"rdctl-extension-ls",level:2},{value:"rdctl extension uninstall",id:"rdctl-extension-uninstall",level:2},{value:"rdctl list-settings",id:"rdctl-list-settings",level:2},{value:"rdctl set",id:"rdctl-set",level:2},{value:"rdctl shutdown",id:"rdctl-shutdown",level:2},{value:"rdctl start",id:"rdctl-start",level:2},{value:"rdctl version",id:"rdctl-version",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=c("Tabs"),u=c("TabItem"),m={toc:p};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/references/rdctl-command-reference"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rdctl")," is a command-line tool, included in Rancher Desktop that enables command-line access to GUI features. ",(0,r.kt)("inlineCode",{parentName:"p"},"rdctl")," is developed to help users with tasks such as scripting (for automation, CI/CD), troubleshooting, remote management, etc. The current version of ",(0,r.kt)("inlineCode",{parentName:"p"},"rdctl")," supports the below commands (with support for more commands to be added in upcoming releases):"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"As the current version of ",(0,r.kt)("inlineCode",{parentName:"p"},"rdctl")," is experimental, all subcommand names, their arguments, and their output are still subject to change.")),(0,r.kt)("admonition",{title:"warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The Rancher Desktop application must be running for the following commands:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Command List"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"rdctl list-settings"),(0,r.kt)("li",{parentName:"ul"},"rdctl set"),(0,r.kt)("li",{parentName:"ul"},"rdctl shutdown")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For many ",(0,r.kt)("inlineCode",{parentName:"p"},"rdctl")," commands, there are corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"API")," calls that can be applied. Listed below are the available commands shown in both formats. The ",(0,r.kt)("inlineCode",{parentName:"p"},"api")," examples will assume ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," as the tool being used to talk to the API.")),(0,r.kt)("h2",{id:"rdctl-or-rdctl-help"},"rdctl or rdctl help"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"rdctl")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"rdctl help")," to see the list of available commands."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-autoupdate=true"},'> rdctl help\nThe eventual goal of this CLI is to enable any UI-based operation to be done from the command-line as well.\n\nUsage:\n  rdctl [command]\n\nAvailable Commands:\n  api           Run API endpoints directly\n  completion    Generate the autocompletion script for the specified shell\n  factory-reset Clear all the Rancher Desktop state and shut it down.\n  help          Help about any command\n  list-settings Lists the current settings.\n  set           Update selected fields in the Rancher Desktop UI and restart the backend.\n  shell         Run an interactive shell or a command in a Rancher Desktop-managed VM\n  shutdown      Shuts down the running Rancher Desktop application\n  start         Start up Rancher Desktop, or update its settings.\n  version       Shows the CLI version.\n\nFlags:\n      --config-path string   config file (default /Users/jan/Library/Application Support/rancher-desktop/rd-engine.json)\n  -h, --help                 help for rdctl\n      --host string          default is localhost; most useful for WSL\n      --password string      overrides the password setting in the config file\n      --port string          overrides the port setting in the config file\n      --user string          overrides the user setting in the config file\n\nUse "rdctl [command] --help" for more information about a command.\n'))),(0,r.kt)("h2",{id:"rdctl-api"},"rdctl api"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"rdctl api /")," to list all endpoints globally."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-autoupdate=true"},"$ rdctl api / | jq -r .[]\nGET /\nGET /v0\nGET /v1\nGET /v1/about\nGET /v1/diagnostic_categories\nGET /v1/diagnostic_checks\nPOST /v1/diagnostic_checks\nGET /v1/diagnostic_ids\nPUT /v1/factory_reset\nPUT /v1/propose_settings\nGET /v1/settings\nPUT /v1/settings\nPUT /v1/shutdown\nGET /v1/transient_settings\nPUT /v1/transient_settings\n"))),(0,r.kt)("h2",{id:"rdctl-api-vx"},"rdctl api /vX"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"rdctl api /v1")," to list all endpoints in version 1."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-autoupdate=true"},"$ rdctl api /v1 | jq -r .[]\nGET /v1\nGET /v1/about\nGET /v1/diagnostic_categories\nGET /v1/diagnostic_checks\nPOST /v1/diagnostic_checks\nGET /v1/diagnostic_ids\nPUT /v1/factory_reset\nPUT /v1/propose_settings\nGET /v1/settings\nPUT /v1/settings\nPUT /v1/shutdown\nGET /v1/transient_settings\nPUT /v1/transient_settings\n"))),(0,r.kt)("h2",{id:"rdctl-api-v0settings"},"rdctl api /v0/settings"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rdctl api [endpoints]")," are commands that are most useful for users working directly with the API itself, and therefore they would not be for everyday use, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"rdctl set")," might be. For example,"),(0,r.kt)("p",null,"a command such as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'rdctl api /v0/settings --method PUT --body \'{"kubernetes": {"enabled": false}}\'\n')),(0,r.kt)("p",null,"is the same as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rdctl set --kubernetes-enabled=false\n")),(0,r.kt)("p",null,"but less concise and user-friendly."),(0,r.kt)("h2",{id:"rdctl-create-profile"},"rdctl create-profile"),(0,r.kt)("p",null,"Generates a deployment profile for Rancher Desktop settings in either macOS ",(0,r.kt)("inlineCode",{parentName:"p"},".plist")," or Windows ",(0,r.kt)("inlineCode",{parentName:"p"},".reg")," format."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"rdctl create-profile <options> <options-input>\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Options & Example Command"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Options")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"--input [FILE]              File containing a JSON document.\n--body [JSON]               Command-line option containing a JSON document\n--from-settings             Use current settings.\n--output [plist, reg]       An output of .plist files for macOS and .reg files for Windows.\n\nAdditional options for --output reg:\n--type [locked, defaults]   The locked field is set as default, otherwise the default type can be specified.\n--hive [hklm, hkcu]         The hklm field is set as default, otherwise hkcu can be specified.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"rdctl create-profile --output reg --hive=Hkcu --from-settings\n"))),(0,r.kt)("h2",{id:"rdctl-extension-install"},"rdctl extension install"),(0,r.kt)("p",null,"Installs a Rancher Desktop extension."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rdctl extension install <image-id>\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Options & Example Output"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Options")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--force               Avoids any interactivity.\n<image-id>:<tag>      The <tag> is optional, e.g. splatform/epinio-docker-desktop:latest.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-autoupdate=true"},"$ rdctl extension install docker/logs-explorer-extension:0.2.2\nInstalling image docker/logs-explorer-extension:0.2.2\n"))),(0,r.kt)("h2",{id:"rdctl-extension-ls"},"rdctl extension ls"),(0,r.kt)("p",null,"Lists currently installed images."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rdctl extension ls\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Output"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-autoupdate=true"},"$ rdctl extension ls\nExtension IDs\n\ndocker/logs-explorer-extension:0.2.2\n"))),(0,r.kt)("h2",{id:"rdctl-extension-uninstall"},"rdctl extension uninstall"),(0,r.kt)("p",null,"Uninstalls a Rancher Desktop extension."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rdctl extension uninstall <image-id>\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Options & Example Output"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Options")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<image-id>:<tag>      The <tag> is optional, e.g. splatform/epinio-docker-desktop:latest.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-autoupdate=true"},"$ rdctl extension uninstall docker/logs-explorer-extension:0.2.2\nUninstalling image docker/logs-explorer-extension:0.2.2: Deleted docker/logs-explorer-extension:0.2.2\n"))),(0,r.kt)("h2",{id:"rdctl-list-settings"},"rdctl list-settings"),(0,r.kt)(d,{groupId:"command-reference",mdxType:"Tabs"},(0,r.kt)(u,{value:"CLI",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"rdctl list-settings")," to see the current active configuration."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-autoupdate=true"},'> rdctl list-settings\n{\n  "version": 6,\n  "application": {\n    "adminAccess": false,\n    "pathManagementStrategy": "rcfiles",\n    "updater": {\n      "enabled": false\n    },\n    "debug": false,\n    "telemetry": {\n      "enabled": true\n    },\n    "autoStart": false,\n    "startInBackground": false,\n    "hideNotificationIcon": false,\n    "window": {\n      "quitOnClose": false\n    }\n  },\n  "virtualMachine": {\n    "memoryInGB": 6,\n    "numberCPUs": 2,\n    "hostResolver": true\n  },\n  "WSL": {\n    "integrations": {}\n  },\n  "containerEngine": {\n    "allowedImages": {\n      "enabled": false,\n      "patterns": [\n        "docker.io"\n      ]\n    },\n    "name": "moby"\n  },\n  "kubernetes": {\n    "version": "",\n    "port": 6443,\n    "enabled": false,\n    "options": {\n      "traefik": true,\n      "flannel": true\n    },\n    "ingress": {\n      "localhostOnly": false\n    }\n  },\n  "portForwarding": {\n    "includeKubernetesServices": false\n  },\n  "images": {\n    "showAll": true,\n    "namespace": "k8s.io"\n  },\n  "diagnostics": {\n    "showMuted": false,\n    "mutedChecks": {}\n  },\n  "experimental": {\n    "virtualMachine": {\n      "type": "qemu",\n      "useRosetta": false,\n      "socketVMNet": false,\n      "mount": {\n        "type": "reverse-sshfs",\n        "9p": {\n          "securityModel": "none",\n          "protocolVersion": "9p2000.L",\n          "msizeInKB": 128,\n          "cacheMode": "mmap"\n        }\n      },\n      "networkingTunnel": false\n    }\n  },\n  "extensions": {\n    "docker/logs-explorer-extension:0.2.2": true\n  }\n}\n\n')))),(0,r.kt)(u,{value:"API",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Run the following API call to see the current active configuration:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/settings -X GET\n'))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Using ",(0,r.kt)("inlineCode",{parentName:"p"},"-X GET")," is optional. You could also just use the preceding command by itself."))),(0,r.kt)("h2",{id:"rdctl-set"},"rdctl set"),(0,r.kt)(d,{groupId:"command-reference",mdxType:"Tabs"},(0,r.kt)(u,{value:"CLI",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"rdctl set [flags]")," to set properties. In most of the cases, Kubernetes would be reset on running the ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," command. You can set multiple properties by chaining in a single command. See some examples below."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> rdctl set --kubernetes-enabled=false\n> rdctl set --container-engine docker --kubernetes-version 1.21.2\n")))),(0,r.kt)(u,{value:"API",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Run the following API call to set properties:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/settings -d \'{ "kubernetes": { "containerEngine": "docker", "enabled": false, "version":"1.23.5" }}\' -X PUT\n'))))),(0,r.kt)("h2",{id:"rdctl-shutdown"},"rdctl shutdown"),(0,r.kt)(d,{groupId:"command-reference",mdxType:"Tabs"},(0,r.kt)(u,{value:"CLI",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"rdctl shutdown")," to gracefully shut down Rancher Desktop."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> rdctl shutdown\nShutting down.\n")))),(0,r.kt)(u,{value:"API",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Run the following API call to shut down Rancher Desktop:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'shutdown: curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/shutdown -X PUT\n'))))),(0,r.kt)("h2",{id:"rdctl-start"},"rdctl start"),(0,r.kt)(d,{groupId:"command-reference",mdxType:"Tabs"},(0,r.kt)(u,{value:"CLI",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"rdctl start")," to ensure that Rancher Desktop is running and configured as requested."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Options & Example Command"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Options:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Usage:\n  rdctl start [flags]\n\nFlags:\n      --application.admin-access                                        enable privileged operations\n      --application.auto-start                                          start app when logging in\n      --application.debug                                               generate more verbose logging\n      --application.hide-notification-icon                              don't show notification icon\n      --application.path-management-strategy string                     update PATH to include ~/.rd/bin (allowed values: [manual, rcfiles])\n      --application.start-in-background                                 start app without window\n      --application.telemetry.enabled                                   allow collection of anonymous statistics\n      --application.updater.enabled                                     automatically update to the latest release\n      --application.window.quit-on-close                                terminate app when the main window is closed\n      --container-engine.allowed-images.enabled                         only allow images to be pulled that match the allowed patterns\n      --container-engine.name string                                    set engine (allowed values: [containerd, docker, moby])\n      --diagnostics.show-muted                                          unhide muted diagnostics\n      --experimental.virtual-machine.mount.9p.cache-mode string         (allowed values: [none, loose, fscache, mmap])\n      --experimental.virtual-machine.mount.9p.msize-in-kib int          maximum packet size\n      --experimental.virtual-machine.mount.9p.protocol-version string   (allowed values: [9p2000, 9p2000.u, 9p2000.L])\n      --experimental.virtual-machine.mount.9p.security-model string     (allowed values: [passthrough, mapped-xattr, mapped-file, none])\n      --experimental.virtual-machine.mount.type string                  how directories are shared (allowed values: [reverse-sshfs, 9p, virtiofs])\n      --experimental.virtual-machine.socket-vmnet                       use socket-vmnet instead of vde-vmnet\n      --experimental.virtual-machine.type string                        (allowed values: [qemu, vz])\n      --experimental.virtual-machine.use-rosetta                        \n      -h, --help                                                        help for start\n      --images.namespace string                                         select only images from this namespace (containerd only)\n      --images.show-all                                                 show system images on Images page\n      --kubernetes.enabled                                              run Kubernetes\n      --kubernetes.options.flannel                                      use flannel networking; disable to install your own CNI\n      --kubernetes.options.traefik                                      install and run traefik\n      --kubernetes.port int                                             apiserver port\n      --kubernetes.version string                                       choose which version of Kubernetes to run\n      --no-modal-dialogs                                                avoid displaying dialog boxes\n      -p, --path string                                                 path to main executable\n      --port-forwarding.include-kubernetes-services                     show Kubernetes system services on Port Forwarding page\n      --virtual-machine.memory-in-gb int                                reserved RAM size\n      --virtual-machine.number-cpus int                                 reserved number of CPUs\n\nGlobal Flags:\n      --config-path string   config file (default /Users/{username}/Library/Application Support/rancher-desktop/rd-engine.json)\n      --host string          default is localhost; most useful for WSL\n      --password string      overrides the password setting in the config file\n      --port string          overrides the port setting in the config file\n      --user string          overrides the user setting in the config file\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"> rdctl start --container-runtime dockerd -- kubernetes-version 1.19.3\n")))),(0,r.kt)(u,{value:"API",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Run the following API call to ensure Rancher Desktop is running and configured, making sure to fill in your respective user and password values:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -s -H "Authorization: Basic $(echo -n "user:PASSWORD" | base64)"\n'))))),(0,r.kt)("h2",{id:"rdctl-version"},"rdctl version"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"rdctl version")," to see the current rdctl CLI version."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-autoupdate=true"},"> rdctl version\nrdctl client version: 1.1.0, targeting server version: v1\n"))))}k.isMDXComponent=!0}}]);