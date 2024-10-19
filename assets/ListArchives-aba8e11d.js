import{_ as ie,a as ue}from"./NewOportunity.vue_vue_type_style_index_0_lang-9f99e642.js";import{g as de,_ as re,a as me,d as pe,b as _e}from"./EditCustomer.vue_vue_type_style_index_0_lang-6c290ad1.js";import{d as ve,u as fe,h as c,y as he,j as be,r as v,o as i,c as u,a as e,t as o,m as S,b as t,w as a,k as m,H as ye,f as d,F as J,n as K}from"./index-f95e1e62.js";import{f as Q}from"./format-8e15a9c0.js";import"./utils-17deefef.js";import"./helpers-a12fb3e4.js";import"./Services-5cdf3c78.js";import"./InputAddress.vue_vue_type_style_index_0_lang-130cd00d.js";import"./lodash-14854b8b.js";import"./oportunities-store-b3d78d78.js";import"./Orders-733862c9.js";const ge={class:"py-4"},Ce={class:"flex justify-between align-center justify-center"},Ve={class:"h5 m-0"},xe={class:"flex gap-2"},ke=e("span",{class:"px-1"},"Descargar",-1),Te={class:"mt-5"},ze={class:"columns-5 mb-7"},Ne={class:"w-full bg-white p-2"},Ae={class:"flex gap-1"},Fe={class:"font-bold text-primary"},Ue={class:"flex px-2 py-3 gap-2 bg-blue-50 mx-10 rounded my-2"},Ee={class:"w-full pl-2"},$e={class:"gap-1"},we={class:"text-base font-medium"},Me={class:"uppercase font-black"},je={class:"w-full columns-6 mt-2 mb-1"},Ie={key:0,class:"w-full items-center text-xs"},Se=e("b",null,"DNI:",-1),Pe=e("br",null,null,-1),Re={key:1,class:"w-full items-center text-xs"},Be=e("b",null,"RUC:",-1),qe=e("br",null,null,-1),Le={key:2,class:"w-full items-center text-xs"},Oe=e("b",null,"Teléfono:",-1),He=e("br",null,null,-1),We={key:3,class:"w-full items-center text-xs"},Ge=e("b",null,"WhatsApp:",-1),Je=e("br",null,null,-1),Ke={key:4,class:"w-full items-center text-xs"},Qe=e("b",null,"Correo Electrónico:",-1),Xe=e("br",null,null,-1),Ye={class:"flex flex-col bg-white mt-6 py-2 pb-5 px-4"},Ze={key:0,class:"bg-gray-100 p-3 rounded mt-4 pb-5"},De={key:0,class:"bg-red-300 font-bold p-2 -mb-1"},el={key:1,class:"va-table-responsive w-full"},ll={class:"va-table w-full"},tl=e("thead",null,[e("tr",null,[e("th",null,"n° Cotización"),e("th",null,"Comercial"),e("th",null,"Servicios"),e("th",null,"Vehiculos"),e("th",null,"Fecha Creación"),e("th",null,"Estado")])],-1),sl={key:1,class:"bg-gray-100 p-3 rounded mt-4 pb-5"},ol=e("p",{class:"bg-red-300 font-bold p-2"},"El cliente no tiene ordenes de trabajo",-1),nl=e("div",{class:"va-table-responsive w-full"},[e("table",{class:"va-table w-full"},[e("thead",null,[e("tr",null,[e("th",null,"n° Orden"),e("th",null,"Responsable"),e("th",null,"Servicios"),e("th",null,"Vehiculos"),e("th",null,"Fecha Inicio"),e("th",null,"Fecha Fin")])]),e("tbody")])],-1),al=[ol,nl],cl={key:2,class:"bg-gray-100 p-3 rounded mt-4 pb-5"},il={key:0,class:"bg-red-300 font-bold p-2 -mb-1"},ul={key:1,class:"va-table-responsive w-full"},dl={class:"va-table w-full"},rl=e("thead",null,[e("tr",null,[e("th",null,"Razón Social"),e("th",null,"RUC"),e("th",null,"Teléfono"),e("th",null,"WhatsApp"),e("th",null,"Fecha Creación")])],-1),ml={colspan:"8"},pl={class:"flex justify-end mt-4"},_l={class:"mt-4"},vl=e("p",{class:"text-sm"},"¿Deseas activar este cliente?",-1),fl={class:"mt-4"},hl={class:"mt-4"},bl=e("p",{class:"text-sm"},"¿Deseas eliminar este cliente?",-1),El=ve({__name:"ListArchives",setup(yl){const{notify:P}=fe(),b=c([]),z=c(!1),N=c(!1),V=c(!1),A=c(!1),h=c(null),F=c(!1),U=c(!1),R=c(!1),X=c(0),x=c(12),E=c(1),$=c(""),{t:B}=he(),Y=[{key:"id",sortable:!1},{key:"Nombres Completos",sortable:!1},{key:"Empresa",sortable:!1},{key:"Documento",sortable:!1},{key:"Teléfono",sortable:!1},{key:"Fecha Archivación",sortable:!1},{key:"Fecha Creación",sortable:!1},{key:"Acciones",width:80,sortable:!1}],w=c({status:99});be(()=>{M(w.value)});const M=async r=>{U.value=!0;const s=await de(r);b.value=s.map(n=>{var T;return{...n,"Nombres Completos":n.fullname,Empresa:(T=n.company)==null?void 0:T.ruc,Documento:n.document,Teléfono:n.cellphone,"Fecha Archivación":n.archived_at&&Q(n.archived_at,"dd/MM/yyyy hh:mm aa"),"Fecha Creación":n.created_at&&Q(n.created_at,"dd/MM/yyyy hh:mm aa"),Acciones:!0,activeTab:0}}),U.value=!1},Z=r=>{V.value=!!r,h.value=r},j=r=>{A.value=!!r,h.value=r},q=()=>{z.value=!1,V.value=!1,M(w.value)},D=async()=>{F.value=!0,await pe(h.value),P({message:"Cliente eliminado correctamente",color:"success",duration:1e3}),setTimeout(()=>{F.value=!1,j(null),M(w.value)})},ee=()=>x.value&&x.value!==0?Math.ceil(b.value.length/x.value):b.value.length,I=c(!1),le=()=>{I.value=!0,setTimeout(()=>{I.value=!1},2e3),console.log("download")},te=c(!1),k=c(!1),L=r=>{k.value=!!r,h.value=r},se=async()=>{await _e(h.value),b.value=b.value.filter(r=>r.id!==h.value),h.value=null,k.value=!1,P({message:"Cliente actualizado correctamente",color:"success",duration:1e3})};return(r,s)=>{const n=v("VaButton"),T=v("VaInput"),C=v("VaIcon"),oe=v("VaTab"),ne=v("VaTabs"),ae=v("VaPagination"),ce=v("VaDataTable");v("VaChip"),v("VaAlert");const g=v("VaModal");return i(),u("div",ge,[e("div",Ce,[e("h1",Ve,o(S(B)("contacts.allArchivedContacts"))+" ("+o(b.value.length)+")",1),e("div",xe,[t(n,{icon:"exit_to_app",color:"info",loading:I.value,href:S(ye)+"/contacts/archived/xls",onClick:le},{default:a(()=>[ke]),_:1},8,["loading","href"])])]),e("div",Te,[e("div",ze,[e("div",null,[t(T,{modelValue:$.value,"onUpdate:modelValue":s[0]||(s[0]=l=>$.value=l),label:S(B)("contacts.search"),placeholder:"Escribe lo que buscas",clearable:"",background:"#fff"},null,8,["modelValue","label"])])]),e("div",Ne,[t(ce,{items:b.value,columns:Y,class:"text-xs",hoverable:"","selected-color":"#eee",filter:$.value,"per-page":x.value,"current-page":E.value,loading:U.value,"no-data-html":"...",onFiltered:s[2]||(s[2]=l=>X.value=l.items.length)},{"cell(Acciones)":a(({row:l,isExpanded:y})=>[e("div",Ae,[t(n,{icon:"delete",color:"danger",round:"",onClick:f=>{var _;return j((_=l==null?void 0:l.rowData)==null?void 0:_.id)}},null,8,["onClick"]),t(n,{icon:"unarchive",color:"success",round:"",onClick:f=>{var _;return L((_=l==null?void 0:l.rowData)==null?void 0:_.id)}},null,8,["onClick"]),t(n,{icon:"description",color:"#158de3",round:"",onClick:f=>{var _;return Z((_=l==null?void 0:l.rowData)==null?void 0:_.id)}},null,8,["onClick"]),t(n,{icon:y?"va-arrow-up":"va-arrow-down",preset:"primary",onClick:f=>l.toggleRowDetails()},null,8,["icon","onClick"])])]),"cell(Empresa)":a(({row:l})=>{var y,f;return[e("span",Fe,o((f=(y=l.rowData)==null?void 0:y.company)==null?void 0:f.ruc),1)]}),expandableRow:a(({rowData:l})=>{var y,f,_,O,H,W,G;return[e("div",Ue,[e("div",Ee,[e("div",$e,[e("span",we,[e("span",Me,o(l["Nombres Completos"]),1)])]),e("div",je,[l.Documento?(i(),u("div",Ie,[Se,d(),Pe,e("span",null,[d(o(l.Documento)+" ",1),t(C,{size:"10px",class:"cursor-pointer",name:"content_copy"})])])):m("",!0),l.ruc?(i(),u("div",Re,[Be,d(),qe,e("span",null,[d(o(l.ruc)+" ",1),t(C,{size:"10px",class:"cursor-pointer",name:"content_copy"})])])):m("",!0),l.cellphone?(i(),u("div",Le,[Oe,d(),He,e("span",null,[d(o(l.cellphone)+" ",1),t(C,{size:"10px",class:"cursor-pointer",name:"content_copy"})])])):m("",!0),l.whatsapp?(i(),u("div",We,[Ge,d(),Je,e("span",null,[d(o(l.whatsapp)+" ",1),t(C,{size:"10px",class:"cursor-pointer",name:"content_copy"})])])):m("",!0),l.email?(i(),u("div",Ke,[Qe,d(),Xe,e("span",null,[d(o(l.email)+" ",1),t(C,{size:"10px",class:"cursor-pointer",name:"content_copy"})])])):m("",!0)]),e("div",Ye,[t(ne,{modelValue:l.activeTab,"onUpdate:modelValue":p=>l.activeTab=p},{tabs:a(()=>[(i(),u(J,null,K(["Empresa"],p=>t(oe,{key:p},{default:a(()=>[d(o(p),1)]),_:2},1024)),64))]),_:2},1032,["modelValue","onUpdate:modelValue"]),l.activeTab===1?(i(),u("div",Ze,[(y=l.quotations)!=null&&y.length?m("",!0):(i(),u("p",De," El cliente no tiene cotizaciones ")),(f=l.quotations)!=null&&f.length?(i(),u("div",el,[e("table",ll,[tl,e("tbody",null,[(i(!0),u(J,null,K(l.quotations,p=>(i(),u("tr",{key:p.id},[e("td",null,o(p.fullName),1),e("td",null,o(p.fullName),1),e("td",null,o(p.fullName),1),e("td",null,o(p.fullName),1),e("td",null,o(p.fullName),1),e("td",null,o(p.fullName),1)]))),128))])])])):m("",!0)])):m("",!0),l.activeTab===2?(i(),u("div",sl,al)):m("",!0),l.activeTab===0?(i(),u("div",cl,[l.company?m("",!0):(i(),u("p",il," El cliente no está asociado a empresa ")),l.company?(i(),u("div",ul,[e("table",dl,[rl,e("tbody",null,[e("tr",null,[e("td",null,o((_=l.company)==null?void 0:_.socialreason),1),e("td",null,o((O=l.company)==null?void 0:O.ruc),1),e("td",null,o((H=l.company)==null?void 0:H.phone),1),e("td",null,o((W=l.company)==null?void 0:W.whatsapp),1),e("td",null,o((G=l.company)==null?void 0:G.created_at),1)])])])])):m("",!0)])):m("",!0)])])])]}),bodyAppend:a(()=>[e("tr",null,[e("td",ml,[e("div",pl,[t(ae,{modelValue:E.value,"onUpdate:modelValue":s[1]||(s[1]=l=>E.value=l),size:"small",class:"text-xs mb-3 justify-center sm:justify-start","buttons-preset":"primary","active-page-color":"textPrimary",pages:ee()},null,8,["modelValue","pages"])])])])]),_:1},8,["items","filter","per-page","current-page","loading","no-data-html"]),m("",!0)])]),t(g,{modelValue:N.value,"onUpdate:modelValue":s[4]||(s[4]=l=>N.value=l),"hide-default-actions":"",size:"340px","close-button":"",blur:"","no-dismiss":""},{default:a(()=>[e("div",null,[t(re,{onClose:s[3]||(s[3]=l=>N.value=!1)})])]),_:1},8,["modelValue"]),t(g,{modelValue:z.value,"onUpdate:modelValue":s[5]||(s[5]=l=>z.value=l),"hide-default-actions":"",size:"medium","close-button":"",blur:"","no-dismiss":""},{default:a(()=>[e("div",_l,[t(ie,{onClose:q})])]),_:1},8,["modelValue"]),t(g,{modelValue:k.value,"onUpdate:modelValue":s[7]||(s[7]=l=>k.value=l),size:"250px","hide-default-actions":"","no-dismiss":"",blur:""},{footer:a(()=>[t(n,{size:"small",preset:"secondary",class:"mr-1",onClick:s[6]||(s[6]=l=>L(null))},{default:a(()=>[d(" Cancelar")]),_:1}),t(n,{size:"small",loading:te.value,onClick:se},{default:a(()=>[d(" Continuar")]),_:1},8,["loading"])]),default:a(()=>[vl]),_:1},8,["modelValue"]),t(g,{modelValue:V.value,"onUpdate:modelValue":s[8]||(s[8]=l=>V.value=l),"hide-default-actions":"",size:"medium","close-button":"",blur:"","no-dismiss":""},{default:a(()=>[e("div",fl,[t(me,{id:h.value,onClose:q},null,8,["id"])])]),_:1},8,["modelValue"]),t(g,{modelValue:R.value,"onUpdate:modelValue":s[9]||(s[9]=l=>R.value=l),"hide-default-actions":"",size:"medium","close-button":"",blur:"","no-dismiss":""},{default:a(()=>[e("div",hl,[t(ue)])]),_:1},8,["modelValue"]),t(g,{modelValue:A.value,"onUpdate:modelValue":s[11]||(s[11]=l=>A.value=l),size:"250px","hide-default-actions":"","no-dismiss":"",blur:""},{footer:a(()=>[t(n,{size:"small",preset:"secondary",class:"mr-1",onClick:s[10]||(s[10]=l=>j(null))},{default:a(()=>[d(" Cancelar")]),_:1}),t(n,{size:"small",loading:F.value,onClick:D},{default:a(()=>[d(" Continuar")]),_:1},8,["loading"])]),default:a(()=>[bl]),_:1},8,["modelValue"])])}}});export{El as default};
//# sourceMappingURL=ListArchives-aba8e11d.js.map
