import {getContrastYIQ} from "./index";

describe("Color contrast function", function() {
    const mockColor = "ffffff";
    it("should return a hex value", function(){
        expect(getContrastYIQ(mockColor)).toEqual("black")
    })
})