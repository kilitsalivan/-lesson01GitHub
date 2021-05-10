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
     };
         interVal = setInterval(updateClock, 1000);
 }
 export default countTimer;