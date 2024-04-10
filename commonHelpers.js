(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();function u(a,t){const n=a.map(({webformatURL:r,largeImageURL:e,tags:s,likes:o,views:i,comments:l,downloads:p})=>`
        <li class="item">
        <a class="item-link" href="${e}">
        <img class="item-img" src="${r}" alt="${s}" />
        <div class="wrapper">
        <span class="span-name">Likes</span>
        <span class="span-value">${o}</span>
        </div>
        <div class="wrapper">
        <span class="span-name">Views</span>
        <span class="span-value">${i}</span>
        </div>
        <div class="wrapper">
        <span class="span-name">Comments</span>
        <span class="span-value">${l}</span>
        </div>
        <div class="wrapper">
        <span class="span-name">Downloads</span>
        <span class="span-value">${p}</span>
        </div>
        </a>
        <img>
        </li>
        `).join("");t.innerHTML=n}function d(a){const t="https://pixabay.com/api/",n="key=43311395-53aae2d6cf7a92acb61eb4f46",r=new URLSearchParams({q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${t}?${n}&${r}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const c=document.querySelector(".form"),m=document.querySelector(".input");document.querySelector(".button");const f=document.querySelector(".list");c.addEventListener("submit",h);function h(a){a.preventDefault();const t=m.value;d(t).then(n=>u(n.hits,f)).catch(n=>console.log(n)).finally(()=>c.reset())}
//# sourceMappingURL=commonHelpers.js.map
