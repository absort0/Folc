/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// Main Menu\nvar $mainContent = $('.main-content');\nvar $mainNavBar = $('#main-navbar');\nvar $body = $('body');\nvar $mainHeader = $('.main-header');\n\nfunction calculateHeaderCSSVars() {\n  var mainMenuHeight = $mainHeader.outerHeight();\n  var bodyHeight = $body.outerHeight() - mainMenuHeight;\n  document.documentElement.style.setProperty('--menu-height', \"\".concat(mainMenuHeight, \"px\"));\n  document.documentElement.style.setProperty('--menu-overlay-height', \"\".concat(bodyHeight, \"px\"));\n}\n\nfunction handleMenuOpen() {\n  calculateHeaderCSSVars();\n  $mainContent.addClass('menu-opened');\n}\n\nfunction handleMobileMenuOpen() {\n  calculateHeaderCSSVars();\n  $body.addClass('overflow-hidden');\n  $mainContent.addClass('menu-opened');\n}\n\nfunction handleMenuClose() {\n  if ($body.hasClass('overflow-hidden')) {\n    $body.removeClass('overflow-hidden');\n  }\n\n  $mainContent.removeClass('menu-opened');\n}\n\n$mainNavBar.on('show.bs.collapse', handleMobileMenuOpen);\n$mainNavBar.on('hide.bs.collapse', handleMenuClose);\n$mainNavBar.on('show.bs.dropdown', '.nav-item.dropdown', handleMenuOpen);\n$mainNavBar.on('hide.bs.dropdown', '.nav-item.dropdown', handleMenuClose); // Stop auto closing of dropdowns with CSS class .avoid-auto-close\n\n$(document).on('click', '.avoid-auto-close.dropdown-menu', function (e) {\n  e.stopPropagation();\n});\n\nif ($('.countries-tabs').length > 0) {\n  Promise.resolve(/*! import() | countries-tabs */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./modules/countries-tabs */ \"./src/js/modules/countries-tabs.js\", 23));\n}\n\nif ($('.categories-tab').length > 0) {\n  Promise.resolve(/*! import() | categories-tab */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./modules/categories-tab */ \"./src/js/modules/categories-tab.js\", 23));\n}\n\nif ($('.countries-multi-level-tabs').length > 0) {\n  Promise.resolve(/*! import() | countries-multi-level-tabs */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./modules/countries-multi-level-tabs */ \"./src/js/modules/countries-multi-level-tabs.js\", 23));\n}\n\nif ($('.article-tab').length > 0) {\n  Promise.resolve(/*! import() | article-tab */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./modules/article-tab */ \"./src/js/modules/article-tab.js\", 23));\n}\n\nif ($('.country-header').length > 0) {\n  Promise.resolve(/*! import() | country-header */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./modules/country-header */ \"./src/js/modules/country-header.js\", 23));\n}\n\n//# sourceURL=webpack://folc-styleguide/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/article-tab.js":
/*!***************************************!*\
  !*** ./src/js/modules/article-tab.js ***!
  \***************************************/
/***/ (() => {

eval("$(document).ready(function () {\n  var $articleTab = $('.article-tab');\n  $articleTab.find('.nav-item a').click(function () {\n    var activeTab = $(this).text();\n    $articleTab.find('span').text(activeTab);\n  });\n});\n\n//# sourceURL=webpack://folc-styleguide/./src/js/modules/article-tab.js?");

/***/ }),

/***/ "./src/js/modules/categories-tab.js":
/*!******************************************!*\
  !*** ./src/js/modules/categories-tab.js ***!
  \******************************************/
/***/ (() => {

eval("$(document).ready(function () {\n  var $categoriesTabs = $('.categories-tab');\n\n  if ($categoriesTabs.length) {\n    var $categoriesTabContent = $categoriesTabs.find('.categories-tab-content');\n    var $select = $categoriesTabs.find('.select-categories');\n    var $categoriesSelectContent = $categoriesTabs.find('.categories-select-content');\n    $('.categories-tab .nav-link').click(function () {\n      var className = $(this).attr('class').split(' ')[1];\n      $categoriesTabContent.removeClass(function (index, bgClassName) {\n        return (bgClassName.match(/(^|\\s)bg-\\S+/g) || []).join(' ');\n      });\n      $categoriesTabContent.addClass(\"bg-\".concat(className.split('--')[1]));\n    });\n    $('.categories-tab .nav-item').each(function () {\n      var $navItem = $(this);\n      var $option = $('<option>');\n      $option.val($navItem.find('a').attr('href'));\n      $option.text($navItem.find('a').text());\n      $select.append($option);\n    });\n    $select.on('change', function () {\n      var selectedTab = $(this).val();\n      var selectedContent = $(selectedTab).find('.categories-cols').html();\n      $categoriesSelectContent.html(selectedContent);\n      $categoriesSelectContent.find('a').addClass('with-prefix pb-1');\n    });\n  }\n});\n\n//# sourceURL=webpack://folc-styleguide/./src/js/modules/categories-tab.js?");

/***/ }),

/***/ "./src/js/modules/countries-multi-level-tabs.js":
/*!******************************************************!*\
  !*** ./src/js/modules/countries-multi-level-tabs.js ***!
  \******************************************************/
/***/ (() => {

eval("$(document).ready(function () {\n  var countriesMultiLevelTabs = $('.countries-multi-level-tabs');\n\n  if (countriesMultiLevelTabs.length > 0) {\n    var mainTabs = countriesMultiLevelTabs.find('.main-tabs');\n    var tabElements = mainTabs.find('li');\n    var continentSelect = countriesMultiLevelTabs.find('.select-continent');\n    var tabs = Array.from(tabElements).map(function (tab) {\n      var a = tab.querySelector('a');\n      var continent = a.innerText;\n      var tabId = a.getAttribute('href').substring(1);\n      var countries = [];\n      var tabContent = document.querySelector(\"#\".concat(tabId));\n      var tabCountries = tabContent.querySelectorAll('li');\n      Array.from(tabCountries).forEach(function (li) {\n        var link = li.querySelector('a');\n        var href = link.getAttribute('href');\n        var name = link.innerText.split('(')[0].trim();\n        var count = parseInt(link.innerText.split('(')[1].split(')')[0], 10);\n        countries.push({\n          name: name,\n          count: count,\n          href: href\n        });\n      });\n      return {\n        continent: continent,\n        countries: countries\n      };\n    });\n    tabs.forEach(function (tab) {\n      var option = document.createElement('option');\n      option.value = tab.continent;\n      option.text = tab.continent;\n      continentSelect.append(option);\n    });\n    continentSelect.on('change', function () {\n      var continent = this.value;\n      var countriesSelect = countriesMultiLevelTabs.find('.select-country');\n      countriesSelect.prop('disabled', false);\n      countriesSelect.html('');\n      var selectedTab = tabs.find(function (tab) {\n        return tab.continent === continent;\n      });\n      selectedTab.countries.forEach(function (country) {\n        var option = document.createElement('option');\n        option.value = country.name;\n        option.text = \"\".concat(country.name, \" (\").concat(country.count, \")\");\n        countriesSelect.append(option);\n      });\n    });\n    countriesMultiLevelTabs.find('.countries-form').on('submit', function (e) {\n      e.preventDefault();\n      var selectedCountry = countriesMultiLevelTabs.find('.select-country').val();\n      var selectedContent = countriesMultiLevelTabs.find(\".dropdown .nav-link:contains('\".concat(selectedCountry, \"')\")).closest('.dropdown').find('.dropdown-menu').html();\n      countriesMultiLevelTabs.find('.categories-select-content').html(selectedContent);\n    });\n  }\n});\n\n//# sourceURL=webpack://folc-styleguide/./src/js/modules/countries-multi-level-tabs.js?");

/***/ }),

/***/ "./src/js/modules/countries-tabs.js":
/*!******************************************!*\
  !*** ./src/js/modules/countries-tabs.js ***!
  \******************************************/
/***/ (() => {

eval("$(document).ready(function () {\n  var $countriesTabs = $('.countries-tabs');\n\n  function extractCountriesInfo($tabCountries) {\n    return $tabCountries.map(function () {\n      var $link = $(this).find('a');\n      var href = $link.attr('href');\n      var name = $link.text().split('(')[0].trim();\n      var count = parseInt($link.text().split('(')[1].split(')')[0], 10);\n      return {\n        name: name,\n        count: count,\n        href: href\n      };\n    }).get();\n  }\n\n  function extractTabsInfo($currentCountriesTab) {\n    var $nav = $currentCountriesTab.find('.nav-pills');\n    var $tabElements = $nav.find('li');\n    return $tabElements.map(function () {\n      var $a = $(this).find('a');\n      var continent = $a.text();\n      var tabId = $a.attr('href').substring(1);\n      var $tabContent = $(\"#\".concat(tabId));\n      var $tabCountries = $tabContent.find('li');\n      var countries = extractCountriesInfo($tabCountries);\n      return {\n        continent: continent,\n        countries: countries\n      };\n    });\n  }\n\n  function populateContinentSelect($continentSelect, tabs) {\n    tabs.each(function () {\n      var option = $('<option>').val(this.continent).text(this.continent);\n      $continentSelect.append(option);\n    });\n  }\n\n  function handleContinentSelectChange($continentSelect, tabs, $currentCountriesTab) {\n    $continentSelect.on('change', function () {\n      var continent = $continentSelect.val();\n      var $countriesSelect = $currentCountriesTab.find('.select-country');\n      $countriesSelect.prop('disabled', false);\n      $countriesSelect.html('');\n      var tab = tabs.filter(function () {\n        return this.continent === continent;\n      })[0];\n      tab.countries.forEach(function (country) {\n        var option = $('<option>').val(country.href).text(\"\".concat(country.name, \" (\").concat(country.count, \")\"));\n        $countriesSelect.append(option);\n      });\n    });\n  }\n\n  function handleFormSubmit($currentCountriesTab) {\n    $currentCountriesTab.find('.countries-form').submit(function (e) {\n      e.preventDefault();\n      var selectedCountry = $currentCountriesTab.find('.select-country').val();\n      window.location.href = selectedCountry;\n    });\n  }\n\n  $countriesTabs.each(function () {\n    var $currentCountriesTab = $(this);\n    var tabs = extractTabsInfo($currentCountriesTab);\n    var $continentSelect = $currentCountriesTab.find('.select-continent');\n    populateContinentSelect($continentSelect, tabs);\n    handleContinentSelectChange($continentSelect, tabs, $currentCountriesTab);\n    handleFormSubmit($currentCountriesTab);\n  });\n});\n\n//# sourceURL=webpack://folc-styleguide/./src/js/modules/countries-tabs.js?");

/***/ }),

/***/ "./src/js/modules/country-header.js":
/*!******************************************!*\
  !*** ./src/js/modules/country-header.js ***!
  \******************************************/
/***/ (() => {

eval("$(document).ready(function () {\n  $('.country-header select').change(function () {\n    var url = $(this).val();\n\n    if (url) {\n      window.location.href = url;\n    }\n  });\n});\n\n//# sourceURL=webpack://folc-styleguide/./src/js/modules/country-header.js?");

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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;