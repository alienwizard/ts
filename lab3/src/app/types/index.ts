export type tireType = 'SUPER_SOFT' | "SOFT" | 'HARD' | 'RAIN';

export enum ConditionType {
    "SUNNY",
    "CLOUDY",
    "DRIZZLE",
    "RAIN",
    "HEAVY RAIN"
}

export type track = {
    name: string;
    country: string;
    countryCode: string;
    image: string;
}

export type weather = {
    conditions: ConditionType;
    temperature: number;
}

export type suspensionConfig = {
    stiffness: number;
    damping: number;
}

export type carConfig = {
    configuration: {
        frontwing: number;
        backwing: number;
        suspension: suspensionConfig[];
        tire: tireType;
    }
}