// To parse this data:
//
//   import { Convert, Summary } from "./file";
//
//   const summary = Convert.toSummary(json);

export interface Summary {
    Global: Global;
    Countries: Country[];
    Date: Date;
}

export interface Country {
    Country: string;
    CountryCode: string;
    Slug: string;
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
    Date: Date;
}

export interface Global {
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toSummary(json: string): Summary {
        return JSON.parse(json);
    }

    public static summaryToJson(value: Summary): string {
        return JSON.stringify(value);
    }
}
