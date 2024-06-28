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
  }
];

// Generate HTML markup for each image
const markup = images.map(({ preview, original, description }) => `
  <li class="gallery__item">
      <a class="gallery__link" href="${original}">
          <div class="gallery__image-container">
              <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
              />
          </div>
      </a>
  </li>
`).join('');

// Insert the markup into the .gallery element
const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', markup);

const galleryImage = document.querySelector('.gallery__image');
galleryImage.addEventListener('click', clickOnImage)

function clickOnImage (evt) {
    
}
// Add event listeners for hover effects
document.querySelectorAll('.gallery__image').forEach(image => {
  image.addEventListener('mouseover', function() {
      this.classList.add('zoom');
      const targetSelector = this.getAttribute('data-hover-target');
      document.querySelector(targetSelector).classList.add('hover-effect');
      
      // Apply frosted glass effect to other galleries
      document.querySelectorAll('.gallery').forEach(gallery => {
          if (!gallery.contains(this.closest('.gallery__item'))) {
              gallery.classList.add('frosted-glass');
          }
      });
  });

  image.addEventListener('mouseout', function() {
      this.classList.remove('zoom');
      const targetSelector = this.getAttribute('data-hover-target');
      document.querySelector(targetSelector).classList.remove('hover-effect');
      
      // Remove frosted glass effect from other galleries
      document.querySelectorAll('.gallery').forEach(gallery => {
          gallery.classList.remove('frosted-glass');
      });
  });
});



