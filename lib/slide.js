"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Style = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    overflow: hidden;\n    position: relative;\n    .content {\n        display: flex;\n        width: 300%;\n        max-width: none;\n        & > div {\n            width: 33.33333%;\n            position: relative;\n            &:first-child {\n                margin-left: -33.33333%;\n            }\n        }\n        img {\n            width: 100%;\n        }\n    }\n    .spot {\n        width: 100%;\n        position: absolute;\n        bottom: 10px;\n        display: flex;\n        justify-content: center;\n        div {\n            width: 6px;\n            height: 6px;\n            border: 1px solid #fff;\n            border-radius: 50%;\n            margin: 0 4px;\n            transition: width 0.2s linear;\n            &.cur {\n                width: 12px;\n                border-radius: 6px;\n                background-color: #fff;\n            }\n        }\n    }\n"], ["\n    overflow: hidden;\n    position: relative;\n    .content {\n        display: flex;\n        width: 300%;\n        max-width: none;\n        & > div {\n            width: 33.33333%;\n            position: relative;\n            &:first-child {\n                margin-left: -33.33333%;\n            }\n        }\n        img {\n            width: 100%;\n        }\n    }\n    .spot {\n        width: 100%;\n        position: absolute;\n        bottom: 10px;\n        display: flex;\n        justify-content: center;\n        div {\n            width: 6px;\n            height: 6px;\n            border: 1px solid #fff;\n            border-radius: 50%;\n            margin: 0 4px;\n            transition: width 0.2s linear;\n            &.cur {\n                width: 12px;\n                border-radius: 6px;\n                background-color: #fff;\n            }\n        }\n    }\n"])));
var Entry = (function (_super) {
    __extends(Entry, _super);
    function Entry() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            cur: 0,
            slideX: 0,
            transition: 0
        };
        _this.touch = {
            startX: 0,
            startY: 0,
            ifN: false,
            direction: false,
            timer: null,
            duration: 0,
            scrollDirection: false
        };
        _this.contentRef = React.createRef();
        _this.getPrevItem = function () {
            var item = _this.props.data[_this.state.cur - 1];
            return item ? item : _this.props.data[_this.props.data.length - 1];
        };
        _this.getNextItem = function () {
            var item = _this.props.data[_this.state.cur + 1];
            return item ? item : _this.props.data[0];
        };
        _this.touchStart = function (e) {
            _this.touch.startX = e.touches[0].clientX;
            _this.touch.startY = e.touches[0].clientY;
            _this.touch.ifN = true;
            _this.touch.duration = new Date().getTime();
            window.clearInterval(_this.touch.timer);
            _this.setState({
                transition: 0
            });
        };
        _this.touchMove = function (e) {
            if (_this.touch.ifN) {
                if (_this.getGap(e.touches[0].clientX, _this.touch.startX) >=
                    _this.getGap(e.touches[0].clientY, _this.touch.startY)) {
                    _this.touch.direction = true;
                    e.currentTarget.style.transition = '';
                }
                else
                    _this.touch.direction = false;
                _this.touch.ifN = false;
            }
            else {
                if (_this.touch.direction) {
                    e.preventDefault();
                    _this.setState({
                        slideX: e.touches[0].clientX - _this.touch.startX
                    });
                }
            }
        };
        _this.touchEnd = function () {
            _this.setTimer();
            if (!_this.touch.direction)
                return;
            var time = new Date().getTime() - _this.touch.duration;
            if (time > 300 && _this.getGap(_this.state.slideX) < _this.contentRef.current.offsetWidth / 3) {
                _this.touch.scrollDirection = false;
                _this.setState({
                    transition: _this.props.speed * 0.8,
                    slideX: 0
                });
            }
            else {
                if (_this.state.slideX !== 0) {
                    _this.state.slideX > 0 ? _this.prev() : _this.next();
                }
            }
        };
        _this.prev = function () {
            _this.touch.scrollDirection = 'prev';
            _this.setState({
                transition: _this.props.speed,
                slideX: _this.contentRef.current.offsetWidth
            });
        };
        _this.next = function () {
            _this.touch.scrollDirection = 'next';
            _this.setState({
                transition: _this.props.speed,
                slideX: -_this.contentRef.current.offsetWidth
            });
        };
        _this.transitionEnd = function () {
            var cur = 0;
            if (_this.touch.scrollDirection === false) {
                cur = _this.state.cur;
            }
            else {
                if (_this.touch.scrollDirection === 'prev') {
                    if (_this.state.cur === 0) {
                        cur = _this.props.data.length - 1;
                    }
                    else {
                        cur = _this.state.cur - 1;
                    }
                    _this.props.onPrev && _this.props.onPrev(cur);
                }
                else {
                    if (_this.state.cur !== _this.props.data.length - 1) {
                        cur = _this.state.cur + 1;
                    }
                    _this.props.onNext && _this.props.onNext(cur);
                }
            }
            if (_this.state.cur !== cur) {
                _this.props.onChange && _this.props.onChange(cur);
            }
            _this.setState({
                transition: 0,
                slideX: 0,
                cur: cur
            });
        };
        _this.setTimer = function () {
            if (_this.props.time) {
                _this.touch.timer = setInterval(_this.next, _this.props.time);
            }
        };
        return _this;
    }
    Entry.prototype.componentDidMount = function () {
        this.setTimer();
    };
    Entry.prototype.render = function () {
        var _this = this;
        return React.createElement(Style, { ref: this.contentRef, className: 'react-slide' },
            React.createElement("div", { className: 'content', style: {
                    transform: "translate3d(" + this.state.slideX + "px, 0px, 0px)",
                    transition: "transform " + this.state.transition / 1000 + "s " + this.props.type
                }, onTouchStart: this.touchStart, onTouchMove: this.touchMove, onTouchEnd: this.touchEnd, onTransitionEnd: this.transitionEnd },
                React.createElement("div", null,
                    React.createElement("img", { src: this.getPrevItem() })),
                React.createElement("div", null,
                    React.createElement("img", { src: this.props.data[this.state.cur], onClick: function () { return _this.props.onClick && _this.props.onClick(_this.state.cur); } })),
                React.createElement("div", null,
                    React.createElement("img", { src: this.getNextItem() }))),
            this.props.spot && React.createElement("div", { className: 'spot' }, Array.from({
                length: this.props.data.length
            }).map(function (item, i) {
                return React.createElement("div", { className: _this.state.cur === i ? 'cur' : '', key: i });
            })));
    };
    Entry.prototype.getGap = function (x, y) {
        if (y === void 0) { y = 0; }
        return parseInt((x - y).toString().replace('-', ''));
    };
    Entry.defaultProps = {
        time: 3000,
        speed: 300,
        type: 'ease',
        spot: true
    };
    return Entry;
}(React.Component));
exports.default = Entry;
var templateObject_1;
