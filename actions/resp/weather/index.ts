import {ChannelEnum} from '../../../interfaces';
import {WeatherResp, WeatherRespAction} from '../../../interfaces/resp/weather';
import {IApiOpenWeatherMap} from '../../../interfaces/weather';

export const actionWeatherData = (data: IApiOpenWeatherMap): WeatherRespAction => {
	return {_channel: ChannelEnum.WEATHER, _type: WeatherResp.DATA, data};
};
