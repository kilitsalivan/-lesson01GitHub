(()=>{"use strict";function t(t,n){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){o&&(t=o);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,s=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return l=t.done,t},e:function(t){s=!0,a=t},f:function(){try{l||null==o.return||o.return()}finally{if(s)throw a}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}const n=function(){var e=document.querySelectorAll('[name="fio"]'),n=document.querySelectorAll('[name="tel"]'),o=function(e){e.addEventListener("input",(function(e){var n=e.target;"tel"===n.name?function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__";function o(t){var e=t.keyCode,o=n,r=o.replace(/\D/g,""),i=this.value.replace(/\D/g,""),a=0,l=o.replace(/[_\d]/g,(function(t){return a<i.length?i.charAt(a++)||r.charAt(a):t}));-1!=(a=l.indexOf("_"))&&(l=l.slice(0,a));var s=o.substr(0,this.value.length).replace(/_+/g,(function(t){return"\\d{1,"+t.length+"}"})).replace(/[+()]/g,"\\$&");(!(s=new RegExp("^"+s+"$")).test(this.value)||this.value.length<5||e>47&&e<58)&&(this.value=l),"blur"==t.type&&this.value.length<5&&(this.value="")}var r,i=t(document.querySelectorAll(e));try{for(i.s();!(r=i.n()).done;){var a=r.value;a.addEventListener("input",o),a.addEventListener("focus",o),a.addEventListener("blur",o)}}catch(t){i.e(t)}finally{i.f()}}("[name=tel]"):"text"===n.type&&"fio"===n.name&&(n.value=n.value.replace(/[^а-яА-ЯЁё\.\,\;\:\!\?\-\(\)\ ]/g,""))}))};e.forEach((function(t){t.setAttribute("required",!0),o(t)})),n.forEach((function(t){t.setAttribute("required",!0),o(t)})),e.forEach((function(t){t.addEventListener("blur",(function(){var e,n;n=/[а-яё\s]{3,}/gi,(e=t).value.match(n)||(e.value=" "),function(t){t.value=t.value.replace(/\s+/g," "),t.value=t.value.replace(/\-+/g,"-");var e=new RegExp(t.value);/^[/ /-]/.test(e)&&(t.value=t.value.replace(/^[/ /-]/,"")),/[/ /-]$/.test(e)&&(t.value=t.value.replace(/[/ /-]$/,""))}(t),t.value=function(t){return t.value.split(" ").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()})).join(" ")}(t)}))}))};function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}const l=function(t){var e=document.getElementById(t),n=document.createElement("div");n.style.cssText="font-size: 2rem; color: black;",e.addEventListener("submit",(function(r){r.preventDefault(),e.appendChild(n),n.textContent="Идет отправка...";var i=new FormData(e);o(Object.fromEntries(i)).then((function(e){if(200!==e.status)throw new Error("status network not 200");var o,r;n.textContent="Cпасибо! Мы скоро с вами свяжемся!",o=t,(r=document.getElementById(o).elements,function(t){if(Array.isArray(t))return a(t)}(r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter((function(t){return"button"!==t.tagName.toLowerCase()&&"submit"!==t.type})).forEach((function(t){return t.value=""})),setTimeout((function(){n.textContent="";var t=document.querySelector(".modal-callback"),e=document.querySelector(".modal-overlay ");t.style.display="none",e.style.display="none"}),3e3)})).catch((function(t){n.textContent="Что то пошло не так...",console.error(t),setTimeout((function(){n.textContent="";var t=document.querySelector(".modal-callback"),e=document.querySelector(".modal-overlay ");t.style.display="none",e.style.display="none"}),3e3)}))}));var o=function(t){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}};var s,c,u,d,f,v,y;v=document.querySelector(".modal-callback"),y=document.querySelector(".modal-overlay "),document.querySelector("body").addEventListener("click",(function(t){var e=t.target;e.closest("#call")||e.matches(".button-services")||e.closest(".fancyboxModal")?(v.style.display="block",y.style.display="block"):(e.closest(".modal-close")||e.closest(".modal-overlay "))&&(v.style.display="none",y.style.display="none")})),function(){for(var t,e=document.querySelectorAll(".item"),n=document.querySelector(".top-slider"),o=document.querySelectorAll(".dot"),r=document.querySelector(".portfolio-dots"),i=0,a=0;a<o.length;a++)o[a].remove();!function(){for(var t=0;t<e.length;t++){var n=document.createElement("li");n.classList.add("dot"),r.appendChild(n)}r.children[0].classList.add("dot-active")}();var l=document.querySelectorAll(".dot"),s=function(t,e,n){"dot-active"===n?t[e].classList.remove(n):t[e].style.display=n},c=function(t,e,n){"dot-active"===n?t[e].classList.add(n):t[e].style.display=n},u=function(){s(e,i,"none"),s(l,i,"dot-active"),++i>=e.length&&(i=0),c(e,i,"block"),c(l,i,"dot-active")};n.addEventListener("click",(function(t){t.preventDefault();var n=t.target;n.matches(".portfolio-dots .dot")&&(s(e,i,"none"),s(l,i,"dot-active"),n.matches(".dot")&&l.forEach((function(t,e){t===n&&(i=e)})),i>=e.length&&(i=0),i<0&&(i=e.length-1),c(e,i,"block"),c(l,i,"dot-active"))}));var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;t=setInterval(u,e)};n.addEventListener("mouseover",(function(e){e.target.matches(".dot")&&clearInterval(t)})),n.addEventListener("mouseout",(function(t){t.target.matches(".dot")&&d()})),d()}(),n(),l("form1"),l("form2"),u=document.querySelector(".accordeon"),d=u.querySelectorAll(".title"),f=u.querySelectorAll(".element-content"),u.addEventListener("click",(function(t){var e=t.target;e.classList.contains("title")&&d.forEach((function(t,n){t===e&&function(t){for(var e=0;e<f.length;e++)t===e?(d[e].parentElement.classList.add("active"),f[e].style.display="block"):(d[e].parentElement.classList.remove("active"),f[e].style.display="none")}(n)}))})),s=document.querySelector(".up"),c=document.querySelector(".services-section"),s.style.display=" none",window.addEventListener("scroll",(function(){document.documentElement.scrollTop>=c.offsetTop?(s.classList.add("active"),s.style.display="block"):document.documentElement.scrollTop<c.offsetTop&&(s.classList.remove("active"),s.style.display=" none")})),s.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),new(function(){function t(e){var n=e.main,o=e.wrap,r=e.next,i=e.prev,a=e.infinity,l=void 0!==a&&a,s=e.slidesToShow,c=void 0===s?3:s,u=e.position,d=void 0===u?0:u;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.main=document.querySelector(n),this.wrap=document.querySelector(o),this.next=document.querySelector(r),this.prev=document.querySelector(i),this.slidesToShow=c,this.slides=document.querySelector(o).children,this.options={position:d,infinity:l,widthSlide:Math.floor(100/this.slidesToShow)}}var e,n;return e=t,(n=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.controlSlider()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var t,e=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){s=!0,a=t},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw a}}}}(this.slides);try{for(e.s();!(t=e.n()).done;)t.value.classList.add("glo-slider__item")}catch(t){e.e(t)}finally{e.f()}}},{key:"addStyle",value:function(){var t=document.createElement("style");t.id="sliderCarusel-style",t.textContent="\n      .glo-slider{\n        overflow: hidden !important;\n      }\n      .glo-slider__wrap{\n        display: flex;\n        transition: transform 0.5s !important;\n        will-change: tranform !important;\n        \n      }\n      .glo-slider__item {\n        flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n        margin: auto 0 !important;\n      }"),document.head.appendChild(t)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}}])&&r(e.prototype,n),t}())({main:".services-elements",wrap:".services-carousel",next:".arrow-right",prev:".arrow-left",infinity:!0,slidesToShow:3}).init(),function(){var t,e=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){s=!0,a=t},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw a}}}}(document.querySelectorAll('a[href*="#"]'));try{var n=function(){var e=t.value;e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href");document.querySelector(""+n).scrollIntoView({behavior:"smooth",block:"start"})}))};for(e.s();!(t=e.n()).done;)n()}catch(t){e.e(t)}finally{e.f()}}()})();