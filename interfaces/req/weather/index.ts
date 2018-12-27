import {IType} from '../../index';
import {IWeatherChannel} from '../../weatherChannel';

export enum WeatherReq {
	UNREGISTER = 'UNREGISTER',
	REGISTER = 'REGISTER',
}

export interface IWeatherPack {
	id: number;
	lang: string;
}

export interface IWeatherUnregisterReqAction extends IType<WeatherReq>, IWeatherChannel {
	_type: WeatherReq.UNREGISTER;
	list: IWeatherPack[];
}

export interface IWeatherRegisterReqAction extends IType<WeatherReq>, IWeatherChannel {
	_type: WeatherReq.REGISTER;
	list: IWeatherPack[];
}

export type WeatherReqAction = IWeatherUnregisterReqAction | IWeatherRegisterReqAction;
