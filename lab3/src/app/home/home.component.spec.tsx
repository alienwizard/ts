import * as React from "react";
import Home from "./home.component";
import renderer from "react-test-renderer";

describe('home', function(){
    it('renders correctly', () => {
        const tree = renderer.create(
            <Home />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})