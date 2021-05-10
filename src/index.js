'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu'; 
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import getCommand from './modules/getCommand';
import calc from './modules/calc';
import getmainForm from './modules/getmainForm';
import sendForm from './modules/sendForm';

// таймер
countTimer('12 May 2021'); 
// меню
toggleMenu();
//popup
togglePopUp();
//табы 
tabs();
//слайдер
slider();    
// наша команда
getCommand();
//калькулятор
calc();
//Mainform
getmainForm ();
//send-ajax-form
sendForm('form1',getmainForm);
sendForm('form2',getmainForm);
sendForm('form3',getmainForm);