import{i as m,S as f}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function d(a,t){const r=a.map(({webformatURL:n,largeImageURL:e,tags:s,likes:o,views:l,comments:p,downloads:u})=>`
        <li class="item">
        <a class="item-link" href="${e}">
        <img class="item-img" src="${n}" alt="${s}" />
        <div class="wrapper">
        <span class="span-name">Likes</span>
        <span class="span-value">${o}</span>
        </div>
        <div class="wrapper">
        <span class="span-name">Views</span>
        <span class="span-value">${l}</span>
        </div>
        <div class="wrapper">
        <span class="span-name">Comments</span>
        <span class="span-value">${p}</span>
        </div>
        <div class="wrapper">
        <span class="span-name">Downloads</span>
        <span class="span-value">${u}</span>
        </div>
        </a>
        </li>
        `).join("");t.innerHTML=r}function h(a){const t="https://pixabay.com/api/",r="key=43311395-53aae2d6cf7a92acb61eb4f46",n=new URLSearchParams({q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${t}?${r}&${n}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.hits.length===0)throw new Error;return e})}const c=document.querySelector(".form"),y=document.querySelector(".input"),g=document.querySelector(".list"),i=document.querySelector(".loader");c.addEventListener("submit",v);function v(a){a.preventDefault(),i.style.display="inline-block";const t=y.value;h(t).then(r=>d(r.hits,g)).catch(()=>{m.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#EF4040",position:"topRight",progressBarColor:"#B51B1B"})}).finally(()=>{i.style.display="none",c.reset()})}let w=new f(".list a",{sourceAttr:"href",captionsData:"alt",captionDelay:250});w.refresh();
//# sourceMappingURL=commonHelpers.js.map
