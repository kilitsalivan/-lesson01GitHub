const slider = () =>{
    const slide = document.querySelectorAll('.item'),
          slider = document.querySelector('.top-slider'),
          dot1 = document.querySelectorAll('.dot'),
          portfolioDots = document.querySelector('.portfolio-dots');
          
    let currentSlide = 0,
    interval;
for(let i = 0; i < dot1.length; i++){ 
        dot1[i].remove();
        }
const newDot = () =>{  
  for(let i = 0; i < slide.length; i++){
        let dot = document.createElement('li');
            dot.classList.add('dot');
                portfolioDots.appendChild(dot);
      }
       portfolioDots.children[0].classList.add('dot-active');	
     };
    newDot();
const dot = document.querySelectorAll('.dot');
const prevSlide = (elem, index, strClass) =>{
      if (strClass === 'dot-active') {
        elem[index].classList.remove(strClass);
      }else {
      elem[index].style.display = strClass;
      }
    };
    const nextSlide = (elem, index, strClass) => {
      if (strClass === 'dot-active'){
        elem[index].classList.add(strClass);
      }else {
      elem[index].style.display = strClass;
      }
    };

const autoPlaySlide = () =>{
          prevSlide(slide,currentSlide,'none'); 
          prevSlide(dot,currentSlide,'dot-active'); 
            currentSlide++;
        if (currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide,currentSlide,'block');
        nextSlide(dot,currentSlide,'dot-active');
        };

slider.addEventListener('click', (event) =>{
          event.preventDefault();
          let target = event.target;
    if (!target.matches('.portfolio-dots .dot')) {
      return;
    }     
    prevSlide(slide,currentSlide,'none'); 
    prevSlide(dot,currentSlide,'dot-active'); 
    
    if(target.matches('.dot')){
      dot.forEach((elem, index)=> {
          if (elem === target){
            currentSlide = index;
          }
      });
    }
    if (currentSlide >= slide.length){
        currentSlide = 0;
    }
    if (currentSlide < 0){
        currentSlide =  slide.length - 1;
    }
    nextSlide(slide,currentSlide,'block');
    nextSlide(dot,currentSlide,'dot-active');
    });

const stopSlide = () =>{
      clearInterval(interval);
};    
const startSlide = (time = 1500) =>{
        interval = setInterval (autoPlaySlide,time);
};
slider.addEventListener('mouseover',(event) => {
  if (event.target.matches('.dot')) {
     stopSlide();
  }
});
slider.addEventListener('mouseout',(event) => {
  if (event.target.matches('.dot')) {
    startSlide();
 }
});
startSlide();
};
export default slider;