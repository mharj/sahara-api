import {IType} from '../../index';
import {IServiceChannel} from '../../serviceChannel';
import {AccessToken} from '../../tokens';

export enum ServiceReq {
	UNREGISTER = 'UNREGISTER',
	REGISTER = 'REGISTER',
}

export interface IServiceUnregisterReqAction extends IType<ServiceReq>, IServiceChannel {
	_type: ServiceReq.UNREGISTER;
	token: AccessToken;
	issuer: string;
}

export interface IServiceRegisterReqAction extends IType<ServiceReq>, IServiceChannel {
	_type: ServiceReq.REGISTER;
	token: AccessToken;
	issuer: string;
}

export type ServiceReqAction = IServiceUnregisterReqAction | IServiceRegisterReqAction;
