'use strict';
import order from './modules/order';
import slider from './modules/slider'; 
import getmainForm from './modules/getmainForm';
import accordionBlok from './modules/accordionBlok';
import scrollUp from './modules/scrollUp';
import getcarousel from './modules/getcarousel';
import getmenu from './modules/getmenu';
import sendForm from './modules/sendForm';



// Заказать звонок, не нашли услуги
order ();
//слайдер
slider();

//валидатор
getmainForm();

//отправка формы
sendForm ('form1', getmainForm);
sendForm ('form2', getmainForm);

//accordion
accordionBlok();

//scroll
scrollUp();

// carusel
getcarousel();

//menu
getmenu ();