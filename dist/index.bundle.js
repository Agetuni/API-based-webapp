"use strict";
(self["webpackChunkapi_based_webapp"] = self["webpackChunkapi_based_webapp"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:100,300,400);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* stylelint-disable no-descending-specificity */\n.template {\n  display: none;\n}\n\n* {\n  box-sizing: border-box;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\n\nhtml {\n  margin: 0;\n  padding: 0;\n  max-width: 100%;\n  overflow-x: hidden;\n  scroll-behavior: smooth;\n}\n\na {\n  all: unset;\n}\n\nbody {\n  background-color: whitesmoke;\n  margin: 0;\n  padding: 0;\n}\nbody header {\n  display: flex;\n  position: fixed;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  background-color: white;\n  padding: 1rem 10%;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  right: 0;\n}\nbody header .logo {\n  font-family: Roboto, Arial, Helvetica, sans-serif;\n}\nbody header nav {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\nbody header nav .nav-item {\n  display: block;\n  transition: transform 0.25s ease-in-out;\n}\nbody header nav .nav-item:hover {\n  transform: scale(1.1);\n}\nbody main {\n  margin-top: 5rem;\n}\nbody main .flex-container {\n  margin: 0 10%;\n  display: grid;\n  text-align: center;\n  grid-template-columns: repeat(1, 1fr);\n  grid-template-rows: auto;\n  gap: 0.25rem;\n}\n@media (min-width: 480px) {\n  body main .flex-container {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 768px) {\n  body main .flex-container {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (min-width: 1024px) {\n  body main .flex-container {\n    grid-template-columns: repeat(5, 1fr);\n  }\n}\nbody main .flex-container .show-item {\n  grid-row: auto/span 1;\n  grid-column: auto/span 1;\n  position: relative;\n  cursor: pointer;\n}\nbody main .flex-container .show-item .img-container img {\n  width: 100%;\n  height: auto;\n  display: block;\n}\nbody main .flex-container .show-item .info-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: end;\n  padding: 0.5rem;\n  background: rgb(0, 0, 0);\n  background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(255, 255, 255, 0) 100%);\n}\nbody main .flex-container .show-item .info-container .title {\n  font-size: 2rem;\n  text-align: left;\n  color: white;\n}\nbody main .flex-container .show-item .info-container .reaction {\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\nbody main .flex-container .show-item .info-container .reaction button {\n  background: none;\n  border: unset;\n  cursor: pointer;\n  color: white;\n}\nbody main .flex-container .show-item .info-container .reaction button.comment-btn {\n  border: 1px solid whitesmoke;\n  border-radius: 5px;\n  padding: 0.25rem 0.75rem;\n}\nbody .show-modal {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 9999;\n}\nbody .show-modal .modal-content {\n  background-color: #fefefe;\n  width: calc(100% - 2rem);\n  height: calc(100% - 2rem);\n  position: relative;\n  overflow: auto;\n}\n@media (min-width: 768px) {\n  body .show-modal .modal-content {\n    width: 75%;\n    height: calc(100% - 5rem);\n  }\n}\nbody .show-modal .modal-content .close {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\nbody .show-modal .modal-content .close.close:hover, body .show-modal .modal-content .close.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\nbody .show-modal .modal-content .modal-detail {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto;\n}\n@media (min-width: 768px) {\n  body .show-modal .modal-content .modal-detail {\n    grid-template-columns: 40% 1fr;\n  }\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-img {\n  display: flex;\n  align-items: center;\n  grid-row: auto/span 1;\n  grid-column: auto/span 1;\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-img img {\n  display: block;\n  width: 100%;\n  height: auto;\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-text {\n  grid-row: auto/span 1;\n  grid-column: auto/span 1;\n  color: black;\n  padding: 50px;\n  font-size: 2vh;\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-comment {\n  grid-row: auto/span 1;\n  grid-column: 1/-1;\n  background-color: #888;\n  overflow: auto;\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-comment .box {\n  width: 100%;\n  height: 1000px;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA,gDAAA;AAGA;EACE,aAAA;AAAF;;AAGA;EACE,sBAAA;EACA,qDAAA;AAAF;;AAGA;EACE,SAAA;EACA,UAAA;EACA,eAAA;EACA,kBAAA;EACA,uBAAA;AAAF;;AAGA;EACE,UAAA;AAAF;;AAGA;EACE,4BAAA;EACA,SAAA;EACA,UAAA;AAAF;AAEE;EACE,aAAA;EACA,eAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;EACA,UAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;AAAJ;AAEI;EACE,iDAAA;AAAN;AAGI;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AADN;AAGM;EACE,cAAA;EACA,uCAAA;AADR;AAGQ;EACE,qBAAA;AADV;AAOE;EACE,gBAAA;AALJ;AAOI;EACE,aAAA;EACA,aAAA;EACA,kBAAA;EACA,qCAAA;EACA,wBAAA;EACA,YAAA;AALN;AAOM;EACE;IACE,qCAAA;EALR;AACF;AAQM;EACE;IACE,qCAAA;EANR;AACF;AASM;EACE;IACE,qCAAA;EAPR;AACF;AAUM;EACE,qBAAA;EACA,wBAAA;EACA,kBAAA;EACA,eAAA;AARR;AAWU;EACE,WAAA;EACA,YAAA;EACA,cAAA;AATZ;AAaQ;EACE,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,oBAAA;EACA,eAAA;EACA,wBAAA;EACA,+EAAA;AAXV;AAaU;EACE,eAAA;EACA,gBAAA;EACA,YAAA;AAXZ;AAcU;EACE,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AAZZ;AAcY;EACE,gBAAA;EACA,aAAA;EACA,eAAA;EACA,YAAA;AAZd;AAcc;EACE,4BAAA;EACA,kBAAA;EACA,wBAAA;AAZhB;AAqBE;EACE,eAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,8BAAA;EACA,oCAAA;EACA,aAAA;AAnBJ;AAqBI;EACE,yBAAA;EACA,wBAAA;EACA,yBAAA;EACA,kBAAA;EACA,cAAA;AAnBN;AAqBM;EACE;IACE,UAAA;IACA,yBAAA;EAnBR;AACF;AAsBM;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;AApBR;AAsBQ;EAEE,YAAA;EACA,qBAAA;EACA,eAAA;AArBV;AAyBM;EACE,aAAA;EACA,0BAAA;EACA,wBAAA;AAvBR;AAyBQ;EACE;IACE,8BAAA;EAvBV;AACF;AA0BQ;EACE,aAAA;EACA,mBAAA;EACA,qBAAA;EACA,wBAAA;AAxBV;AA0BU;EACE,cAAA;EACA,WAAA;EACA,YAAA;AAxBZ;AA4BQ;EACE,qBAAA;EACA,wBAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;AA1BV;AA6BQ;EACE,qBAAA;EACA,iBAAA;EACA,sBAAA;EACA,cAAA;AA3BV;AA6BU;EACE,WAAA;EACA,cAAA;AA3BZ","sourcesContent":["/* stylelint-disable no-descending-specificity */\n@import \"https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:100,300,400\";\n\n.template {\n  display: none;\n}\n\n* {\n  box-sizing: border-box;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\n\nhtml {\n  margin: 0;\n  padding: 0;\n  max-width: 100%;\n  overflow-x: hidden;\n  scroll-behavior: smooth;\n}\n\na {\n  all: unset;\n}\n\nbody {\n  background-color: whitesmoke;\n  margin: 0;\n  padding: 0;\n\n  header {\n    display: flex;\n    position: fixed;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    background-color: white;\n    padding: 1rem 10%;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    right: 0;\n\n    .logo {\n      font-family: Roboto, Arial, Helvetica, sans-serif;\n    }\n\n    nav {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      gap: 1rem;\n\n      .nav-item {\n        display: block;\n        transition: transform 0.25s ease-in-out;\n\n        &:hover {\n          transform: scale(1.1);\n        }\n      }\n    }\n  }\n\n  main {\n    margin-top: 5rem;\n\n    .flex-container {\n      margin: 0 10%;\n      display: grid;\n      text-align: center;\n      grid-template-columns: repeat(1, 1fr);\n      grid-template-rows: auto;\n      gap: 0.25rem;\n\n      @media (min-width: 480px) {\n        & {\n          grid-template-columns: repeat(2, 1fr);\n        }\n      }\n\n      @media (min-width: 768px) {\n        & {\n          grid-template-columns: repeat(3, 1fr);\n        }\n      }\n\n      @media (min-width: 1024px) {\n        & {\n          grid-template-columns: repeat(5, 1fr);\n        }\n      }\n\n      .show-item {\n        grid-row: auto / span 1;\n        grid-column: auto / span 1;\n        position: relative;\n        cursor: pointer;\n\n        .img-container {\n          img {\n            width: 100%;\n            height: auto;\n            display: block;\n          }\n        }\n\n        .info-container {\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: 0;\n          right: 0;\n          display: flex;\n          flex-direction: column;\n          align-items: stretch;\n          justify-content: end;\n          padding: 0.5rem;\n          background: rgb(0 0 0);\n          background: linear-gradient(0deg, rgb(0 0 0 / 100%) 0%, rgb(255 255 255 / 0%) 100%);\n\n          .title {\n            font-size: 2rem;\n            text-align: left;\n            color: white;\n          }\n\n          .reaction {\n            font-size: 1.5rem;\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n\n            button {\n              background: none;\n              border: unset;\n              cursor: pointer;\n              color: white;\n\n              &.comment-btn {\n                border: 1px solid whitesmoke;\n                border-radius: 5px;\n                padding: 0.25rem 0.75rem;\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .show-modal {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: rgb(0 0 0);\n    background-color: rgb(0 0 0 / 40%);\n    z-index: 9999;\n\n    .modal-content {\n      background-color: #fefefe;\n      width: calc(100% - 2rem);\n      height: calc(100% - 2rem);\n      position: relative;\n      overflow: auto;\n\n      @media (min-width: 768px) {\n        & {\n          width: 75%;\n          height: calc(100% - 5rem);\n        }\n      }\n\n      .close {\n        position: absolute;\n        top: 1rem;\n        right: 1rem;\n        color: #aaa;\n        float: right;\n        font-size: 28px;\n        font-weight: bold;\n\n        &.close:hover,\n        &.close:focus {\n          color: black;\n          text-decoration: none;\n          cursor: pointer;\n        }\n      }\n\n      .modal-detail {\n        display: grid;\n        grid-template-columns: 1fr;\n        grid-template-rows: auto;\n\n        @media (min-width: 768px) {\n          & {\n            grid-template-columns: 40% 1fr;\n          }\n        }\n\n        .modal-detail-img {\n          display: flex;\n          align-items: center;\n          grid-row: auto / span 1;\n          grid-column: auto / span 1;\n\n          img {\n            display: block;\n            width: 100%;\n            height: auto;\n          }\n        }\n\n        .modal-detail-text {\n          grid-row: auto / span 1;\n          grid-column: auto / span 1;\n          color: black;\n          padding: 50px;\n          font-size: 2vh;\n        }\n\n        .modal-detail-comment {\n          grid-row: auto / span 1;\n          grid-column: 1 / -1;\n          background-color: #888;\n          overflow: auto;\n\n          .box {\n            width: 100%;\n            height: 1000px;\n          }\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"template": "template",
	"logo": "logo",
	"nav-item": "nav-item",
	"flex-container": "flex-container",
	"show-item": "show-item",
	"img-container": "img-container",
	"info-container": "info-container",
	"title": "title",
	"reaction": "reaction",
	"comment-btn": "comment-btn",
	"show-modal": "show-modal",
	"modal-content": "modal-content",
	"close": "close",
	"modal-detail": "modal-detail",
	"modal-detail-img": "modal-detail-img",
	"modal-detail-text": "modal-detail-text",
	"modal-detail-comment": "modal-detail-comment",
	"box": "box"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _module_apiService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/apiService.js */ "./src/module/apiService.js");
/* harmony import */ var _module_domService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/domService.js */ "./src/module/domService.js");




const moviesUrl = 'https://api.tvmaze.com/shows';

const initTemplate = async () => {
  const movies = await _module_apiService_js__WEBPACK_IMPORTED_MODULE_1__["default"].getTvShows(moviesUrl);
  await _module_domService_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayTvShows(movies.list);
  _module_domService_js__WEBPACK_IMPORTED_MODULE_2__["default"].addModal();
};

const init = async () => {
  initTemplate();
};

window.addEventListener('load', init);


/***/ }),

/***/ "./src/module/apiService.js":
/*!**********************************!*\
  !*** ./src/module/apiService.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _movieList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieList.js */ "./src/module/movieList.js");
/* harmony import */ var _movie_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie.js */ "./src/module/movie.js");



const getTvShows = async (url) => {
  const allMovies = new _movieList_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  const movies = await fetch(url)
    .then((response) => response.json())
    .then((response) => response);
  movies.forEach((element) => {
    allMovies.push(
      new _movie_js__WEBPACK_IMPORTED_MODULE_1__["default"](
        element.id,
        element.name,
        element.type,
        element.language,
        element.genres[0],
        element.rating.average,
        element.image.medium,
        element.summary,
      ),
    );
  });
  return allMovies;
};
const getTvShow = async (url) => {
  const movieData = await fetch(url)
    .then((response) => response.json())
    .then((response) => response);
  const result = new _movie_js__WEBPACK_IMPORTED_MODULE_1__["default"](
    movieData.id,
    movieData.name,
    movieData.type,
    movieData.language,
    movieData.genres[0],
    movieData.rating.average,
    movieData.image.medium,
    movieData.summary,
  );
  return result;
};

const getlike = async (url) => {
  const response = await fetch(url, { method: 'GET' });
  return response.json();
};
const like = async (url, id) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};
const getComment = async (url, id) => {
  let response = await fetch(`${url}?item_id=${id}`);
  if (response.status === 400) {
    response = [];
    return response;
  }
  return response.json();
};

const comment = async (url, itemId, username, comment) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
      username,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.status;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getTvShows,
  getTvShow,
  getlike,
  like,
  getComment,
  comment,
});


/***/ }),

/***/ "./src/module/domService.js":
/*!**********************************!*\
  !*** ./src/module/domService.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const container = document.querySelector('.flex-container');

const ShowItemTemplate = document.querySelector('.template #show-item-template');
const ShowModalTemplate = document.querySelector('.template #show-modal-template');

const buildModal = (movie) => {
  const ShowModalElement = ShowModalTemplate.cloneNode(true);

  ShowModalElement.id = `show-modal-${movie.id}`;

  ShowModalElement.querySelector('span.close').addEventListener('click', () => {
    ShowModalElement.remove();
  });

  const imgElement = document.createElement('img');
  imgElement.src = movie.image;
  imgElement.alt = `${movie.title} Poster`;

  ShowModalElement.querySelector('.modal-detail-img').appendChild(imgElement);

  const detailTextElement = ShowModalElement.querySelector('.modal-detail-text');

  const titleElement = detailTextElement.querySelector('.name');
  titleElement.textContent = movie.name;

  const languageElement = detailTextElement.querySelector('.language');
  languageElement.textContent = movie.language;

  const genresElement = detailTextElement.querySelector('.genres');
  genresElement.textContent = movie.genres;

  const ratingElement = detailTextElement.querySelector('.rating');
  ratingElement.textContent = movie.rating;

  const typeElement = detailTextElement.querySelector('.type');
  typeElement.innerHTML = movie.type;

  const summaryElement = detailTextElement.querySelector('.summary');
  summaryElement.innerHTML = movie.summary;

  document.querySelector('body').appendChild(ShowModalElement);
};

const buildShowItemElement = (movie) => {
  const ShowItemElement = ShowItemTemplate.cloneNode(true);

  ShowItemElement.id = `show-item-${movie.id}`;

  ShowItemElement.addEventListener('click', (e) => {
    e.preventDefault();
    buildModal(movie);
  });

  const imgElement = document.createElement('img');
  imgElement.src = movie.image;
  imgElement.alt = `${movie.name} Poster`;

  const imgContainerElement = ShowItemElement.querySelector('.img-container');

  imgContainerElement.appendChild(imgElement);

  const titleElement = ShowItemElement.querySelector('.title');
  titleElement.innerHTML = movie.name;

  const commentBtnElement = ShowItemElement.querySelector('.comment-btn');
  commentBtnElement.dataset.id = movie.id;

  return ShowItemElement;
};

const displayTvShows = async (movies) => {
  container.textContent = '';
  movies.forEach((movie) => container.appendChild(buildShowItemElement(movie)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ displayTvShows });


/***/ }),

/***/ "./src/module/movie.js":
/*!*****************************!*\
  !*** ./src/module/movie.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Movie {
  constructor(id, name, type, language, genres, rating, image, summary, likes) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.language = language;
    this.genres = genres;
    this.rating = rating;
    this.image = image;
    this.summary = summary;
    this.likes = likes;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Movie);


/***/ }),

/***/ "./src/module/movieList.js":
/*!*********************************!*\
  !*** ./src/module/movieList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class MovieList {
  constructor(list = []) {
    this.list = list;
  }

  push(movie) {
    this.list.push(movie);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieList);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUg7QUFDQTtBQUNBLHNCQUFzQixZQUFZOztBQUVsQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxFQUFFLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMzRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDZHJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9zdHlsZS5zY3NzP2FkNjAiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlL2FwaVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGUvZG9tU2VydmljZS5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vc3JjL21vZHVsZS9tb3ZpZS5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vc3JjL21vZHVsZS9tb3ZpZUxpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDcwMHxSb2JvdG86MTAwLDMwMCw0MDApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBuby1kZXNjZW5kaW5nLXNwZWNpZmljaXR5ICovXFxuLnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYSB7XFxuICBhbGw6IHVuc2V0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5ib2R5IGhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDFyZW0gMTAlO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG59XFxuYm9keSBoZWFkZXIgLmxvZ28ge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuYm9keSBoZWFkZXIgbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5ib2R5IGhlYWRlciBuYXYgLm5hdi1pdGVtIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5ib2R5IGhlYWRlciBuYXYgLm5hdi1pdGVtOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuYm9keSBtYWluIHtcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxufVxcbmJvZHkgbWFpbiAuZmxleC1jb250YWluZXIge1xcbiAgbWFyZ2luOiAwIDEwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgZ2FwOiAwLjI1cmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcXG4gIGJvZHkgbWFpbiAuZmxleC1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIGJvZHkgbWFpbiAuZmxleC1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICBib2R5IG1haW4gLmZsZXgtY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gIH1cXG59XFxuYm9keSBtYWluIC5mbGV4LWNvbnRhaW5lciAuc2hvdy1pdGVtIHtcXG4gIGdyaWQtcm93OiBhdXRvL3NwYW4gMTtcXG4gIGdyaWQtY29sdW1uOiBhdXRvL3NwYW4gMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYm9keSBtYWluIC5mbGV4LWNvbnRhaW5lciAuc2hvdy1pdGVtIC5pbWctY29udGFpbmVyIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IG1haW4gLmZsZXgtY29udGFpbmVyIC5zaG93LWl0ZW0gLmluZm8tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2IoMCwgMCwgMCkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XFxufVxcbmJvZHkgbWFpbiAuZmxleC1jb250YWluZXIgLnNob3ctaXRlbSAuaW5mby1jb250YWluZXIgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbmJvZHkgbWFpbiAuZmxleC1jb250YWluZXIgLnNob3ctaXRlbSAuaW5mby1jb250YWluZXIgLnJlYWN0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbmJvZHkgbWFpbiAuZmxleC1jb250YWluZXIgLnNob3ctaXRlbSAuaW5mby1jb250YWluZXIgLnJlYWN0aW9uIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiB1bnNldDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuYm9keSBtYWluIC5mbGV4LWNvbnRhaW5lciAuc2hvdy1pdGVtIC5pbmZvLWNvbnRhaW5lciAucmVhY3Rpb24gYnV0dG9uLmNvbW1lbnQtYnRuIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XFxufVxcbmJvZHkgLnNob3ctbW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICB6LWluZGV4OiA5OTk5O1xcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDJyZW0pO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNXJlbSk7XFxuICB9XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLmNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMXJlbTtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgY29sb3I6ICNhYWE7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCAuY2xvc2UuY2xvc2U6aG92ZXIsIGJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLmNsb3NlLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtZGV0YWlsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICBib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSAxZnI7XFxuICB9XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWRldGFpbCAubW9kYWwtZGV0YWlsLWltZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtcm93OiBhdXRvL3NwYW4gMTtcXG4gIGdyaWQtY29sdW1uOiBhdXRvL3NwYW4gMTtcXG59XFxuYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtZGV0YWlsIC5tb2RhbC1kZXRhaWwtaW1nIGltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwgLm1vZGFsLWRldGFpbC10ZXh0IHtcXG4gIGdyaWQtcm93OiBhdXRvL3NwYW4gMTtcXG4gIGdyaWQtY29sdW1uOiBhdXRvL3NwYW4gMTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICBmb250LXNpemU6IDJ2aDtcXG59XFxuYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtZGV0YWlsIC5tb2RhbC1kZXRhaWwtY29tbWVudCB7XFxuICBncmlkLXJvdzogYXV0by9zcGFuIDE7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtZGV0YWlsIC5tb2RhbC1kZXRhaWwtY29tbWVudCAuYm94IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdEQUFBO0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxzQkFBQTtFQUNBLHFEQUFBO0FBQUY7O0FBR0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0FBQUY7O0FBR0E7RUFDRSw0QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUY7QUFFRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFBSjtBQUVJO0VBQ0UsaURBQUE7QUFBTjtBQUdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFETjtBQUdNO0VBQ0UsY0FBQTtFQUNBLHVDQUFBO0FBRFI7QUFHUTtFQUNFLHFCQUFBO0FBRFY7QUFPRTtFQUNFLGdCQUFBO0FBTEo7QUFPSTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQUxOO0FBT007RUFDRTtJQUNFLHFDQUFBO0VBTFI7QUFDRjtBQVFNO0VBQ0U7SUFDRSxxQ0FBQTtFQU5SO0FBQ0Y7QUFTTTtFQUNFO0lBQ0UscUNBQUE7RUFQUjtBQUNGO0FBVU07RUFDRSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBUlI7QUFXVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQVRaO0FBYVE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsK0VBQUE7QUFYVjtBQWFVO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQVhaO0FBY1U7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBWlo7QUFjWTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBWmQ7QUFjYztFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQVpoQjtBQXFCRTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0FBbkJKO0FBcUJJO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBbkJOO0FBcUJNO0VBQ0U7SUFDRSxVQUFBO0lBQ0EseUJBQUE7RUFuQlI7QUFDRjtBQXNCTTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXBCUjtBQXNCUTtFQUVFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFyQlY7QUF5Qk07RUFDRSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQXZCUjtBQXlCUTtFQUNFO0lBQ0UsOEJBQUE7RUF2QlY7QUFDRjtBQTBCUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUF4QlY7QUEwQlU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF4Qlo7QUE0QlE7RUFDRSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBMUJWO0FBNkJRO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQTNCVjtBQTZCVTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBM0JaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWRlc2NlbmRpbmctc3BlY2lmaWNpdHkgKi9cXG5AaW1wb3J0IFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNzAwfFJvYm90bzoxMDAsMzAwLDQwMFxcXCI7XFxuXFxuLnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYSB7XFxuICBhbGw6IHVuc2V0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcblxcbiAgaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEwJTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG5cXG4gICAgLmxvZ28ge1xcbiAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIH1cXG5cXG4gICAgbmF2IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBnYXA6IDFyZW07XFxuXFxuICAgICAgLm5hdi1pdGVtIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2UtaW4tb3V0O1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIG1haW4ge1xcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xcblxcbiAgICAuZmxleC1jb250YWluZXIge1xcbiAgICAgIG1hcmdpbjogMCAxMCU7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgICAgZ2FwOiAwLjI1cmVtO1xcblxcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xcbiAgICAgICAgJiB7XFxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAgICAgJiB7XFxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgICAgICYge1xcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAuc2hvdy1pdGVtIHtcXG4gICAgICAgIGdyaWQtcm93OiBhdXRvIC8gc3BhbiAxO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IGF1dG8gLyBzcGFuIDE7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICAuaW1nLWNvbnRhaW5lciB7XFxuICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuaW5mby1jb250YWluZXIge1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICByaWdodDogMDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigwIDAgMCk7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2IoMCAwIDAgLyAxMDAlKSAwJSwgcmdiKDI1NSAyNTUgMjU1IC8gMCUpIDEwMCUpO1xcblxcbiAgICAgICAgICAudGl0bGUge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAucmVhY3Rpb24ge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgICAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICAgICAgICBib3JkZXI6IHVuc2V0O1xcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICAgICAgICAgICAgJi5jb21tZW50LWJ0biB7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLnNob3ctbW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDQwJSk7XFxuICAgIHotaW5kZXg6IDk5OTk7XFxuXFxuICAgIC5tb2RhbC1jb250ZW50IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDJyZW0pO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBvdmVyZmxvdzogYXV0bztcXG5cXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgICAgICYge1xcbiAgICAgICAgICB3aWR0aDogNzUlO1xcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDVyZW0pO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAuY2xvc2Uge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAxcmVtO1xcbiAgICAgICAgcmlnaHQ6IDFyZW07XFxuICAgICAgICBjb2xvcjogI2FhYTtcXG4gICAgICAgIGZsb2F0OiByaWdodDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICAgICAgJi5jbG9zZTpob3ZlcixcXG4gICAgICAgICYuY2xvc2U6Zm9jdXMge1xcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAubW9kYWwtZGV0YWlsIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG5cXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAgICAgICAmIHtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSAxZnI7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tb2RhbC1kZXRhaWwtaW1nIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgZ3JpZC1yb3c6IGF1dG8gLyBzcGFuIDE7XFxuICAgICAgICAgIGdyaWQtY29sdW1uOiBhdXRvIC8gc3BhbiAxO1xcblxcbiAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1vZGFsLWRldGFpbC10ZXh0IHtcXG4gICAgICAgICAgZ3JpZC1yb3c6IGF1dG8gLyBzcGFuIDE7XFxuICAgICAgICAgIGdyaWQtY29sdW1uOiBhdXRvIC8gc3BhbiAxO1xcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1vZGFsLWRldGFpbC1jb21tZW50IHtcXG4gICAgICAgICAgZ3JpZC1yb3c6IGF1dG8gLyBzcGFuIDE7XFxuICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XFxuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xcblxcbiAgICAgICAgICAuYm94IHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMDBweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ0ZW1wbGF0ZVwiOiBcInRlbXBsYXRlXCIsXG5cdFwibG9nb1wiOiBcImxvZ29cIixcblx0XCJuYXYtaXRlbVwiOiBcIm5hdi1pdGVtXCIsXG5cdFwiZmxleC1jb250YWluZXJcIjogXCJmbGV4LWNvbnRhaW5lclwiLFxuXHRcInNob3ctaXRlbVwiOiBcInNob3ctaXRlbVwiLFxuXHRcImltZy1jb250YWluZXJcIjogXCJpbWctY29udGFpbmVyXCIsXG5cdFwiaW5mby1jb250YWluZXJcIjogXCJpbmZvLWNvbnRhaW5lclwiLFxuXHRcInRpdGxlXCI6IFwidGl0bGVcIixcblx0XCJyZWFjdGlvblwiOiBcInJlYWN0aW9uXCIsXG5cdFwiY29tbWVudC1idG5cIjogXCJjb21tZW50LWJ0blwiLFxuXHRcInNob3ctbW9kYWxcIjogXCJzaG93LW1vZGFsXCIsXG5cdFwibW9kYWwtY29udGVudFwiOiBcIm1vZGFsLWNvbnRlbnRcIixcblx0XCJjbG9zZVwiOiBcImNsb3NlXCIsXG5cdFwibW9kYWwtZGV0YWlsXCI6IFwibW9kYWwtZGV0YWlsXCIsXG5cdFwibW9kYWwtZGV0YWlsLWltZ1wiOiBcIm1vZGFsLWRldGFpbC1pbWdcIixcblx0XCJtb2RhbC1kZXRhaWwtdGV4dFwiOiBcIm1vZGFsLWRldGFpbC10ZXh0XCIsXG5cdFwibW9kYWwtZGV0YWlsLWNvbW1lbnRcIjogXCJtb2RhbC1kZXRhaWwtY29tbWVudFwiLFxuXHRcImJveFwiOiBcImJveFwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMF0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IGFwaVNlcnZpY2UgZnJvbSAnLi9tb2R1bGUvYXBpU2VydmljZS5qcyc7XG5pbXBvcnQgZG9tU2VydmljZSBmcm9tICcuL21vZHVsZS9kb21TZXJ2aWNlLmpzJztcblxuY29uc3QgbW92aWVzVXJsID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MnO1xuXG5jb25zdCBpbml0VGVtcGxhdGUgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG1vdmllcyA9IGF3YWl0IGFwaVNlcnZpY2UuZ2V0VHZTaG93cyhtb3ZpZXNVcmwpO1xuICBhd2FpdCBkb21TZXJ2aWNlLmRpc3BsYXlUdlNob3dzKG1vdmllcy5saXN0KTtcbiAgZG9tU2VydmljZS5hZGRNb2RhbCgpO1xufTtcblxuY29uc3QgaW5pdCA9IGFzeW5jICgpID0+IHtcbiAgaW5pdFRlbXBsYXRlKCk7XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGluaXQpO1xuIiwiaW1wb3J0IE1vdmllTGlzdCBmcm9tICcuL21vdmllTGlzdC5qcyc7XG5pbXBvcnQgTW92aWUgZnJvbSAnLi9tb3ZpZS5qcyc7XG5cbmNvbnN0IGdldFR2U2hvd3MgPSBhc3luYyAodXJsKSA9PiB7XG4gIGNvbnN0IGFsbE1vdmllcyA9IG5ldyBNb3ZpZUxpc3QoKTtcbiAgY29uc3QgbW92aWVzID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UpO1xuICBtb3ZpZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGFsbE1vdmllcy5wdXNoKFxuICAgICAgbmV3IE1vdmllKFxuICAgICAgICBlbGVtZW50LmlkLFxuICAgICAgICBlbGVtZW50Lm5hbWUsXG4gICAgICAgIGVsZW1lbnQudHlwZSxcbiAgICAgICAgZWxlbWVudC5sYW5ndWFnZSxcbiAgICAgICAgZWxlbWVudC5nZW5yZXNbMF0sXG4gICAgICAgIGVsZW1lbnQucmF0aW5nLmF2ZXJhZ2UsXG4gICAgICAgIGVsZW1lbnQuaW1hZ2UubWVkaXVtLFxuICAgICAgICBlbGVtZW50LnN1bW1hcnksXG4gICAgICApLFxuICAgICk7XG4gIH0pO1xuICByZXR1cm4gYWxsTW92aWVzO1xufTtcbmNvbnN0IGdldFR2U2hvdyA9IGFzeW5jICh1cmwpID0+IHtcbiAgY29uc3QgbW92aWVEYXRhID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UpO1xuICBjb25zdCByZXN1bHQgPSBuZXcgTW92aWUoXG4gICAgbW92aWVEYXRhLmlkLFxuICAgIG1vdmllRGF0YS5uYW1lLFxuICAgIG1vdmllRGF0YS50eXBlLFxuICAgIG1vdmllRGF0YS5sYW5ndWFnZSxcbiAgICBtb3ZpZURhdGEuZ2VucmVzWzBdLFxuICAgIG1vdmllRGF0YS5yYXRpbmcuYXZlcmFnZSxcbiAgICBtb3ZpZURhdGEuaW1hZ2UubWVkaXVtLFxuICAgIG1vdmllRGF0YS5zdW1tYXJ5LFxuICApO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgZ2V0bGlrZSA9IGFzeW5jICh1cmwpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5jb25zdCBsaWtlID0gYXN5bmMgKHVybCwgaWQpID0+IHtcbiAgYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaWQsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcbn07XG5jb25zdCBnZXRDb21tZW50ID0gYXN5bmMgKHVybCwgaWQpID0+IHtcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXJsfT9pdGVtX2lkPSR7aWR9YCk7XG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xuICAgIHJlc3BvbnNlID0gW107XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5jb25zdCBjb21tZW50ID0gYXN5bmMgKHVybCwgaXRlbUlkLCB1c2VybmFtZSwgY29tbWVudCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGl0ZW1JZCxcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgY29tbWVudCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRUdlNob3dzLFxuICBnZXRUdlNob3csXG4gIGdldGxpa2UsXG4gIGxpa2UsXG4gIGdldENvbW1lbnQsXG4gIGNvbW1lbnQsXG59O1xuIiwiY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsZXgtY29udGFpbmVyJyk7XG5cbmNvbnN0IFNob3dJdGVtVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGxhdGUgI3Nob3ctaXRlbS10ZW1wbGF0ZScpO1xuY29uc3QgU2hvd01vZGFsVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGxhdGUgI3Nob3ctbW9kYWwtdGVtcGxhdGUnKTtcblxuY29uc3QgYnVpbGRNb2RhbCA9IChtb3ZpZSkgPT4ge1xuICBjb25zdCBTaG93TW9kYWxFbGVtZW50ID0gU2hvd01vZGFsVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuXG4gIFNob3dNb2RhbEVsZW1lbnQuaWQgPSBgc2hvdy1tb2RhbC0ke21vdmllLmlkfWA7XG5cbiAgU2hvd01vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzcGFuLmNsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgU2hvd01vZGFsRWxlbWVudC5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWdFbGVtZW50LnNyYyA9IG1vdmllLmltYWdlO1xuICBpbWdFbGVtZW50LmFsdCA9IGAke21vdmllLnRpdGxlfSBQb3N0ZXJgO1xuXG4gIFNob3dNb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRldGFpbC1pbWcnKS5hcHBlbmRDaGlsZChpbWdFbGVtZW50KTtcblxuICBjb25zdCBkZXRhaWxUZXh0RWxlbWVudCA9IFNob3dNb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRldGFpbC10ZXh0Jyk7XG5cbiAgY29uc3QgdGl0bGVFbGVtZW50ID0gZGV0YWlsVGV4dEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUnKTtcbiAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gbW92aWUubmFtZTtcblxuICBjb25zdCBsYW5ndWFnZUVsZW1lbnQgPSBkZXRhaWxUZXh0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZ3VhZ2UnKTtcbiAgbGFuZ3VhZ2VFbGVtZW50LnRleHRDb250ZW50ID0gbW92aWUubGFuZ3VhZ2U7XG5cbiAgY29uc3QgZ2VucmVzRWxlbWVudCA9IGRldGFpbFRleHRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW5yZXMnKTtcbiAgZ2VucmVzRWxlbWVudC50ZXh0Q29udGVudCA9IG1vdmllLmdlbnJlcztcblxuICBjb25zdCByYXRpbmdFbGVtZW50ID0gZGV0YWlsVGV4dEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnJhdGluZycpO1xuICByYXRpbmdFbGVtZW50LnRleHRDb250ZW50ID0gbW92aWUucmF0aW5nO1xuXG4gIGNvbnN0IHR5cGVFbGVtZW50ID0gZGV0YWlsVGV4dEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnR5cGUnKTtcbiAgdHlwZUVsZW1lbnQuaW5uZXJIVE1MID0gbW92aWUudHlwZTtcblxuICBjb25zdCBzdW1tYXJ5RWxlbWVudCA9IGRldGFpbFRleHRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW1tYXJ5Jyk7XG4gIHN1bW1hcnlFbGVtZW50LmlubmVySFRNTCA9IG1vdmllLnN1bW1hcnk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKFNob3dNb2RhbEVsZW1lbnQpO1xufTtcblxuY29uc3QgYnVpbGRTaG93SXRlbUVsZW1lbnQgPSAobW92aWUpID0+IHtcbiAgY29uc3QgU2hvd0l0ZW1FbGVtZW50ID0gU2hvd0l0ZW1UZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgU2hvd0l0ZW1FbGVtZW50LmlkID0gYHNob3ctaXRlbS0ke21vdmllLmlkfWA7XG5cbiAgU2hvd0l0ZW1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYnVpbGRNb2RhbChtb3ZpZSk7XG4gIH0pO1xuXG4gIGNvbnN0IGltZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nRWxlbWVudC5zcmMgPSBtb3ZpZS5pbWFnZTtcbiAgaW1nRWxlbWVudC5hbHQgPSBgJHttb3ZpZS5uYW1lfSBQb3N0ZXJgO1xuXG4gIGNvbnN0IGltZ0NvbnRhaW5lckVsZW1lbnQgPSBTaG93SXRlbUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmltZy1jb250YWluZXInKTtcblxuICBpbWdDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xuXG4gIGNvbnN0IHRpdGxlRWxlbWVudCA9IFNob3dJdGVtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcbiAgdGl0bGVFbGVtZW50LmlubmVySFRNTCA9IG1vdmllLm5hbWU7XG5cbiAgY29uc3QgY29tbWVudEJ0bkVsZW1lbnQgPSBTaG93SXRlbUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtYnRuJyk7XG4gIGNvbW1lbnRCdG5FbGVtZW50LmRhdGFzZXQuaWQgPSBtb3ZpZS5pZDtcblxuICByZXR1cm4gU2hvd0l0ZW1FbGVtZW50O1xufTtcblxuY29uc3QgZGlzcGxheVR2U2hvd3MgPSBhc3luYyAobW92aWVzKSA9PiB7XG4gIGNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICBtb3ZpZXMuZm9yRWFjaCgobW92aWUpID0+IGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZFNob3dJdGVtRWxlbWVudChtb3ZpZSkpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHsgZGlzcGxheVR2U2hvd3MgfTtcbiIsImNsYXNzIE1vdmllIHtcbiAgY29uc3RydWN0b3IoaWQsIG5hbWUsIHR5cGUsIGxhbmd1YWdlLCBnZW5yZXMsIHJhdGluZywgaW1hZ2UsIHN1bW1hcnksIGxpa2VzKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgdGhpcy5nZW5yZXMgPSBnZW5yZXM7XG4gICAgdGhpcy5yYXRpbmcgPSByYXRpbmc7XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIHRoaXMuc3VtbWFyeSA9IHN1bW1hcnk7XG4gICAgdGhpcy5saWtlcyA9IGxpa2VzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllO1xuIiwiY2xhc3MgTW92aWVMaXN0IHtcbiAgY29uc3RydWN0b3IobGlzdCA9IFtdKSB7XG4gICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgfVxuXG4gIHB1c2gobW92aWUpIHtcbiAgICB0aGlzLmxpc3QucHVzaChtb3ZpZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9