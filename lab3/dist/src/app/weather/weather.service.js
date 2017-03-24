"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../types/index");
const foreCast = [
    {
        "conditions": index_1.ConditionType.SUNNY,
        "temperature": 28
    },
    {
        "conditions": index_1.ConditionType.RAIN,
        "temperature": 19
    }
];
class WeatherService {
    constructor() {
    }
    static getForecast() {
        return foreCast;
    }
}
exports.default = WeatherService;
//# sourceMappingURL=weather.service.js.map