"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5804],{68895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var r=n(85893),s=n(11151);const a={sidebar_position:5},o="Selecting data",d={id:"docs/walkthrough/selecting_data",title:"Selecting data",description:"After inserting data to superduperdb, it may be queried with a Select query.",source:"@site/content/docs/walkthrough/selecting_data.md",sourceDirName:"docs/walkthrough",slug:"/docs/walkthrough/selecting_data",permalink:"/docs/docs/walkthrough/selecting_data",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/walkthrough/selecting_data.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Working with and inserting large pieces of data",permalink:"/docs/docs/walkthrough/using_hybrid_storage_to_handle_large_data_blobs"},next:{title:"Adding Models to the Database",permalink:"/docs/docs/walkthrough/ai_models"}},i={},c=[{value:"MongoDB",id:"mongodb",level:2},{value:"Find",id:"find",level:3},{value:"Aggregate",id:"aggregate",level:3},{value:"SQL",id:"sql",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"selecting-data",children:"Selecting data"}),"\n",(0,r.jsxs)(t.p,{children:["After inserting data to ",(0,r.jsx)(t.code,{children:"superduperdb"}),", it may be queried with a ",(0,r.jsx)(t.code,{children:"Select"})," query."]}),"\n",(0,r.jsx)(t.h2,{id:"mongodb",children:"MongoDB"}),"\n",(0,r.jsxs)(t.p,{children:["MongoDB offers two types of basic ",(0,r.jsx)(t.code,{children:"Select"})," query, which reflect the possibilites supported\nby the ",(0,r.jsx)(t.code,{children:"pymongo"})," query API:"]}),"\n",(0,r.jsx)(t.h3,{id:"find",children:"Find"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"results = collection.find({}, {}).limit(20)      # type(results) == superduperdb.base.cursor.SuperDuperCursor\nfor r in results:\n    print(r)        # type(r) == Document\n    print(r.unpack())       # type(r.unpack()) dict\n"})}),"\n",(0,r.jsx)(t.h3,{id:"aggregate",children:"Aggregate"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"results = collection.aggregate([\n    {'$match': {}},\n    {'$project': {'_id': 0}}\n    ...\n])\n"})}),"\n",(0,r.jsx)(t.h2,{id:"sql",children:"SQL"}),"\n",(0,r.jsxs)(t.p,{children:["Most ",(0,r.jsx)(t.a,{href:"https://ibis-project.org/",children:(0,r.jsx)(t.code,{children:"ibis"})})," read-query types are supported. An important requirement, is that tables referred to have\nbeen ",(0,r.jsx)(t.a,{href:"/docs/docs/walkthrough/data_encodings_and_schemas",children:"previously defined"})," and loaded in order to create a query:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"t = db.load('table', 'my_table')\nresults = db.execute(t.select('audio').limit(20))        #   SuperDuperCursor\nresults = results.as_pandas()     # convert to pandas.DataFrame if desired\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var r=n(67294);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);