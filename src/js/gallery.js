import { gsap } from "gsap";  


function createGallery(galleryElement, images, projectName, description) {
    const descriptionMarkup = `<div class="wrapper-description"><h1>${projectName}</h1><p>${description}</p></div>`;
    const imagesMarkup = images.map(({ preview }) => `
        <li class="gallery__item">
            <div class="gallery__image-container">
                <img class="gallery__image" loading="lazy" src="${preview}" />
            </div>
        </li>
    `).join('');
    galleryElement.insertAdjacentHTML('beforeend', descriptionMarkup + imagesMarkup);
}

const gallery1Images = [
    {
        preview: "./img/6.jpg"
    },
    {
        preview: "./img/4.jpg"
    },
    {
        preview: "./img/7.jpg",
      
    },
    {
        preview: "./img/5.jpg"
    }
];

const gallery2Images = [
     {
        preview: "./img/3.jpg"
    },
    {
        preview: "./img/4.jpg"
    },
    {
        preview: "./img/9.jpg"
    },
    {
        preview: "./img/11.jpg"
    }
];

const gallery3Images = [
    {
       preview: "./img/12.jpg"
   },
   {
       preview: "./img/5.jpg"
   },
   {
       preview: "./img/4.jpg"
   },
   {
       preview: "./img/8.jpg"
   }
];
const gallery1 = document.querySelector('.gallery1');
const gallery2 = document.querySelector('.gallery2');
const gallery3 = document.querySelector('.gallery3');
createGallery(gallery1, gallery1Images,"First Project", "Description for Gallery 1");
createGallery(gallery2, gallery2Images, "Second Project","Description for Gallery 2");
createGallery(gallery3, gallery3Images, "Thirthd Project","Description for Gallery 3");
document.querySelectorAll('.gallery__image').forEach(image => {
    image.addEventListener('mouseenter', () => {
        gsap.to(image, { scale: 1.05, duration: 0.5
        });
    });
    
    image.addEventListener('mouseleave', () => {
        gsap.to(image, { scale: 1, duration: 0.5 });
    });

    image.addEventListener('click', function (evt) {
        evt.preventDefault();
        if (evt.target.closest('.gallery__item')) {
            console.log('Navigating to page.html');
            window.location.href = './gallery1.html';
        }
    });
});