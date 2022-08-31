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

  _apiService_js__WEBPACK_IMPORTED_MODULE_0__["default"].getComments(commentUrl, movie.id).then((CommentList) => {
    comentList.innerHTML = '';
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
  });

  comentList.appendChild(LoadingdivElement);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsT0FBTyxLQUFLLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLE9BQU8sc0tBQXNLLGVBQWUsa0JBQWtCLEdBQUcsT0FBTywyQkFBMkIsMERBQTBELEdBQUcsVUFBVSxjQUFjLGVBQWUsb0JBQW9CLHVCQUF1Qiw0QkFBNEIs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Ozs7Ozs7Ozs7Ozs7OztBQ3BHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7OztBQ1BtQjs7QUFFekM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxrRUFBc0I7QUFDeEI7QUFDQSxxQ0FBcUMseUJBQXlCO0FBQzlEO0FBQ0E7QUFDQSx3RUFBd0UsZ0JBQWdCOztBQUV4RjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0NBQXNDLFNBQVM7O0FBRS9DO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxzQkFBc0IsYUFBYTs7QUFFbkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQ0FBb0MsU0FBUzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7O0FBRWxDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEVBQUUsZ0JBQWdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ25IbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDYnJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9zdHlsZS5zY3NzP2FkNjAiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlL0NvbW1lbnRMaXN0LmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlL2FwaVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGUvY29tbWVudC5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vc3JjL21vZHVsZS9kb21TZXJ2aWNlLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlL21vdmllLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlL21vdmllTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNzAwfFJvYm90bzoxMDAsMzAwLDQwMCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWRlc2NlbmRpbmctc3BlY2lmaWNpdHkgKi9cXG4udGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5hIHtcXG4gIGFsbDogdW5zZXQ7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICAvKlxcbiAgLnNob3ctbW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDQwJSk7XFxuICAgIHotaW5kZXg6IDk5OTk7XFxuXFxuICAgIC5tb2RhbC1jb250ZW50IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICAgIG1hcmdpbjogNSUgYXV0bztcXG4gICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICBjb2xvcjogcmVkO1xcbiAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxuICAgIH1cXG5cXG4gICAgLm1vZGFsLWRldGFpbCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICAubW9kYWwtZGV0YWlsLWltZyB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGdyaWQtcm93OiBhdXRvIC8gc3BhbiAxO1xcbiAgICAgIGdyaWQtY29sdW1uOiBhdXRvIC8gc3BhbiAxO1xcblxcbiAgICAgIGltZyB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAubW9kYWwtZGV0YWlsLXRleHQge1xcbiAgICAgIGdyaWQtcm93OiBhdXRvIC8gc3BhbiAxO1xcbiAgICAgIGdyaWQtY29sdW1uOiBhdXRvIC8gc3BhbiAxO1xcbiAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICB9XFxuXFxuICAgIC5tb2RhbC1kZXRhaWwtY29tbWVudCB7XFxuICAgICAgd2lkdGg6IDcwJTtcXG4gICAgfVxcblxcbiAgICAuY2xvc2Uge1xcbiAgICAgIGNvbG9yOiAjYWFhO1xcbiAgICAgIGZsb2F0OiByaWdodDtcXG4gICAgICBmb250LXNpemU6IDI4cHg7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIH1cXG5cXG4gICAgLmNsb3NlOmhvdmVyLFxcbiAgICAuY2xvc2U6Zm9jdXMge1xcbiAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAgIC5mbGV4LWNvbnRhaW5lcixcXG4gICAgICAubW9kYWwtZGV0YWlsIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuICAqL1xcbn1cXG5ib2R5IGhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDFyZW0gMTAlO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG59XFxuYm9keSBoZWFkZXIgLmxvZ28ge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuYm9keSBoZWFkZXIgbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5ib2R5IGhlYWRlciBuYXYgLm5hdi1pdGVtIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5ib2R5IGhlYWRlciBuYXYgLm5hdi1pdGVtOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuYm9keSBtYWluIHtcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxufVxcbmJvZHkgbWFpbiAuZmxleC1jb250YWluZXIge1xcbiAgbWFyZ2luOiAwIDEwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgZ2FwOiAwLjI1cmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcXG4gIGJvZHkgbWFpbiAuZmxleC1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIGJvZHkgbWFpbiAuZmxleC1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICBib2R5IG1haW4gLmZsZXgtY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gIH1cXG59XFxuYm9keSBtYWluIC5mbGV4LWNvbnRhaW5lciAuc2hvdy1pdGVtIHtcXG4gIGdyaWQtcm93OiBhdXRvL3NwYW4gMTtcXG4gIGdyaWQtY29sdW1uOiBhdXRvL3NwYW4gMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYm9keSBtYWluIC5mbGV4LWNvbnRhaW5lciAuc2hvdy1pdGVtIC5pbWctY29udGFpbmVyIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IG1haW4gLmZsZXgtY29udGFpbmVyIC5zaG93LWl0ZW0gLmluZm8tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2IoMCwgMCwgMCkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XFxufVxcbmJvZHkgbWFpbiAuZmxleC1jb250YWluZXIgLnNob3ctaXRlbSAuaW5mby1jb250YWluZXIgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbmJvZHkgbWFpbiAuZmxleC1jb250YWluZXIgLnNob3ctaXRlbSAuaW5mby1jb250YWluZXIgLnJlYWN0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbmJvZHkgbWFpbiAuZmxleC1jb250YWluZXIgLnNob3ctaXRlbSAuaW5mby1jb250YWluZXIgLnJlYWN0aW9uIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiB1bnNldDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuYm9keSBtYWluIC5mbGV4LWNvbnRhaW5lciAuc2hvdy1pdGVtIC5pbmZvLWNvbnRhaW5lciAucmVhY3Rpb24gYnV0dG9uLmNvbW1lbnQtYnRuIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XFxufVxcbmJvZHkgLnNob3ctbW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICB6LWluZGV4OiA5OTk5O1xcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDJyZW0pO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNXJlbSk7XFxuICB9XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLmNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMXJlbTtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgY29sb3I6ICNhYWE7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCAuY2xvc2UuY2xvc2U6aG92ZXIsIGJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLmNsb3NlLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtZGV0YWlsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICBib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSAxZnI7XFxuICB9XFxufVxcbmJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWRldGFpbCAubW9kYWwtZGV0YWlsLWltZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtcm93OiBhdXRvL3NwYW4gMTtcXG4gIGdyaWQtY29sdW1uOiBhdXRvL3NwYW4gMTtcXG59XFxuYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtZGV0YWlsIC5tb2RhbC1kZXRhaWwtaW1nIGltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwgLm1vZGFsLWRldGFpbC10ZXh0IHtcXG4gIGdyaWQtcm93OiBhdXRvL3NwYW4gMTtcXG4gIGdyaWQtY29sdW1uOiBhdXRvL3NwYW4gMTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICBmb250LXNpemU6IDJ2aDtcXG59XFxuYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtZGV0YWlsIC5tb2RhbC1kZXRhaWwtY29tbWVudCB7XFxuICBncmlkLXJvdzogYXV0by9zcGFuIDE7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwgLm1vZGFsLWRldGFpbC1jb21tZW50IGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtZGV0YWlsIC5tb2RhbC1kZXRhaWwtY29tbWVudCBmb3JtLmFkZC1jb21tZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJpbnB1dFxcXCIgXFxcInRleHRcXFwiIFxcXCJidG5cXFwiO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIGJvZHkgLnNob3ctbW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWRldGFpbCAubW9kYWwtZGV0YWlsLWNvbW1lbnQgZm9ybS5hZGQtY29tbWVudCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaW5wdXQgYnRuXFxcIiBcXFwidGV4dCB0ZXh0XFxcIjtcXG4gIH1cXG59XFxuYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtZGV0YWlsIC5tb2RhbC1kZXRhaWwtY29tbWVudCBmb3JtLmFkZC1jb21tZW50IC5mb3JtLWFkZC1uYW1lIHtcXG4gIGdyaWQtYXJlYTogaW5wdXQ7XFxuICBtYXJnaW46IDVweDtcXG59XFxuYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtZGV0YWlsIC5tb2RhbC1kZXRhaWwtY29tbWVudCBmb3JtLmFkZC1jb21tZW50IC5mb3JtLWFkZC1jb21tZW50IHtcXG4gIGdyaWQtYXJlYTogdGV4dDtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwgLm1vZGFsLWRldGFpbC1jb21tZW50IGZvcm0uYWRkLWNvbW1lbnQgLnN1Ym1pdC1jb21tZW50LWJ0biB7XFxuICBncmlkLWFyZWE6IGJ0bjtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwgLm1vZGFsLWRldGFpbC1jb21tZW50IC5sb2FkaW5nLWNvbWVudC1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwgLnZpZXctY29tbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtZGV0YWlsIC52aWV3LWNvbW1lbnQge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgfVxcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwgLnZpZXctY29tbWVudCAubW9kYWwtY29udGVudC11c2VyLWNvbW1lbnQgLnVzZXIgaDQge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5ib2R5IC5zaG93LW1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1kZXRhaWwgLnZpZXctY29tbWVudCAubW9kYWwtY29udGVudC11c2VyLWNvbW1lbnQgLmNvbW1lbnQtY29udGVudCBwIHtcXG4gIG1hcmdpbjogMC4yNXJlbTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgYm9keSAuc2hvdy1tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtZGV0YWlsIC52aWV3LWNvbW1lbnQgLm1vZGFsLWNvbnRlbnQtdXNlci1jb21tZW50IC5jb21tZW50LWNvbnRlbnQgcCB7XFxuICAgIG1hcmdpbjogMC4yNXJlbSAxcmVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnREFBQTtBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7RUFDQSxxREFBQTtBQUFGOztBQUdBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtBQUFGOztBQUdBO0VBQ0UsNEJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQXFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUE7QUF6TkY7QUExRUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBNEVKO0FBMUVJO0VBQ0UsaURBQUE7QUE0RU47QUF6RUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQTJFTjtBQXpFTTtFQUNFLGNBQUE7RUFDQSx1Q0FBQTtBQTJFUjtBQXpFUTtFQUNFLHFCQUFBO0FBMkVWO0FBckVFO0VBQ0UsZ0JBQUE7QUF1RUo7QUFyRUk7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUF1RU47QUFyRU07RUFDRTtJQUNFLHFDQUFBO0VBdUVSO0FBQ0Y7QUFwRU07RUFDRTtJQUNFLHFDQUFBO0VBc0VSO0FBQ0Y7QUFuRU07RUFDRTtJQUNFLHFDQUFBO0VBcUVSO0FBQ0Y7QUFsRU07RUFDRSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBb0VSO0FBakVVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBbUVaO0FBL0RRO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLCtFQUFBO0FBaUVWO0FBL0RVO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWlFWjtBQTlEVTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFnRVo7QUE5RFk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQWdFZDtBQTlEYztFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQWdFaEI7QUF2REU7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtBQXlESjtBQXZESTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQXlETjtBQXZETTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHlCQUFBO0VBeURSO0FBQ0Y7QUF0RE07RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUF3RFI7QUF0RFE7RUFFRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBdURWO0FBbkRNO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7QUFxRFI7QUFuRFE7RUFDRTtJQUNFLDhCQUFBO0VBcURWO0FBQ0Y7QUFsRFE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FBb0RWO0FBbERVO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBb0RaO0FBaERRO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQWtEVjtBQS9DUTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQWlEVjtBQS9DVTtFQUNFLGtCQUFBO0FBaURaO0FBOUNVO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0EseUNBQ0U7QUErQ2Q7QUEzQ1k7RUFDRTtJQUNFLGdDQUFBO0lBQ0EsNENBQ0U7RUE0Q2hCO0FBQ0Y7QUF4Q1k7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUEwQ2Q7QUF2Q1k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQXlDZDtBQXRDWTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBd0NkO0FBcENVO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFzQ1o7QUFsQ1E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFvQ1Y7QUFsQ1U7RUFDRTtJQUNFLGFBQUE7RUFvQ1o7QUFDRjtBQS9CYztFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQWlDaEI7QUE1QmM7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQThCaEI7QUE1QmdCO0VBQ0U7SUFDRSxvQkFBQTtFQThCbEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBuby1kZXNjZW5kaW5nLXNwZWNpZmljaXR5ICovXFxuQGltcG9ydCBcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDcwMHxSb2JvdG86MTAwLDMwMCw0MDBcXFwiO1xcblxcbi50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmEge1xcbiAgYWxsOiB1bnNldDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIGhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMXJlbSAxMCU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuXFxuICAgIC5sb2dvIHtcXG4gICAgICBmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB9XFxuXFxuICAgIG5hdiB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZ2FwOiAxcmVtO1xcblxcbiAgICAgIC5uYXYtaXRlbSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLWluLW91dDtcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICBtYWluIHtcXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcXG5cXG4gICAgLmZsZXgtY29udGFpbmVyIHtcXG4gICAgICBtYXJnaW46IDAgMTAlO1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICAgIGdhcDogMC4yNXJlbTtcXG5cXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcXG4gICAgICAgICYge1xcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgICAgICYge1xcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAgICAgICAmIHtcXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgLnNob3ctaXRlbSB7XFxuICAgICAgICBncmlkLXJvdzogYXV0byAvIHNwYW4gMTtcXG4gICAgICAgIGdyaWQtY29sdW1uOiBhdXRvIC8gc3BhbiAxO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgLmltZy1jb250YWluZXIge1xcbiAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmluZm8tY29udGFpbmVyIHtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCAwIDApO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiKDAgMCAwIC8gMTAwJSkgMCUsIHJnYigyNTUgMjU1IDI1NSAvIDAlKSAxMDAlKTtcXG5cXG4gICAgICAgICAgLnRpdGxlIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLnJlYWN0aW9uIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICAgICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgICAgICAgYm9yZGVyOiB1bnNldDtcXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgICAgICAgICAgICYuY29tbWVudC1idG4ge1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5zaG93LW1vZGFsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA0MCUpO1xcbiAgICB6LWluZGV4OiA5OTk5O1xcblxcbiAgICAubW9kYWwtY29udGVudCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XFxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAycmVtKTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuXFxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgICAgICAmIHtcXG4gICAgICAgICAgd2lkdGg6IDc1JTtcXG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1cmVtKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgLmNsb3NlIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMXJlbTtcXG4gICAgICAgIHJpZ2h0OiAxcmVtO1xcbiAgICAgICAgY29sb3I6ICNhYWE7XFxuICAgICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgICBmb250LXNpemU6IDI4cHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gICAgICAgICYuY2xvc2U6aG92ZXIsXFxuICAgICAgICAmLmNsb3NlOmZvY3VzIHtcXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgLm1vZGFsLWRldGFpbCB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuXFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgICAgICAgJiB7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgMWZyO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubW9kYWwtZGV0YWlsLWltZyB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGdyaWQtcm93OiBhdXRvIC8gc3BhbiAxO1xcbiAgICAgICAgICBncmlkLWNvbHVtbjogYXV0byAvIHNwYW4gMTtcXG5cXG4gICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tb2RhbC1kZXRhaWwtdGV4dCB7XFxuICAgICAgICAgIGdyaWQtcm93OiBhdXRvIC8gc3BhbiAxO1xcbiAgICAgICAgICBncmlkLWNvbHVtbjogYXV0byAvIHNwYW4gMTtcXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDJ2aDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tb2RhbC1kZXRhaWwtY29tbWVudCB7XFxuICAgICAgICAgIGdyaWQtcm93OiBhdXRvIC8gc3BhbiAxO1xcbiAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxuXFxuICAgICAgICAgIGgyIHtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgZm9ybS5hZGQtY29tbWVudCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgICAgXFxcImlucHV0XFxcIlxcbiAgICAgICAgICAgICAgXFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICBcXFwiYnRuXFxcIjtcXG5cXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgICAgICAgICAgICYge1xcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMHJlbTtcXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICAgICAgICAgICBcXFwiaW5wdXQgYnRuXFxcIlxcbiAgICAgICAgICAgICAgICAgIFxcXCJ0ZXh0IHRleHRcXFwiO1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZm9ybS1hZGQtbmFtZSB7XFxuICAgICAgICAgICAgICBncmlkLWFyZWE6IGlucHV0O1xcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5mb3JtLWFkZC1jb21tZW50IHtcXG4gICAgICAgICAgICAgIGdyaWQtYXJlYTogdGV4dDtcXG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuc3VibWl0LWNvbW1lbnQtYnRuIHtcXG4gICAgICAgICAgICAgIGdyaWQtYXJlYTogYnRuO1xcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIC5sb2FkaW5nLWNvbWVudC1pdGVtIHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgcGFkZGluZzogMWVtO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnZpZXctY29tbWVudCB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgICAgICAgICAgJiB7XFxuICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAubW9kYWwtY29udGVudC11c2VyLWNvbW1lbnQge1xcbiAgICAgICAgICAgIC51c2VyIHtcXG4gICAgICAgICAgICAgIGg0IHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuY29tbWVudC1jb250ZW50IHtcXG4gICAgICAgICAgICAgIHAge1xcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAuMjVyZW07XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAgICAgICAgICAgICAgICYge1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLjI1cmVtIDFyZW07XFxuICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAvKlxcbiAgLnNob3ctbW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDQwJSk7XFxuICAgIHotaW5kZXg6IDk5OTk7XFxuXFxuICAgIC5tb2RhbC1jb250ZW50IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICAgIG1hcmdpbjogNSUgYXV0bztcXG4gICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICBjb2xvcjogcmVkO1xcbiAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxuICAgIH1cXG5cXG4gICAgLm1vZGFsLWRldGFpbCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICAubW9kYWwtZGV0YWlsLWltZyB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGdyaWQtcm93OiBhdXRvIC8gc3BhbiAxO1xcbiAgICAgIGdyaWQtY29sdW1uOiBhdXRvIC8gc3BhbiAxO1xcblxcbiAgICAgIGltZyB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAubW9kYWwtZGV0YWlsLXRleHQge1xcbiAgICAgIGdyaWQtcm93OiBhdXRvIC8gc3BhbiAxO1xcbiAgICAgIGdyaWQtY29sdW1uOiBhdXRvIC8gc3BhbiAxO1xcbiAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICB9XFxuXFxuICAgIC5tb2RhbC1kZXRhaWwtY29tbWVudCB7XFxuICAgICAgd2lkdGg6IDcwJTtcXG4gICAgfVxcblxcbiAgICAuY2xvc2Uge1xcbiAgICAgIGNvbG9yOiAjYWFhO1xcbiAgICAgIGZsb2F0OiByaWdodDtcXG4gICAgICBmb250LXNpemU6IDI4cHg7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIH1cXG5cXG4gICAgLmNsb3NlOmhvdmVyLFxcbiAgICAuY2xvc2U6Zm9jdXMge1xcbiAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAgIC5mbGV4LWNvbnRhaW5lcixcXG4gICAgICAubW9kYWwtZGV0YWlsIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuICAqL1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ0ZW1wbGF0ZVwiOiBcInRlbXBsYXRlXCIsXG5cdFwibG9nb1wiOiBcImxvZ29cIixcblx0XCJuYXYtaXRlbVwiOiBcIm5hdi1pdGVtXCIsXG5cdFwiZmxleC1jb250YWluZXJcIjogXCJmbGV4LWNvbnRhaW5lclwiLFxuXHRcInNob3ctaXRlbVwiOiBcInNob3ctaXRlbVwiLFxuXHRcImltZy1jb250YWluZXJcIjogXCJpbWctY29udGFpbmVyXCIsXG5cdFwiaW5mby1jb250YWluZXJcIjogXCJpbmZvLWNvbnRhaW5lclwiLFxuXHRcInRpdGxlXCI6IFwidGl0bGVcIixcblx0XCJyZWFjdGlvblwiOiBcInJlYWN0aW9uXCIsXG5cdFwiY29tbWVudC1idG5cIjogXCJjb21tZW50LWJ0blwiLFxuXHRcInNob3ctbW9kYWxcIjogXCJzaG93LW1vZGFsXCIsXG5cdFwibW9kYWwtY29udGVudFwiOiBcIm1vZGFsLWNvbnRlbnRcIixcblx0XCJjbG9zZVwiOiBcImNsb3NlXCIsXG5cdFwibW9kYWwtZGV0YWlsXCI6IFwibW9kYWwtZGV0YWlsXCIsXG5cdFwibW9kYWwtZGV0YWlsLWltZ1wiOiBcIm1vZGFsLWRldGFpbC1pbWdcIixcblx0XCJtb2RhbC1kZXRhaWwtdGV4dFwiOiBcIm1vZGFsLWRldGFpbC10ZXh0XCIsXG5cdFwibW9kYWwtZGV0YWlsLWNvbW1lbnRcIjogXCJtb2RhbC1kZXRhaWwtY29tbWVudFwiLFxuXHRcImFkZC1jb21tZW50XCI6IFwiYWRkLWNvbW1lbnRcIixcblx0XCJmb3JtLWFkZC1uYW1lXCI6IFwiZm9ybS1hZGQtbmFtZVwiLFxuXHRcImZvcm0tYWRkLWNvbW1lbnRcIjogXCJmb3JtLWFkZC1jb21tZW50XCIsXG5cdFwic3VibWl0LWNvbW1lbnQtYnRuXCI6IFwic3VibWl0LWNvbW1lbnQtYnRuXCIsXG5cdFwibG9hZGluZy1jb21lbnQtaXRlbVwiOiBcImxvYWRpbmctY29tZW50LWl0ZW1cIixcblx0XCJ2aWV3LWNvbW1lbnRcIjogXCJ2aWV3LWNvbW1lbnRcIixcblx0XCJtb2RhbC1jb250ZW50LXVzZXItY29tbWVudFwiOiBcIm1vZGFsLWNvbnRlbnQtdXNlci1jb21tZW50XCIsXG5cdFwidXNlclwiOiBcInVzZXJcIixcblx0XCJjb21tZW50LWNvbnRlbnRcIjogXCJjb21tZW50LWNvbnRlbnRcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBhcGlTZXJ2aWNlIGZyb20gJy4vbW9kdWxlL2FwaVNlcnZpY2UuanMnO1xuaW1wb3J0IGRvbVNlcnZpY2UgZnJvbSAnLi9tb2R1bGUvZG9tU2VydmljZS5qcyc7XG5cbmNvbnN0IG1vdmllc1VybCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzJztcblxuY29uc3QgaW5pdFRlbXBsYXRlID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBtb3ZpZXMgPSBhd2FpdCBhcGlTZXJ2aWNlLmdldFR2U2hvd3MobW92aWVzVXJsKTtcbiAgYXdhaXQgZG9tU2VydmljZS5kaXNwbGF5VHZTaG93cyhtb3ZpZXMubGlzdCk7XG59O1xuXG5jb25zdCBpbml0ID0gYXN5bmMgKCkgPT4ge1xuICBpbml0VGVtcGxhdGUoKTtcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaW5pdCk7XG4iLCJjbGFzcyBDb21tZW50TGlzdCB7XG4gIGNvbnN0cnVjdG9yKGxpc3QgPSBbXSkge1xuICAgIHRoaXMuTGlzdCA9IGxpc3Q7XG4gIH1cblxuICBwdXNoKGNvbW1lbnQpIHtcbiAgICB0aGlzLkxpc3QucHVzaChjb21tZW50KTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudExpc3Q7IiwiaW1wb3J0IE1vdmllTGlzdCBmcm9tICcuL21vdmllTGlzdC5qcyc7XG5pbXBvcnQgTW92aWUgZnJvbSAnLi9tb3ZpZS5qcyc7XG5pbXBvcnQgQ29tbWVudExpc3QgZnJvbSAnLi9Db21tZW50TGlzdC5qcyc7XG5pbXBvcnQgQ29tbWVudCBmcm9tICcuL2NvbW1lbnQuanMnO1xuXG5jb25zdCBnZXRUdlNob3dzID0gYXN5bmMgKHVybCkgPT4ge1xuICBjb25zdCBhbGxNb3ZpZXMgPSBuZXcgTW92aWVMaXN0KCk7XG4gIGNvbnN0IG1vdmllcyA9IGF3YWl0IGZldGNoKHVybClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlKTtcbiAgbW92aWVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBhbGxNb3ZpZXMucHVzaChcbiAgICAgIG5ldyBNb3ZpZShcbiAgICAgICAgZWxlbWVudC5pZCxcbiAgICAgICAgZWxlbWVudC5uYW1lLFxuICAgICAgICBlbGVtZW50LnR5cGUsXG4gICAgICAgIGVsZW1lbnQubGFuZ3VhZ2UsXG4gICAgICAgIGVsZW1lbnQuZ2VucmVzWzBdLFxuICAgICAgICBlbGVtZW50LnJhdGluZy5hdmVyYWdlLFxuICAgICAgICBlbGVtZW50LmltYWdlLm1lZGl1bSxcbiAgICAgICAgZWxlbWVudC5zdW1tYXJ5LFxuICAgICAgKSxcbiAgICApO1xuICB9KTtcbiAgcmV0dXJuIGFsbE1vdmllcztcbn07XG5jb25zdCBnZXRUdlNob3cgPSBhc3luYyAodXJsKSA9PiB7XG4gIGNvbnN0IG1vdmllRGF0YSA9IGF3YWl0IGZldGNoKHVybClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlKTtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IE1vdmllKFxuICAgIG1vdmllRGF0YS5pZCxcbiAgICBtb3ZpZURhdGEubmFtZSxcbiAgICBtb3ZpZURhdGEudHlwZSxcbiAgICBtb3ZpZURhdGEubGFuZ3VhZ2UsXG4gICAgbW92aWVEYXRhLmdlbnJlc1swXSxcbiAgICBtb3ZpZURhdGEucmF0aW5nLmF2ZXJhZ2UsXG4gICAgbW92aWVEYXRhLmltYWdlLm1lZGl1bSxcbiAgICBtb3ZpZURhdGEuc3VtbWFyeSxcbiAgKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGdldGxpa2UgPSBhc3luYyAodXJsKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuY29uc3QgbGlrZSA9IGFzeW5jICh1cmwsIGlkKSA9PiB7XG4gIGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGlkLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRDb21tZW50cyA9IGFzeW5jICh1cmwsIGlkKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBDb21tZW50TGlzdCgpO1xuICB0cnkge1xuICAgIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgZmV0Y2goYCR7dXJsfT9pdGVtX2lkPSR7aWR9YCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3Qgb2theSByZXNwb25zZScpO1xuICAgIH0pO1xuICAgIGNvbW1lbnRzLmZvckVhY2goKGMsIGluZGV4KSA9PiB7XG4gICAgICByZXN1bHQucHVzaChuZXcgQ29tbWVudChpbmRleCwgYy51c2VybmFtZSwgYy5jb21tZW50KSk7XG4gICAgfSk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgY29tbWVudCA9IGFzeW5jICh1cmwsIGl0ZW1JZCwgdXNlcm5hbWUsIGNvbW1lbnQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpdGVtSWQsXG4gICAgICB1c2VybmFtZSxcbiAgICAgIGNvbW1lbnQsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0VHZTaG93cyxcbiAgZ2V0VHZTaG93LFxuICBnZXRsaWtlLFxuICBsaWtlLFxuICBnZXRDb21tZW50cyxcbiAgY29tbWVudCxcbn07XG4iLCJjbGFzcyBDb21tZW50IHtcbiAgY29uc3RydWN0b3IoaXRlbWlkLCB1c2VybmFtZSwgY29tbWVudCkge1xuICAgIHRoaXMuaXRlbV9pZCA9IGl0ZW1pZDtcbiAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgdGhpcy5jb21tZW50ID0gY29tbWVudDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudDsiLCJpbXBvcnQgYXBpU2VydmljZSBmcm9tICcuL2FwaVNlcnZpY2UuanMnO1xuXG5jb25zdCBjb21tZW50VXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1NmZjRUcHZmaFZOaURPNllwZVdiL2NvbW1lbnRzJztcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsZXgtY29udGFpbmVyJyk7XG5cbmNvbnN0IFNob3dJdGVtVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGxhdGUgI3Nob3ctaXRlbS10ZW1wbGF0ZScpO1xuY29uc3QgU2hvd01vZGFsVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGxhdGUgI3Nob3ctbW9kYWwtdGVtcGxhdGUnKTtcbmNvbnN0IG1vZGFsQ29udGVudFVzZXJDb21tZW50VGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGxhdGUgI21vZGFsLWNvbnRlbnQtdXNlci1jb21tZW50LXRlbXBsYXRlJyk7XG5cbmNvbnN0IGJ1aWxkRGV0YWlsVGV4dEVsZW1lbnQgPSAoZGV0YWlsVGV4dEVsZW1lbnQsIG1vdmllKSA9PiB7XG4gIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRldGFpbFRleHRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJyk7XG4gIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IG1vdmllLm5hbWU7XG5cbiAgY29uc3QgbGFuZ3VhZ2VFbGVtZW50ID0gZGV0YWlsVGV4dEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmd1YWdlJyk7XG4gIGxhbmd1YWdlRWxlbWVudC50ZXh0Q29udGVudCA9IG1vdmllLmxhbmd1YWdlO1xuXG4gIGNvbnN0IGdlbnJlc0VsZW1lbnQgPSBkZXRhaWxUZXh0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ2VucmVzJyk7XG4gIGdlbnJlc0VsZW1lbnQudGV4dENvbnRlbnQgPSBtb3ZpZS5nZW5yZXM7XG5cbiAgY29uc3QgcmF0aW5nRWxlbWVudCA9IGRldGFpbFRleHRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYXRpbmcnKTtcbiAgcmF0aW5nRWxlbWVudC50ZXh0Q29udGVudCA9IG1vdmllLnJhdGluZztcblxuICBjb25zdCB0eXBlRWxlbWVudCA9IGRldGFpbFRleHRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50eXBlJyk7XG4gIHR5cGVFbGVtZW50LmlubmVySFRNTCA9IG1vdmllLnR5cGU7XG5cbiAgY29uc3Qgc3VtbWFyeUVsZW1lbnQgPSBkZXRhaWxUZXh0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc3VtbWFyeScpO1xuICBzdW1tYXJ5RWxlbWVudC5pbm5lckhUTUwgPSBtb3ZpZS5zdW1tYXJ5O1xufTtcblxuY29uc3QgYnVpbGREZXRhaWxjb21tZW50RWxlbWVudCA9IChkZXRhaWxjb21tZW50RWxlbWVudCwgbW92aWUpID0+IHtcbiAgY29uc3QgY29tZW50Q291bnRlciA9IGRldGFpbGNvbW1lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWNvdW50ZXInKTtcbiAgY29tZW50Q291bnRlci50ZXh0Q29udGVudCA9ICcoIExvYWRpbmcuLi4gKSc7XG5cbiAgY29uc3QgY29tZW50TGlzdCA9IGRldGFpbGNvbW1lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LWNvbW1lbnQnKTtcbiAgY29uc3QgTG9hZGluZ2RpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgTG9hZGluZ2RpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbG9hZGluZy1jb21lbnQtaXRlbScpO1xuICBMb2FkaW5nZGl2RWxlbWVudC50ZXh0Q29udGVudCA9ICcoIExvYWRpbmcuLi4gKSc7XG5cbiAgYXBpU2VydmljZS5nZXRDb21tZW50cyhjb21tZW50VXJsLCBtb3ZpZS5pZCkudGhlbigoQ29tbWVudExpc3QpID0+IHtcbiAgICBjb21lbnRMaXN0LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbWVudENvdW50ZXIudGV4dENvbnRlbnQgPSBgKCAke0NvbW1lbnRMaXN0Lkxpc3QubGVuZ3RofSApYDtcbiAgICBDb21tZW50TGlzdC5MaXN0LmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IG1vZGFsQ29udGVudFVzZXJDb21tZW50RWxlbWVudCA9IG1vZGFsQ29udGVudFVzZXJDb21tZW50VGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgbW9kYWxDb250ZW50VXNlckNvbW1lbnRFbGVtZW50LmlkID0gYG1vZGFsLWNvbnRlbnQtdXNlci1jb21tZW50LSR7Y29tbWVudC5pdGVtX2lkfWA7XG5cbiAgICAgIGNvbnN0IHVzZXJOYW1lID0gbW9kYWxDb250ZW50VXNlckNvbW1lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyIGg0Jyk7XG4gICAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IGNvbW1lbnQudXNlcm5hbWU7XG5cbiAgICAgIGNvbnN0IGNvbW1lbnRDb250ZW50ID0gbW9kYWxDb250ZW50VXNlckNvbW1lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWNvbnRlbnQgcCcpO1xuICAgICAgY29tbWVudENvbnRlbnQudGV4dENvbnRlbnQgPSBjb21tZW50LmNvbW1lbnQ7XG5cbiAgICAgIGNvbWVudExpc3QuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50VXNlckNvbW1lbnRFbGVtZW50KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29tZW50TGlzdC5hcHBlbmRDaGlsZChMb2FkaW5nZGl2RWxlbWVudCk7XG59O1xuXG5jb25zdCBidWlsZE1vZGFsID0gKG1vdmllKSA9PiB7XG4gIGNvbnN0IFNob3dNb2RhbEVsZW1lbnQgPSBTaG93TW9kYWxUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgU2hvd01vZGFsRWxlbWVudC5pZCA9IGBzaG93LW1vZGFsLSR7bW92aWUuaWR9YDtcblxuICBTaG93TW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBTaG93TW9kYWxFbGVtZW50LnJlbW92ZSgpO1xuICB9KTtcblxuICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZ0VsZW1lbnQuc3JjID0gbW92aWUuaW1hZ2U7XG4gIGltZ0VsZW1lbnQuYWx0ID0gYCR7bW92aWUudGl0bGV9IFBvc3RlcmA7XG5cbiAgU2hvd01vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGV0YWlsLWltZycpLmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xuXG4gIGNvbnN0IGRldGFpbFRleHRFbGVtZW50ID0gU2hvd01vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGV0YWlsLXRleHQnKTtcbiAgYnVpbGREZXRhaWxUZXh0RWxlbWVudChkZXRhaWxUZXh0RWxlbWVudCwgbW92aWUpO1xuXG4gIGNvbnN0IGRldGFpbGNvbW1lbnRFbGVtZW50ID0gU2hvd01vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGV0YWlsLWNvbW1lbnQnKTtcbiAgYnVpbGREZXRhaWxjb21tZW50RWxlbWVudChkZXRhaWxjb21tZW50RWxlbWVudCwgbW92aWUpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChTaG93TW9kYWxFbGVtZW50KTtcbn07XG5cbmNvbnN0IGJ1aWxkU2hvd0l0ZW1FbGVtZW50ID0gKG1vdmllKSA9PiB7XG4gIGNvbnN0IFNob3dJdGVtRWxlbWVudCA9IFNob3dJdGVtVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuXG4gIFNob3dJdGVtRWxlbWVudC5pZCA9IGBzaG93LWl0ZW0tJHttb3ZpZS5pZH1gO1xuXG4gIFNob3dJdGVtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGJ1aWxkTW9kYWwobW92aWUpO1xuICB9KTtcblxuICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZ0VsZW1lbnQuc3JjID0gbW92aWUuaW1hZ2U7XG4gIGltZ0VsZW1lbnQuYWx0ID0gYCR7bW92aWUubmFtZX0gUG9zdGVyYDtcblxuICBjb25zdCBpbWdDb250YWluZXJFbGVtZW50ID0gU2hvd0l0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctY29udGFpbmVyJyk7XG5cbiAgaW1nQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChpbWdFbGVtZW50KTtcblxuICBjb25zdCB0aXRsZUVsZW1lbnQgPSBTaG93SXRlbUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG4gIHRpdGxlRWxlbWVudC5pbm5lckhUTUwgPSBtb3ZpZS5uYW1lO1xuXG4gIGNvbnN0IGNvbW1lbnRCdG5FbGVtZW50ID0gU2hvd0l0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWJ0bicpO1xuICBjb21tZW50QnRuRWxlbWVudC5kYXRhc2V0LmlkID0gbW92aWUuaWQ7XG5cbiAgcmV0dXJuIFNob3dJdGVtRWxlbWVudDtcbn07XG5cbmNvbnN0IGRpc3BsYXlUdlNob3dzID0gYXN5bmMgKG1vdmllcykgPT4ge1xuICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgbW92aWVzLmZvckVhY2goKG1vdmllKSA9PiBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRTaG93SXRlbUVsZW1lbnQobW92aWUpKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IGRpc3BsYXlUdlNob3dzIH07XG4iLCJjbGFzcyBNb3ZpZSB7XG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCB0eXBlLCBsYW5ndWFnZSwgZ2VucmVzLCByYXRpbmcsIGltYWdlLCBzdW1tYXJ5KSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgdGhpcy5nZW5yZXMgPSBnZW5yZXM7XG4gICAgdGhpcy5yYXRpbmcgPSByYXRpbmc7XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIHRoaXMuc3VtbWFyeSA9IHN1bW1hcnk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWU7XG4iLCJjbGFzcyBNb3ZpZUxpc3Qge1xuICBjb25zdHJ1Y3RvcihsaXN0ID0gW10pIHtcbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICB9XG5cbiAgcHVzaChtb3ZpZSkge1xuICAgIHRoaXMubGlzdC5wdXNoKG1vdmllKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3Q7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=