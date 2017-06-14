import axios from 'axios';

const API_KEY = '6bc8f5161e5bf78b71800556fc53fec0';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast';
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(variable) {
	const url = `${ROOT_URL}?q=${variable},in&appid=${API_KEY}`;
	const request = axios.get(url);
	console.log(request);
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
