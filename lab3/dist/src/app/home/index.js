"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_async_component_1 = require("react-async-component");
exports.default = react_async_component_1.asyncComponent({
    resolve: () => System.import('./home.component')
        .catch(console.error.bind(console)),
    ErrorComponent: ({ error }) => React.createElement("div", null, error.message)
});
//# sourceMappingURL=index.js.map