import{d as A,q as y,s as G,y as H,p as J,v as R,r as u,o as _,c as p,a as e,t as C,b as s,w as i,u as U,x as h,B as K,_ as S,C as Q,f as P,F as W,k as X,D as Y,E as Z}from"./index-eb5b4f51.js";import{a as ee}from"./Auth-0e8074ae.js";import{v as B}from"./utils-17deefef.js";import{f as ae}from"./format-8e15a9c0.js";const se={class:"bg-blue-50"},te={class:"mb-4"},oe={class:"flex justify-between align-center justify-center"},le={class:"h5 font-bold m-0"},ne={class:"new-customer gap-8"},re={class:"w-full bg-white p-2 pb-5 mb-4"},de={class:"gap-2"},ie={class:"columns-1 mt-1"},ue={class:"w-full"},ce={class:"w-full my-3"},me={key:0,class:"w-full"},_e={class:"mb-4 mt-4"},pe={key:0,class:"my-2 mb-4"},fe=e("p",{class:"mb-2",style:{"font-size":"11px","font-weight":"600",color:"var(--va-primary)"}},"Firma:",-1),ge=["src"],ve={key:1,class:"text-xxs bg-red-100 px-2"},ye=e("hr",{class:"mt-4"},null,-1),xe=e("p",{class:"text-xxs uppercase font-bold bg-primary text-white px-2"},"Permisos de usuario",-1),be={class:"w-full flex flex-col gap-3 bg-blue-50 py-3 px-2"},Ve={class:"pb-3"},he={class:"flex justify-end"},we={class:"flex gap-2"},Ue=e("span",{class:"text-xs px-1"},"Grabar Usuario",-1),Ce=A({__name:"NewUser",props:{data:{default:null,type:Object}},emits:["close"],setup(j,{emit:k}){var o,d,v,N,D,F;const g=k,n=j,x=y(!1),{isValid:b,validate:w}=G("formRef"),c=y([]),t=H({...n.data&&{names:(o=n.data)==null?void 0:o.name,username:(d=n.data)==null?void 0:d.username,signature:(v=n.data)==null?void 0:v.signature,can_edit:!!((N=n.data)!=null&&N.can_edit),can_quotate:(D=n.data)==null?void 0:D.can_quotate,can_order:(F=n.data)==null?void 0:F.can_order}}),{notify:$}=J();R(()=>{console.log(n.data)});const q=async r=>new Promise((l,m)=>{const a=new FileReader;a.readAsDataURL(r),a.onload=()=>l(a.result),a.onerror=m}),z=async()=>{if(w()){x.value=!0;try{const r={name:t.names,username:t.username,...c.value.length===0&&{signature:t.signature},password:t.password,can_edit:t.can_edit?1:0,can_quotate:t.can_quotate?1:0,can_order:t.can_order?1:0};if(c.value.length){const m=await q(c.value[0]);r.sign=m}(n.data?await K(n.data.id,r):await ee(r)).status==!0?($({message:"Usuario grabado correctamente",color:"primary"}),g("close")):$({message:"Error al grabar usuario",color:"danger"})}catch(r){console.log(r)}x.value=!1}};return(r,l)=>{var M;const m=u("VaInput"),a=u("VaFileUpload"),V=u("VaCheckbox"),T=u("VaForm"),O=u("VaButton");return _(),p("div",se,[e("div",te,[e("div",oe,[e("h1",le,C((M=r.$props.data)!=null&&M.username?"Editar":"Nuevo")+" Usuario",1)])]),e("div",ne,[s(T,{ref:"formRef",immediate:"",class:"gap-2"},{default:i(()=>{var E,I,L;return[e("div",re,[e("div",de,[e("div",ie,[e("div",ue,[s(m,{modelValue:t.names,"onUpdate:modelValue":l[0]||(l[0]=f=>t.names=f),stateful:"",clearable:"",label:"Nombres Completos",rules:[U(B).required]},null,8,["modelValue","rules"])]),e("div",ce,[s(m,{modelValue:t.username,"onUpdate:modelValue":l[1]||(l[1]=f=>t.username=f),stateful:"",clearable:"",label:"Usuario",type:"email","auto-complete":"none",rules:[U(B).email,U(B).required]},null,8,["modelValue","rules"])]),r.$props.data?h("",!0):(_(),p("div",me,[s(m,{modelValue:t.password,"onUpdate:modelValue":l[2]||(l[2]=f=>t.password=f),stateful:"",clearable:"",type:"password",label:"Contraseña",autocomplete:"off",rules:[U(B).required]},null,8,["modelValue","rules"])])),e("div",_e,[(E=r.$props.data)!=null&&E.signature?(_(),p("div",pe,[fe,e("img",{src:"http://impala.test"+((I=r.$props.data)==null?void 0:I.signature),style:{width:"120px"},alt:""},null,8,ge)])):h("",!0),s(a,{modelValue:c.value,"onUpdate:modelValue":l[3]||(l[3]=f=>c.value=f),dropzone:"","drop-zone-text":"Arrastra o selecciona tu firma","upload-button-text":"Buscar","file-types":"jpg,jpeg,png"},null,8,["modelValue"]),((L=c.value)==null?void 0:L.length)>1?(_(),p("p",ve,"Solo se admite un archivo.")):h("",!0)]),ye,xe,e("div",be,[s(V,{modelValue:t.can_edit,"onUpdate:modelValue":l[4]||(l[4]=f=>t.can_edit=f),label:"Puede editar configuración"},null,8,["modelValue"])])])])])]}),_:1},512)]),e("div",Ve,[e("div",he,[e("div",we,[s(O,{icon:"save",color:"primary",disabled:!U(b),loading:x.value,onClick:z},{default:i(()=>[Ue]),_:1},8,["disabled","loading"])])])])])}}});const ke=S(Ce,[["__file","C:/Users/ID-04/Documents/Main/vuestic-impala/src/pages/settings/NewUser.vue"]]),$e={class:"flex flex-col space-y-6 md:space-y-4"},Ne=e("span",{class:"px-1"},"Nuevo Usuario",-1),De={class:"flex flex-col p-4 bg-backgroundSecondary rounded-lg"},Fe={class:"va-table-responsive"},Be={class:"va-table w-full text-xs"},qe=e("thead",null,[e("tr",null,[e("th",null,"#"),e("th",null,"Nombres"),e("th",null,"Usuario"),e("th",null,"Permisos"),e("th",null,"Fecha Creación"),e("th",null,"Activo"),e("th")])],-1),ze={class:"flex flex-wrap gap-1"},Pe={key:0,class:"inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-bold text-gray-600 ring-1 ring-inset ring-gray-500/10"},je={key:1,class:"inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-bold text-gray-600 ring-1 ring-inset ring-gray-500/10"},Me={key:2,class:"inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-bold text-gray-600 ring-1 ring-inset ring-gray-500/10"},Ee={class:"flex gap-1"},Ie=e("p",{class:"text-sm"},"¿Deseas eliminar este usuario?",-1),Le=A({__name:"Users",setup(j){const k=y([]),g=y(null),n=y(!1),x=y(!1),b=y(!1),w=y(null);R(()=>{c()});const c=async()=>{x.value=!0,b.value=!1;const o=await Q();k.value=o.map(d=>({...d,active:d.status===1,loading:!1,created_at:ae(new Date(d.created_at),"dd/MM/yyyy")})),x.value=!1},t=async()=>{var o;n.value=!0,await Y((o=g.value)==null?void 0:o.id),g.value=null,c(),n.value=!1},$=async o=>{o.loading=!0,await Z(o==null?void 0:o.id),c(),o.loading=!1},q=o=>{w.value=o,b.value=!0},z=()=>{b.value=!0,w.value=null};return(o,d)=>{const v=u("VaButton"),N=u("VaCardTitle"),D=u("VaSwitch"),F=u("VaCardContent"),r=u("VaCard"),l=u("VaInnerLoading"),m=u("VaModal");return _(),p("div",$e,[s(l,{loading:x.value},{default:i(()=>[s(r,null,{default:i(()=>[s(N,{class:"d-flex justify-between"},{default:i(()=>[P(" Administración de usuarios "),s(v,{icon:"add",color:"primary",onClick:z},{default:i(()=>[Ne]),_:1})]),_:1}),s(F,null,{default:i(()=>[e("div",De,[e("div",Fe,[e("table",Be,[qe,e("tbody",null,[(_(!0),p(W,null,X(k.value,a=>(_(),p("tr",{key:a.id},[e("td",null,"00"+C(a.id),1),e("td",null,C(a.name),1),e("td",null,C(a.username),1),e("td",null,[e("div",ze,[a.can_edit?(_(),p("span",Pe," Puede Editar ")):h("",!0),a.can_quotate?(_(),p("span",je," Puede Cotizar ")):h("",!0),a.can_order?(_(),p("span",Me," Puede crear Ordenes ")):h("",!0)])]),e("td",null,C(a.created_at),1),e("td",null,[s(D,{modelValue:a.active,"onUpdate:modelValue":[V=>a.active=V,V=>$(a)],loading:a.loading,size:"small"},null,8,["modelValue","onUpdate:modelValue","loading"])]),e("td",null,[e("div",Ee,[s(v,{icon:"edit",color:"primary",round:"",onClick:V=>q(a)},null,8,["onClick"]),s(v,{icon:"delete",color:"danger",round:"",onClick:V=>g.value=a},null,8,["onClick"])])])]))),128))])])])])]),_:1})]),_:1})]),_:1},8,["loading"]),s(m,{modelValue:b.value,"onUpdate:modelValue":d[0]||(d[0]=a=>b.value=a),size:"360px","close-button":"","hide-default-actions":"",blur:"","no-dismiss":""},{default:i(()=>[e("div",null,[s(ke,{data:w.value,onClose:c},null,8,["data"])])]),_:1},8,["modelValue"]),s(m,{modelValue:g.value,"onUpdate:modelValue":d[2]||(d[2]=a=>g.value=a),size:"250px","hide-default-actions":"","no-dismiss":"",blur:""},{footer:i(()=>[s(v,{size:"small",preset:"secondary",class:"mr-1",onClick:d[1]||(d[1]=a=>g.value=null)},{default:i(()=>[P(" Cancelar")]),_:1}),s(v,{loading:n.value,size:"small",onClick:t},{default:i(()=>[P(" Continuar")]),_:1},8,["loading"])]),default:i(()=>[Ie]),_:1},8,["modelValue"])])}}}),Oe=S(Le,[["__file","C:/Users/ID-04/Documents/Main/vuestic-impala/src/pages/settings/Users.vue"]]);export{Oe as default};
//# sourceMappingURL=Users-b1622e44.js.map