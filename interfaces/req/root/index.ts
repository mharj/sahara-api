import {IType} from '../../index';
import {IRootChannel} from '../../rootChannel';
import {AccessToken} from '../../tokens';

export enum RootReq {
	UNREGISTER = 'UNREGISTER',
	REGISTER = 'REGISTER',
}

export interface IRootUnregisterReqAction extends IType<RootReq>, IRootChannel {
	_type: RootReq.UNREGISTER;
	token: AccessToken;
}

export interface IRootRegisterReqAction extends IType<RootReq>, IRootChannel {
	_type: RootReq.REGISTER;
	token: AccessToken;
}

export type RootReqAction = IRootUnregisterReqAction | IRootRegisterReqAction;
