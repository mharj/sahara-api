import {ChannelEnum, IKeys} from '../../../interfaces';
import {IWeatherPack, WeatherReq, WeatherReqAction} from '../../../interfaces/req/weather';

export const actionWeatherRegister = (list: IWeatherPack[]): WeatherReqAction => {
	return {_channel: ChannelEnum.WEATHER, _type: WeatherReq.REGISTER, list};
};

export const actionWeatherUnregister = (list: IWeatherPack[]): WeatherReqAction => {
	return {_channel: ChannelEnum.WEATHER, _type: WeatherReq.UNREGISTER, list};
};

export const keysWeatherRegister = (): IKeys => {
	return {_channel: ChannelEnum.WEATHER, _type: WeatherReq.REGISTER};
};

export const keysWeatherUnregister = (): IKeys => {
	return {_channel: ChannelEnum.WEATHER, _type: WeatherReq.UNREGISTER};
};
