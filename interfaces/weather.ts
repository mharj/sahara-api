export interface IApiOpenWeatherMap {
	coord: {lon: number; lat: number};
	weather: [{id: number; main: string; description: string; icon: string}];
	base: string;
	main: {temp: number; pressure: number; humidity: number; temp_min: number; temp_max: number};
	visibility: number;
	wind: {speed: number; deg: number};
	clouds: {[key: string]: number};
	rain?: {'1h'?: number; '3h'?: number};
	snow?: {'1h'?: number; '3h'?: number};
	dt: number;
	sys: {type: number; id: number; message: number; country: string; sunrise: number; sunset: number};
	id: number;
	name: string;
	cod: string;
}
