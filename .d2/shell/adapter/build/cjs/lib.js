/* eslint-disable */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

function _interopNamespace(e) {
  if (e && e.__esModule) { return e; } else {
    var n = {};
    if (e) {
      Object.keys(e).forEach(function (k) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      });
    }
    n['default'] = e;
    return n;
  }
}

var React = require('react');
var React__default = _interopDefault(React);
var uiWidgets = require('@dhis2/ui-widgets');
var appRuntime = require('@dhis2/app-runtime');
var _JSXStyle = _interopDefault(require('styled-jsx/style'));
var PropTypes = _interopDefault(require('prop-types'));
var i18n = _interopDefault(require('@dhis2/d2-i18n'));
var uiCore = require('@dhis2/ui-core');
var moment = _interopDefault(require('moment'));

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var bgColor = '#F4F6F8',
    iconColor = '#B0BEC5',
    primaryTextColor = '#000000',
    secondaryTextColor = '#494949',
    errorColor = 'red';
var _defaultExport = [".mask.jsx-1324283519{position:absolute;top:0px;left:0px;right:0px;bottom:0px;overflow:auto;overflow-y:auto;color:".concat(primaryTextColor, ";background-color:").concat(bgColor, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-width:640px;min-height:480px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}"), ".container.jsx-1324283519{text-align:center;color:black;}", ".icon.jsx-1324283519{width:96px;height:96px;color:".concat(iconColor, ";margin-bottom:24px;}"), ".message.jsx-1324283519{font-size:24px;margin-bottom:24px;}", ".link.jsx-1324283519{font-size:18px;-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;margin-bottom:24px;}", ".drawerToggle.jsx-1324283519{font-size:12px;color:".concat(secondaryTextColor, ";-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;margin-bottom:12px;}"), ".drawerVisible.jsx-1324283519{padding:8px;display:block;height:150px;width:500px;overflow:auto;overflow-y:auto;border:1px solid ".concat(secondaryTextColor, ";text-align:left;}"), ".drawerHidden.jsx-1324283519{display:none;}", ".errorIntro.jsx-1324283519{font-size:12px;line-height:1.2;color:".concat(secondaryTextColor, ";margin-bottom:8px;font-family:Menlo,Courier,monospace !important;}"), ".errorDetails.jsx-1324283519{font-size:12px;line-height:1.2;color:".concat(errorColor, ";font-family:Menlo,Courier,monospace !important;}")];
_defaultExport.__hash = "1324283519";

var translatedErrorHeading = i18n.t('An error occurred in the DHIS2 application.');

var replaceNewlinesWithBreaks = function replaceNewlinesWithBreaks(text) {
  return text.split('\n').reduce(function (out, line, i) {
    return [].concat(_toConsumableArray(out), [line, React__default.createElement("br", {
      key: i
    })]);
  }, []);
};

var FatalErrorBoundary =
/*#__PURE__*/
function (_Component) {
  _inherits(FatalErrorBoundary, _Component);

  function FatalErrorBoundary(props) {
    var _this;

    _classCallCheck(this, FatalErrorBoundary);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FatalErrorBoundary).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleTechInfoDrawer", function () {
      _this.setState({
        drawerOpen: !_this.state.drawerOpen
      });
    });

    _this.state = {
      error: null,
      errorInfo: null,
      drawerOpen: false
    };
    return _this;
  }

  _createClass(FatalErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;

      if (this.state.error) {
        return React__default.createElement("div", {
          className: "jsx-".concat(_defaultExport.__hash) + " " + "mask"
        }, React__default.createElement(_JSXStyle, {
          id: _defaultExport.__hash
        }, _defaultExport), React__default.createElement("div", {
          className: "jsx-".concat(_defaultExport.__hash) + " " + "container"
        }, React__default.createElement("div", {
          className: "jsx-".concat(_defaultExport.__hash) + " " + "message"
        }, i18n.t('Something went wrong')), React__default.createElement("div", {
          onClick: function onClick() {
            return window.location.reload();
          },
          className: "jsx-".concat(_defaultExport.__hash) + " " + "link"
        }, i18n.t('Refresh to try again')), React__default.createElement("div", {
          onClick: this.toggleTechInfoDrawer,
          className: "jsx-".concat(_defaultExport.__hash) + " " + "drawerToggle"
        }, this.state.drawerOpen ? i18n.t('Hide technical details') : i18n.t('Show technical details')), React__default.createElement("div", {
          className: "jsx-".concat(_defaultExport.__hash) + " " + ((this.state.drawerOpen ? 'drawerVisible' : 'drawerHidden') || "")
        }, React__default.createElement("div", {
          className: "jsx-".concat(_defaultExport.__hash) + " " + "errorIntro"
        }, translatedErrorHeading, React__default.createElement("br", {
          className: "jsx-".concat(_defaultExport.__hash)
        }), i18n.t('The following information may be requested by technical support.')), React__default.createElement("div", {
          className: "jsx-".concat(_defaultExport.__hash) + " " + "errorDetails"
        }, [replaceNewlinesWithBreaks(this.state.error.stack + '\n---' + this.state.errorInfo.componentStack)]))));
      }

      return children;
    }
  }]);

  return FatalErrorBoundary;
}(React.Component);
FatalErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

var Server = "";
var Username = "";
var Password = "";
var enTranslations = {
	"Please sign in": "",
	Server: Server,
	Username: Username,
	Password: Password,
	"Sign in": "",
	"An error occurred in the DHIS2 application.": "",
	"Something went wrong": "",
	"Refresh to try again": "",
	"Hide technical details": "",
	"Show technical details": "",
	"The following information may be requested by technical support.": ""
};

var Server$1 = "Servidor";
var Username$1 = "Nombre de usuario";
var Password$1 = "Contraseña";
var esTranslations = {
	"Please sign in": "Por favor iniciar sesión",
	Server: Server$1,
	Username: Username$1,
	Password: Password$1,
	"Sign in": "Iniciar sesión",
	"An error occurred in the DHIS2 application.": "",
	"Something went wrong": "",
	"Refresh to try again": "",
	"Hide technical details": "",
	"Show technical details": "",
	"The following information may be requested by technical support.": ""
};

var Server$2 = "Serveur";
var Username$2 = "Nom d'utilizateur";
var Password$2 = "Mot de passe";
var frTranslations = {
	"Please sign in": "Se connecter, s'il vous plait",
	Server: Server$2,
	Username: Username$2,
	Password: Password$2,
	"Sign in": "Connexion",
	"An error occurred in the DHIS2 application.": "",
	"Something went wrong": "",
	"Refresh to try again": "",
	"Hide technical details": "",
	"Show technical details": "",
	"The following information may be requested by technical support.": ""
};

//------------------------------------------------------------------------------
var namespace = 'default';
i18n.addResources('en', namespace, enTranslations);
i18n.addResources('es', namespace, esTranslations);
i18n.addResources('fr', namespace, frTranslations);

var staticUrl = process.env.REACT_APP_DHIS2_BASE_URL;
var LoginModal = function LoginModal(_ref2) {
  var url = _ref2.url;

  var _useState = React.useState(staticUrl || window.localStorage.DHIS2_BASE_URL || ''),
      _useState2 = _slicedToArray(_useState, 2),
      server = _useState2[0],
      setServer = _useState2[1];

  var _useState3 = React.useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      username = _useState4[0],
      setUsername = _useState4[1];

  var _useState5 = React.useState(''),
      _useState6 = _slicedToArray(_useState5, 2),
      password = _useState6[0],
      setPassword = _useState6[1];

  var _useState7 = React.useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isDirty = _useState8[0],
      setIsDirty = _useState8[1];

  var isValid = function isValid(val) {
    return val && val.length > 3;
  };

  var onSubmit =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(e) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              setIsDirty(true);

              if (!(isValid(server) && isValid(username) && isValid(password))) {
                _context.next = 13;
                break;
              }

              window.localStorage.DHIS2_BASE_URL = server;
              _context.prev = 4;
              _context.next = 7;
              return fetch("".concat(server, "/dhis-web-commons-security/login.action"), {
                method: 'POST',
                credentials: 'include',
                body: "j_username=".concat(username, "&j_password=").concat(password),
                headers: {
                  'X-Requested-With': 'XMLHttpRequest',
                  Accept: 'application/json',
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              });

            case 7:
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](4);
              console.log('TODO: This will always error and cancel the request until we get a real login endpoint!');

            case 12:
              // TODO: Hacky solution... this shouldn't require a reload
              window.location.reload();

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 9]]);
    }));

    return function onSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return React__default.createElement(uiCore.Modal, {
    open: true,
    small: true
  }, React__default.createElement("form", {
    onSubmit: onSubmit
  }, React__default.createElement(uiCore.Modal.Title, null, i18n.t('Please sign in')), React__default.createElement(uiCore.Modal.Content, null, !staticUrl && React__default.createElement(uiCore.InputField, {
    error: isDirty && !isValid(server),
    label: i18n.t('Server'),
    name: "server",
    type: "text",
    value: server,
    onChange: function onChange(_ref) {
      return setServer(_ref.target.value);
    }
  }), React__default.createElement(uiCore.InputField, {
    error: isDirty && !isValid(username),
    label: i18n.t('Username'),
    name: "j_username",
    type: "text",
    value: username,
    onChange: function onChange(_ref) {
      return setUsername(_ref.target.value);
    }
  }), React__default.createElement(uiCore.InputField, {
    error: isDirty && !isValid(password),
    label: i18n.t('Password'),
    name: "j_password",
    type: "password",
    value: password,
    onChange: function onChange(_ref) {
      return setPassword(_ref.target.value);
    }
  })), React__default.createElement(uiCore.Modal.Actions, null, React__default.createElement(uiCore.Button, {
    primary: true,
    type: "submit"
  }, i18n.t('Sign in')))));
};

i18n.setDefaultNamespace('default');

var simplifyLocale = function simplifyLocale(locale) {
  var idx = locale.indexOf('-');

  if (idx === -1) {
    return locale;
  }

  return locale.substr(0, idx);
};

var setGlobalLocale = function setGlobalLocale(locale) {
  if (locale !== 'en' && locale !== 'en-us') {
    new Promise(function (resolve) { resolve(_interopNamespace(require("moment/locale/".concat(locale)))); }).catch(function () {
      /* ignore */
    });
  }

  moment.locale(locale);
  var simplifiedLocale = simplifyLocale(locale);
  i18n.changeLanguage(simplifiedLocale);
};

var useLocale = function useLocale(locale) {
  React.useEffect(function () {
    setGlobalLocale(locale || window.navigator.language);
  }, [locale]);
};

var settingsQuery = {
  userSettings: {
    resource: 'userSettings'
  }
};
var AuthBoundary = function AuthBoundary(_ref) {
  var url = _ref.url,
      children = _ref.children;

  var _useDataQuery = appRuntime.useDataQuery(settingsQuery),
      loading = _useDataQuery.loading,
      error = _useDataQuery.error,
      data = _useDataQuery.data;

  useLocale(data && data.userSettings.keyUiLocale);

  if (loading) {
    return React__default.createElement(uiCore.ScreenCover, null, React__default.createElement(uiCore.CircularLoader, null));
  }

  if (error) {
    return React__default.createElement(LoginModal, {
      url: url
    });
  }

  return children;
};

var App = function App(_ref) {
  var url = _ref.url,
      apiVersion = _ref.apiVersion,
      appName = _ref.appName,
      children = _ref.children;
  return React__default.createElement(FatalErrorBoundary, null, React__default.createElement(appRuntime.DataProvider, {
    baseUrl: url,
    apiVersion: apiVersion
  }, React__default.createElement(uiWidgets.HeaderBar, {
    appName: appName
  }), React__default.createElement(AuthBoundary, {
    url: url
  }, children)));
};

module.exports = App;
//# sourceMappingURL=lib.js.map
