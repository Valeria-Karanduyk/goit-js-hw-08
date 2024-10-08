'use strict';
const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const selectGallery = document.querySelector('.gallery');

const x = images.map(image => {
  const itemGallery = document.createElement('li');
  itemGallery.classList.add('gallery-item');
  const linkGallery = document.createElement('a');
  linkGallery.classList.add('gallery-link');
  linkGallery.href = `${image.original}`;
  itemGallery.appendChild(linkGallery);
  const imgGallery = document.createElement('img');
  imgGallery.className = 'gallery-image';
  imgGallery.src = `${image.preview}`;
  imgGallery.dataset.source = `${image.original}`;
  imgGallery.alt = `${image.description}`;
  linkGallery.appendChild(imgGallery);
  return itemGallery;
});

selectGallery.append(...x);
console.log(selectGallery);

selectGallery.addEventListener('click', tapGallery);
function tapGallery(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const tapItem = event.target.dataset.source;
  console.log(tapItem);

  const instance = basicLightbox.create(
    `
    <div class="modal">
        <img class="modalOpenClose" src=${tapItem} alt=${event.target.alt} width="1112" height="640">
        <a>Close</a>
    </div>
`,
    {
      onShow: instance => {
        instance.element().querySelector('img').onclick = instance.close;
      },
    }
  );
  instance.show();
  const delStyle = document.querySelector('.basicLightbox__placeholder');
  delStyle.style.removeProperty('max-width');
}
