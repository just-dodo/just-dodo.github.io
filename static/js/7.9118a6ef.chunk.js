(this["webpackJsonp2tsz-client"]=this["webpackJsonp2tsz-client"]||[]).push([[7],{904:function(e,t,n){"use strict";var a=n(136),o=n(137);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n(1)),i=(0,a(n(138)).default)(l.createElement("path",{d:"M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"}),"HomeOutlined");t.default=i},909:function(e,t,n){"use strict";n.r(t),n.d(t,"DetailPage",(function(){return A}));var a=n(26),o=n(6),l=n(1),i=n.n(l),r=n(285),c=n(55),d=n(44),g=n(20),m=n(94),f=n(48),s=(n(152),n(115),n(87)),p=n(451),u=n(11),h=n(833),b=n(843),x=n(151),w=n(386),E=n.n(w),v=n(904),C=n.n(v),k=n(118),I=n(150),y=n(286),_=n(153),j=n(37),O=n(84),z=n(195),D=n(98),A=Object(l.memo)((function(e){var t=Object(I.a)(),n=(t.height,t.width),p=Object(r.a)(),u=p.t,h=p.i18n,b=Object(g.c)(),w=Object(O.b)().actions,v=Object(d.g)().id,z=i.a.useState(!0),A=Object(a.a)(z,2),ye=A[0],_e=A[1],je=i.a.useState({name:"",image:"",description:"",description_ko:"",likes_number:0,link:"",liked:!1,total_stars:0,stars_number:0,related_contents:[],tag_list:{en:[],ko:[]},author:"",creator:""}),Oe=Object(a.a)(je,2),ze=Oe[0],De=Oe[1],Ae=Object(g.d)(m.a),Se=null!=Ae.firebaseUserJson||Ae.twszUser,Te=Object(g.d)(_.a),Re=Te.authModalState,Pe=Te.starModalState,Me=Re.afterAction,Le=Object(l.useContext)(o.a);i.a.useEffect((function(){Ne(parseInt(v))}),[v,Ae]),i.a.useEffect((function(){Pe.afterAction&&(Ne(parseInt(v)),b(w.setStarModal({afterAction:!1})))}),[Pe.afterAction]);var Fe=ze.related_contents;function Ne(e){var t=Ae.idToken?Ae.idToken:"",n=new s.a(t);_e(!0),n.get_experience(e).then((function(e){var t=e.data;De(t)})),_e(!1)}function Be(){f.a.analytics().logEvent("play_on_Page",{ID:v}),j.a.event({category:"ACTION",action:"PLAY_ON_PAGE",label:"DetailID : "+String(e.detailId)});var t=Ae.idToken?Ae.idToken:"",a=new s.a(t);v&&a.visit_experience(v),window.open(ze.link,"_blank"),n>600&&Xe()}var Ge=Object(d.f)();function He(){Ge.push("")}function Je(e){var t="/detail/"+e;Ge.push(t),window.scrollTo(0,0)}var Ue=Fe?Fe.map((function(e,t){return i.a.createElement(Z,{key:t,onClick:function(){Je(e.id),f.a.analytics().logEvent("relatedToDetail_Page",{ID:v,ToId:e.id}),j.a.event({category:"MOVE",action:"RelatedToDetail_Page",label:"DetailID : "+String(e.id)})}},i.a.createElement(ee,{src:e.image,alt:"Image of ".concat(e.name)}),i.a.createElement(te,null,i.a.createElement(ne,null,e.name),i.a.createElement(oe,null,i.a.createElement(x.a,{size:15,color:Le.textSecondary}),i.a.createElement(ae,null,e.likes_number||0),i.a.createElement(x.d,{size:15,color:Le.textSecondary}),i.a.createElement(ae,null,(e.total_stars/e.stars_number).toFixed(1)))))})):[],Ve=Fe?Fe.map((function(e,t){return i.a.createElement(Z,{key:t,onClick:function(){Je(e.id),f.a.analytics().logEvent("relatedToDetail_Page",{ID:v,ToId:e.id}),j.a.event({category:"MOVE",action:"RelatedToDetail_Page",label:"DetailID : "+String(e.id)})}},i.a.createElement(we,{src:e.image,alt:"Image of ".concat(e.name)}),i.a.createElement(ve,null,e.name),i.a.createElement(Ee,null,i.a.createElement(x.a,{size:12,color:Le.text}),i.a.createElement(Ce,null,e.likes_number||0),i.a.createElement(x.d,{size:12,color:Le.text}),i.a.createElement(Ce,null,(e.total_stars/e.stars_number).toFixed(1))))})):[],We=Ie(),Ke=i.a.useState(!1),Ye=Object(a.a)(Ke,2),$e=Ye[0],qe=Ye[1];function Qe(e){var t=new s.a(Ae.idToken);v&&(e?(f.a.analytics().logEvent("like",{ID:v}),j.a.event({category:"ACTION",action:"LIKE",label:"DetailID : "+String(v)}),t.like_experience(v)):t.unlike_experience(v))}i.a.useEffect((function(){qe(ze.liked)}),[ze]);var Xe=function(){b(w.setStarModal({isOpen:!0,id:v,mode:"Page"}))};i.a.useEffect((function(){Ae&&Me&&(Qe(!0),b(w.setAuthModal({afterAction:!1})))}),[Ae,Me]);var Ze=function(){Se?(qe(!$e),Qe(!$e)):b(w.setAuthModal({isOpen:!0,mode:e.detailId}))};function et(){return i.a.createElement(S,{"data-src":ze.image},i.a.createElement(k.a,null,i.a.createElement("title",null,ze.name),i.a.createElement("meta",{name:"description",content:ze.description})),i.a.createElement(T,null,i.a.createElement(R,null,i.a.createElement(P,{startIcon:i.a.createElement(C.a,null),onClick:He})),i.a.createElement(M,null,i.a.createElement(L,null,i.a.createElement(U,null,i.a.createElement(B,null,ze.name),i.a.createElement($,null,i.a.createElement(K,{startIcon:i.a.createElement(E.a,null),className:$e?We.clicked:"","data-noLabel":n<1e3,onClick:Ze},n<1e3?null:u($e?c.a.detailBookmarked():c.a.detailBookmark())))),i.a.createElement(V,null,i.a.createElement(G,null,i.a.createElement(x.d,{size:20,color:Le.primary}),i.a.createElement(J,null,(ze.total_stars/ze.stars_number).toFixed(1))),i.a.createElement(H,null,i.a.createElement(W,null,"Created by ",i.a.createElement("b",null,ze.creator)),i.a.createElement(W,null,"Posted by ",i.a.createElement("b",null,ze.author)))),i.a.createElement(y.a,{data:"en"==h.language?ze.tag_list.en:ze.tag_list.ko}),i.a.createElement(Y,null,"en"==h.language?ze.description:ze.description_ko),i.a.createElement($,null,i.a.createElement(q,{onClick:Be,variant:"contained"},i.a.createElement(Q,null,u(c.a.detailGo()))))),i.a.createElement(F,null,i.a.createElement(N,null,u(c.a.detailRelated())),i.a.createElement(X,null,Ue)))))}function tt(){return i.a.createElement(le,null,i.a.createElement(de,null,i.a.createElement(ge,{onClick:He},i.a.createElement(x.b,{size:15})),i.a.createElement(me,{className:$e?We.clicked:"",onClick:Ze},i.a.createElement(x.a,{size:10}))),i.a.createElement(ie,null,i.a.createElement(re,null,ze.name)),i.a.createElement(ce,null,i.a.createElement(G,null,i.a.createElement(x.d,{size:15,color:Le.primary}),i.a.createElement(fe,null,(ze.total_stars/ze.stars_number).toFixed(1))),i.a.createElement(H,null,i.a.createElement(se,null,"Created by ",i.a.createElement("b",null,ze.creator)),i.a.createElement(se,null,"Posted by ",i.a.createElement("b",null,ze.author)))),i.a.createElement(y.a,{data:"en"==h.language?ze.tag_list.en:ze.tag_list.ko}),i.a.createElement(pe,{src:ze.image,alt:"Image of Content"}),i.a.createElement(ue,{onClick:Be,variant:"contained"},i.a.createElement(Q,null,u(c.a.detailGo()))),i.a.createElement(Y,null,"en"==h.language?ze.description:ze.description_ko),i.a.createElement(he,null,i.a.createElement(be,null,u(c.a.detailRelated())),i.a.createElement(xe,null,Ve)))}return i.a.createElement(i.a.Fragment,null,ye?i.a.createElement(ke,null,i.a.createElement(D.a,null)):n>600?i.a.createElement(et,null):i.a.createElement(tt,null))})),S=o.d.div.withConfig({componentId:"sc-1m6flrg-0"})(["display:flex;height:100vh;background-image:URL(",");background-position:center center;background-size:cover;"],(function(e){return e["data-src"]})),T=o.d.div.withConfig({componentId:"sc-1m6flrg-1"})(["height:100%;width:100%;"]),R=o.d.div.withConfig({componentId:"sc-1m6flrg-2"})(["flex:3;float:left;padding:30px;width:30%;height:100%;background-color:rgba(255,255,255,0.2);"]),P=Object(u.a)({root:{color:"black",backgroundColor:"rgba(51, 255, 204, 1)",textAlign:"center",borderRadius:30,height:50,width:70,marginLeft:20,paddingLeft:20}})(p.a),M=o.d.div.withConfig({componentId:"sc-1m6flrg-3"})(["display:flex;float:left;flex-direction:column;flex:7;height:100%;width:70%;padding:30px;background-color:",";@supports (backdrop-filter:blur(3px)){backdrop-filter:blur(1px);background-color:",";}"],(function(e){return e.theme.background}),(function(e){return e.theme.background.replace(/rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,"rgba$1,0.75)")})),L=o.d.div.withConfig({componentId:"sc-1m6flrg-4"})(["display:flex;flex-direction:column;"]),F=o.d.div.withConfig({componentId:"sc-1m6flrg-5"})(["display:flex;flex-direction:column;"]),N=o.d.h1.withConfig({componentId:"sc-1m6flrg-6"})(["font-size:18pt;text-align:left;padding:20px;color:",";"],(function(e){return e.theme.text}));o.d.div.withConfig({componentId:"sc-1m6flrg-7"})(["padding:20px;overflow:auto;max-height:700px;"]);var B=o.d.p.withConfig({componentId:"sc-1m6flrg-8"})(["font-weight:bold;color:",";font-size:3.375rem;margin-right:20px;font-size:",";line-height:2.5rem;overflow:hidden;text-overflow:ellipsis;float:left;flex:8;margin:20px;"],(function(e){return e.theme.text}),(function(e){var t=e["data-length"];if(!t||t<=10)return"3em";var n=10/t;return n<.75?"1.5em":3*n+"em"})),G=o.d.div.withConfig({componentId:"sc-1m6flrg-9"})(["display:flex;align-items:center;"]),H=o.d.div.withConfig({componentId:"sc-1m6flrg-10"})(["display:flex;align-items:right;flex-direction:column;"]),J=o.d.p.withConfig({componentId:"sc-1m6flrg-11"})(["line-height:0;font-size:30px;margin:0 0 2px 10px;margin-right:20px;color:",";"],(function(e){return e.theme.text})),U=o.d.div.withConfig({componentId:"sc-1m6flrg-12"})(["display:flex;flex:1;vertical-align:middle;"]),V=o.d.div.withConfig({componentId:"sc-1m6flrg-13"})(["display:flex;vertical-align:middle;flex:1;flex-direction:row;justify-content:space-between;margin:0 30px 15px 20px;"]),W=Object(o.d)(z.a).withConfig({componentId:"sc-1m6flrg-14"})(["margin:0;padding:0;"]),K=Object(u.a)({root:{color:"black",borderColor:"rgba(51, 255, 204, 1)",backgroundColor:"rgba(51, 255, 204, 1)",textAlign:"center",borderRadius:30,height:50,margin:10,paddingLeft:20,"&:hover":{backgroundColor:"rgba(51, 255, 204, 1)",opacity:.7}},label:{textTransform:"none",fontWeight:"bold",paddingRight:function(e){return e["data-noLabel"]?0:10}}})(p.a),Y=o.d.h2.withConfig({componentId:"sc-1m6flrg-15"})(["padding:20px;white-space:pre-wrap;display:inline;line-height:1.5em;font-size:10pt;font-weight:lighter;color:",";overflow:auto;max-height:100px;"],(function(e){return e.theme.text})),$=o.d.div.withConfig({componentId:"sc-1m6flrg-16"})(["justify-content:flex-end;display:flex;padding-right:20px;"]),q=Object(u.a)({root:{color:"black",borderColor:"rgba(51, 255, 204, 1)",backgroundColor:"rgba(51, 255, 204, 1)",borderRadius:50,height:50,width:300}})(p.a),Q=o.d.h2.withConfig({componentId:"sc-1m6flrg-17"})(["font-size:15pt;font-weight:bold;padding:10px;margin:0;"]),X=o.d.ul.withConfig({componentId:"sc-1m6flrg-18"})(["display:flex;flex-direction:row;list-style-type:none;overflow:auto;margin:0;padding:0;"]),Z=(o.d.li.withConfig({componentId:"sc-1m6flrg-19"})(["margin:0;"]),o.d.div.withConfig({componentId:"sc-1m6flrg-20"})(["display:flex;flex-direction:column;"])),ee=o.d.img.withConfig({componentId:"sc-1m6flrg-21"})(["width:240px;height:160px;float:left;margin:0 20px;object-fit:cover;border-radius:10px;border-style:solid;border-width:2px;border-color:",";&:hover{cursor:pointer;opacity:0.8;}"],(function(e){return e.theme.primary})),te=o.d.div.withConfig({componentId:"sc-1m6flrg-22"})(["width:240px;height:160px;position:absolute;margin:0 20px;padding:20px;border-radius:10px;background-color:rgba(51,255,204,0.8);opacity:0;&:hover{opacity:1;}"]),ne=o.d.h1.withConfig({componentId:"sc-1m6flrg-23"})(["font-size:15pt;font-weight:bolder;text-align:left;color:rgba(0,0,51,1);"]),ae=o.d.p.withConfig({componentId:"sc-1m6flrg-24"})(["line-height:0;font-size:20px;margin:0 0 2px 10px;margin-right:20px;color:",";"],(function(e){return e.theme.textSecondary})),oe=o.d.div.withConfig({componentId:"sc-1m6flrg-25"})(["display:flex;align-content:center;align-items:center;margin:0;padding:0;flex:0;"]),le=o.d.div.withConfig({componentId:"sc-1m6flrg-26"})(["padding:20px;"]),ie=o.d.div.withConfig({componentId:"sc-1m6flrg-27"})(["display:flex;flex-direction:row;"]),re=o.d.h3.withConfig({componentId:"sc-1m6flrg-28"})(["color:",";font-weight:bold;font-size:24px;float:left;flex:4;"],(function(e){return e.theme.text})),ce=o.d.div.withConfig({componentId:"sc-1m6flrg-29"})(["display:flex;flex:1;flex-direction:row;justify-content:space-between;margin-bottom:10px;"]),de=o.d.div.withConfig({componentId:"sc-1m6flrg-30"})(["justify-content:flex-end;display:flex;flex:1;"]),ge=Object(u.a)({root:{color:"black",backgroundColor:"rgba(51, 255, 204, 1)",textAlign:"center",borderRadius:30,height:30,width:30,marginRight:"10px"}})(p.a),me=Object(u.a)({root:{color:"black",borderColor:"rgba(51, 255, 204, 1)",backgroundColor:"rgba(51, 255, 204, 1)",textAlign:"center",borderRadius:30,height:30,width:30,padding:0,margin:0,"&:hover":{backgroundColor:"rgba(51, 255, 204, 1)",opacity:.7}}})(p.a),fe=o.d.p.withConfig({componentId:"sc-1m6flrg-31"})(["line-height:0;font-size:15px;margin:0 0 2px 10px;margin-right:20px;color:",";"],(function(e){return e.theme.text})),se=Object(o.d)(z.a).withConfig({componentId:"sc-1m6flrg-32"})(["margin:0;padding:0;font-size:12px;"]),pe=o.d.img.withConfig({componentId:"sc-1m6flrg-33"})(["width:100%;height:150px;margin-top:20px;border-radius:20px 20px 0 0;object-fit:cover;background-color:white;"]),ue=(o.d.p.withConfig({componentId:"sc-1m6flrg-34"})(["padding:20px;white-space:pre-wrap;display:inline;line-height:1.5em;font-size:10pt;font-weight:lighter;color:",";overflow:auto;max-height:200px;"],(function(e){return e.theme.text})),Object(u.a)({root:{color:"black",borderColor:"rgba(51, 255, 204, 1)",backgroundColor:"rgba(51, 255, 204, 1)",borderRadius:"0 0 20px 20px",height:50,width:"100%",marginBottom:"20px"}})(p.a)),he=o.d.div.withConfig({componentId:"sc-1m6flrg-35"})(["margin-top:50px;display:flex;flex-direction:column;"]),be=o.d.h1.withConfig({componentId:"sc-1m6flrg-36"})(["font-size:16pt;font-weight:bold;text-align:left;color:",";"],(function(e){return e.theme.text})),xe=o.d.ul.withConfig({componentId:"sc-1m6flrg-37"})(["display:flex;list-style-type:none;flex-direction:column;overflow:auto;margin:0;padding:0;"]),we=o.d.img.withConfig({componentId:"sc-1m6flrg-38"})(["width:90%;height:160px;float:left;object-fit:cover;border-radius:10px;border-style:solid;border-width:2px;margin:10px;border-color:",";&:hover{cursor:pointer;opacity:0.8;}"],(function(e){return e.theme.primary})),Ee=o.d.div.withConfig({componentId:"sc-1m6flrg-39"})(["display:flex;align-content:center;align-items:center;margin:10px;padding:0;flex:0;"]),ve=o.d.h1.withConfig({componentId:"sc-1m6flrg-40"})(["font-size:15pt;margin-left:10px;text-align:left;color:rgba(51,255,204,1);"]),Ce=o.d.p.withConfig({componentId:"sc-1m6flrg-41"})(["line-height:0;font-size:15px;margin:0 0 2px 10px;margin-right:20px;color:",";"],(function(e){return e.theme.text})),ke=o.d.div.withConfig({componentId:"sc-1m6flrg-42"})(["width:100%;height:100%;display:flex;align-items:center;justify-content:center;"]),Ie=Object(h.a)((function(e){return Object(b.a)({clicked:{backgroundColor:"rgba(0, 0, 51, 1)",borderColor:"rgba(51, 255, 204, 1)",borderWidth:1,borderStyle:"solid",color:"rgba(51, 255, 204, 1)","&:hover":{backgroundColor:"rgba(0, 0, 51, 0.6)"}}})}))}}]);