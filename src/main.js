
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Correct import for ScrollTrigger

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Регистрируем плагин ScrollToPlugin
const container = document.querySelector('.layout');
const slides = document.querySelectorAll('.slide');
const containerWidth = container.offsetWidth;
gsap.to( slides, {
	xPercent: -110 * (slides.length - 1),
	ease: "none", 
	scrollTrigger: {
		markers:true,
		trigger: container, 
		pin: true, 
		scrub: 2, 
		start:'top 20',
		
		end: () => '+=' + containerWidth, 
		anticipatePin: 1, 
		invalidateOnRefresh: true, 
	}
	
})
