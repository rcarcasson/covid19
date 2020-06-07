// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const baseUrl = 'https://api.covid19api.com/';
export const environment = {
  production: false,
  ENDPOINTS: {
    COUNTRY_ALL_STATUS: baseUrl + 'country/{cod}',
    COUNTRY_TOTAL_STATUS: baseUrl + 'total/country/{cod}',
    SUMMARY: baseUrl + 'summary',
    COUNTRY_INFO: 'https://restcountries.eu/rest/v2/alpha/{cod}'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
