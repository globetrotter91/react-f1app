import axios from 'axios';

import { START_YEAR, FINISH_YEAR, BEGINNING_YEAR, API_BASE_URL } from './../config';
/**
 * Function
 * @name getDriverStandingsForAllRacesInPeriod
 * @param  startYear 
 * @param  endYear 
 * @description The function is used to fetch the seasons list from API. 
 * Using a mathematical approach for offset and limit and API doc, this seems the best way
 */
function getDriverStandingsForAllRacesInPeriod(startYear, endYear) {
	const offset = startYear - BEGINNING_YEAR;
	const limit = (endYear - startYear) + 1;
	// Here we use benifits of ES6 literals which helps us to avoid using the + to concat string
	return axios.get(`${API_BASE_URL}/driverStandings/1.json?limit=${limit}&offset=${offset}`);
}

// here we call the api fetch for start year to end year
// No tomorrow id someone wants to change the to and from years, 
// JUST go to config and change the constants.
export function getDriverStandingsForAssignment() {
	return getDriverStandingsForAllRacesInPeriod(START_YEAR, FINISH_YEAR);
}

// This function gets the races of a season
//	We can also use the limit and offset here for paginating results if needed
export function getAllRacesForYear(season) {
	return axios.get(`${API_BASE_URL}/${season}/results/1.json`);
}
