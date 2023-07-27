const images = document.querySelectorAll(".img");
const sliderLine = document.querySelector(".slider-line");
let count = 0;
let width;

class newSlider {
  images;
  sliderLine;
  count = 0;
  width;
  nextbutton;
  prevbutton;

  constructor(selector) {
    const sliderElement = document.querySelector(selector);
    this.images = sliderElement.querySelectorAll(".img");
    this.sliderLine = sliderElement.querySelector(".slider-line");
    this.nextbutton = sliderElement.querySelector(".slider-next");
    this.prevbutton = sliderElement.querySelector(".slider-prev");
    this.width = document.querySelector(".slider").offsetWidth;
    this.prevbutton.addEventListener("click", () => {
      this.prviousSlide();
    });
    this.nextbutton.addEventListener("click", () => {
      this.nextSlide();
    });

    this.init();
  }

  prviousSlide() {
    this.count--;
    if (this.count <= 0) {
      this.count = 0;
    }
    this.rollSlider();
  }

  nextSlide() {
    this.count++;

    if (this.count >= this.images.length) {
      this.count = 0;
    }

    this.rollSlider();
  }

  init() {
    this.sliderLine.style.width = this.width * this.images.length + "px";

    this.images.forEach((items) => {
      items.style.width = width + "px";
      items.style.height = "auto";
    });
  }

  rollSlider() {
    console.log({ count: this.count, width: this.width });

    this.sliderLine.style.transform = `translate(-${
      this.count * this.width
    }px)`;
  }
}

const slider = new newSlider("#slider1");

// window = addEventListener("resize", init);
// init();
// next()
// {
// nextbutton.addEventListener("click",()=>
// {
//   count++;
//   if (count >= images.length) {
//     count = 0;
//   }
//   rollSlider();})
// };
// previous () {
// prevbutton.addEventListener("click", ()=>
// {
//   count--;
//   if (count <= 0) {
//     count = 0;
//   }
//   rollSlider();})

// };
//  rollSlider() {
//   sliderLine.style.transform = "translate(-" + count * width + "px)";
// }
// }

let active = false;

const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav");
const bodyInner = document.querySelector(".body__inner");
const clouseIcon = document.querySelector(".krest__item");

function menuHandler() {
  active = !active;

  if (active) {
    burger.classList.add("active");
    menu.classList.add("open");
    bodyInner.classList.add("background");
  } else {
    burger.classList.remove("active");
    menu.classList.remove("open");
    bodyInner.classList.remove("background");
  }
}

clouseIcon.addEventListener("click", function () {
  burger.classList.remove("active");
  menu.classList.remove("open");
  bodyInner.classList.remove("background");
});
burger.addEventListener("click", function () {
  menuHandler();
});

bodyInner.addEventListener("click", function () {
  menuHandler();
});
