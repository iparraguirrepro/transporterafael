import{A as r}from"./index-4f9ea22f.js";const u={list:r+"/expenses",delete:r+"/expenses",register:r+"/expenses"},h=localStorage.getItem("__token");async function d(){const n={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+h}};let t=null;return await fetch(u.list,n).then(e=>{t=e.json()}),t}async function y(n){const t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+h},body:JSON.stringify(n)};let e=null;return await fetch(u.register,t).then(s=>{e=s.json()}),e}async function f(n){const t={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+h}};let e=null;return await fetch(`${u.delete}/${n}`,t).then(s=>{e=s.json()}),e}const o={list:r+"/drivers",delete:r+"/drivers",register:r+"/drivers"},i=localStorage.getItem("__token");async function g(){const n={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+i}};let t=null;return await fetch(o.list,n).then(e=>{t=e.json()}),t}async function j(n,t){const e={method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+i},body:JSON.stringify(t)};let s=null;return await fetch(`${o.register}/${n}`,e).then(l=>{s=l.json()}),s}async function T(n){const t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+i},body:JSON.stringify(n)};let e=null;return await fetch(o.register,t).then(s=>{e=s.json()}),e}async function O(n){const t={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+i}};let e=null;return await fetch(`${o.delete}/${n}`,t).then(s=>{e=s.json()}),e}const a={list:r+"/services",delete:r+"/services",register:r+"/services"},c=localStorage.getItem("__token");async function v(){const n={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+c}};let t=null;return await fetch(a.list,n).then(e=>{t=e.json()}),t}async function m(n,t){const e={method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+c},body:JSON.stringify(t)};let s=null;return await fetch(`${a.register}/${n}`,e).then(l=>{s=l.json()}),s}async function A(n){const t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+c},body:JSON.stringify(n)};let e=null;return await fetch(a.register,t).then(s=>{e=s.json()}),e}async function E(n){const t={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+c}};let e=null;return await fetch(`${a.delete}/${n}`,t).then(s=>{e=s.json()}),e}export{g as a,O as b,T as c,E as d,d as e,y as f,v as g,f as h,m as i,A as n,j as u};
//# sourceMappingURL=Services-f7e56ebf.js.map
