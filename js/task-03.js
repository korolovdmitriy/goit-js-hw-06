const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryEl = document.querySelector(".gallery");
let imageElSrting = "";
images.forEach(el => {
  imageElSrting += `<li><img src="${el.url}" alt="${el.alt}" 
  width = 400px ><img></li>`;
});

galleryEl.insertAdjacentHTML("afterbegin", imageElSrting);
galleryEl.style.display = "flex";
galleryEl.style.alignItems = "center";
galleryEl.style.justifyContent = "space-between";
galleryEl.style.listStyleType = "none";

