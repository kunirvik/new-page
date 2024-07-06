import"./assets/modulepreload-polyfill-3cfb730f.js";import{b as r,S as c,g as o,a as n}from"./assets/vendor-0fd547fe.js";import{c as l}from"./assets/closeModal-ec5d980a.js";function p(){const e=r.create(`
   
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
    `,{handler:null,onShow(){this.handler=l.bind(e),document.addEventListener("keydown",this.handler),document.addEventListener("click",this.handler)},onClose(){document.removeEventListener("keydown",this.handler),document.removeEventListener("click",this.handler)}});e.show()}const g=[{preview:"../img/1.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"../img/2.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"../img/3.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"../img/4.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"./img/5.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"./img/6.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"./img/7.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"./img/8.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"./img/9.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],d=g.map(({preview:e,original:t,description:s})=>`<li class="gallery__item">
<a class="gallery__link" href="${t}">
  <img
   loading="lazy"
    class="gallery__image"
    src="${e}"
    data-source="${t}"
    alt="${s}"
  />
</a>
</li>`).join(""),m=document.querySelector(".gallery");m.insertAdjacentHTML("beforeend",d);new c(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});o.registerPlugin(n);const a=document.querySelector(".layout"),i=document.querySelectorAll(".gallery__item"),h=document.querySelector(".container"),u=a.offsetWidth;h.addEventListener("click",y);function y(e){e.preventDefault(),e.target.classList.contains("js-contact")&&(console.log("Navigating"),p()),e.target.classList.contains("js-model")&&(console.log("Navigating to page.html"),window.location.href="./model.html")}n.matchMedia({"(min-width: 800px)":function(){o.timeline({scrollTrigger:{markers:!0,trigger:a,pin:!0,scrub:1,start:"top top",end:()=>"+="+u,anticipatePin:1,invalidateOnRefresh:!0}}).to(i,{xPercent:-100*(i.length-6),ease:"none"})}});
//# sourceMappingURL=index.js.map
