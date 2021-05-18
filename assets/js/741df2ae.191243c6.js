(self.webpackChunk_electron_react_boilerplate_site=self.webpackChunk_electron_react_boilerplate_site||[]).push([[368],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3171:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=n(4034),i=n(9973),a=(n(7294),n(3905)),o={id:"internals",title:"Internals",sidebar_label:"Internals"},l={unversionedId:"internals",id:"internals",isDocsHomePage:!1,title:"Internals",description:"Webpack Configurations",source:"@site/docs/internals.md",sourceDirName:".",slug:"/internals",permalink:"/docs/internals",editUrl:"https://github.com/electron-react-boilerplate/site/edit/master/docs/internals.md",version:"current",sidebar_label:"Internals",frontMatter:{id:"internals",title:"Internals",sidebar_label:"Internals"},sidebar:"docs",previous:{title:"Continuous Integration (CI)",permalink:"/docs/ci"},next:{title:"Tooling Tips",permalink:"/docs/tool-tips"}},s=[{value:"Webpack Configurations",id:"webpack-configurations",children:[]},{value:"Internal Scripts",id:"internal-scripts",children:[]}],c={toc:s};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"webpack-configurations"},"Webpack Configurations"),(0,a.kt)("p",null,"Webpack configs are located inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"./configs")," directory"),(0,a.kt)("h2",{id:"internal-scripts"},"Internal Scripts"),(0,a.kt)("p",null,"The scripts inside the ",(0,a.kt)("inlineCode",{parentName:"p"},".erb/scripts")," handle functionality that cannot be written as npm scripts."),(0,a.kt)("p",null,"The scripts are the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CheckBuildExists.js"),": Check of the main and renderer processes have been built. These processes must be build before running E2E tests"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CheckNodeEnv.js"),": Assert that ",(0,a.kt)("inlineCode",{parentName:"li"},"NODE_ENV")," is the expected value. Throw if assertion fails"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CheckPortInUse.js"),": Finds a free port if default port for ERB is in use")))}p.isMDXComponent=!0}}]);