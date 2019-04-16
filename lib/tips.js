"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var styled_components_1 = require("styled-components");
var Content = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: fixed;\n    width: 100%;\n    bottom: 1rem;\n    z-index: 9;\n    display: flex;\n    justify-content: center;\n    p{\n        background-color: rgba(0, 0, 0, 0.7);\n        color: #fff;\n        padding: 0.06rem 0.2rem;\n        box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.3);\n        font-size: 0.14rem;\n        font-weight: 300;\n        border-radius: 0.02rem;\n        max-width: 64%;\n        animation: tips_ .2s linear;\n    }\n    @keyframes tips_ {\n        from{\n            opacity: 0;\n        }\n        to{\n            opacity: 1;\n        }\n    }\n"], ["\n    position: fixed;\n    width: 100%;\n    bottom: 1rem;\n    z-index: 9;\n    display: flex;\n    justify-content: center;\n    p{\n        background-color: rgba(0, 0, 0, 0.7);\n        color: #fff;\n        padding: 0.06rem 0.2rem;\n        box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.3);\n        font-size: 0.14rem;\n        font-weight: 300;\n        border-radius: 0.02rem;\n        max-width: 64%;\n        animation: tips_ .2s linear;\n    }\n    @keyframes tips_ {\n        from{\n            opacity: 0;\n        }\n        to{\n            opacity: 1;\n        }\n    }\n"])));
exports.default = (function (text, time) {
    var el = document.createElement('div');
    document.body.appendChild(el);
    var Element = function () {
        return React.createElement(Content, null,
            React.createElement("p", null, text));
    };
    ReactDOM.render(React.createElement(Element, null), el);
    setTimeout(function () {
        el && ReactDOM.unmountComponentAtNode(el);
        el.parentNode && el.parentNode.removeChild(el);
    }, time || 3000);
});
var templateObject_1;
