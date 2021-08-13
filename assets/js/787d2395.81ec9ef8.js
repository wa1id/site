(self.webpackChunk_electron_react_boilerplate_site=self.webpackChunk_electron_react_boilerplate_site||[]).push([[633],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,f=d["".concat(p,".").concat(g)]||d[g]||s[g]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5805:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=n(4034),a=n(9973),o=(n(7294),n(3905)),i={id:"packaging",title:"Packaging",sidebar_label:"Packaging"},l=void 0,p={unversionedId:"packaging",id:"packaging",isDocsHomePage:!1,title:"Packaging",description:"To package apps for the local platform:",source:"@site/docs/packaging.md",sourceDirName:".",slug:"/packaging",permalink:"/docs/packaging",editUrl:"https://github.com/electron-react-boilerplate/site/edit/master/docs/packaging.md",version:"current",frontMatter:{id:"packaging",title:"Packaging",sidebar_label:"Packaging"},sidebar:"docs",previous:{title:"Building",permalink:"/docs/building"},next:{title:"Adding Assets",permalink:"/docs/adding-assets"}},c=[{value:"Building to Multiple Platforms",id:"building-to-multiple-platforms",children:[]},{value:"Running the Production Version of Your App",id:"running-the-production-version-of-your-app",children:[]},{value:"Debugging the Production Build",id:"debugging-the-production-build",children:[]}],u={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To package apps for the local platform:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn package\n")),(0,o.kt)("p",null,"The packaged app will be inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"release")," directory."),(0,o.kt)("h2",{id:"building-to-multiple-platforms"},"Building to Multiple Platforms"),(0,o.kt)("p",null,"First, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://www.electron.build/multi-platform-build"},"Multi Platform Build")," for dependencies."),(0,o.kt)("p",null,"Then,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn package-all\n")),(0,o.kt)("p",null,"To package apps with options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn package --[option]\n# Example: yarn package --mac\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can debug your production build with devtools by simply setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG_PROD")," env variable")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn cross-env DEBUG_PROD=true yarn package\n")),(0,o.kt)("h2",{id:"running-the-production-version-of-your-app"},"Running the Production Version of Your App"),(0,o.kt)("p",null,"Sometimes it is useful to run the production version of your app locally. This can be done by running ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start\n")),(0,o.kt)("h2",{id:"debugging-the-production-build"},"Debugging the Production Build"),(0,o.kt)("p",null,"If your production app isn't working as expected, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG_PROD")," env variable to build the necessary files and then start the app. It isn't necessary to package the app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn cross-env DEBUG_PROD=true yarn build\nyarn cross-env DEBUG_PROD=true yarn start\n")))}s.isMDXComponent=!0}}]);