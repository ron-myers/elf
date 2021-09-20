"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[468],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7905:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={},c="CLI",p={unversionedId:"cli",id:"cli",isDocsHomePage:!1,title:"CLI",description:"Elf comes with a CLI that enables a fast and easy setup of your store. It offers the following commands:",source:"@site/docs/cli.md",sourceDirName:".",slug:"/cli",permalink:"/elf/docs/cli",editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/cli.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Using Immer",permalink:"/elf/docs/immer"},next:{title:"FAQ",permalink:"/elf/docs/faq"}},s=[{value:"Install",id:"install",children:[]},{value:"Repo",id:"repo",children:[{value:"Config",id:"config",children:[]},{value:"<code>repoTemplate</code>",id:"repotemplate",children:[]},{value:"<code>idKey</code>",id:"idkey",children:[]},{value:"<code>repoLibrary</code>",id:"repolibrary",children:[]},{value:"<code>plugins</code>",id:"plugins",children:[]}]}],u={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cli"},"CLI"),(0,o.kt)("p",null,"Elf comes with a CLI that enables a fast and easy setup of your store. It offers the following commands:"),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx @ngneat/elf-cli install\n")),(0,o.kt)("p",null,"Using the above command, you can choose which packages to install. Your package manager will be detected and used for installation."),(0,o.kt)("h2",{id:"repo"},"Repo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx @ngneat/elf-cli repo\n$ npx @ngneat/elf-cli repo --dry-run\n")),(0,o.kt)("p",null,"Using the above command, you can create a ",(0,o.kt)("inlineCode",{parentName:"p"},"repository")," file. All the boilerplate will be created for you based on which ",(0,o.kt)("em",{parentName:"p"},"features")," you select."),(0,o.kt)("h3",{id:"config"},"Config"),(0,o.kt)("p",null,"You can set the configuration by providing the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "elf": {\n    "cli": {\n      "repoTemplate": "class",\n      "idKey": "_id",\n      "repoLibrary": "state",\n      "plugins": []\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"repotemplate"},(0,o.kt)("inlineCode",{parentName:"h3"},"repoTemplate")),(0,o.kt)("p",null,"By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"repository")," file generates exported functions. If you prefer to use a class, for instance, when working with Angular, you can set this option to ",(0,o.kt)("inlineCode",{parentName:"p"},"class"),"."),(0,o.kt)("h3",{id:"idkey"},(0,o.kt)("inlineCode",{parentName:"h3"},"idKey")),(0,o.kt)("p",null,"The default ",(0,o.kt)("inlineCode",{parentName:"p"},"idKey")," for the package ",(0,o.kt)("inlineCode",{parentName:"p"},"@ngenat/elf-entities")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),". By setting this option, you can change it globally."),(0,o.kt)("h3",{id:"repolibrary"},(0,o.kt)("inlineCode",{parentName:"h3"},"repoLibrary")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"repository")," file is created by default at the root path you specify (i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},"flat"),"). If you set this option, you can specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"directory")," you want."),(0,o.kt)("h3",{id:"plugins"},(0,o.kt)("inlineCode",{parentName:"h3"},"plugins")),(0,o.kt)("p",null,"Specify which plugins you want to use. "),(0,o.kt)("h4",{id:"ngneatelf-cli-ng"},(0,o.kt)("inlineCode",{parentName:"h4"},"@ngneat/elf-cli-ng")),(0,o.kt)("p",null,"Install the package, and add the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "elf": {\n    "cli": {\n      "repoTemplate": "class",\n      "plugins": ["@ngneat/elf-cli-ng"]\n    }\n  }\n}\n')),(0,o.kt)("p",null,"The plugin will add the ",(0,o.kt)("inlineCode",{parentName:"p"},"Injectable")," decorator to the ",(0,o.kt)("inlineCode",{parentName:"p"},"repository")," class."))}d.isMDXComponent=!0}}]);