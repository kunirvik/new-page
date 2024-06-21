import { createModal } from "./js/createModal";
import { gsap } from "gsap";  
import { ScrollTrigger } from "gsap/ScrollTrigger";
import  'basiclightbox/dist/basicLightbox.min.css';
import { closeModal } from "./js/closeModal";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const images = [
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
      description: "Hokkaido Flower",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
      description: "Container Haulage Freight",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
      description: "Aerial Beach View",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
      description: "Flower Blooms",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
      description: "Alpine Mountains",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
      description: "Mountain Lake Sailing",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
      description: "Alpine Spring Meadows",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
      description: "Nature Landscape",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
      description: "Lighthouse Coast Sea",
    },
    
    
  ];

  const markup = images.map(({preview, original, description}) => 
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`).join('')

const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true, 
    captionsData: 'alt', 
    captionDelay: 250, 
  });

// Correct import for ScrollTrigger

// Register ScrollTrigger plugin1
gsap.registerPlugin(ScrollTrigger);

// Регистрируем плагин ScrollToPlugin

const container = document.querySelector('.layout');
const slides = document.querySelectorAll('.gallery__item');
const contact = document.querySelector('.container');
const containerWidth = container.offsetWidth;


contact.addEventListener('click', onClick);
function onClick(evt){	
	evt.preventDefault();
	if(evt.target.classList.contains('js-contact')){
		console.log('Navigating');
	  createModal()
	  }
	  
	// if(evt.target.classList.contains('js-model')){

	// 	console.log('Navigating to page.html');
	// 	window.location.href = './html/page.html';
	// }

}






ScrollTrigger.matchMedia({
	"(min-width: 800px)": function() {
let tl1 = gsap.timeline({	
	scrollTrigger: {
		markers:true,
		trigger: container, 
		pin: true, 
		scrub: 1, 
		start:'top top',
		
		end: () => '+=' + containerWidth , 
		anticipatePin: 1, 
		invalidateOnRefresh: true, 
		
	}
	
})
	
tl1.to( slides, {
	xPercent: -100 * (slides.length - 6),
	ease: "none", 
})	
	},
})
	
	
	// "(max-width: 799px) and (max-height: 899px)": function() {
	
	// 	let tl2 = gsap.timeline({	
	// 		scrollTrigger: {
	// 			markers:true,
	// 			trigger: container, 
	// 			pin: true, 
	// 			scrub: 1, 
	// 			start:'top ',
	// 			ease: "none", 
	// 			end: () => '+=' + (containerWidth * 1), 
	// 			anticipatePin: 1, 
	// 			invalidateOnRefresh: true, 
	// 		}
			
	// 	})
			
	// 	tl2.to( slides, {
	// 		xPercent: -110 * (slides.length - 4)
	// 	})	

	// }

	
