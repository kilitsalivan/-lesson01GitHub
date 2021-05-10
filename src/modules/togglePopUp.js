const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
          popupContent = document.querySelector('.popup-content'),
          popupBtn = document.querySelectorAll('.popup-btn');
          
  const animate =  ({timing, draw, duration}) => {
        let start = performance.now();
            requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
          if (timeFraction > 1) {timeFraction = 1;}
        let progress = timing(timeFraction);
            draw(progress); // отрисовать её
          if (timeFraction < 1) {
            requestAnimationFrame(animate);
          }
        });
      };

const getpoup = () =>{
  animate({ duration: 500, timing(timeFraction) {
    return timeFraction;  },
    draw(progress) {
      popupContent.style.left = progress * 43 + '%';
        }
  });
};

    popupBtn.forEach ((elem) => { 
      elem.addEventListener('click', () => {
      let width = document.documentElement.clientWidth;
      popup.style.display = 'block';
        if (width > 768 ) { getpoup();}  });
});

window.addEventListener(`resize`, () => {
  let width = document.documentElement.clientWidth;  
   if (width < 768 ) { 
    popup.style.display = 'none'; 
    popupContent.style.left = ''; }
  }, false);


popup.addEventListener('click', (event) => {
          let target = event.target;
        if (target.closest('.popup-close')){
            popup.style.display = 'none';
            popupContent.style.left = '' ;
         } else {
          target = target.closest('.popup-content');
        if (!target){
            popup.style.display = 'none';
            popupContent.style.left = '' ;
          }    
        }
  });
};
export default togglePopUp;