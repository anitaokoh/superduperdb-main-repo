"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[6581],{92322:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var o=s(85893),t=s(11151);const r={},i="SuperDuperDB: cluster usage",c={id:"use_cases/productionization/sandbox-example",title:"SuperDuperDB: cluster usage",description:'SuperDuperDB allows developers, on the one hand to experiment and setup models quickly in scripts and notebooks, and on the other hand deploy persistent services, which are intended to "always" be on. These persistent services are:',source:"@site/content/use_cases/productionization/sandbox-example.md",sourceDirName:"use_cases/productionization",slug:"/use_cases/productionization/sandbox-example",permalink:"/docs/use_cases/productionization/sandbox-example",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/use_cases/productionization/sandbox-example.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Productionization",permalink:"/docs/category/productionization-1"}},d={},a=[];function l(e){const n={blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"superduperdb-cluster-usage",children:"SuperDuperDB: cluster usage"}),"\n",(0,o.jsx)(n.p,{children:'SuperDuperDB allows developers, on the one hand to experiment and setup models quickly in scripts and notebooks, and on the other hand deploy persistent services, which are intended to "always" be on. These persistent services are:'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Dask scheduler"}),"\n",(0,o.jsx)(n.li,{children:"Dask workers"}),"\n",(0,o.jsx)(n.li,{children:"Vector-searcher service"}),"\n",(0,o.jsx)(n.li,{children:"Change-data-capture (CDC) service"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(39228).Z+"",width:"3297",height:"2400"})}),"\n",(0,o.jsxs)(n.p,{children:["To set up ",(0,o.jsx)(n.code,{children:"superduperdb"})," to use this cluster mode, it's necessary to add explicit configurations\nfor each of these components. The following configuration does that, as well as enabling a pre-configured\ncommunity edition MongoDB database:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"data_backend: mongodb://superduper:superduper@mongodb:27017/test_db\nartifact_store: filesystem://./data\ncluster:\n  cdc: http://cdc:8001\n  compute: dask+tcp://scheduler:8786\n  vector_search: http://vector-search:8000\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Add this configuration in ",(0,o.jsx)(n.code,{children:"/.superduperdb/config.yaml"}),", where ",(0,o.jsx)(n.code,{children:"/"})," is the root of your project."]}),"\n",(0,o.jsxs)(n.p,{children:["Once this configuration has been added, you're ready to use the ",(0,o.jsx)(n.code,{children:"superduperdb"})," sandbox environment, which uses\n",(0,o.jsx)(n.code,{children:"docker-compose"})," to deploy:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Standalone replica-set of MongoDB community edition"}),"\n",(0,o.jsx)(n.li,{children:"Dask scheduler"}),"\n",(0,o.jsx)(n.li,{children:"Dask workers"}),"\n",(0,o.jsx)(n.li,{children:"Vector-searcher service"}),"\n",(0,o.jsx)(n.li,{children:"Change-data-capture (CDC) service"}),"\n",(0,o.jsx)(n.li,{children:"Jupyter notebook service"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["To build the ",(0,o.jsx)(n.code,{children:"sandbox"})," image:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"make testenv_image\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["If you want to install additional ",(0,o.jsx)(n.code,{children:"pip"})," dependencies in the image, you have to list them in ",(0,o.jsx)(n.code,{children:"requirements.txt"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The listed dependencies may refer to:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["standalone packages (e.g ",(0,o.jsx)(n.code,{children:"tensorflow>=2.15.0"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["dependency groups listed in ",(0,o.jsx)(n.code,{children:"pyproject.toml"})," (e.g ",(0,o.jsx)(n.code,{children:".[dev]"}),")"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Then start the environment with:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"make testenv_init\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This last command starts containers for each of the above services with ",(0,o.jsx)(n.code,{children:"docker-compose"}),". You should see a bunch of logs for each service (mainly MongoDB)."]}),"\n",(0,o.jsx)(n.p,{children:"Once you have carried out these steps, you are ready to complete the rest of this notebook, which focuses on a implementing\na production style implementation of vector-search."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"import os\n\n# move to the root of the project (assumes starts in `/examples`)\nos.chdir('../')\n\nfrom superduperdb import CFG\n\n# check that config has been properly set-up\nassert CFG.data_backend == 'mongodb://superduper:superduper@mongodb:27017/test_db'\n"})}),"\n",(0,o.jsx)(n.p,{children:"We'll be using MongoDB to store the vectors and data:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from superduperdb.backends.mongodb import Collection\nfrom superduperdb import superduper\n\ndb = superduper()\ndoc_collection = Collection('documents')\n"})}),"\n",(0,o.jsxs)(n.p,{children:["We've already prepared some data which was scraped from the ",(0,o.jsx)(n.code,{children:"pymongo"})," query API. You can download it\nin the next cell:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"!curl -O https://superduperdb-public.s3.eu-west-1.amazonaws.com/pymongo.json\n\nimport json\n\nwith open('pymongo.json') as f:\n    data = json.load(f)\n\ndata[0]\n"})}),"\n",(0,o.jsx)(n.p,{children:"Let's insert this data:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from superduperdb import Document\n\nout, G = db.execute(\n    doc_collection.insert_many([Document(r) for r in data[:-100]])\n)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["We'll use a ",(0,o.jsx)(n.code,{children:"sentence-transformers"})," model to calculate the embeddings. Here's how to wrap the model\nso that it works with ",(0,o.jsx)(n.code,{children:"superduperdb"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"import sentence_transformers\nfrom superduperdb import Model, vector\n\nmodel = Model(\n   identifier='all-MiniLM-L6-v2',\n   object=sentence_transformers.SentenceTransformer('all-MiniLM-L6-v2'),\n   encoder=vector(shape=(384,)),\n   predict_method='encode',           # Specify the prediction method\n   postprocess=lambda x: x.tolist(),  # Define postprocessing function\n   batch_predict=True,                # Generate predictions for a set of observations all at once \n)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now let's create the vector-search component:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from superduperdb import Listener, VectorIndex\n\njobs, vi = db.add(\n    VectorIndex(\n        identifier=f'pymongo-docs-{model.identifier}',\n        indexing_listener=Listener(\n            select=doc_collection.find(),\n            key='value',\n            model=model,\n            predict_kwargs={'max_chunk_size': 1000},\n        ),\n    )\n)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This command creates a job on ",(0,o.jsx)(n.code,{children:"dask"})," to calculate the vectors and save them in the database. You can\nfollow the ",(0,o.jsx)(n.code,{children:"stdout"})," of this job with this command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"jobs[0].watch()\n"})}),"\n",(0,o.jsx)(n.p,{children:"After a few moments, you'll be able to verify that the vectors have been saved in the documents:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"db.execute(doc_collection.find_one())\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Let's test a similarity/ vector search using the hybrid query-API of ",(0,o.jsx)(n.code,{children:"superduperdb"}),". This search\ndispatches one part off to the vector-search server (running on port 8001) and the other (classical) part to MongoDB\nthe results are combined by ",(0,o.jsx)(n.code,{children:"superduperdb"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from IPython.display import Markdown\n\nresult = sorted(db.execute(\n    doc_collection\n        .like(Document({'value': 'Aggregate'}), n=10, vector_index=f'pymongo-docs-{model.identifier}')\n        .find({}, {'_outputs': 0})\n), key=lambda r: -r['score'])\n\n# Display a horizontal line\ndisplay(Markdown('---'))\n\n# Iterate through the query results and display them\nfor r in result:\n    # Display the document's parent and res values in a formatted way\n    display(Markdown(f'### `{r[\"parent\"] + \".\" if r[\"parent\"] else \"\"}{r[\"res\"]}`'))\n    \n    # Display the value of the document\n    display(Markdown(r['value']))\n    \n    # Display a horizontal line\n    display(Markdown('---'))\n"})}),"\n",(0,o.jsx)(n.p,{children:"One of the great things about this distributed setup, is that now allows data to be inserted into the service via other\nMongoDB clients, even from other programming languages and applications."}),"\n",(0,o.jsxs)(n.p,{children:["We show-case this here, by inserting the rest of the data using the official Python MongoDB driver ",(0,o.jsx)(n.code,{children:"pymongo"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"This cell will update the models, even if you restart the program:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"import pymongo\n\ncoll = pymongo.MongoClient('mongodb://superduper:superduper@mongodb:27017/test_db').test_db.documents\n\ncoll.insert_many(data[-100:])\n"})}),"\n",(0,o.jsx)(n.p,{children:"To get an idea what is happening, you can view the logs of the CDC container on\nyour host by executing this command in a terminal:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker logs -n 20 testenv_cdc_1\n"})}),"\n",(0,o.jsx)(n.p,{children:"Note this won't work inside this notebook since it's running in its own container."}),"\n",(0,o.jsxs)(n.p,{children:["The CDC service should have captured the changes created with the ",(0,o.jsx)(n.code,{children:"pymongo"})," insert, and has submitted a new job(s)\nto the ",(0,o.jsx)(n.code,{children:"dask"})," cluster."]}),"\n",(0,o.jsx)(n.p,{children:"You can confirm that another job has been created and executed:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"db.metadata.show_jobs()\n"})}),"\n",(0,o.jsxs)(n.p,{children:["We can now check that all of the outputs (including those inserted via the ",(0,o.jsx)(n.code,{children:"pymongo"})," client) have been populated\nby the system."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"db.execute(doc_collection.count_documents({'_outputs': {'$exists': 1}}))\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},39228:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/light-a62712fa65d77075618b2805c49a084a.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>i});var o=s(67294);const t={},r=o.createContext(t);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);