import{A as S,d as Ae,h as m,C as Be,y as Ee,a5 as Ue,u as $e,j as qe,r as _,o as d,c as u,a as e,f as c,t as o,b as s,w as t,k as p,g as j,m as ve,F as T,n as L,V as Me}from"./index-83cd6f99.js";import{a as Ne,e as Re,b as Fe,d as Pe,s as He,c as Ge}from"./Orders-e5bddc9e.js";import{E as Je}from"./Employee-b702aabe.js";import{f as Ke}from"./format-8e15a9c0.js";const F={list:S+"/orders/interactions",byid:S+"/orders/interactions",delete:S+"/orders/interactions",register:S+"/orders/interactions"},P=localStorage.getItem("__token");async function Qe(y){const x={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+P}};let v=null;return await fetch(`${F.list}/${y}`,x).then(h=>{v=h.json()}),v}async function xe(y){const x={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+P}};let v=null;return await fetch(`${F.list}/${y}`,x).then(h=>{v=h.json()}),v}async function We(y){const x={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+P},body:JSON.stringify(y)};let v=null;return await fetch(F.register,x).then(h=>{v=h.json()}),v}const Xe={key:0},Ye={class:"flex justify-between align-center"},Ze={class:"h5 font-bold m-0"},et={class:"text-primary font-bold pl-1"},tt=e("br",null,null,-1),st={class:"text-sm font-medium"},at={class:"flex gap-2"},ot={key:0,class:"grid-cols-3 space-x-2.5 pt-4"},lt=e("span",{class:"px-1"},"Finalizar Orden",-1),nt={class:"px-1"},it={key:1,class:"grid-cols-3 space-x-2.5 pt-4"},dt=e("span",{class:"px-1"},"Activar Orden",-1),ct=e("hr",{class:"mt-4 mb-2"},null,-1),rt={class:"py-4 order-detail flex columns-2 gap-4"},ut={class:"w-1/3 py-5 pt-0 px-3"},_t={class:"text-center relative"},pt={class:"mt-2"},mt={class:"text-base font-black text-primary"},ft={class:"text-xs font-bold"},vt={class:"flex flex-wrap gap-2 mt-3 justify-center"},xt={class:"text-xs mt-3 mb-3"},ht=e("hr",{class:"mt-5 mb-2"},null,-1),yt={class:"mt-4"},bt={key:0},gt={class:"bg-white p-4 rounded",square:"",outlined:""},wt={class:"flex flex-col gap-3"},Vt=e("h2",{class:"text-sm font-bold text-primary"},"Detalle de servicio:",-1),Ct={class:"flex justify-between text-xs"},kt=e("p",{class:"w-50 font-bold"},"Ruta:",-1),jt={class:"flex justify-between text-xs"},Tt=e("p",{class:"w-50 font-bold"},"Tipo de ruta:",-1),zt={key:0,class:"flex justify-between text-xs"},It=e("p",{class:"w-50 font-bold"},"Kilometros:",-1),Ot={key:1,class:"flex justify-between text-xs"},St=e("p",{class:"w-50 font-bold"},"Nro Días:",-1),Lt={key:2,class:"flex justify-between text-xs"},Dt=e("p",{class:"w-50 font-bold"},"Pasajeros:",-1),At={key:3},Bt={key:4,class:"flex justify-between text-xs"},Et=e("p",{class:"w-50 font-bold"},"Inicio aproximado:",-1),Ut={key:5,class:"flex justify-between text-xs"},$t=e("p",{class:"w-50 font-bold"},"Fin aproximado:",-1),qt={class:"bg-white p-4 rounded mt-3",square:"",outlined:""},Mt={class:"flex flex-col gap-3"},Nt=e("h2",{class:"text-sm font-bold text-primary"},"Costo de servicio:",-1),Rt={class:"flex justify-between text-xs"},Ft=e("p",{class:"w-50 font-bold"},"Peajes:",-1),Pt={class:"flex justify-between text-xs"},Ht=e("p",{class:"w-50 font-bold"},"Vehículos:",-1),Gt={class:"flex justify-between text-xs"},Jt=e("p",{class:"w-50 font-bold"},"Viaticos:",-1),Kt={class:"flex justify-between text-xs"},Qt=e("p",{class:"w-50 font-bold"},"Monto Total:",-1),Wt={key:1,class:"bg-white p-4 rounded",square:"",outlined:""},Xt={class:"flex flex-col gap-3"},Yt={class:"inline-flex items-center rounded-md bg-primary px-2 py-1 text-xxs font-bold text-white"},Zt={class:"text-sm mb-1 font-semibold uppercase"},es={class:"bg-white px-1.5 pt-2 pb-3 rounded"},ts={class:"text-xs font-semibold mb-2"},ss={class:"text-xs mt-2 flex justify-between"},as=e("b",null,"Tarifa conductor:",-1),os={class:"text-xs mt-2 mb-1 flex justify-between"},ls=e("b",null,"Cantidad:",-1),ns={class:"text-xs mt-2 flex justify-between"},is=e("b",null,"Tarifa:",-1),ds={key:2,class:"bg-white flex flex-col p-4 gap-2 rounded",square:"",outlined:""},cs={class:"flex flex-col gap-3"},rs={class:"inline-flex items-center rounded-md bg-primary px-2 py-1 text-xxs font-bold text-white ring-1 ring-inset ring-gray-500/10"},us={class:"text-xs mt-1"},_s=e("b",{class:"pr-2"},"Monto Unitario:",-1),ps={class:"bg-white px-1.5 pt-2 pb-3 mt-3 rounded"},ms={class:"text-xs font-semibold mb-2"},fs={class:"flex flex-col w-2/3"},vs={class:"bg-white p-3 mt-3"},xs={class:"new-note mt-2"},hs=e("h3",{class:"text-xs font-bold my-4 underline"},"Historial de interacciones:",-1),ys={class:"list-notes"},bs={key:0},gs={class:"capitalize"},ws=e("p",{class:"text-sm"},"¿Deseas eliminar este comentario?",-1),Vs={class:"text-sm font-semibold text-primary"},Cs=e("hr",{class:"my-3"},null,-1),ks=["innerHTML"],js=e("p",{class:"text-sm"},"¿Deseas eliminar esta orden?",-1),Ts=e("p",{class:"text-xs mt-2"},[c(" Se eliminara todo el historico de esta orden, el estado de la cotización volvera a "),e("span",{class:"font-bold"},"Aprobado"),c(". ")],-1),Ls=Ae({__name:"ViewOrder",setup(y){const x=m(0),v=m(null),h=Be(),{t:he}=Ee(),a=m(null),w=m(""),b=Ue(),z=m([]),D=m([]),A=m(!1),g=m(!1),B=m(!1),I=m(!1),E=m(null),H=m(0),G=m(!1),V=m(!1),{notify:ye}=$e();qe(()=>{O(),be(),U()});const O=async()=>{const n=await Ne(b.params.id);a.value={_id:`000${n.id}-24`,...n}},be=async()=>{const n=await Je.getActives();D.value=n.map(l=>({_id:`000${l.id}-24`,...l}))},U=async()=>{const n=await Qe(+b.params.id);z.value=n.map(l=>({...l}))},J=n=>Ke(new Date(n),"dd/MM/yyyy hh:mm aa"),ge=async()=>{A.value=!0,await We({comment:w.value,quotation:+b.params.id,user:null}),await U(),w.value="",A.value=!1},we=async n=>{await xe(n)},Ve=async()=>{g.value=!0,await Re(+b.params.id),await O(),g.value=!1},Ce=async()=>{B.value=!0,await Pe(+b.params.id),await O(),V.value=!1,B.value=!1,h.push("/orders")},ke=async n=>{n.loading=!0,await xe(n.id),await U(),n.loading=!1},je=async()=>{g.value=!0,await Fe(+b.params.id),await O(),g.value=!1},K=async(n,l=!1)=>{l?(n.loading=!0,await Ge({expense:n.id,employee:n.employee},a.value.id),n.loading=!1):(n.loading=!0,await He({vehicle:n.id,employee:n.employee},a.value.id),n.loading=!1),ye({message:"Trabajador asignado correctamente",color:"success",duration:1e3})};return(n,l)=>{var Z;const Q=_("VaBadge"),f=_("VaButton"),Te=_("VaTab"),$=_("VaCardTitle"),W=_("VaSelect"),q=_("VaCardContent"),M=_("VaCard"),ze=_("VaTabs"),Ie=_("VaTextarea"),Oe=_("VaCardActions"),Se=_("VaInnerLoading"),X=_("VaListItemLabel"),Y=_("VaListItemSection"),Le=_("VaListItem"),De=_("VaAlert"),N=_("VaModal");return d(),u(T,null,[(Z=a.value)!=null&&Z._id?(d(),u("div",Xe,[e("div",null,[e("div",Ye,[e("h1",Ze,[c(" Orden de trabajo: "),e("span",et,"#"+o(a.value._id),1),c(),tt,e("p",st,[s(Q,{text:a.value.service.services.service,color:"primary",class:"mr-2"},null,8,["text"])])]),e("div",at,[a.value.status!==2?(d(),u("div",ot,[s(f,{icon:"save",color:"success",loading:g.value,onClick:Ve},{default:t(()=>[lt]),_:1},8,["loading"]),s(f,{icon:"delete",color:"danger",loading:B.value,onClick:l[0]||(l[0]=i=>V.value=!0)},{default:t(()=>[e("span",nt,o(ve(he)("actions.delete")),1)]),_:1},8,["loading"])])):p("",!0),a.value.status===2?(d(),u("div",it,[s(f,{icon:"save",color:"info",loading:g.value,onClick:je},{default:t(()=>[dt]),_:1},8,["loading"])])):p("",!0)])]),ct]),e("div",rt,[e("div",ut,[e("div",_t,[e("div",pt,[e("h4",mt,o(a.value.customer.fullname),1),e("p",ft,o(a.value.customer.cellphone),1),e("div",vt,[a.value.service.specifications?(d(),j(f,{key:0,size:"small",class:"text-xxs",onClick:l[1]||(l[1]=()=>{I.value=!0,H.value=0,E.value=a.value.service.specifications})},{default:t(()=>[c(" Condiciones especificas ")]),_:1})):p("",!0)]),e("p",xt,[s(ve(Me),{size:"14px",class:"material-symbols-outlined cursor-pointer text-green-600"},{default:t(()=>[c("adjust")]),_:1}),c(" Ultima actualización "+o(J(a.value.updated_at)),1)])])]),ht,e("div",null,[s(ze,{modelValue:x.value,"onUpdate:modelValue":l[2]||(l[2]=i=>x.value=i),center:"",grow:"",class:"new-customer-tabs"},{tabs:t(()=>[(d(),u(T,null,L(["Resumen","Vehiculos","Viaticos"],i=>s(Te,{key:i,class:"text-xs"},{default:t(()=>[c(o(i),1)]),_:2},1024)),64))]),default:t(()=>{var i,C,R,ee,te,se,ae,oe,le,ne,ie,de,ce,re,ue,_e,pe,me,fe;return[e("div",yt,[x.value==0?(d(),u("div",bt,[e("div",gt,[e("div",wt,[Vt,e("div",Ct,[kt,e("p",null,o((C=(i=a.value)==null?void 0:i.service.routes)==null?void 0:C.name),1)]),e("div",jt,[Tt,e("p",null,o(((R=a.value)==null?void 0:R.service.route_type)===1?"Ida y Vuelta":"Solo Ida"),1)]),(ee=a.value)!=null&&ee.service.kilometers?(d(),u("div",zt,[It,e("p",null,o((te=a.value)==null?void 0:te.service.kilometers),1)])):p("",!0),(se=a.value)!=null&&se.service.days?(d(),u("div",Ot,[St,e("p",null,o((ae=a.value)==null?void 0:ae.service.days),1)])):p("",!0),(oe=a.value)!=null&&oe.service.passengers?(d(),u("div",Lt,[Dt,e("p",null,o((le=a.value)==null?void 0:le.service.passengers),1)])):p("",!0),(ne=a.value)!=null&&ne.service.start_date?(d(),u("hr",At)):p("",!0),(ie=a.value)!=null&&ie.service.start_date?(d(),u("div",Bt,[Et,e("p",null,o((de=a.value)==null?void 0:de.service.start_date),1)])):p("",!0),(ce=a.value)!=null&&ce.service.end_date?(d(),u("div",Ut,[$t,e("p",null,o((re=a.value)==null?void 0:re.service.end_date),1)])):p("",!0)])]),e("div",qt,[e("div",Mt,[Nt,e("div",Rt,[Ft,e("p",null,"S/ "+o((ue=a.value)==null?void 0:ue.service.total_tolls),1)]),e("div",Pt,[Ht,e("p",null,"S/ "+o((_e=a.value)==null?void 0:_e.service.total_vehicles),1)]),e("div",Gt,[Jt,e("p",null,"S/ "+o((pe=a.value)==null?void 0:pe.service.total_expenses),1)]),e("div",Kt,[Qt,e("p",null,"S/ "+o((me=a.value)==null?void 0:me.service.total),1)])])])])):p("",!0),x.value==1?(d(),u("div",Wt,[e("div",Xt,[(d(!0),u(T,null,L((fe=a.value)==null?void 0:fe.vehicles,r=>(d(),j(M,{key:r,color:"#eff6ff"},{default:t(()=>[s($,{class:"capitalize"},{default:t(()=>[e("span",Yt,o(r.passengers)+" Pasajeros ",1)]),_:2},1024),s(q,null,{default:t(()=>[e("p",Zt,o(r.detail.name),1),e("div",es,[e("p",ts,o(r.typedriver),1),s(W,{modelValue:r.employee,"onUpdate:modelValue":k=>r.employee=k,placeholder:"Selecciona un trabajador",class:"text-xss","search-placeholder-text":"Buscar","text-by":"names","value-by":"id",options:D.value,searchable:"","highlight-matched-text":""},null,8,["modelValue","onUpdate:modelValue","options"]),s(f,{size:"small",class:"mr-6 mt-3 text-xxs",disabled:!r.employee,loading:r.loading,onClick:k=>K(r)},{default:t(()=>[c(" Asignar conductor ")]),_:2},1032,["disabled","loading","onClick"])]),e("p",ss,[as,c(" S/ "+o(r.driverfee),1)]),e("p",os,[ls,c(" "+o(r.quantity)+" Unidades",1)]),e("p",ns,[is,c(" S/ "+o(r.total),1)])]),_:2},1024)]),_:2},1024))),128))])])):p("",!0),x.value==2?(d(),u("div",ds,[e("div",cs,[(d(!0),u(T,null,L(a.value.service.expenses,r=>(d(),j(M,{key:r,color:"#eff6ff"},{default:t(()=>[s($,{class:"capitalize"},{default:t(()=>[e("span",rs,o(r.name),1)]),_:2},1024),s(q,null,{default:t(()=>[e("p",us,[_s,c(" S/ "+o(r.amount),1)]),e("div",ps,[e("p",ms,o(r.typedriver),1),s(W,{modelValue:r.employee,"onUpdate:modelValue":k=>r.employee=k,placeholder:"Selecciona un trabajador",class:"text-xss","search-placeholder-text":"Buscar","text-by":"names","value-by":"id",options:D.value,searchable:"","highlight-matched-text":""},null,8,["modelValue","onUpdate:modelValue","options"]),s(f,{size:"small",class:"mr-6 mt-3 text-xxs",disabled:!r.employee,loading:r.loading,onClick:k=>K(r,!0)},{default:t(()=>[c(" Asignar trabajador ")]),_:2},1032,["disabled","loading","onClick"])])]),_:2},1024)]),_:2},1024))),128))])])):p("",!0)])]}),_:1},8,["modelValue"])])]),e("section",fs,[e("div",vs,[e("div",xs,[s(Se,{loading:A.value},{default:t(()=>[s(M,{color:"#eff6ff"},{default:t(()=>[s($,null,{default:t(()=>[c("Registrar un comentario")]),_:1}),s(q,null,{default:t(()=>[s(Ie,{modelValue:w.value,"onUpdate:modelValue":l[3]||(l[3]=i=>w.value=i),class:"w-full",background:"#fff",clearable:""},null,8,["modelValue"])]),_:1}),s(Oe,{align:"right"},{default:t(()=>[s(f,{disabled:!w.value,onClick:ge},{default:t(()=>[c("Registrar comentario")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["loading"])]),hs,e("div",ys,[z.value.length?(d(),u("div",bs,[(d(!0),u(T,null,L(z.value,(i,C)=>(d(),j(Le,{key:C,class:"list__item mt-3 bg-blue-50 px-2 py-3 rounded-md"},{default:t(()=>[s(Y,null,{default:t(()=>[s(X,{class:"flex justify-between text-primary font-bold text-xs"},{default:t(()=>[e("span",gs,o(i.creator.name),1),s(Q,{text:J(i.created_at),color:"#fff",class:"ml-3"},null,8,["text"])]),_:2},1024),s(X,{class:"text-black pt-2 text-xs",caption:"",lines:C+10},{default:t(()=>[c(o(i.comment),1)]),_:2},1032,["lines"])]),_:2},1024),s(Y,{icon:""},{default:t(()=>[s(f,{round:"",class:"cursor-pointer",color:"danger",icon:"delete",loading:i.loading,onClick:R=>ke(i)},null,8,["loading","onClick"])]),_:2},1024)]),_:2},1024))),128))])):p("",!0),z.value.length?p("",!0):(d(),j(De,{key:1,class:"text-xs",color:"#fdeae7","text-color":"#940909"},{default:t(()=>[c(" No existe actividad en esta orden. ")]),_:1}))])])])])])):p("",!0),s(N,{modelValue:v.value,"onUpdate:modelValue":l[5]||(l[5]=i=>v.value=i),size:"250px","hide-default-actions":"","no-dismiss":""},{footer:t(()=>[s(f,{size:"small",preset:"secondary",class:"mr-1",onClick:l[4]||(l[4]=i=>v.value=null)},{default:t(()=>[c(" Cancelar")]),_:1}),s(f,{size:"small",loading:G.value,onClick:we},{default:t(()=>[c(" Continuar")]),_:1},8,["loading"])]),default:t(()=>[ws]),_:1},8,["modelValue"]),s(N,{modelValue:I.value,"onUpdate:modelValue":l[7]||(l[7]=i=>I.value=i),size:"600px","hide-default-actions":"","no-dismiss":""},{footer:t(()=>[s(f,{size:"small",preset:"secondary",class:"mr-1",onClick:l[6]||(l[6]=()=>{I.value=!1,E.value=""})},{default:t(()=>[c(" Cerrar condiciones")]),_:1})]),default:t(()=>[e("p",Vs,o(H.value?"Condiciones Generales":"Condiciones Especificas"),1),Cs,e("div",{class:"py-3 px-2 text-xs bg-white rounded",innerHTML:E.value},null,8,ks)]),_:1},8,["modelValue"]),s(N,{modelValue:V.value,"onUpdate:modelValue":l[9]||(l[9]=i=>V.value=i),size:"250px","hide-default-actions":"","no-dismiss":""},{footer:t(()=>[s(f,{size:"small",preset:"secondary",class:"mr-1",onClick:l[8]||(l[8]=i=>V.value=!1)},{default:t(()=>[c(" Cancelar")]),_:1}),s(f,{size:"small",loading:G.value,onClick:Ce},{default:t(()=>[c(" Continuar")]),_:1},8,["loading"])]),default:t(()=>[js,Ts]),_:1},8,["modelValue"])],64)}}});export{Ls as default};
//# sourceMappingURL=ViewOrder-6daaa9bb.js.map
