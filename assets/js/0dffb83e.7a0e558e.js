(self.webpackChunk_electron_react_boilerplate_site=self.webpackChunk_electron_react_boilerplate_site||[]).push([[75],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5927:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var a=r(4034),n=r(9973),i=(r(7294),r(3905)),o={id:"roadmap",title:"Roadmap",sidebar_label:"Roadmap"},l={unversionedId:"roadmap",id:"roadmap",isDocsHomePage:!1,title:"Roadmap",description:"Release v2.0.0",source:"@site/docs/roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/docs/roadmap",editUrl:"https://github.com/electron-react-boilerplate/site/edit/master/docs/roadmap.md",version:"current",sidebar_label:"Roadmap",frontMatter:{id:"roadmap",title:"Roadmap",sidebar_label:"Roadmap"}},s=[{value:"Release v2.0.0",id:"release-v200",children:[]},{value:"Release v1.2.0",id:"release-v120",children:[]},{value:"Future Releases",id:"future-releases",children:[]},{value:"Release v1.4.0",id:"release-v140",children:[]},{value:"Release v1.0.0",id:"release-v100",children:[]}],p={toc:s};function u(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"release-v200"},"Release v2.0.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Migrate to ",(0,i.kt)("inlineCode",{parentName:"li"},"webpack@5")),(0,i.kt)("li",{parentName:"ul"},"React fast refresh"),(0,i.kt)("li",{parentName:"ul"},"Drop Redux integration"),(0,i.kt)("li",{parentName:"ul"},"Add macOS notarize support"),(0,i.kt)("li",{parentName:"ul"},"Simplify directory structure"),(0,i.kt)("li",{parentName:"ul"},"Remove counter app boilerplate example"),(0,i.kt)("li",{parentName:"ul"},"Migrate to ",(0,i.kt)("inlineCode",{parentName:"li"},"electron@11"))),(0,i.kt)("h2",{id:"release-v120"},"Release v1.2.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Migrate to ",(0,i.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/"},"redux-toolkit"))),(0,i.kt)("h2",{id:"future-releases"},"Future Releases"),(0,i.kt)("h2",{id:"release-v140"},"Release v1.4.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Drop redux support"),(0,i.kt)("li",{parentName:"ul"},"Restore electron preload as default"),(0,i.kt)("li",{parentName:"ul"},"Auto update integration"),(0,i.kt)("li",{parentName:"ul"},"Enhanced vscode debugger intetgration"),(0,i.kt)("li",{parentName:"ul"},"Migrate to hooks"),(0,i.kt)("li",{parentName:"ul"},"Publishing to web and ERB"),(0,i.kt)("li",{parentName:"ul"},"Hot reload main process"),(0,i.kt)("li",{parentName:"ul"},"docs",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"using binary assets at runtime"),(0,i.kt)("li",{parentName:"ul"},"tray ERB app"),(0,i.kt)("li",{parentName:"ul"},"Examples with bootstrap"),(0,i.kt)("li",{parentName:"ul"},"Examples with material-ui"))),(0,i.kt)("li",{parentName:"ul"},"Video tutorial series")),(0,i.kt)("h1",{id:"-past-releases"},"\u2705 Past Releases"),(0,i.kt)("h2",{id:"release-v100"},"Release v1.0.0"),(0,i.kt)("h4",{id:"migrate-to-typescript-from-flow"},"Migrate to TypeScript from Flow"),(0,i.kt)("p",null,"This is currently a work in progress for the ERB team. The reason why we waited for a while before migrating to TypeScript is because we wanted users to use ESLint and TypeScript as opposed to TypeScript and TSLint. ESLint and TypeScript integration was initially unstable and experimental so we wanted to wait a while before migrating. Now that the tooling is more stable, we have recently started working on the migration."),(0,i.kt)("h4",{id:"disabling-sourcemaps-in-production"},"Disabling Sourcemaps in Production"),(0,i.kt)("p",null,"Sourcemaps allow developers to map compiled code to source code. This makes debugging easier but when sourcemaps are shipped in production, they allow consumers of the application to view the original source code of the application. This is an issue for proprietary applications that depend on electron-react-boilerplate. As a result, sourcemaps will be disabled in production in ",(0,i.kt)("inlineCode",{parentName:"p"},"0.19.0"),"."),(0,i.kt)("h4",{id:"disabling-node-integration-in-renderer"},"Disabling Node Integration in Renderer"),(0,i.kt)("p",null,"For context, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/electron/electron/issues/5113"},"electron/electron/issues/5113"),"."),(0,i.kt)("h4",{id:"migrate-to-azure-pipelines"},"Migrate to Azure Pipelines"),(0,i.kt)("p",null,"Azure Pipelines allows concurrent builds for Windows, MacOS, and Linux. Rather than using Travis CI and Appveyor, Azure Pipelines will allow us to use a single CI for all platforms. While Travis CI does support Windows we've noticed that builds on it tend to be slow and the Windows builds tend to be unreliable and flaky."))}u.isMDXComponent=!0}}]);