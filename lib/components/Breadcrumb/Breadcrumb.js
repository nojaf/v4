'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _borderRadius = require('../../styled/mixins/border-radius');

var _clearfix = require('../../styled/mixins/clearfix');

var _tools = require('../../styled/utilities/tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Breadcrumb
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = {
  theme: _theme2.default,
  tag: 'ol'
};

var Breadcrumb = function (_React$Component) {
  _inherits(Breadcrumb, _React$Component);

  function Breadcrumb() {
    _classCallCheck(this, Breadcrumb);

    return _possibleConstructorReturn(this, (Breadcrumb.__proto__ || Object.getPrototypeOf(Breadcrumb)).apply(this, arguments));
  }

  _createClass(Breadcrumb, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          theme = _props.theme,
          attributes = _objectWithoutProperties(_props, ['className', 'cssModule', 'tag', 'theme']);

      var classes = (0, _tools.mapToCssModules)((0, _classnames2.default)(className, 'breadcrumb'), cssModule);

      return _react2.default.createElement(Tag, _extends({}, attributes, { className: classes }));
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Breadcrumb;
}(_react2.default.Component);

// eslint-disable-next-line no-class-assign


Breadcrumb = (0, _styledComponents2.default)(Breadcrumb).withConfig({
  displayName: 'Breadcrumb__Breadcrumb',
  componentId: 'Breadcrumb__Breadcrumb-149s0ye'
})(['', ''], function (props) {
  return '\n    &.breadcrumb {\n      padding: ' + props.theme['$breadcrumb-padding-y'] + ' ' + props.theme['$breadcrumb-padding-x'] + ';\n      margin-bottom: ' + props.theme['$spacer-y'] + ';\n      list-style: none;\n      background-color: ' + props.theme['$breadcrumb-bg'] + ';\n \n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$border-radius']) + '\n            \n      ' + (0, _clearfix.clearfix)() + '\n    }\n\n    & .breadcrumb-item {\n      float: left;\n    \n      /* The separator between breadcrumbs (by default, a forward-slash: "/") */\n      + .breadcrumb-item::before {\n        display: inline-block; /* Suppress underlining of the separator in modern browsers */\n        padding-right: ' + props.theme['$breadcrumb-item-padding'] + ';\n        padding-left: ' + props.theme['$breadcrumb-item-padding'] + ';\n        color: ' + props.theme['$breadcrumb-divider-color'] + ';\n        content: ' + props.theme['$breadcrumb-divider'] + ';\n      }\n  \n      /* IE9-11 hack to properly handle hyperlink underlines for breadcrumbs built\n       without \'ul\'s. The \'::before\' pseudo-element generates an element\n       *within* the .breadcrumb-item and thereby inherits the \'text-decoration\'.\n      \n       To trick IE into suppressing the underline, we give the pseudo-element an\n       underline and then immediately remove it.\n      */\n      \n      + .breadcrumb-item:hover::before {\n        text-decoration: underline;\n      }\n      + .breadcrumb-item:hover::before {\n        text-decoration: none;\n      }\n    \n      &.active {\n        color: ' + props.theme['$breadcrumb-active-color'] + ';\n      }\n    }\n  ';
});

Breadcrumb.defaultProps = defaultProps;

exports.default = Breadcrumb;