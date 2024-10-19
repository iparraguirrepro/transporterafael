import{A as x,d as G,y as M,h as E,i as H,l as ee,u as K,j as Q,r as y,o as b,c as W,a as e,t as B,m as c,g as C,w as h,b as s,p as I,k as J,E as ae,D as te}from"./index-f95e1e62.js";import{v as V}from"./utils-17deefef.js";import{a as X}from"./helpers-a12fb3e4.js";const S={list:x+"/contacts",delete:x+"/contacts",detail:x+"/contacts",register:x+"/contacts"},O=localStorage.getItem("__token");async function Ze(o){const d={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+O}};let t=null;return await fetch(o?`${S.list}?start_date=${o.start||""}&end_date=${o.end||""}&status=${o.status||""}`:S.list,d).then(n=>{t=n.json()}),t}async function ea(o){const d={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+O},body:JSON.stringify(o)};let t=null;return await fetch(S.register,d).then(n=>{t=n.json()}),t}async function aa(o){const d={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+O}};let t=null;return await fetch(`${S.register}/${o}/archive`,d).then(n=>{t=n.json()}),t}async function ta(o){const d={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+O}};let t=null;return await fetch(`${S.delete}/${o}`,d).then(n=>{t=n.json()}),t}async function le(o){const d={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+O}};let t=null;return await fetch(`${S.detail}/${o}`,d).then(n=>{t=n.json()}),t}async function oe(o,d){const t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+O},body:JSON.stringify(d)};let n=null;return await fetch(`${S.detail}/${o}`,t).then(u=>{n=u.json()}),n}const k={list:x+"/companies",delete:x+"/companies",detail:x+"/companies",register:x+"/companies"},z=localStorage.getItem("__token");async function ne(o){const d={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+z}};let t=null;return await fetch(o?`${k.list}?start_date=${o.start||""}&end_date=${o.end||""}&status=${o.status||""}`:k.list,d).then(n=>{t=n.json()}),t}async function se(o){const d={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+z},body:JSON.stringify(o)};let t=null;return await fetch(k.register,d).then(n=>{t=n.json()}),t}async function la(o){const d={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+z}};let t=null;return await fetch(`${k.delete}/${o}`,d).then(n=>{t=n.json()}),t}async function ce(o,d){const t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+z},body:JSON.stringify(d)};let n=null;return await fetch(`${k.detail}/${o}`,t).then(u=>{n=u.json()}),n}const ie={class:"bg-blue-50"},de={class:"mb-4"},re={class:"flex justify-between align-center justify-center"},ue={class:"h5 font-bold m-0"},me={class:"new-customer gap-8"},pe={class:"w-full bg-white p-2 mt-3 mb-4 py-5"},he={class:"gap-2"},ve={class:"w-full columns-1"},_e={class:"w-full"},fe={class:"w-full mt-2"},ye={class:"columns-2 mt-3"},be={class:"w-full"},ge={class:"w-full"},Ve={class:"columns-1 mt-3"},we={class:"w-full"},xe={class:"pb-3"},Ce={class:"flex justify-end"},$e={class:"flex gap-2"},Ie={class:"text-xs px-1"},oa=G({__name:"NewCompany",props:{data:{default:null,type:Object}},emits:["close"],setup(o,{emit:d}){const t=d,n=X,u=o,{t:j}=M(),f=E(!1),{isValid:q,validate:N,reset:D}=H("formRef"),a=ee({}),{notify:T}=K();Q(()=>{var v,r,g,w,m;u.data&&(a.socialreason=(v=u.data)==null?void 0:v.socialreason,a.ruc=(r=u.data)==null?void 0:r.ruc,a.whatsapp=(g=u.data)==null?void 0:g.whatsapp,a.phone=(w=u.data)==null?void 0:w.phone,a.address=(m=u.data)==null?void 0:m.address)});const R=async()=>{var v;if(N()){f.value=!0;try{u.data?(await ce((v=u.data)==null?void 0:v.id,a),T({message:"Emnpresa actualizada correctamente",color:"success"})):(await se(a),T({message:"Emnpresa registrada correctamente",color:"success"}),D()),t("close")}catch(r){console.log(r)}f.value=!1}},A=()=>{window.open("https://e-consultaruc.sunat.gob.pe/cl-ti-itmrconsruc/FrameCriterioBusquedaWeb.jsp","_blank","menubar=1,resizable=0,width=600,height=500")};return(v,r)=>{const g=y("VaInput"),w=y("VaIcon"),m=y("VaForm"),l=y("VaButton");return b(),W("div",ie,[e("div",de,[e("div",re,[e("h1",ue,B(c(j)("contacts.newCompany")),1)])]),e("div",me,[!v.$props.data||a.socialreason?(b(),C(m,{key:0,ref:"formRef",immediate:"",class:"gap-2"},{default:h(()=>[e("div",pe,[e("div",he,[e("div",ve,[e("div",_e,[s(g,{modelValue:a.socialreason,"onUpdate:modelValue":r[0]||(r[0]=p=>a.socialreason=p),maxlength:"40",stateful:"",clearable:"",name:"company_socialreason",label:"Razón social",rules:[c(V).required]},null,8,["modelValue","rules"])]),e("div",fe,[I((b(),C(g,{modelValue:a.ruc,"onUpdate:modelValue":r[2]||(r[2]=p=>a.ruc=p),maxlength:"20",name:"ruc",stateful:"",clearable:"",label:"RUC",rules:[c(V).required]},{appendInner:h(()=>[s(w,{name:"open_in_new",class:"cursor-pointer",onClick:r[1]||(r[1]=p=>A())})]),_:1},8,["modelValue","rules"])),[[c(n)]])])]),e("div",ye,[e("div",be,[I((b(),C(g,{modelValue:a.phone,"onUpdate:modelValue":r[3]||(r[3]=p=>a.phone=p),stateful:"",clearable:"",maxlength:"12",name:"company_phone",label:"Teléfono",rules:[c(V).required]},{prependInner:h(()=>[s(w,{name:"call",class:"material-symbols-outlined -mx-1.5",color:"secondary"})]),_:1},8,["modelValue","rules"])),[[c(n)]])]),e("div",ge,[I((b(),C(g,{modelValue:a.whatsapp,"onUpdate:modelValue":r[4]||(r[4]=p=>a.whatsapp=p),stateful:"",maxlength:"12",clearable:"",name:"company_whatsapp",label:"WhatsApp"},{prependInner:h(()=>[s(w,{name:"call",class:"material-symbols-outlined -mx-1.5",color:"secondary"})]),_:1},8,["modelValue"])),[[c(n)]])])]),e("div",Ve,[e("div",we,[s(g,{modelValue:a.address,"onUpdate:modelValue":r[5]||(r[5]=p=>a.address=p),stateful:"",clearable:"",maxlength:"50",name:"company_address",label:"Dirección de contacto"},null,8,["modelValue"])])])])])]),_:1},512)):J("",!0)]),e("div",xe,[e("div",Ce,[e("div",$e,[s(l,{icon:"save",color:"primary",disabled:!c(q),loading:f.value,onClick:R},{default:h(()=>[e("span",Ie,B(u.data?"Actualizar empresa":c(j)("contacts.createCompany")),1)]),_:1},8,["disabled","loading"])])])])])}}});const Se={class:"bg-blue-50"},je={class:"flex justify-between align-center justify-center"},Te={class:"h5 font-bold m-0"},Be={class:"flex gap-2"},Oe={class:"text-xs px-1"},ke={class:"py-4 new-customer gap-8"},qe={class:"w-full bg-white p-2"},Ae=e("p",{class:"text-sm font-medium mb-3"},"Datos personales",-1),Ue={class:"gap-2"},Ee={class:"w-full columns-4 gap-4"},ze={class:"w-full mt-3"},Ne={class:"w-full"},De={class:"w-full columns-4 gap-4 mt-3 pb-3"},Re={class:"w-full mt-5"},Pe={key:0,class:"columns-3 mt-5"},Fe=e("div",{class:"pt-5"},null,-1),Le={key:1,class:"bg-blue-50 px-3 py-2 mt-5"},We={class:"font-bold text-sm mb-3"},Je={class:"columns-4"},Ge={class:"pb-3"},Me={class:"flex justify-end"},He={class:"flex gap-2"},Ke={class:"text-xs px-1"},na=G({__name:"EditCustomer",props:{id:{type:String,default:""}},emits:["close"],setup(o,{emit:d}){const t=X,n=d,u=o,{t:j}=M(),f=E(!1),{isValid:q,validate:N,reset:D}=H("formRef"),a=E({havecompany:!1}),T=E([]),{notify:R}=K(),A=async()=>{if(N()){f.value=!0;const{fullname:m,document_type:l,document:p,ruc:_,email:U,email_corporative:$,cellphone:P,whatsapp:F,address:L,havecompany:i,company:Y}=a.value,Z=l==null?void 0:l.code;await oe(u.id,{fullname:m,document_type:Z,document:p,ruc:_,email:U,email_corporative:$,cellphone:P,whatsapp:F,address:L,havecompany:i,company:Y}),R({message:"Cliente actualizado correctamente",color:"success"}),D(),f.value=!1,n("close")}},v=ae(()=>T.value.find(m=>m.id===a.value.company));Q(async()=>{te(()=>a.value.havecompany,async l=>{l&&(f.value=!0,await w(),f.value=!1)});const m=await le(u.id);a.value=m,a.value.havecompany=!!m.havecompany,a.value.document_type={code:m.document_type,text:"DNI"}});const r=[{code:1,text:"DNI"},{code:2,text:"C.E"},{code:3,text:"PASAPORTE"}],g=()=>{window.open("https://e-consultaruc.sunat.gob.pe/cl-ti-itmrconsruc/FrameCriterioBusquedaWeb.jsp","_blank","menubar=1,resizable=0,width=600,height=500")},w=async()=>{const m=await ne();T.value=m};return(m,l)=>{const p=y("VaButton"),_=y("VaInput"),U=y("VaSelect"),$=y("VaIcon"),P=y("VaSwitch"),F=y("VaForm"),L=y("VaInnerLoading");return b(),C(L,{loading:f.value,style:{"--va-inner-loading-min-width":"100%"}},{default:h(()=>[e("div",Se,[e("div",null,[e("div",je,[e("h1",Te,B(c(j)("contacts.contactDetail")),1),e("div",Be,[s(p,{icon:"save",color:"primary",disabled:!c(q),loading:f.value,onClick:A},{default:h(()=>[e("span",Oe,B(c(j)("contacts.updateContact")),1)]),_:1},8,["disabled","loading"])])])]),e("div",ke,[s(F,{ref:"formRef",immediate:"",class:"gap-2"},{default:h(()=>[e("div",qe,[Ae,e("div",Ue,[e("div",Ee,[e("div",null,[s(_,{modelValue:a.value.fullname,"onUpdate:modelValue":l[0]||(l[0]=i=>a.value.fullname=i),stateful:"",name:"fullname",placeholder:"Sin Información",clearable:"",maxlength:"50",label:"Nombres completos",loading:f.value,rules:[c(V).required]},null,8,["modelValue","loading","rules"])]),e("div",null,[s(U,{modelValue:a.value.document_type,"onUpdate:modelValue":l[1]||(l[1]=i=>a.value.document_type=i),name:"document_type",placeholder:"Sin Información",options:r,rules:[c(V).required],label:"Tipo de documento"},null,8,["modelValue","rules"])]),e("div",null,[I(s(_,{modelValue:a.value.document,"onUpdate:modelValue":l[2]||(l[2]=i=>a.value.document=i),name:"document",placeholder:"Sin Información",stateful:"",clearable:"",label:"N° Documento",maxlength:"22",rules:[c(V).required]},null,8,["modelValue","rules"]),[[c(t)]])]),e("div",null,[I((b(),C(_,{modelValue:a.value.ruc,"onUpdate:modelValue":l[4]||(l[4]=i=>a.value.ruc=i),name:"ruc",maxlength:"20",placeholder:"Sin Información",stateful:"",clearable:"",label:"RUC"},{appendInner:h(()=>[s($,{name:"open_in_new",class:"cursor-pointer",onClick:l[3]||(l[3]=i=>g())})]),_:1},8,["modelValue"])),[[c(t)]])])]),e("div",ze,[e("div",Ne,[s(_,{modelValue:a.value.address,"onUpdate:modelValue":l[5]||(l[5]=i=>a.value.address=i),name:"address",placeholder:"Sin Información",stateful:"",clearable:"",label:"Dirección de contacto"},null,8,["modelValue"])])]),e("div",De,[e("div",null,[s(_,{modelValue:a.value.email,"onUpdate:modelValue":l[6]||(l[6]=i=>a.value.email=i),name:"email",placeholder:"Sin Información",stateful:"",maxlength:"25",clearable:"",label:"Correo electrónico",rules:[c(V).email]},{prependInner:h(()=>[s($,{name:"alternate_email",class:"material-symbols-outlined -mx-1.5",color:"secondary"})]),_:1},8,["modelValue","rules"])]),e("div",null,[s(_,{modelValue:a.value.email_corporative,"onUpdate:modelValue":l[7]||(l[7]=i=>a.value.email_corporative=i),name:"email_corporative",placeholder:"Sin Información",stateful:"",clearable:"",maxlength:"25",label:"Correo corporativo",rules:[c(V).email]},{prependInner:h(()=>[s($,{name:"alternate_email",class:"material-symbols-outlined -mx-1.5",color:"secondary"})]),_:1},8,["modelValue","rules"])]),e("div",null,[I((b(),C(_,{modelValue:a.value.cellphone,"onUpdate:modelValue":l[8]||(l[8]=i=>a.value.cellphone=i),placeholder:"Sin Información",maxlength:"12",name:"cellphone",stateful:"",clearable:"",label:"Teléfono",rules:[c(V).required]},{prependInner:h(()=>[s($,{name:"call",class:"material-symbols-outlined -mx-1.5",color:"secondary"})]),_:1},8,["modelValue","rules"])),[[c(t)]])]),e("div",null,[I((b(),C(_,{modelValue:a.value.whatsapp,"onUpdate:modelValue":l[9]||(l[9]=i=>a.value.whatsapp=i),name:"whatsapp",maxlength:"12",placeholder:"Sin Información",stateful:"",clearable:"",label:"WhatsApp"},{prependInner:h(()=>[s($,{name:"call",class:"material-symbols-outlined -mx-1.5",color:"secondary"})]),_:1},8,["modelValue"])),[[c(t)]])])]),e("div",Re,[s(P,{modelValue:a.value.havecompany,"onUpdate:modelValue":l[10]||(l[10]=i=>a.value.havecompany=i),class:"text-xs",name:"havecompany",label:"Representa una empresa",size:"small"},null,8,["modelValue"])]),a.value.havecompany?(b(),W("div",Pe,[e("div",null,[s(U,{modelValue:a.value.company,"onUpdate:modelValue":l[11]||(l[11]=i=>a.value.company=i),name:"company_id",class:"text-xs",options:T.value,"track-by":"id","value-by":"id","text-by":"socialreason",searchable:"",clearable:"","search-placeholder-text":"Escribe el RUC",rules:[c(V).required],label:"Selecciona la empresa"},null,8,["modelValue","options","rules"])]),Fe])):J("",!0),a.value.havecompany&&v.value?(b(),W("div",Le,[e("p",We,B(v.value.socialreason),1),e("div",Je,[e("div",null,[s(_,{"model-value":v.value.ruc,background:"#eee",name:"whatsapp",readonly:"",class:"opacity-85 cursor-not-allowed",placeholder:"Sin Información",label:"RUC"},null,8,["model-value"])]),e("div",null,[s(_,{"model-value":v.value.phone,background:"#eee",name:"whatsapp",placeholder:"Sin Información",readonly:"",class:"opacity-85 cursor-not-allowed",label:"Teléfono"},null,8,["model-value"])]),e("div",null,[s(_,{"model-value":v.value.whatsapp,background:"#eee",name:"whatsapp",readonly:"",placeholder:"Sin Información",class:"opacity-85 cursor-not-allowed",label:"WhatsApp"},null,8,["model-value"])])])])):J("",!0)])])]),_:1},512)]),e("div",Ge,[e("div",Me,[e("div",He,[s(p,{icon:"save",color:"primary",disabled:!c(q),loading:f.value,onClick:A},{default:h(()=>[e("span",Ke,B(c(j)("contacts.updateContact")),1)]),_:1},8,["disabled","loading"])])])])])]),_:1},8,["loading"])}}});export{oa as _,na as a,aa as b,ne as c,ta as d,la as e,Ze as g,ea as n};
//# sourceMappingURL=EditCustomer.vue_vue_type_style_index_0_lang-6c290ad1.js.map
