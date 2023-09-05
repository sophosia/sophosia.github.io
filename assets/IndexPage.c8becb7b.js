import{Q as R}from"./QBtn.d08e415f.js";import{p as ue,q as ce,h as j,c as J,k as de,g as ve,a as fe}from"./QSpinner.97de56f2.js";import{M as N,u as pe,a8 as me,I as z,a9 as U,N as te,s as K,J as X,r as O,c as p,w as $,g as H,v as ge,h as y,H as he,aa as ye,Q as _e,o as Z,k as le,O as ne,ab as xe,i as oe,j as A,U as be,V as we,_ as Pe,X as Ce,Z as Se,$ as qe,a0 as M,a4 as v,f as V,ac as se,a2 as ke,a3 as Ie}from"./index.a262415e.js";import{c as Ae,u as $e,a as Te}from"./selection.6cf5197a.js";const ee={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Be=Object.keys(ee);ee.all=!0;function ae(e){const n={};for(const r of Be)e[r]===!0&&(n[r]=!0);return Object.keys(n).length===0?ee:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const Ee=["INPUT","TEXTAREA"];function ie(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&Ee.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function Fe(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((r,s)=>{const i=parseFloat(r);i&&(n[s]=i)}),n}var Ne=ue({name:"touch-swipe",beforeMount(e,{value:n,arg:r,modifiers:s}){if(s.mouse!==!0&&N.has.touch!==!0)return;const i=s.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:Fe(r),direction:ae(s),noop:pe,mouseStart(a){ie(a,t)&&me(a)&&(z(t,"temp",[[document,"mousemove","move",`notPassive${i}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(a,!0))},touchStart(a){if(ie(a,t)){const l=a.target;z(t,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","notPassiveCapture"],[l,"touchend","end","notPassiveCapture"]]),t.start(a)}},start(a,l){N.is.firefox===!0&&U(e,!0);const m=te(a);t.event={x:m.left,y:m.top,time:Date.now(),mouse:l===!0,dir:!1}},move(a){if(t.event===void 0)return;if(t.event.dir!==!1){K(a);return}const l=Date.now()-t.event.time;if(l===0)return;const m=te(a),d=m.left-t.event.x,u=Math.abs(d),g=m.top-t.event.y,f=Math.abs(g);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&f<t.sensitivity[1]){t.end(a);return}}else if(window.getSelection().toString()!==""){t.end(a);return}else if(u<t.sensitivity[2]&&f<t.sensitivity[2])return;const _=u/l,b=f/l;t.direction.vertical===!0&&u<f&&u<100&&b>t.sensitivity[0]&&(t.event.dir=g<0?"up":"down"),t.direction.horizontal===!0&&u>f&&f<100&&_>t.sensitivity[0]&&(t.event.dir=d<0?"left":"right"),t.direction.up===!0&&u<f&&g<0&&u<100&&b>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<f&&g>0&&u<100&&b>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>f&&d<0&&f<100&&_>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>f&&d>0&&f<100&&_>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(K(a),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ae(),t.styleCleanup=k=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const w=()=>{document.body.classList.remove("no-pointer-events--children")};k===!0?setTimeout(w,50):w()}),t.handler({evt:a,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:l,distance:{x:u,y:f}})):t.end(a)},end(a){t.event!==void 0&&(X(t,"temp"),N.is.firefox===!0&&U(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),a!==void 0&&t.event.dir!==!1&&K(a),t.event=void 0)}};if(e.__qtouchswipe=t,s.mouse===!0){const a=s.mouseCapture===!0||s.mousecapture===!0?"Capture":"";z(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}N.has.touch===!0&&z(t,"main",[[e,"touchstart","touchStart",`passive${s.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const r=e.__qtouchswipe;r!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&r.end(),r.handler=n.value),r.direction=ae(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(X(n,"main"),X(n,"temp"),N.is.firefox===!0&&U(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function Me(){const e=new Map;return{getCache:function(n,r){return e[n]===void 0?e[n]=r:e[n]},getCacheWithFn:function(n,r){return e[n]===void 0?e[n]=r():e[n]}}}const Ve={name:{required:!0},disable:Boolean},re={setup(e,{slots:n}){return()=>y("div",{class:"q-panel scroll",role:"tabpanel"},j(n.default))}},De={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Oe=["update:modelValue","beforeTransition","transition"];function Le(){const{props:e,emit:n,proxy:r}=H(),{getCacheWithFn:s}=Me();let i,t;const a=O(null),l=O(null);function m(o){const c=e.vertical===!0?"up":"left";P((r.$q.lang.rtl===!0?-1:1)*(o.direction===c?1:-1))}const d=p(()=>[[Ne,m,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=p(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),g=p(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),f=p(()=>`--q-transition-duration: ${e.transitionDuration}ms`),_=p(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),b=p(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),k=p(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);$(()=>e.modelValue,(o,c)=>{const x=C(o)===!0?B(o):-1;t!==!0&&I(x===-1?0:x<B(c)?-1:1),a.value!==x&&(a.value=x,n("beforeTransition",o,c),ge(()=>{n("transition",o,c)}))});function w(){P(1)}function L(){P(-1)}function T(o){n("update:modelValue",o)}function C(o){return o!=null&&o!==""}function B(o){return i.findIndex(c=>c.props.name===o&&c.props.disable!==""&&c.props.disable!==!0)}function Q(){return i.filter(o=>o.props.disable!==""&&o.props.disable!==!0)}function I(o){const c=o!==0&&e.animated===!0&&a.value!==-1?"q-transition--"+(o===-1?u.value:g.value):null;l.value!==c&&(l.value=c)}function P(o,c=a.value){let x=c+o;for(;x>-1&&x<i.length;){const q=i[x];if(q!==void 0&&q.props.disable!==""&&q.props.disable!==!0){I(o),t=!0,n("update:modelValue",q.props.name),setTimeout(()=>{t=!1});return}x+=o}e.infinite===!0&&i.length!==0&&c!==-1&&c!==i.length&&P(o,o===-1?i.length:-1)}function E(){const o=B(e.modelValue);return a.value!==o&&(a.value=o),!0}function W(){const o=C(e.modelValue)===!0&&E()&&i[a.value];return e.keepAlive===!0?[y(ye,b.value,[y(k.value===!0?s(_.value,()=>({...re,name:_.value})):re,{key:_.value,style:f.value},()=>o)])]:[y("div",{class:"q-panel scroll",style:f.value,key:_.value,role:"tabpanel"},[o])]}function h(){if(i.length!==0)return e.animated===!0?[y(he,{name:l.value},W)]:W()}function S(o){return i=ce(j(o.default,[])).filter(c=>c.props!==null&&c.props.slot===void 0&&C(c.props.name)===!0),i.length}function F(){return i}return Object.assign(r,{next:w,previous:L,goTo:T}),{panelIndex:a,panelDirectives:d,updatePanelsList:S,updatePanelIndex:E,getPanelContent:h,getEnabledPanels:Q,getPanels:F,isValidPanelName:C,keepAliveProps:b,needsUniqueKeepAliveWrapper:k,goToPanelByOffset:P,goToPanel:T,nextPanel:w,previousPanel:L}}var G=J({name:"QCarouselSlide",props:{...Ve,imgSrc:String},setup(e,{slots:n}){const r=p(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>y("div",{class:"q-carousel__slide",style:r.value},j(n.default))}});let D=0;const Qe={fullscreen:Boolean,noRouteFullscreenExit:Boolean},We=["update:fullscreen","fullscreen"];function ze(){const e=H(),{props:n,emit:r,proxy:s}=e;let i,t,a;const l=O(!1);de(e)===!0&&$(()=>s.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&u()}),$(()=>n.fullscreen,g=>{l.value!==g&&m()}),$(l,g=>{r("update:fullscreen",g),r("fullscreen",g)});function m(){l.value===!0?u():d()}function d(){l.value!==!0&&(l.value=!0,a=s.$el.parentNode,a.replaceChild(t,s.$el),document.body.appendChild(s.$el),D++,D===1&&document.body.classList.add("q-body--fullscreen-mixin"),i={handler:u},ne.add(i))}function u(){l.value===!0&&(i!==void 0&&(ne.remove(i),i=void 0),a.replaceChild(s.$el,t),l.value=!1,D=Math.max(0,D-1),D===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),s.$el.scrollIntoView!==void 0&&setTimeout(()=>{s.$el.scrollIntoView()})))}return _e(()=>{t=document.createElement("span")}),Z(()=>{n.fullscreen===!0&&d()}),le(u),Object.assign(s,{toggleFullscreen:m,setFullscreen:d,exitFullscreen:u}),{inFullscreen:l,toggleFullscreen:m}}const Re=["top","right","bottom","left"],je=["regular","flat","outline","push","unelevated"];var He=J({name:"QCarousel",props:{...$e,...De,...Qe,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>je.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Re.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...We,...Oe],setup(e,{slots:n}){const{proxy:{$q:r}}=H(),s=Te(e,r);let i=null,t;const{updatePanelsList:a,getPanelContent:l,panelDirectives:m,goToPanel:d,previousPanel:u,nextPanel:g,getEnabledPanels:f,panelIndex:_}=Le(),{inFullscreen:b}=ze(),k=p(()=>b.value!==!0&&e.height!==void 0?{height:e.height}:{}),w=p(()=>e.vertical===!0?"vertical":"horizontal"),L=p(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(b.value===!0?" fullscreen":"")+(s.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${w.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${Q.value}`:"")),T=p(()=>{const h=[e.prevIcon||r.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||r.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&r.lang.rtl===!0?h.reverse():h}),C=p(()=>e.navigationIcon||r.iconSet.carousel.navigationIcon),B=p(()=>e.navigationActiveIcon||C.value),Q=p(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),I=p(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));$(()=>e.modelValue,()=>{e.autoplay&&P()}),$(()=>e.autoplay,h=>{h?P():i!==null&&(clearTimeout(i),i=null)});function P(){const h=xe(e.autoplay)===!0?Math.abs(e.autoplay):5e3;i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,h>=0?g():u()},h)}Z(()=>{e.autoplay&&P()}),le(()=>{i!==null&&clearTimeout(i)});function E(h,S){return y("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${h} q-carousel__navigation--${Q.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[y("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},f().map(S))])}function W(){const h=[];if(e.navigation===!0){const S=n["navigation-icon"]!==void 0?n["navigation-icon"]:o=>y(R,{key:"nav"+o.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${o.active===!0?"":"in"}active`,...o.btnProps,onClick:o.onClick}),F=t-1;h.push(E("buttons",(o,c)=>{const x=o.props.name,q=_.value===c;return S({index:c,maxIndex:F,name:x,active:q,btnProps:{icon:q===!0?B.value:C.value,size:"sm",...I.value},onClick:()=>{d(x)}})}))}else if(e.thumbnails===!0){const S=e.controlColor!==void 0?` text-${e.controlColor}`:"";h.push(E("thumbnails",F=>{const o=F.props;return y("img",{key:"tmb#"+o.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${o.name===e.modelValue?"":"in"}active`+S,src:o.imgSrc||o["img-src"],onClick:()=>{d(o.name)}})}))}return e.arrows===!0&&_.value>=0&&((e.infinite===!0||_.value>0)&&h.push(y("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${w.value} absolute flex flex-center`},[y(R,{icon:T.value[0],...I.value,onClick:u})])),(e.infinite===!0||_.value<t-1)&&h.push(y("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${w.value} absolute flex flex-center`},[y(R,{icon:T.value[1],...I.value,onClick:g})]))),fe(n.control,h)}return()=>(t=a(n),y("div",{class:L.value,style:k.value},[ve("div",{class:"q-carousel__slides-container"},l(),"sl-cont",e.swipeable,()=>m.value)].concat(W())))}}),Ye=J({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:n}){const{proxy:{$q:r}}=H(),s=oe(be,A);if(s===A)return console.error("QPage needs to be a deep child of QLayout"),A;if(oe(we,A)===A)return console.error("QPage needs to be child of QPageContainer"),A;const t=p(()=>{const l=(s.header.space===!0?s.header.size:0)+(s.footer.space===!0?s.footer.size:0);if(typeof e.styleFn=="function"){const m=s.isContainer.value===!0?s.containerHeight.value:r.screen.height;return e.styleFn(l,m)}return{minHeight:s.isContainer.value===!0?s.containerHeight.value-l+"px":r.screen.height===0?l!==0?`calc(100vh - ${l}px)`:"100vh":r.screen.height-l+"px"}}),a=p(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>y("main",{class:a.value,style:t.value},j(n.default))}}),Ue="/assets/library-page.27d87665.png",Ke="/assets/reader-page.c2b6925c.png",Xe="/assets/note-page.90a68a53.png";const Y=e=>(ke("data-v-dc1fdf9e"),e=e(),Ie(),e),Ge={class:"column items-center"},Je=Y(()=>v("h2",{class:"text-white title"},se("Accelerate Your Research"),-1)),Ze={class:"row items-center"},et={class:"q-ml-md text-h6 text-white"},tt=Y(()=>v("div",{class:"absolute-bottom custom-caption"},[v("div",{class:"text-primary text-h4"},"Reference Management"),v("ul",null,[v("li",null," Favorites, folders, tags, search, etc. All essential functions are there "),v("li",null," Able to one-click-retrieve meta information and related reference by providing identifier such as DOI ")])],-1)),nt=Y(()=>v("div",{class:"absolute-bottom custom-caption"},[v("div",{class:"text-primary text-h4"},"Built-in PDF Reader"),v("ul",null,[v("li",null,"Able to adjust page layout, light/dark mode and more"),v("li",null,"Support markdown comment (also latex) in annotations"),v("li",null,"Able to preview internal links in hover windows")])],-1)),ot=Y(()=>v("div",{class:"absolute-bottom custom-caption"},[v("div",{class:"text-primary text-h4"},"WYSIWYG Markdown Editor"),v("ul",null,[v("li",null,"Support WYSIWYG markdown note and excalidraw note"),v("li",null,"Able to cite other references/notes in markdown note"),v("li",null," Support math(latex), code block, mindmap and more in markdown down ")])],-1)),at=Ce({__name:"IndexPage",setup(e){const n=O("library"),r=O({});Z(()=>{let i=s();console.log("system os",i),fetch("https://api.github.com/repos/ResearchHelper/research-helper/releases/latest",{method:"GET",headers:{Accept:"application/vnd.github+json"}}).then(t=>t.json()).then(t=>{r.value=t,console.log(t)})});function s(){var u,g;var i=window.navigator.userAgent,t=((g=(u=window.navigator)==null?void 0:u.userAgentData)==null?void 0:g.platform)||window.navigator.platform,a=["Macintosh","MacIntel","MacPPC","Mac68K"],l=["Win32","Win64","Windows","WinCE"],m=["iPhone","iPad","iPod"],d=null;return console.log(d),a.indexOf(t)!==-1?d="Mac OS":m.indexOf(t)!==-1?d="iOS":l.indexOf(t)!==-1?d="Windows":/Android/.test(i)?d="Android":/Linux/.test(t)&&(d="Linux"),d}return(i,t)=>(Se(),qe(Ye,null,{default:M(()=>{var a;return[v("div",Ge,[Je,v("div",Ze,[V(R,{square:"","no-caps":"",class:"bg-primary text-white button",size:"xl",label:"Try Sophosia",icon:"bi-download",href:"https://github.com/ResearchHelper/research-helper/releases",target:"_blank"}),v("div",et,se(`Version: ${(a=r.value)==null?void 0:a.tag_name}`),1)]),V(He,{arrows:"",animated:"",infinite:"",swipeable:"",autoplay:"",modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=l=>n.value=l),class:"q-ma-lg",style:{width:"62vw",height:"70vh"}},{default:M(()=>[V(G,{name:"library","img-src":Ue},{default:M(()=>[tt]),_:1}),V(G,{name:"reader","img-src":Ke},{default:M(()=>[nt]),_:1}),V(G,{name:"note","img-src":Xe},{default:M(()=>[ot]),_:1})]),_:1},8,["modelValue"])])]}),_:1}))}});var ut=Pe(at,[["__scopeId","data-v-dc1fdf9e"]]);export{ut as default};
