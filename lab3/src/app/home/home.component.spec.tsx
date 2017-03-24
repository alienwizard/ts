import * as React from "react";
import Home from "./home.component";
import * as renderer from "react-test-renderer";

describe('home', function(){
    beforeEach(function() {

    })
    it('renders correctly', () => {
        const tree = renderer.create(
            <Home />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})