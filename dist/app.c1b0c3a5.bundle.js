/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/constants.js":
/*!*********************************!*\
  !*** ./src/common/constants.js ***!
  \*********************************/
/*! exports provided: days, scales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "days", function() { return days; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scales", function() { return scales; });
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const scales = {
  celsius: 'C',
  fahrenheit: 'F'
};

/***/ }),

/***/ "./src/components/Conditions.js":
/*!**************************************!*\
  !*** ./src/components/Conditions.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Conditions_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Conditions.scss */ "./src/components/styles/Conditions.scss");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




const Conditions = ({
  weather
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
  className: "conditions-container",
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
    children: ["Humidity: ", weather.current.humidity, "%"]
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
    children: ["Wind: ", weather.current.wind_speed, " mph"]
  })]
});

Conditions.propTypes = {
  weather: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      humidity: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
      wind_speed: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
    })
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Conditions);

/***/ }),

/***/ "./src/components/DailyWeather.js":
/*!****************************************!*\
  !*** ./src/components/DailyWeather.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_DailyWeather_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/DailyWeather.scss */ "./src/components/styles/DailyWeather.scss");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/components/index.js");
/* harmony import */ var _utils_temperature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/temperature */ "./src/utils/temperature.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/constants */ "./src/common/constants.js");








const DailyWeather = ({
  weather,
  currentScale
}) => {
  const type = weather.weather[0].main;
  const _weather$temp = weather.temp,
        max = _weather$temp.max,
        min = _weather$temp.min;
  const day = new Date(weather.dt * 1000).getDay();
  const dayMax = Object(_utils_temperature__WEBPACK_IMPORTED_MODULE_4__["kelvin2CAndF"])(max)[currentScale[0]];
  const dayMin = Object(_utils_temperature__WEBPACK_IMPORTED_MODULE_4__["kelvin2CAndF"])(min)[currentScale[0]];
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "daily-weather-container",
    "aria-label": `Weather will be ${type} on ${day} with maximum temperature of ${dayMax} and minimum of ${dayMin}.`,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
      children: _common_constants__WEBPACK_IMPORTED_MODULE_5__["days"][day]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(___WEBPACK_IMPORTED_MODULE_3__["WeatherIcon"], {
      type: type
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      children: [dayMax, "\xB0 ", dayMin, "\xB0"]
    })]
  });
};

DailyWeather.propTypes = {
  currentScale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  weather: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    dt: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    temp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      max: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
      min: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
    }),
    weather: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
  })
};
/* harmony default export */ __webpack_exports__["default"] = (DailyWeather);

/***/ }),

/***/ "./src/components/HourlyWeather.js":
/*!*****************************************!*\
  !*** ./src/components/HourlyWeather.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const HourlyWeather = () => null;

/* harmony default export */ __webpack_exports__["default"] = (HourlyWeather);

/***/ }),

/***/ "./src/components/Location.js":
/*!************************************!*\
  !*** ./src/components/Location.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Location_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Location.scss */ "./src/components/styles/Location.scss");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/constants */ "./src/common/constants.js");






const Location = ({
  location,
  weather
}) => {
  const postcode = location.postcode,
        state_code = location.state_code,
        town = location.town,
        county = location.county;
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  const currentMeridian = hour >= 12 ? 'PM' : 'AM';
  const hr = hour > 12 ? hour - 12 : hour;
  const currentWeather = weather.current.weather[0].main;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "location-address location-color",
      children: [town || county, ", ", state_code, " ", postcode]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "location-time location-color",
      children: [_common_constants__WEBPACK_IMPORTED_MODULE_3__["days"][day], " ", hr || 12, ":00 ", currentMeridian]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      "aria-label": `Current weather is ${currentWeather}`,
      className: "location-weather location-color",
      children: currentWeather
    })]
  });
};

Location.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    country: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    county: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    postcode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    state_code: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    town: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  }),
  weather: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      weather: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
    })
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Location);

/***/ }),

/***/ "./src/components/Temperature.js":
/*!***************************************!*\
  !*** ./src/components/Temperature.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Temperature_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Temperature.scss */ "./src/components/styles/Temperature.scss");
/* harmony import */ var _utils_temperature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/temperature */ "./src/utils/temperature.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/constants */ "./src/common/constants.js");







const Temperature = ({
  temp,
  onClickScale,
  currentScale
}) => {
  if (!temp) {
    return null;
  }

  const _kelvin2CAndF = Object(_utils_temperature__WEBPACK_IMPORTED_MODULE_3__["kelvin2CAndF"])(temp),
        inC = _kelvin2CAndF[_common_constants__WEBPACK_IMPORTED_MODULE_4__["scales"].celsius],
        inF = _kelvin2CAndF[[_common_constants__WEBPACK_IMPORTED_MODULE_4__["scales"].fahrenheit]];

  function linkOrText(scale) {
    if (scale !== currentScale[0]) {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
        "aria-label": `Switch to ${currentScale[0] !== _common_constants__WEBPACK_IMPORTED_MODULE_4__["scales"].celsius ? 'celsius' : 'fahrenheit'} scale.`,
        role: "button",
        href: "/",
        onClick: onClickScale,
        children: ["\xB0", scale]
      });
    } else {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        children: ["\xB0", scale]
      });
    }
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "temp-container",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "temp-number",
      children: Math.floor(currentScale[0] === _common_constants__WEBPACK_IMPORTED_MODULE_4__["scales"].celsius ? inC : inF)
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "temp-scale",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        children: linkOrText(_common_constants__WEBPACK_IMPORTED_MODULE_4__["scales"].celsius)
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "temp-divider",
        children: "|"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        children: linkOrText(_common_constants__WEBPACK_IMPORTED_MODULE_4__["scales"].fahrenheit)
      })]
    })]
  });
};

Temperature.propTypes = {
  currentScale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  onClickScale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  temp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (Temperature);

/***/ }),

/***/ "./src/components/WeatherIcon.js":
/*!***************************************!*\
  !*** ./src/components/WeatherIcon.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_WeatherIcon_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/WeatherIcon.scss */ "./src/components/styles/WeatherIcon.scss");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




const WeatherIcon = ({
  type
}) => {
  // Didn't find documentation for possible types.
  const possibleWeathers = new Set(['clouds', 'clear', 'snow', 'rain']);
  let currentWeather = 'clear';

  if (possibleWeathers.has(type.toLowerCase())) {
    currentWeather = type.toLowerCase();
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
    className: "weather-icon",
    src: `/assets/images/${currentWeather}.png`,
    alt: currentWeather
  });
};

WeatherIcon.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (WeatherIcon);

/***/ }),

/***/ "./src/components/WeatherWidget.js":
/*!*****************************************!*\
  !*** ./src/components/WeatherWidget.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_WeatherWidget_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/WeatherWidget.scss */ "./src/components/styles/WeatherWidget.scss");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ */ "./src/components/index.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/constants */ "./src/common/constants.js");









const WeatherWidget = ({
  location,
  weather
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([_common_constants__WEBPACK_IMPORTED_MODULE_6__["scales"].celsius, _common_constants__WEBPACK_IMPORTED_MODULE_6__["scales"].fahrenheit]),
        _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
        currentScale = _useState2[0],
        setScale = _useState2[1];

  const onClickScale = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(e => {
    e.preventDefault();
    setScale([currentScale[1], currentScale[0]]);
  }, [currentScale]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "weather-widget",
    role: "region",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(___WEBPACK_IMPORTED_MODULE_5__["Location"], {
      location: location,
      weather: weather
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "weather-widget-weather-conditions",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "weather-widget-current-weather",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "weather-widget-icon",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(___WEBPACK_IMPORTED_MODULE_5__["WeatherIcon"], {
              type: weather.current.weather[0].main
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(___WEBPACK_IMPORTED_MODULE_5__["Temperature"], {
            temp: weather.current.temp,
            onClickScale: onClickScale,
            currentScale: currentScale
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "weather-widget-conditions",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(___WEBPACK_IMPORTED_MODULE_5__["Conditions"], {
          weather: weather
        })
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(___WEBPACK_IMPORTED_MODULE_5__["HourlyWeather"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "weather-widget-daily-weather",
      children: weather.daily.map(day => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(___WEBPACK_IMPORTED_MODULE_5__["DailyWeather"], {
        currentScale: currentScale,
        weather: day
      }, day.dt))
    })]
  });
};

WeatherWidget.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  weather: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
      temp: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
      weather: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array
    }),
    daily: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array
  })
};
/* harmony default export */ __webpack_exports__["default"] = (WeatherWidget);

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: DailyWeather, HourlyWeather, Location, Conditions, Temperature, WeatherIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DailyWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DailyWeather */ "./src/components/DailyWeather.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DailyWeather", function() { return _DailyWeather__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _HourlyWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HourlyWeather */ "./src/components/HourlyWeather.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HourlyWeather", function() { return _HourlyWeather__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Location */ "./src/components/Location.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return _Location__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Conditions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Conditions */ "./src/components/Conditions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Conditions", function() { return _Conditions__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Temperature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Temperature */ "./src/components/Temperature.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Temperature", function() { return _Temperature__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _WeatherIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WeatherIcon */ "./src/components/WeatherIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeatherIcon", function() { return _WeatherIcon__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./src/components/styles/Conditions.scss":
/*!***********************************************!*\
  !*** ./src/components/styles/Conditions.scss ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/styles/DailyWeather.scss":
/*!*************************************************!*\
  !*** ./src/components/styles/DailyWeather.scss ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/styles/Location.scss":
/*!*********************************************!*\
  !*** ./src/components/styles/Location.scss ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/styles/Temperature.scss":
/*!************************************************!*\
  !*** ./src/components/styles/Temperature.scss ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/styles/WeatherIcon.scss":
/*!************************************************!*\
  !*** ./src/components/styles/WeatherIcon.scss ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/styles/WeatherWidget.scss":
/*!**************************************************!*\
  !*** ./src/components/styles/WeatherWidget.scss ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/container/AppWrapper/AppWrapper.js":
/*!************************************************!*\
  !*** ./src/container/AppWrapper/AppWrapper.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AppWrappers_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppWrappers.scss */ "./src/container/AppWrapper/AppWrappers.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_WeatherWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/WeatherWidget */ "./src/components/WeatherWidget.js");
/* harmony import */ var _services_geoLocation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/geoLocation */ "./src/services/geoLocation.js");
/* harmony import */ var _services_weather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/weather */ "./src/services/weather.js");










const AppWrapper = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
        _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
        currentCoordinates = _useState2[0],
        setCurrentCoordinates = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
        _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
        currentWeather = _useState4[0],
        setCurrentWeather = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
        _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
        currentLocation = _useState6[0],
        setCurrentLocation = _useState6[1];

  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
        _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
        hottestWeather = _useState8[0],
        setHottestWeather = _useState8[1];

  const _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
        _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState9, 2),
        hottestLocation = _useState10[0],
        setHottestLocation = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    Object(_services_geoLocation__WEBPACK_IMPORTED_MODULE_5__["getGeoLocation"])().then(location => ({
      lat: location.coords.latitude,
      long: location.coords.longitude
    })).then(location => setCurrentCoordinates(location));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (currentCoordinates) {
      Object(_services_geoLocation__WEBPACK_IMPORTED_MODULE_5__["geoCoding"])(currentCoordinates).then(location => {
        setCurrentLocation(location);
      });
    }
  }, [currentCoordinates]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (currentCoordinates) {
      Object(_services_weather__WEBPACK_IMPORTED_MODULE_6__["getCurrentWeather"])(currentCoordinates).then(weather => setCurrentWeather(weather));
    }
  }, [currentCoordinates]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    Object(_services_geoLocation__WEBPACK_IMPORTED_MODULE_5__["geoCoding"])({
      lat: 62.8657307,
      long: -154.7453284
    }).then(location => {
      setHottestLocation(location);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    Object(_services_weather__WEBPACK_IMPORTED_MODULE_6__["getCurrentWeather"])({
      lat: 62.8657307,
      long: -154.7453284
    }).then(weather => setHottestWeather(weather));
  }, []);

  if (!currentLocation || !currentWeather) {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": 50,
      "aria-valuetext": "Loading content...",
      className: "cs-loader-container",
      "aria-labelledby": "spinner",
      "data-testid": "cs-loader-component",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "loading",
        id: "spinner",
        children: "Loading..."
      })
    });
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_WeatherWidget__WEBPACK_IMPORTED_MODULE_4__["default"], {
      weather: currentWeather,
      location: currentLocation
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      style: {
        marginTop: '24px'
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_WeatherWidget__WEBPACK_IMPORTED_MODULE_4__["default"], {
        weather: hottestWeather,
        location: hottestLocation
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AppWrapper);

/***/ }),

/***/ "./src/container/AppWrapper/AppWrappers.scss":
/*!***************************************************!*\
  !*** ./src/container/AppWrapper/AppWrappers.scss ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _container_AppWrapper_AppWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/AppWrapper/AppWrapper */ "./src/container/AppWrapper/AppWrapper.js");




/**
 * element in HTML document for React SPA
 * @type {ReactElement}
 */

const rootElement = document.getElementById('app');
/**
 * React SPA
 * @type {ReactElement}
 */

const rootComponent = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_container_AppWrapper_AppWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {});

Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["render"])(rootComponent, rootElement);

/***/ }),

/***/ "./src/services/geoLocation.js":
/*!*************************************!*\
  !*** ./src/services/geoLocation.js ***!
  \*************************************/
/*! exports provided: getGeoLocation, geoCoding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeoLocation", function() { return getGeoLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geoCoding", function() { return geoCoding; });
function getGeoLocation() {
  return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, {
    maximumAge: 60000,
    timeout: 5000,
    enableHighAccuracy: true
  }));
}
function geoCoding({
  lat,
  long
}) {
  if (!lat || !long) {
    return null;
  }

  const vendorURL = 'https://api.opencagedata.com/geocode/v1/json';
  const apiKey = '0264db5477fe4b1c9ee9ae23b3ec59e5';
  return fetch(`${vendorURL}?q=${lat},${long}&key=${apiKey}`).then(response => response.json()).then(({
    results: [result]
  }) => result.components);
}

/***/ }),

/***/ "./src/services/weather.js":
/*!*********************************!*\
  !*** ./src/services/weather.js ***!
  \*********************************/
/*! exports provided: getCurrentWeather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentWeather", function() { return getCurrentWeather; });
function getCurrentWeather({
  lat,
  long
}) {
  if (!lat || !long) {
    return null;
  }

  const vendorURL = 'https://api.openweathermap.org/data/2.5/onecall';
  const apiKey = '524589f12ff60e2a150e470595208862';
  return fetch(`${vendorURL}?lat=${lat}&lon=${long}&appid=${apiKey}`).then(response => response.json());
}

/***/ }),

/***/ "./src/utils/temperature.js":
/*!**********************************!*\
  !*** ./src/utils/temperature.js ***!
  \**********************************/
/*! exports provided: kelvin2CAndF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kelvin2CAndF", function() { return kelvin2CAndF; });
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/constants */ "./src/common/constants.js");

function kelvin2CAndF(temp, {
  floor
} = {
  floor: true
}) {
  if (!temp) {
    return 273;
  }

  const fahrenheit = (temp - 273.15) * 1.8 + 32;
  const celsius = temp - 273.15;
  return {
    [_common_constants__WEBPACK_IMPORTED_MODULE_0__["scales"].fahrenheit]: floor ? Math.floor(fahrenheit) : fahrenheit,
    [_common_constants__WEBPACK_IMPORTED_MODULE_0__["scales"].celsius]: floor ? Math.floor(celsius) : celsius
  };
}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vsharma/Desktop/delete/weather-app/src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=app.c1b0c3a5.bundle.js.map