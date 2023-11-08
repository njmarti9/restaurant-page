/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const pageload = () => {
    const content = document.querySelector('#content');
    const headerDiv = (0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
    content.appendChild(headerDiv);
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageload);

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import mainArt from "../dist/images/mainArt.jpg";

const home = () => {
    const content = document.querySelector('#content');

    document.body.style.backgroundImage = "url(./dist/images/mainArt.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundColor = "black";

    const homeDiv = document.createElement('div');
    homeDiv.id = "home";

    let homeTitle = document.createElement('h2');
    homeTitle.textContent = "Available Now";

    homeDiv.appendChild(homeTitle);

    let restDesc = document.createElement('p');
    restDesc.textContent = 'Prepare for a thrilling adventure through a mysterious land' + 
    ' where puppets have taken control. You will set on an adventure to set things right and '+ 
    ' rid the world of the possesed puppets.';

    homeDiv.appendChild(restDesc);

    content.appendChild(homeDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import logo from "./dist/images/logo.png";

const header = () => {
    const headerDiv = document.createElement('div');
    headerDiv.id = "header";

    let restImage = document.createElement('img');
    restImage.src = "./dist/images/logo.png";
    restImage.id = "logo";

    const homeButton = document.createElement('button');
    homeButton.textContent = "Home";
    homeButton.id = "home_button";

    const storyButton = document.createElement('button');
    storyButton.textContent = "Story";
    storyButton.id = "story_button";

    const galleryButton = document.createElement('button');
    galleryButton.textContent = "Gallery";
    galleryButton.id = "gallery_button";

    headerDiv.appendChild(restImage);
    headerDiv.appendChild(homeButton);
    headerDiv.appendChild(storyButton);
    headerDiv.appendChild(galleryButton);

    return headerDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const clearPage = () =>{
    const content = document.querySelector('#content');
    while(content.children.length > 1){
        content.children[1].remove();
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearPage);

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const story = () =>{
    const content = document.querySelector('#content');

    const storyDiv = document.createElement('div');
    storyDiv.id = "story";

    const story_title = document.createElement('h2');
    story_title.textContent = "Story";
    storyDiv.appendChild(story_title);

    const story_desc = document.createElement('p');
    story_desc.textContent = "You are a puppet created by Geppetto who’s caught in a web of lies with unimaginable monsters and untrustworthy figures standing between you and the events that have befallen the world of Lies of P.";
    storyDiv.appendChild(story_desc);

    const story_desc2 = document.createElement('p');
    story_desc2.textContent = "You are awakened by a mysterious voice that guides you through the plagued city of Krat - a once lively place that has been poisoned by madness and bloodlust.";
    storyDiv.appendChild(story_desc2);

    const story_desc3 = document.createElement('p');
    story_desc3.textContent = "In our soulslike, you must adapt yourself and  your weapons to face untold horrors, untangle the unfathomable secrets of the city's elites and choose whether to confront predicaments with the truth or weave lies to overcome them on the journey to find yourself.";
    storyDiv.appendChild(story_desc3);
    
    content.appendChild(storyDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (story);

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _slides__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);


const gallery = () =>{
    const content = document.querySelector('#content');

    const galleryDiv = document.createElement('div');
    galleryDiv.id = "gallery";

    const img1 = document.createElement('img');
    img1.src = "dist/images/gallery1.png"
    img1.id = "slide";
    img1.classList.add("slides");

    galleryDiv.appendChild(img1);

    const img2 = document.createElement('img');
    img2.src = "/dist/images/gallery2.png"
    img2.id = "slide";
    img2.classList.add("slides");

    galleryDiv.appendChild(img2);

    const img3 = document.createElement('img');
    img3.src = "./dist/images/gallery3.png"
    img3.id = "slide";
    img3.classList.add("slides");

    galleryDiv.appendChild(img3);

    const img4 = document.createElement('img');
    img4.src = "restaurant-page/dist/images/gallery4.png"
    img4.id = "slide";
    img4.classList.add("slides");

    galleryDiv.appendChild(img4);

    const img5 = document.createElement('img');
    img5.src = "/restaurant-page/dist/images/gallery5.png"
    img5.id = "slide";
    img5.classList.add("slides");

    galleryDiv.appendChild(img5);

    const img6 = document.createElement('img');
    img6.src = "./restaurant-page/dist/images/gallery6.png"
    img6.id = "slide";
    img6.classList.add("slides");

    galleryDiv.appendChild(img6);

    const img7 = document.createElement('img');
    img7.src = "./dist/images/gallery7.png"
    img7.id = "slide";
    img7.classList.add("slides");

    galleryDiv.appendChild(img7);

    const img8 = document.createElement('img');
    img8.src = "./dist/images/gallery8.png"
    img8.id = "slide";
    img8.classList.add("slides");

    galleryDiv.appendChild(img8);

    const img9 = document.createElement('img');
    img9.src = "./dist/images/gallery5.png"
    img9.id = "slide";
    img9.classList.add("slides");

    galleryDiv.appendChild(img9);

    const img10 = document.createElement('img');
    img10.src = "./dist/images/gallery5.png"
    img10.id = "slide";
    img10.classList.add("slides");

    galleryDiv.appendChild(img10);

    const img11 = document.createElement('img');
    img11.src = "./dist/images/gallery5.png"
    img11.id = "slide";
    img11.classList.add("slides");

    galleryDiv.appendChild(img11);

    const img12 = document.createElement('img');
    img12.src = "./dist/images/gallery5.png"
    img12.id = "slide";
    img12.classList.add("slides");

    galleryDiv.appendChild(img12);

    const img13 = document.createElement('img');
    img13.src = "./dist/images/gallery5.png"
    img13.id = "slide";
    img13.classList.add("slides");

    galleryDiv.appendChild(img13);

    const img14 = document.createElement('img');
    img14.src = "./dist/images/gallery5.png"
    img14.id = "slide";
    img14.classList.add("slides");

    galleryDiv.appendChild(img14);

    const buttonDiv = document.createElement('div');
    buttonDiv.id = "button_div";

    const leftButton = document.createElement('button');
    leftButton.id = "left_button";
    leftButton.textContent = "<";
    leftButton.addEventListener('click', ()=>{
        (0,_slides__WEBPACK_IMPORTED_MODULE_0__.showSlides)((0,_slides__WEBPACK_IMPORTED_MODULE_0__.getSlideIndex)() - 1);
    });

    buttonDiv.appendChild(leftButton);

    const rightButton = document.createElement('button');
    rightButton.id = "right_button";
    rightButton.textContent  = ">";
    rightButton.addEventListener('click', ()=> {
        (0,_slides__WEBPACK_IMPORTED_MODULE_0__.showSlides)((0,_slides__WEBPACK_IMPORTED_MODULE_0__.getSlideIndex)() + 1)
    });

    buttonDiv.appendChild(rightButton);

    galleryDiv.appendChild(buttonDiv);

    content.appendChild(galleryDiv);

    (0,_slides__WEBPACK_IMPORTED_MODULE_0__.showSlides)(0);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gallery);

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSlideIndex: () => (/* binding */ getSlideIndex),
/* harmony export */   showSlides: () => (/* binding */ showSlides)
/* harmony export */ });
let slideIndex = 1;

const getSlideIndex = () => {
    return slideIndex;
}

const setSlideIndex = (n) => {
    slideIndex = n;
}

const showSlides = (n) => {
    setSlideIndex(n);
    let i;
    let slides = document.getElementsByClassName("slides");
    if (n >= slides.length) {setSlideIndex(0)}
    if (n < 0) {setSlideIndex(slides.length-1)}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[getSlideIndex()].style.display = "block";
}



/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _clearpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _story__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);






(0,_pageload__WEBPACK_IMPORTED_MODULE_0__["default"])();

const homeButton = document.querySelector('#home_button');
const storyButton = document.querySelector('#story_button');
const galleryButton = document.querySelector('#gallery_button');

homeButton.addEventListener('click', ()=>{
    (0,_clearpage__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])();
})

storyButton.addEventListener('click', ()=>{
    ;(0,_clearpage__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_story__WEBPACK_IMPORTED_MODULE_3__["default"])();
})

galleryButton.addEventListener('click', ()=>{
    ;(0,_clearpage__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_gallery__WEBPACK_IMPORTED_MODULE_4__["default"])();
})
})();

/******/ })()
;