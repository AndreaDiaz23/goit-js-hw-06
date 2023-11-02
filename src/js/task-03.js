const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];


/* const gallery = document.querySelector('.gallery');

const lis = document.createElement("li");
gallery.appendChild(lis)

const img = document.createElement("img");
img.src = images[0].url
img.alt = images[0].alt
lis.appendChild(img)

console.log(gallery); */


const gallery = document.querySelector('.gallery');

images.forEach((valor,index)=>{
  const li = document.createElement('li');
  gallery.appendChild(li)
  const img = document.createElement('img')
  img.src = valor.url
  img.alt = valor.alt;
  li.appendChild(img)
})