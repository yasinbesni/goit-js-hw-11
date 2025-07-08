import{S as d,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();window.global||(window.global=window);const u=new d(".gallery a",{captionsData:"alt",captionDelay:250}),p=document.querySelector(".search-button");p.addEventListener("click",a=>{a.preventDefault();const o=document.querySelector("#searchInput").value,n=document.querySelector(".loader"),i="48318006-868fd1918e5aa19d98c3706e2",t=new URLSearchParams({q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});t.q=o,n.style.display="flex",fetch(`https://pixabay.com/api/?key=${i}&${t.toString()}`).then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.json()}).then(e=>{n.style.display="none";const r=document.querySelector(".gallery");r.innerHTML="";const l=e.hits.map(s=>`
          <a href="${s.largeImageURL}" class="image-card">
              <img src="${s.webformatURL}" alt="${s.tags}" />
              <div class="image-info">
                <div class="likes">
                  <p class="likes-text">Likes</p>
                  <p class="likes-count">${s.likes}</p>
                </div>
                <div class="views">
                  <p class="views-text">Views</p>
                  <p class="views-count">${s.views}</p>
                </div>
                <div class="comments">
                  <p class="comments-text">Comments</p>
                  <p class="comments-count">${s.comments}</p>
                </div>
                <div class="downloads">
                  <p class="downloads-text">Downloads</p>
                  <p class="downloads-count">${s.downloads}</p>
                </div>
              </div>
            </a>
          `).join("");if(r.innerHTML=l,u.refresh(),e.hits.length===0)return c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(e=>{n.style.display="none",c.error({message:"Something went wrong! Please try again.",position:"topRight"}),console.error("API request error:",e)})});
//# sourceMappingURL=index.js.map
