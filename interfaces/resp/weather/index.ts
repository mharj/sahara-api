import {IType} from '../../index';
import {IApiOpenWeatherMap} from '../../weather';
import {IWeatherChannel} from '../../weatherChannel';

export enum WeatherResp {
	DATA = 'DATA',
}
export interface IWeatherDataAction extends IType<WeatherResp>, IWeatherChannel {
	_type: WeatherResp.DATA;
	data: IApiOpenWeatherMap;
}



export type WeatherRespAction = IWeatherDataAction;
