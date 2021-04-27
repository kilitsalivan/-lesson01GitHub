window.addEventListener('DOMContentLoaded', () => {
 'use strict';

	function counterTime(toNewYar) {
		let clear = 0,
            salute = document.createElement('div'),
	        dyaWeek = document.createElement('div'),
		    getTime = document.createElement('div'),
		    yearDays = document.createElement('div'),
		    daysArray = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];

		function getTimeRemaining() {
			let date = new Date(),
			 year = date.getFullYear(),
			 day = date.getDay(),
			 hour = date.getHours(),
			 minutes = date.getMinutes(),
			 seconds = date.getSeconds(),
			 stopDate = new Date(toNewYar).getTime(),
			 dateNow = new Date().getTime(),
			 timeRemaining = Math.floor((stopDate - dateNow) / 1000 /3600 / 24);
			return {year, day, hour, minutes, seconds,timeRemaining	};
		}

    	function updateClock() {
			 let timer = getTimeRemaining(),
			    newHour = timer.hour < 10 ? `0${timer.hour}` : timer.hour,
			    newMinutes = timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes,
			    newSeconds = timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds,
			    newDay = timer.hour <= 12 ? `AM` : `PM`;

	  const newYearDay = (item) => {
	      if ((item % 100 > 4) && (item % 100 <21)) {
               return  item  + ' дней';
               }else 
                    if(item % 100 ===1 ) {
               return item + ' день';}
                else 
                    if  (item % 10 >1 && item % 10 <5) {
               return  item + ' дня';
             }  else {
               return item + ' дней';
            }        
            };
		const newYearDate = newYearDay(timer.timeRemaining);
               if (timer.hour >= 0 && timer.hour < 5) {
                salute.textContent = 'Доброй ночи';
                } else if ( timer.hour >= 6 &&  timer.hour < 12) {
                    salute.textContent = 'Доброе утро';
                } else if (timer.hour >= 12 &&  timer.hour < 18){
                    salute.textContent = 'Добрый день';
                } else { 
                    salute.textContent = 'Добрый вечер';
                }
            
            dyaWeek.textContent = `Сегодная: ${daysArray[timer.day]}`;
			getTime.textContent = `Текущее время: ${newHour} : ${newMinutes} : ${newSeconds} ${newDay}`;
			yearDays.textContent = `До нового года осталось: ${newYearDate} `;
       		document.body.append(salute, dyaWeek, getTime, yearDays);

           if (timer.timeRemaining < 0) {
				clearInterval(clear);
            	}
        }
	clear = setInterval(updateClock, 1000);
    }
	counterTime('01 January 2022');

});