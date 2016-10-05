'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = require('../../../utils/CSSClassnames');

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = require('../../../utils/Intl');

var _Intl2 = _interopRequireDefault(_Intl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  (0, _inherits3.default)(Icon, _Component);

  function Icon() {
    (0, _classCallCheck3.default)(this, Icon);
    return (0, _possibleConstructorReturn3.default)(this, (Icon.__proto__ || (0, _getPrototypeOf2.default)(Icon)).apply(this, arguments));
  }

  (0, _createClass3.default)(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props;
      var className = _props.className;
      var colorIndex = _props.colorIndex;
      var _props2 = this.props;
      var a11yTitle = _props2.a11yTitle;
      var size = _props2.size;
      var responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-platform-onedrive', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--responsive', responsive), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'platform-onedrive');

      return _react2.default.createElement(
        'svg',
        { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle },
        _react2.default.createElement('path', { fill: '#000000', fillRule: 'evenodd', d: 'M21.6924215,13.986674 C21.6982167,13.9043338 21.7023216,13.8215107 21.7023216,13.7377217 C21.7023216,11.8301331 20.1559675,10.283779 18.2483789,10.283779 C17.5498151,10.283779 16.9002691,10.4918027 16.3568479,10.8482079 C15.6998164,9.5683125 14.3676434,8.69190834 12.8299821,8.69190834 C10.6413261,8.69190834 8.86702719,10.4662072 8.86702719,12.6548633 C8.86702719,12.7364791 8.87028699,12.8172498 8.87511633,12.8976583 C8.78903338,12.8906557 8.70222602,12.8860679 8.61421133,12.8860679 C6.86550796,12.8860679 5.44797646,14.3037201 5.44797646,16.0524235 C5.44797646,17.7943658 6.85476268,19.2073094 8.59404885,19.2181754 L8.59404885,19.2186583 L22.294157,19.2186583 C22.3639409,19.1904067 22.4321553,19.1592575 22.4988002,19.1254521 C23.3892094,18.6751163 24,17.7522298 24,16.6862741 C24,15.3216239 22.9997233,14.1908343 21.6924215,13.986674 Z M8.18741857,12.2086324 C8.41282793,9.84563725 10.4089142,7.99105063 12.8299821,7.99105063 C14.3462736,7.99105063 15.7386926,8.71545137 16.6079734,9.92012979 C17.1232638,9.6982217 17.6798451,9.58292125 18.2483789,9.58292125 C18.2847197,9.58292125 18.3206982,9.58461151 18.3569183,9.58557738 C18.0967377,7.01021204 15.9223281,5 13.2783862,5 C11.276867,5 9.54542848,6.15252157 8.70886636,7.82963 C8.11980783,7.43181327 7.40977438,7.19964283 6.64541087,7.19964283 C4.60646427,7.19964283 2.95350253,8.85248384 2.95350253,10.8915512 C2.95350253,11.1656161 2.98428956,11.4324371 3.04103428,11.6894786 C1.34134869,11.8115401 -1.77635684e-15,13.2281057 -1.77635684e-15,14.9589406 C-1.77635684e-15,16.7698217 1.46799809,18.2378198 3.27887919,18.2378198 L5.42841764,18.2378198 C4.9992102,17.6150766 4.74711875,16.8619413 4.74711875,16.0524235 C4.74711875,14.0641849 6.25507961,12.421727 8.18741857,12.2086324 Z' })
      );
    }
  }]);
  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _react.PropTypes.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'PlatformOnedrive';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _react.PropTypes.string,
  colorIndex: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _react.PropTypes.bool
};
module.exports = exports['default'];