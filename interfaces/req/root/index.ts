import {IType} from '../../index';
import {IRootChannel} from '../../rootChannel';
import {AccessToken} from '../../tokens';

export type RootReqEnumKeys = 'UNREGISTER' | 'REGISTER';

export enum RootReq {
	UNREGISTER = 'UNREGISTER',
	REGISTER = 'REGISTER',
}

// key types
export type IRootUnregisterReqKey = IType<RootReq> &  IRootChannel & {
	_type: RootReq.UNREGISTER;
}
export type IRootRegisterReqKey = IType<RootReq> &  IRootChannel & {
	_type: RootReq.REGISTER;
}

// action types
export interface IRootUnregisterReqAction extends IRootUnregisterReqKey {
	token: AccessToken;
}

export interface IRootRegisterReqAction extends IRootRegisterReqKey {
	token: AccessToken;
}

export type RootReqAction = IRootUnregisterReqAction | IRootRegisterReqAction;
export type RootReqKey = IRootUnregisterReqKey | IRootRegisterReqKey;
