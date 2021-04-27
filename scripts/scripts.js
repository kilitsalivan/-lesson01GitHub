window.addEventListener('DOMContentLoaded', function(){
  'use strict';
// таймер
 function countTimer(dedline){
   let timerHours = document.querySelector('#timer-hours'),
       timerMinutes =  document.querySelector('#timer-minutes'),
       timerSeconds =  document.querySelector('#timer-seconds'),
       interVal;
       
       
       
  function getTimeRemaining () {
    let dateStop = new Date(dedline).getTime(),
     dateNow = new Date().getTime(),
     timeRemaining = (dateStop - dateNow) / 1000,
     seconds = Math.floor(timeRemaining % 60),
     minutes = Math.floor((timeRemaining / 60) % 60),
     hours = Math.floor((timeRemaining / 60 / 60) % 24);
     return {timeRemaining, hours,  minutes,  seconds };
  }
const updateClock = function  () {
  let timer = getTimeRemaining();
      timerHours.textContent = timer.hours < 10 ? `0${timer.hours}` : timer.hours;
			timerMinutes.textContent = timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes;
			timerSeconds.textContent = timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds;
      
  if ((timer.hours < 0) || (timer.minutes < 0) || (timer.seconds < 0) ) {
				timerHours.textContent = `00`;
				timerMinutes.textContent = `00`;
				timerSeconds.textContent = `00`;
      } 
    }
        interVal = setInterval(updateClock, 1000);
}
countTimer('29 April 2021'); 
// меню
const toggleMenu = () =>{
    const btnMenu = document.querySelector('.menu'),
          menu = document.querySelector('menu'),
          closeBtn = document.querySelector ('.close-btn'),
          menuItems = menu.querySelectorAll('ul>li');
    const handlerMenu = () => {
      menu.classList.toggle('active-menu'); 
    };      
          btnMenu.addEventListener('click', handlerMenu);
          closeBtn.addEventListener('click', handlerMenu);      
          menuItems.forEach((elem) =>elem.addEventListener('click', handlerMenu));
};
      toggleMenu();
//popup
const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
          popupClose = document.querySelector('.popup-close'),
          popupContent = document.querySelector('.popup-content'),
          popupBtn = document.querySelectorAll('.popup-btn');
    
      const getpoup =() => {
          let start = Date.now();
          let timer = setInterval(function() {
          let timePassed = Date.now() - start;
                  popupContent.style.left = timePassed / 5+ 'px';
                  if (timePassed > 1500) {clearInterval(timer);}
                  }, 10);
        };
    
    
     popupBtn.forEach ((elem) => { 
      elem.addEventListener('click', () => {
        let width = document.documentElement.clientWidth;
        popup.style.display = 'block';
        popupContent.style.left = 0;
         if (width > 768 ) { getpoup(); 
              } else {
           popup.style.display = 'none';
         }
        
        
      });
  });
    popupClose.addEventListener('click', () =>  popup.style.display = 'none'); 
   
   };
togglePopUp();

    });
