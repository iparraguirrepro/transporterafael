import{d as u,r,o as _,c as f,a as e,b as t,e as g,f as s,t as x,_ as y,g as v,w as o,n as C,u as h,V as k,h as w,i as $,F as V,j as S,k as T,m as b}from"./index-4f9ea22f.js";const z={class:"va-timeline-item"},I={class:"va-timeline-item__icon-cell"},N={class:"va-timeline-item__icon"},O={class:"va-timeline-item__content-cell"},j={class:"va-timeline-item__content"},B={class:"va-timeline-item__date-cell"},D=u({__name:"TimelineItem",props:{date:{type:String,default:""}},setup(p){return(a,n)=>{const l=r("VaIcon");return _(),f("tr",z,[e("td",I,[e("div",N,[t(l,{name:"schedule",size:"18px",color:"backgroundBorder"})])]),e("td",O,[e("div",j,[g(a.$slots,"default",{},void 0,!0)])]),e("td",B,[g(a.$slots,"date",{},()=>[s(x(a.$props.date),1)],!0)])])}}});const d=y(D,[["__scopeId","data-v-3db2e568"]]),A=e("h1",{class:"card-title text-secondary font-bold uppercase"},[s(" Notificaciónes de "),e("span",{class:"font-extrabold rounded py-0.5"},"HOY")],-1),L={class:"mt-4"},H=e("span",{class:"cursor-pointer text-primary font-bold"},"Lizbeth Hidalgo",-1),F=e("span",{class:"text-primary font-bold cursor-pointer"},"Administrador",-1),q=e("span",{class:"text-primary font-bold cursor-pointer"},"Administrador",-1),M=e("span",{class:"text-primary font-bold cursor-pointer"},"Administrador",-1),P=e("span",{class:"cursor-pointer text-primary font-bold"},"Lizbeth Hidalgo",-1),R=e("span",{class:"cursor-pointer text-primary font-bold"},"Ariel SaC",-1),Y=e("span",{class:"cursor-pointer text-primary font-bold"},"Antamina",-1),E=u({__name:"Timeline",setup(p){return(a,n)=>{const l=r("VaCardTitle"),c=r("RouterLink"),m=r("VaCardContent"),i=r("VaCard");return _(),v(i,null,{default:o(()=>[t(l,{class:"flex justify-between"},{default:o(()=>[A]),_:1}),t(m,{class:"overflow-y-scroll"},{default:o(()=>[e("table",L,[e("tbody",null,[t(d,{class:"text-sm",date:"Nov 15, 2023"},{default:o(()=>[s(" Se ha registrado la cotización "),t(c,{class:"va-link font-semibold",to:"/projects"},{default:o(()=>[s("#0023")]),_:1}),s(" asociada al cliente "),H]),_:1}),t(d,{class:"text-sm",date:"Nov 15, 2023"},{default:o(()=>[F,s(" Ha actualizado las rutas ")]),_:1}),t(d,{class:"text-sm",date:"Nov 15, 2023"},{default:o(()=>[q,s(" Ha actualizado los precios de vehiculos ")]),_:1}),t(d,{class:"text-sm",date:"Nov 15, 2023"},{default:o(()=>[M,s(" Ha actualizado los viaticos ")]),_:1}),t(d,{class:"text-sm",date:"Nov 15, 2023"},{default:o(()=>[s(" Se ha registrado un nuevo usuario de tipo comercial "),t(c,{class:"va-link font-semibold",to:"/projects"},{default:o(()=>[s("Pedro Cateriano")]),_:1}),s(" creado por "),P]),_:1}),t(d,{class:"text-sm",date:"Nov 15, 2023"},{default:o(()=>[s(" Se ha registrado la cotización "),t(c,{class:"va-link font-semibold",to:"/projects"},{default:o(()=>[s("#0022")]),_:1}),s(" asociada al cliente "),R]),_:1}),t(d,{class:"text-sm",date:"Nov 15, 2023"},{default:o(()=>[s(" Orden finalizada "),t(c,{class:"va-link font-semibold",to:"/projects"},{default:o(()=>[s("#0019")]),_:1}),s(" asociada al cliente "),Y]),_:1})])])]),_:1})]),_:1})}}}),G={class:"flex items-center justify-between"},J={class:"text-lg font-semibold grow"},K={class:"m-0 text-sm"},Q=u({__name:"DataSectionItem",props:{title:{},value:{},changeText:{},up:{type:Boolean},iconBackground:{},iconColor:{}},setup(p){return console.log(p),(n,l)=>{const c=r("VaCardContent");return _(),v(h(k),null,{default:o(()=>[t(c,null,{default:o(()=>[e("section",null,[e("header",G,[e("div",J,x(n.value),1),e("div",{class:"p-1 rounded",style:C({backgroundColor:n.iconBackground,color:n.iconColor})},[g(n.$slots,"icon")],4)]),e("div",null,[e("p",K,x(n.title),1)])])]),_:3})]),_:3})}}}),U={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"},W=u({__name:"DataSection",setup(p){const{getColor:a}=w(),n=$(()=>[{id:"openInvoices",title:"Cotizaciones cerradas (x Mes)",value:"S/ 35.548",icon:"mso-attach_money",changeText:"S/ 1, 450",changeDirection:"down",iconBackground:a("success"),iconColor:a("on-success")},{id:"ongoingProjects",title:"Ordenes de trabajo activas",value:"15",icon:"list_alt",changeText:"25",changeDirection:"up",iconBackground:a("info"),iconColor:a("on-info")}]);return(l,c)=>{const m=r("VaIcon");return _(),f("div",U,[(_(!0),f(V,null,S(n.value,i=>(_(),v(Q,{key:i.id,title:i.title,value:i.value,"change-text":i.changeText,up:i.changeDirection==="up","icon-background":i.iconBackground,"icon-color":i.iconColor},{icon:o(()=>[t(m,{name:i.icon,size:"medium"},null,8,["name"])]),_:2},1032,["title","value","change-text","up","icon-background","icon-color"]))),128))])}}}),X={class:"py-5"},Z=e("h1",{class:"h5 m-0"},"Dashboard",-1),ee={class:"columns-1 sm:columns-5 mt-5"},te={class:"flex flex-row flex-wrap flex-wrap mt-5"},se={class:"w-full flex flex-col sm:flex-row gap-5 mb-4 min-h-[858px] sm:min-h-[300px] max-h-[300px]"},oe={class:"w-full p-2 bg-white border border-gray-100 rounded-lg relative min-h-[230px]"},ae=T('<h5 class="mb-2 text-sm1 font-semibold tracking-tight">Servicios más cotizados</h5><div class="w-full absolute top-10 pt-4 flex flex-wrap gap-1 items-center justify-center"><span class="bg-blue-100 text-xs text-white font-bold me-2 px-2.5 py-0.5 rounded" style="background:rgb(0, 143, 251);">Transporte de personal</span><span class="bg-blue-100 text-xs text-dark font-bold me-2 px-2.5 py-0.5 rounded" style="background:rgb(0, 227, 150);">Transporte de materiales</span><span class="bg-blue-100 text-xs text-dark font-bold me-2 px-2.5 py-0.5 rounded" style="background:rgb(254, 176, 25);">Alquiler de vehiculos</span></div>',2),ne={clasS:"w-full absolute -bottom-20 -mb-4 flex items-center justify-center left-0"},ie={class:"w-full p-2 bg-white border border-gray-100 rounded-lg relative min-h-[290px]"},le=e("h5",{class:"mb-2 text-sm1 font-semibold tracking-tight"},"Cotizaciones cerradas",-1),ce={class:"absolute bottom-1 w-full left-0"},re={class:"w-full p-2 bg-white border border-gray-100 rounded-lg relative min-h-[290px]"},de=e("h5",{class:"mb-2 text-sm1 font-semibold tracking-tight"},"Ordenes activas",-1),_e={class:"absolute bottom-1 w-full left-0"},ue=u({__name:"Dashboard",setup(p){const a={chartOptions:{xaxis:{categories:["12/10","13/10","14/10","15/10","16/10","17/10","18/10","19/10"]}},series:[{name:"series-1",data:[13,24,18,7,15,6,22,9]}]},n={chartOptions:{xaxis:{categories:["12/10","13/10","14/10","15/10","16/10","17/10","18/10","19/10"]}},series:[{name:"series-1",data:[3,4,5,1,9,6,2,9]}]},l={series:[44,55,13],chartOptions:{legend:{show:!1},plotOptions:{pie:{startAngle:-90,endAngle:90,offsetY:10}},labels:["Transporte de personal","Transporte turistico","Alquiler de vehiculos"],responsive:[{breakpoint:480,options:{chart:{width:250},dataLabels:{enabled:!1},legend:{position:"bottom"}}}]}};return(c,m)=>{const i=r("VaDateInput");return _(),f("div",X,[Z,e("div",ee,[e("div",null,[t(i,{label:"Filtrar por fecha",placeholder:"Ingresa una fecha",mode:"range",background:"#fff"})])]),e("div",te,[t(W,{class:"w-full mb-4"}),e("div",se,[e("div",oe,[ae,e("div",ne,[t(h(b),{type:"donut",options:l.chartOptions,series:l.series},null,8,["options","series"])])]),e("div",ie,[le,e("div",ce,[t(h(b),{type:"bar",options:a.chartOptions,series:a.series},null,8,["options","series"])])]),e("div",re,[de,e("div",_e,[t(h(b),{type:"bar",options:n.chartOptions,series:n.series},null,8,["options","series"])])])]),t(E,{class:"w-full"})])])}}});export{ue as default};
//# sourceMappingURL=Dashboard-a654ba7d.js.map
