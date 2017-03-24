"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../types/index");
/* tslint:disable */
const tracks = [
    {
        "id": 1,
        "name": "Barcelona",
        "country": "Spain",
        "countryCode": "es",
        "image": "/images/tracks/barcelona.jpg",
        "color": "c60b1e"
    },
    {
        "id": 2,
        "name": "Kungens kurva",
        "country": "Sweden",
        "countryCode": "se",
        "image": "/images/tracks/stockholm.jpg",
        "color": "006aa7"
    },
    {
        "id": 3,
        "name": "Spa Francorchamps",
        "country": "Belgium",
        "countryCode": "be",
        "image": "/images/tracks/spa.jpg",
        "color": "ffd90c"
    },
    {
        "id": 4,
        "name": "Suzuka",
        "country": "Japan",
        "countryCode": "jp",
        "image": "/images/tracks/suzuka.jpg",
        "color": "ffffff"
    }
];
const carConfigs = [
    {
        "configuration": {
            "frontwing": 5,
            "backwing": 8,
            "suspension": [
                {
                    "stiffness": 90,
                    "damping": 47
                },
                {
                    "stiffness": 90,
                    "damping": 47
                },
                {
                    "stiffness": 90,
                    "damping": 47
                },
                {
                    "stiffness": 90,
                    "damping": 47
                },
            ],
            "tire": "SUPER_SOFT"
        }
    },
    {
        "configuration": {
            "frontwing": 5,
            "backwing": 8,
            "suspension": [
                {
                    "stiffness": 90,
                    "damping": 47
                },
                {
                    "stiffness": 90,
                    "damping": 47
                },
                {
                    "stiffness": 90,
                    "damping": 47
                },
                {
                    "stiffness": 90,
                    "damping": 47
                },
            ],
            "tire": "SOFT"
        }
    },
    {
        "configuration": {
            "frontwing": 5,
            "backwing": 8,
            "suspension": [
                {
                    "stiffness": 90,
                    "damping": 47
                },
                {
                    "stiffness": 90,
                    "damping": 47
                },
                {
                    "stiffness": 90,
                    "damping": 47
                },
                {
                    "stiffness": 90,
                    "damping": 47
                },
            ],
            "tire": "HARD"
        }
    },
    {
        "configuration": {
            "frontwing": 5,
            "backwing": 8,
            "suspension": [
                {
                    "stiffness": 90,
                    "damping": 47
                },
                {
                    "stiffness": 90,
                    "damping": 47
                },
                {
                    "stiffness": 90,
                    "damping": 47
                },
                {
                    "stiffness": 90,
                    "damping": 47
                },
            ],
            "tire": "RAIN"
        }
    }
];
class EnzoService {
    constructor() {
    }
    static getTracks() {
        console.log('tracks: ', tracks);
        return tracks;
    }
    static getTrack(id) {
        const track = tracks.filter((item) => (item.id === id));
        return track;
    }
    static getConfig(weather) {
        // get the correct config based on the current weather condition
        switch (weather.conditions) {
            case index_1.ConditionType.SUNNY:
                return carConfigs.find((config) => config.configuration.tire === "SUPER_SOFT");
            case index_1.ConditionType.CLOUDY:
                return carConfigs.find((config) => config.configuration.tire === "SOFT");
            case index_1.ConditionType.DRIZZLE:
                return carConfigs.find((config) => config.configuration.tire === "HARD");
            case index_1.ConditionType.RAIN:
                return carConfigs.find((config) => config.configuration.tire === "RAIN");
            default:
                return carConfigs.find((config) => config.configuration.tire === "HARD");
        }
    }
}
exports.default = EnzoService;
//# sourceMappingURL=enzo.service.js.map