import{A as a}from"./index-b6bf2d81.js";const s={list:a+"/employee",delete:a+"/employee",register:a+"/employee"},i=localStorage.getItem("__token");async function c(){const n={method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+i}};let t=null;return await fetch(s.list,n).then(e=>{t=e.json()}),t}async function p(){const n={method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+i}};let t=null;return await fetch(`${s.list}?onlyactives=true`,n).then(e=>{t=e.json()}),t}async function l(n){const t={method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+i}};let e=null;return await fetch(`${s.list}/${n}`,t).then(o=>{e=o.json()}),e}async function u(n){const t={method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+i}};let e=null;return await fetch(`${s.delete}/${n}`,t).then(o=>{e=o.json()}),e}async function h(n,t){const e={method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+i},body:JSON.stringify(n)};let o=null;return await fetch(`${s.register}/${t}`,e).then(r=>{o=r.json()}),o}async function d(n){const t={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+i},body:JSON.stringify(n)};let e=null;return await fetch(s.register,t).then(o=>{e=o.json()}),e}const j={getAll:c,getActives:p,getById:l,delete:u,update:h,register:d};export{j as E};
//# sourceMappingURL=Employee-37de7c77.js.map
