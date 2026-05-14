import{a as S,S as q,i as s}from"./assets/vendor-DcHCnVjq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const P="https://pixabay.com/api/",B="55703033-0c3414e280352f7ac0065df9c";async function f(r,t){return(await S.get(P,{params:{key:B,q:r,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const m=document.querySelector(".gallery"),p=document.querySelector(".load-more"),h=document.querySelector(".loader"),M=new q(".gallery a",{captionsData:"alt",captionDelay:250});function g(r){const t=r.map(({webformatURL:a,largeImageURL:c,tags:e,likes:o,views:i,comments:w,downloads:v})=>`
      <li class="gallery-item">
        <a href="${c}">
          <img src="${a}" alt="${e}" loading="lazy" />
        </a>

        <div class="info">
          <p><b>Likes</b> ${o}</p>
          <p><b>Views</b> ${i}</p>
          <p><b>Comments</b> ${w}</p>
          <p><b>Downloads</b> ${v}</p>
        </div>
      </li>
    `).join("");m.insertAdjacentHTML("beforeend",t),M.refresh()}function $(){m.innerHTML=""}function y(){h.classList.add("is-visible")}function b(){h.classList.remove("is-visible")}function R(){p.classList.remove("hidden")}function L(){p.classList.add("hidden")}const d=document.querySelector(".form"),O=document.querySelector(".load-more");let n=1,l="",u=0;d.addEventListener("submit",async r=>{if(r.preventDefault(),l=d.elements["search-text"].value.trim(),!l){s.warning({message:"Please enter a search query!",position:"topRight"});return}n=1,$(),L(),y();try{const t=await f(l,n);if(u=t.totalHits,t.hits.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits),u>15&&R()}catch{s.error({message:"Something went wrong!",position:"topRight"})}finally{b(),d.reset()}});O.addEventListener("click",async()=>{n+=1,y();try{const r=await f(l,n);g(r.hits);const t=Math.ceil(u/15);n>=t&&(L(),s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),x()}catch{s.error({message:"Something went wrong!",position:"topRight"})}finally{b()}});function x(){const r=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
