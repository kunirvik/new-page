import { createModal } from "./js/createModal";
import { gsap } from "gsap";  
import { ScrollTrigger } from "gsap/ScrollTrigger";
import  'basiclightbox/dist/basicLightbox.min.css';
import { closeModal } from "./js/closeModal";

// Correct import for ScrollTrigger

// Register ScrollTrigger plugin1
gsap.registerPlugin(ScrollTrigger);

// Регистрируем плагин ScrollToPlugin

const container = document.querySelector('.layout');
const slides = document.querySelectorAll('.slide');
const contact = document.querySelector('.container');
const containerWidth = container.offsetWidth;



contact.addEventListener('click', onClick);
function onClick(evt){	
	evt.preventDefault();
	if(evt.target.classList.contains('js-contact')){
		console.log('Navigating');
	  createModal()
	  }
	  
	if(evt.target.classList.contains('js-model')){

		console.log('Navigating to page.html');
		window.location.href = 'page.html';
	}

}





ScrollTrigger.matchMedia({
	"(min-width: 800px)": function() {
let tl1 = gsap.timeline({	
	scrollTrigger: {
		markers:true,
		trigger: container, 
		pin: true, 
		scrub: 2, 
		start:'top 20',
		ease: "none", 
		end: () => '+=' + containerWidth , 
		anticipatePin: 1, 
		invalidateOnRefresh: true, 
		
	}
	
})
	
tl1.to( slides, {
	xPercent: -110 * (slides.length - 4),
	
})	
	},

	
	
	"(max-width: 799px) and (max-height: 899px)": function() {
	
		let tl2 = gsap.timeline({	
			scrollTrigger: {
				markers:true,
				trigger: container, 
				pin: true, 
				scrub: 1, 
				start:'top ',
				ease: "none", 
				end: () => '+=' + (containerWidth * 1), 
				anticipatePin: 1, 
				invalidateOnRefresh: true, 
			}
			
		})
			
		tl2.to( slides, {
			xPercent: -110 * (slides.length - 4)
		})	

	}

	
})