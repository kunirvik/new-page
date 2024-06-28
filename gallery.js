import"./assets/modulepreload-polyfill-3cfb730f.js";const a=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"}],r=a.map(({preview:o,original:e,description:t})=>`
  <li class="gallery__item">
      <a class="gallery__link" href="${e}">
          <div class="gallery__image-container">
              <img
                  class="gallery__image"
                  src="${o}"
                  data-source="${e}"
                  alt="${t}"
              />
          </div>
      </a>
  </li>
`).join(""),c=document.querySelector(".gallery");c.insertAdjacentHTML("beforeend",r);const i=document.querySelector(".gallery__image");i.addEventListener("click",s);function s(o){}document.querySelectorAll(".gallery__image").forEach(o=>{o.addEventListener("mouseover",function(){this.classList.add("zoom");const e=this.getAttribute("data-hover-target");document.querySelector(e).classList.add("hover-effect"),document.querySelectorAll(".gallery").forEach(t=>{t.contains(this.closest(".gallery__item"))||t.classList.add("frosted-glass")})}),o.addEventListener("mouseout",function(){this.classList.remove("zoom");const e=this.getAttribute("data-hover-target");document.querySelector(e).classList.remove("hover-effect"),document.querySelectorAll(".gallery").forEach(t=>{t.classList.remove("frosted-glass")})})});
//# sourceMappingURL=gallery.js.map
