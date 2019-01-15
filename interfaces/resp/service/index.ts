import {IType} from '../../index';
import {IServiceChannel} from '../../serviceChannel';

export enum ServiceResp {
	LOGGED_IN = 'LOGGED_IN',
	SET_ONLINE = 'SET_ONLINE',
	SET_OFFLINE = 'SET_OFFLINE',
}

export interface IServiceLoggedInRespAction extends IType<ServiceResp>, IServiceChannel {
	_type: ServiceResp.LOGGED_IN;
}

export interface IServiceSetOnlineRespAction extends IType<ServiceResp>, IServiceChannel {
	_type: ServiceResp.SET_ONLINE;
}

export interface IServiceSetOfflineRespAction extends IType<ServiceResp>, IServiceChannel {
	_type: ServiceResp.SET_OFFLINE;
}

export type ServiceRespAction = IServiceLoggedInRespAction;

