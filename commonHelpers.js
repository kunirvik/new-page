import{b as f,g as s,S as d}from"./assets/vendor-5af63c29.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();function p(n){n.code==="Escape"&&this.close()}function m(){const n=f.create(`
   
     <div class="modal">
  
     <div class="container">
     <h1>Наши контакты</h1>
     <div class="contact-info">
         <p><strong>Адрес:</strong> 123 улица, Город, Страна, Почтовый индекс</p>
         <p><strong>Телефон:</strong> <span class="phone">+7 (123) 456-7890</span></p>
         <p><strong>Email:</strong> <a href="mailto:info@example.com" class="email">info@example.com</a></p>
     </div>
 </div>
    
    </div>
    `,{handler:null,onShow(){this.handler=p.bind(n),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler)}});n.show()}s.registerPlugin(d);const c=document.querySelector(".layout"),r=document.querySelectorAll(".slide"),h=document.querySelector(".text"),a=c.offsetWidth;h.addEventListener("click",g);function g(n){n.preventDefault(),n.target.classList.contains("js-contact")&&m()}d.matchMedia({"(min-width: 800px)":function(){s.timeline({scrollTrigger:{markers:!0,trigger:c,pin:!0,scrub:2,start:"top 20",ease:"none",end:()=>"+="+a,anticipatePin:1,invalidateOnRefresh:!0}}).to(r,{xPercent:-110*(r.length-1)})},"(max-width: 799px) and (max-height: 899px)":function(){s.timeline({scrollTrigger:{markers:!0,trigger:c,pin:!0,scrub:1,start:"top 20",ease:"none",end:()=>"+="+a*2,anticipatePin:1,invalidateOnRefresh:!0}}).to(r,{xPercent:-110*(r.length-1)})}});
//# sourceMappingURL=commonHelpers.js.map
