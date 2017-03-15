"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
const tracks = [
    {
        "name": "Barcelona",
        "country": "Spain",
        "image": "/images/tracks/barcelona.jpg"
    },
    {
        "name": "Stockholm",
        "country": "Sweden",
        "image": "/images/tracks/stockholm.jpg"
    }
];
class Enzo {
    constructor() {
    }
    static getTracks() {
        console.log('tracks: ', tracks);
        return tracks;
    }
}
exports.default = Enzo;
//# sourceMappingURL=enzo.service.js.map