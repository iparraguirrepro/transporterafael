import{d as Z,u as ee,h as n,y as le,j as se,r as m,o as d,c as r,a as e,t as i,b as t,w as a,m as S,k as _,H as te,f as p,F,n as L}from"./index-83cd6f99.js";import{c as oe,_ as P,a as ne,e as ae}from"./EditCustomer.vue_vue_type_style_index_0_lang-98e93f8d.js";import{f as ce}from"./format-8e15a9c0.js";import"./utils-17deefef.js";import"./helpers-a12fb3e4.js";const ie={class:"py-4"},ue={class:"flex justify-between align-center justify-center"},de={class:"h5 m-0"},re={class:"flex gap-2"},pe=e("span",{class:"px-1"},"Descargar",-1),me={class:"px-1"},_e={class:"mt-5"},ve={class:"columns-5 mb-7"},fe={class:"w-full bg-white p-2"},he={class:"flex gap-1"},be={class:"flex px-2 py-3 gap-2 bg-blue-50 mx-10 rounded my-2"},ge={class:"w-full pl-2"},ye={class:"gap-1"},Ve={class:"text-base font-medium"},xe={class:"uppercase font-black"},Ce={class:"w-full columns-6 mt-2 mb-1"},ke={key:0,class:"w-full items-center text-xs"},Te=e("b",null,"RUC:",-1),we=e("br",null,null,-1),ze={key:1,class:"w-full items-center text-xs"},Ue=e("b",null,"Teléfono:",-1),Ne=e("br",null,null,-1),Ae={key:2,class:"w-full items-center text-xs"},Re=e("b",null,"WhatsApp:",-1),$e=e("br",null,null,-1),je={key:3,class:"w-full items-center text-xs"},Be=e("b",null,"Dirección:",-1),Ie=e("br",null,null,-1),Me={class:"flex flex-col bg-white mt-6 py-2 pb-5 px-4"},Se={key:0,class:"bg-gray-100 p-3 rounded mt-4 pb-5"},Fe={key:0,class:"bg-red-300 font-bold p-2"},Le={key:1,class:"va-table-responsive w-full"},Pe={class:"va-table w-full"},Ee=e("thead",null,[e("tr",null,[e("th",null,"Nombres Completos"),e("th",null,"Documento"),e("th",null,"Teléfono"),e("th",null,"Correo")])],-1),We=["onClick"],He={colspan:"7"},qe={class:"flex justify-end mt-4"},Ke={class:"mt-4"},Oe=e("p",{class:"text-sm"},"¿Deseas eliminar esta empresa?",-1),Ze=Z({__name:"ListCompanies",setup(De){const{notify:I}=ee(),v=n([]),b=n(!1),f=n(null),g=n(!1),T=n(null),w=n(null),z=n(!1),U=n(!1),y=n(!1),E=n(0),V=n(12),N=n(1),A=n(""),{t:W}=le(),H=[{key:"id",sortable:!1},{key:"Razón Social",sortable:!1},{key:"RUC",sortable:!1},{key:"Teléfono",sortable:!1},{key:"Whatsapp",sortable:!1},{key:"Fecha Creación",sortable:!1},{key:"Acciones",width:80,sortable:!1}],R=n({status:1});se(()=>{$(R.value)});const $=async c=>{U.value=!0;const s=await oe(c);v.value=s.map(o=>({...o,"Razón Social":o.socialreason,RUC:o.ruc,Teléfono:o.phone,Whatsapp:o.whatsapp,"Fecha Creación":o.created_at&&ce(o.created_at,"dd/MM/yyyy hh:mm aa"),Acciones:!0,activeTab:0})),U.value=!1},q=c=>{f.value=c},j=c=>{var s;c?(s=c.contacts)!=null&&s.length?I({message:"No puedes eliminar una empresa con contactos activos.",color:"error",duration:3e3}):(g.value=!!(c!=null&&c.id),T.value=c==null?void 0:c.id):(g.value=!1,T.value=null)},M=()=>{b.value=!1,f.value=!1,$(R.value)},K=async()=>{z.value=!0,await ae(T.value),I({message:"Empresa eliminada correctamente",color:"success",duration:1e3}),setTimeout(()=>{z.value=!1,j(null),$(R.value)})},O=()=>V.value&&V.value!==0?Math.ceil(v.value.length/V.value):v.value.length,B=n(!1),D=()=>{B.value=!0,setTimeout(()=>{B.value=!1},2e3),console.log("download")};return(c,s)=>{const o=m("VaButton"),G=m("VaInput"),x=m("VaIcon"),J=m("VaTab"),Q=m("VaTabs"),X=m("VaPagination"),Y=m("VaDataTable");m("VaChip"),m("VaAlert");const C=m("VaModal");return d(),r("div",ie,[e("div",ue,[e("h1",de,"Listado de Empresas ("+i(v.value.length)+")",1),e("div",re,[t(o,{icon:"exit_to_app",color:"info",loading:B.value,href:S(te)+"/companies/xls",onClick:D},{default:a(()=>[pe]),_:1},8,["loading","href"]),t(o,{icon:"domain_add",color:"primary",onClick:s[0]||(s[0]=l=>b.value=!0)},{default:a(()=>[e("span",me,i(S(W)("contacts.newCompany")),1)]),_:1})])]),e("div",_e,[e("div",ve,[e("div",null,[t(G,{modelValue:A.value,"onUpdate:modelValue":s[1]||(s[1]=l=>A.value=l),label:"Buscar empresa",placeholder:"Escribe lo que buscas",clearable:"",background:"#fff"},null,8,["modelValue"])])]),e("div",fe,[t(Y,{items:v.value,columns:H,class:"text-xs",hoverable:"","selected-color":"#eee",filter:A.value,"per-page":V.value,"current-page":N.value,loading:U.value,"no-data-html":"...",onFiltered:s[3]||(s[3]=l=>E.value=l.items.length)},{"cell(Acciones)":a(({row:l,isExpanded:k})=>[e("div",he,[t(o,{icon:"delete",color:"danger",disabled:l.itemKey.contacts.length,round:"",onClick:h=>j(l==null?void 0:l.rowData)},null,8,["disabled","onClick"]),t(o,{icon:"edit",color:"#158de3",round:"",onClick:h=>q(l==null?void 0:l.rowData)},null,8,["onClick"]),t(o,{icon:k?"va-arrow-up":"va-arrow-down",preset:"primary",onClick:h=>l.toggleRowDetails()},null,8,["icon","onClick"])])]),expandableRow:a(({rowData:l})=>{var k,h;return[e("div",be,[e("div",ge,[e("div",ye,[e("span",Ve,[e("span",xe,i(l.socialreason),1)])]),e("div",Ce,[l.ruc?(d(),r("div",ke,[Te,p(),we,e("span",null,[p(i(l.ruc)+" ",1),t(x,{size:"10px",class:"cursor-pointer",name:"content_copy"})])])):_("",!0),l.phone?(d(),r("div",ze,[Ue,p(),Ne,e("span",null,[p(i(l.phone)+" ",1),t(x,{size:"10px",class:"cursor-pointer",name:"content_copy"})])])):_("",!0),l.whatsapp?(d(),r("div",Ae,[Re,p(),$e,e("span",null,[p(i(l.whatsapp)+" ",1),t(x,{size:"10px",class:"cursor-pointer",name:"content_copy"})])])):_("",!0),l.address?(d(),r("div",je,[Be,p(),Ie,e("span",null,[p(i(l.address)+" ",1),t(x,{size:"10px",class:"cursor-pointer",name:"content_copy"})])])):_("",!0)]),e("div",Me,[t(Q,{modelValue:l.activeTab,"onUpdate:modelValue":u=>l.activeTab=u},{tabs:a(()=>[(d(),r(F,null,L(["Contactos"],u=>t(J,{key:u},{default:a(()=>[p(i(u),1)]),_:2},1024)),64))]),_:2},1032,["modelValue","onUpdate:modelValue"]),l.activeTab===0?(d(),r("div",Se,[(k=l.contacts)!=null&&k.length?_("",!0):(d(),r("p",Fe," La empresa no tiene contactos registrados ")),(h=l.contacts)!=null&&h.length?(d(),r("div",Le,[e("table",Pe,[Ee,e("tbody",null,[(d(!0),r(F,null,L(l.contacts,u=>(d(),r("tr",{key:u.id},[e("td",null,[e("span",{class:"text-primary font-bold uppercase cursor-pointer hover:underline",onClick:()=>{w.value=u.id,y.value=!0}},i(u.fullname),9,We)]),e("td",null,i(u.document),1),e("td",null,i(u.cellphone),1),e("td",null,i(u.email),1)]))),128))])])])):_("",!0)])):_("",!0)])])])]}),bodyAppend:a(()=>[e("tr",null,[e("td",He,[e("div",qe,[t(X,{modelValue:N.value,"onUpdate:modelValue":s[2]||(s[2]=l=>N.value=l),size:"small",class:"text-xs mb-3 justify-center sm:justify-start","buttons-preset":"primary","active-page-color":"textPrimary",pages:O()},null,8,["modelValue","pages"])])])])]),_:1},8,["items","filter","per-page","current-page","loading","no-data-html"]),_("",!0)])]),t(C,{modelValue:b.value,"onUpdate:modelValue":s[4]||(s[4]=l=>b.value=l),"hide-default-actions":"",size:"340px","close-button":"",blur:"","no-dismiss":""},{default:a(()=>[e("div",null,[t(P,{onClose:M})])]),_:1},8,["modelValue"]),t(C,{modelValue:f.value,"onUpdate:modelValue":s[5]||(s[5]=l=>f.value=l),"hide-default-actions":"",size:"340px","close-button":"",blur:"","no-dismiss":""},{default:a(()=>[e("div",null,[t(P,{data:f.value,onClose:M},null,8,["data"])])]),_:1},8,["modelValue"]),t(C,{modelValue:y.value,"onUpdate:modelValue":s[7]||(s[7]=l=>y.value=l),"hide-default-actions":"",size:"medium","close-button":"",blur:"","no-dismiss":""},{default:a(()=>[e("div",Ke,[t(ne,{id:w.value,onClose:s[6]||(s[6]=()=>{w.value=null,y.value=!1})},null,8,["id"])])]),_:1},8,["modelValue"]),t(C,{modelValue:g.value,"onUpdate:modelValue":s[9]||(s[9]=l=>g.value=l),size:"250px","hide-default-actions":"","no-dismiss":"",blur:""},{footer:a(()=>[t(o,{size:"small",preset:"secondary",class:"mr-1",onClick:s[8]||(s[8]=l=>j(null))},{default:a(()=>[p(" Cancelar")]),_:1}),t(o,{size:"small",loading:z.value,onClick:K},{default:a(()=>[p(" Continuar")]),_:1},8,["loading"])]),default:a(()=>[Oe]),_:1},8,["modelValue"])])}}});export{Ze as default};
//# sourceMappingURL=ListCompanies-1f1da9a5.js.map
