import{A as u,d as E,x as N,r as P,a as D,j as U,u as R,o as F,b as v,c as y,e as J,h as o,t as B,k as d,m as C,w as g,f as _,n as $,i as G}from"./index-b6bf2d81.js";import{v as x}from"./utils-17deefef.js";import{a as L}from"./helpers-a12fb3e4.js";const m={list:u+"/contacts",delete:u+"/contacts",detail:u+"/contacts",register:u+"/contacts"},f=localStorage.getItem("__token");async function fe(t){const a={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+f}};let e=null;return await fetch(t?`${m.list}?start_date=${t.start||""}&end_date=${t.end||""}&status=${t.status||""}`:m.list,a).then(s=>{e=s.json()}),e}async function ye(t){const a={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+f},body:JSON.stringify(t)};let e=null;return await fetch(m.register,a).then(s=>{e=s.json()}),e}async function ge(t){const a={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+f}};let e=null;return await fetch(`${m.register}/${t}/archive`,a).then(s=>{e=s.json()}),e}async function we(t){const a={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+f}};let e=null;return await fetch(`${m.delete}/${t}`,a).then(s=>{e=s.json()}),e}async function be(t){const a={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+f}};let e=null;return await fetch(`${m.detail}/${t}`,a).then(s=>{e=s.json()}),e}async function ve(t,a){const e={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+f},body:JSON.stringify(a)};let s=null;return await fetch(`${m.detail}/${t}`,e).then(i=>{s=i.json()}),s}const w={list:u+"/companies",delete:u+"/companies",detail:u+"/companies",register:u+"/companies"},V=localStorage.getItem("__token");async function Ce(t){const a={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+V}};let e=null;return await fetch(t?`${w.list}?start_date=${t.start||""}&end_date=${t.end||""}&status=${t.status||""}`:w.list,a).then(s=>{e=s.json()}),e}async function W(t){const a={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+V},body:JSON.stringify(t)};let e=null;return await fetch(w.register,a).then(s=>{e=s.json()}),e}async function Ve(t){const a={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+V}};let e=null;return await fetch(`${w.delete}/${t}`,a).then(s=>{e=s.json()}),e}async function M(t,a){const e={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+V},body:JSON.stringify(a)};let s=null;return await fetch(`${w.detail}/${t}`,e).then(i=>{s=i.json()}),s}const H={class:"bg-blue-50"},K={class:"mb-4"},Q={class:"flex justify-between align-center justify-center"},X={class:"h5 font-bold m-0"},Y={class:"new-customer gap-8"},Z={class:"w-full bg-white p-2 mt-3 mb-4 py-5"},ee={class:"gap-2"},te={class:"w-full columns-1"},se={class:"w-full"},ae={class:"w-full mt-2"},ne={class:"columns-2 mt-3"},oe={class:"w-full"},le={class:"w-full"},ie={class:"columns-1 mt-3"},re={class:"w-full"},ce={class:"pb-3"},de={class:"flex justify-end"},ue={class:"flex gap-2"},pe={class:"text-xs px-1"},je=E({__name:"NewCompany",props:{data:{default:null,type:Object}},emits:["close"],setup(t,{emit:a}){const e=a,s=L,i=t,{t:T}=N(),j=P(!1),{isValid:A,validate:z,reset:I}=D("formRef"),n=U({}),{notify:O}=R();F(()=>{var p,l,c,h,b;i.data&&(n.socialreason=(p=i.data)==null?void 0:p.socialreason,n.ruc=(l=i.data)==null?void 0:l.ruc,n.whatsapp=(c=i.data)==null?void 0:c.whatsapp,n.phone=(h=i.data)==null?void 0:h.phone,n.address=(b=i.data)==null?void 0:b.address)});const q=async()=>{var p;if(z()){j.value=!0;try{i.data?(await M((p=i.data)==null?void 0:p.id,n),O({message:"Emnpresa actualizada correctamente",color:"success"})):(await W(n),O({message:"Emnpresa registrada correctamente",color:"success"}),I()),e("close")}catch(l){console.log(l)}j.value=!1}},S=()=>{window.open("https://e-consultaruc.sunat.gob.pe/cl-ti-itmrconsruc/FrameCriterioBusquedaWeb.jsp","_blank","menubar=1,resizable=0,width=600,height=500")};return(p,l)=>{const c=v("VaInput"),h=v("VaIcon"),b=v("VaForm"),k=v("VaButton");return y(),J("div",H,[o("div",K,[o("div",Q,[o("h1",X,B(d(T)("contacts.newCompany")),1)])]),o("div",Y,[!p.$props.data||n.socialreason?(y(),C(b,{key:0,ref:"formRef",immediate:"",class:"gap-2"},{default:g(()=>[o("div",Z,[o("div",ee,[o("div",te,[o("div",se,[_(c,{modelValue:n.socialreason,"onUpdate:modelValue":l[0]||(l[0]=r=>n.socialreason=r),maxlength:"40",stateful:"",clearable:"",name:"company_socialreason",label:"Razón social",rules:[d(x).required]},null,8,["modelValue","rules"])]),o("div",ae,[$((y(),C(c,{modelValue:n.ruc,"onUpdate:modelValue":l[2]||(l[2]=r=>n.ruc=r),maxlength:"20",name:"ruc",stateful:"",clearable:"",label:"RUC",rules:[d(x).required]},{appendInner:g(()=>[_(h,{name:"open_in_new",class:"cursor-pointer",onClick:l[1]||(l[1]=r=>S())})]),_:1},8,["modelValue","rules"])),[[d(s)]])])]),o("div",ne,[o("div",oe,[$((y(),C(c,{modelValue:n.phone,"onUpdate:modelValue":l[3]||(l[3]=r=>n.phone=r),stateful:"",clearable:"",maxlength:"12",name:"company_phone",label:"Teléfono"},{prependInner:g(()=>[_(h,{name:"call",class:"material-symbols-outlined -mx-1.5",color:"secondary"})]),_:1},8,["modelValue"])),[[d(s)]])]),o("div",le,[$((y(),C(c,{modelValue:n.whatsapp,"onUpdate:modelValue":l[4]||(l[4]=r=>n.whatsapp=r),stateful:"",maxlength:"12",clearable:"",name:"company_whatsapp",label:"WhatsApp"},{prependInner:g(()=>[_(h,{name:"call",class:"material-symbols-outlined -mx-1.5",color:"secondary"})]),_:1},8,["modelValue"])),[[d(s)]])])]),o("div",ie,[o("div",re,[_(c,{modelValue:n.address,"onUpdate:modelValue":l[5]||(l[5]=r=>n.address=r),stateful:"",clearable:"",maxlength:"50",name:"company_address",label:"Dirección de contacto"},null,8,["modelValue"])])])])])]),_:1},512)):G("",!0)]),o("div",ce,[o("div",de,[o("div",ue,[_(k,{icon:"save",color:"primary",disabled:!d(A),loading:j.value,onClick:q},{default:g(()=>[o("span",pe,B(i.data?"Actualizar empresa":d(T)("contacts.createCompany")),1)]),_:1},8,["disabled","loading"])])])])])}}});export{je as _,ge as a,Ce as b,Ve as c,we as d,be as e,fe as g,ye as n,ve as u};
//# sourceMappingURL=NewCompany.vue_vue_type_style_index_0_lang-a531dfe8.js.map
