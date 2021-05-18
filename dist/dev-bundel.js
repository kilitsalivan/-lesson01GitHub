/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/order */ \"./src/modules/order.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_getmainForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getmainForm */ \"./src/modules/getmainForm.js\");\n/* harmony import */ var _modules_accordionBlok__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordionBlok */ \"./src/modules/accordionBlok.js\");\n/* harmony import */ var _modules_scrollUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scrollUp */ \"./src/modules/scrollUp.js\");\n/* harmony import */ var _modules_getcarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/getcarousel */ \"./src/modules/getcarousel.js\");\n/* harmony import */ var _modules_getmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/getmenu */ \"./src/modules/getmenu.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n // Заказать звонок, не нашли услуги\n\n(0,_modules_order__WEBPACK_IMPORTED_MODULE_0__.default)(); //слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.default)(); //валидатор\n\n(0,_modules_getmainForm__WEBPACK_IMPORTED_MODULE_2__.default)(); //отправка формы\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__.default)('form1', _modules_getmainForm__WEBPACK_IMPORTED_MODULE_2__.default);\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__.default)('form2', _modules_getmainForm__WEBPACK_IMPORTED_MODULE_2__.default); //accordion\n\n(0,_modules_accordionBlok__WEBPACK_IMPORTED_MODULE_3__.default)(); //scroll\n\n(0,_modules_scrollUp__WEBPACK_IMPORTED_MODULE_4__.default)(); // carusel\n\n(0,_modules_getcarousel__WEBPACK_IMPORTED_MODULE_5__.default)(); //menu\n\n(0,_modules_getmenu__WEBPACK_IMPORTED_MODULE_6__.default)();\n\n//# sourceURL=webpack://diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordionBlok.js":
/*!**************************************!*\
  !*** ./src/modules/accordionBlok.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar accordionBlok = function accordionBlok() {\n  var accordeon = document.querySelector('.accordeon'),\n      accordeonTitle = accordeon.querySelectorAll('.title'),\n      elementContent = accordeon.querySelectorAll('.element-content');\n\n  var getAccordeon = function getAccordeon(index) {\n    for (var i = 0; i < elementContent.length; i++) {\n      if (index === i) {\n        accordeonTitle[i].parentElement.classList.add('active');\n        elementContent[i].style.display = 'block';\n      } else {\n        accordeonTitle[i].parentElement.classList.remove('active');\n        elementContent[i].style.display = 'none';\n      }\n    }\n  };\n\n  accordeon.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('title')) {\n      accordeonTitle.forEach(function (item, i) {\n        if (item === target) {\n          getAccordeon(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordionBlok);\n\n//# sourceURL=webpack://diplom/./src/modules/accordionBlok.js?");

/***/ }),

/***/ "./src/modules/getcarousel.js":
/*!************************************!*\
  !*** ./src/modules/getcarousel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar getcarousel = function getcarousel() {\n  var SliderCarousel = /*#__PURE__*/function () {\n    function SliderCarousel(_ref) {\n      var main = _ref.main,\n          wrap = _ref.wrap,\n          next = _ref.next,\n          prev = _ref.prev,\n          _ref$infinity = _ref.infinity,\n          infinity = _ref$infinity === void 0 ? false : _ref$infinity,\n          _ref$slidesToShow = _ref.slidesToShow,\n          slidesToShow = _ref$slidesToShow === void 0 ? 3 : _ref$slidesToShow,\n          _ref$position = _ref.position,\n          position = _ref$position === void 0 ? 0 : _ref$position;\n\n      _classCallCheck(this, SliderCarousel);\n\n      this.main = document.querySelector(main), this.wrap = document.querySelector(wrap), this.next = document.querySelector(next), this.prev = document.querySelector(prev), this.slidesToShow = slidesToShow, this.slides = document.querySelector(wrap).children;\n      this.options = {\n        position: position,\n        infinity: infinity,\n        widthSlide: Math.floor(100 / this.slidesToShow)\n      };\n    }\n\n    _createClass(SliderCarousel, [{\n      key: \"init\",\n      value: function init() {\n        this.addGloClass();\n        this.addStyle();\n        this.controlSlider();\n      }\n    }, {\n      key: \"addGloClass\",\n      value: function addGloClass() {\n        this.main.classList.add('glo-slider');\n        this.wrap.classList.add('glo-slider__wrap');\n\n        var _iterator = _createForOfIteratorHelper(this.slides),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var item = _step.value;\n            item.classList.add('glo-slider__item');\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n      }\n    }, {\n      key: \"addStyle\",\n      value: function addStyle() {\n        var style = document.createElement('style');\n        style.id = 'sliderCarusel-style';\n        style.textContent = \"\\n      .glo-slider{\\n        overflow: hidden !important;\\n      }\\n      .glo-slider__wrap{\\n        display: flex;\\n        transition: transform 0.5s !important;\\n        will-change: tranform !important;\\n        \\n      }\\n      .glo-slider__item {\\n        flex: 0 0 \".concat(this.options.widthSlide, \"% !important;\\n        margin: auto 0 !important;\\n      }\");\n        document.head.appendChild(style);\n      }\n    }, {\n      key: \"controlSlider\",\n      value: function controlSlider() {\n        this.prev.addEventListener('click', this.prevSlider.bind(this));\n        this.next.addEventListener('click', this.nextSlider.bind(this));\n      }\n    }, {\n      key: \"prevSlider\",\n      value: function prevSlider() {\n        if (this.options.infinity || this.options.position > 0) {\n          --this.options.position;\n\n          if (this.options.position < 0) {\n            this.options.position = this.slides.length - this.slidesToShow;\n          }\n\n          this.wrap.style.transform = \"translateX(-\".concat(this.options.position * this.options.widthSlide, \"%)\");\n        }\n      }\n    }, {\n      key: \"nextSlider\",\n      value: function nextSlider() {\n        if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {\n          ++this.options.position;\n\n          if (this.options.position > this.slides.length - this.slidesToShow) {\n            this.options.position = 0;\n          }\n\n          this.wrap.style.transform = \"translateX(-\".concat(this.options.position * this.options.widthSlide, \"%)\");\n        }\n      }\n    }]);\n\n    return SliderCarousel;\n  }();\n\n  var option = {\n    main: '.services-elements',\n    wrap: '.services-carousel',\n    next: '.arrow-right',\n    prev: '.arrow-left',\n    infinity: true,\n    slidesToShow: 3\n  };\n  var carousel = new SliderCarousel(option);\n  carousel.init();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getcarousel);\n\n//# sourceURL=webpack://diplom/./src/modules/getcarousel.js?");

/***/ }),

/***/ "./src/modules/getmainForm.js":
/*!************************************!*\
  !*** ./src/modules/getmainForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar getmainForm = function getmainForm() {\n  var userName = document.querySelectorAll('[name=\"fio\"]'),\n      userPhone = document.querySelectorAll('[name=\"tel\"]');\n\n  var mainFormInput = function mainFormInput(elem) {\n    elem.addEventListener('input', function (event) {\n      var target = event.target;\n\n      if (target.name === 'tel') {\n        target.value = target.value.replace(/[^0-9+]/ig, '');\n      } else if (target.type === 'text' && target.name === 'fio') {\n        target.value = target.value.replace(/[^а-яА-ЯЁё\\.\\,\\;\\:\\!\\?\\-\\(\\)\\ ]/, '');\n      }\n    });\n  };\n\n  userName.forEach(function (elem) {\n    mainFormInput(elem);\n  });\n  userPhone.forEach(function (elem) {\n    mainFormInput(elem);\n  }); //фокус\n\n  var getInputs = function getInputs(input, exp) {\n    if (!!input.value.match(exp)) {\n      input.value = input.value.replace(exp, '');\n    } else {\n      return;\n    }\n  };\n\n  var getClear = function getClear(item) {\n    item.value = item.value.replace(/\\s+/g, ' ');\n    item.value = item.value.replace(/\\-+/g, '-');\n    var regExpElem = new RegExp(item.value);\n\n    if (/^[/ /-]/.test(regExpElem)) {\n      item.value = item.value.replace(/^[/ /-]/, '');\n    }\n\n    if (/[/ /-]$/.test(regExpElem)) {\n      item.value = item.value.replace(/[/ /-]$/, '');\n    }\n  };\n\n  var getUpperCase = function getUpperCase(elem) {\n    var upperCase = elem.value;\n    return upperCase.split(' ').map(function (item) {\n      return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();\n    }).join(' ');\n  };\n\n  userName.forEach(function (elem) {\n    elem.addEventListener('blur', function () {\n      getInputs(elem, /[^а-яА-ЯЁё\\-\\ ]/);\n      getClear(elem);\n      elem.value = getUpperCase(elem);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getmainForm);\n\n//# sourceURL=webpack://diplom/./src/modules/getmainForm.js?");

/***/ }),

/***/ "./src/modules/getmenu.js":
/*!********************************!*\
  !*** ./src/modules/getmenu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar getmenu = function getmenu() {\n  var anchors = document.querySelectorAll('a[href*=\"#\"]');\n\n  var _iterator = _createForOfIteratorHelper(anchors),\n      _step;\n\n  try {\n    var _loop = function _loop() {\n      var anchor = _step.value;\n      anchor.addEventListener('click', function (event) {\n        event.preventDefault();\n        var id = anchor.getAttribute('href');\n        document.querySelector('' + id).scrollIntoView({\n          behavior: 'smooth',\n          block: 'start'\n        });\n      });\n    };\n\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      _loop();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getmenu);\n\n//# sourceURL=webpack://diplom/./src/modules/getmenu.js?");

/***/ }),

/***/ "./src/modules/order.js":
/*!******************************!*\
  !*** ./src/modules/order.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar order = function order() {\n  var modalСallback = document.querySelector('.modal-callback'),\n      modalOverlay = document.querySelector('.modal-overlay '),\n      body = document.querySelector('body');\n\n  var displayBlock = function displayBlock() {\n    modalСallback.style.display = 'block';\n    modalOverlay.style.display = 'block';\n  };\n\n  var displayClose = function displayClose() {\n    modalСallback.style.display = 'none';\n    modalOverlay.style.display = 'none';\n  };\n\n  body.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('#call') || target.matches('.button-services') || target.closest('.fancyboxModal')) {\n      displayBlock();\n    } else if (target.closest('.modal-close') || target.closest('.modal-overlay ')) {\n      displayClose();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (order);\n\n//# sourceURL=webpack://diplom/./src/modules/order.js?");

/***/ }),

/***/ "./src/modules/scrollUp.js":
/*!*********************************!*\
  !*** ./src/modules/scrollUp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar scrollUp = function scrollUp() {\n  var up = document.querySelector('.up'),\n      sec = document.querySelector('.services-section');\n  up.style.display = ' none';\n  window.addEventListener('scroll', function () {\n    if (document.documentElement.scrollTop >= sec.offsetTop) {\n      up.classList.add('active');\n      up.style.display = 'block';\n    } else if (document.documentElement.scrollTop < sec.offsetTop) {\n      up.classList.remove('active');\n      up.style.display = ' none';\n    }\n  });\n  up.addEventListener('click', function () {\n    window.scrollTo({\n      top: 0,\n      behavior: 'smooth'\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollUp);\n\n//# sourceURL=webpack://diplom/./src/modules/scrollUp.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm(id) {\n  var errorMessage = 'Что то пошло не так...',\n      loadMessage = 'Идет отправка...',\n      succesMessage = 'Cпасибо! Мы скоро с вами свяжемся!';\n  var form = document.getElementById(id);\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size: 2rem; color: black;';\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    form.appendChild(statusMessage);\n\n    var clearInput = function clearInput(elem) {\n      var form = document.getElementById(elem);\n\n      _toConsumableArray(form.elements).filter(function (item) {\n        return item.tagName.toLowerCase() !== 'button' && item.type !== 'submit';\n      }).forEach(function (item) {\n        return item.value = '';\n      });\n    };\n\n    statusMessage.textContent = loadMessage;\n    var formData = new FormData(form);\n    postData(Object.fromEntries(formData)).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      statusMessage.textContent = succesMessage;\n      clearInput(id);\n      setTimeout(function () {\n        statusMessage.textContent = '';\n        var modalСallback = document.querySelector('.modal-callback'),\n            modalOverlay = document.querySelector('.modal-overlay ');\n        modalСallback.style.display = 'none';\n        modalOverlay.style.display = 'none';\n      }, 3000);\n    })[\"catch\"](function (error) {\n      statusMessage.textContent = errorMessage;\n      console.error(error);\n      setTimeout(function () {\n        statusMessage.textContent = '';\n        var modalСallback = document.querySelector('.modal-callback'),\n            modalOverlay = document.querySelector('.modal-overlay ');\n        modalСallback.style.display = 'none';\n        modalOverlay.style.display = 'none';\n      }, 3000);\n    });\n  });\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://diplom/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slide = document.querySelectorAll('.item'),\n      slider = document.querySelector('.top-slider'),\n      dot1 = document.querySelectorAll('.dot'),\n      portfolioDots = document.querySelector('.portfolio-dots');\n  var currentSlide = 0,\n      interval;\n\n  for (var i = 0; i < dot1.length; i++) {\n    dot1[i].remove();\n  }\n\n  var newDot = function newDot() {\n    for (var _i = 0; _i < slide.length; _i++) {\n      var _dot = document.createElement('li');\n\n      _dot.classList.add('dot');\n\n      portfolioDots.appendChild(_dot);\n    }\n\n    portfolioDots.children[0].classList.add('dot-active');\n  };\n\n  newDot();\n  var dot = document.querySelectorAll('.dot');\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    if (strClass === 'dot-active') {\n      elem[index].classList.remove(strClass);\n    } else {\n      elem[index].style.display = strClass;\n    }\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    if (strClass === 'dot-active') {\n      elem[index].classList.add(strClass);\n    } else {\n      elem[index].style.display = strClass;\n    }\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'none');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'block');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.portfolio-dots .dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'none');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('.dot')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'block');\n    nextSlide(dot, currentSlide, 'dot-active');\n  });\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1500;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://diplom/./src/modules/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;