"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[724],{3905:function(e,t,i){i.d(t,{Zo:function(){return l},kt:function(){return v}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):c(c({},t),e)),i},l=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(i),v=r,m=p["".concat(o,".").concat(v)]||p[v]||u[v]||a;return i?n.createElement(m,c(c({ref:t},l),{},{components:i})):n.createElement(m,c({ref:t},l))}));function v(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,c=new Array(a);c[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var d=2;d<a;d++)c[d]=i[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},4994:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var n=i(7462),r=i(3366),a=(i(7294),i(3905)),c=["components"],s={},o="Active ID(s)",d={unversionedId:"features/entities/active-ids",id:"features/entities/active-ids",isDocsHomePage:!1,title:"Active ID(s)",description:"This feature requires the withEntities to be used in the Store. It lets you hold one or more IDs indicating the entities that are currently active. It is often useful",source:"@site/docs/features/entities/active-ids.md",sourceDirName:"features/entities",slug:"/features/entities/active-ids",permalink:"/elf/docs/features/entities/active-ids",editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/features/entities/active-ids.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"UI Entities",permalink:"/elf/docs/features/entities/ui-entities"},next:{title:"Status",permalink:"/elf/docs/features/requests/requests-status"}},l=[{value:"Active Id",id:"active-id",children:[{value:"Queries",id:"queries",children:[]},{value:"<code>selectActiveEntity</code>",id:"selectactiveentity",children:[]},{value:"<code>selectActiveId</code>",id:"selectactiveid",children:[]},{value:"<code>getActiveId</code>",id:"getactiveid",children:[]}]},{value:"Mutations",id:"mutations",children:[{value:"<code>setActiveId</code>",id:"setactiveid",children:[]}]},{value:"Active Ids",id:"active-ids-1",children:[]},{value:"Queries",id:"queries-1",children:[{value:"<code>selectActiveEntities</code>",id:"selectactiveentities",children:[]},{value:"<code>selectActiveIds</code>",id:"selectactiveids",children:[]},{value:"<code>getActiveIds</code>",id:"getactiveids",children:[]},{value:"Mutations",id:"mutations-1",children:[]},{value:"<code>setActiveIds</code>",id:"setactiveids",children:[]},{value:"<code>addActiveIds</code>",id:"addactiveids",children:[]},{value:"<code>toggleActiveIds</code>",id:"toggleactiveids",children:[]},{value:"<code>removeActiveIds</code>",id:"removeactiveids",children:[]}]}],u={toc:l};function p(e){var t=e.components,i=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"active-ids"},"Active ID(s)"),(0,a.kt)("p",null,"This feature requires the ",(0,a.kt)("inlineCode",{parentName:"p"},"withEntities")," to be used in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Store"),". It lets you hold one or more IDs indicating the entities that are currently active. It is often useful\nfor monitoring which entities the user is interacting with."),(0,a.kt)("h2",{id:"active-id"},"Active Id"),(0,a.kt)("p",null,"To use this feature, provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"withActiveId")," props factory function to ",(0,a.kt)("inlineCode",{parentName:"p"},"createState"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createState, Store } from '@ngneat/elf';\nimport { withEntities, withActiveId } from '@ngneat/elf-entities';\n\ninterface Todo {\n  id: number;\n  label: string;\n}\n\nconst { state, config } = createState(withEntities<Todo>(), withActiveId());\n\nconst todosStore = new Store({ name: 'todos', state, config });\n")),(0,a.kt)("p",null,"This will allow you to use the following ready-made mutations and queries:"),(0,a.kt)("h3",{id:"queries"},"Queries"),(0,a.kt)("h3",{id:"selectactiveentity"},(0,a.kt)("inlineCode",{parentName:"h3"},"selectActiveEntity")),(0,a.kt)("p",null,"Select the active entity:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectActiveEntity } from '@ngneat/elf-entities';\n\nconst active$ = todosStore.pipe(selectActiveEntity());\n")),(0,a.kt)("h3",{id:"selectactiveid"},(0,a.kt)("inlineCode",{parentName:"h3"},"selectActiveId")),(0,a.kt)("p",null,"Select the active id:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectActiveId } from '@ngneat/elf-entities';\n\nconst activeId$ = todosStore.pipe(selectActiveId());\n")),(0,a.kt)("h3",{id:"getactiveid"},(0,a.kt)("inlineCode",{parentName:"h3"},"getActiveId")),(0,a.kt)("p",null,"Get the active id:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { getActiveId } from '@ngneat/elf-entities';\n\nconst active = todosStore.query(getActiveId);\n")),(0,a.kt)("h2",{id:"mutations"},"Mutations"),(0,a.kt)("h3",{id:"setactiveid"},(0,a.kt)("inlineCode",{parentName:"h3"},"setActiveId")),(0,a.kt)("p",null,"Set the active id:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { setActiveId } from '@ngneat/elf-entities';\n\ntodosStore.reduce(setActiveId(id));\n")),(0,a.kt)("h2",{id:"active-ids-1"},"Active Ids"),(0,a.kt)("p",null,"To use this feature, provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"withActiveIds")," props factory function to ",(0,a.kt)("inlineCode",{parentName:"p"},"createState"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createState, Store } from '@ngneat/elf';\nimport { withEntities, withActiveIds } from '@ngneat/elf-entities';\n\ninterface Todo {\n  id: number;\n  label: string;\n}\n\nconst { state, config } = createState(withEntities<Todo>(), withActiveIds());\n\nconst todosStore = new Store({ name: 'todos', state, config });\n")),(0,a.kt)("p",null,"This will allow you to use the following ready-made mutations and queries:"),(0,a.kt)("h2",{id:"queries-1"},"Queries"),(0,a.kt)("h3",{id:"selectactiveentities"},(0,a.kt)("inlineCode",{parentName:"h3"},"selectActiveEntities")),(0,a.kt)("p",null,"Select the active entities:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectActiveEntities } from '@ngneat/elf-entities';\n\nconst actives$ = todosStore.pipe(selectActiveEntities());\n")),(0,a.kt)("h3",{id:"selectactiveids"},(0,a.kt)("inlineCode",{parentName:"h3"},"selectActiveIds")),(0,a.kt)("p",null,"Select the active ids:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectActiveIds } from '@ngneat/elf-entities';\n\nconst activeIds$ = todosStore.pipe(selectActiveIds());\n")),(0,a.kt)("h3",{id:"getactiveids"},(0,a.kt)("inlineCode",{parentName:"h3"},"getActiveIds")),(0,a.kt)("p",null,"Get active ids:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { getActiveIds } from '@ngneat/elf-entities';\n\nconst actives = todosStore.query(getActiveIds);\n")),(0,a.kt)("h3",{id:"mutations-1"},"Mutations"),(0,a.kt)("h3",{id:"setactiveids"},(0,a.kt)("inlineCode",{parentName:"h3"},"setActiveIds")),(0,a.kt)("p",null,"Set the active ids:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { setActiveIds } from '@ngneat/elf-entities';\n\ntodosStore.reduce(setActiveIds([id, id]));\n")),(0,a.kt)("h3",{id:"addactiveids"},(0,a.kt)("inlineCode",{parentName:"h3"},"addActiveIds")),(0,a.kt)("p",null,"Add active ids:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { addActiveIds } from '@ngneat/elf-entities';\n\ntodosStore.reduce(addActiveIds([id, id]));\n")),(0,a.kt)("h3",{id:"toggleactiveids"},(0,a.kt)("inlineCode",{parentName:"h3"},"toggleActiveIds")),(0,a.kt)("p",null,"Toggle active ids:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { toggleActiveIds } from '@ngneat/elf-entities';\n\ntodosStore.reduce(toggleActiveIds([id, id]));\n")),(0,a.kt)("h3",{id:"removeactiveids"},(0,a.kt)("inlineCode",{parentName:"h3"},"removeActiveIds")),(0,a.kt)("p",null,"Remove active ids:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { removeActiveIds } from '@ngneat/elf-entities';\n\ntodosStore.reduce(removeActiveIds([id, id]));\n")))}p.isMDXComponent=!0}}]);