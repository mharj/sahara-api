import {IType} from '../../index';
import {IServiceChannel} from '../../serviceChannel';
import {AccessToken} from '../../tokens';

export enum ServiceResp {
	UNREGISTER = 'UNREGISTER',
	REGISTER = 'REGISTER',
}

export interface IServiceUnregisterRespAction extends IType<ServiceResp>, IServiceChannel {
	_type: ServiceResp.UNREGISTER;
	token: AccessToken;
	issuer: string;
}

export interface IServiceRegisterRespAction extends IType<ServiceResp>, IServiceChannel {
	_type: ServiceResp.REGISTER;
	token: AccessToken;
	issuer: string;
}

export type ServiceRespAction = IServiceUnregisterRespAction | IServiceRegisterRespAction;

