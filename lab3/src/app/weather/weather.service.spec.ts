import { weather, ConditionType } from "../types/index";
import WeatherService from "./weather.service";
describe('Weather service', function(){
    const mockForeCast: weather[] = [
    {
        "conditions": ConditionType.SUNNY,
        "temperature": 28
    },
    {
        "conditions": ConditionType.RAIN,
        "temperature": 19
    }
];
    it('should return weather array', function(){
        const weatherList = WeatherService.getForecast();
        expect(weatherList).toEqual(mockForeCast);
    })
})