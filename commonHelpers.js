import"./assets/modulepreload-polyfill-3cfb730f.js";import{b as a,g as n,S as s}from"./assets/vendor-f5e6c3dd.js";function c(t){(t.code==="Escape"||t.target.classList.contains("close-button"))&&this.close()}function r(){const t=a.create(`
   
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
    `,{handler:null,onShow(){this.handler=c.bind(t),document.addEventListener("keydown",this.handler),document.addEventListener("click",this.handler)},onClose(){document.removeEventListener("keydown",this.handler),document.removeEventListener("click",this.handler)}});t.show()}n.registerPlugin(s);const o=document.querySelector(".layout"),e=document.querySelectorAll(".slide"),l=document.querySelector(".container"),i=o.offsetWidth;l.addEventListener("click",d);function d(t){t.preventDefault(),t.target.classList.contains("js-contact")&&(console.log("Navigating"),r()),t.target.classList.contains("js-model")&&(console.log("Navigating to page.html"),window.location.href="page.html")}s.matchMedia({"(min-width: 800px)":function(){n.timeline({scrollTrigger:{markers:!0,trigger:o,pin:!0,scrub:2,start:"top 20",ease:"none",end:()=>"+="+i,anticipatePin:1,invalidateOnRefresh:!0}}).to(e,{xPercent:-110*(e.length-4)})},"(max-width: 799px) and (max-height: 899px)":function(){n.timeline({scrollTrigger:{markers:!0,trigger:o,pin:!0,scrub:1,start:"top ",ease:"none",end:()=>"+="+i*1,anticipatePin:1,invalidateOnRefresh:!0}}).to(e,{xPercent:-110*(e.length-4)})}});
//# sourceMappingURL=commonHelpers.js.map
