(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{32:function(e,t,a){e.exports=a(56)},43:function(e,t,a){e.exports=a.p+"static/media/logo.f3d18313.svg"},46:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},47:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},48:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},49:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},50:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},51:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.6a177696.svg"},52:function(e,t,a){e.exports=a.p+"static/media/features-split-image-01.cf853b80.png"},53:function(e,t,a){e.exports=a.p+"static/media/features-split-image-02.48006761.png"},54:function(e,t,a){e.exports=a.p+"static/media/features-split-image-03.e6b5de8e.png"},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(28),r=a.n(l),s=a(62),c=a(11),o=a(3),m=function(e){var t=e.component,a=e.layout,n=Object(o.a)(e,["component","layout"]);return a=void 0===a?function(e){return i.a.createElement(i.a.Fragment,null,e.children)}:a,i.a.createElement(s.a,Object.assign({},n,{render:function(e){return i.a.createElement(a,null,i.a.createElement(t,e))}}))},d=a(9),u=a(1),v=a.n(u),h=a(23),p=i.a.forwardRef((function(e,t){var a=Object(n.useState)(window.innerHeight),l=Object(d.a)(a,2),r=l[0],s=l[1],c=Object(n.useState)([]),o=Object(d.a)(c,2),m=o[0],u=o[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},p=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),n=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=r-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,n)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(n.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(n.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",E),window.addEventListener("resize",f)),p())}),[m]);var b=function(){v()&&(window.removeEventListener("scroll",E),window.removeEventListener("resize",f))},E=Object(h.throttle)((function(){b(),p()}),30),f=Object(h.throttle)((function(){s(window.innerHeight)}),30);return Object(n.useEffect)((function(){b(),p()}),[r]),i.a.createElement(i.a.Fragment,null,e.children())}));p.propTypes={children:v.a.func.isRequired};var b=p,E=a(20),f=a(2),g=a.n(f),N=function(e){var t=e.className,a=e.src,l=e.width,r=e.height,s=e.alt,c=Object(o.a)(e,["className","src","width","height","alt"]),m=Object(n.useState)(!1),u=Object(d.a)(m,2),v=u[0],h=u[1],p=Object(n.useRef)(null);Object(n.useEffect)((function(){b(p.current)}),[]);var b=function(e){var t,a,n=document.createElement("img");v||(e.style.display="none",e.before(n),n.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),n.width=e.getAttribute("width"),n.height=e.getAttribute("height"),n.style.opacity="0",e.className&&n.classList.add(e.className),n.remove(),e.style.display="")};return i.a.createElement("img",Object.assign({},c,{ref:p,className:t,src:a,width:l,height:r,alt:s,onLoad:function(){h(!0)}}))};N.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var O=N,y=function(e){var t=e.className,n=Object(o.a)(e,["className"]),l=g()("brand",t);return i.a.createElement("div",Object.assign({},n,{className:l}),i.a.createElement("h1",{className:"m-0"},i.a.createElement("a",{href:"http://linkedin.com/in/anesshusseinali"},i.a.createElement(O,{src:a(43),alt:"Open",width:32,height:32}))))},w=function(e){var t=e.className,a=e.navPosition,l=e.hideNav,r=e.hideSignin,s=e.bottomOuterDivider,c=e.bottomDivider,m=Object(o.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),u=Object(n.useState)(!1),v=Object(d.a)(u,2),h=v[0],p=v[1],b=Object(n.useRef)(null),E=Object(n.useRef)(null);Object(n.useEffect)((function(){return h&&f(),document.addEventListener("keydown",O),document.addEventListener("click",w),function(){document.removeEventListener("keydown",O),document.removeEventListener("click",w),N()}}));var f=function(){document.body.classList.add("off-nav-is-active"),b.current.style.maxHeight=b.current.scrollHeight+"px",p(!0)},N=function(){document.body.classList.remove("off-nav-is-active"),b.current&&(b.current.style.maxHeight=null),p(!1)},O=function(e){h&&27===e.keyCode&&N()},w=function(e){b.current&&h&&!b.current.contains(e.target)&&e.target!==E.current&&N()},j=g()("site-header",s&&"has-bottom-divider",t);return i.a.createElement("header",Object.assign({},m,{className:j}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:g()("site-header-inner",c&&"has-bottom-divider")},!l&&i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{ref:E,className:"header-nav-toggle",onClick:h?N:f},i.a.createElement("span",{className:"screen-reader"},"Menu"),i.a.createElement("span",{className:"hamburger"},i.a.createElement("span",{className:"hamburger-inner"}))),i.a.createElement("nav",{ref:b,className:g()("header-nav",h&&"is-active")},i.a.createElement("div",{className:"header-nav-inner"},i.a.createElement("ul",{className:g()("list-reset text-xs",a&&"header-nav-".concat(a))},i.a.createElement("li",null,i.a.createElement("a",{href:"http://linkedin.com/in/anesshusseinali"}," ",i.a.createElement(y,null)))),!r&&i.a.createElement("ul",{className:"list-reset header-nav-right"})))))))};w.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var j=w,x=function(e){var t=e.className,a=Object(o.a)(e,["className"]),n=g()("footer-nav",t);return i.a.createElement("nav",Object.assign({},a,{className:n}))},D=function(e){var t=e.className,a=Object(o.a)(e,["className"]),n=g()("footer-social",t);return i.a.createElement("div",Object.assign({},a,{className:n}),i.a.createElement("ul",{className:"list-reset"},i.a.createElement("li",null,i.a.createElement("a",{href:"https://ai.facebook.com"},i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Facebook"),i.a.createElement("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://twitter.com/AnessHusseinAli"},i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Twitter"),i.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"}))))))},C=function(e){var t=e.className,a=e.topOuterDivider,n=e.topDivider,l=Object(o.a)(e,["className","topOuterDivider","topDivider"]),r=g()("site-footer center-content-mobile",a&&"has-top-divider",t);return i.a.createElement("footer",Object.assign({},l,{className:r}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:g()("site-footer-inner",n&&"has-top-divider")},i.a.createElement("div",{className:"footer-top space-between text-xxs"},i.a.createElement(D,null)),i.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},i.a.createElement(x,null),i.a.createElement("div",{className:"footer-copyright"},"Made by Aness, for you.")))))};C.defaultProps={topOuterDivider:!1,topDivider:!1};var S=C,k=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(j,{navPosition:"right",className:"reveal-from-bottom"}),i.a.createElement("main",{className:"site-content"},t),i.a.createElement(S,null))},F=a(6),A={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},L={types:Object(F.a)({},A.types),defaults:Object(F.a)({},A.defaults)},M={types:Object(F.a)({},A.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(F.a)({},A.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},I={types:Object(F.a)({},A.types,{pushLeft:v.a.bool}),defaults:Object(F.a)({},A.defaults,{pushLeft:!1})},P=function(e){var t=e.className,a=Object(o.a)(e,["className"]),n=g()("button-group",t);return i.a.createElement("div",Object.assign({},a,{className:n}))},B=function(e){var t=e.className,a=e.tag,n=e.color,l=e.size,r=e.loading,s=e.wide,c=e.wideMobile,m=e.disabled,d=Object(o.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=g()("button",n&&"button-".concat(n),l&&"button-".concat(l),r&&"is-loading",s&&"button-block",c&&"button-wide-mobile",t),v=a;return i.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};B.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var T=B,H=a(13),R=a(16),_=a(17),z=a(18),q=a(19),G=a(14),U=a(57),W=a(58),K=a(59),V=a(60),J=a(61),Q=function(e){Object(q.a)(a,e);var t=Object(z.a)(a);function a(){var e;Object(R.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={name:"",email:"",industry:"",subject:"",message:""},e.handleChange=function(t,a){e.setState(Object(H.a)({},t,a.target.value))},e}return Object(_.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=(t.name,{from_name:t.email,to_name:"aness.hussein.ali@gmail.com",industry:t.industry,subject:t.subject,message_html:t.message});G.send("service_h0q75wd","template_6swj4jw",a,"user_QuG1TIbvzRN8kheqkRwUr"),this.resetForm()}},{key:"resetForm",value:function(){this.setState({name:"",email:"",subject:"",message:""})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{className:"p-heading1"},"Get in Touch!"),i.a.createElement(U.a,{onSubmit:this.handleSubmit.bind(this),target:"my_iframe",style:{alignitems:"right"}},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(W.a,{controlId:"formBasicEmail"},i.a.createElement(K.a,{className:"text-muted",style:{textAlign:"left"}},"Email"),i.a.createElement(V.a,{type:"email",name:"email",value:this.state.email,className:"text-primary",onChange:this.handleChange.bind(this,"email"),placeholder:"Enter email",style:{alignItems:"right",flex:1,width:"1000%"}}))),i.a.createElement("li",null,i.a.createElement(W.a,{controlId:"formBasicName"},i.a.createElement(K.a,{className:"text-muted",style:{textAlign:"left"}},"Name"),i.a.createElement(V.a,{type:"text",name:"name",value:this.state.name,className:"text-primary",onChange:this.handleChange.bind(this,"name"),placeholder:"Name",style:{alignItems:"right",flex:1}}))),i.a.createElement("li",null,i.a.createElement(W.a,{controlId:"formBasicIndustry"},i.a.createElement(K.a,{className:"text-muted",style:{textAlign:"left"}},"Industry"),i.a.createElement(V.a,{type:"textarea",name:"industry",className:"text-primary",value:this.state.industry,onChange:this.handleChange.bind(this,"industry"),placeholder:"Industry",style:{flex:1,padding:5,size:1}}))),i.a.createElement("li",null,i.a.createElement(W.a,{controlId:"formBasicSubject"},i.a.createElement(K.a,{className:"text-muted",style:{textAlign:"left"}},"Subject"),i.a.createElement(V.a,{style:{flex:1,padding:5,alignItems:"center"},type:"text",name:"subject",className:"text-primary",value:this.state.subject,onChange:this.handleChange.bind(this,"subject"),placeholder:"Subject"}))),i.a.createElement("li",null,i.a.createElement(W.a,{controlId:"formBasicMessage",style:{flex:1}},i.a.createElement(K.a,{className:"text-muted",style:{textAlign:"left"}},"Message"),i.a.createElement(V.a,{type:"textarea",name:"message",className:"text-primary",value:this.state.message,onChange:this.handleChange.bind(this,"message"),style:{flex:1,alignItems:"center",padding:5,width:"20vw"}})),i.a.createElement(J.a,{variant:"primary",type:"submit"},"Submit")))))}}]),a}(n.Component),X=function(e){var t=e.className,a=(e.children,e.handleClose),l=e.show,r=e.closeHidden,s=e.video,c=(e.videoTag,Object(o.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]));Object(n.useEffect)((function(){return document.addEventListener("keydown",d),document.addEventListener("click",u),function(){document.removeEventListener("keydown",d),document.removeEventListener("click",u)}})),Object(n.useEffect)((function(){m()}),[c.show]);var m=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},d=function(e){27===e.keyCode&&a(e)},u=function(e){e.stopPropagation()},v=g()("modal",l&&"is-active",s&&"modal-video",t);return i.a.createElement(i.a.Fragment,null,l&&i.a.createElement("div",Object.assign({},c,{className:v,onClick:a}),i.a.createElement("div",{className:"modal-inner",onClick:u},s?i.a.createElement("div",{className:"responsive-video"},i.a.createElement("iframe",{title:"video",srcdoc:"<p>hello<p/>",frameBorder:"0",allowFullScreen:!0})):i.a.createElement(i.a.Fragment,null,!r&&i.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:a}),i.a.createElement("div",{className:"modal-content"},i.a.createElement(Q,null))))))};X.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var Y=X,$=Object(F.a)({},L.defaults),Z=function(e){var t=e.className,a=e.topOuterDivider,l=e.bottomOuterDivider,r=e.topDivider,s=e.bottomDivider,c=e.hasBgColor,m=e.invertColor,u=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),v=Object(n.useState)(!1),h=Object(d.a)(v,2),p=h[0],b=h[1],E=Object(n.useState)(!1),f=Object(d.a)(E,2),N=f[0],O=f[1],y=(Object(n.useState)(!1),g()("hero section center-content",a&&"has-top-divider",l&&"has-bottom-divider",c&&"has-bg-color",m&&"invert-color",t)),w=g()("hero-inner section-inner",r&&"has-top-divider",s&&"has-bottom-divider");return i.a.createElement("section",Object.assign({},u,{className:y}),i.a.createElement("div",{className:"container-sm"},i.a.createElement("div",{className:w},i.a.createElement("div",{className:"hero-content"},i.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"300"},"Aness ",i.a.createElement("span",{className:"text-color-primary"}," Hussein Ali ")),i.a.createElement("div",{className:"container-xs"},i.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"600"},"Entrepreneur, Data Scientist, Software Engineer"),i.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"600"},"Ex-Trader, Producer, Beat Maker"),i.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"1200"},i.a.createElement(P,null,i.a.createElement(T,{color:"primary",onClick:function(e){e.preventDefault(),b(!0)}},"Business Inquiries"),i.a.createElement(T,{color:"dark",onClick:function(e){e.preventDefault(),O(!0)}},"Other Inquiries"))))),i.a.createElement(Y,{id:"video-modal",show:p,handleClose:function(e){e.preventDefault(),b(!1)},form:i.a.createElement(Q,null),videoTag:"iframe"}),i.a.createElement(Y,{id:"video-modal",show:N,handleClose:function(e){e.preventDefault(),O(!1)},form:i.a.createElement(Q,null),videoTag:"iframe"}))))};Z.defaultProps=$;var ee=Z,te=function(e){var t=e.className,a=e.data,n=e.children,l=e.tag,r=Object(o.a)(e,["className","data","children","tag"]),s=g()("section-header",t),c=l;return i.a.createElement(i.a.Fragment,null,(a.title||a.paragraph)&&i.a.createElement("div",Object.assign({},r,{className:s}),i.a.createElement("div",{className:"container-xs"},n,a.title&&i.a.createElement(c,{className:g()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&i.a.createElement("p",{className:"m-0"},a.paragraph))))};te.defaultProps={children:null,tag:"h2"};var ae=te,ne=Object(F.a)({},I.defaults),ie=function(e){var t=e.className,n=e.topOuterDivider,l=e.bottomOuterDivider,r=e.topDivider,s=e.bottomDivider,c=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=g()("features-tiles section",n&&"has-top-divider",l&&"has-bottom-divider",c&&"has-bg-color",m&&"invert-color",t),h=g()("features-tiles-inner section-inner pt-0",r&&"has-top-divider",s&&"has-bottom-divider"),p=g()("tiles-wrap center-content",d&&"push-left");return i.a.createElement("section",Object.assign({},u,{className:v}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:h},i.a.createElement(ae,{data:{title:"Skillset and Services",paragraph:"I deliver engineered solutions that fit your needs."},className:"center-content"}),i.a.createElement("div",{className:p},i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(O,{src:a(46),alt:"Features tile icon 01",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Asset Management"),i.a.createElement("p",{className:"m-0 text-sm"},i.a.createElement("li",null," Risk Attribution Report"),i.a.createElement("li",null," Liquitidy Report"),i.a.createElement("li",null," Fundamental Factor Model"),i.a.createElement("li",null," Macroeconomic Factor Model"),i.a.createElement("li",null," Manager Selection and Alternative Investments "))))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(O,{src:a(47),alt:"Features tile icon 02",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Trading"),i.a.createElement("p",{className:"m-0 text-sm"},i.a.createElement("li",null," Equity Derivatives and FX trader "),i.a.createElement("li",null," Electronic Market Making  "),i.a.createElement("li",null," Signal and Alpha generation "),i.a.createElement("li",null," Exotic Pricing using Numerical Methods and Monte Carlo "),i.a.createElement("li",null," Index Rebalancing Arbitrage and Carry "),i.a.createElement("li",null," FINRA Series 3, Series 7, Series 55, Series 63 "))))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(O,{src:a(48),alt:"Features tile icon 03",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"adTech and eMarketing"),i.a.createElement("p",{className:"m-0 text-sm"},i.a.createElement("li",null," RealTimeBidding auction strategies "),i.a.createElement("li",null," Systematic Machine Learning strategy "),i.a.createElement("li",null," Tens of TB of data stored daily "),i.a.createElement("li",null," Largest Hadoop clusters with 171 PB of storage and 42.000 cores "))))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(O,{src:a(49),alt:"Features tile icon 04",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"ML and Statistical Methods"),i.a.createElement("p",{className:"m-0 text-sm"},i.a.createElement("li",null," Feature Engineering selection tools: use of Khi2, Gini Information, Entropy, Fisher Information"),i.a.createElement("li",null," Statistical Significance Testing"),i.a.createElement("li",null," Bootstrapping for A/B test confidence interval"),i.a.createElement("li",null," Hadoop, Spark, Tensorflow, GitHub "),i.a.createElement("li",null," Bootstrapping for A/B test confidence interval"),i.a.createElement("li",null," Attended NeurIPS"))))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(O,{src:a(50),alt:"Features tile icon 05",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Computer Science"),i.a.createElement("p",{className:"m-0 text-sm"},i.a.createElement("li",null," Full Stack in Django and React"),i.a.createElement("li",null," Python, SQL, C++, HTML, CSS, js "),i.a.createElement("li",null," JupyterNotebook, pyCharm"),i.a.createElement("li",null," Cherry MX Brown"))))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(O,{src:a(51),alt:"Features tile icon 06",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Communication and Others"),i.a.createElement("p",{className:"m-0 text-sm"},i.a.createElement("li",null," Public Speaking "),i.a.createElement("li",null," Native in French and Arabic, FLuent in English, Intermediate in Spanish"),i.a.createElement("li",null," Read FT on a daily basis for the past decade"),i.a.createElement("li",null," Logic Pro, MIDI and Mic ")))))))))};ie.defaultProps=ne;var le=ie,re=Object(F.a)({},M.defaults),se=function(e){var t=e.className,n=e.topOuterDivider,l=e.bottomOuterDivider,r=e.topDivider,s=e.bottomDivider,c=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,h=e.imageFill,p=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),b=g()("features-split section",n&&"has-top-divider",l&&"has-bottom-divider",c&&"has-bg-color",m&&"invert-color",t),E=g()("features-split-inner section-inner",r&&"has-top-divider",s&&"has-bottom-divider"),f=g()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return i.a.createElement("section",Object.assign({},p,{className:b}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:E},i.a.createElement(ae,{data:{title:"Expertise",paragraph:"I hold a Masters in Financial Engineering from UC Berkeley (HAAS) as well as Masters in Statistics and Finance from ENSAE Paristech and Universite Pierre et Marie Curie. I have over 10 years of experience in Applied Mathematics and Programming applied to the Tech and Financial industries."},className:"center-content"}),i.a.createElement("div",{className:f},i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Economics"),i.a.createElement("h3",{className:"mt-0 mb-12"},"Financial Expertise"),i.a.createElement("p",{className:"m-0"},"My expertise in trading, asset management, and risk analysis help me understand your needs in a concrete manner. The solutions I deliver will address and fit your particular needs from inception, and through adapted technical and development process. I also enjoy trading on prop strategies using prop funds, 3 digit% PnL with low Drawdown.")),i.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(O,{src:a(52),alt:"Features split 01",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Data Science"),i.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),i.a.createElement("p",{className:"m-0"},"I have brought business actionable insights leveraging metrics and analytics based on both structured and unstructured data. I have a strong expertise in Statistical Methods, Data Science, with concrete projects and experience in both the Financial and the adTech eMarketing business.")),i.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(O,{src:a(53),alt:"Features split 02",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Software Development"),i.a.createElement("h3",{className:"mt-0 mb-12"},"Seamless workflow"),i.a.createElement("p",{className:"m-0"},"I have in strong interest in using latest cutting hedge technologies to provide elegant analytics and solutions to your needs.")),i.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(O,{src:a(54),alt:"Features split 03",width:528,height:396})))))))};se.defaultProps=re;var ce=se,oe=Object(F.a)({},I.defaults),me=function(e){var t=e.className,a=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,r=e.bottomDivider,s=e.hasBgColor,c=e.invertColor,m=e.pushLeft,d=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=g()("testimonial section",a&&"has-top-divider",n&&"has-bottom-divider",s&&"has-bg-color",c&&"invert-color",t),v=g()("testimonial-inner section-inner",l&&"has-top-divider",r&&"has-bottom-divider"),h=g()("tiles-wrap",m&&"push-left");return i.a.createElement("section",Object.assign({},d,{className:u}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:v},i.a.createElement(ae,{data:{title:"Past Employers Testimonial",paragraph:"Please reach out for recommandation letters"},className:"center-content"}),i.a.createElement("div",{className:h}))))};me.defaultProps=oe;var de=me,ue=function(e){var t=e.className,a=e.children,n=e.labelHidden,l=e.id,r=Object(o.a)(e,["className","children","labelHidden","id"]),s=g()("form-label",n&&"screen-reader",t);return i.a.createElement("label",Object.assign({},r,{className:s,htmlFor:l}),a)};ue.defaultProps={children:null,labelHidden:!1,id:null};var ve=ue,he=function(e){var t=e.children,a=e.className,n=e.status,l=Object(o.a)(e,["children","className","status"]),r=g()("form-hint",n&&"text-color-".concat(n),a);return i.a.createElement("div",Object.assign({},l,{className:r}),t)};he.defaultProps={children:null,status:!1};var pe=he,be=function(e){var t=e.className,a=e.children,n=e.label,l=e.labelHidden,r=e.type,s=e.name,c=e.status,m=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,h=e.size,p=e.placeholder,b=e.rows,E=e.hint,f=Object(o.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=g()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),O=g()("form-input",h&&"form-input-".concat(h),c&&"form-".concat(c),t),y="textarea"===r?"textarea":"input";return i.a.createElement(i.a.Fragment,null,n&&i.a.createElement(ve,{labelHidden:l,id:f.id},n),i.a.createElement("div",{className:N},i.a.createElement(y,Object.assign({},f,{type:"textarea"!==r?r:null,className:O,name:s,disabled:m,value:d,placeholder:p,rows:"textarea"===r?b:null})),a),E&&i.a.createElement(pe,{status:c},E))};be.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var Ee=be,fe=(n.Component,Object(F.a)({},L.defaults,{split:!1})),ge=function(e){var t=e.className,a=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,r=e.bottomDivider,s=e.hasBgColor,c=e.invertColor,m=e.split,d=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),u=g()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",n&&"has-bottom-divider",s&&"has-bg-color",c&&"invert-color",t),v=g()("cta-inner section-inner",l&&"has-top-divider",r&&"has-bottom-divider",m&&"cta-split");return i.a.createElement("section",Object.assign({},d,{className:u}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:v},i.a.createElement("div",{className:"cta-slogan"},i.a.createElement("h3",{className:"m-0"},"Get in Touch")),i.a.createElement("div",{className:"cta-action"},i.a.createElement(Ee,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your best email"},i.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};ge.defaultProps=fe;var Ne=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(ee,{className:"illustration-section-01"}),i.a.createElement(le,null),i.a.createElement(ce,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),i.a.createElement(de,{topDivider:!0}))};E.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/home",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var Oe=function(){var e=Object(n.useRef)(),t=Object(s.d)();return Object(n.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){E.a.set({page:e}),E.a.pageview(e)}(a)}),[t]),i.a.createElement(b,{ref:e,children:function(){return i.a.createElement(s.c,null,i.a.createElement(m,{exact:!0,path:"/home",component:Ne,layout:k}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(55);var ye=Object(c.a)();r.a.render(i.a.createElement(s.b,{history:ye},i.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.e6a0041a.chunk.js.map