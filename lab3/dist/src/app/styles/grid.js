"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const index_1 = require("./index");
exports.ArticleHeader = styled_components_1.default.header `
    background-color:${index_1.Colors.red};
    width: 100%;
    height:120px;
    display:flex;
    justify-content:center;
    alignt-items:center;
    align-content:center;
    color: white;

    h1{

    }
`;
exports.Wrapper = styled_components_1.default.section `
    display:flex;
    flex-flow:column;
`;
exports.Container = styled_components_1.default.div `
    display:flex;
    flex-flow: column;
    width: 1100px;
    align-items:center;
`;
exports.Row = styled_components_1.default.div `
    display:flex;
    flex-flow:row;
    width:100%;
`;
exports.Section = styled_components_1.default.section `
    width:100%;
    display:flex;
    flex-flow:column;
    justify-content:center;
    align-items:center;
`;
//# sourceMappingURL=grid.js.map