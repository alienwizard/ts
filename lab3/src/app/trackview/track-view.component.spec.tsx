import * as React from "react";
import TrackViewComponent from "./track-view.component";
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

const mockRoute = {
    params: {
        trackId: '1'
    }
}

describe('TrackView', function(){
    it('renders correctly', () => {
        const tree = renderer.create(
            <TrackViewComponent  match={mockRoute}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})