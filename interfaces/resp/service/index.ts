import {IType} from '../../index';
import {IServiceChannel} from '../../serviceChannel';

export enum ServiceResp {
	UNREGISTERED = 'UNREGISTERED',
	LOGIN = 'LOGIN',
	ERROR = 'ERROR',
}

export interface IServiceUnregisteredRespAction extends IType<ServiceResp>, IServiceChannel {
	_type: ServiceResp.UNREGISTERED;
}

export interface IServiceLoginRespAction extends IType<ServiceResp>, IServiceChannel {
	_type: ServiceResp.LOGIN;
	serviceId: string;
	serviceSecret: string;
}

export interface IServiceErrorRespAction extends IType<ServiceResp>, IServiceChannel {
	_type: ServiceResp.ERROR;
	message: string;
}

export type RootRespAction = IServiceUnregisteredRespAction | IServiceLoginRespAction | IServiceErrorRespAction;
