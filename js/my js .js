const images= document.querySelectorAll('.img');
const sliderLine= document.querySelector('.slider-line')
let count=0;
let width;

function init ()
{
  width=document.querySelector('.slider').offsetWidth;
  sliderLine.style.width=width*images.length+'px';
  images.forEach(items=>
    {
      items.style.width= width+'px';
      items.style.height='auto';
    }
    )
    rollSlider();
}

var window=addEventListener('resize',init);
init();

 document.querySelector('.slider-next').addEventListener('click',function()
 {
  count++;
  if (count >=images.length)
  {
    count=0;
  }
  rollSlider();
 });

 document.querySelector('.slider-prev').addEventListener('click',function()
 {
  count--;
  
  rollSlider();
 });

 function rollSlider()
 {
    sliderLine.style.transform='translate(-'+ count*width+'px)';
 }


 
document.querySelector('.hamburger').addEventListener('click',function(){
  this.classList.toggle('active');
  document.querySelector('.nav').classList.toggle('open');
})