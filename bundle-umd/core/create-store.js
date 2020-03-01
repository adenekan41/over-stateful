import t from"./thunk.js";import e from"./store.js";export default(r={},o,...s)=>(e.reducers=o,e.state=r,e.getState=e,e.thunk=()=>t(),e.rest={...s},e);
