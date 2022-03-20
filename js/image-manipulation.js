const imageContainer = document.querySelector('.fullScreenImage');
const closeBtn = document.querySelector('.fullScreenImage > .close-icon');
const previewImages = document.querySelectorAll(['.product-preview > picture'])
const thumbnailImages = document.querySelectorAll(['.product-thumbnails > picture'])

thumbnailImages.forEach(thumbImage => {
  thumbImage.addEventListener('click', changePreviewImage);
})
previewImages.forEach(image => {
  image.addEventListener('click', () => fullScreenImage('open'))
})
closeBtn.addEventListener('click', () => fullScreenImage('close'))

function fullScreenImage(clickSource) {
  if (clickSource === 'open') {
    imageContainer.classList.add('show');
    imageContainer.ariaHidden = 'false';
  } 
  if (clickSource === 'close') {
    imageContainer.classList.remove('show');
    imageContainer.ariaHidden = 'true';
  }
}
function changePreviewImage() {
  const clickedImageId = this.getAttribute('data-thumb-id');
  thumbnailImages.forEach(image => {
    image.classList.remove('active');
  })
  previewImages.forEach(image => {
    image.hidden = true;
    if (image.getAttribute('data-image-id') === clickedImageId) {
          image.removeAttribute('hidden');
    }
  })
  this.classList.add('active');
}
