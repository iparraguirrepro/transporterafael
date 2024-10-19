import{d as fe,C as ve,i as n,z as H,k as _e,D as ge,r,o as c,c as g,a as t,t as m,b as o,w as l,m as p,B as ye,H as q,g as Q,h as B,F as G,n as J,f as y,_ as he}from"./index-b45d4e71.js";import{u as be,a as W}from"./NewOportunity-2125a7b7.js";import{a as Ve,u as xe,g as Ce,d as we}from"./oportunities-store-5a7168b3.js";import{n as ke}from"./Orders-7a56ac88.js";import{f as F}from"./format-8e15a9c0.js";import"./EditCustomer-5d66d746.js";import"./utils-17deefef.js";import"./helpers-a12fb3e4.js";import"./Services-414ecf00.js";import"./InputAddress-fae9484f.js";import"./lodash-29f837a1.js";const De={class:"py-4"},ze={class:"flex justify-between align-center justify-center"},Oe={class:"h5 m-0"},Se={class:"flex gap-2"},Ke=t("span",{class:"px-1"},"Descargar",-1),Be=t("span",{class:"px-1"},"Nueva cotización",-1),Te={class:"columns-5 mb-7 mt-5"},Me={class:"flex columns-1 mt-5"},Ue={class:"w-full bg-white p-2"},Pe={class:"flex gap-1"},Ae={class:"break-words text-balance"},$e={class:"flex flex-col gap-1",style:{"--va-badge-text-wrapper-border-radius":"50%"}},Le={class:"mx-10 my-2 px-2 py-3 gap-2 bg-blue-50"},Ne={class:"columns-4 w-full mb-4 bg-white p-2"},Ee=t("p",{class:"font-bold"},"Cotización creada:",-1),Fe=t("p",{class:"font-bold"},"Última Actualización:",-1),Ie={class:"bg-white p-2"},Re={class:"columns-4 w-full mb-2"},je={class:"w-full"},He=t("p",{class:"font-bold"},"Cotizado por:",-1),qe={class:"capitalize"},Qe={class:"w-full"},Ge=t("p",{class:"font-bold"},"Dirigido a:",-1),Je={colspan:"9"},We={class:"flex justify-end mt-4"},Xe=t("p",{class:"text-sm"},"¿Deseas eliminar esta cotización?",-1),Ye=t("p",{class:"text-sm"},"¿Deseas cambiar el estado de esta cotización?",-1),Ze={key:0,class:"text-sm"},et={key:1,class:"text-sm"},tt={class:"list-decimal px-4 text-sm mt-3"},at={class:"font-bold"},st={class:"mt-4"},ot={class:"mt-4"},lt=fe({__name:"ListOportunities",setup(nt){const{notify:V}=Ve(),X=ve(),v=n([]),Y=[{key:"id",sortable:!1},{key:"Descripción",sortable:!1},{key:"Cliente",sortable:!1},{key:"Servicios",sortable:!1},{key:"Total",sortable:!1},{key:"Comercial",sortable:!1},{key:"Creación",sortable:!1},{key:"Estado",sortable:!1},{key:"actions",width:80}],x=be(),{viewOrders:T,orders:M}=H(x),h=xe(),{statusOptions:Z}=H(h),_=n(null),U=n(null),C=n(null),P=n(!1),w=n(!1),ee=n(!1),f=n(!1),I=n(0),A=n(""),$=n({start:null,end:null}),te=n(0),k=n(15),L=n(1),ae=()=>(console.log(v.value.length),k.value&&k.value!==0?Math.ceil(v.value.length/k.value):v.value.length),se=async()=>{await we(_.value),_.value=null,V({message:"Cotización eliminada correctamente",color:"success",duration:1e3}),D()},D=async i=>{f.value=!0;const a=await Ce(i);await h.getQuotationStates(),v.value=a.map(s=>{var z;const u={state:{...s}.status};return{data:{...s,...u},createdAt:F(new Date(s.created_at),"dd/MM/yyyy hh:mm"),Creación:F(new Date(s.created_at),"dd/MM/yy hh:mm"),updatedAt:F(new Date(s.updated_at),"dd/MM/yyyy hh:mm"),id:"00"+s.id,Cliente:s.customer.company?s.customer.socialreason:""+s.customer.fullname,Servicios:s.services.map(O=>{var S,K;return{label:(S=O.service.detail)==null?void 0:S.service,value:(K=O.service.detail)==null?void 0:K.id}}),Total:"S/ "+s.total,Descripción:s.title,Comercial:(z=s.owner)==null?void 0:z.name,Acciones:!0}}),f.value=!1},oe=i=>{C.value=i,P.value=!0},R=()=>{D(),P.value=!1,w.value=!1},le=async i=>{h.setActiveOportunity(i),h.viewConfirm()},ne=()=>{U.value=null},ie=()=>{};_e(()=>{ge(()=>h.vailable,()=>{console.log("updated")}),D()});const de=async i=>{f.value=!0;const a=await ke({id:i}),s=a.news,u=a.exists;u.length>0?(V({message:"La cotización tiene ordenes existentes",color:"info",duration:2500}),x.showOrders(u),f.value=!1):s.length>1?(V({message:"Proceso realizado correctamente",color:"success",duration:2500}),x.showOrders(s),f.value=!1):(V({message:"Se ha creado la orden #000"+s[0]+"-24",color:"success",duration:2500}),f.value=!1,X.push("/orders/view/"+s[0]))},re=()=>{const{start:i,end:a}=$.value;if(i&&a){const s=new Date(i).setHours(0),u=new Date(a).setHours(24);D({start:new Date(s).getTime(),end:new Date(u).getTime()})}},N=n(!1),ue=()=>{N.value=!0,setTimeout(()=>{N.value=!1},2e3),console.log("download")},E=n(null),ce=i=>{E.value=i,setTimeout(()=>{E.value=null},2500)};return(i,a)=>{const s=r("VaButton"),u=r("VaInput"),z=r("VaDateInput"),O=r("VaSelect"),S=r("VaChip"),K=r("VaBadge"),me=r("VaPagination"),pe=r("VaDataTable"),b=r("VaModal");return c(),g("div",De,[t("div",ze,[t("h1",Oe,"Cotizaciones ("+m(v.value.length)+")",1),t("div",Se,[o(s,{icon:"exit_to_app",color:"info",loading:N.value,href:p(q)+"/oportunities/xls",onClick:ue},{default:l(()=>[Ke]),_:1},8,["loading","href"]),o(s,{icon:"add",color:"primary",onClick:a[0]||(a[0]=e=>w.value=!0)},{default:l(()=>[Be]),_:1})])]),t("div",Te,[t("div",null,[o(u,{modelValue:A.value,"onUpdate:modelValue":a[1]||(a[1]=e=>A.value=e),label:"Buscar en resultados",placeholder:"Escribe lo que buscas",clearable:"",background:"#fff"},null,8,["modelValue"])]),t("div",null,[o(z,{modelValue:$.value,"onUpdate:modelValue":[a[2]||(a[2]=e=>$.value=e),re],label:"Filtrar por fecha",placeholder:"Ingresa una fecha",mode:"range",background:"#fff"},null,8,["modelValue"])])]),t("div",Me,[t("div",Ue,[o(pe,{items:v.value,columns:Y,class:"text-xs",filter:A.value,"per-page":k.value,"current-page":L.value,loading:f.value,"no-data-html":"...",onFiltered:a[4]||(a[4]=e=>te.value=e.items.length)},{"cell(actions)":l(({row:e})=>[t("div",Pe,[o(s,{icon:"delete",color:"danger",disabled:e.itemKey.data.status===4,round:"",onClick:d=>_.value=e.itemKey.data.id},null,8,["disabled","onClick"]),o(s,{icon:"download",color:"#158de3",round:"",loading:e.itemKey.data.id==E.value,href:p(q)+"/oportunities/pdf/"+e.itemKey.data.id,onClick:d=>ce(e.itemKey.data.id)},null,8,["loading","href","onClick"]),o(s,{icon:"visibility",color:"#6c48d9",round:"",onClick:d=>oe(e.itemKey.data)},null,8,["onClick"]),e.itemKey.data.status===4?(c(),Q(s,{key:0,icon:"library_add",color:"success",round:"",onClick:d=>de(e.itemKey.data.id)},null,8,["onClick"])):B("v-if",!0),B(` <VaButton
                :icon="isExpanded ? 'va-arrow-up' : 'va-arrow-down'"
                preset="primary"
                @click="row.toggleRowDetails()"
              >
              </VaButton> `)])]),"cell(Descripción)":l(({...e})=>[t("p",Ae,m(e==null?void 0:e.source),1)]),"cell(Estado)":l(({row:e})=>[o(O,{modelValue:e.itemKey.data.status,"onUpdate:modelValue":[d=>e.itemKey.data.status=d,d=>le(e.itemKey.data)],background:e.itemKey.data.status===4?"#c3ffcb":e.itemKey.data.status===5?"#ffa1a1":"#d5e3ff",readonly:e.itemKey.data.status===4,options:p(Z),"value-by":"id","text-by":"label",placeholder:"---",loading:I.value===e.itemKey.data.id,class:"text-xs",style:{"--va-input--border-color":"transparent",width:"120px"}},null,8,["modelValue","onUpdate:modelValue","background","readonly","options","loading"])]),"cell(Servicios)":l(({...e})=>[t("div",$e,[(c(!0),g(G,null,J(e==null?void 0:e.source,d=>(c(),Q(K,{key:d,overlap:""},{default:l(()=>[o(S,{size:"small",color:"#d5e3ff",class:"text-xxs font-bold px-1",style:{"--va-chip-sm-height":"1.25rem"}},{default:l(()=>[y(m(d.label),1)]),_:2},1024)]),_:2},1024))),128))])]),expandableRow:l(({rowData:e})=>{var d,j;return[t("div",Le,[t("div",Ne,[t("div",null,[Ee,t("span",null,m(e.createdAt),1)]),t("div",null,[Fe,t("span",null,m(e.updatedAt),1)])]),t("div",Ie,[t("div",Re,[t("div",je,[He,t("span",qe,m((j=(d=e.data)==null?void 0:d.owner)==null?void 0:j.name),1)]),t("div",Qe,[Ge,t("span",null,m(e.Cliente),1)])])])])]}),bodyAppend:l(()=>[t("tr",null,[t("td",Je,[t("div",We,[o(me,{modelValue:L.value,"onUpdate:modelValue":a[3]||(a[3]=e=>L.value=e),size:"small",class:"text-xs mb-3 justify-center sm:justify-start","buttons-preset":"primary","active-page-color":"textPrimary",pages:ae()},null,8,["modelValue","pages"])])])])]),_:1},8,["items","filter","per-page","current-page","loading","no-data-html"])])]),o(b,{modelValue:_.value,"onUpdate:modelValue":a[6]||(a[6]=e=>_.value=e),size:"250px","hide-default-actions":"","no-dismiss":""},{footer:l(()=>[o(s,{size:"small",preset:"secondary",class:"mr-1",onClick:a[5]||(a[5]=e=>_.value=null)},{default:l(()=>[y(" Cancelar")]),_:1}),o(s,{size:"small",loading:ee.value,onClick:se},{default:l(()=>[y(" Continuar")]),_:1},8,["loading"])]),default:l(()=>[Xe]),_:1},8,["modelValue"]),o(b,{modelValue:U.value,"onUpdate:modelValue":a[8]||(a[8]=e=>U.value=e),size:"250px","hide-default-actions":"","no-dismiss":""},{footer:l(()=>[o(s,{size:"small",preset:"secondary",class:"mr-1",onClick:a[7]||(a[7]=e=>ne())},{default:l(()=>[y(" Cancelar")]),_:1}),o(s,{size:"small",loading:I.value,onClick:ie},{default:l(()=>[y(" Continuar")]),_:1},8,["loading"])]),default:l(()=>[Ye]),_:1},8,["modelValue"]),o(b,{modelValue:p(T),"onUpdate:modelValue":a[10]||(a[10]=e=>ye(T)?T.value=e:null),size:"280px","hide-default-actions":"","close-button":""},{default:l(()=>[p(M).length>1?(c(),g("p",Ze,"Ordenes registradas:")):B("v-if",!0),p(M).length==1?(c(),g("p",et,"Orden registrada:")):B("v-if",!0),t("ul",tt,[(c(!0),g(G,null,J(p(M),e=>(c(),g("li",{key:e,class:"mb-2"},[t("span",at,"000"+m(e)+"-24",1),o(s,{size:"small",preset:"primary",to:"/orders/view/"+e,class:"ml-1",style:{"text-transform":"capitalize",top:"-2px"},onClick:a[9]||(a[9]=d=>p(x).hideOrders())},{default:l(()=>[y(" Ver Orden ")]),_:2},1032,["to"])]))),128))])]),_:1},8,["modelValue"]),o(b,{modelValue:w.value,"onUpdate:modelValue":a[11]||(a[11]=e=>w.value=e),"hide-default-actions":"",size:"medium","close-button":"",blur:"","no-dismiss":""},{default:l(()=>[t("div",st,[o(W,{onClose:R})])]),_:1},8,["modelValue"]),o(b,{modelValue:C.value,"onUpdate:modelValue":a[12]||(a[12]=e=>C.value=e),"hide-default-actions":"",size:"medium","close-button":"",blur:"","no-dismiss":""},{default:l(()=>[t("div",ot,[o(W,{data:C.value,detail:P.value,onClose:R},null,8,["data","detail"])])]),_:1},8,["modelValue"])])}}}),yt=he(lt,[["__file","C:/Users/ID-04/Documents/Main/vuestic-impala/src/pages/oportunities/pages/ListOportunities.vue"]]);export{yt as default};
//# sourceMappingURL=ListOportunities-11671262.js.map
