(this["webpackJsonp2tsz-client"]=this["webpackJsonp2tsz-client"]||[]).push([[8],{915:function(e,t,n){"use strict";n.r(t),n.d(t,"NewContents",(function(){return S}));var i=n(289),o=n(26),r=n(6),a=n(1),l=n(285),c=n(55),d=n(167),s=n(117),m=n(287),p=n(20),u=n(898),f=n(94),g=n(84),x=(n(115),n(150)),h=n(286);function b(e){var t=Object(l.a)(),n=(t.t,t.i18n),i=(e.index,e.data),o="ko"==n.language?i.tag_list.ko:i.tag_list.en,c="https://twsz-bucket.s3.us-west-1.amazonaws.com/client/giphy.gif",d=Object(p.c)(),s=Object(g.b)().actions,m=(a.useContext(r.a),Object(x.a)()),u=(m.height,m.width);function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"column-reverse",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"row";return u<e?t:n}function b(){d(s.setDetailModal({isOpen:!0,mode:i.id}))}function O(){return a.createElement(w,null,a.createElement(v,{onClick:b,"aria-direction":f(1100,"column","column"),src:""==i.image?c:i.image,alt:"Image of Content"}),a.createElement(E,null,a.createElement(C,null,i.name),a.createElement(h.a,{data:o,size:"small"}),a.createElement(j,null,""!=i.creator?"Created by ":"",a.createElement("b",null,i.creator))))}function I(){return a.createElement(y,null,a.createElement(v,{onClick:b,"aria-direction":f(1100,"column","column"),src:""==i.image?c:i.image,alt:"Image of Content"}),a.createElement(E,null,a.createElement(C,null,i.name),a.createElement(h.a,{data:o,size:"small"}),a.createElement(j,null,""!=i.creator?"Created by ":"",a.createElement("b",null,i.creator))))}return a.createElement(a.Fragment,null,u>600?a.createElement(O,null):a.createElement(I,null))}var w=r.d.div.withConfig({componentId:"sc-19bylqv-0"})(["width:450px;max-width:800px;height:300px;display:flex;flex:1;flex-direction:column;align-content:center;padding:0;margin-bottom:20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"]),y=r.d.div.withConfig({componentId:"sc-19bylqv-1"})(["width:350px;max-width:350px;height:300px;display:flex;flex:1;flex-direction:column;align-content:center;padding:0;margin-bottom:20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"]),v=r.d.img.withConfig({componentId:"sc-19bylqv-2"})(["padding:0;width:100%;display:flex;align-items:center;justify-content:center;height:180px;object-fit:cover;background-color:white;flex-direction:",";border-radius:0 0 20px 20px;&:hover{cursor:pointer;}"],(function(e){return e["aria-direction"]})),E=r.d.div.withConfig({componentId:"sc-19bylqv-3"})(["height:100%;min-width:250px;flex:1;text-align:right;display:flex;flex-direction:column;align-content:flex-start;justify-content:flex-start;margin:0;padding:0;box-sizing:content-box;"]),C=r.d.h1.withConfig({componentId:"sc-19bylqv-4"})(["font-size:25px;font-weight:bold;color:",";margin:1rem 0;text-align:left;word-break:keep-all;"],(function(e){return e.color||e.theme.text})),j=r.d.h2.withConfig({componentId:"sc-19bylqv-5"})(["color:",";font-size:18px;margin-top:10px;text-align:right;white-space:pre-wrap;font-weight:lighter;"],(function(e){return e.color||e.theme.text})),O=(r.d.h3.withConfig({componentId:"sc-19bylqv-6"})(["color:",";margin:1rem 0;font-size:14px;text-align:left;overflow-wrap:break-word;white-space:pre-wrap;"],(function(e){return e.color||e.theme.text})),n(894)),I=n(44),k=n(895),z=n(11);function S(e){var t,n=Object(l.a)(),s=n.t,m=(n.i18n,Object(p.d)(f.a)),x=Object(p.c)(),h=(Object(u.b)().actions,a.useContext(r.a),a.useState(0)),w=Object(o.a)(h,2),y=w[0],v=w[1],E=a.useState(0),C=Object(o.a)(E,2),j=C[0],k=C[1];a.useEffect((function(){j&&clearTimeout(j),t=setTimeout((function(){v((y+1)%4)}),5e3),k(t)}),[y]);var z=null!=m.firebaseUserJson||m.twszUser,S=Object(p.d)(O.a).New,_=Object(g.b)().actions,D=Object(I.f)();var F=function(){x(_.setAuthModal({isOpen:!0}))};return a.createElement(q,null,a.createElement(T,null,a.createElement(d.a,null,s(c.a.featuredTitle())),a.createElement(J,null,a.createElement(A,null,a.createElement(N,null,Object(i.a)(Array(4)).map((function(e,t){return a.createElement(U,{isSelected:y==t,onClick:function(){v(t)},"data-index":t})}))),a.createElement(b,{index:y,data:S[y]})))),a.createElement(M,{variant:"contained",component:"label",onClick:function(){z?D.push("upload"):F()}},s(c.a.uploadMessage())))}var q=r.d.div.withConfig({componentId:"sc-1it131d-0"})(["display:flex;flex:1;flex-grow:1;flex-direction:column;align-items:center;align-content:center;justify-content:space-between;margin:30px 0 0;padding:0 20px;"]),T=r.d.div.withConfig({componentId:"sc-1it131d-1"})(["display:flex;flex:1;width:100%;flex-direction:column;align-items:center;align-content:center;justify-content:flex-start;padding:0;"]),J=r.d.div.withConfig({componentId:"sc-1it131d-2"})(["display:flex;flex-direction:column;width:100%;padding:0;"]),M=Object(z.a)({root:{borderRadius:50,height:50,display:"flex",width:"90%",maxWidth:400,alignSelf:"center",justifySelf:"flex-end",marginTop:50}})(k.a),A=(r.d.div.withConfig({componentId:"sc-1it131d-3"})(["flex:1;display:flex;align-items:center;border-radius:20px;background-color:rgba(51,255,204,0.1);margin-bottom:30px;margin-top:10px;&:hover{cursor:pointer;opacity:0.7;}"]),r.d.div.withConfig({componentId:"sc-1it131d-4"})(["display:flex;width:100%;flex-direction:column;flex:8;padding:20px 0 0;margin:0;align-content:center;align-items:center;justify-content:center;"])),N=Object(r.d)(s.a).withConfig({componentId:"sc-1it131d-5"})(["display:flex;padding:0;margin:0;width:100%;align-items:center;"]),U=Object(r.d)(m.a).withConfig({componentId:"sc-1it131d-6"})(["flex:1;display:flex;flex-direction:row;justify-content:space-evenly;background-color:",";color:",";border-style:solid;border-color:",";border-width:",";border-radius:",";height:35px;font-weight:bold;margin:0;&:hover::before{cursor:pointer;background-color:",";opacity:0.3;}"],(function(e){return e.isSelected?"none":e.theme.primary}),(function(e){return e.isSelected?e.theme.textSecondary:e.theme.text}),(function(e){return e.theme.primary}),(function(e){return 0==e["data-index"]?"1px 0 1px 1px":3==e["data-index"]?"1px 1px 1px 0":"1px 0"}),(function(e){return 0==e["data-index"]?"30px 0 0 0":3==e["data-index"]?"0 30px 0  0 ":0}),(function(e){return e.theme.primary}));r.d.h1.withConfig({componentId:"sc-1it131d-7"})(["margin:0 0 0 15px;font-weight:bold;"])}}]);