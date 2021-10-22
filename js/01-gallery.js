import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListMarkup = document.querySelector('.gallery')

const galleryImages = createGallery(galleryItems);
galleryListMarkup.insertAdjacentHTML('beforeend', galleryImages);

function createGallery(items) {
    return items.map(({ preview, original, description }) => {
        return`
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `;
        })
    .join('');
};

galleryListMarkup.addEventListener('click', onPictureClick);

function onPictureClick(event) {
    event.preventDefault();
    
 const galleryItem = event.target;
    if (!galleryItem.classList.contains('gallery__image')) {
        return
  }

const instance = basicLightbox.create(`
    <div class="modal">
       <img src="${event.target.dataset.source}"
       class="enlarged__img"
       alt = "${event.target.alt}"
       width = '900'
       height = '700'
       />
    </div>
`, {
    onShow: (instance) => {
    window.addEventListener('keydown', escapeClose);

  function escapeClose (event) {
    if (event.code === 'Escape') {
        instance.close();
        window.removeEventListener('keydown', escapeClose);
      };
    };
  instance.element().querySelector('.enlarged__img').addEventListener("click", () => {
         instance.close();
     });
    },
}).show();
}

