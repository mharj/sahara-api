import {IType} from '../../index';
import {IServiceChannel} from '../../serviceChannel';

export enum ServiceResp {
	LOGGED_IN = 'LOGGED_IN',
}

export interface IServiceLoggedInRespAction extends IType<ServiceResp>, IServiceChannel {
	_type: ServiceResp.LOGGED_IN;
}

export type ServiceRespAction = IServiceLoggedInRespAction;

