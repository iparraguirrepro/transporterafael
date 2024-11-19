import{_ as ae}from"./NewCustomer.vue_vue_type_style_index_0_lang-f5a586ba.js";import{g as ie,_ as ce,d as ue,a as de}from"./NewCompany.vue_vue_type_style_index_0_lang-a531dfe8.js";import{d as re,u as me,r as i,x as pe,o as _e,b as _,c,e as u,h as e,t as o,k as V,f as s,w as n,i as m,H as fe,g as d,F as G,l as J}from"./index-b6bf2d81.js";import{_ as ve}from"./EditCustomer.vue_vue_type_style_index_0_lang-3e16454e.js";import{_ as he}from"./NewOportunity.vue_vue_type_style_index_0_lang-ad31f3f4.js";import{f as be}from"./format-8e15a9c0.js";import"./utils-17deefef.js";import"./helpers-a12fb3e4.js";import"./Services-a3d54d81.js";import"./InputAddress.vue_vue_type_style_index_0_lang-80a80d86.js";import"./lodash-473566f6.js";import"./oportunities-store-b5a756f8.js";import"./Orders-dd267587.js";const ye={class:"py-4"},ge={class:"flex justify-between align-center justify-center"},Ce={class:"h5 m-0"},Ve={class:"flex gap-2"},xe=e("span",{class:"px-1"},"Descargar",-1),ke={class:"px-1"},Te={class:"px-1"},ze={class:"mt-5"},Ne={class:"columns-5 mb-7"},we={class:"w-full bg-white p-2"},Ue={class:"flex gap-1"},$e={class:"font-bold text-primary"},Ae={colspan:"8"},Ee={class:"flex justify-end mt-4"},Fe={class:"flex px-2 py-3 gap-2 bg-blue-50 mx-10 rounded my-2"},Ie={class:"w-full pl-2"},Se={class:"gap-1"},je={class:"text-base font-medium"},Me={class:"uppercase font-black"},Pe={class:"w-full columns-6 mt-2 mb-1"},Re={key:0,class:"w-full items-center text-xs"},Be=e("b",null,"DNI:",-1),qe=e("br",null,null,-1),Le={key:1,class:"w-full items-center text-xs"},Oe=e("b",null,"RUC:",-1),He=e("br",null,null,-1),We={key:2,class:"w-full items-center text-xs"},Ge=e("b",null,"Teléfono:",-1),Je=e("br",null,null,-1),Ke={key:3,class:"w-full items-center text-xs"},Qe=e("b",null,"WhatsApp:",-1),Xe=e("br",null,null,-1),Ye={key:4,class:"w-full items-center text-xs"},Ze=e("b",null,"Correo Electrónico:",-1),De=e("br",null,null,-1),el={class:"flex flex-col bg-white mt-6 py-2 pb-5 px-4"},ll={key:0,class:"bg-gray-100 p-3 rounded mt-4 pb-5"},tl={key:0,class:"bg-red-300 font-bold p-2 -mb-1"},sl={key:1,class:"va-table-responsive w-full"},ol={class:"va-table w-full"},nl=e("thead",null,[e("tr",null,[e("th",null,"n° Cotización"),e("th",null,"Comercial"),e("th",null,"Servicios"),e("th",null,"Vehiculos"),e("th",null,"Fecha Creación"),e("th",null,"Estado")])],-1),al={key:1,class:"bg-gray-100 p-3 rounded mt-4 pb-5"},il=e("p",{class:"bg-red-300 font-bold p-2"},"El cliente no tiene ordenes de trabajo",-1),cl=e("div",{class:"va-table-responsive w-full"},[e("table",{class:"va-table w-full"},[e("thead",null,[e("tr",null,[e("th",null,"n° Orden"),e("th",null,"Responsable"),e("th",null,"Servicios"),e("th",null,"Vehiculos"),e("th",null,"Fecha Inicio"),e("th",null,"Fecha Fin")])]),e("tbody")])],-1),ul=[il,cl],dl={key:2,class:"bg-gray-100 p-3 rounded mt-4 pb-5"},rl={key:0,class:"bg-red-300 font-bold p-2 -mb-1"},ml={key:1,class:"va-table-responsive w-full"},pl={class:"va-table w-full"},_l=e("thead",null,[e("tr",null,[e("th",null,"Razón Social"),e("th",null,"RUC"),e("th",null,"Teléfono"),e("th",null,"WhatsApp"),e("th",null,"Fecha Creación")])],-1),fl={class:"mt-4"},vl=e("p",{class:"text-sm"},"¿Deseas archivar este cliente?",-1),hl={class:"mt-4"},bl={class:"mt-4"},yl=e("p",{class:"text-sm"},"¿Deseas eliminar este cliente?",-1),Il=re({__name:"ListCustomers",setup(gl){const{notify:M}=me(),b=i([]),x=i(!1),k=i(!1),T=i(!1),$=i(!1),f=i(null),A=i(!1),E=i(!1),P=i(!1),K=i(0),z=i(12),F=i(1),I=i(""),{t:N}=pe(),Q=[{key:"id",sortable:!1},{key:"Nombres Completos",sortable:!1},{key:"Empresa",sortable:!1},{key:"Documento",sortable:!1},{key:"Teléfono",sortable:!1},{key:"Correo",sortable:!1},{key:"Fecha Creación",sortable:!1},{key:"Acciones",width:80,sortable:!1}];_e(()=>{S()});const S=async r=>{E.value=!0;const t=await ie(r);b.value=t.map(a=>{var U;return{...a,"Nombres Completos":a.fullname,Empresa:(U=a.company)==null?void 0:U.ruc,Documento:a.document,Teléfono:a.cellphone,Correo:a.email,"Fecha Creación":be(a.created_at,"dd/MM/yyyy hh:mm aa"),Acciones:!0,activeTab:0}}),E.value=!1},X=r=>{T.value=!!r,f.value=r},R=r=>{$.value=!!r,f.value=r},B=()=>{x.value=!1,T.value=!1,S()},Y=async()=>{A.value=!0,await ue(f.value),M({message:"Cliente eliminado correctamente",color:"success",duration:1e3}),setTimeout(()=>{A.value=!1,R(null),S()})},Z=()=>z.value&&z.value!==0?Math.ceil(b.value.length/z.value):b.value.length,j=i(!1),D=()=>{j.value=!0,setTimeout(()=>{j.value=!1},2e3),console.log("download")},ee=i(!1),w=i(!1),q=r=>{w.value=!!r,f.value=r},le=async()=>{await de(f.value),b.value=b.value.filter(r=>r.id!==f.value),f.value=null,w.value=!1,M({message:"Cliente archivado correctamente",color:"success",duration:1e3})};return(r,t)=>{const a=_("VaButton"),U=_("VaInput"),te=_("VaPagination"),C=_("VaIcon"),se=_("VaTab"),oe=_("VaTabs"),ne=_("VaDataTable");_("VaChip"),_("VaAlert");const g=_("VaModal");return c(),u("div",ye,[e("div",ge,[e("h1",Ce,o(V(N)("contacts.allContacts"))+" ("+o(b.value.length)+")",1),e("div",Ve,[s(a,{icon:"exit_to_app",color:"info",loading:j.value,href:V(fe)+"/contacts/xls",onClick:D},{default:n(()=>[xe]),_:1},8,["loading","href"]),s(a,{icon:"domain_add",color:"primary",onClick:t[0]||(t[0]=l=>k.value=!0)},{default:n(()=>[e("span",ke,o(V(N)("contacts.newCompany")),1)]),_:1}),s(a,{icon:"person_add",color:"primary",onClick:t[1]||(t[1]=l=>x.value=!0)},{default:n(()=>[e("span",Te,o(V(N)("contacts.newContact")),1)]),_:1})])]),e("div",ze,[e("div",Ne,[e("div",null,[s(U,{modelValue:I.value,"onUpdate:modelValue":t[2]||(t[2]=l=>I.value=l),label:V(N)("contacts.search"),placeholder:"Escribe lo que buscas",class:"text-xxs",clearable:"",background:"#fff"},null,8,["modelValue","label"])])]),e("div",we,[s(ne,{items:b.value,columns:Q,class:"text-xs",hoverable:"","selected-color":"#eee",filter:I.value,"per-page":z.value,"current-page":F.value,loading:E.value,"no-data-html":"...",onFiltered:t[4]||(t[4]=l=>K.value=l.items.length)},{"cell(Acciones)":n(({row:l,isExpanded:y})=>[e("div",Ue,[s(a,{icon:"archive",color:"gray",round:"",onClick:v=>{var h;return q((h=l==null?void 0:l.rowData)==null?void 0:h.id)}},null,8,["onClick"]),s(a,{icon:"edit",color:"#158de3",round:"",onClick:v=>{var h;return X((h=l==null?void 0:l.rowData)==null?void 0:h.id)}},null,8,["onClick"]),s(a,{icon:y?"va-arrow-up":"va-arrow-down",preset:"primary",onClick:v=>l.toggleRowDetails()},null,8,["icon","onClick"])])]),"cell(Empresa)":n(({row:l})=>{var y,v;return[e("span",$e,o((v=(y=l.rowData)==null?void 0:y.company)==null?void 0:v.ruc),1)]}),bodyAppend:n(()=>[e("tr",null,[e("td",Ae,[e("div",Ee,[s(te,{modelValue:F.value,"onUpdate:modelValue":t[3]||(t[3]=l=>F.value=l),size:"small",class:"text-xs mb-3 justify-center sm:justify-start","buttons-preset":"primary","active-page-color":"textPrimary",pages:Z()},null,8,["modelValue","pages"])])])])]),expandableRow:n(({rowData:l})=>{var y,v,h,L,O,H,W;return[e("div",Fe,[e("div",Ie,[e("div",Se,[e("span",je,[e("span",Me,o(l["Nombres Completos"]),1)])]),e("div",Pe,[l.Documento?(c(),u("div",Re,[Be,d(),qe,e("span",null,[d(o(l.Documento)+" ",1),s(C,{size:"10px",class:"cursor-pointer",name:"content_copy"})])])):m("",!0),l.ruc?(c(),u("div",Le,[Oe,d(),He,e("span",null,[d(o(l.ruc)+" ",1),s(C,{size:"10px",class:"cursor-pointer",name:"content_copy"})])])):m("",!0),l.cellphone?(c(),u("div",We,[Ge,d(),Je,e("span",null,[d(o(l.cellphone)+" ",1),s(C,{size:"10px",class:"cursor-pointer",name:"content_copy"})])])):m("",!0),l.whatsapp?(c(),u("div",Ke,[Qe,d(),Xe,e("span",null,[d(o(l.whatsapp)+" ",1),s(C,{size:"10px",class:"cursor-pointer",name:"content_copy"})])])):m("",!0),l.email?(c(),u("div",Ye,[Ze,d(),De,e("span",null,[d(o(l.email)+" ",1),s(C,{size:"10px",class:"cursor-pointer",name:"content_copy"})])])):m("",!0)]),e("div",el,[s(oe,{modelValue:l.activeTab,"onUpdate:modelValue":p=>l.activeTab=p},{tabs:n(()=>[(c(),u(G,null,J(["Empresa"],p=>s(se,{key:p},{default:n(()=>[d(o(p),1)]),_:2},1024)),64))]),_:2},1032,["modelValue","onUpdate:modelValue"]),l.activeTab===1?(c(),u("div",ll,[(y=l.quotations)!=null&&y.length?m("",!0):(c(),u("p",tl," El cliente no tiene cotizaciones ")),(v=l.quotations)!=null&&v.length?(c(),u("div",sl,[e("table",ol,[nl,e("tbody",null,[(c(!0),u(G,null,J(l.quotations,p=>(c(),u("tr",{key:p.id},[e("td",null,o(p.fullName),1),e("td",null,o(p.fullName),1),e("td",null,o(p.fullName),1),e("td",null,o(p.fullName),1),e("td",null,o(p.fullName),1),e("td",null,o(p.fullName),1)]))),128))])])])):m("",!0)])):m("",!0),l.activeTab===2?(c(),u("div",al,ul)):m("",!0),l.activeTab===0?(c(),u("div",dl,[l.company?m("",!0):(c(),u("p",rl," El cliente no está asociado a empresa ")),l.company?(c(),u("div",ml,[e("table",pl,[_l,e("tbody",null,[e("tr",null,[e("td",null,o((h=l.company)==null?void 0:h.socialreason),1),e("td",null,o((L=l.company)==null?void 0:L.ruc),1),e("td",null,o((O=l.company)==null?void 0:O.phone),1),e("td",null,o((H=l.company)==null?void 0:H.whatsapp),1),e("td",null,o((W=l.company)==null?void 0:W.created_at),1)])])])])):m("",!0)])):m("",!0)])])])]}),_:1},8,["items","filter","per-page","current-page","loading","no-data-html"]),m("",!0)])]),s(g,{modelValue:k.value,"onUpdate:modelValue":t[6]||(t[6]=l=>k.value=l),"hide-default-actions":"",size:"340px","close-button":"",blur:"","no-dismiss":""},{default:n(()=>[e("div",null,[s(ce,{onClose:t[5]||(t[5]=l=>k.value=!1)})])]),_:1},8,["modelValue"]),s(g,{modelValue:x.value,"onUpdate:modelValue":t[7]||(t[7]=l=>x.value=l),"hide-default-actions":"",size:"medium","close-button":"",blur:"","no-dismiss":""},{default:n(()=>[e("div",fl,[s(ae,{onClose:B})])]),_:1},8,["modelValue"]),s(g,{modelValue:w.value,"onUpdate:modelValue":t[9]||(t[9]=l=>w.value=l),size:"250px","hide-default-actions":"","no-dismiss":"",blur:""},{footer:n(()=>[s(a,{size:"small",preset:"secondary",class:"mr-1",onClick:t[8]||(t[8]=l=>q(null))},{default:n(()=>[d(" Cancelar")]),_:1}),s(a,{size:"small",loading:ee.value,onClick:le},{default:n(()=>[d(" Continuar")]),_:1},8,["loading"])]),default:n(()=>[vl]),_:1},8,["modelValue"]),s(g,{modelValue:T.value,"onUpdate:modelValue":t[10]||(t[10]=l=>T.value=l),"hide-default-actions":"",size:"medium","close-button":"",blur:"","no-dismiss":""},{default:n(()=>[e("div",hl,[s(ve,{id:f.value,onClose:B},null,8,["id"])])]),_:1},8,["modelValue"]),s(g,{modelValue:P.value,"onUpdate:modelValue":t[11]||(t[11]=l=>P.value=l),"hide-default-actions":"",size:"medium","close-button":"",blur:"","no-dismiss":""},{default:n(()=>[e("div",bl,[s(he)])]),_:1},8,["modelValue"]),s(g,{modelValue:$.value,"onUpdate:modelValue":t[13]||(t[13]=l=>$.value=l),size:"250px","hide-default-actions":"","no-dismiss":"",blur:""},{footer:n(()=>[s(a,{size:"small",preset:"secondary",class:"mr-1",onClick:t[12]||(t[12]=l=>R(null))},{default:n(()=>[d(" Cancelar")]),_:1}),s(a,{size:"small",loading:A.value,onClick:Y},{default:n(()=>[d(" Continuar")]),_:1},8,["loading"])]),default:n(()=>[yl]),_:1},8,["modelValue"])])}}});export{Il as default};
//# sourceMappingURL=ListCustomers-2f9cbec2.js.map