import{A as o}from"./index-f95e1e62.js";const r={list:o+"/expenses",delete:o+"/expenses",register:o+"/expenses"},i=localStorage.getItem("__token");async function y(){const n={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+i}};let t=null;return await fetch(r.list,n).then(e=>{t=e.json()}),t}async function f(n){const t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+i},body:JSON.stringify(n)};let e=null;return await fetch(r.register,t).then(s=>{e=s.json()}),e}async function g(n){const t={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+i}};let e=null;return await fetch(`${r.delete}/${n}`,t).then(s=>{e=s.json()}),e}const a={list:o+"/actives",delete:o+"/actives",register:o+"/actives"},c=localStorage.getItem("__token");async function j(){const n={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+c}};let t=null;return await fetch(a.list,n).then(e=>{t=e.json()}),t}async function T(n){const t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+c},body:JSON.stringify(n)};let e=null;return await fetch(a.register,t).then(s=>{e=s.json()}),e}async function O(n){const t={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+c}};let e=null;return await fetch(`${a.delete}/${n}`,t).then(s=>{e=s.json()}),e}const l={list:o+"/drivers",delete:o+"/drivers",register:o+"/drivers"},h=localStorage.getItem("__token");async function v(){const n={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+h}};let t=null;return await fetch(l.list,n).then(e=>{t=e.json()}),t}async function E(n){const t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+h},body:JSON.stringify(n)};let e=null;return await fetch(l.register,t).then(s=>{e=s.json()}),e}async function m(n){const t={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+h}};let e=null;return await fetch(`${l.delete}/${n}`,t).then(s=>{e=s.json()}),e}const u={list:o+"/services",delete:o+"/services",register:o+"/services"},p=localStorage.getItem("__token");async function A(){const n={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+p}};let t=null;return await fetch(u.list,n).then(e=>{t=e.json()}),t}async function w(n){const t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+p},body:JSON.stringify(n)};let e=null;return await fetch(u.register,t).then(s=>{e=s.json()}),e}async function S(n){const t={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+p}};let e=null;return await fetch(`${u.delete}/${n}`,t).then(s=>{e=s.json()}),e}export{A as a,j as b,v as c,g as d,T as e,E as f,y as g,O as h,m as i,S as j,w as k,f as n};
//# sourceMappingURL=Services-5cdf3c78.js.map
