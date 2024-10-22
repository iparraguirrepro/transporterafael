import{G as u,I as pt,J as H,K as A,L as N,d as V,M as F,N as vt,O as Q,c as C,m as j,w as Z,P as gt,e as $,F as mt,g as ht,t as B,i as E,Q as yt,R as Ct,S as bt,k as x,T as _t,U as xt,r as St,o as zt,n as D,h as R,D as tt,W as et,X as K,f as nt,Y as q,Z as wt,$ as Ot,a0 as Tt,a1 as L,a2 as $t,A as T,E as It}from"./index-b6bf2d81.js";const ot={preset:{type:String,default:void 0}},Pt="VaLocalConfig",Et=u(()=>[]);function At(){return pt(Pt,Et)}const Nt=(t,e)=>e.test(t),st=(t,e)=>{if(typeof e!="string"&&e.global)return[...t.matchAll(e)].map(o=>o.slice(1));const n=t.match(e)||[];return n?n.length>1?n.slice(1):n:[]},at=/{[^}]*}/g,rt=t=>t.replace(at,"(.*)"),Rt=t=>(t.match(at)||[]).map(e=>e.replace(/{|}/g,"")),Vt=(t,e)=>st(t,rt(e)),jt=(t,e)=>{const n=Rt(e),o=Vt(t,e);return n.reduce((s,r,i)=>({...s,[r]:o[i]}),{})},Bt=(t,e)=>(t.match(e)||[])[0]===t,Lt=(t,e)=>{const n=rt(e);return Bt(t,new RegExp(n))},it=t=>typeof t.name=="string",lt=t=>t.name instanceof RegExp,Yt=(t,e)=>it(e)?Lt(t,e.name):lt(e)?Nt(t,e.name):!1,kt=(t,e)=>{const n=jt(t,e.name);return e.resolve&&e.resolve(n)},Ft=(t,e)=>{if(e.name.global)throw new Error(`Bad icon config with name ${e.name}. Please, don't use global regex as name.`);const n=st(t,e.name);return e.resolveFromRegex&&e.resolveFromRegex(...n)},Gt=(t,e)=>{if(it(e))return kt(t,e);if(lt(e))return Ft(t,e);throw Error("Unknown icon config")},Mt=(t,e,n=[])=>{const o=e.find(s=>n.includes(s.name.toString())?!1:Yt(t,s));if(!o)throw new Error(`Can not find icon config from ${t}. Please provide default config.`);return o},ct=(t,e,n=[])=>{if(!t)return;const o=Mt(t,e,n),s=H(Gt(t,o),o);return n=[...n,o.name.toString()],H(ct(s.to,e,n),s)},Xt=t=>{const e=["name","to","resolve","resolveFromRegex"],n=t;return e.forEach(o=>{delete n[o]}),n},Ht=(t,e)=>{const n=ct(t,e);return n===void 0?{}:Xt(n)},Dt=()=>{const{globalConfig:t}=A();return{getIcon:e=>Ht(e,t.value.icons)}},Kt=()=>typeof window>"u",qt={},h=()=>Kt()?typeof globalThis>"u"?qt:globalThis:window,Ut={defaultSize:48,sizes:{small:32,medium:48,large:64}},Jt={defaultSize:1,sizes:{small:.75,medium:1,large:1.25}},Wt={size:{type:[String,Number],default:"",validator:t=>typeof t=="string"||typeof t=="number"},sizesConfig:{type:Object,default:()=>Ut},fontSizesConfig:{type:Object,default:()=>Jt}},Qt=/(?<fontSize>\d+)(?<extension>px|rem)/i,U=t=>t/16-.5,Zt=(t,e=(n=>(n=N())==null?void 0:n.type.name)())=>{const{getGlobalConfig:n}=A(),o=u(()=>{var a,l;return e?(l=(a=n().components)==null?void 0:a[e])==null?void 0:l.sizesConfig:void 0}),s=u(()=>{var a,l,c;const{defaultSize:f,sizes:p}=t.sizesConfig,v=(a=o.value)==null?void 0:a.defaultSize;if(!t.size)return`${f||v}px`;if(typeof t.size=="string"){const g=(c=(l=o.value)==null?void 0:l.sizes)==null?void 0:c[t.size],y=p[t.size];return y?`${y}px`:g?`${g}px`:t.size}return`${t.size}px`}),r=u(()=>{const{defaultSize:a,sizes:l}=t.fontSizesConfig;if(!t.size)return a;if(typeof t.size=="string"){if(t.size in l)return l[t.size];const c=t.size.match(Qt);if(!c||!c.groups)throw new Error("Size prop should be either valid string or number");const{extension:f,fontSize:p}=c.groups;return f==="rem"?+p:U(+p)}return U(t.size)}),i=u(()=>`${r.value}rem`);return{sizeComputed:s,fontSizeComputed:i,fontSizeInRem:r}},te=V({name:"VaIcon",__name:"VaIcon",props:{...Wt,...ot,name:{type:String,default:""},tag:{type:String},component:{type:Object},color:{type:String},rotation:{type:[String,Number]},spin:{type:[String,Boolean]},flip:{type:String,default:"off",validator:t=>["off","horizontal","vertical","both"].includes(t)}},setup(t){const e=t,{getColor:n}=F(),{sizeComputed:o}=Zt(e),{getIcon:s}=Dt(),r=u(()=>s(e.name)),i=u(()=>e.component||e.tag||r.value.component||r.value.tag||"i"),a=vt(),l=u(()=>({...r.value.attrs,...Q(a,["class"])})),c=m=>{if(!(m===void 0||m===!1))return m==="counter-clockwise"?"va-icon--spin-reverse":"va-icon--spin"},f=u(()=>[r.value.class,c(e.spin??r.value.spin)]),p=u(()=>{const m=e.rotation?`rotate(${e.rotation}deg)`:"",b=e.flip==="vertical"||e.flip==="both"?-1:1,w=e.flip==="horizontal"||e.flip==="both"?-1:1;return`${e.flip==="off"?"":`scale(${b}, ${w})`} ${m}`.trim()}),v=u(()=>({transform:p.value,cursor:a.onClick?"pointer":null,color:e.color?n(e.color,void 0,!0):r.value.color,fontSize:o.value,height:o.value,lineHeight:o.value})),g=u(()=>a.tabindex??-1),y=u(()=>a.role!=="button"||g.value<0);return(m,b)=>(C(),j(Ct(i.value),yt({class:["va-icon",f.value],style:v.value,"aria-hidden":y.value,notranslate:""},l.value),{default:Z(()=>[gt(m.$slots,"default",{},()=>[r.value.content?(C(),$(mt,{key:0},[ht(B(r.value.content),1)],64)):E("",!0)])]),_:3},16,["class","style","aria-hidden"]))}}),ut=(t,e)=>{const n=t.__vccOpts||t;for(const[o,s]of e)n[o]=s;return n},ee=`:root,
:host {
  --va-icon-vertical-align: middle;
  --va-icon-user-select: none;
}
.va-icon {
  vertical-align: var(--va-icon-vertical-align);
  -webkit-user-select: var(--va-icon-user-select);
     -moz-user-select: var(--va-icon-user-select);
          user-select: var(--va-icon-user-select);
}
.va-icon[role^=button][tabindex]:not([tabindex^="-"]) {
  cursor: pointer;
}
.va-icon[role^=button][tabindex]:not([tabindex^="-"]):focus-visible {
  outline: 2px solid var(--va-focus) !important;
  border-radius: 2px;
}
.va-icon.va-icon {
  font-style: normal;
}
.va-icon--spin {
  animation: va-icon--spin-animation 1500ms linear infinite;
}
.va-icon--spin-reverse {
  animation: va-icon--spin-animation 1500ms linear infinite;
  animation-direction: reverse;
}
@keyframes va-icon--spin-animation {
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
}
.va-icon svg {
  fill: currentColor;
  height: 100%;
}`,ne=ut(te,[["styles",[ee]]]),oe=()=>{let t;return{start:(...o)=>(t=window.setTimeout(...o),t),clear:()=>t&&window.clearTimeout(t)}},J=(t,e)=>(e&&Object.keys(e).forEach(n=>{t=t.replace(`{${n}}`,String(e[n]))}),t),se=()=>{const{globalConfig:t}=A(),e=u(()=>t.value.i18n);return{tp:(n,o)=>n?(n.startsWith("$t:")&&(n=e.value[n.slice(3)]||n),J(n,o)||n):"",t(n,o){const s=e.value[n];return s?J(s,o)||n:(bt(`${n} not found in VuesticUI i18n config`),n)}}},ae=(t,e=!1)=>{const{props:n}=N(),{getColor:o,getTextColor:s}=F();return{textColorComputed:u(()=>{if(n.textColor)return o(n.textColor);const i=t?x(t):n.color;if(!i)return"currentColor";const a=o(i);return _t(a)?"currentColor":x(e)?a:o(s(a))})}},re=["role","aria-live"],ie={class:"va-toast__group"},le=["textContent"],ce={class:"va-toast__content"},ue=["innerHTML"],fe=["textContent"],de={key:1,class:"va-toast__content"},pe=V({name:"VaToast",__name:"VaToast",props:{...ot,title:{type:String,default:""},offsetY:{type:Number,default:16},offsetX:{type:Number,default:16},message:{type:[String,Function],default:""},dangerouslyUseHtmlString:{type:Boolean,default:!1},icon:{type:String,default:"close"},customClass:{type:String,default:""},duration:{type:Number,default:5e3},color:{type:String,default:""},closeable:{type:Boolean,default:!0},onClose:{type:Function},onClick:{type:Function},multiLine:{type:Boolean,default:!1},position:{type:String,default:"top-right",validator:t=>["top-right","top-left","bottom-right","bottom-left"].includes(t)},render:{type:Function},ariaCloseLabel:{type:String,default:"$t:close"},role:{type:String,default:void 0},inline:{type:Boolean,default:!1}},emits:["on-click","on-close"],setup(t,{emit:e}){const n=V({name:"VaToastRenderer",props:{render:{type:Function,required:!0}},setup:d=>()=>d.render()}),{tp:o}=se(),s=t,r=e,i=xt(),{getColor:a}=F(),{textColorComputed:l}=ae(u(()=>a(s.color))),c=St(!1),f=u(()=>s.position.includes("right")?"right":"left"),p=u(()=>s.position.includes("top")?"top":"bottom"),v=u(()=>[s.customClass,s.multiLine?"va-toast--multiline":"",s.inline?"va-toast--inline":""]),g=u(()=>({[p.value]:`${s.offsetY}px`,[f.value]:`${s.offsetX}px`,backgroundColor:a(s.color),color:l.value})),y=u(()=>s.role==="status"?"polite":"assertive"),m=u(()=>typeof s.message=="function"?s.message():s.message),b=()=>{var d,O;(d=i.value)==null||d.removeEventListener("transitionend",b),(O=i.value)==null||O.remove()},w=()=>{typeof s.onClick=="function"?s.onClick():r("on-click")},_=()=>{var d;c.value=!1,(d=i.value)==null||d.addEventListener("transitionend",b),typeof s.onClose=="function"?s.onClose():r("on-close")},G=oe(),M=G.clear,X=()=>{s.duration>0&&G.start(()=>c.value&&_(),s.duration)};return zt(()=>{c.value=!0,X()}),(d,O)=>(C(),j(Ot,{name:"va-toast-fade"},{default:Z(()=>[D(R("div",{ref_key:"rootElement",ref:i,role:d.$props.role??d.$props.closeable?"alertdialog":"alert","aria-live":y.value,"aria-atomic":"true",class:tt(["va-toast",v.value]),style:et(g.value),onMouseenter:O[0]||(O[0]=(...dt)=>x(M)&&x(M)(...dt)),onMouseleave:X,onClick:w},[R("div",ie,[d.$props.title?(C(),$("h2",{key:0,class:"va-toast__title",textContent:B(d.$props.title)},null,8,le)):E("",!0),D(R("div",ce,[d.$props.dangerouslyUseHtmlString?(C(),$("div",{key:0,innerHTML:m.value},null,8,ue)):(C(),$("p",{key:1,textContent:B(m.value)},null,8,fe))],512),[[K,d.$props.message]]),d.$props.render?(C(),$("div",de,[nt(x(n),{render:d.$props.render},null,8,["render"])])):E("",!0),d.$props.closeable?(C(),j(ne,{key:2,class:"va-toast__close-icon",role:"button","aria-label":x(o)(d.$props.ariaCloseLabel),tabindex:"0",size:"1rem",name:d.$props.icon,onClick:q(_,["stop"]),onKeydown:wt(q(_,["stop"]),["enter"])},null,8,["aria-label","name","onKeydown"])):E("",!0)])],46,re),[[K,c.value]])]),_:1}))}}),ve=`:root,
:host {
  --va-toast-display: flex;
  --va-toast-width: 330px;
  --va-toast-padding: 14px 26px 14px 13px;
  --va-toast-border-radius: 8px;
  --va-toast-border-color: transparent;
  --va-toast-border: 1px solid var(--va-toast-border-color);
  --va-toast-background-color: var(--va-background-secondary);
  --va-toast-box-shadow: 0 2px 12px 0 var(--va-shadow);
  --va-toast-transition: opacity 0.3s, transform 0.3s, left 0.3s, right 0.3s, top 0.4s, bottom 0.3s;
  --va-toast-z-index: calc(var(--va-z-index-teleport-overlay) + 100);
  /* Group */
  --va-toast-group-margin-left: 13px;
  --va-toast-group-margin-right: 8px;
  /* Title */
  --va-toast-title-font-weight: bold;
  --va-toast-title-font-size: 1rem;
  --va-toast-title-color: #303133;
  --va-toast-title-margin: 0 0 6px;
  /* Content */
  --va-toast-content-font-size: 1rem;
  --va-toast-content-line-height: 1.3125;
  --va-toast-content-padding-right: 20px;
  /* Icon */
  --va-toast-icon-height: 24px;
  --va-toast-icon-width: 24px;
  --va-toast-icon-font-size: 24px;
  /* Icon Close */
  --va-toast-close-icon-top: 18px;
  --va-toast-close-icon-right: 15px;
  --va-toast-close-icon-font-size: 1rem;
}
.va-toast {
  position: fixed;
  box-sizing: border-box;
  width: var(--va-toast-width);
  padding: var(--va-toast-padding);
  display: flex;
  align-items: center;
  border-radius: var(--va-toast-border-radius);
  border: var(--va-toast-border);
  background-color: var(--va-toast-background-color);
  box-shadow: var(--va-toast-box-shadow);
  transition: var(--va-toast-transition);
  overflow: hidden;
  z-index: var(--va-toast-z-index);
  font-family: var(--va-font-family);
}
.va-toast--inline {
  position: static;
}
.va-toast--multiline {
  min-height: 70px;
}
.va-toast--right {
  right: 16px;
}
.va-toast--left {
  left: 16px;
}
.va-toast__group {
  margin-left: var(--va-toast-group-margin-left);
  margin-right: var(--va-toast-group-margin-right);
}
.va-toast__title {
  font-weight: var(--va-toast-title-font-weight);
  font-size: var(--va-toast-title-font-size);
  margin: var(--va-toast-title-margin);
  font-size: 0.625rem;
  letter-spacing: 0.6px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
}
.va-toast__content {
  font-size: var(--va-toast-content-font-size);
  line-height: var(--va-toast-content-line-height);
  padding-right: var(--va-toast-content-padding-right);
}
.va-toast__content p,
.va-toast__content div {
  margin: 0;
}
.va-toast__icon {
  height: var(--va-toast-icon-height);
  width: var(--va-toast-icon-width);
  font-size: var(--va-toast-icon-font-size);
}
.va-toast__close-icon {
  position: absolute;
  top: 50%;
  right: var(--va-toast-close-icon-right);
  cursor: pointer;
  transform: translateY(-50%);
  font-size: var(--va-toast-close-icon-font-siz);
  opacity: 0.7;
}
.va-toast__close-icon:hover {
  opacity: 1;
}
.va-toast-fade-enter.right {
  right: 0;
  transform: translateX(100%);
}
.va-toast-fade-enter.left {
  left: 0;
  transform: translateX(-100%);
}
.va-toast-fade-leave-active {
  opacity: 0;
}`,ge=ut(pe,[["styles",[ve]]]),me=(t,e)=>{const n=At(),{globalConfig:o}=A(),s=u(()=>e.preset),r=i=>{var a,l,c;return(c=(l=(a=o.value.components)==null?void 0:a.presets)==null?void 0:l[t.name])==null?void 0:c[i]};return u(()=>{var i,a;const l={...(i=o.value.components)==null?void 0:i.all,...(a=o.value.components)==null?void 0:a[t.name]},c=n.value.reduce((v,g)=>g[t.name]?{...v,...g[t.name]}:v,{}),f=s.value||c.preset||l.preset,p=f&&r(f);return{...l,...c,...p}})},he=/([a-z0-9])([A-Z])/g,ye=t=>t.replace(he,"$1-$2").toLowerCase(),Ce=(t,e)=>e in t?t[e]:t[ye(e)],be=(t,e)=>{const n=t.props;return new Proxy(n,{get:(o,s)=>{var r;if(typeof s!="string")return o[s];const i=t.vnode.props||{},a=o[s],l=(r=e.value)==null?void 0:r[s];return Ce(i,s)!==void 0?a:l!==void 0?l:a}})},_e=(t,e)=>{const n=t.attrs;return new Proxy(n,{get:(o,s)=>{var r;if(typeof s!="string")return o[s];if(s==="class")return tt([e.value.class,n.class]);if(s==="style")return et([e.value.style,n.style]);const i=(r=e.value)==null?void 0:r[s];return i!==void 0?i:o[s]},ownKeys(o){return[...new Set([...Object.keys(n),...Object.keys(e.value)])]},getOwnPropertyDescriptor(o,s){return Reflect.getOwnPropertyDescriptor(e.value,s)??Reflect.getOwnPropertyDescriptor(n,s)}})},Y=t=>{const e=(n,o)=>{var s;const r=N(),i=me(t,n),a=u(()=>Q(i.value,Object.keys(n))),l=be(r,i),c=_e(r,a);r.props=l,r.attrs=c;const f=(s=t.setup)==null?void 0:s.call(t,Tt(l),{...o,attrs:c});return typeof f=="object"&&!r.exposed&&o.expose(f),f};return new Proxy(t,{get(n,o){return o==="setup"?e:n[o]}})},k="__c",xe=t=>(t[k]=Y(t[k]),t),Se=t=>"setup"in t?Y(t):k in t?xe(t):(t.setup=()=>({}),Y(t)),ze=Se(ge),ft=5;let I=1;h().vaToastInstances=[];const we=(t,e)=>{if(t.el){const n=e.includes("bottom")?-1:1;return(t.el.offsetHeight+ft)*n}return 0},Oe=(t,e,n)=>{const o=n.includes("bottom")?-1:1;return parseInt(t,10)-(e+ft)*o},S=t=>{var e;return((e=t.component)==null?void 0:e.props)||{}},Te=(t,e)=>{var n;if(!t)return;if(!h().vaToastInstances.length){I=1;return}const o=h().vaToastInstances.findIndex(c=>c===t);if(o<0)return;const s=S(t),{offsetX:r,offsetY:i,position:a}=s,l=(n=t.el)==null?void 0:n.offsetHeight;e(),h().vaToastInstances=h().vaToastInstances.reduce((c,f,p)=>{if(f===t)return c;if(f.component){const{offsetX:v,offsetY:g,position:y}=S(f);if(p>o&&r===v&&i===g&&a===y&&f.el&&l){const[b,w]=f.el.style.transform.match(/[\d-]+(?=px)/g),_=Oe(w,l,y);f.el.style.transform=`translate(0, ${_}px)`}}return[...c,f]},[]),h().vaToastInstances.length||(I=1)},$e=(t,e)=>{t&&(L(null,t),t.remove()),t=null},Ie=(t,{props:e,children:n,element:o,appContext:s}={})=>{let r=o,i;return i=nt(t,{...e,onClose:()=>{Te(i,()=>$e(r)),e!=null&&e.onClose&&e.onClose()}},n),s&&(i.appContext=s),r?L(i,r):typeof document<"u"&&L(i,r=document.createElement("div")),{vNode:i,el:r}},Pe=t=>{if(!h().vaToastInstances.length){I=1;return}h().vaToastInstances.forEach(e=>{t&&e.appContext!==t||S(e).onClose()})},W=t=>{const e=h().vaToastInstances.find(n=>{var o;return((o=n.el)==null?void 0:o.id)===t});e&&S(e).onClose()},Ee=t=>typeof t=="string"?{message:t}:t,Ae=(t,e)=>{const{vNode:n,el:o}=Ie(ze,{appContext:e,props:Ee(t)}),s=S(n);if(o&&n.el&&s){document.body.appendChild(o.childNodes[0]);const{offsetX:r,offsetY:i,position:a}=s;n.el.style.display="flex",n.el.id="notification_"+I;let l=0;return h().vaToastInstances.filter(c=>{const{offsetX:f,offsetY:p,position:v}=S(c);return f===r&&p===i&&a===v}).forEach(c=>{l+=we(c,a)}),n.el.style.transform=`translate(0, ${l}px)`,I+=1,h().vaToastInstances.push(n),n.el.id}return null},Ne=()=>{const t=N();return u(()=>{var e;return((e=$t())==null?void 0:e._context)||(t==null?void 0:t.appContext)})},Re=()=>{const t=Ne(),e=[],n=a=>{const l=Ae(a,t.value);return l&&e.push(l),l};return{init:a=>n(a),notify:n,close:a=>W(a),closeAll:(a=!1)=>Pe(a?void 0:t.value),closeAllCreatedInThisHook:()=>{e.forEach(a=>W(a))}}},z={list:T+"/oportunities",delete:T+"/oportunities",detail:T+"/oportunities",register:T+"/oportunities",status:T+"/oportunities-status"},P=localStorage.getItem("__token");async function Ye(t){const e={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+P}};let n=null;return await fetch(t?`${z.list}?start_date=${t.start||""}&end_date=${t.end||""}&status=${t.status||""}`:z.list,e).then(o=>{n=o.json()}),n}async function Ve(){const t={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+P}};let e=null;return await fetch(z.status,t).then(n=>{e=n.json()}),e}async function je(t,e){const n={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+P},body:JSON.stringify(t)};let o=null;return await fetch(`${z.status}/${e}`,n).then(s=>{o=s.json()}),o}async function ke(t){const e={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+P}};let n=null;return await fetch(`${z.delete}/${t}`,e).then(o=>{n=o.json()}),n}async function Fe(t){const e={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+P},body:JSON.stringify(t)};let n=null;return await fetch(z.register,e).then(o=>{n=o.json()}),n}const{notify:Be}=Re(),Ge=It("oportunities",{state:()=>({showConfirm:!1,cancelStatus:!1,isOnChangeStatus:!1,isLoading:!1,activeOportunity:null,statusOptions:[]}),getters:{vailable(){return this.cancelStatus}},actions:{async getQuotationStates(){const t=localStorage.getItem("quotation_satus")??"",e=t&&JSON.parse(t);if(e)this.statusOptions=e;else{const n=await Ve();this.statusOptions=n.map(o=>({label:o.name,id:o.order})),localStorage.setItem("quotation_satus",JSON.stringify(this.statusOptions))}},async doChangeStatus(){var t;try{this.isOnChangeStatus=!0;const e={status:this.activeOportunity.status,status_label:(t=this.statusOptions.find(n=>n.id===this.activeOportunity.status))==null?void 0:t.label};await je({...e,...e.status===4&&{comment:this.activeOportunity.comments,finalPrice:this.activeOportunity.total}},this.activeOportunity.id),Be({message:"El estado de la cotización #"+this.activeOportunity.id+" se ha actualizado.",color:"success",duration:1e3}),this.activeOportunity.final_price=this.activeOportunity.total,this.activeOportunity&&(this.activeOportunity.state=this.activeOportunity.status),this.activeOportunity=null,this.isOnChangeStatus=!1,this.hideConfirm()}catch{this.hideConfirm()}},setActiveOportunity(t){this.activeOportunity=t},viewConfirm(){this.cancelStatus=!0,this.showConfirm=!0},hideConfirm(){this.showConfirm=!1,this.cancelStatus=!1,this.activeOportunity&&(this.activeOportunity.status=this.activeOportunity.state),this.activeOportunity=null}}});export{Re as a,ke as d,Ye as g,Fe as n,Ge as u};
//# sourceMappingURL=oportunities-store-b5a756f8.js.map
