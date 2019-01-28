import {IType} from '../../index';
import {IWeatherChannel} from '../../weatherChannel';

export type WeatherReqEnumKeys = 'UNREGISTER' | 'REGISTER' | 'SESSION';

export enum WeatherReq {
	UNREGISTER = 'UNREGISTER',
	REGISTER = 'REGISTER',
	SESSION = 'SESSION',
}

export interface IWeatherPack {
	id: number;
	lang: string;
}

// key types
export type IWeatherUnregisterReqKey = IType<WeatherReq> & IWeatherChannel & {
	_type: WeatherReq.UNREGISTER;
}

export type IWeatherRegisterReqKey = IType<WeatherReq> & IWeatherChannel & {
	_type: WeatherReq.REGISTER;
}

export type IWeatherSessionReqKey = IType<WeatherReq> & IWeatherChannel & {
	_type: WeatherReq.SESSION;
}
// action types

export interface IWeatherUnregisterReqAction extends IWeatherUnregisterReqKey {
	list: IWeatherPack[];
}

export interface IWeatherRegisterReqAction extends IWeatherRegisterReqKey {
	list: IWeatherPack[];
}
export interface IWeatherSessionReqAction extends IWeatherSessionReqKey {
	session: string;
}
export type WeatherReqAction = IWeatherUnregisterReqAction | IWeatherRegisterReqAction | IWeatherSessionReqAction;
export type WeatherReqKey = IWeatherUnregisterReqKey | IWeatherRegisterReqKey | IWeatherSessionReqKey;
