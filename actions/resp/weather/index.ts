import {ChannelEnum, IKeys} from '../../../interfaces';
import {WeatherResp, WeatherRespAction} from '../../../interfaces/resp/weather';
import {IApiOpenWeatherMap} from '../../../interfaces/weather';

export const actionWeatherData = (data: IApiOpenWeatherMap): WeatherRespAction => {
	return {_channel: ChannelEnum.WEATHER, _type: WeatherResp.DATA, data};
};

export const keysWeatherData = (): IKeys => {
	return {_channel: ChannelEnum.WEATHER, _type: WeatherResp.DATA};
};
