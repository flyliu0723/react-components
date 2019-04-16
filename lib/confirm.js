"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var styled_components_1 = require("styled-components");
var AlertStyle = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    z-index: 9;\n    background: rgba(0, 0, 0, 0.3);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    .content {\n        width: 3rem;\n        background: #fff;\n        border-radius: 0.1rem;\n        overflow: hidden;\n        padding: 0.25rem;\n    }\n    .title {\n        margin-top: -0.18rem;\n        margin-bottom: 0.14rem;\n        height: 0.44rem;\n        line-height: 0.44rem;\n        border-bottom: 0.01rem solid #eaeaea;\n        font-size: 0.18rem;\n        font-weight: bold;\n    }\n    .text {\n        font-size: 0.15rem;\n        text-align: center;\n    }\n    .btns {\n        margin-top: 0.24rem;\n        display: flex;\n        justify-content: space-around;\n    }\n    button {\n        height: 0.36rem;\n        border-radius: 0.36rem;\n        outline: none;\n        width: 1.1rem;\n        background-color: #fff;\n        color: #e32525;\n        border: 0.01rem solid #e32525;\n    }\n    button:last-child {\n        background-color: #e32525;\n        color: #fff;\n        border: none;\n    }\n"], ["\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    z-index: 9;\n    background: rgba(0, 0, 0, 0.3);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    .content {\n        width: 3rem;\n        background: #fff;\n        border-radius: 0.1rem;\n        overflow: hidden;\n        padding: 0.25rem;\n    }\n    .title {\n        margin-top: -0.18rem;\n        margin-bottom: 0.14rem;\n        height: 0.44rem;\n        line-height: 0.44rem;\n        border-bottom: 0.01rem solid #eaeaea;\n        font-size: 0.18rem;\n        font-weight: bold;\n    }\n    .text {\n        font-size: 0.15rem;\n        text-align: center;\n    }\n    .btns {\n        margin-top: 0.24rem;\n        display: flex;\n        justify-content: space-around;\n    }\n    button {\n        height: 0.36rem;\n        border-radius: 0.36rem;\n        outline: none;\n        width: 1.1rem;\n        background-color: #fff;\n        color: #e32525;\n        border: 0.01rem solid #e32525;\n    }\n    button:last-child {\n        background-color: #e32525;\n        color: #fff;\n        border: none;\n    }\n"])));
exports.default = (function (options) { return new Promise(function (over) {
    var el = document.createElement('div');
    document.body.appendChild(el);
    var remove = function (result) {
        if (result && options.close !== undefined && !options.close()) {
            return;
        }
        over(result);
        ReactDOM.unmountComponentAtNode(el);
        el.parentNode && el.parentNode.removeChild(el);
    };
    ReactDOM.render(React.createElement(AlertStyle, null,
        React.createElement("div", { className: 'content' },
            React.createElement("h2", { className: 'title' }, options.title || '提示'),
            options.children && options.children,
            options.text && React.createElement("p", { className: 'text' }, options.text),
            React.createElement("div", { className: 'btns' },
                options.button[1] && React.createElement("button", { onClick: function () { return remove(false); } }, options.button[0]),
                React.createElement("button", { onClick: function () { return remove(true); } }, options.button[1] || options.button[0])))), el);
}); });
var templateObject_1;
