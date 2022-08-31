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
___CSS_LOADER_EXPORT___.push([module.id, "/* stylelint-disable no-descending-specificity */\n.template {\n  display: none;\n}\n\n* {\n  box-sizing: border-box;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\n\nhtml {\n  margin: 0;\n  padding: 0;\n  max-width: 100%;\n  overflow-x: hidden;\n  scroll-behavior: smooth;\n}\n\na {\n  all: unset;\n}\n\nbody {\n  background-color: whitesmoke;\n  margin: 0;\n  padding: 0;\n}\nbody header {\n  display: flex;\n  position: fixed;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  background-color: white;\n  padding: 1rem 10%;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  right: 0;\n}\nbody header .logo {\n  font-family: Roboto, Arial, Helvetica, sans-serif;\n}\nbody header nav {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\nbody header nav .nav-item {\n  display: block;\n  transition: transform 0.25s ease-in-out;\n}\nbody header nav .nav-item:hover {\n  transform: scale(1.1);\n}\nbody main {\n  margin-top: 5rem;\n}\nbody main .flex-container {\n  margin: 0 10%;\n  display: grid;\n  text-align: center;\n  grid-template-columns: repeat(1, 1fr);\n  grid-template-rows: auto;\n  gap: 0.25rem;\n}\n@media (min-width: 480px) {\n  body main .flex-container {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 768px) {\n  body main .flex-container {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (min-width: 1024px) {\n  body main .flex-container {\n    grid-template-columns: repeat(5, 1fr);\n  }\n}\nbody main .flex-container .show-item {\n  grid-row: auto/span 1;\n  grid-column: auto/span 1;\n  position: relative;\n  cursor: pointer;\n}\nbody main .flex-container .show-item .img-container img {\n  width: 100%;\n  height: auto;\n  display: block;\n}\nbody main .flex-container .show-item .info-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: end;\n  padding: 0.5rem;\n  background: rgb(0, 0, 0);\n  background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(255, 255, 255, 0) 100%);\n}\nbody main .flex-container .show-item .info-container .title {\n  font-size: 2rem;\n  text-align: left;\n  color: white;\n}\nbody main .flex-container .show-item .info-container .reaction {\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\nbody main .flex-container .show-item .info-container .reaction button {\n  background: none;\n  border: unset;\n  cursor: pointer;\n  color: white;\n}\nbody main .flex-container .show-item .info-container .reaction button.comment-btn {\n  border: 1px solid whitesmoke;\n  border-radius: 5px;\n  padding: 0.25rem 0.75rem;\n}\nbody .show-modal {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 9999;\n}\nbody .show-modal .modal-content {\n  background-color: #fefefe;\n  width: calc(100% - 2rem);\n  height: calc(100% - 2rem);\n  position: relative;\n  overflow: auto;\n}\n@media (min-width: 768px) {\n  body .show-modal .modal-content {\n    width: 75%;\n    height: calc(100% - 5rem);\n  }\n}\nbody .show-modal .modal-content .close {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\nbody .show-modal .modal-content .close.close:hover, body .show-modal .modal-content .close.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\nbody .show-modal .modal-content .modal-detail {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto;\n}\n@media (min-width: 768px) {\n  body .show-modal .modal-content .modal-detail {\n    grid-template-columns: 40% 1fr;\n  }\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-img {\n  display: flex;\n  align-items: center;\n  grid-row: auto/span 1;\n  grid-column: auto/span 1;\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-img img {\n  display: block;\n  width: 100%;\n  height: auto;\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-text {\n  grid-row: auto/span 1;\n  grid-column: auto/span 1;\n  color: black;\n  padding: 50px;\n  font-size: 2vh;\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-comment {\n  grid-row: auto/span 1;\n  grid-column: 1/-1;\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-comment h2 {\n  text-align: center;\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-comment form.add-comment {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-areas: \"input\" \"text\" \"btn\";\n}\n@media (min-width: 768px) {\n  body .show-modal .modal-content .modal-detail .modal-detail-comment form.add-comment {\n    grid-template-columns: 1fr 10rem;\n    grid-template-areas: \"input btn\" \"text text\";\n  }\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-comment form.add-comment .form-add-name {\n  grid-area: input;\n  margin: 5px;\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-comment form.add-comment .form-add-comment {\n  grid-area: text;\n  margin: 5px;\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-comment form.add-comment .submit-comment-btn {\n  grid-area: btn;\n  margin: 5px;\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-comment .loading-coment-item {\n  width: 100%;\n  text-align: center;\n  padding: 1em;\n  font-size: 2rem;\n}\nbody .show-modal .modal-content .modal-detail .view-comment {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  padding: 5px;\n}\n@media (min-width: 768px) {\n  body .show-modal .modal-content .modal-detail .view-comment {\n    padding: 1rem;\n  }\n}\nbody .show-modal .modal-content .modal-detail .view-comment .modal-content-user-comment .user h4 {\n  padding: 0;\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: bold;\n}\nbody .show-modal .modal-content .modal-detail .view-comment .modal-content-user-comment .comment-content p {\n  margin: 0.25rem;\n  padding: 0;\n}\n@media (min-width: 768px) {\n  body .show-modal .modal-content .modal-detail .view-comment .modal-content-user-comment .comment-content p {\n    margin: 0.25rem 1rem;\n  }\n}\nbody footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  text-align: center;\n}\n@media (max-width: 768px) {\n  body .flex-container,\nbody .modal-detail {\n    flex-direction: column;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["/* stylelint-disable no-descending-specificity */\n@import \"https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:100,300,400\";\n\n.template {\n  display: none;\n}\n\n* {\n  box-sizing: border-box;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\n\nhtml {\n  margin: 0;\n  padding: 0;\n  max-width: 100%;\n  overflow-x: hidden;\n  scroll-behavior: smooth;\n}\n\na {\n  all: unset;\n}\n\nbody {\n  background-color: whitesmoke;\n  margin: 0;\n  padding: 0;\n\n  header {\n    display: flex;\n    position: fixed;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    background-color: white;\n    padding: 1rem 10%;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    right: 0;\n\n    .logo {\n      font-family: Roboto, Arial, Helvetica, sans-serif;\n    }\n\n    nav {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      gap: 1rem;\n\n      .nav-item {\n        display: block;\n        transition: transform 0.25s ease-in-out;\n\n        &:hover {\n          transform: scale(1.1);\n        }\n      }\n    }\n  }\n\n  main {\n    margin-top: 5rem;\n\n    .flex-container {\n      margin: 0 10%;\n      display: grid;\n      text-align: center;\n      grid-template-columns: repeat(1, 1fr);\n      grid-template-rows: auto;\n      gap: 0.25rem;\n\n      @media (min-width: 480px) {\n        & {\n          grid-template-columns: repeat(2, 1fr);\n        }\n      }\n\n      @media (min-width: 768px) {\n        & {\n          grid-template-columns: repeat(3, 1fr);\n        }\n      }\n\n      @media (min-width: 1024px) {\n        & {\n          grid-template-columns: repeat(5, 1fr);\n        }\n      }\n\n      .show-item {\n        grid-row: auto / span 1;\n        grid-column: auto / span 1;\n        position: relative;\n        cursor: pointer;\n\n        .img-container {\n          img {\n            width: 100%;\n            height: auto;\n            display: block;\n          }\n        }\n\n        .info-container {\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: 0;\n          right: 0;\n          display: flex;\n          flex-direction: column;\n          align-items: stretch;\n          justify-content: end;\n          padding: 0.5rem;\n          background: rgb(0 0 0);\n          background: linear-gradient(0deg, rgb(0 0 0 / 100%) 0%, rgb(255 255 255 / 0%) 100%);\n\n          .title {\n            font-size: 2rem;\n            text-align: left;\n            color: white;\n          }\n\n          .reaction {\n            font-size: 1.5rem;\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n\n            button {\n              background: none;\n              border: unset;\n              cursor: pointer;\n              color: white;\n\n              &.comment-btn {\n                border: 1px solid whitesmoke;\n                border-radius: 5px;\n                padding: 0.25rem 0.75rem;\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .show-modal {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: rgb(0 0 0);\n    background-color: rgb(0 0 0 / 40%);\n    z-index: 9999;\n\n    .modal-content {\n      background-color: #fefefe;\n      width: calc(100% - 2rem);\n      height: calc(100% - 2rem);\n      position: relative;\n      overflow: auto;\n\n      @media (min-width: 768px) {\n        & {\n          width: 75%;\n          height: calc(100% - 5rem);\n        }\n      }\n\n      .close {\n        position: absolute;\n        top: 1rem;\n        right: 1rem;\n        color: #aaa;\n        float: right;\n        font-size: 28px;\n        font-weight: bold;\n\n        &.close:hover,\n        &.close:focus {\n          color: black;\n          text-decoration: none;\n          cursor: pointer;\n        }\n      }\n\n      .modal-detail {\n        display: grid;\n        grid-template-columns: 1fr;\n        grid-template-rows: auto;\n\n        @media (min-width: 768px) {\n          & {\n            grid-template-columns: 40% 1fr;\n          }\n        }\n\n        .modal-detail-img {\n          display: flex;\n          align-items: center;\n          grid-row: auto / span 1;\n          grid-column: auto / span 1;\n\n          img {\n            display: block;\n            width: 100%;\n            height: auto;\n          }\n        }\n\n        .modal-detail-text {\n          grid-row: auto / span 1;\n          grid-column: auto / span 1;\n          color: black;\n          padding: 50px;\n          font-size: 2vh;\n        }\n\n        .modal-detail-comment {\n          grid-row: auto / span 1;\n          grid-column: 1 / -1;\n          display: flex;\n          flex-direction: column;\n          justify-content: stretch;\n\n          h2 {\n            text-align: center;\n          }\n\n          form.add-comment {\n            display: grid;\n            grid-template-columns: 1fr;\n            grid-template-areas:\n              \"input\"\n              \"text\"\n              \"btn\";\n\n            @media (min-width: 768px) {\n              & {\n                grid-template-columns: 1fr 10rem;\n                grid-template-areas:\n                  \"input btn\"\n                  \"text text\";\n              }\n            }\n\n            .form-add-name {\n              grid-area: input;\n              margin: 5px;\n            }\n\n            .form-add-comment {\n              grid-area: text;\n              margin: 5px;\n            }\n\n            .submit-comment-btn {\n              grid-area: btn;\n              margin: 5px;\n            }\n          }\n\n          .loading-coment-item {\n            width: 100%;\n            text-align: center;\n            padding: 1em;\n            font-size: 2rem;\n          }\n        }\n\n        .view-comment {\n          display: flex;\n          flex-direction: column;\n          justify-content: start;\n          padding: 5px;\n\n          @media (min-width: 768px) {\n            & {\n              padding: 1rem;\n            }\n          }\n\n          .modal-content-user-comment {\n            .user {\n              h4 {\n                padding: 0;\n                margin: 0;\n                font-size: 1.25rem;\n                font-weight: bold;\n              }\n            }\n\n            .comment-content {\n              p {\n                margin: 0.25rem;\n                padding: 0;\n\n                @media (min-width: 768px) {\n                  & {\n                    margin: 0.25rem 1rem;\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n  footer {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: rgba($color: #000, $alpha: 50%);\n    color: white;\n    text-align: center;\n  }\n\n  @media (max-width: 768px) {\n    .flex-container,\n    .modal-detail {\n      flex-direction: column;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
	"add-comment": "add-comment",
	"form-add-name": "form-add-name",
	"form-add-comment": "form-add-comment",
	"submit-comment-btn": "submit-comment-btn",
	"loading-coment-item": "loading-coment-item",
	"view-comment": "view-comment",
	"modal-content-user-comment": "modal-content-user-comment",
	"user": "user",
	"comment-content": "comment-content"
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
};

const init = async () => {
  initTemplate();
};

window.addEventListener('load', init);


/***/ }),

/***/ "./src/module/CommentList.js":
/*!***********************************!*\
  !*** ./src/module/CommentList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class CommentList {
  constructor(list = []) {
    this.List = list;
  }

  push(comment) {
    this.List.push(comment);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentList);

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
/* harmony import */ var _CommentList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommentList.js */ "./src/module/CommentList.js");
/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment.js */ "./src/module/comment.js");





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

const getComments = async (url, id) => {
  const result = new _CommentList_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
  try {
    const comments = await fetch(`${url}?item_id=${id}`).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('not okay response');
    });
    comments.forEach((c, index) => {
      result.push(new _comment_js__WEBPACK_IMPORTED_MODULE_3__["default"](index, c.username, c.comment));
    });
  } catch {
    return result;
  }

  return result;
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
  getComments,
  comment,
});


/***/ }),

/***/ "./src/module/comment.js":
/*!*******************************!*\
  !*** ./src/module/comment.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Comment {
  constructor(itemid, username, comment) {
    this.item_id = itemid;
    this.username = username;
    this.comment = comment;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);

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
/* harmony import */ var _apiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiService.js */ "./src/module/apiService.js");


const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Sff4TpvfhVNiDO6YpeWb/comments';

const container = document.querySelector('.flex-container');

const ShowItemTemplate = document.querySelector('.template #show-item-template');
const ShowModalTemplate = document.querySelector('.template #show-modal-template');
const modalContentUserCommentTemplate = document.querySelector('.template #modal-content-user-comment-template');

const buildDetailTextElement = (detailTextElement, movie) => {
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
};

const buildDetailcommentElement = (detailcommentElement, movie) => {
  const comentCounter = detailcommentElement.querySelector('.comment-counter');
  comentCounter.textContent = '( Loading... )';

  const comentList = detailcommentElement.querySelector('.view-comment');
  const LoadingdivElement = document.createElement('div');
  LoadingdivElement.classList.add('loading-coment-item');
  LoadingdivElement.textContent = '( Loading... )';

  const comentSubmitBtn = detailcommentElement.querySelector('.submit-comment-btn');
  comentSubmitBtn.disabled = true;

  _apiService_js__WEBPACK_IMPORTED_MODULE_0__["default"].getComments(commentUrl, movie.id).then((CommentList) => {
    comentList.innerHTML = '';
    comentSubmitBtn.disabled = false;
    comentCounter.textContent = `( ${CommentList.List.length} )`;
    CommentList.List.forEach((comment) => {
      const modalContentUserCommentElement = modalContentUserCommentTemplate.cloneNode(true);
      modalContentUserCommentElement.id = `modal-content-user-comment-${comment.item_id}`;

      const userName = modalContentUserCommentElement.querySelector('.user h4');
      userName.textContent = comment.username;

      const commentContent = modalContentUserCommentElement.querySelector('.comment-content p');
      commentContent.textContent = comment.comment;

      comentList.appendChild(modalContentUserCommentElement);
    });

    const commentForm = detailcommentElement.querySelector('form.add-comment');
    commentForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      const CommentEntries = Object.fromEntries(data.entries());

      await _apiService_js__WEBPACK_IMPORTED_MODULE_0__["default"].comment(
        commentUrl,
        movie.id,
        CommentEntries.name,
        CommentEntries.comment,
      );

      buildDetailcommentElement(detailcommentElement, movie);
    });
  });

  comentList.appendChild(LoadingdivElement);
};

const buildModal = (movie) => {
  const ShowModalElement = ShowModalTemplate.cloneNode(true);

  ShowModalElement.id = `show-modal-${movie.id}`;

  ShowModalElement.querySelector('span.close').addEventListener('click', () => {
    ShowModalElement.remove();
  });

  ShowModalElement.addEventListener('click', (e) => {
    if (e.target === ShowModalElement) ShowModalElement.remove();
    else e.stopPropagation();
  });

  const imgElement = document.createElement('img');
  imgElement.src = movie.image;
  imgElement.alt = `${movie.title} Poster`;

  ShowModalElement.querySelector('.modal-detail-img').appendChild(imgElement);

  const detailTextElement = ShowModalElement.querySelector('.modal-detail-text');
  buildDetailTextElement(detailTextElement, movie);

  const detailcommentElement = ShowModalElement.querySelector('.modal-detail-comment');
  buildDetailcommentElement(detailcommentElement, movie);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQ0FBb0MsU0FBUzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7O0FBRWxDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEVBQUUsZ0JBQWdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzVJbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDYnJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9zdHlsZS5zY3NzP2FkNjAiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlL0NvbW1lbnRMaXN0LmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlL2FwaVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGUvY29tbWVudC5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vc3JjL21vZHVsZS9kb21TZXJ2aWNlLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlL21vdmllLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlL21vdmllTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNzAwfFJvYm90bzoxMDAsMzAwLDQwMCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWRlc2NlbmRpbmctc3BlY2lmaWNpdHkgKi9cXG4udGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5hIHtcXG4gIGFsbDogdW5zZXQ7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmJvZHkgaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMXJlbSAxMCU7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5ib2R5IGhlYWRlciAubG9nbyB7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5IGhlYWRlciBuYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcbmJvZHkgaGVhZGVyIG5hdiAubmF2LWl0ZW0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1pbi1vdXQ7XFxufVxcbmJvZHkgaGVhZGVyIG5hdiAubmF2LWl0ZW06aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5ib2R5IG1haW4ge1xcbiAgbWFyZ2luLXRvcDogNXJlbTtcXG59XFxuYm9keSBtYWluIC5mbGV4LWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDAgMTAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICBnYXA6IDAuMjVyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xcbiAgYm9keSBtYWluIC5mbGV4LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgYm9keSBtYWluIC5mbGV4LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gIGJvZHkgbWFpbiAuZmxleC1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgfVxcbn1cXG5ib2R5IG1haW4gLmZsZXgtY29udGFpbmVyIC5zaG93LWl0ZW0ge1xcbiAgZ3JpZC1yb3c6IGF1dG8vc3BhbiAxO1xcbiAgZ3JpZC1jb2x1bW46IGF1dG8vc3BhbiAxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5ib2R5IG1haW4gLmZsZXgtY29udGFpbmVyIC5zaG93LWl0ZW0gLmltZy1jb250YWluZXIgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkgbWFpbiAuZmxleC1jb250YWluZXIgLnNob3ctaXRlbSAuaW5mby1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYigwLCAwLCAwKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcXG59XFxuYm9keSBtYWluIC5mbGV4LWNvbnRhaW5lciAuc2hvdy1pdGVtIC5pbmZvLWNvbnRhaW5lciAudGl0bGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuYm9keSBtYWluIC5mbGV4LWNvbnRhaW5lciAuc2hvdy1pdGVtIC5pbmZvLWNvbnRhaW5lciAucmVhY3Rpb24ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuYm9keSBtYWluIC5mbGV4LWNvbnRhaW5lciAuc2hvdy1pdGVtIC5pbmZvLWNvbnRhaW5lciAucmVhY3Rpb24gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IHVuc2V0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5ib2R5IG1haW4gLmZsZXgtY29udGFpbmVyIC5zaG93LWl0ZW0gLmluZm8tY29udGFpbmVyIC5yZWFjdGlvbiBidXR0b24uY29tbWVudC1idG4ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcXG59XFxuYm9keSAuc2hvdy1tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHotaW5kZXg6IDk5OTk7XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMnJlbSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICBib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1cmVtKTtcXG4gIH1cXG59XFxuYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCAuY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxcmVtO1xcbiAgcmlnaHQ6IDFyZW07XFxuICBjb2xvcjogI2FhYTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5jbG9zZS5jbG9zZTpob3ZlciwgYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCAuY2xvc2UuY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIGJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWRldGFpbCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDFmcjtcXG4gIH1cXG59XFxuYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtZGV0YWlsIC5tb2RhbC1kZXRhaWwtaW1nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1yb3c6IGF1dG8vc3BhbiAxO1xcbiAgZ3JpZC1jb2x1bW46IGF1dG8vc3BhbiAxO1xcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwgLm1vZGFsLWRldGFpbC1pbWcgaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWRldGFpbCAubW9kYWwtZGV0YWlsLXRleHQge1xcbiAgZ3JpZC1yb3c6IGF1dG8vc3BhbiAxO1xcbiAgZ3JpZC1jb2x1bW46IGF1dG8vc3BhbiAxO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogNTBweDtcXG4gIGZvbnQtc2l6ZTogMnZoO1xcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwgLm1vZGFsLWRldGFpbC1jb21tZW50IHtcXG4gIGdyaWQtcm93OiBhdXRvL3NwYW4gMTtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWRldGFpbCAubW9kYWwtZGV0YWlsLWNvbW1lbnQgaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwgLm1vZGFsLWRldGFpbC1jb21tZW50IGZvcm0uYWRkLWNvbW1lbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImlucHV0XFxcIiBcXFwidGV4dFxcXCIgXFxcImJ0blxcXCI7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtZGV0YWlsIC5tb2RhbC1kZXRhaWwtY29tbWVudCBmb3JtLmFkZC1jb21tZW50IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTByZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJpbnB1dCBidG5cXFwiIFxcXCJ0ZXh0IHRleHRcXFwiO1xcbiAgfVxcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwgLm1vZGFsLWRldGFpbC1jb21tZW50IGZvcm0uYWRkLWNvbW1lbnQgLmZvcm0tYWRkLW5hbWUge1xcbiAgZ3JpZC1hcmVhOiBpbnB1dDtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwgLm1vZGFsLWRldGFpbC1jb21tZW50IGZvcm0uYWRkLWNvbW1lbnQgLmZvcm0tYWRkLWNvbW1lbnQge1xcbiAgZ3JpZC1hcmVhOiB0ZXh0O1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWRldGFpbCAubW9kYWwtZGV0YWlsLWNvbW1lbnQgZm9ybS5hZGQtY29tbWVudCAuc3VibWl0LWNvbW1lbnQtYnRuIHtcXG4gIGdyaWQtYXJlYTogYnRuO1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWRldGFpbCAubW9kYWwtZGV0YWlsLWNvbW1lbnQgLmxvYWRpbmctY29tZW50LWl0ZW0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxZW07XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWRldGFpbCAudmlldy1jb21tZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICBib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwgLnZpZXctY29tbWVudCB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWRldGFpbCAudmlldy1jb21tZW50IC5tb2RhbC1jb250ZW50LXVzZXItY29tbWVudCAudXNlciBoNCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWRldGFpbCAudmlldy1jb21tZW50IC5tb2RhbC1jb250ZW50LXVzZXItY29tbWVudCAuY29tbWVudC1jb250ZW50IHAge1xcbiAgbWFyZ2luOiAwLjI1cmVtO1xcbiAgcGFkZGluZzogMDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICBib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwgLnZpZXctY29tbWVudCAubW9kYWwtY29udGVudC11c2VyLWNvbW1lbnQgLmNvbW1lbnQtY29udGVudCBwIHtcXG4gICAgbWFyZ2luOiAwLjI1cmVtIDFyZW07XFxuICB9XFxufVxcbmJvZHkgZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBib2R5IC5mbGV4LWNvbnRhaW5lcixcXG5ib2R5IC5tb2RhbC1kZXRhaWwge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnREFBQTtBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7RUFDQSxxREFBQTtBQUFGOztBQUdBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtBQUFGOztBQUdBO0VBQ0UsNEJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUFGO0FBRUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBQUo7QUFFSTtFQUNFLGlEQUFBO0FBQU47QUFHSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBRE47QUFHTTtFQUNFLGNBQUE7RUFDQSx1Q0FBQTtBQURSO0FBR1E7RUFDRSxxQkFBQTtBQURWO0FBT0U7RUFDRSxnQkFBQTtBQUxKO0FBT0k7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUFMTjtBQU9NO0VBQ0U7SUFDRSxxQ0FBQTtFQUxSO0FBQ0Y7QUFRTTtFQUNFO0lBQ0UscUNBQUE7RUFOUjtBQUNGO0FBU007RUFDRTtJQUNFLHFDQUFBO0VBUFI7QUFDRjtBQVVNO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVJSO0FBV1U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFUWjtBQWFRO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLCtFQUFBO0FBWFY7QUFhVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFYWjtBQWNVO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQVpaO0FBY1k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVpkO0FBY2M7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUFaaEI7QUFxQkU7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtBQW5CSjtBQXFCSTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQW5CTjtBQXFCTTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHlCQUFBO0VBbkJSO0FBQ0Y7QUFzQk07RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFwQlI7QUFzQlE7RUFFRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBckJWO0FBeUJNO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7QUF2QlI7QUF5QlE7RUFDRTtJQUNFLDhCQUFBO0VBdkJWO0FBQ0Y7QUEwQlE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FBeEJWO0FBMEJVO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBeEJaO0FBNEJRO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQTFCVjtBQTZCUTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQTNCVjtBQTZCVTtFQUNFLGtCQUFBO0FBM0JaO0FBOEJVO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0EseUNBQ0U7QUE3QmQ7QUFpQ1k7RUFDRTtJQUNFLGdDQUFBO0lBQ0EsNENBQ0U7RUFoQ2hCO0FBQ0Y7QUFvQ1k7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFsQ2Q7QUFxQ1k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQW5DZDtBQXNDWTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBcENkO0FBd0NVO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUF0Q1o7QUEwQ1E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUF4Q1Y7QUEwQ1U7RUFDRTtJQUNFLGFBQUE7RUF4Q1o7QUFDRjtBQTZDYztFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQTNDaEI7QUFnRGM7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQTlDaEI7QUFnRGdCO0VBQ0U7SUFDRSxvQkFBQTtFQTlDbEI7QUFDRjtBQXdERTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXRESjtBQXlERTtFQUNFOztJQUVFLHNCQUFBO0VBdkRKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZGVzY2VuZGluZy1zcGVjaWZpY2l0eSAqL1xcbkBpbXBvcnQgXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw3MDB8Um9ib3RvOjEwMCwzMDAsNDAwXFxcIjtcXG5cXG4udGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5hIHtcXG4gIGFsbDogdW5zZXQ7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICBoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMTAlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcblxcbiAgICAubG9nbyB7XFxuICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgfVxcblxcbiAgICBuYXYge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGdhcDogMXJlbTtcXG5cXG4gICAgICAubmF2LWl0ZW0ge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgbWFpbiB7XFxuICAgIG1hcmdpbi10b3A6IDVyZW07XFxuXFxuICAgIC5mbGV4LWNvbnRhaW5lciB7XFxuICAgICAgbWFyZ2luOiAwIDEwJTtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgICBnYXA6IDAuMjVyZW07XFxuXFxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XFxuICAgICAgICAmIHtcXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgICAgICAmIHtcXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgICAgICAgJiB7XFxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIC5zaG93LWl0ZW0ge1xcbiAgICAgICAgZ3JpZC1yb3c6IGF1dG8gLyBzcGFuIDE7XFxuICAgICAgICBncmlkLWNvbHVtbjogYXV0byAvIHNwYW4gMTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgIC5pbWctY29udGFpbmVyIHtcXG4gICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5pbmZvLWNvbnRhaW5lciB7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICBib3R0b206IDA7XFxuICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDAgMCAwKTtcXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYigwIDAgMCAvIDEwMCUpIDAlLCByZ2IoMjU1IDI1NSAyNTUgLyAwJSkgMTAwJSk7XFxuXFxuICAgICAgICAgIC50aXRsZSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIC5yZWFjdGlvbiB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgICAgICAgIGJvcmRlcjogdW5zZXQ7XFxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgICAgICAgICAgICAmLmNvbW1lbnQtYnRuIHtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAuc2hvdy1tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gNDAlKTtcXG4gICAgei1pbmRleDogOTk5OTtcXG5cXG4gICAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMnJlbSk7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xcblxcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAgICAgJiB7XFxuICAgICAgICAgIHdpZHRoOiA3NSU7XFxuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNXJlbSk7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIC5jbG9zZSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDFyZW07XFxuICAgICAgICByaWdodDogMXJlbTtcXG4gICAgICAgIGNvbG9yOiAjYWFhO1xcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgICAgICAmLmNsb3NlOmhvdmVyLFxcbiAgICAgICAgJi5jbG9zZTpmb2N1cyB7XFxuICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIC5tb2RhbC1kZXRhaWwge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcblxcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgICAgICAgICYge1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDFmcjtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1vZGFsLWRldGFpbC1pbWcge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBncmlkLXJvdzogYXV0byAvIHNwYW4gMTtcXG4gICAgICAgICAgZ3JpZC1jb2x1bW46IGF1dG8gLyBzcGFuIDE7XFxuXFxuICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubW9kYWwtZGV0YWlsLXRleHQge1xcbiAgICAgICAgICBncmlkLXJvdzogYXV0byAvIHNwYW4gMTtcXG4gICAgICAgICAgZ3JpZC1jb2x1bW46IGF1dG8gLyBzcGFuIDE7XFxuICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgcGFkZGluZzogNTBweDtcXG4gICAgICAgICAgZm9udC1zaXplOiAydmg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubW9kYWwtZGV0YWlsLWNvbW1lbnQge1xcbiAgICAgICAgICBncmlkLXJvdzogYXV0byAvIHNwYW4gMTtcXG4gICAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcblxcbiAgICAgICAgICBoMiB7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIGZvcm0uYWRkLWNvbW1lbnQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICAgICAgIFxcXCJpbnB1dFxcXCJcXG4gICAgICAgICAgICAgIFxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgXFxcImJ0blxcXCI7XFxuXFxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgICAgICAgICAgICAmIHtcXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTByZW07XFxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAgICAgICAgICAgXFxcImlucHV0IGJ0blxcXCJcXG4gICAgICAgICAgICAgICAgICBcXFwidGV4dCB0ZXh0XFxcIjtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmZvcm0tYWRkLW5hbWUge1xcbiAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBpbnB1dDtcXG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZm9ybS1hZGQtY29tbWVudCB7XFxuICAgICAgICAgICAgICBncmlkLWFyZWE6IHRleHQ7XFxuICAgICAgICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnN1Ym1pdC1jb21tZW50LWJ0biB7XFxuICAgICAgICAgICAgICBncmlkLWFyZWE6IGJ0bjtcXG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAubG9hZGluZy1jb21lbnQtaXRlbSB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC52aWV3LWNvbW1lbnQge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAgICAgICAgICYge1xcbiAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLm1vZGFsLWNvbnRlbnQtdXNlci1jb21tZW50IHtcXG4gICAgICAgICAgICAudXNlciB7XFxuICAgICAgICAgICAgICBoNCB7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmNvbW1lbnQtY29udGVudCB7XFxuICAgICAgICAgICAgICBwIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLjI1cmVtO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcblxcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgICAgICAgICAgICAgICAmIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMC4yNXJlbSAxcmVtO1xcbiAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMCwgJGFscGhhOiA1MCUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAuZmxleC1jb250YWluZXIsXFxuICAgIC5tb2RhbC1kZXRhaWwge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwidGVtcGxhdGVcIjogXCJ0ZW1wbGF0ZVwiLFxuXHRcImxvZ29cIjogXCJsb2dvXCIsXG5cdFwibmF2LWl0ZW1cIjogXCJuYXYtaXRlbVwiLFxuXHRcImZsZXgtY29udGFpbmVyXCI6IFwiZmxleC1jb250YWluZXJcIixcblx0XCJzaG93LWl0ZW1cIjogXCJzaG93LWl0ZW1cIixcblx0XCJpbWctY29udGFpbmVyXCI6IFwiaW1nLWNvbnRhaW5lclwiLFxuXHRcImluZm8tY29udGFpbmVyXCI6IFwiaW5mby1jb250YWluZXJcIixcblx0XCJ0aXRsZVwiOiBcInRpdGxlXCIsXG5cdFwicmVhY3Rpb25cIjogXCJyZWFjdGlvblwiLFxuXHRcImNvbW1lbnQtYnRuXCI6IFwiY29tbWVudC1idG5cIixcblx0XCJzaG93LW1vZGFsXCI6IFwic2hvdy1tb2RhbFwiLFxuXHRcIm1vZGFsLWNvbnRlbnRcIjogXCJtb2RhbC1jb250ZW50XCIsXG5cdFwiY2xvc2VcIjogXCJjbG9zZVwiLFxuXHRcIm1vZGFsLWRldGFpbFwiOiBcIm1vZGFsLWRldGFpbFwiLFxuXHRcIm1vZGFsLWRldGFpbC1pbWdcIjogXCJtb2RhbC1kZXRhaWwtaW1nXCIsXG5cdFwibW9kYWwtZGV0YWlsLXRleHRcIjogXCJtb2RhbC1kZXRhaWwtdGV4dFwiLFxuXHRcIm1vZGFsLWRldGFpbC1jb21tZW50XCI6IFwibW9kYWwtZGV0YWlsLWNvbW1lbnRcIixcblx0XCJhZGQtY29tbWVudFwiOiBcImFkZC1jb21tZW50XCIsXG5cdFwiZm9ybS1hZGQtbmFtZVwiOiBcImZvcm0tYWRkLW5hbWVcIixcblx0XCJmb3JtLWFkZC1jb21tZW50XCI6IFwiZm9ybS1hZGQtY29tbWVudFwiLFxuXHRcInN1Ym1pdC1jb21tZW50LWJ0blwiOiBcInN1Ym1pdC1jb21tZW50LWJ0blwiLFxuXHRcImxvYWRpbmctY29tZW50LWl0ZW1cIjogXCJsb2FkaW5nLWNvbWVudC1pdGVtXCIsXG5cdFwidmlldy1jb21tZW50XCI6IFwidmlldy1jb21tZW50XCIsXG5cdFwibW9kYWwtY29udGVudC11c2VyLWNvbW1lbnRcIjogXCJtb2RhbC1jb250ZW50LXVzZXItY29tbWVudFwiLFxuXHRcInVzZXJcIjogXCJ1c2VyXCIsXG5cdFwiY29tbWVudC1jb250ZW50XCI6IFwiY29tbWVudC1jb250ZW50XCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMF0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgYXBpU2VydmljZSBmcm9tICcuL21vZHVsZS9hcGlTZXJ2aWNlLmpzJztcbmltcG9ydCBkb21TZXJ2aWNlIGZyb20gJy4vbW9kdWxlL2RvbVNlcnZpY2UuanMnO1xuXG5jb25zdCBtb3ZpZXNVcmwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cyc7XG5cbmNvbnN0IGluaXRUZW1wbGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbW92aWVzID0gYXdhaXQgYXBpU2VydmljZS5nZXRUdlNob3dzKG1vdmllc1VybCk7XG4gIGF3YWl0IGRvbVNlcnZpY2UuZGlzcGxheVR2U2hvd3MobW92aWVzLmxpc3QpO1xufTtcblxuY29uc3QgaW5pdCA9IGFzeW5jICgpID0+IHtcbiAgaW5pdFRlbXBsYXRlKCk7XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGluaXQpO1xuIiwiY2xhc3MgQ29tbWVudExpc3Qge1xuICBjb25zdHJ1Y3RvcihsaXN0ID0gW10pIHtcbiAgICB0aGlzLkxpc3QgPSBsaXN0O1xuICB9XG5cbiAgcHVzaChjb21tZW50KSB7XG4gICAgdGhpcy5MaXN0LnB1c2goY29tbWVudCk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRMaXN0OyIsImltcG9ydCBNb3ZpZUxpc3QgZnJvbSAnLi9tb3ZpZUxpc3QuanMnO1xuaW1wb3J0IE1vdmllIGZyb20gJy4vbW92aWUuanMnO1xuaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gJy4vQ29tbWVudExpc3QuanMnO1xuaW1wb3J0IENvbW1lbnQgZnJvbSAnLi9jb21tZW50LmpzJztcblxuY29uc3QgZ2V0VHZTaG93cyA9IGFzeW5jICh1cmwpID0+IHtcbiAgY29uc3QgYWxsTW92aWVzID0gbmV3IE1vdmllTGlzdCgpO1xuICBjb25zdCBtb3ZpZXMgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZSk7XG4gIG1vdmllcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgYWxsTW92aWVzLnB1c2goXG4gICAgICBuZXcgTW92aWUoXG4gICAgICAgIGVsZW1lbnQuaWQsXG4gICAgICAgIGVsZW1lbnQubmFtZSxcbiAgICAgICAgZWxlbWVudC50eXBlLFxuICAgICAgICBlbGVtZW50Lmxhbmd1YWdlLFxuICAgICAgICBlbGVtZW50LmdlbnJlc1swXSxcbiAgICAgICAgZWxlbWVudC5yYXRpbmcuYXZlcmFnZSxcbiAgICAgICAgZWxlbWVudC5pbWFnZS5tZWRpdW0sXG4gICAgICAgIGVsZW1lbnQuc3VtbWFyeSxcbiAgICAgICksXG4gICAgKTtcbiAgfSk7XG4gIHJldHVybiBhbGxNb3ZpZXM7XG59O1xuY29uc3QgZ2V0VHZTaG93ID0gYXN5bmMgKHVybCkgPT4ge1xuICBjb25zdCBtb3ZpZURhdGEgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZSk7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBNb3ZpZShcbiAgICBtb3ZpZURhdGEuaWQsXG4gICAgbW92aWVEYXRhLm5hbWUsXG4gICAgbW92aWVEYXRhLnR5cGUsXG4gICAgbW92aWVEYXRhLmxhbmd1YWdlLFxuICAgIG1vdmllRGF0YS5nZW5yZXNbMF0sXG4gICAgbW92aWVEYXRhLnJhdGluZy5hdmVyYWdlLFxuICAgIG1vdmllRGF0YS5pbWFnZS5tZWRpdW0sXG4gICAgbW92aWVEYXRhLnN1bW1hcnksXG4gICk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBnZXRsaWtlID0gYXN5bmMgKHVybCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcbmNvbnN0IGxpa2UgPSBhc3luYyAodXJsLCBpZCkgPT4ge1xuICBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpZCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0pO1xufTtcblxuY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAodXJsLCBpZCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBuZXcgQ29tbWVudExpc3QoKTtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGZldGNoKGAke3VybH0/aXRlbV9pZD0ke2lkfWApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcignbm90IG9rYXkgcmVzcG9uc2UnKTtcbiAgICB9KTtcbiAgICBjb21tZW50cy5mb3JFYWNoKChjLCBpbmRleCkgPT4ge1xuICAgICAgcmVzdWx0LnB1c2gobmV3IENvbW1lbnQoaW5kZXgsIGMudXNlcm5hbWUsIGMuY29tbWVudCkpO1xuICAgIH0pO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGNvbW1lbnQgPSBhc3luYyAodXJsLCBpdGVtSWQsIHVzZXJuYW1lLCBjb21tZW50KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaXRlbUlkLFxuICAgICAgdXNlcm5hbWUsXG4gICAgICBjb21tZW50LFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiByZXNwb25zZS5zdGF0dXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldFR2U2hvd3MsXG4gIGdldFR2U2hvdyxcbiAgZ2V0bGlrZSxcbiAgbGlrZSxcbiAgZ2V0Q29tbWVudHMsXG4gIGNvbW1lbnQsXG59O1xuIiwiY2xhc3MgQ29tbWVudCB7XG4gIGNvbnN0cnVjdG9yKGl0ZW1pZCwgdXNlcm5hbWUsIGNvbW1lbnQpIHtcbiAgICB0aGlzLml0ZW1faWQgPSBpdGVtaWQ7XG4gICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgIHRoaXMuY29tbWVudCA9IGNvbW1lbnQ7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7IiwiaW1wb3J0IGFwaVNlcnZpY2UgZnJvbSAnLi9hcGlTZXJ2aWNlLmpzJztcblxuY29uc3QgY29tbWVudFVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9TZmY0VHB2ZmhWTmlETzZZcGVXYi9jb21tZW50cyc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGV4LWNvbnRhaW5lcicpO1xuXG5jb25zdCBTaG93SXRlbVRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlICNzaG93LWl0ZW0tdGVtcGxhdGUnKTtcbmNvbnN0IFNob3dNb2RhbFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlICNzaG93LW1vZGFsLXRlbXBsYXRlJyk7XG5jb25zdCBtb2RhbENvbnRlbnRVc2VyQ29tbWVudFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlICNtb2RhbC1jb250ZW50LXVzZXItY29tbWVudC10ZW1wbGF0ZScpO1xuXG5jb25zdCBidWlsZERldGFpbFRleHRFbGVtZW50ID0gKGRldGFpbFRleHRFbGVtZW50LCBtb3ZpZSkgPT4ge1xuICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkZXRhaWxUZXh0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpO1xuICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBtb3ZpZS5uYW1lO1xuXG4gIGNvbnN0IGxhbmd1YWdlRWxlbWVudCA9IGRldGFpbFRleHRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5ndWFnZScpO1xuICBsYW5ndWFnZUVsZW1lbnQudGV4dENvbnRlbnQgPSBtb3ZpZS5sYW5ndWFnZTtcblxuICBjb25zdCBnZW5yZXNFbGVtZW50ID0gZGV0YWlsVGV4dEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmdlbnJlcycpO1xuICBnZW5yZXNFbGVtZW50LnRleHRDb250ZW50ID0gbW92aWUuZ2VucmVzO1xuXG4gIGNvbnN0IHJhdGluZ0VsZW1lbnQgPSBkZXRhaWxUZXh0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucmF0aW5nJyk7XG4gIHJhdGluZ0VsZW1lbnQudGV4dENvbnRlbnQgPSBtb3ZpZS5yYXRpbmc7XG5cbiAgY29uc3QgdHlwZUVsZW1lbnQgPSBkZXRhaWxUZXh0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudHlwZScpO1xuICB0eXBlRWxlbWVudC5pbm5lckhUTUwgPSBtb3ZpZS50eXBlO1xuXG4gIGNvbnN0IHN1bW1hcnlFbGVtZW50ID0gZGV0YWlsVGV4dEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnN1bW1hcnknKTtcbiAgc3VtbWFyeUVsZW1lbnQuaW5uZXJIVE1MID0gbW92aWUuc3VtbWFyeTtcbn07XG5cbmNvbnN0IGJ1aWxkRGV0YWlsY29tbWVudEVsZW1lbnQgPSAoZGV0YWlsY29tbWVudEVsZW1lbnQsIG1vdmllKSA9PiB7XG4gIGNvbnN0IGNvbWVudENvdW50ZXIgPSBkZXRhaWxjb21tZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1jb3VudGVyJyk7XG4gIGNvbWVudENvdW50ZXIudGV4dENvbnRlbnQgPSAnKCBMb2FkaW5nLi4uICknO1xuXG4gIGNvbnN0IGNvbWVudExpc3QgPSBkZXRhaWxjb21tZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1jb21tZW50Jyk7XG4gIGNvbnN0IExvYWRpbmdkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIExvYWRpbmdkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmctY29tZW50LWl0ZW0nKTtcbiAgTG9hZGluZ2RpdkVsZW1lbnQudGV4dENvbnRlbnQgPSAnKCBMb2FkaW5nLi4uICknO1xuXG4gIGNvbnN0IGNvbWVudFN1Ym1pdEJ0biA9IGRldGFpbGNvbW1lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtY29tbWVudC1idG4nKTtcbiAgY29tZW50U3VibWl0QnRuLmRpc2FibGVkID0gdHJ1ZTtcblxuICBhcGlTZXJ2aWNlLmdldENvbW1lbnRzKGNvbW1lbnRVcmwsIG1vdmllLmlkKS50aGVuKChDb21tZW50TGlzdCkgPT4ge1xuICAgIGNvbWVudExpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgY29tZW50U3VibWl0QnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgY29tZW50Q291bnRlci50ZXh0Q29udGVudCA9IGAoICR7Q29tbWVudExpc3QuTGlzdC5sZW5ndGh9IClgO1xuICAgIENvbW1lbnRMaXN0Lkxpc3QuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgY29uc3QgbW9kYWxDb250ZW50VXNlckNvbW1lbnRFbGVtZW50ID0gbW9kYWxDb250ZW50VXNlckNvbW1lbnRUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBtb2RhbENvbnRlbnRVc2VyQ29tbWVudEVsZW1lbnQuaWQgPSBgbW9kYWwtY29udGVudC11c2VyLWNvbW1lbnQtJHtjb21tZW50Lml0ZW1faWR9YDtcblxuICAgICAgY29uc3QgdXNlck5hbWUgPSBtb2RhbENvbnRlbnRVc2VyQ29tbWVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXIgaDQnKTtcbiAgICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gY29tbWVudC51c2VybmFtZTtcblxuICAgICAgY29uc3QgY29tbWVudENvbnRlbnQgPSBtb2RhbENvbnRlbnRVc2VyQ29tbWVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtY29udGVudCBwJyk7XG4gICAgICBjb21tZW50Q29udGVudC50ZXh0Q29udGVudCA9IGNvbW1lbnQuY29tbWVudDtcblxuICAgICAgY29tZW50TGlzdC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnRVc2VyQ29tbWVudEVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29tbWVudEZvcm0gPSBkZXRhaWxjb21tZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtLmFkZC1jb21tZW50Jyk7XG4gICAgY29tbWVudEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xuICAgICAgY29uc3QgQ29tbWVudEVudHJpZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoZGF0YS5lbnRyaWVzKCkpO1xuXG4gICAgICBhd2FpdCBhcGlTZXJ2aWNlLmNvbW1lbnQoXG4gICAgICAgIGNvbW1lbnRVcmwsXG4gICAgICAgIG1vdmllLmlkLFxuICAgICAgICBDb21tZW50RW50cmllcy5uYW1lLFxuICAgICAgICBDb21tZW50RW50cmllcy5jb21tZW50LFxuICAgICAgKTtcblxuICAgICAgYnVpbGREZXRhaWxjb21tZW50RWxlbWVudChkZXRhaWxjb21tZW50RWxlbWVudCwgbW92aWUpO1xuICAgIH0pO1xuICB9KTtcblxuICBjb21lbnRMaXN0LmFwcGVuZENoaWxkKExvYWRpbmdkaXZFbGVtZW50KTtcbn07XG5cbmNvbnN0IGJ1aWxkTW9kYWwgPSAobW92aWUpID0+IHtcbiAgY29uc3QgU2hvd01vZGFsRWxlbWVudCA9IFNob3dNb2RhbFRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcblxuICBTaG93TW9kYWxFbGVtZW50LmlkID0gYHNob3ctbW9kYWwtJHttb3ZpZS5pZH1gO1xuXG4gIFNob3dNb2RhbEVsZW1lbnQucXVlcnlTZWxlY3Rvcignc3Bhbi5jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIFNob3dNb2RhbEVsZW1lbnQucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIFNob3dNb2RhbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gU2hvd01vZGFsRWxlbWVudCkgU2hvd01vZGFsRWxlbWVudC5yZW1vdmUoKTtcbiAgICBlbHNlIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGltZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nRWxlbWVudC5zcmMgPSBtb3ZpZS5pbWFnZTtcbiAgaW1nRWxlbWVudC5hbHQgPSBgJHttb3ZpZS50aXRsZX0gUG9zdGVyYDtcblxuICBTaG93TW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kZXRhaWwtaW1nJykuYXBwZW5kQ2hpbGQoaW1nRWxlbWVudCk7XG5cbiAgY29uc3QgZGV0YWlsVGV4dEVsZW1lbnQgPSBTaG93TW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kZXRhaWwtdGV4dCcpO1xuICBidWlsZERldGFpbFRleHRFbGVtZW50KGRldGFpbFRleHRFbGVtZW50LCBtb3ZpZSk7XG5cbiAgY29uc3QgZGV0YWlsY29tbWVudEVsZW1lbnQgPSBTaG93TW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kZXRhaWwtY29tbWVudCcpO1xuICBidWlsZERldGFpbGNvbW1lbnRFbGVtZW50KGRldGFpbGNvbW1lbnRFbGVtZW50LCBtb3ZpZSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKFNob3dNb2RhbEVsZW1lbnQpO1xufTtcblxuY29uc3QgYnVpbGRTaG93SXRlbUVsZW1lbnQgPSAobW92aWUpID0+IHtcbiAgY29uc3QgU2hvd0l0ZW1FbGVtZW50ID0gU2hvd0l0ZW1UZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgU2hvd0l0ZW1FbGVtZW50LmlkID0gYHNob3ctaXRlbS0ke21vdmllLmlkfWA7XG5cbiAgU2hvd0l0ZW1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYnVpbGRNb2RhbChtb3ZpZSk7XG4gIH0pO1xuXG4gIGNvbnN0IGltZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nRWxlbWVudC5zcmMgPSBtb3ZpZS5pbWFnZTtcbiAgaW1nRWxlbWVudC5hbHQgPSBgJHttb3ZpZS5uYW1lfSBQb3N0ZXJgO1xuXG4gIGNvbnN0IGltZ0NvbnRhaW5lckVsZW1lbnQgPSBTaG93SXRlbUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmltZy1jb250YWluZXInKTtcblxuICBpbWdDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xuXG4gIGNvbnN0IHRpdGxlRWxlbWVudCA9IFNob3dJdGVtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcbiAgdGl0bGVFbGVtZW50LmlubmVySFRNTCA9IG1vdmllLm5hbWU7XG5cbiAgY29uc3QgY29tbWVudEJ0bkVsZW1lbnQgPSBTaG93SXRlbUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtYnRuJyk7XG4gIGNvbW1lbnRCdG5FbGVtZW50LmRhdGFzZXQuaWQgPSBtb3ZpZS5pZDtcblxuICByZXR1cm4gU2hvd0l0ZW1FbGVtZW50O1xufTtcblxuY29uc3QgZGlzcGxheVR2U2hvd3MgPSBhc3luYyAobW92aWVzKSA9PiB7XG4gIGNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICBtb3ZpZXMuZm9yRWFjaCgobW92aWUpID0+IGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZFNob3dJdGVtRWxlbWVudChtb3ZpZSkpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHsgZGlzcGxheVR2U2hvd3MgfTtcbiIsImNsYXNzIE1vdmllIHtcbiAgY29uc3RydWN0b3IoaWQsIG5hbWUsIHR5cGUsIGxhbmd1YWdlLCBnZW5yZXMsIHJhdGluZywgaW1hZ2UsIHN1bW1hcnkpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcbiAgICB0aGlzLmdlbnJlcyA9IGdlbnJlcztcbiAgICB0aGlzLnJhdGluZyA9IHJhdGluZztcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgdGhpcy5zdW1tYXJ5ID0gc3VtbWFyeTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZTtcbiIsImNsYXNzIE1vdmllTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGxpc3QgPSBbXSkge1xuICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gIH1cblxuICBwdXNoKG1vdmllKSB7XG4gICAgdGhpcy5saXN0LnB1c2gobW92aWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==