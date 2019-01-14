import {IType} from '../../index';
import {IServiceChannel} from '../../serviceChannel';

export enum ServiceReq {
	UNREGISTERED = 'UNREGISTERED',
	LOGIN = 'LOGIN',
	ERROR = 'ERROR',
}

export interface IServiceUnregisteredReqAction extends IType<ServiceReq>, IServiceChannel {
	_type: ServiceReq.UNREGISTERED;
}

export interface IServiceLoginReqAction extends IType<ServiceReq>, IServiceChannel {
	_type: ServiceReq.LOGIN;
	serviceId: string;
	serviceSecret: string;
}

export interface IServiceErrorReqAction extends IType<ServiceReq>, IServiceChannel {
	_type: ServiceReq.ERROR;
	message: string;
}

export type ServiceReqAction = IServiceUnregisteredReqAction | IServiceLoginReqAction | IServiceErrorReqAction;
