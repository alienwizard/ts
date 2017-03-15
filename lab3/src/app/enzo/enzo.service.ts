import { track } from "../types/index";
/* tslint:disable */
const tracks = [
    {
        "name": "Barcelona",
        "country": "Spain",
        "countryCode": "sp",
        "image": "/images/tracks/barcelona.jpg"
    },
    {
        "name": "Stockholm",
        "country": "Sweden",
        "countryCode": "se",
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
