'use strict';
const collection = document.querySelectorAll('.book'),
    elem = document.querySelectorAll('ul'),
    heading = document.querySelectorAll('h2>a'),
    advertisement = document.querySelector('.adv'),
    list = document.querySelectorAll('ul>li'),   
    image = document.querySelector('body'),
    newElem = document.createElement('li'); 
    
       collection[0].before(collection[1]);
       collection[3].before(collection[4]);
       list [4].before(list[6]); 
       list [4].before(list[8]);
       list[9].after(list[2]);
       list [48].before(list[55]);
       list[50].after(list[48]);
       list[53].after(list[51]);
       collection[5].after(collection[2]);
    
        heading [4].innerHTML = 'Книга 3. this и Прототипы Объектов';   
        advertisement.remove(); 
        image.style.backgroundImage = 'url("/image/you-dont-know-js.jpg")';
        list[25].append(newElem);
        newElem.textContent= 'Глава 8';
console.log(list);
console.log(collection);
console.log(elem);
console.log(heading);
console.log(advertisement);
console.log(image);
console.log(newElem);
console.log(heading);