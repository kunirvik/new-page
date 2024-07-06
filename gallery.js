import"./assets/modulepreload-polyfill-3cfb730f.js";import{g as l}from"./assets/vendor-0fd547fe.js";function i(e,r,t,a){const o=`<div class="wrapper-description"><h1>${t}</h1><p>${a}</p></div>`,g=r.map(({preview:c})=>`
        <li class="gallery__item">
            <div class="gallery__image-container">
                <img class="gallery__image" loading="lazy" src="${c}" />
            </div>
        </li>
    `).join("");e.insertAdjacentHTML("beforeend",o+g)}const n=[{preview:"../img/6.jpg"},{preview:"../img/4.jpg"},{preview:"../img/7.jpg"},{preview:"../img/5.jpg"}],p=[{preview:"../img/3.jpg"},{preview:"../img/4.jpg"},{preview:"../img/9.jpg"},{preview:"../img/11.jpg"}],s=[{preview:"../img/12.jpg"},{preview:"../img/5.jpg"},{preview:"../img/4.jpg"},{preview:"../img/8.jpg"}],m=document.querySelector(".gallery1"),y=document.querySelector(".gallery2"),d=document.querySelector(".gallery3");i(m,n,"First Project","Description for Gallery 1");i(y,p,"Second Project","Description for Gallery 2");i(d,s,"Thirthd Project","Description for Gallery 3");document.querySelectorAll(".gallery__image").forEach(e=>{e.addEventListener("mouseenter",()=>{l.to(e,{scale:1.05,duration:.5})}),e.addEventListener("mouseleave",()=>{l.to(e,{scale:1,duration:.5})}),e.addEventListener("click",function(r){r.preventDefault(),r.target.closest(".gallery__item")&&(console.log("Navigating to page.html"),window.location.href="./gallery1.html")})});
//# sourceMappingURL=gallery.js.map
