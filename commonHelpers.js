import{b as d,S as h,g as r,a as p}from"./assets/vendor-41045062.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();function g(e){(e.code==="Escape"||e.target.classList.contains("close-button"))&&this.close()}function m(){const e=d.create(`
   
     <div class="modal">
  
     <div class="modal-container">
     <button class="close-button">X</button>
     <h1>Наши контакты</h1>
     <div class="contact-info">
         <p><strong>Адрес:</strong> 123 улица, Город, Страна, Почтовый индекс</p>
         <p><strong>Телефон: +380961383642</strong> <span class="phone">+7 (123) 456-7890</span></p>
         <p><strong>Email:</strong> <a href="mailto:info@example.com" class="email">info@example.com</a></p>
     </div>
 </div>
    
    </div>
    `,{handler:null,onShow(){this.handler=g.bind(e),document.addEventListener("keydown",this.handler),document.addEventListener("click",this.handler)},onClose(){document.removeEventListener("keydown",this.handler),document.removeEventListener("click",this.handler)}});e.show()}const u=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],f=u.map(({preview:e,original:i,description:n})=>`<li class="gallery__item">
<a class="gallery__link" href="${i}">
  <img
    class="gallery__image"
    src="${e}"
    data-source="${i}"
    alt="${n}"
  />
</a>
</li>`).join(""),y=document.querySelector(".gallery");y.insertAdjacentHTML("beforeend",f);new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});r.registerPlugin(p);const l=document.querySelector(".layout"),c=document.querySelectorAll(".gallery__item"),_=document.querySelector(".container"),b=l.offsetWidth;_.addEventListener("click",v);function v(e){e.preventDefault(),e.target.classList.contains("js-contact")&&(console.log("Navigating"),m()),e.target.classList.contains("js-model")&&(console.log("Navigating to page.html"),window.location.href="html/page.html")}p.matchMedia({"(min-width: 800px)":function(){r.timeline({scrollTrigger:{markers:!0,trigger:l,pin:!0,scrub:1,start:"top top",end:()=>"+="+b,anticipatePin:1,invalidateOnRefresh:!0}}).to(c,{xPercent:-100*(c.length-6),ease:"none"})}});
//# sourceMappingURL=commonHelpers.js.map
