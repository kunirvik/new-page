import * as basicLightbox from 'basiclightbox';
import  'basiclightbox/dist/basicLightbox.min.css';
import {closeModal} from './closeModal';


function createModal () {const instance = basicLightbox.create(`
   
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
    `,{
        handler:null,
        onShow() {
      this.handler = closeModal.bind(instance);
        document.addEventListener('keydown', this.handler);

    },
    onClose(){
        document.removeEventListener('keydown', this.handler)
    }
    });
    instance.show()
    

   

}

export {createModal}