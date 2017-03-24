import * as React from "react";
import WeatherComponent from "./weather.component";
import * as renderer from "react-test-renderer";
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

describe('Weather display', function(){
    it('renders correctly', () => {
        const tree = renderer.create(
            <WeatherComponent forecastList={foreCast} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})