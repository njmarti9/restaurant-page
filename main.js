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
const home = () => {
    const content = document.querySelector('#content');

    document.body.style.backgroundImage = "url('../dist/images/lies_of_p_main_art.jpg')";
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
const header = () => {
    const headerDiv = document.createElement('div');
    headerDiv.id = "header";

    let restImage = document.createElement('img');
    restImage.src = "../dist/images/logo.png";
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

    const item1 = document.createElement('div');

    const item1_title = document.createElement('h3');
    item1_title.textContent = "Korean Fried Chicken";
    item1.appendChild(item1_title);

    const item1_desc = document.createElement('p');
    item1_desc.textContent = "This crispiest chicken with a sweet and spicy sauce that will blow your mind";
    item1.appendChild(item1_desc);

    storyDiv.appendChild(item1);

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
const gallery = () =>{
    const content = document.querySelector('#content');

    const galleryDiv = document.createElement('div');
    galleryDiv.id = "gallery";

    const address = document.createElement('h2');
    address.textContent = "1234 Easy St.";
    galleryDiv.appendChild(address);

    const phone_number = document.createElement('h2');
    phone_number.textContent = '(555)-555-5555';
    galleryDiv.appendChild(phone_number);

    content.appendChild(galleryDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gallery);

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