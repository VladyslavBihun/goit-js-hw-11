(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const c=document.querySelector(".form"),p=document.querySelector(".input");document.querySelector(".button");const u=document.querySelector(".list");c.addEventListener("submit",d);function d(a){a.preventDefault();const t=p.value;m(t).then(n=>f(n.hits)).catch(n=>console.log(n)).finally(()=>c.reset())}function m(a){const t="https://pixabay.com/api/",n="key=43311395-53aae2d6cf7a92acb61eb4f46",r=new URLSearchParams({q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${t}?${n}&${r}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function f(a){const t=a.map(({webformatURL:n,largeImageURL:r,tags:e,likes:s,views:o,comments:i,downloads:l})=>`
        <li class="item">
        <a class="item-link" href="${r}">
        <img class="item-img" src="${n}" alt="${e}" />
        <div class="wrapper">
        <span class="span-name">Likes</span>
        <span class="span-value">${s}</span>
        </div>
        <div class="wrapper">
        <span class="span-name">Views</span>
        <span class="span-value">${o}</span>
        </div>
        <div class="wrapper">
        <span class="span-name">Comments</span>
        <span class="span-value">${i}</span>
        </div>
        <div class="wrapper">
        <span class="span-name">Downloads</span>
        <span class="span-value">${l}</span>
        </div>
        </a>
        <img>
        </li>
        `).join("");u.innerHTML=t}
//# sourceMappingURL=commonHelpers.js.map
