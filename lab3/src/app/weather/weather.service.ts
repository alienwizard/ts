import { weather, ConditionType } from "../types/index";
const foreCast: weather[] = [
    {
        "conditions": ConditionType.SUNNY,
        "temperature": 28
    },
    {
        "conditions": ConditionType.RAIN,
        "temperature": 19
    }
];

export default class WeatherService {
    static getForecast(): weather[] {
        return foreCast;
    }
}
