import * as basicLightbox from 'basiclightbox';
import  'basiclightbox/dist/basicLightbox.min.css';
import {closeModal} from './closeModal';


function createModal () {const instance = basicLightbox.create(`
   
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
    `,{
        handler:null,
        onShow() {
      this.handler = closeModal.bind(instance);
         
        document.addEventListener('keydown', this.handler);
        document.addEventListener('click', this.handler)

    },
    onClose(){
        document.removeEventListener('keydown', this.handler);
        document.removeEventListener('click', this.handler)
    }
    });
    instance.show()
    

   

}

export {createModal}