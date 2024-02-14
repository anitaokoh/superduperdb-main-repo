"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3159],{84113:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=r(85893),t=r(11151);const s={sidebar_position:2},d="Inserting data",a={id:"docs/walkthrough/inserting_data",title:"Inserting data",description:"After configuring and connecting, you're ready to insert some data.",source:"@site/content/docs/walkthrough/inserting_data.md",sourceDirName:"docs/walkthrough",slug:"/docs/walkthrough/inserting_data",permalink:"/docs/docs/walkthrough/inserting_data",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/walkthrough/inserting_data.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setting up tables and encodings",permalink:"/docs/docs/walkthrough/data_encodings_and_schemas"},next:{title:"Selecting data",permalink:"/docs/docs/walkthrough/selecting_data"}},i={},c=[{value:"SuperDuperDB data insertion",id:"superduperdb-data-insertion",level:2},{value:"MongoDB",id:"mongodb",level:3},{value:"SQL",id:"sql",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"inserting-data",children:"Inserting data"}),"\n",(0,o.jsx)(n.p,{children:"After configuring and connecting, you're ready to insert some data."}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.code,{children:"superduperdb"}),", data may be inserted using the connection ",(0,o.jsx)(n.code,{children:"db"}),",\nor using a third-parth client."]}),"\n",(0,o.jsx)(n.h2,{id:"superduperdb-data-insertion",children:"SuperDuperDB data insertion"}),"\n",(0,o.jsxs)(n.p,{children:["Here's a guide to using ",(0,o.jsx)(n.code,{children:"db"})," to insert data."]}),"\n",(0,o.jsx)(n.h3,{id:"mongodb",children:"MongoDB"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from superduperdb.backends.mongodb import Collection\nfrom superduperdb import Document\n\ndb.execute(\n    Collection('<collection-name>')\n        .insert_many([Document(record) for record in records])\n)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"records"})," may be any dictionaries supported by MongoDB, as well as dictionaries\ncontaining items which may converted to ",(0,o.jsx)(n.code,{children:"bytes"})," strings."]}),"\n",(0,o.jsxs)(n.p,{children:["Other MongoDB clients may also be used for insertion. Here, one needs to explicitly\ntake care of conversion of data to ",(0,o.jsx)(n.code,{children:"bytes"})," wherever ",(0,o.jsx)(n.code,{children:"Encoder"})," instances have been used.\nFor instance, using ",(0,o.jsx)(n.code,{children:"pymongo"}),", one may do:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from superduperdb import Document\n\ncollection = pymongo.MongoClient(uri='<your-database-uri>').my_database['<collection-name>']\ncollection.insert_many([\n    Document(record).encode() for record in records\n])\n\n"})}),"\n",(0,o.jsx)(n.h3,{id:"sql",children:"SQL"}),"\n",(0,o.jsx)(n.p,{children:"Similarly"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from superduperdb.backends.ibis import Table\n\ndb.execute(\n    Table('<table-name>')\n        .insert([Document(record) for record in records])\n)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"records"})," must conform in their keys to the columns set by the ",(0,o.jsx)(n.code,{children:"Schema"})," set."]}),"\n",(0,o.jsxs)(n.p,{children:["Similarly, you may also use ",(0,o.jsx)(n.code,{children:"pandas"})," dataframes:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from superduperdb.backends.ibis import Table\nimport pandas\n\ndb.execute(\n    Table('<table-name>')\n        .insert(pandas.DataFrame(records))\n)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Native clients may also be used to insert data. Here, one needs to explicitly\ntake care of conversion of data to ",(0,o.jsx)(n.code,{children:"bytes"})," wherever ",(0,o.jsx)(n.code,{children:"Encoder"})," instances have been used.\nFor instance, in DuckDB, one may do:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import duckdb\nimport pandas\n\nmy_df = pandas.DataFrame([Document(r).encode() for r in records])\n\nduckdb.sql("INSERT INTO <table-name> SELECT * FROM my_df")\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>d});var o=r(67294);const t={},s=o.createContext(t);function d(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);