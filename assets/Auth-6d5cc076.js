import{a6 as i}from"./index-5c8bf84e.js";const o={login:i+"/auth/login",register:i+"/auth/register"};async function r(e){const n={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)};let t=null;return await fetch(o.login,n).then(s=>{t=s.json()}),t}async function c(e){const n={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)};let t=null;return await fetch(o.register,n).then(s=>{t=s.json()}),t}export{c as a,r as b};
//# sourceMappingURL=Auth-6d5cc076.js.map
