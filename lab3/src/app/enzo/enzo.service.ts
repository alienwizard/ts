import { track } from "../types/index";
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
]

export default class Enzo {
    constructor() {

    }

static getTracks(): track[] {
    console.log('tracks: ', tracks);
        return tracks;
    }
}
