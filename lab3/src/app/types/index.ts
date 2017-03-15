export enum tireType {
    'SUPER_SOFT',
    'SOFT',
    'HARD',
    'RAIN'
}

export type track = {
    name: string;
    country: string;
    countryCode: string;
    image: string;
}

export type weather = {
    conditions: string;
    temperature: number;
}

export type carConfig = {

}