(this.webpackJsonpheasp=this.webpackJsonpheasp||[]).push([[0],{110:function(e,t,a){e.exports=a(140)},140:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a(180),o=a(0),c=a.n(o),i=a(9),l=a.n(i),s=a(67),u=a(41),m=a(44),f=a(179),p=a(26),b=a(97),h=(a(121),a(89)),d={SET_BOOKS:"".concat("BOOK","/BOOKS/SET"),SEARCH_BOOKS:"".concat("BOOK","/SEARCH/QUERY"),SET_RESULTS:"".concat("BOOK","/SEARCH/SET")},y={books:[],results:[]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;return Object(h.a)(e,(function(e){switch(t.type){case d.SET_BOOKS:e.books=t.payload;break;case d.SET_RESULTS:e.results=t.payload}}))},v=Object(p.c)({books:E}),O=a(15),j=a.n(O),k=a(55),g=a(58),S=a(59),x=a(60),R=a(96),B=a(99),T=a(72),C=a(90),w=a.n(C),q=new(function(e){Object(B.a)(a,e);var t=Object(R.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).searchBooks=n.searchBooks.bind(Object(x.a)(n)),n}return Object(S.a)(a,[{key:"searchBooks",value:function(e,t){return this.get("/book?".concat(t,"=").concat(encodeURIComponent(e))).then((function(e){return e.data})).catch((function(e){throw e}))}}]),a}(function(){function e(t){Object(g.a)(this,e),this.api=void 0,this.api=w.a.create(t),this.api.interceptors.request.use((function(e){return Object(T.a)({},e)})),this.api.interceptors.response.use((function(e){return Object(T.a)({},e)}))}return Object(S.a)(e,[{key:"getUri",value:function(e){return this.api.getUri(e)}},{key:"request",value:function(e){return this.api.request(e)}},{key:"get",value:function(e,t){return this.api.get(e,t)}},{key:"delete",value:function(e,t){return this.api.delete(e,t)}},{key:"head",value:function(e,t){return this.api.head(e,t)}},{key:"post",value:function(e,t,a){return this.api.post(e,t,a)}},{key:"put",value:function(e,t,a){return this.api.put(e,t,a)}},{key:"patch",value:function(e,t,a){return this.api.patch(e,t,a)}}]),e}()))({returnRejectedPromiseOnError:!0,withCredentials:!0,timeout:3e4,baseURL:"http://localhost:3000/api",headers:{common:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache","Content-Type":"application/json",Accept:"application/json"}}}),z=function(e,t){return{type:d.SEARCH_BOOKS,payload:{query:e,type:t}}},A=function(e){return{type:d.SET_RESULTS,payload:e}},K=j.a.mark(H),F=j.a.mark(U);function H(e){var t,a,n,r;return j.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,a=t.query,n=t.type,o.prev=1,o.next=4,Object(k.b)(q.searchBooks,a,n);case 4:if(!(r=o.sent)||!r.length){o.next=8;break}return o.next=8,Object(k.c)(A(r));case 8:o.next=13;break;case 10:o.prev=10,o.t0=o.catch(1),console.log("Error: ",o.t0);case 13:case"end":return o.stop()}}),K,null,[[1,10]])}function U(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([Object(k.d)(d.SEARCH_BOOKS,H)]);case 2:case"end":return e.stop()}}),F)}var _=a(182),W=a(34);var M=function(){return c.a.createElement("div",null,"Home")},N=a(22),L=a(45),I=a(172),J=a(170),P=a(186),G=a(175),Q=a(183),V=a(181),Y=a(187),$=a(168),D=a(184),X=a(98),Z=Object($.a)(Object(D.a)({img:{maxWidth:"100%",height:"auto"}}));var ee=function(e){var t=e.id,a=e.size,n=void 0===a?"M":a,r=e.alt,i=void 0===r?"":r,l=Z();if(!t)return c.a.createElement(o.Fragment,null);var s="https://covers.openlibrary.org/b/olid/".concat(t,"-").concat(n,".jpg");return c.a.createElement("img",{src:s,alt:i,className:l.img})};var te=function(e){var t=e.book;return console.log(t),c.a.createElement(J.a,{container:!0},c.a.createElement(J.a,{item:!0,xs:"auto",style:{width:60}},c.a.createElement(ee,{id:t.image})),c.a.createElement(J.a,{item:!0,xs:!0,container:!0},c.a.createElement(J.a,{item:!0,xs:12},c.a.createElement(I.a,{variant:"body2"},t.title)),c.a.createElement(J.a,{item:!0,xs:12},c.a.createElement(I.a,{variant:"caption"},t.author))))};var ae=function(e){var t=e.books;return!t||t.length<1?c.a.createElement(I.a,{variant:"body2",color:"textSecondary"},"No results..."):c.a.createElement(J.a,{container:!0,spacing:1},t.map((function(e){return c.a.createElement(J.a,{key:e.id,item:!0,xs:12},c.a.createElement(te,{book:e}))})))},ne=function(e){return e.books||y},re=[ne],oe=Object($.a)(Object(D.a)({formControl:{width:"100%"}}));var ce=Object(L.b)({results:Object(L.a)(re,(function(e){return e.results}))});var ie=Object(s.b)(ce,(function(e){return{searchBooks:function(t,a){return e(z(t,a))},resetResults:function(){return e(A([]))}}})),le=Object(W.f)(ie((function(e){var t=e.results,a=e.searchBooks,n=e.resetResults,r=e.match.params,i=e.history,l=oe(),s=Object(X.a)(),u=s.register,m=s.handleSubmit,f=(s.errors,Object(o.useState)(r.type||"title")),p=Object(N.a)(f,2),b=p[0],h=p[1];return Object(o.useEffect)((function(){console.log(r),h("title")}),[]),Object(o.useEffect)((function(){return r.query&&a(r.query,r.type||b),function(){return n()}}),[r]),c.a.createElement(_.a,{p:2},c.a.createElement(I.a,{variant:"h2",gutterBottom:!0},"Books"),c.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:m((function(e){return i.push("/books/".concat(b,"/").concat(e.query))}))},c.a.createElement(J.a,{container:!0,spacing:2},c.a.createElement(J.a,{item:!0,xs:8},c.a.createElement(P.a,{className:l.formControl,name:"query",label:"Search",variant:"filled",size:"small",inputRef:u})),c.a.createElement(J.a,{item:!0,xs:4},c.a.createElement(G.a,{className:l.formControl},c.a.createElement(Q.a,{id:"type-label"},"Type"),c.a.createElement(V.a,{id:"searchType",labelId:"type-label",value:b,onChange:function(e){h(e.target.value)}},c.a.createElement(Y.a,{value:"title"},"Title"),c.a.createElement(Y.a,{value:"author"},"Author")))))),c.a.createElement(_.a,{py:3},c.a.createElement(ae,{books:t})))})));var se=function(e){var t=e.path,a=e.component,n=e.routes;return c.a.createElement(W.a,{path:t,render:function(e){return c.a.createElement(a,Object.assign({},e,{routes:n}))}})},ue=[{path:"/",exact:!0,component:M},{path:["/books/:type/:query","/books"],title:"Books",component:le},{path:"/records",title:"Records",component:function(){return c.a.createElement("div",null,"Records")}},{path:"/memories",title:"Memories",component:function(){return c.a.createElement("div",null,"Memories")}}],me=a(69),fe=a(176),pe=a(177),be=a(178),he=Object($.a)((function(e){var t=e.transitions;return Object(D.a)({root:{flexGrow:1},actionRoot:{"& .svg-inline--fa":{width:"auto",fontSize:21,transform:"scale(1)",transition:t.create(["transform"],{duration:t.duration.complex})},"&$iconOnly":{paddingTop:6,"& .svg-inline--fa":{transform:"scale(0.8)"}}},action:{display:"none"},iconOnly:{}})}));var de=Object(W.f)((function(e){var t=e.history,a=e.location,n=he();Object(o.useEffect)((function(){a.pathname.startsWith("/books")?s(0):a.pathname.startsWith("/records")?s(1):a.pathname.startsWith("/memories")?s(2):s(null)}),[a]);var r=Object(o.useState)(null),i=Object(N.a)(r,2),l=i[0],s=i[1];return c.a.createElement(fe.a,{position:"fixed",color:"primary",style:{top:"auto",bottom:0},component:"footer"},c.a.createElement(pe.a,{value:l,onChange:function(e,a){switch(a){case 0:t.push("/books");break;case 1:t.push("/records");break;case 2:t.push("/memories")}},className:n.root},c.a.createElement(be.a,{label:"Books",icon:c.a.createElement(me.a,{icon:["fas","books"],fixedWidth:!0}),classes:{root:n.actionRoot,iconOnly:n.iconOnly,label:n.action}}),c.a.createElement(be.a,{label:"Records",icon:c.a.createElement(me.a,{icon:["fas","album-collection"]}),classes:{root:n.actionRoot,iconOnly:n.iconOnly,label:n.action}}),c.a.createElement(be.a,{label:"Memories",icon:c.a.createElement(me.a,{icon:["fas","camera-retro"]}),classes:{root:n.actionRoot,iconOnly:n.iconOnly,label:n.action}})))}));var ye=function(){return c.a.createElement(_.a,null,c.a.createElement(W.c,null,ue.map((function(e,t){return c.a.createElement(se,Object.assign({key:t},e))}))),c.a.createElement(de,null))},Ee=a(95),ve=["Montserat","Helvetica","Arial","sans-serif"].join(","),Oe=["Roboto","Helvetica","Arial","sans-serif"].join(","),je=Object(Ee.a)({palette:{primary:{light:"#e9997d",main:"#e07a5f",dark:"#ae5543",contrastText:"#fff"},secondary:{light:"#9bc9b4",main:"#81b29a",dark:"#5a816c",contrastText:"#fff"},background:{default:"#f4f1de"},text:{primary:"#3d405b",secondary:"#76798c",disabled:"#c1c4ce"}},typography:{fontFamily:Oe,h1:{fontFamily:ve,fontSize:"2.25rem"},h2:{fontFamily:ve,fontSize:"2rem"},h3:{fontFamily:ve,fontSize:"1.75rem"},h4:{fontFamily:ve,fontSize:"1.5rem"},h5:{fontFamily:ve,fontSize:"1.25rem"},h6:{fontFamily:ve,fontSize:"1.125rem"},body1:{fontWeight:300},body2:{fontWeight:300}}}),ke=a(53),ge=a(54),Se=a(70),xe=[ke.a,ke.b,ke.c,ke.d],Re=[ge.a,ge.b,ge.c,ge.d],Be=[Se.a,Se.b,Se.c],Te=xe.concat(Re,Be);console.log(Te),m.b.add.apply(m.b,Object(n.a)(Te));var Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=p.d,a={};var r=Object(b.a)(a),o=[];o=[r];var c=[p.a.apply(void 0,Object(n.a)(o))],i=Object(p.e)(v,e,t.apply(void 0,c));return r.run(U),i}();l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,{store:Ce},c.a.createElement(f.a,{theme:je},c.a.createElement(u.a,null,c.a.createElement(r.a,null),c.a.createElement(ye,null))))),document.getElementById("root"))}},[[110,1,2]]]);
//# sourceMappingURL=main.858b7876.chunk.js.map