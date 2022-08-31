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
  constructor(id, name, type, language, genres, rating, image, summary) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.language = language;
    this.genres = genres;
    this.rating = rating;
    this.image = image;
    this.summary = summary;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUg7QUFDQTtBQUNBLHNCQUFzQixZQUFZOztBQUVsQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxFQUFFLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMzRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2JyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvc3R5bGUuc2Nzcz9hZDYwIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vc3JjL21vZHVsZS9hcGlTZXJ2aWNlLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlL2RvbVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGUvbW92aWUuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGUvbW92aWVMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw3MDB8Um9ib3RvOjEwMCwzMDAsNDAwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZGVzY2VuZGluZy1zcGVjaWZpY2l0eSAqL1xcbi50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmEge1xcbiAgYWxsOiB1bnNldDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuYm9keSBoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxcmVtIDEwJTtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcbmJvZHkgaGVhZGVyIC5sb2dvIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHkgaGVhZGVyIG5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuYm9keSBoZWFkZXIgbmF2IC5uYXYtaXRlbSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuYm9keSBoZWFkZXIgbmF2IC5uYXYtaXRlbTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbmJvZHkgbWFpbiB7XFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcbn1cXG5ib2R5IG1haW4gLmZsZXgtY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCAxMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gIGdhcDogMC4yNXJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XFxuICBib2R5IG1haW4gLmZsZXgtY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICBib2R5IG1haW4gLmZsZXgtY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgYm9keSBtYWluIC5mbGV4LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICB9XFxufVxcbmJvZHkgbWFpbiAuZmxleC1jb250YWluZXIgLnNob3ctaXRlbSB7XFxuICBncmlkLXJvdzogYXV0by9zcGFuIDE7XFxuICBncmlkLWNvbHVtbjogYXV0by9zcGFuIDE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmJvZHkgbWFpbiAuZmxleC1jb250YWluZXIgLnNob3ctaXRlbSAuaW1nLWNvbnRhaW5lciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSBtYWluIC5mbGV4LWNvbnRhaW5lciAuc2hvdy1pdGVtIC5pbmZvLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiKDAsIDAsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xcbn1cXG5ib2R5IG1haW4gLmZsZXgtY29udGFpbmVyIC5zaG93LWl0ZW0gLmluZm8tY29udGFpbmVyIC50aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5ib2R5IG1haW4gLmZsZXgtY29udGFpbmVyIC5zaG93LWl0ZW0gLmluZm8tY29udGFpbmVyIC5yZWFjdGlvbiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5ib2R5IG1haW4gLmZsZXgtY29udGFpbmVyIC5zaG93LWl0ZW0gLmluZm8tY29udGFpbmVyIC5yZWFjdGlvbiBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogdW5zZXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbmJvZHkgbWFpbiAuZmxleC1jb250YWluZXIgLnNob3ctaXRlbSAuaW5mby1jb250YWluZXIgLnJlYWN0aW9uIGJ1dHRvbi5jb21tZW50LWJ0biB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xcbn1cXG5ib2R5IC5zaG93LW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAycmVtKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIGJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDVyZW0pO1xcbiAgfVxcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDFyZW07XFxuICByaWdodDogMXJlbTtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLmNsb3NlLmNsb3NlOmhvdmVyLCBib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5jbG9zZS5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWRldGFpbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtZGV0YWlsIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgMWZyO1xcbiAgfVxcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwgLm1vZGFsLWRldGFpbC1pbWcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXJvdzogYXV0by9zcGFuIDE7XFxuICBncmlkLWNvbHVtbjogYXV0by9zcGFuIDE7XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWRldGFpbCAubW9kYWwtZGV0YWlsLWltZyBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtZGV0YWlsIC5tb2RhbC1kZXRhaWwtdGV4dCB7XFxuICBncmlkLXJvdzogYXV0by9zcGFuIDE7XFxuICBncmlkLWNvbHVtbjogYXV0by9zcGFuIDE7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgZm9udC1zaXplOiAydmg7XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWRldGFpbCAubW9kYWwtZGV0YWlsLWNvbW1lbnQge1xcbiAgZ3JpZC1yb3c6IGF1dG8vc3BhbiAxO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWRldGFpbCAubW9kYWwtZGV0YWlsLWNvbW1lbnQgLmJveCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnREFBQTtBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7RUFDQSxxREFBQTtBQUFGOztBQUdBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtBQUFGOztBQUdBO0VBQ0UsNEJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUFGO0FBRUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBQUo7QUFFSTtFQUNFLGlEQUFBO0FBQU47QUFHSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBRE47QUFHTTtFQUNFLGNBQUE7RUFDQSx1Q0FBQTtBQURSO0FBR1E7RUFDRSxxQkFBQTtBQURWO0FBT0U7RUFDRSxnQkFBQTtBQUxKO0FBT0k7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUFMTjtBQU9NO0VBQ0U7SUFDRSxxQ0FBQTtFQUxSO0FBQ0Y7QUFRTTtFQUNFO0lBQ0UscUNBQUE7RUFOUjtBQUNGO0FBU007RUFDRTtJQUNFLHFDQUFBO0VBUFI7QUFDRjtBQVVNO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVJSO0FBV1U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFUWjtBQWFRO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLCtFQUFBO0FBWFY7QUFhVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFYWjtBQWNVO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQVpaO0FBY1k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVpkO0FBY2M7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUFaaEI7QUFxQkU7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtBQW5CSjtBQXFCSTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQW5CTjtBQXFCTTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHlCQUFBO0VBbkJSO0FBQ0Y7QUFzQk07RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFwQlI7QUFzQlE7RUFFRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBckJWO0FBeUJNO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7QUF2QlI7QUF5QlE7RUFDRTtJQUNFLDhCQUFBO0VBdkJWO0FBQ0Y7QUEwQlE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FBeEJWO0FBMEJVO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBeEJaO0FBNEJRO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQTFCVjtBQTZCUTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUEzQlY7QUE2QlU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQTNCWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBuby1kZXNjZW5kaW5nLXNwZWNpZmljaXR5ICovXFxuQGltcG9ydCBcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDcwMHxSb2JvdG86MTAwLDMwMCw0MDBcXFwiO1xcblxcbi50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmEge1xcbiAgYWxsOiB1bnNldDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIGhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMXJlbSAxMCU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuXFxuICAgIC5sb2dvIHtcXG4gICAgICBmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB9XFxuXFxuICAgIG5hdiB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZ2FwOiAxcmVtO1xcblxcbiAgICAgIC5uYXYtaXRlbSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLWluLW91dDtcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICBtYWluIHtcXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcXG5cXG4gICAgLmZsZXgtY29udGFpbmVyIHtcXG4gICAgICBtYXJnaW46IDAgMTAlO1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICAgIGdhcDogMC4yNXJlbTtcXG5cXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcXG4gICAgICAgICYge1xcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgICAgICYge1xcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAgICAgICAmIHtcXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgLnNob3ctaXRlbSB7XFxuICAgICAgICBncmlkLXJvdzogYXV0byAvIHNwYW4gMTtcXG4gICAgICAgIGdyaWQtY29sdW1uOiBhdXRvIC8gc3BhbiAxO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgLmltZy1jb250YWluZXIge1xcbiAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmluZm8tY29udGFpbmVyIHtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCAwIDApO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiKDAgMCAwIC8gMTAwJSkgMCUsIHJnYigyNTUgMjU1IDI1NSAvIDAlKSAxMDAlKTtcXG5cXG4gICAgICAgICAgLnRpdGxlIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLnJlYWN0aW9uIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICAgICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgICAgICAgYm9yZGVyOiB1bnNldDtcXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgICAgICAgICAgICYuY29tbWVudC1idG4ge1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5zaG93LW1vZGFsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA0MCUpO1xcbiAgICB6LWluZGV4OiA5OTk5O1xcblxcbiAgICAubW9kYWwtY29udGVudCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XFxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAycmVtKTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuXFxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgICAgICAmIHtcXG4gICAgICAgICAgd2lkdGg6IDc1JTtcXG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1cmVtKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgLmNsb3NlIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMXJlbTtcXG4gICAgICAgIHJpZ2h0OiAxcmVtO1xcbiAgICAgICAgY29sb3I6ICNhYWE7XFxuICAgICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgICBmb250LXNpemU6IDI4cHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gICAgICAgICYuY2xvc2U6aG92ZXIsXFxuICAgICAgICAmLmNsb3NlOmZvY3VzIHtcXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgLm1vZGFsLWRldGFpbCB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuXFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgICAgICAgJiB7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgMWZyO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubW9kYWwtZGV0YWlsLWltZyB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGdyaWQtcm93OiBhdXRvIC8gc3BhbiAxO1xcbiAgICAgICAgICBncmlkLWNvbHVtbjogYXV0byAvIHNwYW4gMTtcXG5cXG4gICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tb2RhbC1kZXRhaWwtdGV4dCB7XFxuICAgICAgICAgIGdyaWQtcm93OiBhdXRvIC8gc3BhbiAxO1xcbiAgICAgICAgICBncmlkLWNvbHVtbjogYXV0byAvIHNwYW4gMTtcXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDJ2aDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tb2RhbC1kZXRhaWwtY29tbWVudCB7XFxuICAgICAgICAgIGdyaWQtcm93OiBhdXRvIC8gc3BhbiAxO1xcbiAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcXG5cXG4gICAgICAgICAgLmJveCB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAwcHg7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwidGVtcGxhdGVcIjogXCJ0ZW1wbGF0ZVwiLFxuXHRcImxvZ29cIjogXCJsb2dvXCIsXG5cdFwibmF2LWl0ZW1cIjogXCJuYXYtaXRlbVwiLFxuXHRcImZsZXgtY29udGFpbmVyXCI6IFwiZmxleC1jb250YWluZXJcIixcblx0XCJzaG93LWl0ZW1cIjogXCJzaG93LWl0ZW1cIixcblx0XCJpbWctY29udGFpbmVyXCI6IFwiaW1nLWNvbnRhaW5lclwiLFxuXHRcImluZm8tY29udGFpbmVyXCI6IFwiaW5mby1jb250YWluZXJcIixcblx0XCJ0aXRsZVwiOiBcInRpdGxlXCIsXG5cdFwicmVhY3Rpb25cIjogXCJyZWFjdGlvblwiLFxuXHRcImNvbW1lbnQtYnRuXCI6IFwiY29tbWVudC1idG5cIixcblx0XCJzaG93LW1vZGFsXCI6IFwic2hvdy1tb2RhbFwiLFxuXHRcIm1vZGFsLWNvbnRlbnRcIjogXCJtb2RhbC1jb250ZW50XCIsXG5cdFwiY2xvc2VcIjogXCJjbG9zZVwiLFxuXHRcIm1vZGFsLWRldGFpbFwiOiBcIm1vZGFsLWRldGFpbFwiLFxuXHRcIm1vZGFsLWRldGFpbC1pbWdcIjogXCJtb2RhbC1kZXRhaWwtaW1nXCIsXG5cdFwibW9kYWwtZGV0YWlsLXRleHRcIjogXCJtb2RhbC1kZXRhaWwtdGV4dFwiLFxuXHRcIm1vZGFsLWRldGFpbC1jb21tZW50XCI6IFwibW9kYWwtZGV0YWlsLWNvbW1lbnRcIixcblx0XCJib3hcIjogXCJib3hcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBhcGlTZXJ2aWNlIGZyb20gJy4vbW9kdWxlL2FwaVNlcnZpY2UuanMnO1xuaW1wb3J0IGRvbVNlcnZpY2UgZnJvbSAnLi9tb2R1bGUvZG9tU2VydmljZS5qcyc7XG5cbmNvbnN0IG1vdmllc1VybCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzJztcblxuY29uc3QgaW5pdFRlbXBsYXRlID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBtb3ZpZXMgPSBhd2FpdCBhcGlTZXJ2aWNlLmdldFR2U2hvd3MobW92aWVzVXJsKTtcbiAgYXdhaXQgZG9tU2VydmljZS5kaXNwbGF5VHZTaG93cyhtb3ZpZXMubGlzdCk7XG4gIGRvbVNlcnZpY2UuYWRkTW9kYWwoKTtcbn07XG5cbmNvbnN0IGluaXQgPSBhc3luYyAoKSA9PiB7XG4gIGluaXRUZW1wbGF0ZSgpO1xufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbml0KTtcbiIsImltcG9ydCBNb3ZpZUxpc3QgZnJvbSAnLi9tb3ZpZUxpc3QuanMnO1xuaW1wb3J0IE1vdmllIGZyb20gJy4vbW92aWUuanMnO1xuXG5jb25zdCBnZXRUdlNob3dzID0gYXN5bmMgKHVybCkgPT4ge1xuICBjb25zdCBhbGxNb3ZpZXMgPSBuZXcgTW92aWVMaXN0KCk7XG4gIGNvbnN0IG1vdmllcyA9IGF3YWl0IGZldGNoKHVybClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlKTtcbiAgbW92aWVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBhbGxNb3ZpZXMucHVzaChcbiAgICAgIG5ldyBNb3ZpZShcbiAgICAgICAgZWxlbWVudC5pZCxcbiAgICAgICAgZWxlbWVudC5uYW1lLFxuICAgICAgICBlbGVtZW50LnR5cGUsXG4gICAgICAgIGVsZW1lbnQubGFuZ3VhZ2UsXG4gICAgICAgIGVsZW1lbnQuZ2VucmVzWzBdLFxuICAgICAgICBlbGVtZW50LnJhdGluZy5hdmVyYWdlLFxuICAgICAgICBlbGVtZW50LmltYWdlLm1lZGl1bSxcbiAgICAgICAgZWxlbWVudC5zdW1tYXJ5LFxuICAgICAgKSxcbiAgICApO1xuICB9KTtcbiAgcmV0dXJuIGFsbE1vdmllcztcbn07XG5jb25zdCBnZXRUdlNob3cgPSBhc3luYyAodXJsKSA9PiB7XG4gIGNvbnN0IG1vdmllRGF0YSA9IGF3YWl0IGZldGNoKHVybClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlKTtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IE1vdmllKFxuICAgIG1vdmllRGF0YS5pZCxcbiAgICBtb3ZpZURhdGEubmFtZSxcbiAgICBtb3ZpZURhdGEudHlwZSxcbiAgICBtb3ZpZURhdGEubGFuZ3VhZ2UsXG4gICAgbW92aWVEYXRhLmdlbnJlc1swXSxcbiAgICBtb3ZpZURhdGEucmF0aW5nLmF2ZXJhZ2UsXG4gICAgbW92aWVEYXRhLmltYWdlLm1lZGl1bSxcbiAgICBtb3ZpZURhdGEuc3VtbWFyeSxcbiAgKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGdldGxpa2UgPSBhc3luYyAodXJsKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuY29uc3QgbGlrZSA9IGFzeW5jICh1cmwsIGlkKSA9PiB7XG4gIGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGlkLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSk7XG59O1xuY29uc3QgZ2V0Q29tbWVudCA9IGFzeW5jICh1cmwsIGlkKSA9PiB7XG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VybH0/aXRlbV9pZD0ke2lkfWApO1xuICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcbiAgICByZXNwb25zZSA9IFtdO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuY29uc3QgY29tbWVudCA9IGFzeW5jICh1cmwsIGl0ZW1JZCwgdXNlcm5hbWUsIGNvbW1lbnQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpdGVtSWQsXG4gICAgICB1c2VybmFtZSxcbiAgICAgIGNvbW1lbnQsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0VHZTaG93cyxcbiAgZ2V0VHZTaG93LFxuICBnZXRsaWtlLFxuICBsaWtlLFxuICBnZXRDb21tZW50LFxuICBjb21tZW50LFxufTtcbiIsImNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGV4LWNvbnRhaW5lcicpO1xuXG5jb25zdCBTaG93SXRlbVRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlICNzaG93LWl0ZW0tdGVtcGxhdGUnKTtcbmNvbnN0IFNob3dNb2RhbFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlICNzaG93LW1vZGFsLXRlbXBsYXRlJyk7XG5cbmNvbnN0IGJ1aWxkTW9kYWwgPSAobW92aWUpID0+IHtcbiAgY29uc3QgU2hvd01vZGFsRWxlbWVudCA9IFNob3dNb2RhbFRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcblxuICBTaG93TW9kYWxFbGVtZW50LmlkID0gYHNob3ctbW9kYWwtJHttb3ZpZS5pZH1gO1xuXG4gIFNob3dNb2RhbEVsZW1lbnQucXVlcnlTZWxlY3Rvcignc3Bhbi5jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIFNob3dNb2RhbEVsZW1lbnQucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGltZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nRWxlbWVudC5zcmMgPSBtb3ZpZS5pbWFnZTtcbiAgaW1nRWxlbWVudC5hbHQgPSBgJHttb3ZpZS50aXRsZX0gUG9zdGVyYDtcblxuICBTaG93TW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kZXRhaWwtaW1nJykuYXBwZW5kQ2hpbGQoaW1nRWxlbWVudCk7XG5cbiAgY29uc3QgZGV0YWlsVGV4dEVsZW1lbnQgPSBTaG93TW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kZXRhaWwtdGV4dCcpO1xuXG4gIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRldGFpbFRleHRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJyk7XG4gIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IG1vdmllLm5hbWU7XG5cbiAgY29uc3QgbGFuZ3VhZ2VFbGVtZW50ID0gZGV0YWlsVGV4dEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmd1YWdlJyk7XG4gIGxhbmd1YWdlRWxlbWVudC50ZXh0Q29udGVudCA9IG1vdmllLmxhbmd1YWdlO1xuXG4gIGNvbnN0IGdlbnJlc0VsZW1lbnQgPSBkZXRhaWxUZXh0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ2VucmVzJyk7XG4gIGdlbnJlc0VsZW1lbnQudGV4dENvbnRlbnQgPSBtb3ZpZS5nZW5yZXM7XG5cbiAgY29uc3QgcmF0aW5nRWxlbWVudCA9IGRldGFpbFRleHRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYXRpbmcnKTtcbiAgcmF0aW5nRWxlbWVudC50ZXh0Q29udGVudCA9IG1vdmllLnJhdGluZztcblxuICBjb25zdCB0eXBlRWxlbWVudCA9IGRldGFpbFRleHRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50eXBlJyk7XG4gIHR5cGVFbGVtZW50LmlubmVySFRNTCA9IG1vdmllLnR5cGU7XG5cbiAgY29uc3Qgc3VtbWFyeUVsZW1lbnQgPSBkZXRhaWxUZXh0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc3VtbWFyeScpO1xuICBzdW1tYXJ5RWxlbWVudC5pbm5lckhUTUwgPSBtb3ZpZS5zdW1tYXJ5O1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChTaG93TW9kYWxFbGVtZW50KTtcbn07XG5cbmNvbnN0IGJ1aWxkU2hvd0l0ZW1FbGVtZW50ID0gKG1vdmllKSA9PiB7XG4gIGNvbnN0IFNob3dJdGVtRWxlbWVudCA9IFNob3dJdGVtVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuXG4gIFNob3dJdGVtRWxlbWVudC5pZCA9IGBzaG93LWl0ZW0tJHttb3ZpZS5pZH1gO1xuXG4gIFNob3dJdGVtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGJ1aWxkTW9kYWwobW92aWUpO1xuICB9KTtcblxuICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZ0VsZW1lbnQuc3JjID0gbW92aWUuaW1hZ2U7XG4gIGltZ0VsZW1lbnQuYWx0ID0gYCR7bW92aWUubmFtZX0gUG9zdGVyYDtcblxuICBjb25zdCBpbWdDb250YWluZXJFbGVtZW50ID0gU2hvd0l0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctY29udGFpbmVyJyk7XG5cbiAgaW1nQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChpbWdFbGVtZW50KTtcblxuICBjb25zdCB0aXRsZUVsZW1lbnQgPSBTaG93SXRlbUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG4gIHRpdGxlRWxlbWVudC5pbm5lckhUTUwgPSBtb3ZpZS5uYW1lO1xuXG4gIGNvbnN0IGNvbW1lbnRCdG5FbGVtZW50ID0gU2hvd0l0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWJ0bicpO1xuICBjb21tZW50QnRuRWxlbWVudC5kYXRhc2V0LmlkID0gbW92aWUuaWQ7XG5cbiAgcmV0dXJuIFNob3dJdGVtRWxlbWVudDtcbn07XG5cbmNvbnN0IGRpc3BsYXlUdlNob3dzID0gYXN5bmMgKG1vdmllcykgPT4ge1xuICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgbW92aWVzLmZvckVhY2goKG1vdmllKSA9PiBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRTaG93SXRlbUVsZW1lbnQobW92aWUpKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IGRpc3BsYXlUdlNob3dzIH07XG4iLCJjbGFzcyBNb3ZpZSB7XG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCB0eXBlLCBsYW5ndWFnZSwgZ2VucmVzLCByYXRpbmcsIGltYWdlLCBzdW1tYXJ5KSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgdGhpcy5nZW5yZXMgPSBnZW5yZXM7XG4gICAgdGhpcy5yYXRpbmcgPSByYXRpbmc7XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIHRoaXMuc3VtbWFyeSA9IHN1bW1hcnk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWU7XG4iLCJjbGFzcyBNb3ZpZUxpc3Qge1xuICBjb25zdHJ1Y3RvcihsaXN0ID0gW10pIHtcbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICB9XG5cbiAgcHVzaChtb3ZpZSkge1xuICAgIHRoaXMubGlzdC5wdXNoKG1vdmllKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3Q7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=