"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[836],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),l=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(t),k=r,m=u["".concat(p,".").concat(k)]||u[k]||d[k]||a;return t?o.createElement(m,s(s({ref:n},c),{},{components:t})):o.createElement(m,s({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3584:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),s=["components"],i={sidebar_position:4},p="FAQ",l={unversionedId:"faq",id:"faq",title:"FAQ",description:"This FAQ is a work in progress designed to answer the questions our users most frequently ask about Rancher Desktop.",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/faq",editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/faq.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Images",permalink:"/images"}},c=[],d={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("p",null,"This FAQ is a work in progress designed to answer the questions our users most frequently ask about Rancher Desktop."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: Is Rancher Desktop a desktop version of Rancher?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," No, Rancher Desktop is not ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/"},"Rancher")," on the desktop. Installing Rancher Desktop does not install Rancher, but you can install Rancher as a workload."),(0,a.kt)("p",null,"Rancher Desktop is similar to applications like ",(0,a.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/"},"minikube"),", ",(0,a.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"kind"),", or ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/"},"Docker Desktop")," where the goal is to have an easy to set up local Kubernetes environment to manage containers."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: Can I have Docker Desktop installed alongside Rancher Desktop?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," Yes, but they cannot be run at the same time as both Rancher Desktop and Docker Desktop use the same Docker socket (",(0,a.kt)("inlineCode",{parentName:"p"},"/var/run/docker.sock"),"). Before starting one, be sure to stop the other first."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: I do not see an entry for Rancher Desktop when running ",(0,a.kt)("inlineCode",{parentName:"strong"},"kubectl config get-contexts"),", where is it?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," Rancher Desktop places its configuration in the default location, ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.kube/config,")," and uses that. Your ",(0,a.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," environment variable may be set to look elsewhere for configuration files."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: Rancher Desktop is stuck on ",(0,a.kt)("inlineCode",{parentName:"strong"},"Waiting for Kubernetes API"),", what do I do?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," The cause is hard to determine without additional information. Navigate to the Troubleshooting tab and use the button to access the logs. Then go to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-desktop/issues"},"Rancher Desktop GitHub")," page and file an issue with the logs attached."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: I can no longer run ",(0,a.kt)("inlineCode",{parentName:"strong"},"docker compose")," after installing Rancher Desktop and uninstalling Docker Desktop, what happened?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker compose")," subcommand is bundled as part of a Docker Desktop installation and is removed when uninstalled. Future versions of Rancher Desktop will include and automatically ",(0,a.kt)("inlineCode",{parentName:"p"},"docker compose")," for you, but until then you can install it using this procedure:"),(0,a.kt)("p",null,"For Macos:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd /tmp\n$ mkdir dc-work\n$ cd dc-work\n$ curl -o docker-compose -kL https://github.com/docker/compose/releases/download/v2.2.3/docker-compose-darwin-x86_64\n$ chmod +x docker-compose\n$ mkdir -p ~/.docker/cli-plugins/\n$ mv docker-compose ~/.docker/cli-plugins/\n$ cd ..\n$ rmdir dc-work\n")),(0,a.kt)("p",null,"For Linux, and in a Linux subsystem on Windows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd /tmp\n$ mkdir dc-work\n$ cd dc-work\n$ curl -o docker-compose -kL https://github.com/docker/compose/releases/download/v2.2.3/docker-compose-linux-x86_64\n$ chmod +x docker-compose\n$ mkdir -p ~/.docker/cli-plugins/\n$ mv docker-compose ~/.docker/cli-plugins/\n$ cd ..\n$ rmdir dc-work\n")),(0,a.kt)("p",null,"For Windows, in a powershell session:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd $Env:TEMP # (or $Env:TMP)\n$ mkdir dc-work\n$ cd dc-work\n$ iwr -UseBasicParsing -OutFile docker-compose.exe https://github.com/docker/compose/releases/download/v2.2.3/docker-compose-windows-x86_64.exe \n$ mkdir $ENV:HOMEPATH/.docker/cli-plugins -Force\n$ mv docker-compose.exe $ENV:HOMEPATH/.docker/cli-plugins/\n$ cd ..\n$ rmdir dc-work\n")),(0,a.kt)("p",null,"Also, on Windows, don't forget to also set up ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose")," on the Linux side as well, described above."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: I don't need the Kubernetes cluster deployed by Rancher Desktop, how do I disable it to save resources?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," As a temporary workaround, you can ",(0,a.kt)("em",{parentName:"p"},"disable")," Kubernetes in Rancher Desktop with these commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl config use-context rancher-desktop\nkubectl delete node lima-rancher-desktop\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: What's happening to the Kubernetes Image Manager (kim)?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," As of version 1.0 Kim is no longer shipped and has been replaced by nerdctl and the Docker CLI."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: I'm using Homebrew to install Rancher Desktop, but ",(0,a.kt)("inlineCode",{parentName:"strong"},"brew install rancher-desktop")," is failing, why?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," Due to the Homebrew cask naming conventions, the ",(0,a.kt)("inlineCode",{parentName:"p"},"-desktop")," suffix is dropped from the cask formula name. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"brew install rancher")," instead."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: Running ",(0,a.kt)("inlineCode",{parentName:"strong"},"brew install rancher")," is failing with a ",(0,a.kt)("inlineCode",{parentName:"strong"},"It seems there is already a Binary at '/usr/local/bin/<BINARY>'")," error, why?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," If any of the Rancher Desktop supporting utilities (Helm, kubectl, nerdctl, docker) are already managed by Homebrew, then the installation fails due to how the Homebrew cask formula is defined. Installing using the Mac app will avoid this issue."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: The tools on the Support Utilities page are not installed and I see a ",(0,a.kt)("inlineCode",{parentName:"strong"},"Insufficient permission to manipulate /usr/local/bin")," error, how do I fix it?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," This occurs when you do not have ownership of ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),". A long-term solution to improve the handling of permissions is in the works. In the meantime, a temporary workaround is to change ownership of ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," by running ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo chown $USER /usr/local/bin"),". When you are able to write to the directory, Rancher Desktop is able to create the symlinks."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: Is Cygwin compatible with Rancher Desktop?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," No, but there are plans to add compatibility."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: How do I fix ",(0,a.kt)("inlineCode",{parentName:"strong"},"permission denied")," errors when trying to use Docker on WSL?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," You need write-permission to access the docker socket. There are many ways to go about that, but this is one of the more common approaches. Using the Ubuntu WSL command-line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo groupadd docker\nsudo adduser $USER docker\nsudo chown root:docker /var/run/docker.sock\nsudo chmod g+w /var/run/docker.sock\nnewgrp docker\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: How do I fix ",(0,a.kt)("inlineCode",{parentName:"strong"},"kubectl: command not found")," issue on Linux?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," By default, Rancher Desktop creates symlinks of ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"docker"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"helm")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl")," binaries in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/<user>/.local/bin")," directory on Linux. To be able to call these commands directly from the console you may add the directory to your ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable by executing the following command in console and performing logout and login:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo "export PATH=\\$PATH:/home/$(whoami)/.local/bin" >> ~/.bashrc\n')))}u.isMDXComponent=!0}}]);