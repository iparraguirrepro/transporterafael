import{d as R,r as y,a as O,j as G,u as H,o as S,b as u,c as p,e as _,h as e,t as U,f as s,w as i,k as C,i as h,p as J,q as K,g as D,F as Q,l as W,s as X,v as Y}from"./index-5c8bf84e.js";import{a as Z}from"./Auth-6d5cc076.js";import{v as z}from"./utils-17deefef.js";import{f as ee}from"./format-8e15a9c0.js";const ae={class:"bg-blue-50"},se={class:"mb-4"},te={class:"flex justify-between align-center justify-center"},oe={class:"h5 font-bold m-0"},le={class:"new-customer gap-8"},ne={class:"w-full bg-white p-2 pb-5 mb-4"},de={class:"gap-2"},re={class:"columns-1 mt-1"},ie={class:"w-full"},ue={class:"w-full my-3"},ce={key:0,class:"w-full"},me={class:"mb-4 mt-4"},pe={key:0,class:"my-2 mb-4"},_e=e("p",{class:"mb-2",style:{"font-size":"11px","font-weight":"600",color:"var(--va-primary)"}},"Firma:",-1),fe=["src"],ge={key:1,class:"text-xxs bg-red-100 px-2"},ve=e("hr",{class:"mt-4"},null,-1),ye=e("p",{class:"text-xxs uppercase font-bold bg-primary text-white px-2"},"Permisos de usuario",-1),be={class:"w-full flex flex-col gap-3 bg-blue-50 py-3 px-2"},xe={class:"pb-3"},Ve={class:"flex justify-end"},he={class:"flex gap-2"},we=e("span",{class:"text-xs px-1"},"Grabar Usuario",-1),Ce=R({__name:"NewUser",props:{data:{default:null,type:Object}},emits:["close"],setup(P,{emit:k}){var o,r,v,N,F,q;const g=k,n=P,b=y(!1),{isValid:x,validate:w}=O("formRef"),c=y([]),t=G({...n.data&&{names:(o=n.data)==null?void 0:o.name,username:(r=n.data)==null?void 0:r.username,signature:(v=n.data)==null?void 0:v.signature,can_edit:!!((N=n.data)!=null&&N.can_edit),can_quotate:(F=n.data)==null?void 0:F.can_quotate,can_order:(q=n.data)==null?void 0:q.can_order}}),{notify:$}=H();S(()=>{console.log(n.data)});const B=async d=>new Promise((l,m)=>{const a=new FileReader;a.readAsDataURL(d),a.onload=()=>l(a.result),a.onerror=m}),j=async()=>{if(w()){b.value=!0;try{const d={name:t.names,username:t.username,...c.value.length===0&&{signature:t.signature},password:t.password,can_edit:t.can_edit?1:0,can_quotate:t.can_quotate?1:0,can_order:t.can_order?1:0};if(c.value.length){const m=await B(c.value[0]);d.sign=m}(n.data?await J(n.data.id,d):await Z(d)).status==!0?($({message:"Usuario grabado correctamente",color:"primary"}),g("close")):$({message:"Error al grabar usuario",color:"danger"})}catch(d){console.log(d)}b.value=!1}};return(d,l)=>{var L;const m=u("VaInput"),a=u("VaFileUpload"),V=u("VaCheckbox"),I=u("VaForm"),T=u("VaButton");return p(),_("div",ae,[e("div",se,[e("div",te,[e("h1",oe,U((L=d.$props.data)!=null&&L.username?"Editar":"Nuevo")+" Usuario",1)])]),e("div",le,[s(I,{ref:"formRef",immediate:"",class:"gap-2"},{default:i(()=>{var A,E,M;return[e("div",ne,[e("div",de,[e("div",re,[e("div",ie,[s(m,{modelValue:t.names,"onUpdate:modelValue":l[0]||(l[0]=f=>t.names=f),stateful:"",clearable:"",label:"Nombres Completos",rules:[C(z).required]},null,8,["modelValue","rules"])]),e("div",ue,[s(m,{modelValue:t.username,"onUpdate:modelValue":l[1]||(l[1]=f=>t.username=f),stateful:"",clearable:"",label:"Usuario",type:"email","auto-complete":"none",rules:[C(z).email,C(z).required]},null,8,["modelValue","rules"])]),d.$props.data?h("",!0):(p(),_("div",ce,[s(m,{modelValue:t.password,"onUpdate:modelValue":l[2]||(l[2]=f=>t.password=f),stateful:"",clearable:"",type:"password",label:"Contraseña",autocomplete:"off",rules:[C(z).required]},null,8,["modelValue","rules"])])),e("div",me,[(A=d.$props.data)!=null&&A.signature?(p(),_("div",pe,[_e,e("img",{src:"http://impala.test"+((E=d.$props.data)==null?void 0:E.signature),style:{width:"120px"},alt:""},null,8,fe)])):h("",!0),s(a,{modelValue:c.value,"onUpdate:modelValue":l[3]||(l[3]=f=>c.value=f),dropzone:"","drop-zone-text":"Arrastra o selecciona tu firma","upload-button-text":"Buscar","file-types":"jpg,jpeg,png"},null,8,["modelValue"]),((M=c.value)==null?void 0:M.length)>1?(p(),_("p",ge,"Solo se admite un archivo.")):h("",!0)]),ve,ye,e("div",be,[s(V,{modelValue:t.can_edit,"onUpdate:modelValue":l[4]||(l[4]=f=>t.can_edit=f),label:"Puede editar configuración"},null,8,["modelValue"])])])])])]}),_:1},512)]),e("div",xe,[e("div",Ve,[e("div",he,[s(T,{icon:"save",color:"primary",disabled:!C(x),loading:b.value,onClick:j},{default:i(()=>[we]),_:1},8,["disabled","loading"])])])])])}}});const Ue={class:"flex flex-col space-y-6 md:space-y-4"},ke=e("span",{class:"px-1"},"Nuevo Usuario",-1),$e={class:"flex flex-col p-4 bg-backgroundSecondary rounded-lg"},Ne={class:"va-table-responsive"},Fe={class:"va-table w-full text-xs"},qe=e("thead",null,[e("tr",null,[e("th",null,"#"),e("th",null,"Nombres"),e("th",null,"Usuario"),e("th",null,"Permisos"),e("th",null,"Fecha Creación"),e("th",null,"Activo"),e("th")])],-1),ze={class:"flex flex-wrap gap-1"},Be={key:0,class:"inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-bold text-gray-600 ring-1 ring-inset ring-gray-500/10"},je={key:1,class:"inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-bold text-gray-600 ring-1 ring-inset ring-gray-500/10"},De={key:2,class:"inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-bold text-gray-600 ring-1 ring-inset ring-gray-500/10"},Pe={class:"flex gap-1"},Le=e("p",{class:"text-sm"},"¿Deseas eliminar este usuario?",-1),Se=R({__name:"Users",setup(P){const k=y([]),g=y(null),n=y(!1),b=y(!1),x=y(!1),w=y(null);S(()=>{c()});const c=async()=>{b.value=!0,x.value=!1;const o=await K();k.value=o.map(r=>({...r,active:r.status===1,loading:!1,created_at:ee(new Date(r.created_at),"dd/MM/yyyy")})),b.value=!1},t=async()=>{var o;n.value=!0,await X((o=g.value)==null?void 0:o.id),g.value=null,c(),n.value=!1},$=async o=>{o.loading=!0,await Y(o==null?void 0:o.id),c(),o.loading=!1},B=o=>{w.value=o,x.value=!0},j=()=>{x.value=!0,w.value=null};return(o,r)=>{const v=u("VaButton"),N=u("VaCardTitle"),F=u("VaSwitch"),q=u("VaCardContent"),d=u("VaCard"),l=u("VaInnerLoading"),m=u("VaModal");return p(),_("div",Ue,[s(l,{loading:b.value},{default:i(()=>[s(d,null,{default:i(()=>[s(N,{class:"d-flex justify-between"},{default:i(()=>[D(" Administración de usuarios "),s(v,{icon:"add",color:"primary",onClick:j},{default:i(()=>[ke]),_:1})]),_:1}),s(q,null,{default:i(()=>[e("div",$e,[e("div",Ne,[e("table",Fe,[qe,e("tbody",null,[(p(!0),_(Q,null,W(k.value,a=>(p(),_("tr",{key:a.id},[e("td",null,"00"+U(a.id),1),e("td",null,U(a.name),1),e("td",null,U(a.username),1),e("td",null,[e("div",ze,[a.can_edit?(p(),_("span",Be," Puede Editar ")):h("",!0),a.can_quotate?(p(),_("span",je," Puede Cotizar ")):h("",!0),a.can_order?(p(),_("span",De," Puede crear Ordenes ")):h("",!0)])]),e("td",null,U(a.created_at),1),e("td",null,[s(F,{modelValue:a.active,"onUpdate:modelValue":[V=>a.active=V,V=>$(a)],loading:a.loading,size:"small"},null,8,["modelValue","onUpdate:modelValue","loading"])]),e("td",null,[e("div",Pe,[s(v,{icon:"edit",color:"primary",round:"",onClick:V=>B(a)},null,8,["onClick"]),s(v,{icon:"delete",color:"danger",round:"",onClick:V=>g.value=a},null,8,["onClick"])])])]))),128))])])])])]),_:1})]),_:1})]),_:1},8,["loading"]),s(m,{modelValue:x.value,"onUpdate:modelValue":r[0]||(r[0]=a=>x.value=a),size:"360px","close-button":"","hide-default-actions":"",blur:"","no-dismiss":""},{default:i(()=>[e("div",null,[s(Ce,{data:w.value,onClose:c},null,8,["data"])])]),_:1},8,["modelValue"]),s(m,{modelValue:g.value,"onUpdate:modelValue":r[2]||(r[2]=a=>g.value=a),size:"250px","hide-default-actions":"","no-dismiss":"",blur:""},{footer:i(()=>[s(v,{size:"small",preset:"secondary",class:"mr-1",onClick:r[1]||(r[1]=a=>g.value=null)},{default:i(()=>[D(" Cancelar")]),_:1}),s(v,{loading:n.value,size:"small",onClick:t},{default:i(()=>[D(" Continuar")]),_:1},8,["loading"])]),default:i(()=>[Le]),_:1},8,["modelValue"])])}}});export{Se as _};
//# sourceMappingURL=Users.vue_vue_type_script_setup_true_lang-ea7807e3.js.map