(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var o=n(3),r=n(8),s=(n(0),n(111)),a={id:"component-tests",title:"Component Tests",sidebar_label:"Component Tests"},i={unversionedId:"component-tests",id:"component-tests",isDocsHomePage:!1,title:"Component Tests",description:"Component tests in ERB use Jest and Enzyme. While Jest is popular for React testing, it is also capable of testing Node applications as well. Enzyme provides some utilities that make it easier to test React applications.",source:"@site/docs/component-tests.md",slug:"/component-tests",permalink:"/docs/component-tests",version:"current",sidebar_label:"Component Tests",sidebar:"docs",previous:{title:"Styling",permalink:"/docs/styling"},next:{title:"Continuous Integration (CI)",permalink:"/docs/ci"}},c=[{value:"Writing Component Tests",id:"writing-component-tests",children:[{value:"Running Tests",id:"running-tests",children:[]},{value:"Snapshot Tests",id:"snapshot-tests",children:[]},{value:"Watching Tests",id:"watching-tests",children:[]}]}],p={rightToc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Component tests in ERB use ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://jestjs.io"}),"Jest")," and ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/airbnb/enzyme"}),"Enzyme"),". While Jest is popular for React testing, it is also capable of testing Node applications as well. Enzyme provides some utilities that make it easier to test React applications."),Object(s.b)("h2",{id:"writing-component-tests"},"Writing Component Tests"),Object(s.b)("p",null,"By convention, all component test modules have the following filename suffix: ",Object(s.b)("inlineCode",{parentName:"p"},".spec.js"),". An example of test module filename would be ",Object(s.b)("inlineCode",{parentName:"p"},"Counter.spec.js"),"."),Object(s.b)("p",null,"We start by writing a function that will setup the actions of our component and importing the necessary modules:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:'title="tests/Counter.spec.js"',title:'"tests/Counter.spec.js"'}),"import { spy } from 'sinon';\nimport React from 'react';\nimport Enzyme, { shallow } from 'enzyme';\nimport Adapter from 'enzyme-adapter-react-16';\nimport renderer from 'react-test-renderer';\nimport Counter from '../../app/components/Counter';\n\nEnzyme.configure({ adapter: new Adapter() });\nfunction setup() {\n  const actions = {\n    increment: spy(),\n    incrementIfOdd: spy(),\n    incrementAsync: spy(),\n    decrement: spy()\n  };\n  const component = shallow(<Counter counter={1} {...actions} />);\n  return {\n    component,\n    actions,\n    buttons: component.find('button'),\n    p: component.find('.counter')\n  };\n}\n")),Object(s.b)("p",null,"Now we describe a set of tests with ",Object(s.b)("inlineCode",{parentName:"p"},"describe()")," and describe the test itself with ",Object(s.b)("inlineCode",{parentName:"p"},"it()"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:'title="tests/Counter.spec.js"',title:'"tests/Counter.spec.js"'}),"// --snip--\n\ndescribe('Counter Component', () => {\n  it('should match exact snapshot', () => {\n    const { actions } = setup();\n    const counter = (\n      <div>\n        <Router>\n          <Counter counter={1} {...actions} />\n        </Router>\n      </div>\n    );\n    const tree = renderer.create(counter).toJSON();\n\n    expect(tree).toMatchSnapshot();\n  });\n});\n")),Object(s.b)("h3",{id:"running-tests"},"Running Tests"),Object(s.b)("p",null,"Tests can be run by running ",Object(s.b)("inlineCode",{parentName:"p"},"yarn test"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"yarn test\n")),Object(s.b)("h3",{id:"snapshot-tests"},"Snapshot Tests"),Object(s.b)("p",null,"Snapshot tests are probably one of the most powerful features of Jest. With them, you can easily capture the current state of an object and test against that state in future executions of the test. For more details on this, see Jest's ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/snapshot-testing"}),"Snapshot Testing docs"),"."),Object(s.b)("p",null,"After adding a new test to ERB, run ",Object(s.b)("inlineCode",{parentName:"p"},"yarn test -u"),". This create a new snapshot if one does not exist already or it will update an existing one."),Object(s.b)("h3",{id:"watching-tests"},"Watching Tests"),Object(s.b)("p",null,"Suppose you are making change to React components and you want to see if components have broken while you are making changes. Running ",Object(s.b)("inlineCode",{parentName:"p"},"yarn test -w")," will run tests all the tests that are affected by the changes made to the React components."))}l.isMDXComponent=!0},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),b=o,d=u["".concat(a,".").concat(b)]||u[b]||m[b]||s;return n?r.a.createElement(d,i(i({ref:t},p),{},{components:n})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);