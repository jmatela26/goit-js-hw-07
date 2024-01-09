import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map((image) => 
`<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`
).join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
const onContainerClick = (e) => {
  e.preventDefault();

  if (e.target.classList.contains("gallery__image")) {
    const source = e.target.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${source}" width="800" height="600">`);

    instance.show();
  }
};

galleryList.addEventListener("click", onContainerClick);
console.log(galleryItems);
