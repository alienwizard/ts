"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const index_1 = require("./index");
exports.StandardBtn = styled_components_1.default.button `
    margin-top: 1rem;
    color: ${index_1.Colors.black};
    background-color: ${index_1.Colors.darkGray};
    border:none;
    border-radius:2px;
    transition: all .2s;
    padding: 0 3rem;

    &:hover{
        background-color: ${index_1.Colors.hoverGray};
    }
`;
exports.button = styled_components_1.css `
    margin-top: 1rem;
    color: ${index_1.Colors.black};
    background-color: ${index_1.Colors.darkGray};
    border:none;
    border-radius:2px;
    transition: all .2s;
    padding: 0 3rem;
    max-width: 150px;

    &:hover{
        background-color: ${index_1.Colors.hoverGray};
    }

    a{
        color: ${index_1.Colors.black};
    }
`;
exports.LinkWrap = styled_components_1.default.div `
    ${exports.button}
`;
//# sourceMappingURL=buttons.js.map