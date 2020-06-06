// To parse this data:
//
//   import { Convert } from "./file";
//
//   const countryStats = Convert.toCountryStats(json);

export interface CountryStats {
    Country: string;
    CountryCode: string;
    Province: string;
    City: string;
    CityCode: string;
    Lat: string;
    Lon: string;
    Confirmed: number;
    Deaths: number;
    Recovered: number;
    Active: number;
    Date: Date;
}

// Converts JSON strings to/from your types
export class ConvertCountryStats {
    public static toCountryStats(json: string): CountryStats[] {
        return JSON.parse(json);
    }

    public static countryStatsToJson(value: CountryStats[]): string {
        return JSON.stringify(value);
    }
}
