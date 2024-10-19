import{d as E,h as i,i as A,l as J,r as m,o as a,c as r,a as e,b as t,w as u,p as N,m as _,g as q,f as R,F as U,n as S,u as Q,j as W,t as k,k as D}from"./index-83cd6f99.js";import{_ as O,n as X,g as Y,d as Z}from"./InputAddress.vue_vue_type_style_index_0_lang-d56d4b40.js";import{v as ee}from"./utils-17deefef.js";import{o as le,a as oe}from"./helpers-a12fb3e4.js";import{l as z}from"./lodash-57cb95b6.js";const te={class:"bg-blue-50"},se=e("div",{class:"mb-4"},[e("div",{class:"flex justify-between align-center justify-center"},[e("h1",{class:"h5 font-bold m-0"},"Nueva Ruta")])],-1),ae={class:"new-customer gap-8"},ne={class:"w-full bg-white p-2 mt-3 mb-4 py-5"},ue={class:"gap-2"},de={class:"bg-white columns-2 py-1 pb-3"},re={class:"columns-3 mb-4"},ce=e("span",{class:"px-0 -mx-1 font-bold text-sm"},"S/",-1),ie=e("hr",null,null,-1),me={class:"columns-2 mt-4 gap-0"},pe={class:"bg-gray-100 py-1"},_e={class:"font-bold text-black text-sm text-center"},fe=e("span",{class:"uppercase text-xs"},"(Ida)",-1),ve={class:"bg-blue-100 py-1"},be={class:"font-bold text-black text-sm text-center"},ge=e("span",{class:"uppercase text-xs"},"(Vuelta)",-1),xe={class:"flex gap-0"},Ve={class:"flex flex-col w-1/2"},he={class:"flex gap-1 toll"},ye={class:"flex flex-col w-1/2"},ke={class:"flex gap-1 toll"},Ce={class:"flex justify-end"},we={class:"flex gap-2"},$e=e("span",{class:"text-xs px-1"},"Guardar",-1),Ne=E({__name:"NewRoute",emits:["close"],setup(G,{emit:T}){const b=le,B=oe,h=T,C=i(!1),f=i([]),g=i([]),{isValid:I,validate:F,reset:w}=A("formRef"),c=J({}),$=i(null),x=i(null),p=async()=>{if(F()){C.value=!0;try{await X({from:$.value.label,to:x.value.label,kilometers:c.kilometers||0,baseprice:c.baseprice||0,travelhours:c.hours||0,tolls:{from:f.value.map(d=>({quantity:d.q,amount:d.amount})),to:g.value.map(d=>({quantity:d.q,amount:d.amount}))}}),w(),h("close")}catch(d){console.log(d)}C.value=!1}},y=()=>{f.value.push({q:1,amount:0})},P=()=>{g.value.push({q:1,amount:0})},j=d=>{f.value.splice(d,1)},L=d=>{g.value.splice(d,1)};return(d,n)=>{const V=m("VaInput"),o=m("VaIcon"),s=m("VaSelect"),H=m("VaForm"),K=m("VaButton");return a(),r("div",te,[se,e("div",ae,[t(H,{ref:"formRef",immediate:"",class:"gap-2"},{default:u(()=>[e("div",ne,[e("div",ue,[e("div",de,[e("div",null,[t(O,{label:"Origen",onlyaddress:!0,nomaps:!0,onSelected:n[0]||(n[0]=l=>$.value=l)})]),e("div",null,[t(O,{label:"Destino",onlyaddress:!0,nomaps:!0,onSelected:n[1]||(n[1]=l=>x.value=l)})])]),e("div",re,[e("div",null,[N((a(),q(V,{modelValue:c.baseprice,"onUpdate:modelValue":n[2]||(n[2]=l=>c.baseprice=l),label:"Precio base de Servicio",min:"0",rules:[_(ee).required],onChange:n[3]||(n[3]=()=>{c.baseprice=_(z.ceil)(c.baseprice,2)})},{prependInner:u(()=>[ce]),_:1},8,["modelValue","rules"])),[[_(b)]])]),e("div",null,[N(t(V,{modelValue:c.kilometers,"onUpdate:modelValue":n[4]||(n[4]=l=>c.kilometers=l),label:"Kilometros",type:"number",min:"0"},null,8,["modelValue"]),[[_(B)]])]),e("div",null,[N(t(V,{modelValue:c.hours,"onUpdate:modelValue":n[5]||(n[5]=l=>c.hours=l),label:"Horas de Viaje",type:"number",min:".5"},null,8,["modelValue"]),[[_(B)]])])]),ie,e("div",me,[e("div",pe,[e("p",_e,[R(" Peajes "),fe,t(o,{color:"primary",name:"add_circle",class:"cursor-pointer ml-2",onClick:n[6]||(n[6]=l=>y())})])]),e("div",ve,[e("p",be,[R(" Peajes "),ge,t(o,{color:"primary",name:"add_circle",class:"cursor-pointer ml-2",onClick:n[7]||(n[7]=l=>P())})])])]),e("div",xe,[e("div",Ve,[(a(!0),r(U,null,S(f.value,(l,M)=>(a(),r("div",{key:l,class:"bg-gray-100 px-1 pb-1"},[e("div",he,[t(s,{modelValue:l.q,"onUpdate:modelValue":v=>l.q=v,class:"quantity",options:[1,2,3,4,5,6,7,8,9,10],background:"#fff"},null,8,["modelValue","onUpdate:modelValue"]),N((a(),q(V,{modelValue:l.amount,"onUpdate:modelValue":v=>l.amount=v,type:"text",class:"amount",background:"#fff",onChange:()=>{l.amount=_(z.ceil)(l.amount,2)}},{append:u(()=>[t(o,{name:"delete",class:"cursor-pointer ml-1",color:"danger",onClick:v=>j(M)},null,8,["onClick"])]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])),[[_(b)]])])]))),128))]),e("div",ye,[(a(!0),r(U,null,S(g.value,(l,M)=>(a(),r("div",{key:l,class:"flex flex-col bg-blue-100 pl-1 pr-3 pb-1"},[e("div",ke,[t(s,{modelValue:l.q,"onUpdate:modelValue":v=>l.q=v,class:"quantity",options:[1,2,3,4,5,6,7,8,9,10],background:"#fff"},null,8,["modelValue","onUpdate:modelValue"]),N((a(),q(V,{modelValue:l.amount,"onUpdate:modelValue":v=>l.amount=v,type:"text",class:"amount",background:"#fff",onChange:()=>{l.amount=_(z.ceil)(l.amount,2)}},{append:u(()=>[t(o,{name:"delete",class:"cursor-pointer ml-1",color:"danger",onClick:v=>L(M)},null,8,["onClick"])]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])),[[_(b)]])])]))),128))])])])])]),_:1},512)]),e("div",null,[e("div",Ce,[e("div",we,[t(K,{icon:"save",color:"primary",disabled:!_(I)||!g.value.length||!f.value.length,loading:C.value,onClick:p},{default:u(()=>[$e]),_:1},8,["disabled","loading"])])])])])}}});const qe={class:"flex flex-col space-y-6 md:space-y-4"},Re=e("span",{class:"px-1"},"Nueva Ruta",-1),Ue={class:"flex flex-col p-4 bg-backgroundSecondary rounded-lg"},Se={class:"va-table-responsive"},Be={class:"va-table w-full text-xs"},Ie=e("thead",null,[e("tr",null,[e("th",null,"#"),e("th",null,"Origen"),e("th",null,"Destino"),e("th",null,"Kilometros"),e("th",null,"P. Base"),e("th",null,"Horas"),e("th",null,"Peajes"),e("th")])],-1),je={key:0,class:"m-0 font-bold text-xs"},De={key:1,class:"bg-blue-100 px-2 pb-2 pt-1 rounded-md"},Te={key:0},Fe=e("p",{class:"text-xs font-bold mb-1 px-1"},"Ida:",-1),Pe={key:1},Le=e("p",{class:"text-xs font-bold mt-2 mb-1 px-1"},"Vuelta:",-1),Me={class:"flex gap-1"},ze=e("p",{class:"text-sm"},"¿Deseas continuar?",-1),Ae=E({__name:"General",setup(G){const{notify:T}=Q(),b=i(!1),B=i(!1),h=i(!1),C=i(!1),f=i(!1),g=i(null),I=i([]),F=()=>{b.value=!1,B.value=!1,w()};W(()=>{w()});const w=async()=>{f.value=!0;const x=await Y();I.value=x,f.value=!1},c=async()=>{h.value=!1,await Z(g.value),T({message:"Ruta eliminada correctamente",color:"success"}),w()},$=x=>{g.value=x,h.value=!!x};return(x,p)=>{const y=m("VaButton"),P=m("VaCardTitle"),j=m("VaBadge"),L=m("VaCardContent"),d=m("VaCard"),n=m("VaInnerLoading"),V=m("VaModal");return a(),r("div",qe,[t(n,{loading:f.value},{default:u(()=>[t(d,null,{default:u(()=>[t(P,{class:"d-flex justify-between"},{default:u(()=>[R(" Maestro de Rutas "),t(y,{icon:"add",color:"primary",onClick:p[0]||(p[0]=o=>b.value=!0)},{default:u(()=>[Re]),_:1})]),_:1}),t(L,null,{default:u(()=>[e("div",Ue,[e("div",Se,[e("table",Be,[Ie,e("tbody",null,[(a(!0),r(U,null,S(I.value,o=>(a(),r("tr",{key:o.id},[e("td",null,k(o.id),1),e("td",null,k(o.from),1),e("td",null,k(o.to),1),e("td",null,k(o.kilometers||"-"),1),e("td",null,"S/ "+k(o.baseprice),1),e("td",null,k(o.travelhours||"-"),1),e("td",null,[o.tolls.length?D("",!0):(a(),r("p",je,"Sin Información")),o.tolls.length?(a(),r("div",De,[o.tolls.filter(s=>s.type===0).length?(a(),r("div",Te,[Fe,(a(!0),r(U,null,S(o.tolls.filter(s=>s.type===0),s=>(a(),q(j,{key:s,text:"("+s.quantity+") S/"+s.amount,color:"primary",class:"mr-2"},null,8,["text"]))),128))])):D("",!0),o.tolls.filter(s=>s.type===1).length?(a(),r("div",Pe,[Le,(a(!0),r(U,null,S(o.tolls.filter(s=>s.type===1),s=>(a(),q(j,{key:s,text:"("+s.quantity+") S/"+s.amount,color:"primary",class:"mr-2"},null,8,["text"]))),128))])):D("",!0)])):D("",!0)]),e("td",null,[e("div",Me,[t(y,{icon:"delete",color:"danger",round:"",onClick:s=>$(o.id)},null,8,["onClick"])])])]))),128))])])])])]),_:1})]),_:1})]),_:1},8,["loading"]),t(V,{modelValue:b.value,"onUpdate:modelValue":p[1]||(p[1]=o=>b.value=o),size:"460px","close-button":"","hide-default-actions":"","no-dismiss":"",blur:""},{default:u(()=>[e("div",null,[t(Ne,{onClose:F})])]),_:1},8,["modelValue"]),t(V,{modelValue:h.value,"onUpdate:modelValue":p[3]||(p[3]=o=>h.value=o),size:"250px","hide-default-actions":"","no-dismiss":"",blur:""},{footer:u(()=>[t(y,{size:"small",preset:"secondary",class:"mr-1",onClick:p[2]||(p[2]=o=>$(null))},{default:u(()=>[R(" Cancelar")]),_:1}),t(y,{size:"small",loading:C.value,onClick:c},{default:u(()=>[R(" Continuar")]),_:1},8,["loading"])]),default:u(()=>[ze]),_:1},8,["modelValue"])])}}});export{Ae as _};
//# sourceMappingURL=General.vue_vue_type_script_setup_true_lang-6580e66b.js.map
