import{b as U}from"./chunk-5X3OJEGS.js";import"./chunk-TA2WJRWE.js";import{a as K}from"./chunk-OIDVRMBH.js";import{e as W}from"./chunk-SHN64QUP.js";import"./chunk-LMEKVOIJ.js";import{Tb as G}from"./chunk-C6OTBWHR.js";import{Jb as P,Vd as C,Xb as b,Yb as J,Yd as s,Zb as q,ec as R,gb as z,lb as L,mb as B,tb as F}from"./chunk-JURWQNJ7.js";var Q=-Date.now();function p(t){let o=new Date().toString();if(!t)return o;let e=t.getAttribute("add_date");return e?new Date(Number(e)*1e3).toString():o}function v(t){return t.textContent||""}function V(t){return t.getAttribute("href")||""}function X(t){return t.getAttribute("icon")||""}var S=p();function O(t){let o=[];for(let e=0;e<t.childElementCount;e++){let i=t.childNodes[e];if(i&&i.nodeName==="DT"){let n=i.firstElementChild;if(!n||n.nodeName!=="A")continue;let r=v(n),c=p(n),a=X(n),h=V(n);o.push({name:r,createdAt:c,icon:a,url:h,tags:[],desc:"",rate:5,id:Q+=1,breadcrumb:[]})}}return o}function Y(t){let o=JSON.parse(JSON.stringify(C)),e=[],i=document.createElement("div");i.innerHTML=t;let n=i.querySelector("dl dl");if(!n)return{message:"\u672A\u627E\u5230dl dl\u8282\u70B9"};let r=0,c=0,a=0;try{for(let u=0;u<n.childElementCount;u++){let d=n.childNodes[u];if(d&&d.nodeName==="DT"){let l=d.querySelector("h3");if(!l)continue;r++;let _=v(l),y=p(l);e.push({title:_,createdAt:y,icon:"",nav:[]}),c=0;let f=d.querySelector("dl"),H=O(f);H.length>0&&(c++,e[r-1].nav.push({createdAt:S,title:s("_uncategorized"),nav:[{title:s("_uncategorized"),nav:H}]}));for(let w=0;w<f.childElementCount;w++){let N=f.childNodes[w];if(N&&N.nodeName==="DT"){let A=N.querySelector("h3");if(!A)continue;c++;let Z=v(A),ee=p(A);e[r-1].nav.push({title:Z,createdAt:ee,icon:"",nav:[]}),a=0;let E=N.querySelector("dl"),$=O(E);$.length>0&&(a++,e[r-1].nav[c-1].nav.push({createdAt:S,title:s("_uncategorized"),nav:$}));for(let D=0;D<E.childElementCount;D++){let k=E.childNodes[D];if(k&&k.nodeName==="DT"){let T=k.querySelector("h3");if(!T)continue;a++;let te=v(T),ne=p(T);e[r-1].nav[c-1].nav.push({title:te,createdAt:ne,nav:[],icon:""});let j=k.querySelector("dl");for(let I=0;I<j.childElementCount;I++){let M=j.childNodes[I];if(M&&M.nodeName==="DT"){let g=M.querySelector("a");if(!g)continue;let oe=v(g),ie=p(g),re=X(g),ae=V(g);e[r-1].nav[c-1].nav[a-1].nav.push({name:oe,createdAt:ie,url:ae,desc:"",tags:[],rate:5,top:!1,icon:re,id:Q+=1,breadcrumb:[]})}}}}}}}}let m=O(n);m.length>0&&e.push({title:s("_uncategorized"),createdAt:S,nav:[{createdAt:S,title:s("_uncategorized"),nav:[{title:s("_uncategorized"),nav:m}]}]})}catch(m){throw console.log(m),m}function h(m,u){for(let d=0;d<m.length;d++){let l=m[d],_=l.title||l.url,y=u.findIndex(f=>(f.title||f.url)===_);y!==-1?Array.isArray(l.nav)&&h(l.nav,u[y].nav):u.push(l)}}return h(e,o),o}var x=class t{constructor(o,e){this.message=o;this.notification=e}$t=s;websiteList=C;ngOnInit(){}onBookChange(o){let e=this,{files:i}=o.target;if(i.length<=0)return;let n=i[0],r=new FileReader;r.readAsText(n),r.onload=function(){let c=this.result;try{let a=Y(c);Array.isArray(a)?(e.message.success(s("_importSuccess")),e.websiteList=a,U(e.websiteList),setTimeout(()=>window.location.reload(),2e3)):e.notification.error(s("_errorBookTip"),`${a?.message??""}`)}catch(a){e.notification.error(s("_errorBookTip"),`${a.message}`)}}}static \u0275fac=function(e){return new(e||t)(B(G),B(K))};static \u0275cmp=F({type:t,selectors:[["system-bookmark"]],decls:6,vars:2,consts:[[1,"book-wrapper"],[3,"innerHTML"],[1,"mt-2.5",3,"innerHTML"],["id","file"],["src","assets/img/bookmark.svg","draggable","false",1,"logo"],["type","file","name","file","accept","text/html",3,"change"]],template:function(e,i){e&1&&(b(0,"div",0),q(1,"div",1)(2,"div",2),b(3,"label",3),q(4,"img",4),b(5,"input",5),R("change",function(r){return i.onBookChange(r)}),J()()()),e&2&&(L(),P("innerHTML",i.$t("_importEnter"),z),L(),P("innerHTML",i.$t("_bookImportTip"),z))},dependencies:[W],styles:[".book-wrapper[_ngcontent-%COMP%]{text-align:center}.book-wrapper[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{display:none}.book-wrapper[_ngcontent-%COMP%]   #file[_ngcontent-%COMP%]{cursor:pointer}"]})};export{x as default};