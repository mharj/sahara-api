import {ActionMapperType, ChannelEnum} from '../../../interfaces';
import {IWeatherPack, WeatherReq, WeatherReqAction, WeatherReqEnumKeys, WeatherReqKey} from '../../../interfaces/req/weather';

export const actionWeatherRegister = (list: IWeatherPack[]): WeatherReqAction => {
	return {_channel: ChannelEnum.WEATHER, _type: WeatherReq.REGISTER, list};
};

export const actionWeatherUnregister = (list: IWeatherPack[]): WeatherReqAction => {
	return {_channel: ChannelEnum.WEATHER, _type: WeatherReq.UNREGISTER, list};
};

export const actionWeatherSession = (session: string): WeatherReqAction => {
	return {_channel: ChannelEnum.WEATHER, _type: WeatherReq.SESSION, session};
};

export const actionKeysMapper: ActionMapperType<WeatherReqEnumKeys, WeatherReqKey> = {
	REGISTER: {_channel: ChannelEnum.WEATHER, _type: WeatherReq.REGISTER},
	SESSION: {_channel: ChannelEnum.WEATHER, _type: WeatherReq.UNREGISTER},
	UNREGISTER: {_channel: ChannelEnum.WEATHER, _type: WeatherReq.SESSION},
};
