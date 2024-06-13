import"./assets/modulepreload-polyfill-3cfb730f.js";import{b as s,S as p,g as a,a as i}from"./assets/vendor-d0c5ec0a.js";function r(t){(t.code==="Escape"||t.target.classList.contains("close-button"))&&this.close()}function l(){const t=s.create(`
   
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
    `,{handler:null,onShow(){this.handler=r.bind(t),document.addEventListener("keydown",this.handler),document.addEventListener("click",this.handler)},onClose(){document.removeEventListener("keydown",this.handler),document.removeEventListener("click",this.handler)}});t.show()}const d=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],h=d.map(({preview:t,original:o,description:c})=>`<li class="gallery__item">
<a class="gallery__link" href="${o}">
  <img
    class="gallery__image"
    src="${t}"
    data-source="${o}"
    alt="${c}"
  />
</a>
</li>`).join(""),g=document.querySelector(".gallery");g.insertAdjacentHTML("beforeend",h);new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});a.registerPlugin(i);const n=document.querySelector(".layout"),e=document.querySelectorAll(".gallery__item"),m=document.querySelector(".container"),u=n.offsetWidth;m.addEventListener("click",_);function _(t){t.preventDefault(),t.target.classList.contains("js-contact")&&(console.log("Navigating"),l()),t.target.classList.contains("js-model")&&(console.log("Navigating to page.html"),window.location.href="page.html")}i.matchMedia({"(min-width: 800px)":function(){a.timeline({scrollTrigger:{markers:!0,trigger:n,pin:!0,scrub:1,start:"top top",end:()=>"+="+u,anticipatePin:1,invalidateOnRefresh:!0}}).to(e,{xPercent:-100*(e.length-5),ease:"none"})}});
//# sourceMappingURL=commonHelpers.js.map
