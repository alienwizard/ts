"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
exports.placeholder = (color) => styled_components_1.css `
  &::-webkit-input-placeholder {
      ${color}
  };
  &:-moz-placeholder           {
      ${color}
  }
  &::-moz-placeholder          {
      ${color}
  }
  &:-ms-input-placeholder      {
      ${color}
  }
`;
//# sourceMappingURL=mixins.js.map