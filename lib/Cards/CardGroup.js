"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.defaultProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.omit"));

var _mapToCssModules = _interopRequireDefault(require("map-to-css-modules"));

var _borderRadius = require("@bootstrap-styled/css-mixins/lib/border-radius");

var _breakpoints = require("@bootstrap-styled/css-mixins/lib/breakpoints");

var _conditional = require("@bootstrap-styled/css-mixins/lib/conditional");

var _cards = require("@bootstrap-styled/css-mixins/lib/cards");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultProps = {
  tag: 'div',
  theme: {
    '$brand-primary': '#0275d8',
    '$brand-success': '#5cb85c',
    '$brand-info': '#5bc0de',
    '$brand-warning': '#f0ad4e',
    '$brand-danger': '#d9534f',
    '$brand-inverse': '#292b2c',
    '$card-spacer-x': '1.25rem',
    '$card-spacer-y': '.75rem',
    '$card-border-width': '1px',
    '$card-border-radius': '.25rem',
    '$card-border-color': 'rgba(0, 0, 0, 0.125)',
    '$card-border-radius-inner': '',
    '$card-cap-bg': '$gray-lightest',
    '$card-bg': '$white',
    '$card-link-hover-color': '$white',
    '$card-img-overlay-padding': '1.25rem',
    '$card-columns-count-md': '2',
    '$card-columns-gap-md': '1rem',
    '$card-columns-margin-md': '$card-spacer-y',
    '$card-columns-count-lg': '2',
    '$card-columns-gap-lg': '1.15rem',
    '$card-columns-margin-lg': '$card-spacer-y',
    '$card-columns-count-xl': '2',
    '$card-columns-gap-xl': '1.25rem',
    '$card-columns-margin-xl': '$card-spacer-y',
    '$card-columns-count-xxl': '3',
    '$card-columns-gap-xxl': '1.25rem',
    '$card-columns-margin-xxl': '$card-spacer-y',
    '$card-deck-margin': '(r, detectedUnit) / 2) + detectedUni',
    '$btn-primary-bg': '$brand-primary',
    '$btn-secondary-border': '#ccc',
    '$btn-info-bg': '$brand-info',
    '$btn-success-bg': '$brand-success',
    '$btn-warning-bg': '$brand-warning',
    '$btn-danger-bg': '$brand-danger',
    '$enable-rounded': false,
    '$enable-hover-media-query': false
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.func]),

  /** Theme variables. Can be: */
  theme: _propTypes.default.shape({
    '$brand-primary': _propTypes.default.string,
    '$brand-success': _propTypes.default.string,
    '$brand-info': _propTypes.default.string,
    '$brand-warning': _propTypes.default.string,
    '$brand-danger': _propTypes.default.string,
    '$brand-inverse': _propTypes.default.string,
    '$card-spacer-x': _propTypes.default.string,
    '$card-spacer-y': _propTypes.default.string,
    '$card-border-width': _propTypes.default.string,
    '$card-border-radius': _propTypes.default.string,
    '$card-border-color': _propTypes.default.string,
    '$card-border-radius-inner': _propTypes.default.string,
    '$card-cap-bg': _propTypes.default.string,
    '$card-bg': _propTypes.default.string,
    '$card-link-hover-color': _propTypes.default.string,
    '$card-img-overlay-padding': _propTypes.default.string,
    '$card-columns-count-md': _propTypes.default.string,
    '$card-columns-gap-md': _propTypes.default.string,
    '$card-columns-margin-md': _propTypes.default.string,
    '$card-columns-count-lg': _propTypes.default.string,
    '$card-columns-gap-lg': _propTypes.default.string,
    '$card-columns-margin-lg': _propTypes.default.string,
    '$card-columns-count-xl': _propTypes.default.string,
    '$card-columns-gap-xl': _propTypes.default.string,
    '$card-columns-margin-xl': _propTypes.default.string,
    '$card-columns-count-xxl': _propTypes.default.string,
    '$card-columns-gap-xxl': _propTypes.default.string,
    '$card-columns-margin-xxl': _propTypes.default.string,
    '$card-deck-margin': _propTypes.default.string,
    '$btn-primary-bg': _propTypes.default.string,
    '$btn-secondary-border': _propTypes.default.string,
    '$btn-info-bg': _propTypes.default.string,
    '$btn-success-bg': _propTypes.default.string,
    '$btn-warning-bg': _propTypes.default.string,
    '$btn-danger-bg': _propTypes.default.string,
    '$link-color': _propTypes.default.string,
    '$link-decoration': _propTypes.default.string,
    '$link-hover-color': _propTypes.default.string,
    '$link-hover-decoration': _propTypes.default.string,
    '$enable-rounded': _propTypes.default.bool,
    '$enable-hover-media-query': _propTypes.default.bool
  }),

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes.default.object
};
exports.propTypes = propTypes;

var CardGroupUnstyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CardGroupUnstyled, _React$Component);

  function CardGroupUnstyled() {
    _classCallCheck(this, CardGroupUnstyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardGroupUnstyled).apply(this, arguments));
  }

  _createClass(CardGroupUnstyled, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _omit = (0, _lodash.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ["className", "cssModule", "tag"]);

      return _react.default.createElement(Tag, _extends({
        className: (0, _mapToCssModules.default)((0, _classnames.default)(className, 'card-group'), cssModule)
      }, attributes));
    }
  }]);

  return CardGroupUnstyled;
}(_react.default.Component);

_defineProperty(CardGroupUnstyled, "propTypes", propTypes);

_defineProperty(CardGroupUnstyled, "defaultProps", defaultProps);

var CardGroup = (0, _styledComponents.default)(CardGroupUnstyled).withConfig({
  displayName: "CardGroup",
  componentId: "ht96b6-0"
})(["", ""], function (props) {
  return "\n    ".concat((0, _cards.card)(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$card-spacer-y'], props.theme['$card-spacer-x'], props.theme['$card-bg'], props.theme['$card-border-width'], props.theme['$card-border-color'], props.theme['$card-border-radius'], props.theme['$card-cap-bg'], props.theme['$card-border-radius-inner'], props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$btn-primary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-bg'], props.theme['$btn-success-bg'], props.theme['$btn-warning-bg'], props.theme['$btn-danger-bg'], props.theme['$card-link-hover-color'], props.theme['$card-img-overlay-padding'], props.theme['$card-inverse-bg-color'], props.theme['$card-inverse-border-color']), "\n    /*\n      Card group\n    */\n      ").concat((0, _breakpoints.mediaBreakpointUp)('sm', props.theme['$grid-breakpoints'], "\n          &.card-group {\n            display: flex;\n            flex-flow: row wrap;\n        \n            .card {\n              flex: 1 0 0;\n        \n              + .card {\n                margin-left: 0;\n                border-left: 0;\n              }\n        \n            ".concat((0, _conditional.ifThen)(props.theme['$enable-rounded'], "\n                &:first-child {\n                  ".concat((0, _borderRadius.borderRightRadius)(props.theme['$enable-rounded'], '0'), "\n                  .card-img-top {\n                    border-top-right-radius: 0;\n                  }\n                  \n                  .card-img-bottom {\n                    border-bottom-right-radius: 0;\n                  }\n                }\n              \n                &:last-child {\n                  ").concat((0, _borderRadius.borderLeftRadius)(props.theme['$enable-rounded'], '0'), "\n                  \n                  .card-img-top {\n                    border-top-left-radius: 0;\n                  }\n                  \n                  .card-img-bottom {\n                    border-bottom-left-radius: 0;\n                  }\n                }\n                \n                &:not(:first-child):not(:last-child) {\n                  border-radius: 0;\n        \n                  .card-img-top,\n                  .card-img-bottom {\n                    border-radius: 0;\n                  }\n                }\n              ")), "  \n          }\n        }\n      ")), "\n  ");
});
CardGroup.defaultProps = defaultProps;
CardGroup.propTypes = propTypes;
/** @component */

var _default = CardGroup;
exports.default = _default;