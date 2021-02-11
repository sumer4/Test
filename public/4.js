(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/auth/ResetPassword.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/views/auth/ResetPassword.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ResetPasswordRequest',
  data: function data() {
    return {
      user: {
        email: '',
        verification_code: '',
        password: '',
        password_confirmation: ''
      },
      errors: {}
    };
  },
  created: function created() {
    document.querySelector('body').style.backgroundColor = '#343a40';
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/auth/ResetPassword.vue?vue&type=template&id=5d5dd5ac&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/views/auth/ResetPassword.vue?vue&type=template&id=5d5dd5ac& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "card card-login mx-auto mt-5" }, [
      _c("div", { staticClass: "card-header" }, [_vm._v("Reset Password")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.onSubmit($event)
              }
            }
          },
          [
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "form-label-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.email,
                      expression: "user.email"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "email",
                    id: "inputEmail",
                    placeholder: "Enter email address",
                    required: "required"
                  },
                  domProps: { value: _vm.user.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "email", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "inputEmail" } }, [
                  _vm._v("Enter email address")
                ]),
                _vm._v(" "),
                _vm.errors.email
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(_vm._s(_vm.errors.email[0]))
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "form-label-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.verification_code,
                      expression: "user.verification_code"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "number",
                    id: "verificationCode",
                    placeholder: "Enter verification code",
                    autofocus: "autofocus"
                  },
                  domProps: { value: _vm.user.verification_code },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.user,
                        "verification_code",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "verificationCode" } }, [
                  _vm._v("Enter verification code")
                ]),
                _vm._v(" "),
                _vm.errors.verification_code
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(_vm._s(_vm.errors.verification_code[0]))
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "form-label-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.password,
                      expression: "user.password"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "password",
                    id: "password",
                    placeholder: "Enter new password"
                  },
                  domProps: { value: _vm.user.password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "password", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "password" } }, [
                  _vm._v("Enter new password")
                ]),
                _vm._v(" "),
                _vm.errors.password
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(_vm._s(_vm.errors.password[0]))
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "form-label-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.password_confirmation,
                      expression: "user.password_confirmation"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "password",
                    id: "passwordConfirmation",
                    placeholder: "Confirm password"
                  },
                  domProps: { value: _vm.user.password_confirmation },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.user,
                        "password_confirmation",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "passwordConfirmation" } }, [
                  _vm._v("Confirm password")
                ]),
                _vm._v(" "),
                _vm.errors.password_confirmation
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(_vm._s(_vm.errors.password_confirmation[0]))
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                ref: "btnSubmit",
                staticClass: "btn btn-primary btn-block",
                attrs: { type: "submit" }
              },
              [_vm._v("Reset Password")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "text-center" },
          [
            _c(
              "router-link",
              {
                staticClass: "d-block small mt-3",
                attrs: { to: "/reset-password-request" }
              },
              [_vm._v("Resend verification code")]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              { staticClass: "d-block small", attrs: { to: "/login" } },
              [_vm._v("Login Page")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center mb-4" }, [
      _c("h4", [_vm._v("Reset your password")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dashboard/views/auth/ResetPassword.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/dashboard/views/auth/ResetPassword.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResetPassword_vue_vue_type_template_id_5d5dd5ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=template&id=5d5dd5ac& */ "./resources/js/components/dashboard/views/auth/ResetPassword.vue?vue&type=template&id=5d5dd5ac&");
/* harmony import */ var _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/views/auth/ResetPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResetPassword_vue_vue_type_template_id_5d5dd5ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResetPassword_vue_vue_type_template_id_5d5dd5ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/views/auth/ResetPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/views/auth/ResetPassword.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/views/auth/ResetPassword.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/auth/ResetPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/views/auth/ResetPassword.vue?vue&type=template&id=5d5dd5ac&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/views/auth/ResetPassword.vue?vue&type=template&id=5d5dd5ac& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_5d5dd5ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPassword.vue?vue&type=template&id=5d5dd5ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/auth/ResetPassword.vue?vue&type=template&id=5d5dd5ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_5d5dd5ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_5d5dd5ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);