'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PImage = function (_React$Component) {
    _inherits(PImage, _React$Component);

    function PImage() {
        _classCallCheck(this, PImage);

        var _this = _possibleConstructorReturn(this, (PImage.__proto__ || Object.getPrototypeOf(PImage)).call(this));

        _this.state = {
            currentIndex: 0
        };
        return _this;
    }

    _createClass(PImage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (document.readyState === 'complete') {
                this.updateImage();
            }
            document.addEventListener('readystatechange', function (event) {
                if (event.target.readyState === 'complete') {
                    _this2.updateImage();
                }
            });
        }
    }, {
        key: 'updateImage',
        value: function updateImage() {
            var _this3 = this;

            var currentIndex = this.state.currentIndex;
            var srcs = this.props.srcs;

            if (currentIndex < srcs.length - 1) {
                var image = new Image();
                image.src = srcs[currentIndex];
                image.onload = function () {
                    _this3.setState({ currentIndex: currentIndex + 1 });
                };
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (this.props.onUpdate) {
                this.props.onUpdate(prevProps, prevState);
            }
            this.updateImage();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('img', {
                style: { width: '100%', heigth: '100%' },
                src: this.props.srcs[this.state.currentIndex] });
        }
    }]);

    return PImage;
}(_react2.default.Component);

PImage.propTypes = {
    srcs: _propTypes2.default.array.isRequired,
    onUpdate: _propTypes2.default.func
};

exports.default = PImage;