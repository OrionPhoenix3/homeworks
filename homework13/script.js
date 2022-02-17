// Zyabrev Vladislav JS4

//Homework 13

//Задание 1

const images = [...document.querySelectorAll(".img")];

const prevButton = document.getElementById("buttonPrev");
const nextButton = document.getElementById("buttonNext");

const hideImagesOnLoad = () => {
   const imageToHide = images.slice(1);

   imageToHide.forEach((img) => {
    img.classList.add("hidden");
   });
};

window.addEventListener('DOMContentLoaded', hideImagesOnLoad);

let currentImageIndex = 0;

const showNextImages = () => {
  images[currentImageIndex].classList.add('hidden');

  if(currentImageIndex === images.length - 1){
    images[0].classList.remove('hidden');
    currentImageIndex = 0;
  } else {
    images[currentImageIndex + 1].classList.remove('hidden');
    currentImageIndex++;
  }
}

const showPrevImages = () => {
  images[currentImageIndex].classList.add('hidden');

  if(currentImageIndex === 0){
    images[images.length - 1].classList.remove('hidden');
    currentImageIndex = images.length - 1;
  } else {
    images[currentImageIndex - 1].classList.remove('hidden');
    currentImageIndex--;
  }
}

prevButton.addEventListener('click', showPrevImages)
nextButton.addEventListener('click', showNextImages)







