const t=new Proxy({},{get:function(t,e){return e in t?t[e]:"state"}});export default t;
