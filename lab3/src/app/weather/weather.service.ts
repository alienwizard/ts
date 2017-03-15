import { weather } from "../types/index";
const foreCast: weather[] = [
    {
        "conditions": "SUNNY",
        "temperature": 28
    },
    {
        "conditions": "RAIN",
        "temperature": 19
    }
];

export default class weatherService {
    constructor(){
        console.log('Weather is workinsdg');
    }
    static getForecast(): weather[]{
        return foreCast;
    }
}
