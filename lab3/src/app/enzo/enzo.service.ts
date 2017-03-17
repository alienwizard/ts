import { track, carConfig, weather, ConditionType } from "../types/index";
/* tslint:disable */
const tracks = [
    {
        "name": "Barcelona",
        "country": "Spain",
        "countryCode": "es",
        "image": "/images/tracks/barcelona.jpg"
    },
    {
        "name": "Kungens kurva",
        "country": "Sweden",
        "countryCode": "se",
        "image": "/images/tracks/stockholm.jpg"
    },
    {
        "name": "Spa Francorchamps",
        "country": "Belgium",
        "countryCode": "be",
        "image": "/images/tracks/spa.jpg"
    },
    {
        "name": "Suzuka",
        "country": "Japan",
        "countryCode": "jp",
        "image": "/images/tracks/suzuka.jpg"
    }
]

const carConfigs: carConfig[] = [
    {
        "configuration": {
        
            "frontwing": 5,
            "backwing": 8,
            "suspension": 
            [
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
            "suspension": 
            [
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
            "suspension": 
            [
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
            "suspension": 
            [
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
]

export default class Enzo {
    constructor() {

    }

static getTracks(): track[] {
    console.log('tracks: ', tracks);
        return tracks;
    }
static getConfig(weather: weather): carConfig {
    // get the correct config based on the current weather condition
    switch(weather.conditions){
        case ConditionType.SUNNY:
             return carConfigs.find( (config) => config.configuration.tire === "SUPER_SOFT");
        case ConditionType.CLOUDY:
            return carConfigs.find( (config) => config.configuration.tire === "SOFT");
        case ConditionType.DRIZZLE:
            return carConfigs.find( (config) => config.configuration.tire === "HARD");
        case ConditionType.RAIN:
            return carConfigs.find( (config) => config.configuration.tire === "RAIN");
        default:
            return carConfigs.find( (config) => config.configuration.tire === "HARD");

    } 
}

}
