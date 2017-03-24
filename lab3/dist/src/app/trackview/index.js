"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_async_component_1 = require("react-async-component");
// Create async component 👇
exports.default = react_async_component_1.asyncComponent({
    resolve: () => System.import('./track-view.component')
        .catch(console.error.bind(console))
    // That resolves to 👆
});
//# sourceMappingURL=index.js.map