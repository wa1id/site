(self.webpackChunk_electron_react_boilerplate_site=self.webpackChunk_electron_react_boilerplate_site||[]).push([[586],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=o,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6308:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=r(4034),o=r(9973),i=(r(7294),r(3905)),a={id:"tool-tips",title:"Tooling Tips",sidebar_label:"Tooling Tips"},l={unversionedId:"tool-tips",id:"tool-tips",isDocsHomePage:!1,title:"Tooling Tips",description:"This page is intended for sharing less known tips about tools used in this boilerplate. Tools are computer programs that are used to maintain and support electron-react-boilerplate. For example, git, yarn, npm etc.",source:"@site/docs/tool-tips.md",sourceDirName:".",slug:"/tool-tips",permalink:"/docs/tool-tips",editUrl:"https://github.com/electron-react-boilerplate/site/edit/master/docs/tool-tips.md",version:"current",sidebar_label:"Tooling Tips",frontMatter:{id:"tool-tips",title:"Tooling Tips",sidebar_label:"Tooling Tips"},sidebar:"docs",previous:{title:"Internals",permalink:"/docs/internals"},next:{title:"DevTools",permalink:"/docs/dev-tools"}},p=[{value:"How to keep commit history clean",id:"how-to-keep-commit-history-clean",children:[{value:"Further Readings:",id:"further-readings",children:[]}]},{value:"How to add <em>missing</em> +flow-type+ definitions for third party modules",id:"how-to-add-missing-flow-type-definitions-for-third-party-modules",children:[{value:"Further Readings:",id:"further-readings-1",children:[]}]},{value:"How to skip building the DLL immediately after install",id:"how-to-skip-building-the-dll-immediately-after-install",children:[{value:"Further Readings:",id:"further-readings-2",children:[]}]}],s={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page is intended for sharing less known tips about tools used in this boilerplate. Tools are computer programs that are used to maintain and support electron-react-boilerplate. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"git"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," etc."),(0,i.kt)("h2",{id:"how-to-keep-commit-history-clean"},"How to keep commit history clean"),(0,i.kt)("p",null,"When you clone this project and down the line keep your copy updated with the upstream, you end up with lot many commits that are made by contributors to this boilerplate. Meanwhile you too keep committing in your copy in order to develop your project. You may feel that your ",(0,i.kt)("inlineCode",{parentName:"p"},"git log")," is polluted with commits made to this boilerplate, when you prefer ",(0,i.kt)("inlineCode",{parentName:"p"},"git log")," to show only those commits that are directly related to your project. "),(0,i.kt)("p",null,"One workaround is to use ",(0,i.kt)("inlineCode",{parentName:"p"},"--depth 1")," switch in your ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"git fetch")," command."),(0,i.kt)("p",null,"For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# When cloning this boilerplate for the first time\ngit clone --depth=1 https://github.com/electron-react-boilerplate/electron-react-boilerplate.git your-project-name\n# To fetch updated copy of boilerplate\ngit fetch --depth 1 git@github.com:electron-react-boilerplate/electron-react-boilerplate.git\n")),(0,i.kt)("h3",{id:"further-readings"},"Further Readings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/docs/git-clone"},(0,i.kt)("inlineCode",{parentName:"a"},"git clone")," documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/docs/git-fetch"},(0,i.kt)("inlineCode",{parentName:"a"},"git fetch")," documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/782"},"Question: Best way to clean repository after initializing new project? #782"))),(0,i.kt)("h2",{id:"how-to-add-missing-flow-type-definitions-for-third-party-modules"},"How to add ",(0,i.kt)("em",{parentName:"h2"},"missing")," +flow-type+ definitions for third party modules"),(0,i.kt)("p",null,"If flow definitions for a module are missing, flow will raise ",(0,i.kt)("inlineCode",{parentName:"p"},'"Required module not found"')," errors."),(0,i.kt)("p",null,"For example, clone this repository. Add +material-ui+ to ",(0,i.kt)("inlineCode",{parentName:"p"},"./package.json"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add material-ui\n")),(0,i.kt)("p",null,"Then add this line to ",(0,i.kt)("inlineCode",{parentName:"p"},"Counter.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import AppBar from 'material-ui/AppBar';\n")),(0,i.kt)("p",null,"If flow is enabled, it will produce following error,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"file: 'file:///<Your path>/electron-react-boilerplate/app/components/Counter.js'\nseverity: 'Error'\nmessage: 'material-ui/AppBar (Required module not found)'\nat: '4,20'\nsource: 'flow'\n")),(0,i.kt)("p",null,"To get around this issue, add ",(0,i.kt)("inlineCode",{parentName:"p"},"./flow-typed/<module-name>_vx.x.x.js")," file, like ",(0,i.kt)("inlineCode",{parentName:"p"},"./flow-typed/material-ui_vx.x.x.js"),". Then add following lines to it,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"declare module 'module' {\n  declare module.exports: any;\n}\n")),(0,i.kt)("p",null,"In our example, it would be"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"declare module 'material-ui' {\n  declare module.exports: any;\n}\n\ndeclare module 'material-ui/AppBar' {\n  declare module.exports: any;\n}\n")),(0,i.kt)("p",null,"This would turn off flow-typed errors for the module."),(0,i.kt)("h3",{id:"further-readings-1"},"Further Readings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/1024"},'Flow rasies "Required module not found" error #1024')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/electron-react-boilerplate/electron-react-boilerplate/tree/master/flow-typed"},"flow-typed directory"))),(0,i.kt)("h2",{id:"how-to-skip-building-the-dll-immediately-after-install"},"How to skip building the DLL immediately after install"),(0,i.kt)("p",null,"See our ",(0,i.kt)("a",{parentName:"p",href:"faq"},"FAQ")),(0,i.kt)("h3",{id:"further-readings-2"},"Further Readings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/1034"},"Any way to use 'yarn add' without immediately rebuilding the DLL? #1034"))))}u.isMDXComponent=!0}}]);