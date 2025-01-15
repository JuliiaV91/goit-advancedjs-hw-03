import{S as u,i as a}from"./assets/vendor-B07T6_gy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const m=o=>o.map(e=>`
      <li class="gallery-card">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="gallery-info">
          <p class="info-item"><strong>Likes</strong> ${e.likes}</p>
          <p class="info-item"><strong>Views</strong> ${e.views}</p>
          <p class="info-item"><strong>Comments</strong> ${e.comments}</p>
          <p class="info-item"><strong>Downloads</strong> ${e.downloads}</p>
        </div>
      </li>
      `).join(""),f=o=>fetch(`https://pixabay.com/api/?key=48231881-acbb1e4446b49c7b538272001&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}),d=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),g=new u(".gallery a",{captionsData:"alt",captionDelay:250}),l=document.querySelector(".js-loader"),p=o=>{o.preventDefault();const e=o.currentTarget.elements.user_query.value.trim();if(!e||e===""){a.error({title:"❌",message:"Please enter your query!",position:"topRight",icon:""});return}l.classList.remove("is-hidden"),f(e).finally(()=>{l.classList.add("is-hidden")}).then(s=>{if(s.total===0){a.error({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",icon:""}),c.innerHTML="";return}c.innerHTML=m(s.hits),g.refresh()}).catch(s=>{console.log(s),o.currentTarget.reset()})};d.addEventListener("submit",p);
//# sourceMappingURL=index.js.map
