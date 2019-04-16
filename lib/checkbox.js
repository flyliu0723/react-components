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
var Content = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 0.16rem;\n    height: 0.16rem;\n    border-radius: 50%;\n    border: 0.01rem solid #969696;\n    display: inline-flex;\n    padding: 0.02rem;\n    &.checked {\n        background-color: #ec232f;\n        border: none;\n    }\n    svg {\n        width: 100%;\n        height: 100%;\n        stroke-width: 10;\n        stroke: #fff;\n        fill: none;\n    }\n"], ["\n    width: 0.16rem;\n    height: 0.16rem;\n    border-radius: 50%;\n    border: 0.01rem solid #969696;\n    display: inline-flex;\n    padding: 0.02rem;\n    &.checked {\n        background-color: #ec232f;\n        border: none;\n    }\n    svg {\n        width: 100%;\n        height: 100%;\n        stroke-width: 10;\n        stroke: #fff;\n        fill: none;\n    }\n"])));
var Entry = (function (_super) {
    __extends(Entry, _super);
    function Entry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Entry.prototype.render = function () {
        var _this = this;
        return React.createElement(Content, { className: (this.props.className || '') + (this.props.checked ? ' checked' : ''), onClick: function () { return _this.props.onChange(!_this.props.checked); } }, this.props.checked && React.createElement("svg", { viewBox: '0 0 100 100' },
            React.createElement("path", { d: 'M 20 50 l 20 20 l 40 -40' })));
    };
    return Entry;
}(React.Component));
exports.default = Entry;
var templateObject_1;
