import{d as w,y as S,b as u,c,e as B,f as i,k as e,m as p,w as a,z as b,i as g,g as l,h as r,t as k,n as N}from"./index-b6bf2d81.js";import{u as O}from"./oportunities-store-b5a756f8.js";import{v as x}from"./utils-17deefef.js";import{o as I}from"./helpers-a12fb3e4.js";import{l as R}from"./lodash-473566f6.js";const T={class:"py-4"},U={class:"text-sm"},D={class:"text-sm"},q={class:"bg-blue-100 p-2 pb-4 rounded mt-3"},E=r("span",{class:"px-0 font-bold text-sm"},"S/",-1),H=w({__name:"OportunitiesPage",setup(M){const y=I,d=O(),{showConfirm:n,isOnChangeStatus:f,activeOportunity:o}=S(d);return(P,t)=>{var C,_;const h=u("RouterView"),m=u("VaButton"),V=u("VaModal"),v=u("VaTextarea"),z=u("VaInput");return c(),B("div",T,[i(h),((C=e(o))==null?void 0:C.status)!=4?(c(),p(V,{key:0,modelValue:e(n),"onUpdate:modelValue":t[0]||(t[0]=s=>b(n)?n.value=s:null),size:"250px","hide-default-actions":"","no-dismiss":""},{footer:a(()=>[i(m,{size:"small",preset:"secondary",class:"mr-1",onClick:e(d).hideConfirm},{default:a(()=>[l(" Cancelar")]),_:1},8,["onClick"]),i(m,{size:"small",loading:e(f),onClick:e(d).doChangeStatus},{default:a(()=>[l(" Continuar ")]),_:1},8,["loading","onClick"])]),default:a(()=>[r("p",U,[l(" ¿Deseas cambiar el estado de la cotización "),r("b",null,"#"+k(e(o).id),1),l("? ")])]),_:1},8,["modelValue"])):g("",!0),((_=e(o))==null?void 0:_.status)===4?(c(),p(V,{key:1,modelValue:e(n),"onUpdate:modelValue":t[4]||(t[4]=s=>b(n)?n.value=s:null),size:"350px","hide-default-actions":"","no-dismiss":""},{footer:a(()=>[i(m,{size:"small",preset:"secondary",class:"mr-1",onClick:e(d).hideConfirm},{default:a(()=>[l(" Cancelar")]),_:1},8,["onClick"]),i(m,{size:"small",loading:e(f),onClick:e(d).doChangeStatus},{default:a(()=>[l(" Continuar ")]),_:1},8,["loading","onClick"])]),default:a(()=>[r("p",D,[l(" Aprobación de cotización "),r("b",null,"#"+k(e(o).id),1)]),r("div",q,[i(v,{modelValue:e(o).comments,"onUpdate:modelValue":t[1]||(t[1]=s=>e(o).comments=s),class:"mt-2 w-full text-xs",background:"#fff",clearable:"",label:"Ingresa un comentario",rules:[e(x).required]},null,8,["modelValue","rules"]),N((c(),p(z,{modelValue:e(o).total,"onUpdate:modelValue":t[2]||(t[2]=s=>e(o).total=s),class:"mt-2 font-bold",background:"primary",label:"Precio final",rules:[e(x).required],onChange:t[3]||(t[3]=()=>{e(o).total=e(R.ceil)(e(o).total,2)})},{prependInner:a(()=>[E]),_:1},8,["modelValue","rules"])),[[e(y)]])])]),_:1},8,["modelValue"])):g("",!0)])}}});export{H as default};
//# sourceMappingURL=OportunitiesPage-14a65531.js.map
