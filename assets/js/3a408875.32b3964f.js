"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[372],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=s.createContext({}),i=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=i(e.components);return s.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=i(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return n?s.createElement(m,o(o({ref:t},l),{},{components:n})):s.createElement(m,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var i=2;i<r;i++)o[i]=n[i];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7850:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return l},default:function(){return d}});var s=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],u={},c="Cache",i={unversionedId:"features/requests/requests-cache",id:"features/requests/requests-cache",isDocsHomePage:!1,title:"Cache",description:"Using this feature, you can manage the cache status of API calls in your store. First, you need to install the package",source:"@site/docs/features/requests/requests-cache.mdx",sourceDirName:"features/requests",slug:"/features/requests/requests-cache",permalink:"/elf/docs/features/requests/requests-cache",editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/features/requests/requests-cache.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Status",permalink:"/elf/docs/features/requests/requests-status"},next:{title:"Data Source",permalink:"/elf/docs/features/requests/requests-data-source"}},l=[{value:"Queries",id:"queries",children:[{value:"<code>selectRequestStatus</code>",id:"selectrequeststatus",children:[]},{value:"<code>getRequestCache</code>",id:"getrequestcache",children:[]},{value:"<code>selectIsRequestCached</code>",id:"selectisrequestcached",children:[]}]},{value:"Mutations",id:"mutations",children:[{value:"<code>updateRequestStatus</code>",id:"updaterequeststatus",children:[]}]}],p={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cache"},"Cache"),(0,r.kt)("p",null,"Using this feature, you can manage the cache status of API calls in your store. First, you need to install the package\nby using the CLI command ",(0,r.kt)("inlineCode",{parentName:"p"},"elf-cli install")," and selecting the requests package, or via npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @ngneat/elf-requests\n")),(0,r.kt)("p",null,"To use this feature, provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"withRequestsCache")," props factory function in the ",(0,r.kt)("inlineCode",{parentName:"p"},"createState")," call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createState, Store } from '@ngneat/elf';\nimport { withEntities } from '@ngneat/elf-entities';\nimport { withRequestsCache } from '@ngneat/elf-requests';\n\ninterface Todo {\n  id: number;\n  label: string;\n}\n\nconst { state, config } = createState(\n  withEntities<Todo>(),\n  withRequestsCache()\n);\n\nconst todosStore = new Store({ name: 'todos', state, config });\n")),(0,r.kt)("p",null,"In your server call, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"skipWhileCached")," operator and pass a unique key to identify the request.\nThis enables skipping the API call if the passed key is located in the store cache.\nUse it in tandem with ",(0,r.kt)("inlineCode",{parentName:"p"},"updateRequestsCache"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { setRequestStatus } from '@ngneat/elf-requests';\n\nhttp.get(todosUrl).pipe(\n  tap((todos) => todosRepo.setEntities(todos)), // calls updateRequestsCache with the 'todos' key\n  skipWhileCached(todosRepo.store, 'todos')\n);\n")),(0,r.kt)("p",null,"Passing a value as the third parameter ensures the ",(0,r.kt)("inlineCode",{parentName:"p"},"store")," will only skip the API call if the value matches the\none passed. Values can be status can be 'none', 'partial' or 'full':"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { setRequestStatus } from '@ngneat/elf-requests';\n\nhttp.get(todosUrl).pipe(\n  tap((todos) => todosRepo.setEntities(todos)), // calls updateRequestsCache with the 'todos' key\n  skipWhileCached(todosRepo.store, 'todos', { value: 'partial' })\n);\n")),(0,r.kt)("p",null,"In addition to value, you can pass in the same object a returnSource which will be returned by the operator if the\nrequest is cached. "),(0,r.kt)("p",null,"You can monitor and change the request cache status for your APIs using the following queries and mutations:"),(0,r.kt)("h2",{id:"queries"},"Queries"),(0,r.kt)("h3",{id:"selectrequeststatus"},(0,r.kt)("inlineCode",{parentName:"h3"},"selectRequestStatus")),(0,r.kt)("p",null,"Select the cache status of the provided request key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectRequestCache } from '@ngneat/elf-requests';\n\ntodosCacheStatus$ = store.pipe(selectRequestCache('todos'));\n")),(0,r.kt)("h3",{id:"getrequestcache"},(0,r.kt)("inlineCode",{parentName:"h3"},"getRequestCache")),(0,r.kt)("p",null,"Get the cache status of the provided request key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { getRequestCache } from '@ngneat/elf-requests';\n\ntodosCacheStatus = store.query(getRequestCache('todos'));\n")),(0,r.kt)("h3",{id:"selectisrequestcached"},(0,r.kt)("inlineCode",{parentName:"h3"},"selectIsRequestCached")),(0,r.kt)("p",null,"Select whether the cache status of the provided request key isn't ",(0,r.kt)("inlineCode",{parentName:"p"},"none"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectIsRequestCached } from '@ngneat/elf-requests';\n\nisCached$ = store.pipe(selectIsRequestCached('todos'));\n")),(0,r.kt)("p",null,"Get whether the cache status of the provided request key isn't ",(0,r.kt)("inlineCode",{parentName:"p"},"none"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { isRequestCached } from '@ngneat/elf-requests';\n\nisCached = store.query(isRequestCached('todos'));\n")),(0,r.kt)("h2",{id:"mutations"},"Mutations"),(0,r.kt)("h3",{id:"updaterequeststatus"},(0,r.kt)("inlineCode",{parentName:"h3"},"updateRequestStatus")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { updateRequestCache } from '@ngneat/elf-requests';\n\nstore.reduce(updateRequestCache('todos'));\nstore.reduce(updateRequestCache('todos', 'partial'));\nstore.reduce(updateRequestCache('todos', 'none'));\nstore.reduce(updateRequestCache('todos', 'full', { ttl: 1000 }));\n")),(0,r.kt)("p",null,"And more:\n",(0,r.kt)("inlineCode",{parentName:"p"},"updateRequestsCache"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"resetRequestsCache"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"getRequestsCache"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"setRequestsCache")),(0,r.kt)("p",null,"If you pass ttl (time to live) when updating a cache record, that represents the time (in milliseconds) that key will\nhave the value that was set (afterwards it reverts to 'none')."))}d.isMDXComponent=!0}}]);