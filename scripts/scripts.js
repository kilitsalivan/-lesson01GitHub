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
    const body = document.querySelector('body'),
          menu = document.querySelector('menu');
            
          const handlerMenu = () => {
              menu.classList.toggle('active-menu');
    };
           
    body.addEventListener('click', (event) =>{
            let target = event.target;
       if (target.closest('.menu')|| target.closest('.close-btn')){
              handlerMenu();
           } else 
           if (target.closest('ul>li'))
            {
              menu.classList.remove('active-menu');
            } else { target = target.closest('.active-menu');
          }
          if (!target){
            menu.classList.remove('active-menu');
          }    
    });
    };      
         
      toggleMenu();
//popup
const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
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
          
      if (width > 768 ) { getpoup(); 
      } else {
          popup.style.display = 'block';
          popupContent.style.left = 60 + 'px';
        console.log(popupContent.getBoundingClientRect());
            }
    });
});
window.addEventListener("resize", function() {
  if (this.innerWidth < 768 ) { 
      popup.style.display = 'none';
  } 
  }, false);

popup.addEventListener('click', (event) => {
          let target = event.target;
        if (target.closest('.popup-close')){
            popup.style.display = 'none';
         } else {
          target = target.closest('.popup-content');
        if (!target){
            popup.style.display = 'none';
          }    
        }
  });
   };
togglePopUp();
//табы 
const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
          tab = tabHeader.querySelectorAll('.service-header-tab'),
          tabContent = document.querySelectorAll('.service-tab');
    const toggleTabContent = (index) => {
            for (let i = 0; i <tabContent.length; i++){
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
              } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
              }
            }
    };      
    tabHeader.addEventListener('click', (event) => {
            let target = event.target;
                target = target.closest('.service-header-tab');
          if (target){
                tab.forEach((item, i) =>{
          if(item === target) {
              toggleTabContent(i);
              }
             });
            }
          });
        };       
tabs();
    });
