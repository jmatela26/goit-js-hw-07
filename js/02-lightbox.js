import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map((image) => 
`<li class="gallery__item">
    <a class="gallery__link" href="${image.original}">
     <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
    </a>
</li>`
).join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

// Initialize SimpleLightbox after gallery items are added
const lightbox = new SimpleLightbox('.gallery a');

