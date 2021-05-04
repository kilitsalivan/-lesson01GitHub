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
  animate({ duration: 3000, timing(timeFraction) {
    return timeFraction;  },
    draw(progress) {
      popupContent.style.left = progress * 30 + '%';
    console.log(popup.style.transform);
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
//слайдер
const slider = () =>{
    const slide = document.querySelectorAll('.portfolio-item'),
    btn = document.querySelectorAll('.portfolio-btn'),
    dot1 = document.querySelectorAll('.dot'),
    portfolioDots = document.querySelector('.portfolio-dots'),
    slider = document.querySelector('.portfolio-content');
let currentSlide = 0,
    interval;
   
    //удаление и добавление dot
    for(let i = 0; i < dot1.length; i++){ 
     dot1[i].remove();
     console.log(dot1[i]);
     }
  const newDot = () =>{  
    for(let i = 0; i < slide.length; i++){
  	  let dot = document.createElement('li');
				dot.classList.add('dot');
				portfolioDots.appendChild(dot);
        console.log(dot[i]); 
      }
		portfolioDots.children[0].classList.add('dot-active');	
  };
  newDot();
  const dot = document.querySelectorAll('.dot');
console.log(dot);
 

  const prevSlide = (elem, index, strClass) =>{
  elem[index].classList.remove(strClass);
};
const nextSlide = (elem, index, strClass) => {
  elem[index].classList.add(strClass);
};

const autoPlaySlide = () =>{
  prevSlide(slide,currentSlide,'portfolio-item-active');
  prevSlide(dot,currentSlide,'dot-active');
      currentSlide++;
      if (currentSlide >= slide.length){
        currentSlide = 0;
      }
      nextSlide(slide,currentSlide,'portfolio-item-active');
      nextSlide(dot,currentSlide,'dot-active');
};
const startSlide = (time = 3000) =>{
     interval = setInterval (autoPlaySlide,time);
};
const stopSlide = () =>{
  clearInterval(interval);

};
slider.addEventListener('click', (event) =>{
      event.preventDefault();
      let target = event.target;
if (!target.matches('.portfolio-btn,.dot')) {
  return;
}     
      prevSlide(slide,currentSlide,'portfolio-item-active');
      prevSlide(dot,currentSlide,'dot-active');
if (target.matches('#arrow-right')){
    currentSlide++;
}else if(target.matches('#arrow-left')){
  currentSlide--;
}else if(target.matches('.dot')){
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
nextSlide(slide,currentSlide,'portfolio-item-active');
nextSlide(dot,currentSlide,'dot-active');
});
slider.addEventListener('mouseover',(event) => {
 if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
    stopSlide();
 }

});
slider.addEventListener('mouseout',(event) => {
  if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
    startSlide();
 }

});

startSlide(1500);
};
slider();    

// наша команда
const getCommand = () =>{
    const command = document.getElementById('command');
    const  getPhoto = (event) => {
		      let target = event.target;
		if (target.classList.contains('command__photo')) {
				const src = target.src;
        target.src = target.dataset.img;
				target.dataset.img = src;
			}
		};
  
  command.addEventListener('mouseover', getPhoto);
  command.addEventListener('mouseout',  getPhoto);
};
getCommand();

//калькулятор
const getCalck = () =>{
    const calck = document.getElementById('calc');
    const calckBanned = (event) =>{
      let target = event.target;
        if (target.type === 'text') {
          target.value = target.value.replace(/\D/g, '');
       }
    };

  calck.addEventListener('input',calckBanned );  
};
getCalck();

//Mainform
const getmainForm = () =>{
    const mainForm = document.getElementById('form1');
        const mainFormInput = (event) => {
          let target = event.target;
          console.log(target);
        if (target.type === 'text') {
            target.value = target.value.replace(/[^а-яА-ЯЁё\-\ ]/, '');
         }else if (target.type === 'email') {
          target.value = target.value.replace(/[^a-zA-Z\@\_\-\.\!\~\*\']/, '');
         }else if (target.type === 'tel') {
          target.value = target.value.replace(/[^\d\(\)\-]/g, '');
         }
    } ;
    mainForm.addEventListener('input', mainFormInput ) ;   
};
getmainForm ();

const getFooterForm = () => {
  const footerForm = document.querySelector('.footer-form-input');
        footerForm.addEventListener('input', (event) => {
    let target = event.target;
    if (target.type === 'text') {
      target.value = target.value.replace(/[^а-яА-ЯЁё\-\ ]/, '');
    } else if (target.type === 'email') {
      target.value = target.value.replace(/[^a-zA-Z\@\_\-\.\!\~\*\']/, '');
    } else if (target.type === 'tel') {
      target.value = target.value.replace(/[^\d\(\)\-]/g, '');
    }
  });
};
getFooterForm();

//фокус
const	userName = document.querySelectorAll('[name=user_name]');
const	userMessage = document.querySelectorAll('[name=user_message]');
const	userEmail = document.querySelectorAll('[name=user_email]');

const getInputs = (input, exp) => {
  if (!!input.value.match(exp)) {
          input.value = input.value.replace(exp, '');
  } else {
    return;
  }
};

const getClear = (item) => {
  item.value = item.value.replace(/\s+/g, ' ');
  item.value = item.value.replace(/\-+/g, '-');
  console.log(item.value);  
  let regExpElem = new RegExp(item.value);
    if (/^[/ /-]/.test(regExpElem)) {
      item.value = item.value.replace(/^[/ /-]/, '');
    }
    if(/[/ /-]$/.test(regExpElem)) {
      item.value = item.value.replace(/[/ /-]$/, '');
    }
};

 const getUpperCase = (elem) => {
      let upperCase = elem.value;
    return upperCase.split(' ').map(item =>item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).join(' ');
};

userName.forEach((elem) => {
    elem.addEventListener('blur', () => {
      getInputs(elem, /[^а-яА-ЯЁё\-\ ]/);
      getClear(elem);
        elem.value = getUpperCase(elem);
    });
});

userMessage.forEach((elem) => {
    elem.addEventListener('blur', () => {
      getInputs(elem, /[^а-яА-ЯЁё\-\ ]/);
      getClear(elem);
    });
});

userEmail.forEach( (elem) => {
    elem.addEventListener('blur', () => {
      getInputs(elem, /[^a-zA-Z\@\_\-\.\!\~\*\']/);
      getClear(elem);
    });
});
});
