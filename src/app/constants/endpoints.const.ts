const baseUrl = 'https://api.covid19api.com/';
export const ENDPOINTS = {
    COUNTRY_ALL_STATUS: baseUrl + 'country/{cod}',
    COUNTRY_TOTAL_STATUS: baseUrl + 'total/country/{cod}',
    SUMMARY: baseUrl + 'summary',
    COUNTRY_INFO: 'https://restcountries.eu/rest/v2/alpha/{cod}'
};
