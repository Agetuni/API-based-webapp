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
___CSS_LOADER_EXPORT___.push([module.id, "/* stylelint-disable no-descending-specificity */\n.template {\n  display: none;\n}\n\n* {\n  box-sizing: border-box;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\n\nhtml {\n  margin: 0;\n  padding: 0;\n  max-width: 100%;\n  overflow-x: hidden;\n  scroll-behavior: smooth;\n}\n\na {\n  all: unset;\n}\n\nbody {\n  background-color: whitesmoke;\n  margin: 0;\n  padding: 0;\n  /*\n  .show-modal {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: rgb(0 0 0);\n    background-color: rgb(0 0 0 / 40%);\n    z-index: 9999;\n\n    .modal-content {\n      background-color: #fefefe;\n      margin: 5% auto;\n      padding: 20px;\n      border: 1px solid #888;\n      width: 80%;\n      color: red;\n      font-size: 100px;\n    }\n\n    .modal-detail {\n      display: flex;\n    }\n\n    .modal-detail-img {\n      display: flex;\n      align-items: center;\n      grid-row: auto / span 1;\n      grid-column: auto / span 1;\n\n      img {\n        display: block;\n        width: 100%;\n        height: auto;\n      }\n    }\n\n    .modal-detail-text {\n      grid-row: auto / span 1;\n      grid-column: auto / span 1;\n      color: black;\n      padding: 50px;\n      font-size: 2vh;\n    }\n\n    .modal-detail-comment {\n      width: 70%;\n    }\n\n    .close {\n      color: #aaa;\n      float: right;\n      font-size: 28px;\n      font-weight: bold;\n    }\n\n    .close:hover,\n    .close:focus {\n      color: black;\n      text-decoration: none;\n      cursor: pointer;\n    }\n\n    @media (max-width: 768px) {\n      .flex-container,\n      .modal-detail {\n        flex-direction: column;\n      }\n    }\n  }\n  */\n}\nbody header {\n  display: flex;\n  position: fixed;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  background-color: white;\n  padding: 1rem 10%;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  right: 0;\n}\nbody header .logo {\n  font-family: Roboto, Arial, Helvetica, sans-serif;\n}\nbody header nav {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\nbody header nav .nav-item {\n  display: block;\n  transition: transform 0.25s ease-in-out;\n}\nbody header nav .nav-item:hover {\n  transform: scale(1.1);\n}\nbody main {\n  margin-top: 5rem;\n}\nbody main .flex-container {\n  margin: 0 10%;\n  display: grid;\n  text-align: center;\n  grid-template-columns: repeat(1, 1fr);\n  grid-template-rows: auto;\n  gap: 0.25rem;\n}\n@media (min-width: 480px) {\n  body main .flex-container {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 768px) {\n  body main .flex-container {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (min-width: 1024px) {\n  body main .flex-container {\n    grid-template-columns: repeat(5, 1fr);\n  }\n}\nbody main .flex-container .show-item {\n  grid-row: auto/span 1;\n  grid-column: auto/span 1;\n  position: relative;\n  cursor: pointer;\n}\nbody main .flex-container .show-item .img-container img {\n  width: 100%;\n  height: auto;\n  display: block;\n}\nbody main .flex-container .show-item .info-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: end;\n  padding: 0.5rem;\n  background: rgb(0, 0, 0);\n  background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(255, 255, 255, 0) 100%);\n}\nbody main .flex-container .show-item .info-container .title {\n  font-size: 2rem;\n  text-align: left;\n  color: white;\n}\nbody main .flex-container .show-item .info-container .reaction {\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\nbody main .flex-container .show-item .info-container .reaction button {\n  background: none;\n  border: unset;\n  cursor: pointer;\n  color: white;\n}\nbody main .flex-container .show-item .info-container .reaction button.comment-btn {\n  border: 1px solid whitesmoke;\n  border-radius: 5px;\n  padding: 0.25rem 0.75rem;\n}\nbody .show-modal {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 9999;\n}\nbody .show-modal .modal-content {\n  background-color: #fefefe;\n  width: calc(100% - 2rem);\n  height: calc(100% - 2rem);\n  position: relative;\n  overflow: auto;\n}\n@media (min-width: 768px) {\n  body .show-modal .modal-content {\n    width: 75%;\n    height: calc(100% - 5rem);\n  }\n}\nbody .show-modal .modal-content .close {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\nbody .show-modal .modal-content .close.close:hover, body .show-modal .modal-content .close.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\nbody .show-modal .modal-content .modal-detail {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto;\n}\n@media (min-width: 768px) {\n  body .show-modal .modal-content .modal-detail {\n    grid-template-columns: 40% 1fr;\n  }\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-img {\n  display: flex;\n  align-items: center;\n  grid-row: auto/span 1;\n  grid-column: auto/span 1;\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-img img {\n  display: block;\n  width: 100%;\n  height: auto;\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-text {\n  grid-row: auto/span 1;\n  grid-column: auto/span 1;\n  color: black;\n  padding: 50px;\n  font-size: 2vh;\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-comment {\n  grid-row: auto/span 1;\n  grid-column: 1/-1;\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-comment h2 {\n  text-align: center;\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-comment form.add-comment {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-areas: \"input\" \"text\" \"btn\";\n}\n@media (min-width: 768px) {\n  body .show-modal .modal-content .modal-detail .modal-detail-comment form.add-comment {\n    grid-template-columns: 1fr 10rem;\n    grid-template-areas: \"input btn\" \"text text\";\n  }\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-comment form.add-comment .form-add-name {\n  grid-area: input;\n  margin: 5px;\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-comment form.add-comment .form-add-comment {\n  grid-area: text;\n  margin: 5px;\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-comment form.add-comment .submit-comment-btn {\n  grid-area: btn;\n  margin: 5px;\n}\nbody .show-modal .modal-content .modal-detail .modal-detail-comment .loading-coment-item {\n  width: 100%;\n  text-align: center;\n  padding: 1em;\n  font-size: 2rem;\n}\nbody .show-modal .modal-content .modal-detail .view-comment {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  padding: 5px;\n}\n@media (min-width: 768px) {\n  body .show-modal .modal-content .modal-detail .view-comment {\n    padding: 1rem;\n  }\n}\nbody .show-modal .modal-content .modal-detail .view-comment .modal-content-user-comment .user h4 {\n  padding: 0;\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: bold;\n}\nbody .show-modal .modal-content .modal-detail .view-comment .modal-content-user-comment .comment-content p {\n  margin: 0.25rem;\n  padding: 0;\n}\n@media (min-width: 768px) {\n  body .show-modal .modal-content .modal-detail .view-comment .modal-content-user-comment .comment-content p {\n    margin: 0.25rem 1rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["/* stylelint-disable no-descending-specificity */\n@import \"https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:100,300,400\";\n\n.template {\n  display: none;\n}\n\n* {\n  box-sizing: border-box;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\n\nhtml {\n  margin: 0;\n  padding: 0;\n  max-width: 100%;\n  overflow-x: hidden;\n  scroll-behavior: smooth;\n}\n\na {\n  all: unset;\n}\n\nbody {\n  background-color: whitesmoke;\n  margin: 0;\n  padding: 0;\n\n  header {\n    display: flex;\n    position: fixed;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    background-color: white;\n    padding: 1rem 10%;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    right: 0;\n\n    .logo {\n      font-family: Roboto, Arial, Helvetica, sans-serif;\n    }\n\n    nav {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      gap: 1rem;\n\n      .nav-item {\n        display: block;\n        transition: transform 0.25s ease-in-out;\n\n        &:hover {\n          transform: scale(1.1);\n        }\n      }\n    }\n  }\n\n  main {\n    margin-top: 5rem;\n\n    .flex-container {\n      margin: 0 10%;\n      display: grid;\n      text-align: center;\n      grid-template-columns: repeat(1, 1fr);\n      grid-template-rows: auto;\n      gap: 0.25rem;\n\n      @media (min-width: 480px) {\n        & {\n          grid-template-columns: repeat(2, 1fr);\n        }\n      }\n\n      @media (min-width: 768px) {\n        & {\n          grid-template-columns: repeat(3, 1fr);\n        }\n      }\n\n      @media (min-width: 1024px) {\n        & {\n          grid-template-columns: repeat(5, 1fr);\n        }\n      }\n\n      .show-item {\n        grid-row: auto / span 1;\n        grid-column: auto / span 1;\n        position: relative;\n        cursor: pointer;\n\n        .img-container {\n          img {\n            width: 100%;\n            height: auto;\n            display: block;\n          }\n        }\n\n        .info-container {\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: 0;\n          right: 0;\n          display: flex;\n          flex-direction: column;\n          align-items: stretch;\n          justify-content: end;\n          padding: 0.5rem;\n          background: rgb(0 0 0);\n          background: linear-gradient(0deg, rgb(0 0 0 / 100%) 0%, rgb(255 255 255 / 0%) 100%);\n\n          .title {\n            font-size: 2rem;\n            text-align: left;\n            color: white;\n          }\n\n          .reaction {\n            font-size: 1.5rem;\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n\n            button {\n              background: none;\n              border: unset;\n              cursor: pointer;\n              color: white;\n\n              &.comment-btn {\n                border: 1px solid whitesmoke;\n                border-radius: 5px;\n                padding: 0.25rem 0.75rem;\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .show-modal {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: rgb(0 0 0);\n    background-color: rgb(0 0 0 / 40%);\n    z-index: 9999;\n\n    .modal-content {\n      background-color: #fefefe;\n      width: calc(100% - 2rem);\n      height: calc(100% - 2rem);\n      position: relative;\n      overflow: auto;\n\n      @media (min-width: 768px) {\n        & {\n          width: 75%;\n          height: calc(100% - 5rem);\n        }\n      }\n\n      .close {\n        position: absolute;\n        top: 1rem;\n        right: 1rem;\n        color: #aaa;\n        float: right;\n        font-size: 28px;\n        font-weight: bold;\n\n        &.close:hover,\n        &.close:focus {\n          color: black;\n          text-decoration: none;\n          cursor: pointer;\n        }\n      }\n\n      .modal-detail {\n        display: grid;\n        grid-template-columns: 1fr;\n        grid-template-rows: auto;\n\n        @media (min-width: 768px) {\n          & {\n            grid-template-columns: 40% 1fr;\n          }\n        }\n\n        .modal-detail-img {\n          display: flex;\n          align-items: center;\n          grid-row: auto / span 1;\n          grid-column: auto / span 1;\n\n          img {\n            display: block;\n            width: 100%;\n            height: auto;\n          }\n        }\n\n        .modal-detail-text {\n          grid-row: auto / span 1;\n          grid-column: auto / span 1;\n          color: black;\n          padding: 50px;\n          font-size: 2vh;\n        }\n\n        .modal-detail-comment {\n          grid-row: auto / span 1;\n          grid-column: 1 / -1;\n          display: flex;\n          flex-direction: column;\n          justify-content: stretch;\n\n          h2 {\n            text-align: center;\n          }\n\n          form.add-comment {\n            display: grid;\n            grid-template-columns: 1fr;\n            grid-template-areas:\n              \"input\"\n              \"text\"\n              \"btn\";\n\n            @media (min-width: 768px) {\n              & {\n                grid-template-columns: 1fr 10rem;\n                grid-template-areas:\n                  \"input btn\"\n                  \"text text\";\n              }\n            }\n\n            .form-add-name {\n              grid-area: input;\n              margin: 5px;\n            }\n\n            .form-add-comment {\n              grid-area: text;\n              margin: 5px;\n            }\n\n            .submit-comment-btn {\n              grid-area: btn;\n              margin: 5px;\n            }\n          }\n\n          .loading-coment-item {\n            width: 100%;\n            text-align: center;\n            padding: 1em;\n            font-size: 2rem;\n          }\n        }\n\n        .view-comment {\n          display: flex;\n          flex-direction: column;\n          justify-content: start;\n          padding: 5px;\n\n          @media (min-width: 768px) {\n            & {\n              padding: 1rem;\n            }\n          }\n\n          .modal-content-user-comment {\n            .user {\n              h4 {\n                padding: 0;\n                margin: 0;\n                font-size: 1.25rem;\n                font-weight: bold;\n              }\n            }\n\n            .comment-content {\n              p {\n                margin: 0.25rem;\n                padding: 0;\n\n                @media (min-width: 768px) {\n                  & {\n                    margin: 0.25rem 1rem;\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n  /*\n  .show-modal {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: rgb(0 0 0);\n    background-color: rgb(0 0 0 / 40%);\n    z-index: 9999;\n\n    .modal-content {\n      background-color: #fefefe;\n      margin: 5% auto;\n      padding: 20px;\n      border: 1px solid #888;\n      width: 80%;\n      color: red;\n      font-size: 100px;\n    }\n\n    .modal-detail {\n      display: flex;\n    }\n\n    .modal-detail-img {\n      display: flex;\n      align-items: center;\n      grid-row: auto / span 1;\n      grid-column: auto / span 1;\n\n      img {\n        display: block;\n        width: 100%;\n        height: auto;\n      }\n    }\n\n    .modal-detail-text {\n      grid-row: auto / span 1;\n      grid-column: auto / span 1;\n      color: black;\n      padding: 50px;\n      font-size: 2vh;\n    }\n\n    .modal-detail-comment {\n      width: 70%;\n    }\n\n    .close {\n      color: #aaa;\n      float: right;\n      font-size: 28px;\n      font-weight: bold;\n    }\n\n    .close:hover,\n    .close:focus {\n      color: black;\n      text-decoration: none;\n      cursor: pointer;\n    }\n\n    @media (max-width: 768px) {\n      .flex-container,\n      .modal-detail {\n        flex-direction: column;\n      }\n    }\n  }\n  */\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsT0FBTyxLQUFLLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLE9BQU8sc0tBQXNLLGVBQWUsa0JBQWtCLEdBQUcsT0FBTywyQkFBMkIsMERBQTBELEdBQUcsVUFBVSxjQUFjLGVBQWUsb0JBQW9CLHVCQUF1Qiw0QkFBNEIs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QUNickI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vc3JjL3N0eWxlLnNjc3M/YWQ2MCIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGUvQ29tbWVudExpc3QuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGUvYXBpU2VydmljZS5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vc3JjL21vZHVsZS9jb21tZW50LmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlL2RvbVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGUvbW92aWUuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGUvbW92aWVMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw3MDB8Um9ib3RvOjEwMCwzMDAsNDAwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZGVzY2VuZGluZy1zcGVjaWZpY2l0eSAqL1xcbi50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmEge1xcbiAgYWxsOiB1bnNldDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC8qXFxuICAuc2hvdy1tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gNDAlKTtcXG4gICAgei1pbmRleDogOTk5OTtcXG5cXG4gICAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgICAgbWFyZ2luOiA1JSBhdXRvO1xcbiAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgICB3aWR0aDogODAlO1xcbiAgICAgIGNvbG9yOiByZWQ7XFxuICAgICAgZm9udC1zaXplOiAxMDBweDtcXG4gICAgfVxcblxcbiAgICAubW9kYWwtZGV0YWlsIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIC5tb2RhbC1kZXRhaWwtaW1nIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZ3JpZC1yb3c6IGF1dG8gLyBzcGFuIDE7XFxuICAgICAgZ3JpZC1jb2x1bW46IGF1dG8gLyBzcGFuIDE7XFxuXFxuICAgICAgaW1nIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5tb2RhbC1kZXRhaWwtdGV4dCB7XFxuICAgICAgZ3JpZC1yb3c6IGF1dG8gLyBzcGFuIDE7XFxuICAgICAgZ3JpZC1jb2x1bW46IGF1dG8gLyBzcGFuIDE7XFxuICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgICAgZm9udC1zaXplOiAydmg7XFxuICAgIH1cXG5cXG4gICAgLm1vZGFsLWRldGFpbC1jb21tZW50IHtcXG4gICAgICB3aWR0aDogNzAlO1xcbiAgICB9XFxuXFxuICAgIC5jbG9zZSB7XFxuICAgICAgY29sb3I6ICNhYWE7XFxuICAgICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcblxcbiAgICAuY2xvc2U6aG92ZXIsXFxuICAgIC5jbG9zZTpmb2N1cyB7XFxuICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgICAgLmZsZXgtY29udGFpbmVyLFxcbiAgICAgIC5tb2RhbC1kZXRhaWwge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG4gICovXFxufVxcbmJvZHkgaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMXJlbSAxMCU7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5ib2R5IGhlYWRlciAubG9nbyB7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5IGhlYWRlciBuYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcbmJvZHkgaGVhZGVyIG5hdiAubmF2LWl0ZW0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1pbi1vdXQ7XFxufVxcbmJvZHkgaGVhZGVyIG5hdiAubmF2LWl0ZW06aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5ib2R5IG1haW4ge1xcbiAgbWFyZ2luLXRvcDogNXJlbTtcXG59XFxuYm9keSBtYWluIC5mbGV4LWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDAgMTAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICBnYXA6IDAuMjVyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xcbiAgYm9keSBtYWluIC5mbGV4LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgYm9keSBtYWluIC5mbGV4LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gIGJvZHkgbWFpbiAuZmxleC1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgfVxcbn1cXG5ib2R5IG1haW4gLmZsZXgtY29udGFpbmVyIC5zaG93LWl0ZW0ge1xcbiAgZ3JpZC1yb3c6IGF1dG8vc3BhbiAxO1xcbiAgZ3JpZC1jb2x1bW46IGF1dG8vc3BhbiAxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5ib2R5IG1haW4gLmZsZXgtY29udGFpbmVyIC5zaG93LWl0ZW0gLmltZy1jb250YWluZXIgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkgbWFpbiAuZmxleC1jb250YWluZXIgLnNob3ctaXRlbSAuaW5mby1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYigwLCAwLCAwKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcXG59XFxuYm9keSBtYWluIC5mbGV4LWNvbnRhaW5lciAuc2hvdy1pdGVtIC5pbmZvLWNvbnRhaW5lciAudGl0bGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuYm9keSBtYWluIC5mbGV4LWNvbnRhaW5lciAuc2hvdy1pdGVtIC5pbmZvLWNvbnRhaW5lciAucmVhY3Rpb24ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuYm9keSBtYWluIC5mbGV4LWNvbnRhaW5lciAuc2hvdy1pdGVtIC5pbmZvLWNvbnRhaW5lciAucmVhY3Rpb24gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IHVuc2V0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5ib2R5IG1haW4gLmZsZXgtY29udGFpbmVyIC5zaG93LWl0ZW0gLmluZm8tY29udGFpbmVyIC5yZWFjdGlvbiBidXR0b24uY29tbWVudC1idG4ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcXG59XFxuYm9keSAuc2hvdy1tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHotaW5kZXg6IDk5OTk7XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMnJlbSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICBib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1cmVtKTtcXG4gIH1cXG59XFxuYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCAuY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxcmVtO1xcbiAgcmlnaHQ6IDFyZW07XFxuICBjb2xvcjogI2FhYTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5jbG9zZS5jbG9zZTpob3ZlciwgYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCAuY2xvc2UuY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIGJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWRldGFpbCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDFmcjtcXG4gIH1cXG59XFxuYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtZGV0YWlsIC5tb2RhbC1kZXRhaWwtaW1nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1yb3c6IGF1dG8vc3BhbiAxO1xcbiAgZ3JpZC1jb2x1bW46IGF1dG8vc3BhbiAxO1xcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwgLm1vZGFsLWRldGFpbC1pbWcgaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWRldGFpbCAubW9kYWwtZGV0YWlsLXRleHQge1xcbiAgZ3JpZC1yb3c6IGF1dG8vc3BhbiAxO1xcbiAgZ3JpZC1jb2x1bW46IGF1dG8vc3BhbiAxO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogNTBweDtcXG4gIGZvbnQtc2l6ZTogMnZoO1xcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwgLm1vZGFsLWRldGFpbC1jb21tZW50IHtcXG4gIGdyaWQtcm93OiBhdXRvL3NwYW4gMTtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWRldGFpbCAubW9kYWwtZGV0YWlsLWNvbW1lbnQgaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwgLm1vZGFsLWRldGFpbC1jb21tZW50IGZvcm0uYWRkLWNvbW1lbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImlucHV0XFxcIiBcXFwidGV4dFxcXCIgXFxcImJ0blxcXCI7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtZGV0YWlsIC5tb2RhbC1kZXRhaWwtY29tbWVudCBmb3JtLmFkZC1jb21tZW50IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTByZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJpbnB1dCBidG5cXFwiIFxcXCJ0ZXh0IHRleHRcXFwiO1xcbiAgfVxcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwgLm1vZGFsLWRldGFpbC1jb21tZW50IGZvcm0uYWRkLWNvbW1lbnQgLmZvcm0tYWRkLW5hbWUge1xcbiAgZ3JpZC1hcmVhOiBpbnB1dDtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwgLm1vZGFsLWRldGFpbC1jb21tZW50IGZvcm0uYWRkLWNvbW1lbnQgLmZvcm0tYWRkLWNvbW1lbnQge1xcbiAgZ3JpZC1hcmVhOiB0ZXh0O1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWRldGFpbCAubW9kYWwtZGV0YWlsLWNvbW1lbnQgZm9ybS5hZGQtY29tbWVudCAuc3VibWl0LWNvbW1lbnQtYnRuIHtcXG4gIGdyaWQtYXJlYTogYnRuO1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWRldGFpbCAubW9kYWwtZGV0YWlsLWNvbW1lbnQgLmxvYWRpbmctY29tZW50LWl0ZW0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxZW07XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWRldGFpbCAudmlldy1jb21tZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICBib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwgLnZpZXctY29tbWVudCB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWRldGFpbCAudmlldy1jb21tZW50IC5tb2RhbC1jb250ZW50LXVzZXItY29tbWVudCAudXNlciBoNCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWRldGFpbCAudmlldy1jb21tZW50IC5tb2RhbC1jb250ZW50LXVzZXItY29tbWVudCAuY29tbWVudC1jb250ZW50IHAge1xcbiAgbWFyZ2luOiAwLjI1cmVtO1xcbiAgcGFkZGluZzogMDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICBib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwgLnZpZXctY29tbWVudCAubW9kYWwtY29udGVudC11c2VyLWNvbW1lbnQgLmNvbW1lbnQtY29udGVudCBwIHtcXG4gICAgbWFyZ2luOiAwLjI1cmVtIDFyZW07XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdEQUFBO0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxzQkFBQTtFQUNBLHFEQUFBO0FBQUY7O0FBR0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0FBQUY7O0FBR0E7RUFDRSw0QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBcVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FBQTtBQXpORjtBQTFFRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUE0RUo7QUExRUk7RUFDRSxpREFBQTtBQTRFTjtBQXpFSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBMkVOO0FBekVNO0VBQ0UsY0FBQTtFQUNBLHVDQUFBO0FBMkVSO0FBekVRO0VBQ0UscUJBQUE7QUEyRVY7QUFyRUU7RUFDRSxnQkFBQTtBQXVFSjtBQXJFSTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQXVFTjtBQXJFTTtFQUNFO0lBQ0UscUNBQUE7RUF1RVI7QUFDRjtBQXBFTTtFQUNFO0lBQ0UscUNBQUE7RUFzRVI7QUFDRjtBQW5FTTtFQUNFO0lBQ0UscUNBQUE7RUFxRVI7QUFDRjtBQWxFTTtFQUNFLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFvRVI7QUFqRVU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFtRVo7QUEvRFE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsK0VBQUE7QUFpRVY7QUEvRFU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBaUVaO0FBOURVO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQWdFWjtBQTlEWTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBZ0VkO0FBOURjO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FBZ0VoQjtBQXZERTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0FBeURKO0FBdkRJO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBeUROO0FBdkRNO0VBQ0U7SUFDRSxVQUFBO0lBQ0EseUJBQUE7RUF5RFI7QUFDRjtBQXRETTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXdEUjtBQXREUTtFQUVFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUF1RFY7QUFuRE07RUFDRSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQXFEUjtBQW5EUTtFQUNFO0lBQ0UsOEJBQUE7RUFxRFY7QUFDRjtBQWxEUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUFvRFY7QUFsRFU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFvRFo7QUFoRFE7RUFDRSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBa0RWO0FBL0NRO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0FBaURWO0FBL0NVO0VBQ0Usa0JBQUE7QUFpRFo7QUE5Q1U7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSx5Q0FDRTtBQStDZDtBQTNDWTtFQUNFO0lBQ0UsZ0NBQUE7SUFDQSw0Q0FDRTtFQTRDaEI7QUFDRjtBQXhDWTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQTBDZDtBQXZDWTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBeUNkO0FBdENZO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUF3Q2Q7QUFwQ1U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQXNDWjtBQWxDUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQW9DVjtBQWxDVTtFQUNFO0lBQ0UsYUFBQTtFQW9DWjtBQUNGO0FBL0JjO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBaUNoQjtBQTVCYztFQUNFLGVBQUE7RUFDQSxVQUFBO0FBOEJoQjtBQTVCZ0I7RUFDRTtJQUNFLG9CQUFBO0VBOEJsQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWRlc2NlbmRpbmctc3BlY2lmaWNpdHkgKi9cXG5AaW1wb3J0IFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNzAwfFJvYm90bzoxMDAsMzAwLDQwMFxcXCI7XFxuXFxuLnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYSB7XFxuICBhbGw6IHVuc2V0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcblxcbiAgaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEwJTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG5cXG4gICAgLmxvZ28ge1xcbiAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIH1cXG5cXG4gICAgbmF2IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBnYXA6IDFyZW07XFxuXFxuICAgICAgLm5hdi1pdGVtIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2UtaW4tb3V0O1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIG1haW4ge1xcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xcblxcbiAgICAuZmxleC1jb250YWluZXIge1xcbiAgICAgIG1hcmdpbjogMCAxMCU7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgICAgZ2FwOiAwLjI1cmVtO1xcblxcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xcbiAgICAgICAgJiB7XFxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAgICAgJiB7XFxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgICAgICYge1xcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAuc2hvdy1pdGVtIHtcXG4gICAgICAgIGdyaWQtcm93OiBhdXRvIC8gc3BhbiAxO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IGF1dG8gLyBzcGFuIDE7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICAuaW1nLWNvbnRhaW5lciB7XFxuICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuaW5mby1jb250YWluZXIge1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICByaWdodDogMDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigwIDAgMCk7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2IoMCAwIDAgLyAxMDAlKSAwJSwgcmdiKDI1NSAyNTUgMjU1IC8gMCUpIDEwMCUpO1xcblxcbiAgICAgICAgICAudGl0bGUge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAucmVhY3Rpb24ge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgICAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICAgICAgICBib3JkZXI6IHVuc2V0O1xcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICAgICAgICAgICAgJi5jb21tZW50LWJ0biB7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLnNob3ctbW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDQwJSk7XFxuICAgIHotaW5kZXg6IDk5OTk7XFxuXFxuICAgIC5tb2RhbC1jb250ZW50IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDJyZW0pO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBvdmVyZmxvdzogYXV0bztcXG5cXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgICAgICYge1xcbiAgICAgICAgICB3aWR0aDogNzUlO1xcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDVyZW0pO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAuY2xvc2Uge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAxcmVtO1xcbiAgICAgICAgcmlnaHQ6IDFyZW07XFxuICAgICAgICBjb2xvcjogI2FhYTtcXG4gICAgICAgIGZsb2F0OiByaWdodDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICAgICAgJi5jbG9zZTpob3ZlcixcXG4gICAgICAgICYuY2xvc2U6Zm9jdXMge1xcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAubW9kYWwtZGV0YWlsIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG5cXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAgICAgICAmIHtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSAxZnI7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tb2RhbC1kZXRhaWwtaW1nIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgZ3JpZC1yb3c6IGF1dG8gLyBzcGFuIDE7XFxuICAgICAgICAgIGdyaWQtY29sdW1uOiBhdXRvIC8gc3BhbiAxO1xcblxcbiAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1vZGFsLWRldGFpbC10ZXh0IHtcXG4gICAgICAgICAgZ3JpZC1yb3c6IGF1dG8gLyBzcGFuIDE7XFxuICAgICAgICAgIGdyaWQtY29sdW1uOiBhdXRvIC8gc3BhbiAxO1xcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1vZGFsLWRldGFpbC1jb21tZW50IHtcXG4gICAgICAgICAgZ3JpZC1yb3c6IGF1dG8gLyBzcGFuIDE7XFxuICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXG5cXG4gICAgICAgICAgaDIge1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICBmb3JtLmFkZC1jb21tZW50IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAgICAgICBcXFwiaW5wdXRcXFwiXFxuICAgICAgICAgICAgICBcXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgIFxcXCJidG5cXFwiO1xcblxcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAgICAgICAgICAgJiB7XFxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwcmVtO1xcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgICAgICAgIFxcXCJpbnB1dCBidG5cXFwiXFxuICAgICAgICAgICAgICAgICAgXFxcInRleHQgdGV4dFxcXCI7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5mb3JtLWFkZC1uYW1lIHtcXG4gICAgICAgICAgICAgIGdyaWQtYXJlYTogaW5wdXQ7XFxuICAgICAgICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmZvcm0tYWRkLWNvbW1lbnQge1xcbiAgICAgICAgICAgICAgZ3JpZC1hcmVhOiB0ZXh0O1xcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5zdWJtaXQtY29tbWVudC1idG4ge1xcbiAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBidG47XFxuICAgICAgICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLmxvYWRpbmctY29tZW50LWl0ZW0ge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudmlldy1jb21tZW50IHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xcblxcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgICAgICAgICAmIHtcXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIC5tb2RhbC1jb250ZW50LXVzZXItY29tbWVudCB7XFxuICAgICAgICAgICAgLnVzZXIge1xcbiAgICAgICAgICAgICAgaDQge1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5jb21tZW50LWNvbnRlbnQge1xcbiAgICAgICAgICAgICAgcCB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMC4yNXJlbTtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcXG5cXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgICAgICAgICAgICAgICAgJiB7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAuMjVyZW0gMXJlbTtcXG4gICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC8qXFxuICAuc2hvdy1tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gNDAlKTtcXG4gICAgei1pbmRleDogOTk5OTtcXG5cXG4gICAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgICAgbWFyZ2luOiA1JSBhdXRvO1xcbiAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgICB3aWR0aDogODAlO1xcbiAgICAgIGNvbG9yOiByZWQ7XFxuICAgICAgZm9udC1zaXplOiAxMDBweDtcXG4gICAgfVxcblxcbiAgICAubW9kYWwtZGV0YWlsIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIC5tb2RhbC1kZXRhaWwtaW1nIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZ3JpZC1yb3c6IGF1dG8gLyBzcGFuIDE7XFxuICAgICAgZ3JpZC1jb2x1bW46IGF1dG8gLyBzcGFuIDE7XFxuXFxuICAgICAgaW1nIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5tb2RhbC1kZXRhaWwtdGV4dCB7XFxuICAgICAgZ3JpZC1yb3c6IGF1dG8gLyBzcGFuIDE7XFxuICAgICAgZ3JpZC1jb2x1bW46IGF1dG8gLyBzcGFuIDE7XFxuICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgICAgZm9udC1zaXplOiAydmg7XFxuICAgIH1cXG5cXG4gICAgLm1vZGFsLWRldGFpbC1jb21tZW50IHtcXG4gICAgICB3aWR0aDogNzAlO1xcbiAgICB9XFxuXFxuICAgIC5jbG9zZSB7XFxuICAgICAgY29sb3I6ICNhYWE7XFxuICAgICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcblxcbiAgICAuY2xvc2U6aG92ZXIsXFxuICAgIC5jbG9zZTpmb2N1cyB7XFxuICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgICAgLmZsZXgtY29udGFpbmVyLFxcbiAgICAgIC5tb2RhbC1kZXRhaWwge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG4gICovXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInRlbXBsYXRlXCI6IFwidGVtcGxhdGVcIixcblx0XCJsb2dvXCI6IFwibG9nb1wiLFxuXHRcIm5hdi1pdGVtXCI6IFwibmF2LWl0ZW1cIixcblx0XCJmbGV4LWNvbnRhaW5lclwiOiBcImZsZXgtY29udGFpbmVyXCIsXG5cdFwic2hvdy1pdGVtXCI6IFwic2hvdy1pdGVtXCIsXG5cdFwiaW1nLWNvbnRhaW5lclwiOiBcImltZy1jb250YWluZXJcIixcblx0XCJpbmZvLWNvbnRhaW5lclwiOiBcImluZm8tY29udGFpbmVyXCIsXG5cdFwidGl0bGVcIjogXCJ0aXRsZVwiLFxuXHRcInJlYWN0aW9uXCI6IFwicmVhY3Rpb25cIixcblx0XCJjb21tZW50LWJ0blwiOiBcImNvbW1lbnQtYnRuXCIsXG5cdFwic2hvdy1tb2RhbFwiOiBcInNob3ctbW9kYWxcIixcblx0XCJtb2RhbC1jb250ZW50XCI6IFwibW9kYWwtY29udGVudFwiLFxuXHRcImNsb3NlXCI6IFwiY2xvc2VcIixcblx0XCJtb2RhbC1kZXRhaWxcIjogXCJtb2RhbC1kZXRhaWxcIixcblx0XCJtb2RhbC1kZXRhaWwtaW1nXCI6IFwibW9kYWwtZGV0YWlsLWltZ1wiLFxuXHRcIm1vZGFsLWRldGFpbC10ZXh0XCI6IFwibW9kYWwtZGV0YWlsLXRleHRcIixcblx0XCJtb2RhbC1kZXRhaWwtY29tbWVudFwiOiBcIm1vZGFsLWRldGFpbC1jb21tZW50XCIsXG5cdFwiYWRkLWNvbW1lbnRcIjogXCJhZGQtY29tbWVudFwiLFxuXHRcImZvcm0tYWRkLW5hbWVcIjogXCJmb3JtLWFkZC1uYW1lXCIsXG5cdFwiZm9ybS1hZGQtY29tbWVudFwiOiBcImZvcm0tYWRkLWNvbW1lbnRcIixcblx0XCJzdWJtaXQtY29tbWVudC1idG5cIjogXCJzdWJtaXQtY29tbWVudC1idG5cIixcblx0XCJsb2FkaW5nLWNvbWVudC1pdGVtXCI6IFwibG9hZGluZy1jb21lbnQtaXRlbVwiLFxuXHRcInZpZXctY29tbWVudFwiOiBcInZpZXctY29tbWVudFwiLFxuXHRcIm1vZGFsLWNvbnRlbnQtdXNlci1jb21tZW50XCI6IFwibW9kYWwtY29udGVudC11c2VyLWNvbW1lbnRcIixcblx0XCJ1c2VyXCI6IFwidXNlclwiLFxuXHRcImNvbW1lbnQtY29udGVudFwiOiBcImNvbW1lbnQtY29udGVudFwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMF0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IGFwaVNlcnZpY2UgZnJvbSAnLi9tb2R1bGUvYXBpU2VydmljZS5qcyc7XG5pbXBvcnQgZG9tU2VydmljZSBmcm9tICcuL21vZHVsZS9kb21TZXJ2aWNlLmpzJztcblxuY29uc3QgbW92aWVzVXJsID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MnO1xuXG5jb25zdCBpbml0VGVtcGxhdGUgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG1vdmllcyA9IGF3YWl0IGFwaVNlcnZpY2UuZ2V0VHZTaG93cyhtb3ZpZXNVcmwpO1xuICBhd2FpdCBkb21TZXJ2aWNlLmRpc3BsYXlUdlNob3dzKG1vdmllcy5saXN0KTtcbn07XG5cbmNvbnN0IGluaXQgPSBhc3luYyAoKSA9PiB7XG4gIGluaXRUZW1wbGF0ZSgpO1xufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbml0KTtcbiIsImNsYXNzIENvbW1lbnRMaXN0IHtcbiAgY29uc3RydWN0b3IobGlzdCA9IFtdKSB7XG4gICAgdGhpcy5MaXN0ID0gbGlzdDtcbiAgfVxuXG4gIHB1c2goY29tbWVudCkge1xuICAgIHRoaXMuTGlzdC5wdXNoKGNvbW1lbnQpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb21tZW50TGlzdDsiLCJpbXBvcnQgTW92aWVMaXN0IGZyb20gJy4vbW92aWVMaXN0LmpzJztcbmltcG9ydCBNb3ZpZSBmcm9tICcuL21vdmllLmpzJztcbmltcG9ydCBDb21tZW50TGlzdCBmcm9tICcuL0NvbW1lbnRMaXN0LmpzJztcbmltcG9ydCBDb21tZW50IGZyb20gJy4vY29tbWVudC5qcyc7XG5cbmNvbnN0IGdldFR2U2hvd3MgPSBhc3luYyAodXJsKSA9PiB7XG4gIGNvbnN0IGFsbE1vdmllcyA9IG5ldyBNb3ZpZUxpc3QoKTtcbiAgY29uc3QgbW92aWVzID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UpO1xuICBtb3ZpZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGFsbE1vdmllcy5wdXNoKFxuICAgICAgbmV3IE1vdmllKFxuICAgICAgICBlbGVtZW50LmlkLFxuICAgICAgICBlbGVtZW50Lm5hbWUsXG4gICAgICAgIGVsZW1lbnQudHlwZSxcbiAgICAgICAgZWxlbWVudC5sYW5ndWFnZSxcbiAgICAgICAgZWxlbWVudC5nZW5yZXNbMF0sXG4gICAgICAgIGVsZW1lbnQucmF0aW5nLmF2ZXJhZ2UsXG4gICAgICAgIGVsZW1lbnQuaW1hZ2UubWVkaXVtLFxuICAgICAgICBlbGVtZW50LnN1bW1hcnksXG4gICAgICApLFxuICAgICk7XG4gIH0pO1xuICByZXR1cm4gYWxsTW92aWVzO1xufTtcbmNvbnN0IGdldFR2U2hvdyA9IGFzeW5jICh1cmwpID0+IHtcbiAgY29uc3QgbW92aWVEYXRhID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UpO1xuICBjb25zdCByZXN1bHQgPSBuZXcgTW92aWUoXG4gICAgbW92aWVEYXRhLmlkLFxuICAgIG1vdmllRGF0YS5uYW1lLFxuICAgIG1vdmllRGF0YS50eXBlLFxuICAgIG1vdmllRGF0YS5sYW5ndWFnZSxcbiAgICBtb3ZpZURhdGEuZ2VucmVzWzBdLFxuICAgIG1vdmllRGF0YS5yYXRpbmcuYXZlcmFnZSxcbiAgICBtb3ZpZURhdGEuaW1hZ2UubWVkaXVtLFxuICAgIG1vdmllRGF0YS5zdW1tYXJ5LFxuICApO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgZ2V0bGlrZSA9IGFzeW5jICh1cmwpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5jb25zdCBsaWtlID0gYXN5bmMgKHVybCwgaWQpID0+IHtcbiAgYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaWQsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcbn07XG5cbmNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKHVybCwgaWQpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IENvbW1lbnRMaXN0KCk7XG4gIHRyeSB7XG4gICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBmZXRjaChgJHt1cmx9P2l0ZW1faWQ9JHtpZH1gKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBva2F5IHJlc3BvbnNlJyk7XG4gICAgfSk7XG4gICAgY29tbWVudHMuZm9yRWFjaCgoYywgaW5kZXgpID0+IHtcbiAgICAgIHJlc3VsdC5wdXNoKG5ldyBDb21tZW50KGluZGV4LCBjLnVzZXJuYW1lLCBjLmNvbW1lbnQpKTtcbiAgICB9KTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBjb21tZW50ID0gYXN5bmMgKHVybCwgaXRlbUlkLCB1c2VybmFtZSwgY29tbWVudCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGl0ZW1JZCxcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgY29tbWVudCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRUdlNob3dzLFxuICBnZXRUdlNob3csXG4gIGdldGxpa2UsXG4gIGxpa2UsXG4gIGdldENvbW1lbnRzLFxuICBjb21tZW50LFxufTtcbiIsImNsYXNzIENvbW1lbnQge1xuICBjb25zdHJ1Y3RvcihpdGVtaWQsIHVzZXJuYW1lLCBjb21tZW50KSB7XG4gICAgdGhpcy5pdGVtX2lkID0gaXRlbWlkO1xuICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICB0aGlzLmNvbW1lbnQgPSBjb21tZW50O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb21tZW50OyIsImltcG9ydCBhcGlTZXJ2aWNlIGZyb20gJy4vYXBpU2VydmljZS5qcyc7XG5cbmNvbnN0IGNvbW1lbnRVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvU2ZmNFRwdmZoVk5pRE82WXBlV2IvY29tbWVudHMnO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxleC1jb250YWluZXInKTtcblxuY29uc3QgU2hvd0l0ZW1UZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wbGF0ZSAjc2hvdy1pdGVtLXRlbXBsYXRlJyk7XG5jb25zdCBTaG93TW9kYWxUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wbGF0ZSAjc2hvdy1tb2RhbC10ZW1wbGF0ZScpO1xuY29uc3QgbW9kYWxDb250ZW50VXNlckNvbW1lbnRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wbGF0ZSAjbW9kYWwtY29udGVudC11c2VyLWNvbW1lbnQtdGVtcGxhdGUnKTtcblxuY29uc3QgYnVpbGREZXRhaWxUZXh0RWxlbWVudCA9IChkZXRhaWxUZXh0RWxlbWVudCwgbW92aWUpID0+IHtcbiAgY29uc3QgdGl0bGVFbGVtZW50ID0gZGV0YWlsVGV4dEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUnKTtcbiAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gbW92aWUubmFtZTtcblxuICBjb25zdCBsYW5ndWFnZUVsZW1lbnQgPSBkZXRhaWxUZXh0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZ3VhZ2UnKTtcbiAgbGFuZ3VhZ2VFbGVtZW50LnRleHRDb250ZW50ID0gbW92aWUubGFuZ3VhZ2U7XG5cbiAgY29uc3QgZ2VucmVzRWxlbWVudCA9IGRldGFpbFRleHRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW5yZXMnKTtcbiAgZ2VucmVzRWxlbWVudC50ZXh0Q29udGVudCA9IG1vdmllLmdlbnJlcztcblxuICBjb25zdCByYXRpbmdFbGVtZW50ID0gZGV0YWlsVGV4dEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnJhdGluZycpO1xuICByYXRpbmdFbGVtZW50LnRleHRDb250ZW50ID0gbW92aWUucmF0aW5nO1xuXG4gIGNvbnN0IHR5cGVFbGVtZW50ID0gZGV0YWlsVGV4dEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnR5cGUnKTtcbiAgdHlwZUVsZW1lbnQuaW5uZXJIVE1MID0gbW92aWUudHlwZTtcblxuICBjb25zdCBzdW1tYXJ5RWxlbWVudCA9IGRldGFpbFRleHRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW1tYXJ5Jyk7XG4gIHN1bW1hcnlFbGVtZW50LmlubmVySFRNTCA9IG1vdmllLnN1bW1hcnk7XG59O1xuXG5jb25zdCBidWlsZERldGFpbGNvbW1lbnRFbGVtZW50ID0gKGRldGFpbGNvbW1lbnRFbGVtZW50LCBtb3ZpZSkgPT4ge1xuICBjb25zdCBjb21lbnRDb3VudGVyID0gZGV0YWlsY29tbWVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtY291bnRlcicpO1xuICBjb21lbnRDb3VudGVyLnRleHRDb250ZW50ID0gJyggTG9hZGluZy4uLiApJztcblxuICBjb25zdCBjb21lbnRMaXN0ID0gZGV0YWlsY29tbWVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctY29tbWVudCcpO1xuICBjb25zdCBMb2FkaW5nZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBMb2FkaW5nZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nLWNvbWVudC1pdGVtJyk7XG4gIExvYWRpbmdkaXZFbGVtZW50LnRleHRDb250ZW50ID0gJyggTG9hZGluZy4uLiApJztcblxuICBjb25zdCBjb21lbnRTdWJtaXRCdG4gPSBkZXRhaWxjb21tZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LWNvbW1lbnQtYnRuJyk7XG4gIGNvbWVudFN1Ym1pdEJ0bi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgYXBpU2VydmljZS5nZXRDb21tZW50cyhjb21tZW50VXJsLCBtb3ZpZS5pZCkudGhlbigoQ29tbWVudExpc3QpID0+IHtcbiAgICBjb21lbnRMaXN0LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbWVudFN1Ym1pdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGNvbWVudENvdW50ZXIudGV4dENvbnRlbnQgPSBgKCAke0NvbW1lbnRMaXN0Lkxpc3QubGVuZ3RofSApYDtcbiAgICBDb21tZW50TGlzdC5MaXN0LmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IG1vZGFsQ29udGVudFVzZXJDb21tZW50RWxlbWVudCA9IG1vZGFsQ29udGVudFVzZXJDb21tZW50VGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgbW9kYWxDb250ZW50VXNlckNvbW1lbnRFbGVtZW50LmlkID0gYG1vZGFsLWNvbnRlbnQtdXNlci1jb21tZW50LSR7Y29tbWVudC5pdGVtX2lkfWA7XG5cbiAgICAgIGNvbnN0IHVzZXJOYW1lID0gbW9kYWxDb250ZW50VXNlckNvbW1lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyIGg0Jyk7XG4gICAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IGNvbW1lbnQudXNlcm5hbWU7XG5cbiAgICAgIGNvbnN0IGNvbW1lbnRDb250ZW50ID0gbW9kYWxDb250ZW50VXNlckNvbW1lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWNvbnRlbnQgcCcpO1xuICAgICAgY29tbWVudENvbnRlbnQudGV4dENvbnRlbnQgPSBjb21tZW50LmNvbW1lbnQ7XG5cbiAgICAgIGNvbWVudExpc3QuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50VXNlckNvbW1lbnRFbGVtZW50KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbW1lbnRGb3JtID0gZGV0YWlsY29tbWVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignZm9ybS5hZGQtY29tbWVudCcpO1xuICAgIGNvbW1lbnRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcbiAgICAgIGNvbnN0IENvbW1lbnRFbnRyaWVzID0gT2JqZWN0LmZyb21FbnRyaWVzKGRhdGEuZW50cmllcygpKTtcblxuICAgICAgYXdhaXQgYXBpU2VydmljZS5jb21tZW50KFxuICAgICAgICBjb21tZW50VXJsLFxuICAgICAgICBtb3ZpZS5pZCxcbiAgICAgICAgQ29tbWVudEVudHJpZXMubmFtZSxcbiAgICAgICAgQ29tbWVudEVudHJpZXMuY29tbWVudCxcbiAgICAgICk7XG5cbiAgICAgIGJ1aWxkRGV0YWlsY29tbWVudEVsZW1lbnQoZGV0YWlsY29tbWVudEVsZW1lbnQsIG1vdmllKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29tZW50TGlzdC5hcHBlbmRDaGlsZChMb2FkaW5nZGl2RWxlbWVudCk7XG59O1xuXG5jb25zdCBidWlsZE1vZGFsID0gKG1vdmllKSA9PiB7XG4gIGNvbnN0IFNob3dNb2RhbEVsZW1lbnQgPSBTaG93TW9kYWxUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgU2hvd01vZGFsRWxlbWVudC5pZCA9IGBzaG93LW1vZGFsLSR7bW92aWUuaWR9YDtcblxuICBTaG93TW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBTaG93TW9kYWxFbGVtZW50LnJlbW92ZSgpO1xuICB9KTtcblxuICBTaG93TW9kYWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IFNob3dNb2RhbEVsZW1lbnQpIFNob3dNb2RhbEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgZWxzZSBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcblxuICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZ0VsZW1lbnQuc3JjID0gbW92aWUuaW1hZ2U7XG4gIGltZ0VsZW1lbnQuYWx0ID0gYCR7bW92aWUudGl0bGV9IFBvc3RlcmA7XG5cbiAgU2hvd01vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGV0YWlsLWltZycpLmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xuXG4gIGNvbnN0IGRldGFpbFRleHRFbGVtZW50ID0gU2hvd01vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGV0YWlsLXRleHQnKTtcbiAgYnVpbGREZXRhaWxUZXh0RWxlbWVudChkZXRhaWxUZXh0RWxlbWVudCwgbW92aWUpO1xuXG4gIGNvbnN0IGRldGFpbGNvbW1lbnRFbGVtZW50ID0gU2hvd01vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGV0YWlsLWNvbW1lbnQnKTtcbiAgYnVpbGREZXRhaWxjb21tZW50RWxlbWVudChkZXRhaWxjb21tZW50RWxlbWVudCwgbW92aWUpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChTaG93TW9kYWxFbGVtZW50KTtcbn07XG5cbmNvbnN0IGJ1aWxkU2hvd0l0ZW1FbGVtZW50ID0gKG1vdmllKSA9PiB7XG4gIGNvbnN0IFNob3dJdGVtRWxlbWVudCA9IFNob3dJdGVtVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuXG4gIFNob3dJdGVtRWxlbWVudC5pZCA9IGBzaG93LWl0ZW0tJHttb3ZpZS5pZH1gO1xuXG4gIFNob3dJdGVtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGJ1aWxkTW9kYWwobW92aWUpO1xuICB9KTtcblxuICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZ0VsZW1lbnQuc3JjID0gbW92aWUuaW1hZ2U7XG4gIGltZ0VsZW1lbnQuYWx0ID0gYCR7bW92aWUubmFtZX0gUG9zdGVyYDtcblxuICBjb25zdCBpbWdDb250YWluZXJFbGVtZW50ID0gU2hvd0l0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctY29udGFpbmVyJyk7XG5cbiAgaW1nQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChpbWdFbGVtZW50KTtcblxuICBjb25zdCB0aXRsZUVsZW1lbnQgPSBTaG93SXRlbUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG4gIHRpdGxlRWxlbWVudC5pbm5lckhUTUwgPSBtb3ZpZS5uYW1lO1xuXG4gIGNvbnN0IGNvbW1lbnRCdG5FbGVtZW50ID0gU2hvd0l0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWJ0bicpO1xuICBjb21tZW50QnRuRWxlbWVudC5kYXRhc2V0LmlkID0gbW92aWUuaWQ7XG5cbiAgcmV0dXJuIFNob3dJdGVtRWxlbWVudDtcbn07XG5cbmNvbnN0IGRpc3BsYXlUdlNob3dzID0gYXN5bmMgKG1vdmllcykgPT4ge1xuICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgbW92aWVzLmZvckVhY2goKG1vdmllKSA9PiBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRTaG93SXRlbUVsZW1lbnQobW92aWUpKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IGRpc3BsYXlUdlNob3dzIH07XG4iLCJjbGFzcyBNb3ZpZSB7XG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCB0eXBlLCBsYW5ndWFnZSwgZ2VucmVzLCByYXRpbmcsIGltYWdlLCBzdW1tYXJ5KSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgdGhpcy5nZW5yZXMgPSBnZW5yZXM7XG4gICAgdGhpcy5yYXRpbmcgPSByYXRpbmc7XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIHRoaXMuc3VtbWFyeSA9IHN1bW1hcnk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWU7XG4iLCJjbGFzcyBNb3ZpZUxpc3Qge1xuICBjb25zdHJ1Y3RvcihsaXN0ID0gW10pIHtcbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICB9XG5cbiAgcHVzaChtb3ZpZSkge1xuICAgIHRoaXMubGlzdC5wdXNoKG1vdmllKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3Q7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=