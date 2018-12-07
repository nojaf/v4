"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _BootstrapProvider = _interopRequireDefault(require("@bootstrap-styled/provider/lib/BootstrapProvider"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Dfn component
 */
var children = 'Test';

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_index.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_BootstrapProvider.default, null, _react.default.createElement(_index.default, props)));
};

describe('<Dfn />', function () {
  it('should render an <Dfn> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('DfnUnstyled').length).toBe(1);
  });
  it('should render a <abbr> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('dfn').length).toBe(1);
    expect(renderedComponent.find('Dfn').length).toBe(1);
  });
});