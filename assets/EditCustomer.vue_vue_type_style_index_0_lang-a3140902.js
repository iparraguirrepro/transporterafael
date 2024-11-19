import{d as O,x as G,r as S,a as M,u as $,G as H,o as J,C as K,b as m,c as r,m as y,w as c,h as e,t as b,k as s,f as n,n as h,e as N,i as B}from"./index-5c8bf84e.js";import{e as Q,u as X,b as Y}from"./NewCompany.vue_vue_type_style_index_0_lang-cf015035.js";import{v as V}from"./utils-17deefef.js";import{a as Z}from"./helpers-a12fb3e4.js";const ee={class:"bg-blue-50"},ae={class:"flex justify-between align-center justify-center"},le={class:"h5 font-bold m-0"},oe={class:"flex gap-2"},ne={class:"text-xs px-1"},te={class:"py-4 new-customer gap-8"},se={class:"w-full bg-white p-2"},de=e("p",{class:"text-sm font-medium mb-3"},"Datos personales",-1),ce={class:"gap-2"},ue={class:"w-full columns-4 gap-4"},ie={class:"w-full mt-3"},me={class:"w-full"},re={class:"w-full columns-4 gap-4 mt-3 pb-3"},pe={class:"w-full mt-5"},ve={key:0,class:"columns-3 mt-5"},_e=e("div",{class:"pt-5"},null,-1),fe={key:1,class:"bg-blue-50 px-3 py-2 mt-5"},ye={class:"font-bold text-sm mb-3"},be={class:"columns-4"},he={class:"pb-3"},Ve={class:"flex justify-end"},ge={class:"flex gap-2"},xe={class:"text-xs px-1"},ke=O({__name:"EditCustomer",props:{id:{type:String,default:""}},emits:["close"],setup(R,{emit:T}){const v=Z,E=T,k=R,{t:g}=G(),u=S(!1),{isValid:U,validate:A,reset:j}=M("formRef"),a=S({havecompany:!1}),x=S([]),{notify:q}=$(),D=async()=>{if(A()){u.value=!0;const{fullname:d,document_type:l,document:_,ruc:t,email:f,email_corporative:i,cellphone:w,whatsapp:I,address:C,havecompany:o,company:P}=a.value,W=l==null?void 0:l.code;await X(k.id,{fullname:d,document_type:W,document:_,ruc:t,email:f,email_corporative:i,cellphone:w,whatsapp:I,address:C,havecompany:o,company:P}),q({message:"Cliente actualizado correctamente",color:"success"}),j(),u.value=!1,E("close")}},p=H(()=>x.value.find(d=>d.id===a.value.company));J(async()=>{K(()=>a.value.havecompany,async l=>{l&&(u.value=!0,await L(),u.value=!1)});const d=await Q(k.id);a.value=d,a.value.havecompany=!!d.havecompany,a.value.document_type={code:d.document_type,text:"DNI"}});const F=[{code:1,text:"DNI"},{code:2,text:"C.E"},{code:3,text:"PASAPORTE"}],z=()=>{window.open("https://e-consultaruc.sunat.gob.pe/cl-ti-itmrconsruc/FrameCriterioBusquedaWeb.jsp","_blank","menubar=1,resizable=0,width=600,height=500")},L=async()=>{const d=await Y();x.value=d};return(d,l)=>{const _=m("VaButton"),t=m("VaInput"),f=m("VaSelect"),i=m("VaIcon"),w=m("VaSwitch"),I=m("VaForm"),C=m("VaInnerLoading");return r(),y(C,{loading:u.value,style:{"--va-inner-loading-min-width":"100%"}},{default:c(()=>[e("div",ee,[e("div",null,[e("div",ae,[e("h1",le,b(s(g)("contacts.contactDetail")),1),e("div",oe,[n(_,{icon:"save",color:"primary",disabled:!s(U),loading:u.value,onClick:D},{default:c(()=>[e("span",ne,b(s(g)("contacts.updateContact")),1)]),_:1},8,["disabled","loading"])])])]),e("div",te,[n(I,{ref:"formRef",immediate:"",class:"gap-2"},{default:c(()=>[e("div",se,[de,e("div",ce,[e("div",ue,[e("div",null,[n(t,{modelValue:a.value.fullname,"onUpdate:modelValue":l[0]||(l[0]=o=>a.value.fullname=o),stateful:"",name:"fullname",placeholder:"Sin Información",clearable:"",maxlength:"50",label:"Nombres completos",loading:u.value,rules:[s(V).required]},null,8,["modelValue","loading","rules"])]),e("div",null,[n(f,{modelValue:a.value.document_type,"onUpdate:modelValue":l[1]||(l[1]=o=>a.value.document_type=o),name:"document_type",placeholder:"Sin Información",options:F,label:"Tipo de documento"},null,8,["modelValue"])]),e("div",null,[h(n(t,{modelValue:a.value.document,"onUpdate:modelValue":l[2]||(l[2]=o=>a.value.document=o),name:"document",placeholder:"Sin Información",stateful:"",clearable:"",label:"N° Documento",maxlength:"22"},null,8,["modelValue"]),[[s(v)]])]),e("div",null,[h((r(),y(t,{modelValue:a.value.ruc,"onUpdate:modelValue":l[4]||(l[4]=o=>a.value.ruc=o),name:"ruc",maxlength:"20",placeholder:"Sin Información",stateful:"",clearable:"",label:"RUC"},{appendInner:c(()=>[n(i,{name:"open_in_new",class:"cursor-pointer",onClick:l[3]||(l[3]=o=>z())})]),_:1},8,["modelValue"])),[[s(v)]])])]),e("div",ie,[e("div",me,[n(t,{modelValue:a.value.address,"onUpdate:modelValue":l[5]||(l[5]=o=>a.value.address=o),name:"address",placeholder:"Sin Información",stateful:"",clearable:"",label:"Dirección de contacto"},null,8,["modelValue"])])]),e("div",re,[e("div",null,[n(t,{modelValue:a.value.email,"onUpdate:modelValue":l[6]||(l[6]=o=>a.value.email=o),name:"email",placeholder:"Sin Información",stateful:"",maxlength:"25",clearable:"",label:"Correo electrónico"},{prependInner:c(()=>[n(i,{name:"alternate_email",class:"material-symbols-outlined -mx-1.5",color:"secondary"})]),_:1},8,["modelValue"])]),e("div",null,[n(t,{modelValue:a.value.email_corporative,"onUpdate:modelValue":l[7]||(l[7]=o=>a.value.email_corporative=o),name:"email_corporative",placeholder:"Sin Información",stateful:"",clearable:"",maxlength:"25",label:"Correo corporativo",rules:[s(V).email]},{prependInner:c(()=>[n(i,{name:"alternate_email",class:"material-symbols-outlined -mx-1.5",color:"secondary"})]),_:1},8,["modelValue","rules"])]),e("div",null,[h((r(),y(t,{modelValue:a.value.cellphone,"onUpdate:modelValue":l[8]||(l[8]=o=>a.value.cellphone=o),placeholder:"Sin Información",maxlength:"12",name:"cellphone",stateful:"",clearable:"",label:"Teléfono",rules:[s(V).required]},{prependInner:c(()=>[n(i,{name:"call",class:"material-symbols-outlined -mx-1.5",color:"secondary"})]),_:1},8,["modelValue","rules"])),[[s(v)]])]),e("div",null,[h((r(),y(t,{modelValue:a.value.whatsapp,"onUpdate:modelValue":l[9]||(l[9]=o=>a.value.whatsapp=o),name:"whatsapp",maxlength:"12",placeholder:"Sin Información",stateful:"",clearable:"",label:"WhatsApp"},{prependInner:c(()=>[n(i,{name:"call",class:"material-symbols-outlined -mx-1.5",color:"secondary"})]),_:1},8,["modelValue"])),[[s(v)]])])]),e("div",pe,[n(w,{modelValue:a.value.havecompany,"onUpdate:modelValue":l[10]||(l[10]=o=>a.value.havecompany=o),class:"text-xs",name:"havecompany",label:"Representa una empresa",size:"small"},null,8,["modelValue"])]),a.value.havecompany?(r(),N("div",ve,[e("div",null,[n(f,{modelValue:a.value.company,"onUpdate:modelValue":l[11]||(l[11]=o=>a.value.company=o),name:"company_id",class:"text-xs",options:x.value,"track-by":"id","value-by":"id","text-by":"socialreason",searchable:"",clearable:"","search-placeholder-text":"Escribe el RUC",rules:[s(V).required],label:"Selecciona la empresa"},null,8,["modelValue","options","rules"])]),_e])):B("",!0),a.value.havecompany&&p.value?(r(),N("div",fe,[e("p",ye,b(p.value.socialreason),1),e("div",be,[e("div",null,[n(t,{"model-value":p.value.ruc,background:"#eee",name:"whatsapp",readonly:"",class:"opacity-85 cursor-not-allowed",placeholder:"Sin Información",label:"RUC"},null,8,["model-value"])]),e("div",null,[n(t,{"model-value":p.value.phone,background:"#eee",name:"whatsapp",placeholder:"Sin Información",readonly:"",class:"opacity-85 cursor-not-allowed",label:"Teléfono"},null,8,["model-value"])]),e("div",null,[n(t,{"model-value":p.value.whatsapp,background:"#eee",name:"whatsapp",readonly:"",placeholder:"Sin Información",class:"opacity-85 cursor-not-allowed",label:"WhatsApp"},null,8,["model-value"])])])])):B("",!0)])])]),_:1},512)]),e("div",he,[e("div",Ve,[e("div",ge,[n(_,{icon:"save",color:"primary",disabled:!s(U),loading:u.value,onClick:D},{default:c(()=>[e("span",xe,b(s(g)("contacts.updateContact")),1)]),_:1},8,["disabled","loading"])])])])])]),_:1},8,["loading"])}}});export{ke as _};
//# sourceMappingURL=EditCustomer.vue_vue_type_style_index_0_lang-a3140902.js.map
