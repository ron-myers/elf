"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[114],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(n),u=r,m=g["".concat(s,".").concat(u)]||g[u]||d[u]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5322:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="Pagination",p={unversionedId:"features/pagination",id:"features/pagination",isDocsHomePage:!1,title:"Pagination",description:"In many cases - for example, when working with very large data-sets - we don't want to work with the full collection in memory. Instead server-side paging is used, where the server sends just a single page at a time.",source:"@site/docs/features/pagination.mdx",sourceDirName:"features",slug:"/features/pagination",permalink:"/elf/docs/features/pagination",editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/features/pagination.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Data Source",permalink:"/elf/docs/features/requests/requests-data-source"},next:{title:"Persist State",permalink:"/elf/docs/features/persist-state"}},c=[{value:"Queries",id:"queries",children:[{value:"<code>selectCurrentPageEntities</code>",id:"selectcurrentpageentities",children:[]},{value:"<code>selectCurrentPageEntities</code>",id:"selectcurrentpageentities-1",children:[]},{value:"<code>selectHasPage</code>",id:"selecthaspage",children:[]},{value:"<code>hasPage</code>",id:"haspage",children:[]},{value:"<code>selectPaginationData</code>",id:"selectpaginationdata",children:[]},{value:"<code>getPaginationData</code>",id:"getpaginationdata",children:[]}]},{value:"Mutations",id:"mutations",children:[{value:"<code>setCurrentPage</code>",id:"setcurrentpage",children:[]},{value:"<code>setPage</code>",id:"setpage",children:[]},{value:"<code>updatePaginationData</code>",id:"updatepaginationdata",children:[]},{value:"<code>deletePage</code>",id:"deletepage",children:[]},{value:"<code>deleteAllPages</code>",id:"deleteallpages",children:[]}]}],d={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pagination"},"Pagination"),(0,i.kt)("p",null,"In many cases - for example, when working with very large data-sets - we don't want to work with the full collection in memory. Instead server-side paging is used, where the server sends just a single page at a time."),(0,i.kt)("p",null,"Usually, we also want to cache pages that already have been fetched, in order to spare the need for an additional request."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This feature requires ",(0,i.kt)("inlineCode",{parentName:"p"},"@ngneat/elf-entities")))),(0,i.kt)("p",null,"Using this feature, you can manage pagination by using the store. First, you need to install the package by using the CLI command or npm:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @ngneat/elf-pagination\n")),(0,i.kt)("p",null,"To use this feature, provides the ",(0,i.kt)("inlineCode",{parentName:"p"},"withPagination")," props factory function to ",(0,i.kt)("inlineCode",{parentName:"p"},"createState"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createState, Store } from '@ngneat/elf';\nimport { withEntities } from '@ngneat/elf-entities';\nimport { withPagination } from '@ngneat/elf-pagination';\n\ninterface Todo {\n  id: number;\n  label: string;\n}\n\nconst { state, config } = createState(withEntities<Todo>(), withPagination());\n\nconst todosStore = new Store({ name: 'todos', state, config });\n")),(0,i.kt)("p",null,"Call ",(0,i.kt)("inlineCode",{parentName:"p"},"updatePaginationData()")," with a configuration object that determines the various pagination settings, and call ",(0,i.kt)("inlineCode",{parentName:"p"},"setPage()")," whenever you want to define the ",(0,i.kt)("inlineCode",{parentName:"p"},"ids")," that belong to a certain page number."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"todosStore.reduce(\n  addEntities(todos),\n  updatePaginationData({\n    currentPage: 1,\n    perPage: 10,\n    total: 96,\n    lastPage: 10,\n  }),\n  setPage(\n    1,\n    data.map((c) => c.id)\n  )\n);\n")),(0,i.kt)("p",null,"In your server calls, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"skipWhilePageExists")," operator, which enables you to skip server calls\nif the page exists in the store:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { skipWhilePageExists } from '@ngneat/elf-pagination';\n\nhttp.get(todosUrl).pipe(\n  tap((todos) => todosRepo.setEntities(todos)),\n  skipWhilePageExists(1)\n);\n")),(0,i.kt)("p",null,"Additional queries and mutations available are:"),(0,i.kt)("h2",{id:"queries"},"Queries"),(0,i.kt)("h3",{id:"selectcurrentpageentities"},(0,i.kt)("inlineCode",{parentName:"h3"},"selectCurrentPageEntities")),(0,i.kt)("p",null,"Select the current page entities:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectCurrentPageEntities } from '@ngneat/elf-pagination';\n\ntodos$ = store.pipe(selectCurrentPageEntities());\n")),(0,i.kt)("h3",{id:"selectcurrentpageentities-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"selectCurrentPageEntities")),(0,i.kt)("p",null,"Select the current page number (by default it's page 1):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectCurrentPage } from '@ngneat/elf-pagination';\n\ncurrentPage$ = store.pipe(selectCurrentPage());\n")),(0,i.kt)("h3",{id:"selecthaspage"},(0,i.kt)("inlineCode",{parentName:"h3"},"selectHasPage")),(0,i.kt)("p",null,"Select whether the page exists:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectHasPage } from '@ngneat/elf-pagination';\n\nhasPage$ = store.pipe(selectHasPage(1));\n")),(0,i.kt)("h3",{id:"haspage"},(0,i.kt)("inlineCode",{parentName:"h3"},"hasPage")),(0,i.kt)("p",null,"Get whether the page exists:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { hasPage } from '@ngneat/elf-pagination';\n\nhasPage = store.query(hasPage(1));\n")),(0,i.kt)("h3",{id:"selectpaginationdata"},(0,i.kt)("inlineCode",{parentName:"h3"},"selectPaginationData")),(0,i.kt)("p",null,"Select the pagination data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectPaginationData } from '@ngneat/elf-pagination';\n\ndata$ = store.pipe(selectPaginationData());\n")),(0,i.kt)("h3",{id:"getpaginationdata"},(0,i.kt)("inlineCode",{parentName:"h3"},"getPaginationData")),(0,i.kt)("p",null,"Get pagination data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { getPaginationData } from '@ngneat/elf-pagination';\n\ndata = store.query(getPaginationData());\n")),(0,i.kt)("h2",{id:"mutations"},"Mutations"),(0,i.kt)("h3",{id:"setcurrentpage"},(0,i.kt)("inlineCode",{parentName:"h3"},"setCurrentPage")),(0,i.kt)("p",null,"Set the current page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { setCurrentPage } from '@ngneat/elf-pagination';\n\nstore.reduce(setCurrentPage(2));\n")),(0,i.kt)("h3",{id:"setpage"},(0,i.kt)("inlineCode",{parentName:"h3"},"setPage")),(0,i.kt)("p",null,"Set the ids belongs to a page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { setPage } from '@ngneat/elf-pagination';\n\nstore.reduce(setPage(2, [id, id, id]));\n")),(0,i.kt)("h3",{id:"updatepaginationdata"},(0,i.kt)("inlineCode",{parentName:"h3"},"updatePaginationData")),(0,i.kt)("p",null,"Set the current page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { updatePaginationData } from '@ngneat/elf-pagination';\n\nstore.reduce(\n  updatePaginationData({\n    currentPage: 1,\n    perPage: 10,\n    total: 96,\n    lastPage: 10,\n  })\n);\n")),(0,i.kt)("h3",{id:"deletepage"},(0,i.kt)("inlineCode",{parentName:"h3"},"deletePage")),(0,i.kt)("p",null,"Delete a page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { deletePage } from '@ngneat/elf-pagination';\n\nstore.reduce(deletePage(2));\n")),(0,i.kt)("h3",{id:"deleteallpages"},(0,i.kt)("inlineCode",{parentName:"h3"},"deleteAllPages")),(0,i.kt)("p",null,"Delete all pages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { deleteAllPages } from '@ngneat/elf-pagination';\n\nstore.reduce(deleteAllPages(2));\n")))}g.isMDXComponent=!0}}]);