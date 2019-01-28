import {IType} from '../../index';
import {IApiOpenWeatherMap} from '../../weather';
import {IWeatherChannel} from '../../weatherChannel';

export enum WeatherResp {
	UNREGISTERED = 'UNREGISTERED',
	DATA = 'DATA',
}
export interface IWeatherDataRespAction extends IType<WeatherResp>, IWeatherChannel {
	_type: WeatherResp.DATA;
	data: IApiOpenWeatherMap;
}
export interface IWeatherUnregisteredRespAction extends IType<WeatherResp>, IWeatherChannel {
	_type: WeatherResp.UNREGISTERED;
}

export type WeatherRespAction = IWeatherDataRespAction | IWeatherUnregisteredRespAction;
