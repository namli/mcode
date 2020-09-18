// Write your code here

var slides = ['./img/kitten1.jpg', './img/kitten2.jpg', './img/kitten3.jpg', './img/kitten4.jpg']

function getImage(dir, curImage) {

  if (curImage === 0 && dir === 'prev') {
    return { src: slides[3], curImage: 3 };
  }
  if (curImage === 3 && dir === 'next') {
    return { src: slides[0], curImage: 0 };
  }
  if (dir === 'next') {

    return { src: slides[curImage + 1], curImage: curImage + 1 };
  }
  if (dir === 'prev') {
    return { src: slides[curImage - 1], curImage: curImage - 1 };
  }
}

function main() {
  img = document.querySelector('.slide-image');
  img.setAttribute('src', slides[0]);
  curImage = 0;
  var auto;
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('prev')) {
      slide = getImage('prev', curImage);
      img.setAttribute('src', slide.src);
      curImage = slide.curImage;
    }
    if (e.target.classList.contains('next')) {
      slide = getImage('next', curImage);
      img.setAttribute('src', slide.src);
      curImage = slide.curImage;
    }
    if (e.target.classList.contains('next-auto')) {
      auto = setInterval(() => {
        slide = getImage('next', curImage);
        img.setAttribute('src', slide.src);
        curImage = slide.curImage;
      }, 1000);
    }
    if (e.target.classList.contains('prev-auto')) {
      auto = setInterval(() => {
        slide = getImage('prev', curImage);
        img.setAttribute('src', slide.src);
        curImage = slide.curImage;
      }, 1000);
    }
    if (e.target.classList.contains('stop')) {
      clearInterval(auto);
    }
  });

}





window.onload = main;
